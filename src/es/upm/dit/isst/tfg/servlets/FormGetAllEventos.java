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
import es.upm.dit.isst.tfg.model.Evento;
import es.upm.dit.isst.tfg.model.Usuario;

/**
 * Servlet implementation class FormGetAllEventos
 */
@WebServlet("/FormGetAllEventos")
public class FormGetAllEventos extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public FormGetAllEventos() {
        super();
        
    }

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		Collection<Evento> eventos1 =  EventoDAOImplementation.getInstancia().readAll();
		
		Evento[] eventos = eventos1.toArray(new Evento[eventos1.size()]);
		
		for (int i = 0; i<eventos.length; i++) {
			
			Usuario[] participantes = eventos[i].getParticipantes().toArray(new Usuario[eventos[i].getParticipantes().size()]);
			
			for (int j = 0; j<participantes.length; j++) {
				Usuario aux = new Usuario();
				participantes[j].setAmigos(aux.getAmigos());
			}
		}
		
		Gson gson = new Gson();
		String JsonString = gson.toJson(eventos);
		
		PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        out.print(JsonString);
        out.flush();
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
