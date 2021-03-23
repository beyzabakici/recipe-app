import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import {detail_page} from '../styles';

function DetailPage({navigation, route}) {
  const [detail, setDetail] = React.useState([]);
  const {id} = route.params;
  const {name} = route.params;

  async function getMealDetail() {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    setDetail(response.data.meals[0]);
  }

  React.useEffect(() => {
    getMealDetail();
  }, []);

  function redirectToYoutubeLink() {
    Linking.openURL(detail.strYoutube);
  }

  return (
    <SafeAreaView>
      <Button onPress={() => navigation.goBack()} title="< Back" />
      <View style={detail_page.container}>
        <Text style={detail_page.title}>{name}</Text>
        <Image style={detail_page.image} source={{uri: detail.strMealThumb}} />
        <View style={detail_page.area}>
          <Text style={detail_page.text_default}>{detail.strArea}</Text>
          <Text style={detail_page.text_default}>{detail.strCategory}</Text>
        </View>
        <ScrollView style={detail_page.scroll_ares}>
          <Text style={detail_page.text_default}>{detail.strInstructions}</Text>
        </ScrollView>
        <TouchableOpacity
          style={detail_page.youtube_button}
          onPress={redirectToYoutubeLink}>
          <Text style={detail_page.text_youtube}>YouTube</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export {DetailPage};
