package com.nickjames.java_three.people.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users_table")
@Getter
@Setter

public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long personId;

    @Column(name = "user_name")
    private String name;

    @Column(name = "user_idnumber")
    private int idnumber;

    @Column(name = "user_phonenumber")
    private int phonenumber;

}
