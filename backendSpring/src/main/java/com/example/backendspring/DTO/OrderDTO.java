package com.example.backendspring.DTO;

import lombok.Data;

@Data
public class OrderDTO {
    private String surname;
    private String name;
    private String phoneNumber;
    private String email;
    private String delivery;
    private String city;
    private String address;
    private double price;
    private Long userId;
}
