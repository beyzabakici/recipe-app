import {StyleSheet, Dimensions} from 'react-native';

const device_width = Dimensions.get('window').width;
const device_height = Dimensions.get('window').height;

const category_item = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    height: device_height / 18,
    width: device_width / 3.2,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  defaultTitle: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 14,
  },
  activeContainer: {
    flex: 1,
    height: device_height / 18,
    width: device_width / 3.2,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomColor: 'tomato',
    borderBottomWidth: 2,
  },
  activeTitle: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'tomato',
    fontSize: 15,
  },
});
const meal_item = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 2,
    height: device_height / 3,
    width: device_width / 2.05,
  },
  title: {
    flex: 1,
    position: 'absolute',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    bottom: 10,
    fontSize: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  image: {
    flex: 1,
  },
});

const random_slide = StyleSheet.create({
  container: {
    width: device_width,
    height: device_height / 5,
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 200,
  },
});

export {category_item, meal_item, random_slide};
