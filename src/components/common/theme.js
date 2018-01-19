// inspirations from airbnb theme

import { StyleSheet } from 'react-native';

const theme = StyleSheet.create({
  card: {
    marginBottom: 30,
    shadowOpacity: 0,
    borderWidth: 0,
    borderRadius: 0,
    padding: 15,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    elevation: 0,
  },
  image: {
    height: 200,
    width: '100%',
    borderWidth: 0,
    borderRadius: 2,
  },
  text_bold: {
    fontWeight: '800',
    fontSize: 30,
    fontFamily: 'Circular-Bold',
    backgroundColor: '#fff',
  },
  text_normal: {
    fontSize: 15,
    fontFamily: 'Circular',
    fontWeight: '500',
  },
  heading: {
    fontFamily: 'Circular-Bold',
    fontSize: 50,
    paddingLeft: 15,
  },
  base_background: {
    backgroundColor: '#fff',
  },
});

export default theme;
