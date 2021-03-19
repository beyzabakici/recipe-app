import { StyleSheet, Dimensions } from 'react-native';

const device_width = Dimensions.get('window').width;
const device_height = Dimensions.get('window').height;

const category_item = StyleSheet.create({
  container: {
    height: device_height /14,
    flex: 1,
    margin: 5,
    padding: 2,
    borderColor: 'tomato',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 20,
    width: device_width / 2.7,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center'
  },
  image: {
    position: 'absolute',
    width: 50,
    height:50, 
    borderRadius: 30,
    left: 5,
  },
  title: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 15,
    
  },
});
const meal_item = StyleSheet.create({
  container: {
    backgroundColor:'white',
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 20,
    margin: 5,
    padding: 3,
    height: device_height / 3,
    width: device_width /2.1
  },
  title:{
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
  image:{
    flex: 1,
    borderRadius: 15

  },
});

export { category_item, meal_item };