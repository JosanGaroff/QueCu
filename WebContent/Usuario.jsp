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

<h2>Usuario actual </h2>
<h2> ${user1.email} </h2>

<h2>Lista de todos usuarios creados </h2>
<table border="1">
<c:forEach items="${usuarios}" var="usuari">
<tr>
<td>${usuari.email}</td>
<td>${usuari.password}</td>
<td>${usuari.descripcion}</td>
</tr>
</c:forEach>
</table>


<h2>Publicar un evento </h2>
<form action="FormEventoServlet">
	<button type="submit">Crear evento</button>
</form>


<h2>Ver eventos disponibles</h2>
<form action="FormVerEventosServlet">
	<button type="submit">Lista de eventos</button>
</form>

</body>
</html>