package es.upm.dit.isst.tfg.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import es.upm.dit.isst.tfg.dao.EventoDAOImplementation;
import es.upm.dit.isst.tfg.dao.UsuarioDAOImplementation;
import es.upm.dit.isst.tfg.model.DatosJson;
import es.upm.dit.isst.tfg.model.Evento;
import es.upm.dit.isst.tfg.model.Usuario;


@WebServlet("/FormGetUser")
public class FormGetUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public FormGetUser() {
        super();
        
    }

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		
		Collection<Usuario> usuarios =  UsuarioDAOImplementation.getInstancia().readAll();
		Collection<Evento> eventos =  EventoDAOImplementation.getInstancia().readAll();

		Usuario usuario = UsuarioDAOImplementation.getInstancia().login(email, password);
		
		if ( null != usuario ) {
			System.out.println("-------[LOGIN USER]-------");

			req.getSession().setAttribute("usuario", usuario);
			
			Gson gson = new Gson();
			String JsonString = gson.toJson(usuario);
			
			PrintWriter out = resp.getWriter();
	        resp.setContentType("application/json");
	        resp.setCharacterEncoding("UTF-8");
	        out.print(JsonString);
	        out.flush();
			

		} else	{
			System.out.println("-------[SALIDA]-------");
			
			Usuario nouser = new Usuario();
			nouser.setEmail("none");
			
			Gson gson = new Gson();
			String JsonString = gson.toJson(nouser);
			
			PrintWriter out = resp.getWriter();
	        resp.setContentType("application/json");
	        resp.setCharacterEncoding("UTF-8");
	        out.print(JsonString);
	        out.flush();
			
			
		}
	}
	

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	
	}

}