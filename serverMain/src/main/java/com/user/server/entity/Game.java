package com.user.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String title;


    private Integer price;

    @Lob
    @Column(length=400000000)
    private String selectedFile;

}
