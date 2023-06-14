package controllers;

import dao.ProductDAO;
import dao.daoImpl.ProductDAOImpl;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import models.Product;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Base64;

@WebServlet(name = "AddProductAdmin", value = "/AddProductAdmin")
public class AddProductAdmin extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line).append('\n');
            }
        }
        JSONObject orderDataJson = new JSONObject(sb.toString());

        try {
            ProductDAO productDAO = new ProductDAOImpl();
            productDAO.addProduct(
                    new Product(
                            orderDataJson.getString("productName"),
                            orderDataJson.getString("description"),
                            orderDataJson.getDouble("price"),
                            orderDataJson.getString("file")
                    )
            );
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
