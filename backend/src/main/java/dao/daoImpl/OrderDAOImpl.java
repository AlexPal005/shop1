package dao.daoImpl;

import dao.OrderDAO;
import dataBase.DataBaseConnection;
import models.Order;

import java.sql.*;

public class OrderDAOImpl implements OrderDAO {
    private final Connection connection;

    public OrderDAOImpl() throws SQLException {
        final DataBaseConnection dataBaseConnection = new DataBaseConnection();
        this.connection = dataBaseConnection.connect();
    }

    @Override
    public void addOrder(Order order) throws SQLException {
        PreparedStatement preparedStatement = connection.prepareStatement(
                "INSERT INTO orders (surname, name, \"phoneNumber\", email, delivery, " +
                        "city, address, price, \"userId\")" +
                        "VALUES (?, ?, ?, ? , ? ,? ,? , ?, ?);"

        );

        preparedStatement.setString(1, order.getSurname());
        preparedStatement.setString(2, order.getName());
        preparedStatement.setString(3, order.getPhone());
        preparedStatement.setString(4, order.getEmail());
        preparedStatement.setString(5, order.getDelivery());
        preparedStatement.setString(6, order.getCity());
        preparedStatement.setString(7, order.getAddress());
        preparedStatement.setDouble(8, order.getPrice());
        preparedStatement.setInt(9, 1);
        int rows = preparedStatement.executeUpdate();
    }
}
