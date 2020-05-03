<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h2>Admin</h2>
<p><b>Numero de usuarios creados: </b>${fn:length(usuarios)}</p>
<p><b>Numero de eventos creados: </b>${fn:length(eventos)}</p>

<h2>Usuarios creados </h2>
<table border="1">
<tr>
<th>email</th>
<th>password</th>
<th>descripcion</th>
</tr>
<c:forEach items="${usuarios}" var="usuari">
<tr>
<td>${usuari.email}</td>
<td>${usuari.password}</td>
<td>${usuari.descripcion}</td>
<td>
	<form action="FormDeleteUser">
		<input type="hidden" name="email" value=${usuari.email} />
		<button type="submit">Eliminar</button>  
	</form> 
</td>
</tr>
</c:forEach>
</table>

<p></p>

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
</tr>
</c:forEach>
</table>

<h2>Salir de la aplicacion</h2>

<%@ include file = "FormLogout.jsp" %>

</html>