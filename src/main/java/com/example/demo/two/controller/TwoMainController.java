package com.example.demo.two.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/two")
public class TwoMainController {

	@GetMapping("/menu")
	public String twoMenuPage(Model model) {
		
		model.addAttribute("message", "두번째");
		
		return "two/result";
	}
}
