package es.upm.dit.isst.tfg.dao;

import java.util.Collection;
import java.util.List;
import javax.persistence.Query;
import org.hibernate.Session;

import es.upm.dit.isst.tfg.model.Usuario;

public class UsuarioDAOImplementation implements UsuarioDAO {


	private static UsuarioDAOImplementation instancia = null;
	  private UsuarioDAOImplementation() {
	  }

	  public static UsuarioDAOImplementation getInstancia() {
	    if( null == instancia ) 
	      instancia = new UsuarioDAOImplementation();
	    return instancia;
	  }
	
	  @Override
		public void create(Usuario user ) {
			Session session = SessionFactoryService.get().openSession();
			session.beginTransaction();
			session.save( user );
			session.getTransaction().commit();
			session.close();
			
		}

		@Override
		public Usuario read (String email) {
			Session session = SessionFactoryService.get().openSession();
			session.beginTransaction();
			Usuario user = session.load(Usuario.class, email );
			session.getTransaction().commit();
			session.close();
			return user;

		}

		@Override
		public void update(Usuario user) {
			Session session = SessionFactoryService.get().openSession();
			session.beginTransaction();
			session.update( user );
			session.getTransaction().commit();
			session.close();
		}

		@Override
		public void delete(Usuario user) {
			Session session = SessionFactoryService.get().openSession();
			session.beginTransaction();
			session.delete(user);
			session.getTransaction().commit();
			session.close();
		}

		public Collection<Usuario> readAll() {
			Session session = SessionFactoryService.get().openSession();
			session.beginTransaction();
			Collection<Usuario> user = session.createQuery( "from Usuario" ).list();
			session.getTransaction().commit();
			session.close();
			return user;
		}
//OJO A METODO CON USER1
		@Override
		public Usuario login(String email, String password) {
			Session session = SessionFactoryService.get().openSession();
			Usuario user = null;
			session.beginTransaction();
			Query q = session.createQuery("select t from Usuario t where t.email = :email and t.password = :password");
			q.setParameter("email", email);
			q.setParameter("password", password);
			
			List<Usuario> users = q.getResultList();
			if (users.size() > 0) {
				user = (Usuario) (q.getResultList().get(0));
			}
			session.getTransaction().commit();
			session.close();
			
			System.out.println("------ UsuarioDAO login ------ " );
			
			return user;
			
		}
		
		
}
