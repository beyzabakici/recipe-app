import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import axios from 'axios';

import {MealCategories, MealItem, RandomSlide} from '../components';
import {main_page} from '../styles/pages_styles';

function MainPage({navigation}) {
  const [categoryList, setCategoryList] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState('');

  React.useEffect(() => {
    getCategoryList();
  }, [selectedCategory]);

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

  const renderMealList = ({item}) => {
    return (
      <MealItem
        item={item}
        onSelect={() =>
          navigation.navigate('Detail Page', {
            id: item.idMeal,
            name: item.strMeal,
          })
        }
      />
    );
  };

  return (
    <SafeAreaView style={main_page.container}>
      <RandomSlide />
      <View style={main_page.meal_container}>
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
      </View>
    </SafeAreaView>
  );
}

export {MainPage};
