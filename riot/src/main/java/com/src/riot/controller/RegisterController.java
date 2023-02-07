package com.src.riot.controller;


import com.src.riot.model.User;
import com.src.riot.model.types.RoleName;
import com.src.riot.payload.ApiResponse;
import com.src.riot.payload.JwtAuthenticationResponse;
import com.src.riot.payload.LoginRequest;
import com.src.riot.payload.SignUpRequest;
import com.src.riot.service.DAO.RoleRepository;
import com.src.riot.service.DAO.UserRepository;
import com.src.riot.service.UserService;
import com.src.riot.service.security.JwtTokenProvider;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;


@RestController

@RequestMapping("/api/auth")
public class RegisterController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtTokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest, HttpServletRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsernameOrEmail(),
                        loginRequest.getPassword()
                )
        );
        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody SignUpRequest signUpRequest) {
        if (userService.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity(new ApiResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }
        User user = new User(signUpRequest.getUsername(), signUpRequest.getUserDateOfBirth(),
                signUpRequest.getEmail(), signUpRequest.getPassword(), RoleName.ROLE_USER);
        user.setUserPassword(passwordEncoder.encode(user.getUserPassword()));
        User result = userService.save(user);
        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/api")
                .buildAndExpand(result.getUsername()).toUri();
        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
    }

    @GetMapping("/logout")
    public  ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);}
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        return ResponseEntity.ok("User logout success");
    }
}
