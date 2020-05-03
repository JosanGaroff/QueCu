import React  from 'react'
import { AppLoading } from 'expo'
import { SafeAreaView, StyleSheet, Image} from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'
import { createStackNavigator } from 'react-navigation' //Navegación

import shuffleArray from '../utils/shuffleArray'
import randomNo from '../utils/randomNo'


import {mainUrl, user, userFriends, setFriends, allUsers} from '../components/User';

var loading = {
  pic: require('../assets/loading.gif'),
  title: '',
  caption: '',
};

var usersStack = [];

var amigos = [];

var usuarios;

var fotos = [
  require('../assets/images/men/men1.jpg'),
  require('../assets/images/men/men2.jpg'),
  require('../assets/images/men/men3.jpg'),
  require('../assets/images/men/men4.jpg'),
  require('../assets/images/men/men5.jpg'),
  require('../assets/images/men/men6.jpg'),
  require('../assets/images/men/men7.jpg'),
  require('../assets/images/men/men8.jpg'),
  require('../assets/images/men/men9.jpg'),
  require('../assets/images/men/men10.jpg'),
  require('../assets/images/men/men11.jpg'),
  require('../assets/images/men/men12.jpg'),
  require('../assets/images/men/men13.jpg'),
  require('../assets/images/men/men14.jpg'),
  require('../assets/images/men/men15.jpg'),
];

class HomeScreen extends React.Component {

  state = {

    user: user,
    cont:0,
    usersStack:[],
    allUsers: [],
    userFriends: userFriends,
    isLoading: true,
    isLoadingComplete: false,

  }

/*  getImages(){
    for (var i=1; i<16; i++){
      fotos.push(require('../assets/images/men/men'+i+'.jpg'));
    }
  }*/

    getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  makeStack(amigos){
    for (var i=0; i<allUsers.length; i++){
      var user = allUsers[i];
      console.log('------Empieza MakeStack------');
      console.log(i);
      console.log(allUsers[i])
      console.log('------MakeStack------');
      var userStack = {
        pic: "",
        title: user.nombre,
        age: user.edad,
        caption: user.descripcion,
        email: user.email
      };
      switch((i+fotos.length)%fotos.length){
        case 0:
        userStack.pic = require('../assets/images/men/men1.jpg');
        break;
        case 1:
          userStack.pic = require('../assets/images/men/men2.jpg');
          break;
        case 2:
        userStack.pic = require('../assets/images/men/men3.jpg');
        break;
        case 3:
        userStack.pic = require('../assets/images/men/men4.jpg');
        break;
        case 4:
        userStack.pic = require('../assets/images/men/men5.jpg');
        break;
        case 5:
        userStack.pic = require('../assets/images/men/men6.jpg');
        break;
        case 6:
        userStack.pic = require('../assets/images/men/men7.jpg');
        break;
        case 7:
        userStack.pic = require('../assets/images/men/men8.jpg');
        break;
        case 8:
        userStack.pic = require('../assets/images/men/men9.jpg');
        break;
        case 9:
        userStack.pic = require('../assets/images/men/men10.jpg');
        break;
        case 10:
        userStack.pic = require('../assets/images/men/men11.jpg');
        break;
        case 11:
        userStack.pic = require('../assets/images/men/men12.jpg');
        break;
        case 12:
        userStack.pic = require('../assets/images/men/men13.jpg');
        break;
        case 13:
        userStack.pic = require('../assets/images/men/men14.jpg');
        break;
        case 14:
        userStack.pic = require('../assets/images/men/men15.jpg');
        break;
      }


      console.log('-----Aquí la pic-----\n\n\n\n');
      console.log(i);
      console.log((i+fotos.length)%fotos.length);
      console.log(i+fotos.length);
      console.log(userStack.pic);
      console.log('\n\n\n\n----------');
      usersStack.push(userStack);
    }

    this.setState({usersStack: usersStack})
    console.log('\n\n\n\n-----After MakeStack-----\n\n\n\n');
    console.log(this.state.usersStack);
    console.log('\n\n\n\n-----Termina MakeStack-----\n\n\n\n');
  }

/*  componentDidMount(){
    console.log('-----Aquí el guardado-----\n\n\n\n');
    console.log(allUsers);

    var successfully = false

    var data_file = mainUrl+'FormGetAllUsers';
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
  /*cambiaData(){
        this.setState({allUsers: usuarios});
        console.log('-----Aquí usuarios dentro de cambia-----\n\n\n\n');
        console.log(this.state.allUsers);
        console.log('\n\n\n\n----------');
        console.log('-----Aquí allUsers-----\n\n\n\n');
        console.log(this.state.allUsers);
        console.log('\n\n\n\n----------');
    }

    http_request.onreadystatechange = function() {

       if (http_request.readyState == 4  ) {
          // Javascript function JSON.parse to parse JSON data
          successfully = true;
          var jsonObj = JSON.parse(http_request.responseText);
          console.log('-----Aquí el JSON-----\n\n\n\n');
          console.log(jsonObj);
          console.log('\n\n\n\n----------');
          usuarios=jsonObj;
          console.log('-----Aquí el JSON en la variable usuarios-----\n\n\n\n');
          console.log(jsonObj);
          console.log('\n\n\n\n----------');
          this.successfully = true;
    //      this.cambiaData();
    //      this.setState({ isLoading: false });



          // jsonObj variable now contains the data structure and can
          // be accessed as jsonObj.name and jsonObj.country.
         // document.getElementById("Name").innerHTML = jsonObj.name;
         // document.getElementById("Country").innerHTML = jsonObj.country;
       }

    }

    http_request.open("GET", data_file, true);
    http_request.send();

/*    this.getUser();
    this.getUser();
    this.getUser();
    this.getUser();
          console.log(this.state.allUsers);



          console.log('-----Aquí allUsers-----\n\n\n\n');
          console.log(this.state.allUsers);
          console.log('\n\n\n\n----------');


  }*/

increaseCont(){
  this.setState({cont: this.state.cont + 1})
  //if (this.state.cont == this.state.usersStack.length){
  //  this.setState({cont: 0})
  //}
}

makeFriend(newFriend){
  fetch(mainUrl +'FormGetAñadirAmigo?usuarioSesionActual_email='+this.state.user.email+'&usuarioAgregar_email='+newFriend, {
         method: 'GET',
         headers: {
             'Accept': 'application/json',
             'Content-type': 'application/json'
           }
         })
     .then((response) => response.json())
         .then((json) => {
           this.setState({ userFriends: json });
           setFriends(json);
           console.log('-----Aquí en el fetch de new friend-----\n\n\n\n');
           console.log(this.state.userFriends);
           console.log('\n\n\n\n----------');
         })
         .catch((error) => console.error(error))
         .finally(() => {
    //       setTimeout(() => {  console.log("Fetch"); }, 2000);
           this.makeStack(this.state.userFriends);
         });

}

 _onSwipedLeft() {
   this.increaseCont();
   console.log("No friends...")
 }

 _onSwipedRight() {
  // this.makeFriend(this.state.usersStack[this.state.cont]);
   this.increaseCont();
   console.log("New friend!")
 }

   componentDidMount(){
  //   fetch(mainUrl +'FormGetAllAmigos?usuarioSesionActual_email='+user.email, {
  fetch(mainUrl +'FormGetAllEventos', {
         method: 'GET',
         headers: {
             'Accept': 'application/json',
             'Content-type': 'application/json'
           }
         })
     .then((response) => response.json())
         .then((json) => {
           this.setState({ allUsers: json });
           console.log('-----Aquí en el fetch-----\n\n\n\n');
           console.log(this.state.allUsers);
           console.log('\n\n\n\n----------');
         })
         .catch((error) => console.error(error))
         .finally(() => {
    //       setTimeout(() => {  console.log("Fetch"); }, 2000);
    //       setFriends(amigos);
           this.makeStack();
           this.setState({ isLoading: false });
         });
   //this.getImages();
//   console.log('-----Aquí allUsers-----\n\n\n\n');
   console.log(allUsers);
   console.log('\n\n\n\n----------');



  // this.setState({ allUsers: allUsers });
  // this.setState({ isLoading: false });
//   console.log('-----Aquí el estado allUsers-----\n\n\n\n');
  // console.log(this.state.allUsers);
   //console.log('\n\n\n\n----------');
}



  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen && this.state.isLogged) {
      return (
        <SafeAreaView>
        <Image src='../assets/loading.gif' />
        </SafeAreaView>
      )
    } else
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          cards={shuffleArray(this.state.usersStack)}    //Swiper tiene variables para saber si desliza a izq o drcha
          renderCard={Card}
          infinite
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={2}
          onSwipedLeft={() => this._onSwipedLeft()}
          onSwipedRight={() => this._onSwipedRight()}

        />
      </SafeAreaView>
    )
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('../assets/splash.png'),
        require('../assets/icon.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.MaterialIcons.font,
        ...Icon.MaterialCommunityIcons.font,
        ...Icon.FontAwesome.font,
        ...Icon.Feather.font,
      }),
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 20,

  },
})

export default HomeScreen

/*
onSwipedLeft={() => console.log('Next')}
onSwipedRight={() => console.log('Café')}
*/
/*<SafeAreaView>
<Image src='../assets/loading.gif' />
</SafeAreaView>*/
/*<AppLoading
  startAsync={this._loadResourcesAsync}
  onError={this._handleLoadingError}
  onFinish={this._handleFinishLoading}
/>*/
