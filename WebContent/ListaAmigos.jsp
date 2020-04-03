<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>


<h2>Lista de amigos</h2>
<table border="1">
<tr>
<th>email</th>
<th>password</th>
<th>descripcion</th>
<th>nombre</th>

</tr>
<c:forEach items="${amigosTemp}" var="amigoi">
<tr>
<td>${amigoi.email}</td>
<td>${amigoi.password}</td>
<td>${amigoi.descripcion}</td>
<td>${amigoi.nombre}</td>

</tr>
</c:forEach>
</table>


</body>
</html>