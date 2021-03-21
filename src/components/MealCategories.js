import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import axios from 'axios';

import {CategoryItem} from '../components';

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function MealCategories({category, defaultCategory}) {
  const [mealCategories, setMealCategories] = React.useState([]);

  function getCategories() {
    axios.get(apiUrl).then(({data}) => {
      const {categories} = data;
      setMealCategories(categories);
      defaultCategory(categories[0].strCategory);
    });
  }

  React.useEffect(() => {
    getCategories();
  }, []);

  const renderMealCategory = ({item}) => {
    return (
      <CategoryItem item={item} onSelect={() => category(item.strCategory)}/>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
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
