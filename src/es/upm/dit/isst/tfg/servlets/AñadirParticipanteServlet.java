package es.upm.dit.isst.tfg.servlets;

import java.io.IOException;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.tfg.dao.EventoDAOImplementation;
import es.upm.dit.isst.tfg.dao.UsuarioDAOImplementation;
import es.upm.dit.isst.tfg.model.Evento;
import es.upm.dit.isst.tfg.model.Usuario;

/**
 * Servlet implementation class AñadirParticipanteServlet
 */
@WebServlet("/AñadirParticipanteServlet")
public class AñadirParticipanteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AñadirParticipanteServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String usuarioSesionActual_email = req.getParameter("usuarioSesionActual_email");
		String titulo_evento = req.getParameter("evento_participar");
		
		//CONSEGUIR USUARIOS DE BBDD
		Usuario usuarioActual = UsuarioDAOImplementation.getInstancia().read(usuarioSesionActual_email);
		Evento evento = EventoDAOImplementation.getInstancia().read(titulo_evento);
		
		//METER DENTRO DE LA LISTA AMIGOS
		
		Collection<Usuario> participantesTemp = evento.getParticipantes();
		participantesTemp.add(usuarioActual);
		evento.setParticipantes(participantesTemp);
		EventoDAOImplementation.getInstancia().update(evento);
		
		req.getSession().setAttribute("participantesTemp", participantesTemp);
		
		getServletContext().getRequestDispatcher("/ParticipantesEvento.jsp").forward(req,resp);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
