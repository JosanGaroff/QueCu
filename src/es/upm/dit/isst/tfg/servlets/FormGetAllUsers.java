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

import es.upm.dit.isst.tfg.dao.UsuarioDAOImplementation;
import es.upm.dit.isst.tfg.model.Usuario;

/**
 * Servlet implementation class FormGetAllUsers
 */
@WebServlet("/FormGetAllUsers")
public class FormGetAllUsers extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public FormGetAllUsers() {
        super();
        
    }

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
	//	int id = Integer.parseInt(req.getParameter("id"));
		
		Collection<Usuario> usuarios1 =  UsuarioDAOImplementation.getInstancia().readAll();
		
		Usuario[] usuarios = usuarios1.toArray(new Usuario[usuarios1.size()]);
		
	//	Usuario usuario = usuarios[id];
		
		for (int i = 0; i<usuarios.length; i++) {
			Usuario aux = new Usuario();
			usuarios[i].setAmigos(aux.getAmigos());
		}
		
		Gson gson = new Gson();
		String JsonString = gson.toJson(usuarios);
		
		PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        out.print(JsonString);
        out.flush();
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
