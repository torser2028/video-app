import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';

const CardSet = ({items}) => (
  <ScrollView>
    <View style={styles.container}>
      {
        // items.map(item => <Card key={item.id} id={item.id} title={item.title} description={item.description} image={item.image} url={item.url} />)
        // Aplying spread operator
        items.map(item =>
          <View key={item.id} style={styles.cardStyle}>
            <Card {...item} />
          </View>
        )
      }
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#e1e2e1",
  },
  cardStyle: {
    marginBottom: 20
  }
});

CardSet.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default CardSet;
