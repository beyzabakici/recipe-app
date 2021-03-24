import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import axios from 'axios';

import {CategoryItem} from '../components';

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function MealCategories({category, defaultCategory}) {
  const [mealCategories, setMealCategories] = React.useState([]);
  const [activeCategory, setActiveCategory] = React.useState('Beef');

  function getCategories() {
    axios.get(apiUrl).then(({data}) => {
      const {categories} = data;
      setMealCategories(categories);
      defaultCategory(categories[0].strCategory);
    });
  }

  React.useEffect(() => {
    getCategories();
  });

  function handleOnSelected(item) {
    category(item);
    setActiveCategory(item);
  }

  const renderMealCategory = ({item}) => {
    return (
      <CategoryItem
        item={item}
        onSelect={() => handleOnSelected(item.strCategory)}
        isActive={activeCategory}
      />
    );
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={item => item.idCategory}
          data={mealCategories}
          renderItem={renderMealCategory}
        />
      </View>
    </SafeAreaView>
  );
}

export {MealCategories};
