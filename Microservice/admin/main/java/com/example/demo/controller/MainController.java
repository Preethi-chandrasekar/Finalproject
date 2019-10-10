package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.Mentor;
import com.example.demo.model.Payment;
import com.example.demo.model.Technology;
import com.example.demo.model.UserDetails;
import com.example.demo.service.AdminServices;

@Controller
@CrossOrigin(origins="http://localhost:4200")
public class MainController {
	@Autowired
	private AdminServices adminServices;
	
	@GetMapping("/findpayment")
	public @ResponseBody List<Payment> findpayment(){
		return adminServices.findPayment();
	}
	@GetMapping("/findadmintechnology")
	public  @ResponseBody List<Technology> findtechnology(){
		return adminServices.findTechnology();
	}
	@GetMapping("/finduser")
	public  @ResponseBody List<UserDetails> finduser(){
		return adminServices.findUser();
	}
	@GetMapping("/findmentor")
	public  @ResponseBody List<Mentor> findmentor(){
		return adminServices.findMentor();
	}
	@GetMapping("/savetechnology/{technology}/{duration}")
	public @ResponseBody String savetechnology(@PathVariable String technology,@PathVariable String duration) {
		Technology t=new Technology();
		t.setTechnology(technology);
		t.setDuration(duration);
		
		adminServices.savetechnology(t);
		return "stored";
		
	}
	@GetMapping("/userblock/{username}")
	public @ResponseBody String userblock(@PathVariable String username){
		
 adminServices.userBlock(username);
 return "deleted";
	}
	@GetMapping("/userunblock/{username}")
	public @ResponseBody String userunblock(@PathVariable String username){
		
 adminServices.userUnBlock(username);
 return "added";
	}

}
