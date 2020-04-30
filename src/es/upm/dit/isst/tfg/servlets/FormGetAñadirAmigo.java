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


@WebServlet("/FormGetAñadirAmigo")
public class FormGetAñadirAmigo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public FormGetAñadirAmigo() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String usuarioSesionActual_email = req.getParameter("usuarioSesionActual_email");
		String usuarioAgregar_email = req.getParameter("usuarioAgregar_email");
		
		//CONSEGUIR USUARIOS DE BBDD
		Usuario usuarioActual = UsuarioDAOImplementation.getInstancia().read(usuarioSesionActual_email);
		Usuario usuarioAgregar = UsuarioDAOImplementation.getInstancia().read(usuarioAgregar_email);
		
		//METER DENTRO DE LA LISTA AMIGOS
		
		Collection<Usuario> amigosTemp = usuarioActual.getAmigos();
		amigosTemp.add(usuarioAgregar);
		usuarioActual.setAmigos(amigosTemp);
		UsuarioDAOImplementation.getInstancia().update(usuarioActual);
		
		Collection<Usuario> amigos = usuarioActual.getAmigos();
		
		Gson gson = new Gson();
		String JsonString = gson.toJson(amigos);
		
		PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        out.print(JsonString);
        out.flush();
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
