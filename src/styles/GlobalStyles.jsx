import { StyleSheet } from 'react-native';
import { colors } from './colors';


export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundImage does not exist in React Native styles. 
    // You handle the image in the component itself.
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.bg,
    padding: 16, // This replaces paddingHorizontal/Vertical/Block for simplicity
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    // 'elevation' is Android only. 
    // For iOS, you'd need shadowColor, shadowOpacity, etc.
    elevation: 5, 
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
});