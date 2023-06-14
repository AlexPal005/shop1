package dao;

import models.Product;

import java.sql.SQLException;

public interface ProductDAO {
    void addProduct(Product product) throws SQLException;
}
