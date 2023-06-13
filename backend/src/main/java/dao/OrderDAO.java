package dao;

import models.Order;

import java.sql.SQLException;

public interface OrderDAO {
    void addOrder(Order order) throws SQLException;
}
