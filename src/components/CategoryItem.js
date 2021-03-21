import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {category_item} from '../styles';

function CategoryItem({item, onSelect}) {
  const [isActive, setIsActive] = React.useState(false);

  function textStyle() {
    if (isActive) {
      return [category_item.defaultTitle, category_item.activeTitle];
    }

    return category_item.defaultTitle;
  }

  function containerStyle() {
    if (isActive) {
      return [category_item.defaultContainer, category_item.activeContainer];
    }
    return category_item.defaultContainer;
  }
  return (
    <TouchableOpacity
      style={containerStyle()}
      onPress={() => {
        onSelect();
        setIsActive(true);
      }}>
      <Text style={textStyle()}>{item.strCategory}</Text>
    </TouchableOpacity>
  );
}

export {CategoryItem};
