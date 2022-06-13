package com.nickjames.java_three.people.repo;

import com.nickjames.java_three.people.models.Person;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PeopleRepo extends JpaRepository<Person, Long> {

    Person findByPersonId(Long id);

}
