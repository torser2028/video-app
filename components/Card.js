import React from 'react';
import { Image, View, Text, TouchableHighlight, StyleSheet, Linking } from 'react-native';
import PropTypes from 'prop-types';

const Card = ({ title, image, description, url }) => {
  const imageSource = {
    uri: image
  };
  const onPressButton = () => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.mainImage} source={imageSource} />
      <Text style={styles.description}>{description}</Text>
      <TouchableHighlight
        onPress={onPressButton}
        style={styles.button}
        underlayColor="#ff6659"
      >
        <Text style={styles.buttonText}>
          Ver más
        </Text>
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 3,
  },
  title: {
    fontSize: 30,
    padding: 5,
    backgroundColor: "#9a0007",
    textAlign: 'center'
  },
  mainImage: {
    height: 200
  },
  button: {
    height: 38,
    marginTop: 10,
    backgroundColor: "#d32f2f",
    width: 140,
    alignSelf: 'flex-end',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 38,
    color: "#FFF",
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: "#000",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20
  }
});

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Card;
