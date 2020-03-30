package es.upm.dit.isst.tfg.dao;

import java.util.Collection;

import org.hibernate.Session;

import es.upm.dit.isst.tfg.model.Evento;
import es.upm.dit.isst.tfg.model.Usuario;

public class EventoDAOImplementation implements EventoDAO{


	private static EventoDAOImplementation instancia = null;
	  private EventoDAOImplementation() {
	  }

	  public static EventoDAOImplementation getInstancia() {
	    if( null == instancia ) 
	      instancia = new EventoDAOImplementation();
	    return instancia;
	  }
	
	  @Override
		public void create(Evento event ) {
			Session session = SessionFactoryService.get().openSession();
			session.beginTransaction();
			session.save( event );
			session.getTransaction().commit();
			session.close();
			
		}
//Metodo
	  /*
		@Override
		public Usuario read (String email) {
			Session session = SessionFactoryService.get().openSession();
			session.beginTransaction();
			Usuario professor = session.load(Usuario.class, email );
			session.getTransaction().commit();
			session.close();
			return professor;

		}
*/
		@Override
		public void update(Evento event) {
			Session session = SessionFactoryService.get().openSession();
			session.beginTransaction();
			session.saveOrUpdate( event );
			session.getTransaction().commit();
			session.close();
		}

		@Override
		public void delete(Evento event) {
			Session session = SessionFactoryService.get().openSession();
			session.beginTransaction();
			session.delete(event);
			session.getTransaction().commit();
			session.close();
		}

		public Collection<Evento> readAll() {
			Session session = SessionFactoryService.get().openSession();
			session.beginTransaction();
			Collection<Evento> event = session.createQuery( "from Evento" ).list();
			session.getTransaction().commit();
			session.close();
			return event;
		}

		
		
	
	
}
