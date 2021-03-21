import {StyleSheet, Dimensions} from 'react-native';

const device_width = Dimensions.get('window').width;
const device_height = Dimensions.get('window').height;

const category_item = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    height: device_height / 14,
    width: device_width / 3.2,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
  },
  defaultTitle: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 15,
  },
  activeContainer: {
    borderBottomColor: 'tomato',
    borderBottomWidth: 2,
  },
  activeTitle: {
    color: 'tomato',
  },
});
const meal_item = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 5,
    height: device_height / 3,
    width: device_width / 2.1,
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
    borderRadius: 15,
  },
});

export {category_item, meal_item};
