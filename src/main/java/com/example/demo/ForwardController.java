package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;

public class ForwardController {
     @RequestMapping(value = "/{path:[^\\.]*}")
    public String forward() {
        return "forward:/index.html";
    }
}
