import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import axios from 'axios';

import {MealCategories, MealItem} from '../components';

function MainPage() {
  const [categoryList, setCategoryList] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState('');

  function getCategoryList() {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`,
      )
      .then(({data}) => setCategoryList(data.meals));
  }

  function handleCategory(category) {
    setSelectedCategory(category);
  }

  function handleDefaultCategory(defaultCategory) {
    setSelectedCategory(defaultCategory);
  }

  React.useEffect(() => {
    getCategoryList();
  }, [selectedCategory]);

  const renderMealList = ({item}) => {
    return <MealItem item={item} />;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <MealCategories
        category={handleCategory}
        defaultCategory={handleDefaultCategory}
      />
      <FlatList
        keyExtractor={item => item.idMeal}
        data={categoryList}
        renderItem={renderMealList}
        numColumns="2"
      />
    </SafeAreaView>
  );
}

export {MainPage};
