package com.example.backendspring.services;

import com.example.backendspring.DTO.OrderDTO;
import com.example.backendspring.entities.Order;
import com.example.backendspring.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    public Order create(OrderDTO orderDTO) {
        Order order = Order.builder()
                .surname(orderDTO.getSurname())
                .name(orderDTO.getName())
                .phoneNumber(orderDTO.getPhoneNumber())
                .email(orderDTO.getEmail())
                .delivery(orderDTO.getDelivery())
                .city(orderDTO.getCity())
                .address(orderDTO.getAddress())
                .price(orderDTO.getPrice())
                .userId(1L)
                .build();
        return orderRepository.save(order);
    }
}
