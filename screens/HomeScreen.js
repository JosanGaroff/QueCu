import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'
import { createStackNavigator } from 'react-navigation' //Navegación

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          cards={HomeScreenPics}    //Swiper tiene variables para saber si desliza a izq o drcha 
          renderCard={Card}
          infinite
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={2}
          onSwipedLeft={() => console.log('Next')}
          onSwipedRight={() => console.log('Café')}

        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
})

export default HomeScreen
