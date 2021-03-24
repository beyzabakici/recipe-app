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
    flex: 2,
    height: device_height / 3,
    backgroundColor: 'white',
    margin: 2,
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
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    alignSelf: 'center',
    position: 'absolute',
    fontSize: 24,
    bottom: 0,
    zIndex: 99,
    color: 'tomato',
    backgroundColor: 'rgba(225,225,225,0.7)',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    margin: 2,
  },
  cricle_timer: {
    position: 'absolute',
    zIndex: 99,
    top: 2,
    left: 2,
  },
});

export {category_item, meal_item, random_slide};
