import React from 'react'
import { Image,ScrollView, StyleSheet, View, RefreshControl, Alert } from 'react-native'
import { Divider, Text, Tile } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { ExploraPics } from '../constants/Pics'
import Layout from '../constants/Layout'

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';

import {mainUrl, user, setUser} from '../components/User';

import {setAllEventos} from '../components/Eventos';


import {eventos, getAllEventos, eventosStack, getEventosStack, setEventosStack} from '../components/Eventos';

var eventos2 = { descripcion: "",participantes: [], titulo: ""  };



class TopPicksScreen extends React.Component {

  state ={
      user: user,
      eventos : eventos,
      eventos2: eventos2,
      eventosStack: [],
      titulo: "",
      descripcion: "",

      isEditing: false,
      touchedEvent: false,
      nEvento: 0,
      refreshing: false,

  }

   

 /* _onRefresh = () => {
    this.setState({refreshing: true});
    this.makeStack().then(() => {
      this.setState({refreshing: false});
    });
  }
  */

  makeStack(){
    var eventosStackAux = [];
    console.log('------Empieza MakeStack de Eventos------');
    if(this.state.eventos != undefined){ //this.state.eventos != undefined){
    for (var i=0; i<this.state.eventos.length; i++){
      var eventoAux = this.state.eventos[i];
      var eventoStack = {
        pic: "",
        title: eventoAux.titulo,
  //      age: user.edad,
        caption: eventoAux.descripcion,
        //email: eventoAux.user.email
      };
        switch((i+this.state.eventos.length)%this.state.eventos.length){
          case 0:
          eventoStack.pic = require('../assets/images/events/cine.jpg');
          break;
          case 1:
          eventoStack.pic = require('../assets/images/events/debate.jpg');
          break;
          case 2:
          eventoStack.pic = require('../assets/images/events/museo.jpg');
          break;
          case 3:
          eventoStack.pic = require('../assets/images/events/guitar.jpg');
          break;
          case 4:
          eventoStack.pic = require('../assets/images/events/libro.jpg');
          break;
          case 5:
          eventoStack.pic = require('../assets/images/men/men6.jpg');
          break;
          case 6:
          eventoStack.pic = require('../assets/images/men/men7.jpg');
          break;
     /*     case 7:
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
        //email: ""
      };
      eventosStackAux.push(eventoStack);
    }
  //etEventosStack(eventosStackAux);
    this.setState({eventosStack: eventosStackAux});
    //console.log(eventos2);
    console.log('\n\n\n\n-----Termina MakeStack de Eventos-----\n\n\n\n');
  }


 toogleEditando() {
  if (this.state.isEditing == false ){

     this.setState({ isEditing: true});

  }else{
    this.uploadNewEvento();

    this.setState({ isEditing: false});
   // window.location.reload(false);
 
  }
}

toogleTouched(i) {
  console.log('Evento tocado');
  this.setState({ nEvento: i});
  if (this.state.touchedEvent == false ){

     this.setState({ touchedEvent: true});

  }else{
    
    this.setState({ touchedEvent: false});

  }
}

asistirEvento(){
  console.log("ASISTIR EVENTO--------->" + this.state.eventos[this.state.nEvento].titulo);
  console.log("ASISTIR mail--------->" + this.state.user.mail);
  nombre_evento = this.state.eventos[this.state.nEvento].titulo; 
 //A%C3%B1adirParticipanteServlet?usuarioSesionActual_email=dc%40gm.es&evento_participar=prueba1
  var data_file = mainUrl + 'A%C3%B1adirParticipanteServlet?usuarioSesionActual_email='+
                  user.mail + '&evento_participar=' ; /////////////// TERMINAR CUANDO ESTEN LOS EVENTOS ////////

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
http_request.open("GET", data_file, true);
  http_request.send();
}



 getEventos() {

    fetch(mainUrl +'FormGetAllEventos', {
         method: 'GET',
         headers: {
             'Accept': 'application/json',
             'Content-type': 'application/json'
           }
         })
     .then((response) => response.json())
         .then((json) => {
          console.log(json);
           this.setState({ eventos: json });
         })
         .catch((error) => console.error(error))
         .finally(() => {
    //       setTimeout(() => {  console.log("Fetch"); }, 2000);
           console.log( "AQUI------------------>" + this.state.eventos);

           this.makeStack();
           //this.setState({ isLoading: false });
         });





  ////////////////////////////***************************************************//////////////////////////
  /*
    var data_file = mainUrl+'FormGetAllEventos';
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

       if (http_request.readyState == 4 && http_request.status == 200 ) {
          // Javascript function JSON.parse to parse JSON data
          var jsonObj = JSON.parse(http_request.responseText);
          setAllEventos(jsonObj);
          eventos2 = jsonObj;
          
          console.log('\n\n\n\n-----Inicio eventos-----\n\n\n\n');
          console.log(eventos2);
          console.log('\n\n\n\n-----Fin eventos-----\n\n\n\n');
         

          // jsonObj variable now contains the data structure and can
          // be accessed as jsonObj.name and jsonObj.country.
         // document.getElementById("Name").innerHTML = jsonObj.name;
         // document.getElementById("Country").innerHTML = jsonObj.country;
       }

    }

    http_request.open("GET", data_file, true);
    http_request.send();

*/
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

  
  http_request.open("GET", data_file, true);
  http_request.send();
}


componentDidMount(){
/*  console.log(this.state.eventos);
  this.makeStack();
  console.log(this.state.eventosStack) */
this.getEventos();
 //this.setState({eventos: eventos2});

  console.log("state eventos: " + this.state.eventos);
  //this.makeStack();
 
}

 render() {

  if (!this.state.isEditing && !this.state.touchedEvent){

    return (
         <SafeAreaView>
        <ScrollView  refreshControl={
          <RefreshControl refreshing={this.state.refreshing}
            onRefresh={this._onRefresh} />
        }>
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
                onPress={() => this.toogleTouched(i)}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }else if(this.state.touchedEvent){
    
    return( 
        <SafeAreaView>
        <ScrollView>

          <Button onPress={() => this.toogleTouched(0)}>
            <Text style={styles.link} >Volver a Eventos</Text>
          </Button>
        <View style={styles.grid}>
           <Image source={ ExploraPics[this.state.nEvento].pic} style={styles.image} />
           <Text h4 style={styles.name}> {ExploraPics[this.state.nEvento].title } </Text>
           <Divider/>
           <Text> {ExploraPics[this.state.nEvento].caption } </Text>
         </View>
         <Button onPress={() =>{
          
           Alert.alert(
            "Completado",
            "¡Se ha indicado que vas a asistir al Evento!",
            [
            {
              text: "OK", onPress: () => this.asistirEvento()
            }
          ],{cancelable: false}
          );
           }}>
            <Text style={styles.link} >Asistir a evento</Text>
          </Button>

           </ScrollView>
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
  name: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  grid: {
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: Layout.window.width - 60,
    height: Layout.window.height / 2 - 60,
    borderRadius: 20,
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
