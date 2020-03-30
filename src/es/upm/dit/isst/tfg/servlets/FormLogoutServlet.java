package es.upm.dit.isst.tfg.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FormLogoutServlet
 */
@WebServlet("/FormLogoutServlet")
public class FormLogoutServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    public FormLogoutServlet() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.getSession().removeAttribute("admin");
		req.getSession().removeAttribute("tfgs");
		req.getSession().removeAttribute("tfg");
		req.getSession().removeAttribute("profesor");
		req.getSession().removeAttribute("profesores");
        req.getSession().invalidate();
		getServletContext().getRequestDispatcher("/index.html").forward(req,resp);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	}

}
