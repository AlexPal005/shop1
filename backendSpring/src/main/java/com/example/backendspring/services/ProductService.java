package com.example.backendspring.services;

import com.example.backendspring.DTO.ProductDTO;
import com.example.backendspring.entities.Product;
import com.example.backendspring.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Base64;
import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public Product create(ProductDTO productDTO) {
        Product product = Product.builder()
                .productName(productDTO.getProductName())
                .description(productDTO.getDescription())
                .price(productDTO.getPrice())
                .image(Base64.getDecoder().decode(productDTO.getImage()))
                .categoryId(1L)
                .build();
        return productRepository.save(product);
    }

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public void delete(Long id) {
        productRepository.deleteById(id);
    }
}
