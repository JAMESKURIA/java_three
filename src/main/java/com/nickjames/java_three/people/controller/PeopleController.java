package com.nickjames.java_three.people.controller;

import java.util.List;

import com.nickjames.java_three.people.models.Person;
import com.nickjames.java_three.people.repo.PeopleRepo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PeopleController {

    private PeopleRepo peopleRepo;

    PeopleController(PeopleRepo peopleRepo) {
        this.peopleRepo = peopleRepo;
    }

    @GetMapping("/login")
    public String getLoginPage() {
        return "login.html";
    }

    @GetMapping("/person")
    public String getPersonPage() {
        return "person.html";
    }

    @PostMapping("/saveUser")
    public String saveUserPage(Person person) {

        if (person.getPersonId() == null) {
            peopleRepo.save(person);
        } else {
            Person p = peopleRepo.findByPersonId(person.getPersonId());
            p.setIdnumber(person.getIdnumber());
            p.setName(person.getName());
            p.setPhonenumber(person.getPhonenumber());
            peopleRepo.save(p);
        }
        return "person.html";
    }

    @GetMapping("/getPeopleData")
    @ResponseBody
    public List<Person> getPeopleList() {
        return peopleRepo.findAll();
    }

    @GetMapping("/deleteperson/{id}")
    @ResponseBody
    public void deletePerson(@PathVariable Long id) {
        peopleRepo.deleteById(id);

    }

    @GetMapping("/editPerson/{id}")
    @ResponseBody
    public Person editPerson(@PathVariable Long id) {
        return peopleRepo.findByPersonId(id);

    }

}
