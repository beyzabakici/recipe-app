import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {detail_page, device_width} from '../styles';
import { back } from 'react-native/Libraries/Animated/Easing';

function DetailPage({route, navigation: { goBack }}) {
  const {id} = route.params;
  const {name} = route.params;
  const [detail, setDetail] = React.useState([]);

  React.useEffect(() => {
    getMealDetail();
  }, [detail]);

  async function getMealDetail() {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    setDetail(response.data.meals[0]);
  }

  function redirectToYoutubeLink() {
    Linking.openURL(detail.strYoutube);
  }

  return (
    <SafeAreaView style={detail_page.container}>
      <TouchableOpacity
        style={detail_page.back_button}
        onPress={() => goBack()}>
        <Icon name="chevron-left" size={40} color="tomato" />
      </TouchableOpacity>
      <View style={detail_page.area}>
        <Text style={detail_page.title}>{name}</Text>
        <Image style={detail_page.image} source={{uri: detail.strMealThumb}} />
        <View style={detail_page.country_view}>
          <Icon name="earth" size={20} color="white" />
          <Text style={detail_page.title_default}>{detail.strArea}</Text>
        </View>
        <View style={detail_page.category_view}>
          <Icon name="earth" size={20} color="white" />
          <Text style={detail_page.title_default}>{detail.strCategory}</Text>
        </View>
      </View>
      <View>
        <ScrollView style={detail_page.scroll_area}>
          <Text style={detail_page.text_default}>{detail.strInstructions}</Text>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={detail_page.youtube_button}
        onPress={redirectToYoutubeLink}>
        <Icon name="youtube" size={40} color="red" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export {DetailPage};
