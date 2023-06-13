package controllers;

import com.google.gson.Gson;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import dataBase.DataBaseConnection;
import models.Product;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Base64;

@WebServlet(name = "ProductServlet", value = "/GetProducts")
public class GetProducts extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        DataBaseConnection dataBaseConnection = new DataBaseConnection();
        Connection connection = dataBaseConnection.connect();
        try {
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(
                    "SELECT * FROM products\n" +
                            "WHERE \"categoryId\" = 1;"
            );
            ArrayList<Product> products = new ArrayList<>();
            while (rs.next()) {
                Product product = new Product(
                        rs.getInt("productId"),
                        rs.getString("productName"),
                        rs.getString("description"),
                        rs.getDouble("price"),
                        Base64.getEncoder().encodeToString(rs.getBytes("image"))
                );
                products.add(product);
            }

            String productsJson = new Gson().toJson(products);
            PrintWriter out = response.getWriter();

            System.out.println(request.getQueryString());
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            out.print(productsJson);
            out.flush();
            stmt.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}
