package com.dspajic.marketplace;

import com.dspajic.marketplace.dao.UserDAO;
import com.dspajic.marketplace.entities.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class MarketplaceApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MarketplaceApiApplication.class, args);
	}

	 @Bean
	 public CommandLineRunner commandLineRunner(UserDAO userDAO) {
		return runner -> {
			createUser(userDAO);
		};
	 }

	private void createUser(UserDAO userDAO) {
		System.out.println("Creating new user object...");
		User tempUser = new User("drugidomba", "password123", "Dominik", "Spajic", "M", LocalDate.of(2001,7,30), 383611, "dominikspajic7@gmail.com", "/Users/photos/dspajic.jpeg", 1 );

		userDAO.save(tempUser);
		System.out.println("Saved user. Generated id: " + tempUser.getId());
	}

}
