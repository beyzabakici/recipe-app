import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import axios from 'axios';

import { MealCategories, MealItem } from '../components';

function MainPage() {
  const [categoryList, setCategoryList] = React.useState([]);

  function getCategoryList() {
    axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`,
    ).then((response) => setCategoryList(response.data.meals))
  }

  React.useEffect(() => {
    getCategoryList();
  }, []);

  const renderMealList = ({ item }) => {
    return (
      <MealItem item={item} />
    )
  }
  const HeaderComponent = () => {
    return <MealCategories />
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={HeaderComponent}
        keyExtractor={(item) => item.idMeal}
        data={categoryList}
        renderItem={renderMealList}
        numColumns='2'
      />
    </SafeAreaView>
  )
}

export { MainPage };