import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import axios from 'axios';

import { CategoryItem } from '../components'

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function MealCategories({category}) {
  console.log(category)

  const [mealCategories, setMealCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState('Beef');

  function getCategories() {
    axios.get(apiUrl).then((response) => setMealCategories(response.data.categories));
  }

  function getSelectedCategory(item) {
    setSelectedCategory(item.strCategory);
  }

  React.useEffect(() => {
    getCategories();  
    category = selectedCategory;
  }, []);

  const renderMealCategory = ({ item }) => {
    return (
      <CategoryItem item={item} onSelect={() => setSelectedCategory(item.strCategory)} />
      )
    }   
  return (
    <SafeAreaView>
      <View>
        <FlatList
          horizontal={true}
          keyExtractor={(item) => item.idCategory}
          data={mealCategories}
          renderItem={renderMealCategory}
        />
      </View>
    </SafeAreaView>
  )
}

export { MealCategories };