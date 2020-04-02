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
 * Servlet implementation class FormLoginServlet
 */
@WebServlet("/FormLoginServlet")
public class FormLoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private final String ADMIN_EMAIL = "";
	private final String ADMIN_PASSWORD = "";	
	
    public FormLoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }


	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		
		Collection<Usuario> usuarios =  UsuarioDAOImplementation.getInstancia().readAll();
		Collection<Evento> eventos =  EventoDAOImplementation.getInstancia().readAll();

		Usuario usuario = UsuarioDAOImplementation.getInstancia().login(email, password);
		
		
		
		if( ADMIN_EMAIL.equals(email) && ADMIN_PASSWORD.equals(password) ) {
			System.out.println("-------[LOGIN ADMIN]-------");

			req.getSession().setAttribute("admin", true);
			req.getSession().setAttribute("usuarios", usuarios);
        	req.getSession().setAttribute("eventos", eventos);
			
			getServletContext().getRequestDispatcher("/Admin.jsp").forward(req,resp);

		} else if ( null != usuario ) {
			System.out.println("-------[LOGIN USER]-------");

			req.getSession().setAttribute("usuario", usuario);
			
			getServletContext().getRequestDispatcher("/Usuario.jsp").forward(req,resp);

		} else	{
			System.out.println("-------[SALIDA]-------");
			getServletContext().getRequestDispatcher("/index.html").forward(req,resp);
		}


	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
