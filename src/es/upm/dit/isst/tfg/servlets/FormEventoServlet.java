package es.upm.dit.isst.tfg.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FormEventoServlet
 */
@WebServlet("/FormEventoServlet")
public class FormEventoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public FormEventoServlet() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
		 getServletContext().getRequestDispatcher("/CreaEvento.jsp").forward(req,resp);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
