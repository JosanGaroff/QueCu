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

<h2>Lista de todos los eventos </h2>
<table border="1">
<c:forEach items="${eventos}" var="eventi">

<td>${eventi.titulo}</td>
<td>${eventi.user}</td>
<td>${eventi.descripcion}</td>

</c:forEach>
</table>

</body>
</html>