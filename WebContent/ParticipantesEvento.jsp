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

<h2>Lista de participantes</h2>
<table border="1">
<tr>
<th>email</th>
<th>password</th>
<th>descripcion</th>
<th>nombre</th>

</tr>
<c:forEach items="${participantesTemp}" var="participantei">
<tr>
<td>${participantei.email}</td>
<td>${participantei.password}</td>
<td>${participantei.descripcion}</td>
<td>${participantei.nombre}</td>

</tr>
</c:forEach>
</table>



</body>
</html>