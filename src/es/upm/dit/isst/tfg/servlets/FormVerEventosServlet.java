package es.upm.dit.isst.tfg.servlets;

import java.io.IOException;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.tfg.dao.EventoDAOImplementation;
import es.upm.dit.isst.tfg.model.Evento;
import es.upm.dit.isst.tfg.model.Usuario;


@WebServlet("/FormVerEventosServlet")
public class FormVerEventosServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public FormVerEventosServlet() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		 
		Usuario  user = (Usuario) req.getSession().getAttribute("user1");
		
		
		Collection<Evento> events =  EventoDAOImplementation.getInstancia().readAll();
		
		req.getSession().setAttribute("eventos", events);
		req.getSession().setAttribute("user1", user);
		
		getServletContext().getRequestDispatcher("/VerEventos.jsp")
         .forward(req,resp);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
