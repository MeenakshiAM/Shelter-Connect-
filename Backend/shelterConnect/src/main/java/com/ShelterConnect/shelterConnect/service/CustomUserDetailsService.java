package com.ShelterConnect.shelterConnect.service;

import com.ShelterConnect.shelterConnect.CustomUserDetails;
import com.ShelterConnect.shelterConnect.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import com.ShelterConnect.shelterConnect.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Objects;

public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        return new CustomUserDetails(user); // ← This class wraps your User and implements UserDetails
    }

}
