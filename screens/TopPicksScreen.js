import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, Tile } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { ExploraPics } from '../constants/Pics'

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';

import {mainUrl, user, setUser} from '../components/User';


class TopPicksScreen extends React.Component {

  state ={
      titulo: "",
      descripcion: "",
      isEditing: false

  }



 toogleEditando() {
  if (this.state.isEditing == false ){
    
     this.setState({ isEditing: true});

  }else{
    this.uploadNewEvento();
      this.setState({ isEditing: false});

  }
//  this.forceUpdate();
}


uploadNewEvento(){
  console.log("3");
  var data_file = mainUrl + 'FormCrearEventosServlet?titulo='+this.state.titulo+'&descripcion='+this.state.descripcion;
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
/*
  http_request.onreadystatechange = function(func) { 
console.log("4");
     if (http_request.readyState == 4 ) {
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        usuario = jsonObj;
        console.log(usuario);
          setUser(usuario);
          console.log(user);

        if (usuario.email == user.email){
          console.log("5A");

          Alert.alert(
            "Completado",
            "¡Evento añadido con éxtio!",
            [
            {
              text: "OK", onPress: () => func
            }
          ],{cancelable: false}
          );

        }
        else{
          console.log("5B");
          Alert.alert(
            "Error en el registro",
            "El email ya existe",
            [
            {
              text: "OK"
            }
          ],{cancelable: false}
          );
        //  navigation.navigate('WrongLoginScreen');
        } 

        // jsonObj variable now contains the data structure and can
        // be accessed as jsonObj.name and jsonObj.country.
       // document.getElementById("Name").innerHTML = jsonObj.name;
       // document.getElementById("Country").innerHTML = jsonObj.country;
     //}else{
       //navigation.navigate('AlreadyRegisterScreen');
        console.log("6");
     } */
     console.log("6");
 // }

  http_request.open("GET", data_file, true);
  http_request.send();
}




  render() {

  if (!this.state.isEditing){

    return (
      <SafeAreaView>
        <ScrollView>
          <Text h2 h2Style={styles.h2Style}>
            Explora 
          </Text>
          <Text h4 h4Style={styles.h4Style}>
            Echa un vistazo a los eventos que tenemos para ti
          </Text>
           <Button onPress={() => this.toogleEditando()}>
            <Text style={styles.link} >Crea tu evento</Text>
          </Button>
          <View style={styles.grid}>
            {ExploraPics.map(({ pic, title, caption }, i) => (
              <Tile
                imageSrc={pic}
                activeOpacity={0.9}
                title={title}
                titleStyle={styles.title}
                caption={caption}
                captionStyle={styles.caption}
                featured
                key={title}
                onPress={() => console.log('Evento tocado')}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }else{
    return(

        <SafeAreaView style={styles.container}>
      <TextInput
        label="Nombre"
        onChangeText={text => this.setState({titulo: text})}
      />

      <TextInput
        label="Descripción"
        onChangeText={text => this.setState({descripcion: text})}

      />

      <Button onPress={() => this.toogleEditando()}>
      <Text style={styles.link} >Guardar cambios</Text>
      </Button>
    </SafeAreaView>


      )

  } 
}
}

const styles = StyleSheet.create({
  h2Style: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  h4Style: {
    textAlign: 'center',
    color: '#757575',
  },
  grid: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    position: 'absolute',
    left: 10,
    bottom: 50,
    backgroundColor: 'black',
    marginBottom: -2,
    padding: 10,
  },
  caption: {
    position: 'absolute',
    left: 10,
    bottom: 0,
    backgroundColor: 'black',
    marginTop: 10,
    padding: 10,
  },
})

export default TopPicksScreen
