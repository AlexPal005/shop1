package com.example.backendspring.controllers;

import com.example.backendspring.DTO.ProductDTO;
import com.example.backendspring.entities.Product;
import com.example.backendspring.services.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping
public class ProductController {

    private final ProductService productService;

    @PostMapping("/AddProduct")
    public ResponseEntity<Product> create(@RequestBody ProductDTO dto) {
        return new ResponseEntity<>(productService.create(dto), HttpStatusCode.valueOf(200));
    }

    @GetMapping("/GetProducts")
    public ResponseEntity<List<Product>> getAll() {
        return new ResponseEntity<>(productService.getAll(), HttpStatusCode.valueOf(200));
    }
}
