var localhost = '192.168.0.11';

var user = {ciudad: "", descripcion:"" , edad:0 , email:"", nombre:"none", password:""};

function loadUser(email, password) {
  var data_file = 'http://'+localhost+':8080/ISST-20-TFG/FormGetUser?email='+email+'&password='+password;
  var http_request = new XMLHttpRequest();
  try{
    // Opera 8.0+, Firefox, Chrome, Safari
    http_request = new XMLHttpRequest();
  }catch (e) {
    // Internet Explorer Browsers
    try{
      http_request = new ActiveXObject("Msxml2.XMLHTTP");

    }catch (e) {

      try{
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e) {
        // Something went wrong
        alert("Your browser broke!");
        return false;
      }

    }
  }

  return http_request.onreadystatechange = function() {

    if (http_request.readyState == 4  ) {
      // Javascript function JSON.parse to parse JSON data
      var jsonObj = JSON.parse(http_request.responseText);

      user = jsonObj;
      console.log(user);
      /*
      if (user.email != "none"){
      return true;
    }
    else{
    return false;
  }
  */
  // jsonObj variable now contains the data structure and can
  // be accessed as jsonObj.name and jsonObj.country.
  // document.getElementById("Name").innerHTML = jsonObj.name;
  // document.getElementById("Country").innerHTML = jsonObj.country;
}
}

http_request.open("GET", data_file, true);
http_request.send();
}

function createUser(email, password, nombre, edad, descripcion, ciudad) {
  var data_file = 'http://'+localhost+':8080/ISST-20-TFG/FormRegistroServlet?email='+email+'&password='+password+'&descripcion='+descripcion+'&ciudad='+ciudad+'&nombre='+nombre;
  var http_request = new XMLHttpRequest();
  try{
    // Opera 8.0+, Firefox, Chrome, Safari
    http_request = new XMLHttpRequest();
  }catch (e) {
    // Internet Explorer Browsers
    try{
      http_request = new ActiveXObject("Msxml2.XMLHTTP");

    }catch (e) {

      try{
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e) {
        // Something went wrong
        alert("Your browser broke!");
        return false;
      }

    }
  }

  http_request.onreadystatechange = function() {

    if (http_request.readyState == 4  ) {
      user = jsonObj;
      console.log(user);

      /*                           if (user.email != "none"){
      navigation.navigate('Dashboard');
    }
    else{
    navigation.navigate('WrongLoginScreen');
  }*/

  // jsonObj variable now contains the data structure and can
  // be accessed as jsonObj.name and jsonObj.country.
  // document.getElementById("Name").innerHTML = jsonObj.name;
  // document.getElementById("Country").innerHTML = jsonObj.country;
}
}

http_request.open("POST", data_file, true);
http_request.send();
}

function setUser(usuario) {
  user = usuario;
}

export {localhost, user, loadUser, createUser, setUser};
