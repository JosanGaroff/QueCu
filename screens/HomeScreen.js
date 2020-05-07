import React  from 'react'
import { AppLoading } from 'expo'
import { SafeAreaView, StyleSheet, Image, Text, View} from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'
import { createStackNavigator } from 'react-navigation' //Navegación

import shuffleArray from '../utils/shuffleArray'
import randomNo from '../utils/randomNo'


import {mainUrl, user, userFriends, setFriends, allUsers, setFoto, fotoUser, setMyFriendStack} from '../components/User';

var loading = {
  pic: require('../assets/loading.gif'),
  title: '',
  caption: '',
};

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
    userFriends: user.amigos,
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
    this.setState({cont: 0});
    var numHombres=0;
    var numMujeres=0;
    var usersStackAux = [];
    var amigosStackAux = [];
    console.log('------Empieza MakeStack------');
    console.log(amigos);
    for (var i=0; i<allUsers.length; i++){
      var userAux = allUsers[i];
      var userStack = {
        pic: "",
        title: userAux.nombre+', '+userAux.edad,
  //      age: user.edad,
        caption: userAux.descripcion,
        email: userAux.email
      };
      if (userAux.sexo == 'HOMBRE'){
        numHombres++;
        console.log("Otro hombre más. Total: "+numHombres);
        switch((numHombres+fotos.length)%fotos.length){
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
      }
      if (userAux.sexo == 'MUJER'){
          numMujeres++;
          console.log("Otra mujer más. Total: "+numMujeres);
          switch((numMujeres+fotos.length)%fotos.length){
            case 0:
            userStack.pic = require('../assets/images/women/women1.jpg');
            break;
            case 1:
              userStack.pic = require('../assets/images/women/women2.jpg');
              break;
            case 2:
            userStack.pic = require('../assets/images/women/women3.jpg');
            break;
            case 3:
            userStack.pic = require('../assets/images/women/women4.jpg');
            break;
            case 4:
            userStack.pic = require('../assets/images/women/women5.jpg');
            break;
            case 5:
            userStack.pic = require('../assets/images/women/women6.jpg');
            break;
            case 6:
            userStack.pic = require('../assets/images/women/women7.jpg');
            break;
            case 7:
            userStack.pic = require('../assets/images/women/women8.jpg');
            break;
            case 8:
            userStack.pic = require('../assets/images/women/women9.jpg');
            break;
            case 9:
            userStack.pic = require('../assets/images/women/women10.jpg');
            break;
            case 10:
            userStack.pic = require('../assets/images/women/women11.jpg');
            break;
            case 11:
            userStack.pic = require('../assets/images/women/women12.jpg');
            break;
            case 12:
            userStack.pic = require('../assets/images/women/women13.jpg');
            break;
            case 13:
            userStack.pic = require('../assets/images/women/women14.jpg');
            break;
            case 14:
            userStack.pic = require('../assets/images/women/women15.jpg');
            break;
          }

      }

        if (userStack.email == this.state.user.email){
          console.log("Entra a mi foto");
          setFoto(userStack.pic);
        }else{
          var isAmigo = false;
          if (amigos != undefined && amigos.length > 0 ){
            for (var j=0; j<amigos.length; j++){
              var amigo = amigos[j];
              if (userStack.email == amigo.email){
                console.log(isAmigo);
                isAmigo = true;
                amigosStackAux.push(userStack);
              }
            }
          }
          if (!isAmigo){
          usersStackAux.push(userStack);
        }
      }
    }
    if (usersStackAux.length == 0){
      var userStack = {
        pic: require('../assets/images/men/nousers.jpg'),
        title: "",
      //  age: user.edad,
        caption: "",
        email: ""
      };
      usersStackAux.push(userStack);
    }


    setMyFriendStack(amigosStackAux);
    this.setState({usersStack: usersStackAux})
    console.log('\n\n\n\n-----Termina MakeStack-----\n\n\n\n');
  }

increaseCont(){
  this.setState({cont: this.state.cont + 1})
  if (this.state.cont == this.state.usersStack.length){
    this.setState({cont: 0})
  }
}

callGetFriends(){
  console.log('-----Comienza el callGetFriends-----\n\n\n\n');
//  fetch(mainUrl +'FormGetUser?email='+this.state.user.email+'&password='+user.password, {
  fetch(mainUrl +'FormGetAllAmigos?usuarioSesionActual_email='+this.state.user.email, {
         method: 'GET',
         headers: {
             'Accept': 'application/json',
             'Content-type': 'application/json'
           }
         })
         .then((response) => response.json())
                 .then((json) => {
            //          this.setState({ userFriends: json.amigos });
                      this.setState({ userFriends: json });
                      console.log('-----Se ha realizado el callGetFriends-----\n\n\n\n');
                    })
                    .catch((error) => console.error(error))
                    .finally(() => {

                      //setFriends(this.state.userFriends);
                      this.makeStack(this.state.userFriends);
                    });


}

makeFriend(newFriend){
  var successfully = false;
  fetch(mainUrl +'FormGetAñadirAmigo?usuarioSesionActual_email='+this.state.user.email+'&usuarioAgregar_email='+newFriend, {
         method: 'GET',
         headers: {
             'Accept': 'application/json',
             'Content-type': 'application/json'
           }
         })
         .then((response) => response.json())
                 .then((json) => {
                   console.log('-----Se hace la peticion-----\n\n\n\n');
                      if (json.email == "completed"){
                        console.log('-----La respuesa es buena-----\n\n\n\n');
                        successfully = true;
                    //    this.setState({userFriends: this.userFriends.push()})
                    //    this.makeStack(this.state.user.Friends);
                      }
                    })
                    .catch((error) => console.error(error))
                    .finally(() => {
               //       setTimeout(() => {  console.log("Fetch"); }, 2000);
                      if (successfully){
                        console.log('-----Se va a llamar a callGetFriends-----\n\n\n\n');
                        this.callGetFriends();
                      //  this.makeStack(this.state.userFriends);
                      }

                    });

}

 _onSwipedLeft() {
   this.increaseCont();
   console.log("No friends...");
 }

 _onSwipedRight() {
   if (this.state.usersStack.length == 1 && this.state.usersStack[0].email == ""){
     console.log("No more users");
   }else{
     this.makeFriend(this.state.usersStack[this.state.cont].email);
     this.callGetFriends();
     this.increaseCont();
     console.log("New friend!");
   }
 }

   componentDidMount(){
  //   this.callGetFriends();
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
         })
         .catch((error) => console.error(error))
         .finally(() => {
    //       setTimeout(() => {  console.log("Fetch"); }, 2000);
    //       setFriends(amigos);
           this.makeStack(user.amigos);
           this.setState({ isLoading: false });
         });
   //this.getImages();
//   console.log('-----Aquí allUsers-----\n\n\n\n');



  // this.setState({ allUsers: allUsers });
  // this.setState({ isLoading: false });
//   console.log('-----Aquí el estado allUsers-----\n\n\n\n');
  // console.log(this.state.allUsers);
   //console.log('\n\n\n\n----------');
}



  render() {
    return (
      <View style={styles.container}>
        <Swiper
          cards={this.state.usersStack}    //Swiper tiene variables para saber si desliza a izq o drcha
          renderCard={Card}
          disableBottomSwipe
          disableTopSwipe
          infinite
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          backgroundColor="white"
          stackSize={1}
          onSwipedLeft={() => this._onSwipedLeft()}
          onSwipedRight={() => this._onSwipedRight()}

        />
      </View>
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
    alignItems: 'center',
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
