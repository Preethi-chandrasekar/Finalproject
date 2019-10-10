package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Technology {
     
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name="tech_id")
    private Integer techId;
    @Column(name="tech_name")
    private String techName;
    @Column(name="tech_version")
    private String version;
	public Technology() {
		super();
	}
	public Technology(Integer techId, String techName, String version) {
		super();
		this.techId = techId;
		this.techName = techName;
		this.version = version;
	}
	public Integer getTechId() {
		return techId;
	}
	public void setTechId(Integer techId) {
		this.techId = techId;
	}
	public String getTechName() {
		return techName;
	}
	public void setTechName(String techName) {
		this.techName = techName;
	}
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
    
    
    
    
    
}