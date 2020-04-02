<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
</head>
<body>

<h2>Editar usuario</h2>


<form action="FormEditarUsuarioServlet">
	<input type="text" name="email" placeholder="Email" value="${usuario.email}">
	<input type="password" name="password" placeholder="Password" value="${usuario.password}">
	
	<c:choose>
	    <c:when test="${'Sin informacion' == usuario.descripcion}">
				<input type="text" name="descripcion" placeholder="Descripcion">
		</c:when>
		
		<c:otherwise>
			<input type="text" name="descripcion" placeholder="Descripcion" value="${usuario.descripcion}">
		</c:otherwise>
	</c:choose>
	
	
	<c:choose>
	    <c:when test="${'Sin informacion' == usuario.nombre}">
				<input type="text" name="nombre" placeholder="Nombre">
		</c:when>
		
		<c:otherwise>
			<input type="text" name="nombre" placeholder="Nombre" value="${usuario.nombre}">
		</c:otherwise>
	</c:choose>
	
	<c:choose>
	    <c:when test="${'Sin informacion' == usuario.ciudad }">
					<input type="text" name="ciudad" placeholder="Ciudad">
		</c:when>
		
		<c:otherwise>
				<input type="text" name="ciudad" placeholder="Ciudad" value="${usuario.ciudad}">
	    </c:otherwise>
	</c:choose>
	
	
	
	<button type="submit">Salvar cambios</button>
</form>



</body>
</html>