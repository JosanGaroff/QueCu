<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Usuario</title>
</head>
<body>

<h2>Usuario actual: ${usuario.email}  </h2>

<h2>Publicar un evento </h2>
<form action="FormEventoServlet">
	<button type="submit">Crear evento</button>
</form>

<h2>Lista de usuarios</h2>
<table border="1">
<tr>
<th>email</th>
<th>password</th>
<th>descripcion</th>
<th>nombre</th>
<th>ciudad</th>

</tr>
<c:forEach items="${usuarios}" var="usuari">
<tr>
<td>${usuari.email}</td>
<td>${usuari.password}</td>
<td>${usuari.descripcion}</td>
<td>${usuari.nombre}</td>

<td>
		<form action="AmistadServlet">
			<input type="hidden" name="usuarioSesionActual_email" value="${usuario.email}" />
			<input type="hidden" name="usuarioAgregar_email" value="${usuari.email}" />
			<button type="submit">Peticion Amistad</button>
		</form>
</td>




</tr>
</c:forEach>
</table>

<h2>Eventos creados</h2>
<table border="1">
<tr>
<th>descripcion</th>
<th>usuario</th>
<th>titulo</th>
</tr>
<c:forEach items="${eventos}" var="eventoi">
<tr>
<td>${eventoi.descripcion}</td>
<td>${eventoi.user}</td>
<td>${eventoi.titulo}</td>

<td>
		<form action="AñadirParticipanteServlet">
			<input type="hidden" name="usuarioSesionActual_email" value="${usuario.email}" />
			<input type="hidden" name="evento_participar" value="${eventoi.titulo}" />
			<button type="submit">Asistir evento</button>
		</form>
</td>


</tr>
</c:forEach>
</table>



<h2>Lista Amigos</h2>
<form action="ListaAmigosServlet">
	<input type="hidden" name="usuarioSesionActual_email" value="${usuario.email}" />
	<button type="submit">Lista de amigos</button>
</form>



<h2>Ver eventos disponibles</h2>
<form action="FormVerEventosServlet">
	<button type="submit">Lista de eventos</button>
</form>

<h2>Editar perfil</h2>
<form action="FormEditarServlet">
	<input type="hidden" name="usuarioEmail" value="${usuario.email}" />
	<button type="submit">Editar</button>
</form>


<h2>Salir de la aplicacion</h2>
<%@ include file = "FormLogout.jsp" %>


</body>
</html>