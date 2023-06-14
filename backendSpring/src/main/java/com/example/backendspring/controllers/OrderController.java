package com.example.backendspring.controllers;

import com.example.backendspring.DTO.OrderDTO;
import com.example.backendspring.entities.Order;
import com.example.backendspring.services.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/AddOrder")
    public ResponseEntity<Order> create(@RequestBody OrderDTO dto) {
        return new ResponseEntity<>(orderService.create(dto), HttpStatusCode.valueOf(200));
    }
}
