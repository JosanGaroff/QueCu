package es.upm.dit.isst.tfg.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Usuario implements Serializable {

	@Id
	private String email;
	private String password;
	private String descripcion;
	private String nombre;
	private String ciudad;
	private String edad;
	
	@OneToMany
	private Collection<Usuario> amigos;
	
/*	
	@OneToMany(mappedBy = "advisor", fetch = FetchType.EAGER)
	private Collection<Intereses> intereses;
	

	enum Intereses {
		  lectura,
		  Cine,
		  Fotografia,
		  Museos
		}
*/	
	
	
	
	
	public Collection<Usuario> getAmigos() {
		return amigos;
	}

	public void setAmigos(Collection<Usuario> amigos) {
		this.amigos = amigos;
	}

	@Override
	public String toString() {
		return "Usuario [email=" + email + ", password=" + password + ", descripcion=" + descripcion + ", nombre="
				+ nombre + ", edad=" + edad + ", ciudad=" + ciudad + "]";
	}
		
	public Usuario() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		return true;
	}

	private static final long serialVersionUID = 1L;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public String getEdad() {  //o int
		return edad;
	}

	public void setEdad(String edad) {  //o int
		this.edad = edad;
	}
}
