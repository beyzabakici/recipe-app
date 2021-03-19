import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { category_item } from '../styles'

function CategoryItem({ item , onSelect}) {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={category_item.container}>
      <Image
          style={category_item.image}
          source={{ uri: item.strCategoryThumb }}
        />
        <Text style={category_item.title} >{item.strCategory}</Text>
      </View>
    </TouchableOpacity>
  )
}

export { CategoryItem };