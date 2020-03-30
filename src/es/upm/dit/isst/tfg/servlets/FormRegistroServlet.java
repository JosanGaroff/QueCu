package es.upm.dit.isst.tfg.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.tfg.dao.UsuarioDAOImplementation;
import es.upm.dit.isst.tfg.model.Usuario;

/**
 * Servlet implementation class FormRegistroServlet
 */
@WebServlet("/FormRegistroServlet")
public class FormRegistroServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public FormRegistroServlet() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		String descripcion = req.getParameter("descripcion");
		
		Usuario user = new Usuario();
		user.setEmail(email);
		user.setPassword(password);
		user.setDescripcion(descripcion);
		
		UsuarioDAOImplementation.getInstancia().create(user);
		/*
		List<Usuario> lp = new ArrayList<Usuario>();
		lp.addAll((List<Usuario>)        
	    req.getSession().getAttribute("usuarios"));
		lp.add (user);
		req.getSession().setAttribute("usuarios", lp);

		req.getSession().setAttribute("user", user);
		
		getServletContext().getRequestDispatcher("/Usuario.jsp").forward(req,resp);
		*/
		
		req.getSession().setAttribute("user", user);
		getServletContext().getRequestDispatcher("/UsuarioInicio.jsp").forward(req,resp);
		

	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
