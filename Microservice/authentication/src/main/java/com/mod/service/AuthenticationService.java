package com.mod.service;


import com.mod.entity.MentorDetailsEntity;
import com.mod.entity.RoleEntity;
import com.mod.entity.UserDetailsEntity;

import com.mod.repository.MentorRepository;
import com.mod.repository.RoleRepository;
import com.mod.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthenticationService {

    @Autowired
    UserRepository user;
    @Autowired
    RoleRepository actor;
    @Autowired
    MentorRepository mentor;

    public void addUser(UserDetailsEntity usr) {
        RoleEntity act = usr.getActor();
//        act.setUserDetails(usr);
        user.save(usr);
//        actor.save(act);
    }

    public void addMentor(MentorDetailsEntity ment) {
       RoleEntity act = ment.getRole();
//        act.setMentorDetails(ment);
        mentor.save(ment);
//        actor.save(act);
    }

    public List<UserDetailsEntity> getUsers() {
        List<UserDetailsEntity> list = new ArrayList<>();
        user.findAll().forEach(list::add);
        return list;
    }

    public List<MentorDetailsEntity> getMentors() {
        List<MentorDetailsEntity> list = new ArrayList<>();
        mentor.findAll().forEach(list::add);
        return list;
    }

    public UserDetailsEntity getUser(Integer id) {
        return user.findById(id).orElse(null);
    }

    public MentorDetailsEntity getMentor(Integer id) {
        return mentor.findById(id).orElse(null);
    }

    public RoleEntity getUserName(String roleType, String userName) {
        return actor.searchUserName(roleType, userName);
    }

    public UserDetailsEntity getUsersUserEmail(String userEmail) {
        return user.searchUserEmail(userEmail);
    }

    public MentorDetailsEntity getMentorsMentorEmail(String mentorEmail) {
        return mentor.searchMentorEmail(mentorEmail);
    }

    public void deleteUser(Integer id) {
        user.deleteById(id);
    }

    public void deleteMentor(Integer id) {
        mentor.deleteById(id);
    }

    public void updateRole(RoleEntity act, Integer id) {
        actor.save(act);
    }

    public void blockUser(Integer id) {
    	UserDetailsEntity usr;
    	usr=user.findById(id).get();
    	usr.setIsBlocked("blocked");
    	user.save(usr);
        
    }
   
    public void unblockUser(Integer id) {
    	UserDetailsEntity usr;
    	usr=user.findById(id).get();
    	usr.setIsBlocked("not blocked");
    	user.save(usr);
        
    }
   

    public void updateMentor(MentorDetailsEntity ment, Integer id) {
        mentor.save(ment);
    }
}
