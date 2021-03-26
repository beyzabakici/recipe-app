import {StyleSheet, Dimensions} from 'react-native';

const device_width = Dimensions.get('window').width;
const device_height = Dimensions.get('window').height;

const detail_page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  area: {
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.25)',
    margin: 5,
    padding: 3,
  },
  country_view: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    backgroundColor: 'rgba(0,0,0,0.25)',
    padding: 3,
  },
  category_view: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    right: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    padding: 3,
  },
  title_default: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
    color: 'white',
  },
  text_default: {
    fontSize: 16,
    fontWeight: '300',
    margin: 5,
  },
  image: {
    width: device_width,
    height: device_height / 3,
  },
  scroll_area: {
    margin: 10,
  },
  youtube_button: {
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 1,
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'white',
  },
});

const main_page = StyleSheet.create({
  container: {
    flex: 1,
  },
  meal_container: {
    flex: 4,
  },
});
export {detail_page, main_page};
