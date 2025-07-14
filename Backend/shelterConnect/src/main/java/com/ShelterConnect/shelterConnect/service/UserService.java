package com.ShelterConnect.shelterConnect.service;

import com.ShelterConnect.shelterConnect.Dto.LoginRequest;
import com.ShelterConnect.shelterConnect.model.User;
import com.ShelterConnect.shelterConnect.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;


    public List<User> getAllUser() {
        return repo.findAll();
    }

    public void saveInfo(User u){
        String hashedPassword=passwordEncoder.encode(u.getPassword());
        u.setPassword(hashedPassword);
        repo.save(u);
    }

    public String checkLogin(LoginRequest user) {
        Optional<User> userOptional = repo.findByEmail(user.getEmail());
        Authentication authenticate = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getEmail(), user.getPassword()
                )
        );

        if(authenticate.isAuthenticated()) {
            return jwtService.generateToken(user);
        }
        return "failure";
    }


}
