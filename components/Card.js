import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Tile } from 'react-native-elements'
import Layout from '../constants/Layout'

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49 // found from https://stackoverflow.com/a/50318831/6141587

export const Card = ({ pic, title, caption }) => (
  <Tile
    imageSrc={pic}
    imageContainerStyle={styles.imageContainer}
    activeOpacity={1}
    title={title}
    titleStyle={styles.title}
    caption={caption}
    captionStyle={styles.caption}
    containerStyle={styles.container}
    featured
  />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden'
  },
  imageContainer: {
    borderRadius: 20,
    width: Layout.window.width - 0,
    height: Layout.window.height - BOTTOM_BAR_HEIGHT * 4 ,
    borderRadius: 20,
    overflow: 'hidden', // this does magic
  },
  title: {
    position: 'absolute',
    left: 10,
    bottom: 70,
  },
  caption: {
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
})
