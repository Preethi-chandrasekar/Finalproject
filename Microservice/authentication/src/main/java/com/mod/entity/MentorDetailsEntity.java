package com.mod.entity;

import javax.persistence.*;

@Entity
@Table(name="Mentordetails")
public class MentorDetailsEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="mentor_id")
	private Integer mentorId;
	@Column(name="mentor_name")
	private String mentorName;
	@Column(name="mentor_email")
	private String mentorEmail;
	@Column(name="mentor_years_exp")
	private Integer mentorYearsExp;
	@Column(name="mentor_linkdin_url")
	private String mentorLinkdinUrl;
	@Column(name="password")
	private String password;
	@Column(name="mentor_phone")
	private String mentorPhone;
	@Column(name="no_of_trainings")
	private Integer trainings;
	
	@OneToOne(targetEntity=RoleEntity.class,cascade=CascadeType.ALL)
	@JoinColumn(name="role_id")
	
	private RoleEntity role;
	
	public MentorDetailsEntity() {
		super();
	}

	public MentorDetailsEntity(Integer mentorId, String mentorName, String mentorEmail, Integer mentorYearsExp,
			String mentorLinkdinUrl, String password, String mentorPhone, Integer trainings, float rating,
			RoleEntity actor) {
		super();
		this.mentorId = mentorId;
		this.mentorName = mentorName;
		this.mentorEmail = mentorEmail;
		this.mentorYearsExp = mentorYearsExp;
		this.mentorLinkdinUrl = mentorLinkdinUrl;
		this.password = password;
		this.mentorPhone = mentorPhone;
		this.trainings = trainings;
		
		this.role = actor;
	}

	public Integer getMentorId() {
		return mentorId;
	}

	public void setMentorId(Integer mentorId) {
		this.mentorId = mentorId;
	}

	public String getMentorName() {
		return mentorName;
	}

	public void setMentorName(String mentorName) {
		this.mentorName = mentorName;
	}

	public String getMentorEmail() {
		return mentorEmail;
	}

	public void setMentorEmail(String mentorEmail) {
		this.mentorEmail = mentorEmail;
	}

	public Integer getMentorYearsExp() {
		return mentorYearsExp;
	}

	public void setMentorYearsExp(Integer mentorYearsExp) {
		this.mentorYearsExp = mentorYearsExp;
	}

	public String getMentorLinkdinUrl() {
		return mentorLinkdinUrl;
	}

	public void setMentorLinkdinUrl(String mentorLinkdinUrl) {
		this.mentorLinkdinUrl = mentorLinkdinUrl;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMentorPhone() {
		return mentorPhone;
	}

	public void setMentorPhone(String mentorPhone) {
		this.mentorPhone = mentorPhone;
	}

	public Integer getTrainings() {
		return trainings;
	}

	public void setTrainings(Integer trainings) {
		this.trainings = trainings;
	}

	

	public RoleEntity getRole() {
		return getRole();
	}

	public void setRole(RoleEntity role) {
		this.role = role;
	}

	
}
