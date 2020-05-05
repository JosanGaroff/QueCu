package es.upm.dit.isst.tfg.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

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
		String ciudad = req.getParameter("ciudad");
		String nombre = req.getParameter("nombre");
		String edad = req.getParameter("edad");
		String sexo = req.getParameter("sexo");
	//	int edadInt = Integer.parseInt(edad);
		
		Usuario user = new Usuario();
		user.setEmail(email);
		user.setPassword(password);
		user.setDescripcion(descripcion);
		user.setCiudad(ciudad);
		user.setNombre(nombre);
		user.setEdad(edad);
		user.setSexo(sexo);
		
		UsuarioDAOImplementation.getInstancia().create(user);
		
		//req.getSession().setAttribute("user", user);
		/*getServletContext().getRequestDispatcher("/UsuarioInicio.jsp").forward(req,resp);*/
		
		req.getSession().setAttribute("user", user);
		
		Gson gson = new Gson();
		String JsonString = gson.toJson(user);
		
		PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        out.print(JsonString);
        out.flush();
		

	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
