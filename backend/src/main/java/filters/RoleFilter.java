package filters;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.servlet.*;
import jakarta.servlet.annotation.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
import java.util.Base64;

@WebFilter(filterName = "RoleFilter")
public class RoleFilter implements Filter {

    public RoleFilter() {

    }

    public void init(FilterConfig config) throws ServletException {
    }

    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse response, FilterChain chain) throws ServletException, IOException {

        HttpServletRequest request = (HttpServletRequest) servletRequest;
        String jwtToken = request.getHeader("token");
        String[] chunks = jwtToken.split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();
        String payload = new String(decoder.decode(chunks[1]));

        JSONObject jsonUser = new JSONObject(payload);
        JSONObject roles = jsonUser.getJSONObject("realm_access");
        JSONArray rolesArr = roles.getJSONArray("roles");
        HttpServletResponse resp = (HttpServletResponse) response;
        if(!rolesArr.toList().contains("admin")){
            resp.setStatus(405);
            return;
        }
        chain.doFilter(servletRequest, response);
    }
}
