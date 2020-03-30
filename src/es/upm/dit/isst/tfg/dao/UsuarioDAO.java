package es.upm.dit.isst.tfg.dao;
import java.util.Collection;

import es.upm.dit.isst.tfg.model.Usuario;

public interface UsuarioDAO {

	public void create(Usuario user);

	public Usuario read(String email);

	public void update(Usuario user);

	public void delete(Usuario user);

	public Collection<Usuario> readAll();

	public Usuario login(String email, String psd);
		
	
}





