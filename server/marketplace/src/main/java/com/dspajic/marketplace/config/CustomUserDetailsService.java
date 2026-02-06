package com.dspajic.marketplace.config;

import com.dspajic.marketplace.dao.UsersRepository;
import com.dspajic.marketplace.entities.Users;
import lombok.NonNull;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UsersRepository userRepository;

    public CustomUserDetailsService(UsersRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @NonNull
    public UserDetails loadUserByUsername(@NonNull String username) throws UsernameNotFoundException {
        Users user = userRepository.findByUsername(username);

        if(user == null){
            throw new UsernameNotFoundException("User not found");
        }

        List<String> roles = userRepository.findAuthoritiesByUsername(username);

        return org.springframework.security.core.userdetails.User
                .builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .authorities(roles.toArray(new String[0]))
                .build();
    }

}