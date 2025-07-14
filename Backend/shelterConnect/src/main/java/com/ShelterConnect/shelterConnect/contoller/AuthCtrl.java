package com.ShelterConnect.shelterConnect.contoller;

import com.ShelterConnect.shelterConnect.Dto.LoginRequest;
import com.ShelterConnect.shelterConnect.Dto.UserDto;
import com.ShelterConnect.shelterConnect.model.User;
import com.ShelterConnect.shelterConnect.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AuthCtrl {

    @Autowired
    private UserService user;

    @GetMapping("/hi")
    public String hello (){
        return "yes dear its working perfectly";
    }

    @PostMapping("/signup")
    public void saveUser(@RequestBody User u) {
        user.saveInfo(u);
    }


    @PostMapping("/login")
    public String checkUser(@RequestBody LoginRequest request) {
        return user.checkLogin(request);
    }

}
