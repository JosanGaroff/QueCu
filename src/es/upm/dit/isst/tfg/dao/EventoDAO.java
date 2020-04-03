package es.upm.dit.isst.tfg.dao;

import java.util.Collection;

import es.upm.dit.isst.tfg.model.Evento;
import es.upm.dit.isst.tfg.model.Usuario;

public interface EventoDAO {


	public void create(Evento event);

	public Evento read(String titulo);

	public void update(Evento event);

	public void delete(Evento event);

	public Collection<Evento> readAll();

	
	
}
