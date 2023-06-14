package com.example.backendspring.entities;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "products")
public class Product {
    private String productName;
    private String description;
    private double price;
    private byte[] image;
    private Long categoryId;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
}
