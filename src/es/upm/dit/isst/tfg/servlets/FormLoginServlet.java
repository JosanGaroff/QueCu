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

import es.upm.dit.isst.tfg.dao.UsuarioDAOImplementation;
import es.upm.dit.isst.tfg.model.Usuario;

/**
 * Servlet implementation class FormLoginServlet
 */
@WebServlet("/FormLoginServlet")
public class FormLoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private final String ADMIN_EMAIL = "root";
	private final String ADMIN_PASSWORD = "root";	
	
    public FormLoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }


	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		Usuario user1 = UsuarioDAOImplementation.getInstancia().login(email, password);
		Collection<Usuario> usuarios =  UsuarioDAOImplementation.getInstancia().readAll();
		
			if( ADMIN_EMAIL.equals(email) && ADMIN_PASSWORD.equals(password) ) {
				req.getSession().setAttribute("admin", true);
			    getServletContext().getRequestDispatcher("/Admin.jsp").forward(req,resp);
	                      
			} else if ( null != user1 ) {
				req.getSession().setAttribute("user1", user1);
				List<Usuario> lp = new ArrayList<Usuario>();
				lp.addAll(usuarios);
				req.getSession().setAttribute("usuarios", lp);
			    //lp.add (user1);
		         getServletContext().getRequestDispatcher("/Usuario.jsp")
	                      .forward(req,resp);

			} else	{
		              getServletContext().getRequestDispatcher("/index.html")
	                      .forward(req,resp);
			}


	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
