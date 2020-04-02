<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>


<h2>Nuevo Usuario Registrado</h2>

<p>

<p>email: ${user.email}</p>
<p>password: ${user.password}</p>
<p>descripcion: ${user.descripcion}</p>
<p>nombre: ${user.nombre}</p>
<p>ciudad: ${user.ciudad}</p>

<h2>Salir de la aplicacion</h2>
<%@ include file = "FormLogout.jsp" %>



</body>
</html>