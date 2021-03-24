import React from 'react';
import {Image, View, Text} from 'react-native';
import axios from 'axios';

import {random_slide} from '../styles/components_styles';

function RandomSlide() {
  const [randomMeal, setRandomMeal] = React.useState([]);

  React.useEffect(() => {
    getRandomMeal();
  }, []);

  function getRandomMeal() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(({data}) => setRandomMeal(data.meals[0]));
  }
  return (
    <View style={random_slide.container}>
      <Text style={random_slide.title}>{randomMeal.strMeal}</Text>
    </View>
  );
}

export {RandomSlide};
