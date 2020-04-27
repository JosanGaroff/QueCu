import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { Divider, Icon, Text } from 'react-native-elements'
import Layout from '../constants/Layout'
import { HomeScreenPics, myProfile } from '../constants/Pics'
import { randomNo } from '../utils/randomNo'

import user from './login/LoginScreen'

const { pic, title } = myProfile[0]

const Social = ({ name }) => (
  <Icon
    name={name}
    type="font-awesome"
    containerStyle={styles.iconContainer}
    size={32}
  />
)

class ProfileScreen extends React.Component {

/*  function loadUser(email, password) {
              var data_file = ;
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
                    // Javascript function JSON.parse to parse JSON data
                    var jsonObj = JSON.parse(http_request.responseText);

                    user = jsonObj;
                    console.log(user);

                    if (user.email != "none"){
                      navigation.navigate('Dashboard');
                    }
                    else{
                      navigation.navigate('WrongLoginScreen');
                    }

                    // jsonObj variable now contains the data structure and can
                    // be accessed as jsonObj.name and jsonObj.country.
                   // document.getElementById("Name").innerHTML = jsonObj.name;
                   // document.getElementById("Country").innerHTML = jsonObj.country;
                 }
              }

              http_request.open("GET", data_file, true);
              http_request.send();
           }

           componentDidMount() {

            fetch('http://'+localhost+':8080/ISST-20-TFG/FormGetUser?email='+email+'&password='+password, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                  }
                })
            .then((response) => response.json())
                .then((json) => {
                  this.setState({ data: json });
                  console.log(this.state.data);
                })
                .catch((error) => console.error(error))
                .finally(() => {
                  this.setState({ isLoading: false });
                });

          }
    */
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={pic} style={styles.image} />
        </View>
        <Text h4 style={styles.name}>
          {user.nombre}, {user.edad}
        </Text>
        <Text style={styles.desc}> Ciudad: {user.ciudad}</Text>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>
          {user.descripcion}
        </Text>

        <Divider style={styles.divider} />
        <Text style={styles.desc}>Mis redes sociales:</Text>
        <View style={styles.socialLinks}>
          <Social name="snapchat" />
          <Social name="instagram" />
          <Social name="facebook-square" />
        </View>
      </SafeAreaView>
    )
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

export default ProfileScreen
