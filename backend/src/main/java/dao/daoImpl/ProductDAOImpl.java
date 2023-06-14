package dao.daoImpl;

import dao.ProductDAO;
import dataBase.DataBaseConnection;
import models.Product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.Base64;

public class ProductDAOImpl implements ProductDAO {
    private final Connection connection;

    public ProductDAOImpl() throws SQLException {
        final DataBaseConnection dataBaseConnection = new DataBaseConnection();
        this.connection = dataBaseConnection.connect();
    }

    @Override
    public void addProduct(Product product) throws SQLException {
        PreparedStatement preparedStatement = connection.prepareStatement(
                "INSERT INTO products (\"productName\", description, price, \"categoryId\", image)" +
                        "VALUES (?, ?, ?, ? , ?);"

        );
        System.out.println("base64" + Arrays.toString(Base64.getDecoder().decode(product.getImage())));
        preparedStatement.setString(1, product.getProductName());
        preparedStatement.setString(2, product.getDescription());
        preparedStatement.setDouble(3, product.getPrice());
        preparedStatement.setInt(4, 1);
        preparedStatement.setBytes(5, Base64.getDecoder().decode(product.getImage()));
        int rows = preparedStatement.executeUpdate();
        System.out.println(rows);
        preparedStatement.close();
    }

    @Override
    public void deleteProduct(int productId) throws SQLException {
        PreparedStatement preparedStatement = connection.prepareStatement(
                "DELETE FROM products WHERE \"productId\" = ?"
        );
        preparedStatement.setInt(1, productId);
        preparedStatement.executeUpdate();
        preparedStatement.close();
    }

}
