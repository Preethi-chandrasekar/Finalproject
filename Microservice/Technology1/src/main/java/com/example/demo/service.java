package com.example.demo;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class service {

	@Autowired
	private Repository sr;
	
	public List<Technology> getTechnology() {
		List<Technology> ls=new ArrayList<>();
		sr.findAll().forEach(ls::add);
		return ls;
	}
	
	public Technology getTechnology(Integer id) {
		// TODO Auto-generated method stub
		//return ls.stream().filter(t->t.getStateid().equals(id)).findFirst().get();
		return sr.findById(id).orElse(null);
	}
	
	public void addTechnology(Technology t) {
		sr.save(t);
	}
	public void updateTechnology(Technology t,Integer id) {
		sr.save(t);
	}
	public void deleteTechnology(Integer id) {
		sr.deleteById(id);
	}


	

	
	
}