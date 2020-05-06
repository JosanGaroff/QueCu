import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, Tile } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { ExploraPics } from '../constants/Pics'

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';

import {mainUrl, user, setUser} from '../components/User';

import {eventos, getEventos, setEventos, eventosStack, getEventosStack, setEventosStack} from '../components/User';


class TopPicksScreen extends React.Component {

  state ={
      user: user,
      eventos : eventos,
      eventosStack: [],
      titulo: "",
      descripcion: "",
      isEditing: false,
      touchedEvent: false

  }

  makeStack(){
    var eventosStackAux = [];
    console.log('------Empieza MakeStack de Eventos------');
    if(this.state.eventos != undefined){
    for (var i=0; i<this.state.eventos.length; i++){
      var eventoAux = this.state.eventos[i];
      var eventoStack = {
        pic: "",
        title: eventoAux.titulo,
  //      age: user.edad,
        caption: eventoAux.descripcion,
        email: eventoAux.user.email
      };
        switch((i+fotos.length)%fotos.length){
          case 0:
          eventoStack.pic = require('../assets/images/events/cine.jpg');
          break;
          case 1:
          eventoStack.pic = require('../assets/images/events/debate.jpg');
          break;
          case 2:
          eventoStack.pic = require('../assets/images/events/guitar.jpg');
          break;
          case 3:
          eventoStack.pic = require('../assets/images/events/libro.jpg');
          break;
          case 4:
          eventoStack.pic = require('../assets/images/events/museo.jpg');
          break;
  /*        case 5:
          eventoStack.pic = require('../assets/images/men/men6.jpg');
          break;
          case 6:
          eventoStack.pic = require('../assets/images/men/men7.jpg');
          break;
          case 7:
          eventoStack.pic = require('../assets/images/men/men8.jpg');
          break;
          case 8:
          eventoStack.pic = require('../assets/images/men/men9.jpg');
          break;
          case 9:
          eventoStack.pic = require('../assets/images/men/men10.jpg');
          break;
          case 10:
          eventoStack.pic = require('../assets/images/men/men11.jpg');
          break;
          case 11:
          eventoStack.pic = require('../assets/images/men/men12.jpg');
          break;
          case 12:
          eventoStack.pic = require('../assets/images/men/men13.jpg');
          break;
          case 13:
          eventoStack.pic = require('../assets/images/men/men14.jpg');
          break;
          case 14:
          eventoStack.pic = require('../assets/images/men/men15.jpg');
          break;*/
        }
          eventosStackAux.push(eventoStack);
      }
    }
    else{
      var eventoStack = {
        pic: "",
        title: "No hay eventos",
      //  age: user.edad,
        caption: "",
        email: ""
      };
      eventosStackAux.push(eventoStack);
    }
  //etEventosStack(eventosStackAux);
    this.setState({eventosStack: eventosStackAux})
    console.log('\n\n\n\n-----Termina MakeStack de Eventos-----\n\n\n\n');
  }


 toogleEditando() {
  if (this.state.isEditing == false ){

     this.setState({ isEditing: true});

  }else{
    this.uploadNewEvento();
    this.setState({ isEditing: false});

  }
}

toogleTouched() {
  console.log('Evento tocado');
  if (this.state.touchedEvent == false ){

     this.setState({ touchedEvent: true});

  }else{
    
    this.setState({ touchedEvent: false});

  }
}


uploadNewEvento(){
  console.log("3");
  var data_file = mainUrl + 'FormGetCrearEvento?titulo='+this.state.titulo+'&descripcion='+this.state.descripcion+'&userEmail='+this.state.user.email;
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
     if (http_request.readyState == 4 && http_request.status == 200) {
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);
        console.log("5A");
          setEventos(jsonObj);


        if (jsonObj.user.email == this.state.user.email){
          console.log("5B");
          this.makeStack();

          Alert.alert(
            "Completado",
            "¡Evento añadido con éxtio!",
            [
            {
              text: "OK",
            }
          ],{cancelable: false}
          );

        }
        else{
          console.log("5C");
          Alert.alert(
            "Error en el registro",
            "Se ha producido un error",
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
     }

     console.log("7");
  }
  */
  http_request.open("GET", data_file, true);
  http_request.send();
}


componentDidMount(){
  this.makeStack();
}

  render() {

  if (!this.state.isEditing && !this.state.touchedEvent){

    return (
      <SafeAreaView>
        <ScrollView>
          <Text h2 h2Style={styles.h2Style}>
            Explora
          </Text>
          <Text h4 h4Style={styles.h4Style}>
            Echa un vistazo a los eventos que tenemos para ti
          </Text>
           <Button onPress={() => this.toogleTouched()}>
            <Text style={styles.link} >Crea tu evento</Text>
          </Button>
          <View style={styles.grid}>
            {this.state.eventosStack.map(({ pic, title, caption }, i) => (
              <Tile
                imageSrc={pic}
                activeOpacity={0.9}
                title={title}
                titleStyle={styles.title}
                caption={caption}
                captionStyle={styles.caption}
                featured
                key={title}
                onPress={() => this.toogleTouched() }
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }else if(this.state.touchedEvent){
    return(
        <SafeAreaView>
          <Button onPress={() => this.toogleTouched()}>
            <Text style={styles.link} >Evento tocado</Text>
          </Button>
        </SafeAreaView>
      )



  } else{
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
    marginBottom: -2,
    padding: 10,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: 'rgba(0,0,0,0.2);'
  },
  caption: {
    position: 'absolute',
    left: 10,
    bottom: 0,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: 'rgba(0,0,0,0.2);'
  },
})

export default TopPicksScreen
