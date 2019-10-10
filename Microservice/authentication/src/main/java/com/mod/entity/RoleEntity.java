package com.mod.entity;

import javax.persistence.*;

@Entity
@Table(name="Role")
public class RoleEntity {
	@Id
	@GeneratedValue
	@Column(name="id")
	private Integer id;
//	public void setUserDetails(UserDetailsEntity userDetails) {
//		this.userDetails = userDetails;
//	}
	@Column(name="role_email")
	private String roleEmail;
	@Column(name="role_password")
	private String rolePassword;
	@Column(name="role_type")
	private String roleType;
	@Column(name="role_status")
	private Boolean roleStatus;
	
//	@OneToOne(targetEntity=UserDetailsEntity.class,cascade= CascadeType.ALL)
//	@JoinColumn(name="user_id")
//	private UserDetailsEntity userDetails;
//
//	@OneToOne(targetEntity=MentorDetailsEntity.class)
//	@JoinColumn(name="mentor_id")
//	private MentorDetailsEntity mentorDetails;
	

	public RoleEntity() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRoleEmail() {
		return roleEmail;
	}

	public void setRoleEmail(String roleEmail) {
		this.roleEmail = roleEmail;
	}

	public String getRolePassword() {
		return rolePassword;
	}

	public void setRolePassword(String rolePassword) {
		this.rolePassword = rolePassword;
	}

	public String getRoleType() {
		return roleType;
	}

	public void setRoleType(String roleType) {
		this.roleType = roleType;
	}

	public Boolean getRoleStatus() {
		return roleStatus;
	}

	public void setRoleStatus(Boolean roleStatus) {
		this.roleStatus = roleStatus;
	}

	public RoleEntity(Integer id, String roleEmail, String rolePassword, String roleType, Boolean roleStatus) {
		super();
		this.id = id;
		this.roleEmail = roleEmail;
		this.rolePassword = rolePassword;
		this.roleType = roleType;
		this.roleStatus = roleStatus;
	}

	

//	public void setMentorDetails(MentorDetailsEntity mentorDetails) {
//		this.mentorDetails = mentorDetails;
//	}


	

	
}
