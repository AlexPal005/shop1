package controllers;

import dao.OrderDAO;
import dao.daoImpl.OrderDAOImpl;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import models.Order;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet(name = "AddOrderServlet", value = "/AddOrder")
public class AddOrder extends HttpServlet {
    public void init() {

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
            OrderDAO orderDAO = new OrderDAOImpl();
            orderDAO.addOrder(
                    new Order(
                            orderDataJson.getString("surname"),
                            orderDataJson.getString("name"),
                            orderDataJson.getString("phone"),
                            orderDataJson.getString("email"),
                            orderDataJson.getString("delivery"),
                            orderDataJson.getString("city"),
                            orderDataJson.getString("address"),
                            orderDataJson.getDouble("price")
                    )
            );
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println(request.getQueryString());
    }

    public void destroy() {
    }
}
