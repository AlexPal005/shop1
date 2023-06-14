package models;

import lombok.Data;

@Data
public class Order {
    private String surname;
    private String name;
    private String phone;
    private String email;
    private String delivery;
    private String city;
    private String address;
    private double price;

    public Order(String surname, String name, String phone, String email, String delivery, String city, String address, double price) {
        this.surname = surname;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.delivery = delivery;
        this.city = city;
        this.address = address;
        this.price = price;
    }

}
