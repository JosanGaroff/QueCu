package es.upm.dit.isst.tfg.servlets;

import java.io.IOException;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.tfg.dao.UsuarioDAOImplementation;
import es.upm.dit.isst.tfg.model.Usuario;

/**
 * Servlet implementation class AmistadServlet
 */
@WebServlet("/AmistadServlet")
public class AmistadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AmistadServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
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
		
		getServletContext().getRequestDispatcher("/Usuario.jsp").forward(req,resp);

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
