package com.user.server.service.Dto;

import lombok.Data;

import java.io.Serializable;


@Data
public class  GameDto implements Serializable {


    private Long id;


    private String title;


    private Integer price;


    private String selectedFile;
}
