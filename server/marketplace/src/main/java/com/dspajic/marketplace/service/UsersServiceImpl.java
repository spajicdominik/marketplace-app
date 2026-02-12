package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.UsersRepository;
import com.dspajic.marketplace.dto.auth.UserRegisterDto;
import com.dspajic.marketplace.entities.UserDetails;
import com.dspajic.marketplace.entities.UserVerification;
import com.dspajic.marketplace.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class UsersServiceImpl implements UsersService{

    @Autowired
    UsersRepository repository;

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    UserVerificationService userVerificationService;

    @Autowired
    EmailService emailService;

    @Override
    public List<Users> getAllUserss() {
        return repository.getAllUserss();
    }

    @Override
    public Users getUsersById(Integer id) {
        return repository.getUsersById(id);
    }

    @Override
    public Users getUserByUsername(String username) { return repository.findByUsername(username);}

    @Override
    public Integer addUsers(Users entity) {
        return repository.addUsers(entity);
    }

    @Override
    public Integer updateUsers(Users entity) {
        return repository.updateUsers(entity);
    }

    @Override
    public void deleteUsers(Integer id) {
        repository.deleteUsers(id);
    }

    @Override
    public Integer enableUser(String email) {return repository.enableUser(email);}

    @Override
    public List<String> getAuthoritiesByUsername(String username) {
        return repository.findAuthoritiesByUsername(username);
    }

    @Override
    public Users registerNewUser(UserRegisterDto userDto) {
        UserDetails userDetails = new UserDetails();
        userDetails.setEmail(userDto.getEmail());
        userDetails.setFirstName(userDto.getFirstName());
        userDetails.setLastName(userDto.getLastName());
        userDetails.setGender(userDto.getGender());
        userDetails.setBirthDate(userDto.getBirthDate());
        userDetails.setPhoneNumber(userDto.getPhoneNumber());
        userDetailsService.addUserDetails(userDetails);

        Users user = new Users();
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setEnabled(false);
        user.setCreatedAt(LocalDateTime.now());
        UserDetails newUserDetails = userDetailsService.getUserDetailsByEmail(userDto.getEmail());
        user.setUserDetailsId(newUserDetails.getId());

        addUsers(user);

        UserVerification userVerification = new UserVerification();
        String token = UUID.randomUUID().toString();
        userVerification.setVerificationCode(token);
        userVerification.setEmail(userDto.getEmail());
        userVerification.setCreatedAt(user.getCreatedAt());
        userVerification.setExpiresAt(user.getCreatedAt().plusMinutes(15));
        userVerificationService.addUserVerification(userVerification);

        String confirmationUrl = "http://localhost:8080/auth/verify-email?token=" + token;
        emailService.sendEmail(
                userDto.getEmail(),
                "Email Verification",
                "Click the link to verify your email: " + confirmationUrl);
        return user;
    }

    @Override
    public String validateVerificationToken(String token){
        String email = userVerificationService
                .getVerificationByToken(token)
                .getEmail();
        Users user = repository.getUserByEmail(email);
        if (user == null) {
            return "invalid";
        }

        boolean isExpired = userVerificationService
                .getVerificationByToken(token)
                .getExpiresAt()
                .isBefore(LocalDateTime.now());

        if (isExpired){
            userVerificationService.deleteToken(token);
            return "token has expired";
        }

        if (user.getEnabled() == true){
            return "user already enabled";
        }

        enableUser(email);
        return "valid";
    }

}
