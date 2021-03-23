import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {category_item} from '../styles';

function CategoryItem({item, onSelect, activeCategory, isActive}) {
  function handleOnPress() {
    onSelect();
    activeCategory();
  }

  return (
    <TouchableOpacity
      style={
        isActive === item.strCategory
          ? category_item.activeContainer
          : category_item.defaultContainer
      }
      onPress={handleOnPress}>
      <Text
        style={
          isActive === item.strCategory
            ? category_item.activeTitle
            : category_item.defaultTitle
        }>
        {item.strCategory}
      </Text>
    </TouchableOpacity>
  );
}

export {CategoryItem};
