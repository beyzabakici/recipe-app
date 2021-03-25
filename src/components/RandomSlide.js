import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

import {random_slide} from '../styles/components_styles';

function RandomSlide({navigation}) {
  const [randomMeal, setRandomMeal] = React.useState([]);
  const [repeatRandom, setRepeatRandom] = React.useState(false);

  React.useEffect(() => {
    getRandomMeal();
    setRepeatRandom(false);
  }, [repeatRandom]);

  function getRandomMeal() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(({data}) => setRandomMeal(data.meals[0]));
  }

  function handleRandom() {
    setRepeatRandom(true);
  }
  function navigateToDetail(meal) {
    navigation.navigate('Detail Page', {
      id: meal.idMeal,
      name: meal.strMeal,
    });
  }

  return (
    <TouchableOpacity
      style={random_slide.container}
      onPress={() => navigateToDetail(randomMeal)}>
      <View style={random_slide.cricle_timer}>
        <CountdownCircleTimer
          isPlaying
          onComplete={() => {
            handleRandom();
            return [true, 1000];
          }}
          duration={10}
          size={25}
          strokeWidth={2}
          colors={'#ff6347'}
        />
      </View>
      <Text style={random_slide.title}>{randomMeal.strMeal}</Text>
      <Image
        style={random_slide.image}
        source={{uri: randomMeal.strMealThumb}}
      />
    </TouchableOpacity>
  );
}

export {RandomSlide};
