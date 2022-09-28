package com.example.demo.one.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/one")
public class MenuOneController {

	@GetMapping("/menu")
	public String menuOnePage(Model model) {
		
		model.addAttribute("message", "Menu One 개발 완료!");
		
		return "one/result";
	}
}
