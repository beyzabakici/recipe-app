import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';

import {meal_item} from '../styles';

function MealItem({item, onSelect}) {
  return (
    <TouchableOpacity style={meal_item.container} onPress={onSelect}>
      <Image style={meal_item.image} source={{uri: item.strMealThumb}} />
      <Text style={meal_item.title}>{item.strMeal}</Text>
    </TouchableOpacity>
  );
}

export {MealItem};
