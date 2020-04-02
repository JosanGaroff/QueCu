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