package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Controller {
	
	@Autowired
	private service s;
	
	@RequestMapping("/technology")
	public List<Technology> getTechnology()
	{
		return s.getTechnology();
	}
	@RequestMapping("/technology/{id}")
	public Technology getTechnology(@PathVariable Integer id)
	{
		return s.getTechnology(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/technology")
	public void addTechnology(@RequestBody Technology t)
	{
		 s.addTechnology(t);
	}
	@RequestMapping(method=RequestMethod.PUT,value="/technology/{id}")
	public void updateTechnology(@RequestBody Technology t,@PathVariable Integer id)
	{
		 s.updateTechnology(t,id);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/technology/{id}")
	public void deleteTechnology(@PathVariable Integer id)
	{
		 s.deleteTechnology(id);
	}
}
