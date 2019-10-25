package com.wu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(allowCredentials ="true" ,allowedHeaders = "*")
public class LoginController {
    @RequestMapping("/login")
    public String Login(@RequestParam String username,
                        @RequestParam String password){
        if("1".equals(username) && "1".equals(password))
            return "登录成功！";
        return "登录失败！";
    }

    @RequestMapping("/test")
    public String Test(){
        return "xxx";
    }
}
