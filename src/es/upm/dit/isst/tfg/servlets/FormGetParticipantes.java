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
import es.upm.dit.isst.tfg.model.Evento;
import es.upm.dit.isst.tfg.model.Usuario;


@WebServlet("/FormGetParticipantes")
public class FormGetParticipantes extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    public FormGetParticipantes() {
        super();
    
    }


	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String titulo = req.getParameter("titulo");

		
		//CONSEGUIR USUARIOS DE BBDD
		Evento evento = EventoDAOImplementation.getInstancia().read(titulo);
		
		
		//METER DENTRO DE LA LISTA AMIGOS
		
		Collection<Usuario> participantes1 = evento.getParticipantes();
		
		Usuario[] participantes = participantes1.toArray(new Usuario[participantes1.size()]);
		
		for (int i = 0; i<participantes.length; i++) {
			Usuario aux = new Usuario();
			participantes[i].setAmigos(aux.getAmigos());
		}
		
		Gson gson = new Gson();
		String JsonString = gson.toJson(participantes);
		
		PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        out.print(JsonString);
        out.flush();
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
