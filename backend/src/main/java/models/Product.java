package models;

import lombok.Data;

@Data
public class Product {
    private int productId;
    private String productName;
    private String description;
    private double price;
    private String image;

    public Product(int productId, String productName, String description, double price, String image) {
        this.productId = productId;
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}
