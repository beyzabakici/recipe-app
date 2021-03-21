import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';

import {meal_item} from '../styles';

function MealItem({item}) {
  return (
    <TouchableOpacity>
      <View style={meal_item.container}>
        <Image style={meal_item.image} source={{uri: item.strMealThumb}} />
        <Text style={meal_item.title}>{item.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
}

export {MealItem};
