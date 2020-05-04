import React, {useState} from 'react'
import { Image, SafeAreaView, StyleSheet, View, Alert} from 'react-native'
import { Divider, Icon, Text } from 'react-native-elements'
import Layout from '../constants/Layout'
import { HomeScreenPics, myProfile } from '../constants/Pics'
import { randomNo } from '../utils/randomNo'

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
  ageValidator,
  cityValidator,
  descriptionValidator,
} from '../core/utils';

import {mainUrl, user, setUser, userFoto, allUsers, setFoto} from '../components/User';

const { pic, title } = myProfile[0];

  const Social = ({ name }) => (
    <Icon
      name={name}
      type="font-awesome"
      containerStyle={styles.iconContainer}
      size={32}
    />
  )

  const imprime = () => {
    console.log(user);
  }

var usuario;

var successfullyUploaded = false;

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

class ProfileScreen extends React.Component {

  state = {

    name: {value:user.nombre, error:""},
    password: {value:user.password, error:""},
    email: {value:user.email, error:""},
    age: {value:user.edad.toString(), error:""},
    city: {value:user.ciudad, error:""},
    description: {value:user.descripcion, error:""},
    isEditing: false,
    image: userFoto

  }

/*  constructor(props) {
      super(props);
      this.state = {
        usuario : user,
        name: user.name,
        editando : false
      };
    }*/
 componentDidMount(){

this.myFoto();

 }

 setName(name, error){
   this.setState({ name: {value: name, error: error}});
 }
 setEmail(email, error){
   this.setState({ email: {value: email, error:error}});
 }
 setPassword(password, error){
   this.setState({ password: {value: password, error:error}});
 }
 setAge(age, error){
   this.setState({ age: {value: age, error:error}});
 }
 setCity(city, error){
   this.setState({ city: {value: city, error:error}});
 }
 setDescription(description, error){
   this.setState({ description: {value: description, error:error}});
 }
 _onEditPressed(func){
   console.log("1");
    var nameError = nameValidator(this.state.name.value);
    if (nameError == ""){nameError = false;}
//    const emailError = emailValidator(this.state.email.value);
//    const passwordError = passwordValidator(this.state.password.value);
    var ageError = ageValidator(this.state.age.value.toString());
    if (ageError == "" || ageError == undefined){ageError = false;}
    var cityError = cityValidator(this.state.city.value);
    if (cityError == ""){cityError = false;}
    var descriptionError = descriptionValidator(this.state.description.value);
    if (descriptionError == ""){descriptionError = false;}

    console.log('name:' +nameError+'age:' +ageError+'city:' +cityError+'description:' +descriptionError);

    if (nameError || ageError || cityError|| descriptionError) {
      console.log("2A");
      this.setName(this.state.name.value, nameError);
//      this.setPassword(this.state.password.value, passwordError);
//      this.setEmail(this.state.email.value, emailError);
      this.setAge(this.state.age.value, ageError);
      this.setCity(this.state.city.value, cityError);
      this.setDescription(this.state.description.value, descriptionError);
      return;
    }
    console.log("2B");
    this.uploadNewProfile(func);
  }

  toogleEditando() {
    if (this.state.isEditing == false ){
      console.log(user.password);
       this.setState({ isEditing: true});
  /*    const [email, setEmail] = useState({ value: '', error: '' });
      const [password, setPassword] = useState({ value: '', error: '' });
      const [name, setName] = useState ({ value: '', error: '' })
      const [age, setAge] = useState({ value: '', error: '' });
      const [city, setCity] = useState({ value: '', error: '' });
      const [description, setDescription] = useState({ value: '', error: '' });*/
    }else{
      const func = () => {this.setState({ isEditing: true});}
      this._onEditPressed(func);

        this.setState({ isEditing: false});

    }
  //  this.forceUpdate();
  }

uploadNewProfile(func){
  console.log("3");
  var data_file = mainUrl + 'FormGetEditarPerfil?email='+this.state.email.value+'&password='+this.state.password.value+'&descripcion='+this.state.description.value+'&ciudad='+this.state.city.value+'&nombre='+this.state.name.value+'&edad='+this.state.age.value;
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
            "¡Perfil actualizado con éxtio!",
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
     }
     console.log("6");
  }

  http_request.open("GET", data_file, true);
  http_request.send();
}

myFoto(){
  console.log('\n\n\n\n-----my foto-----\n\n\n\n');
  console.log(allUsers);
  console.log('\n\n\n\n-----my foto-----\n\n\n\n');
  for (var i=0; i<allUsers.length; i++){
    var userAux = allUsers[i];
    if (user.email == userAux.email){

    switch((i+fotos.length)%fotos.length){
      case 0:
      this.setState({image: require('../assets/images/men/men1.jpg')});
      setFoto(this.state.image);
      break;
      case 1:
        this.setState({image: require('../assets/images/men/men2.jpg')});
        setFoto(this.state.image);
        break;
      case 2:
      this.setState({image: require('../assets/images/men/men3.jpg')});
      setFoto(this.state.image);
      break;
      case 3:
      this.setState({image: require('../assets/images/men/men4.jpg')});
      setFoto(this.state.image);
      break;
      case 4:
      this.setState({image: require('../assets/images/men/men5.jpg')});
      setFoto(this.state.image);
      break;
      case 5:
      this.setState({image: require('../assets/images/men/men6.jpg')});
      setFoto(this.state.image);
      break;
      case 6:
      this.setState({image: require('../assets/images/men/men7.jpg')});
      setFoto(this.state.image);
      break;
      case 7:
      this.setState({image: require('../assets/images/men/men8.jpg')});
      setFoto(this.state.image);
      break;
      case 8:
      this.setState({image: require('../assets/images/men/men9.jpg')});
      setFoto(this.state.image);
      break;
      case 9:
      this.setState({image: require('../assets/images/men/men10.jpg')});
      setFoto(this.state.image);
      break;
      case 10:
      this.setState({image: require('../assets/images/men/men11.jpg')});
      setFoto(this.state.image);
      break;
      case 11:
      this.setState({image: require('../assets/images/men/men12.jpg')});
      setFoto(this.state.image);
      break;
      case 12:
      this.setState({image: require('../assets/images/men/men13.jpg')});
      setFoto(this.state.image);
      break;
      case 13:
      this.setState({image: require('../assets/images/men/men14.jpg')});
      setFoto(this.state.image);
      break;
      case 14:
      this.setState({image: require('../assets/images/men/men15.jpg')});
      setFoto(this.state.image);
      break;
    }
  }
  }
}

  render() {
        imprime();

    if (!this.state.isEditing){
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={this.state.image} style={styles.image} />
          </View>
          <Text h4 style={styles.name}>
            {this.state.name.value}, {this.state.age.value}
          </Text>
          <Text style={styles.desc}> Ciudad: {this.state.city.value}</Text>
          <Divider style={styles.divider} />
          <Text style={styles.desc}>
            {this.state.description.value}
          </Text>

          <Divider style={styles.divider} />

          <Text style={styles.desc}>Mis redes sociales:</Text>
          <View style={styles.socialLinks}>
            <Social name="snapchat" />
            <Social name="instagram" />
            <Social name="facebook-square" />
          </View>
          <Button onPress={() => this.toogleEditando()}>
          <Text style={styles.link} >Editar Perfil</Text>
          </Button>
        </SafeAreaView>
      )
    }else{

      return (
        <SafeAreaView style={styles.container}>
      <TextInput
        label="Nombre"
        returnKeyType="next"
        value={this.state.name.value}
        onChangeText={text => this.setName(text, "")}
        error={!!this.state.name.error}
        errorText={this.state.name.error}
      />



      <TextInput
        label="Edad"
        returnKeyType="next"
        value={this.state.age.value}
        onChangeText={text => this.setAge(text, "")}
        error={!!this.state.age.error}
        errorText={this.state.age.error}
      />

      <TextInput
        label="Ciudad"
        returnKeyType="next"
        value={this.state.city.value}
        onChangeText={text => this.setCity(text, "")}
        error={!!this.state.city.error}
        errorText={this.state.city.error}
      />

      <TextInput
        label="Descripción"
        returnKeyType="done"
        value={this.state.description.value}
        onChangeText={text => this.setDescription(text, "")}
        error={!!this.state.description.error}
        errorText={this.state.description.error}
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
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 20,
  },
  image: {
    width: Layout.window.width - 60,
    height: Layout.window.height / 2 - 60,
    borderRadius: 20,
  },
  name: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  desc: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
})

export default ProfileScreen;

/*
<TextInput
  label="Email"
  returnKeyType="next"
  value={this.state.email.value}
  onChangeText={text => this.setEmail({ value: text, error: '' })}
  error={!!this.state.email.error}
  errorText={this.state.email.error}
  autoCapitalize="none"
  autoCompleteType="email"
  textContentType="emailAddress"
  keyboardType="email-address"
/>

<TextInput
  label="Contraseña"
  returnKeyType="next"
  value={this.state.password.value}
  onChangeText={text => this.setPassword(text, "")}
  error={!!this.state.password.error}
  errorText={this.state.password.error}
  secureTextEntry
/>
*/
