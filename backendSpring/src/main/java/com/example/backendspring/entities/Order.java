package com.example.backendspring.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long orderId;
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
