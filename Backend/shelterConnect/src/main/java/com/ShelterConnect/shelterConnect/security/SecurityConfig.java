package com.ShelterConnect.shelterConnect.security;

import static org.springframework.security.config.Customizer.withDefaults;

import com.ShelterConnect.shelterConnect.service.CustomUserDetailsService;
import com.ShelterConnect.shelterConnect.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager; // not needed now

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtService jwtService;


    @Bean
    public JwtAuthFilter jwtAuthFilter(JwtService jwtService, UserDetailsService userDetailsService) {
        return new JwtAuthFilter(jwtService, userDetailsService);
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // without this part the thing ain't authenticated
        http
                // for post mapping we need to avoid the csrf thing\\
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(
                        request -> request
                                .requestMatchers("/api/signup","/api/hi", "/api/login").permitAll()
                                .anyRequest().authenticated()
                )
                // this formLogin will show in the form of layout
                //.formLogin(Customizer.withDefaults())
                // this will show an alert pop up in the website
                .addFilterBefore(jwtAuthFilter(jwtService, userDetailsService()), UsernamePasswordAuthenticationFilter.class)


                .httpBasic(Customizer.withDefaults());
        return http.build();
    }

    //@Bean
    // this is user details that are hard coded and we don’t need these like
    // see we need to get this from the database right so yes
    // we need to customize this for that we need to make a customUserDetails
    // public UserDetailsService userServices() {
    //     UserDetails meenu = User
    //             .withUsername("meenu")
    //             .password(passwordEncoder().encode("winner"))
    //             .roles("USER") // You can use "ADMIN", etc.
    //             .build();
    //     return new InMemoryUserDetailsManager(meenu);
    // }

    @Bean
    // this is the one that returns custom service which pulls user from the DB
    public UserDetailsService userDetailsService() {
        return new CustomUserDetailsService();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();

        provider.setUserDetailsService(userDetailsService());  // Make sure this method exists
        provider.setPasswordEncoder(passwordEncoder());        // Same for this one
        return provider;
    }

    //currently the project is only checking against the email or username only but for the checking of
    //credentials correctly we need to customize it accordingly
    // this thing is managed by the Authentication manager
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authentication) throws Exception {
        return authentication.getAuthenticationManager();
    }

}
