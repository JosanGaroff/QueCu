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


@WebServlet("/FormGetAllAmigos")
public class FormGetAllAmigos extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public FormGetAllAmigos() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String usuarioSesionActual_email = req.getParameter("usuarioSesionActual_email");
		
		Usuario usuarioActual = UsuarioDAOImplementation.getInstancia().read(usuarioSesionActual_email);
		
		Collection<Usuario> amigosTemp = usuarioActual.getAmigos();
		
		Usuario[] usuariosamigos = amigosTemp.toArray(new Usuario[amigosTemp.size()]);
		
		for (int i = 0; i<usuariosamigos.length; i++) {
			Usuario aux = new Usuario();
			usuariosamigos[i].setPassword(aux.getPassword());
			usuariosamigos[i].setAmigos(aux.getAmigos());
			usuariosamigos[i].setEdad(aux.getEdad());
			usuariosamigos[i].setNombre(aux.getNombre());
			usuariosamigos[i].setDescripcion (aux.getDescripcion());
			usuariosamigos[i].setCiudad(aux.getCiudad());
		}
		
		Gson gson = new Gson();
		String JsonString = gson.toJson(usuariosamigos);
		
		PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        out.print(JsonString);
        out.flush();
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
