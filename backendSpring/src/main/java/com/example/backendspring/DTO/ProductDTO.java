package com.example.backendspring.DTO;

import lombok.Data;

@Data
public class ProductDTO {
    private String productName;
    private String description;
    private double price;
    private byte[] image;
}
