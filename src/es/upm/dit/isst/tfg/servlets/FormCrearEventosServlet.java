package es.upm.dit.isst.tfg.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.tfg.dao.EventoDAOImplementation;
import es.upm.dit.isst.tfg.dao.UsuarioDAOImplementation;
import es.upm.dit.isst.tfg.model.Evento;
import es.upm.dit.isst.tfg.model.Usuario;

/**
 * Servlet implementation class FormCrearEventosServlet
 */
@WebServlet("/FormCrearEventosServlet")
public class FormCrearEventosServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public FormCrearEventosServlet() {
        super();
      
    }

	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		
		String name = req.getParameter("titulo");
		String descripcion = req.getParameter("descripcion");
	    Usuario  user = (Usuario) req.getSession().getAttribute("user1");
		
		
		Evento event = new Evento();
		event.setTitulo(name);
		event.setUser(user);
		event.setDescripcion(descripcion);
	    
	    EventoDAOImplementation.getInstancia().create(event);
		
		
		/*
		Collection<Evento> events =  EventoDAOImplementation.getInstancia().readAll();
		
		
		List<Evento> ev = new ArrayList<Evento>();
		ev.addAll(events);
		
		req.getSession().setAttribute("eventos", ev);
		req.getSession().setAttribute("user1", user);
		*/
        getServletContext().getRequestDispatcher("/Usuario.jsp")
                  .forward(req,resp);

		
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
