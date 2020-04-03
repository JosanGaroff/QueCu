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
 * Servlet implementation class ListaAmigosServlet
 */
@WebServlet("/ListaAmigosServlet")
public class ListaAmigosServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ListaAmigosServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		System.out.println("-------[aaaaa]-------");
		
		String usuarioSesionActual_email = req.getParameter("usuarioSesionActual_email");
		
		Usuario usuarioActual = UsuarioDAOImplementation.getInstancia().read(usuarioSesionActual_email);
	
		System.out.println("-------[bbb]-------");
		
		Collection<Usuario> amigosTemp = usuarioActual.getAmigos();
		
		System.out.println("-------[ccc]-------");
		
		req.getSession().setAttribute("amigosTemp", amigosTemp);
		
		System.out.println("-------[ddd]-------");
		
		getServletContext().getRequestDispatcher("/ListaAmigos.jsp").forward(req,resp);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
