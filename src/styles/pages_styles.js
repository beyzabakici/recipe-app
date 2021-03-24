import {StyleSheet, Dimensions} from 'react-native';

const device_width = Dimensions.get('window').width;
const device_height = Dimensions.get('window').height;

const detail_page = StyleSheet.create({
  container: {
    padding: 10,
  },
  title:{},
  image:{
    width: device_width,
    height: device_height / 3,
  },
  scroll_area: {
    padding: 5,
  },
  youtube_button: {
    width: device_width,
    backgroundColor: 'blue',
  },
});

const main_page = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export {detail_page, main_page};
