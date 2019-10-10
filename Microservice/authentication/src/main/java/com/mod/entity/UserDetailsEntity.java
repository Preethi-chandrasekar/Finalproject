package com.mod.entity;

import javax.persistence.*;

@Entity
@Table(name="Userdetails")
public class UserDetailsEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="user_id")
	@PrimaryKeyJoinColumn
	private Integer userId;
	@Column(name="user_name")
	private String userName;
	@Column(name="user_email")
	private String userEmail;
	@Column(name="user_password")
	private String userPassword;

	@OneToOne(targetEntity=RoleEntity.class,cascade=CascadeType.ALL)
	@JoinColumn(name="actor_id")
	private RoleEntity role;

	public RoleEntity getActor() {
		return role;
	}

	public UserDetailsEntity() {
		super();
	}

	public UserDetailsEntity(String userName, String userEmail, String userPassword) {
		super();
		this.userName = userName;
		this.userEmail = userEmail;
		this.userPassword = userPassword;
	}

	public void setRole(RoleEntity users) {
		this.role = users;
	}

	public Integer getUserId() {
		return userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getuserPassword() {
		return userPassword;
	}

	public void setuserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public void setIsBlocked(String string) {
		// TODO Auto-generated method stub
		
	}

}
