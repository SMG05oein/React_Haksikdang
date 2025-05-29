package com.ourProject.haksikdang.Controller;

import com.ourProject.haksikdang.table.User;
import com.ourProject.haksikdang.table.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TestController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/api/test")
    public String test() {
        return "테스트";
    }

    @GetMapping("/devtest")
    public List a(Model model) {
        List<User> result = userRepository.findAll();
        System.out.println(result);
        return result;
    }
}
