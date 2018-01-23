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
  text_light: {
    fontSize: 16,
    fontFamily: 'Calibre-Light',
    fontWeight: '200',
  },
  heading: {
    fontFamily: 'Circular-Bold',
    fontSize: 40,
    paddingLeft: 15,
  },
  base_background: {
    backgroundColor: '#fff',
    paddingTop: 0,
  },
  primary_btn: {
    backgroundColor: '#FF5722',
    borderColor: '#FF5722',
    borderRadius: 2,
  },
  secondary_btn: {
    backgroundColor: '#fff',
    borderColor: '#FF5722',
    borderRadius: 2,
  },
  noshadow: {
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
  },
  noelevation: {
    elevation: 0,
  },
  noborder: {
    borderWidth: 0,
    borderRadius: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  text_regular: {
    fontSize: 18,
    fontFamily: 'Circular-Light',
    fontWeight: '200',
  },
  text_regular_large: {
    fontSize: 25,
    fontFamily: 'Circular-Light',
    fontWeight: '200',
  },
  theme_color: {
    color: '#FF5722',
  },
  invert_color: {
    color: '#fff',
  },
  theme_background: {
    backgroundColor: '#FF5722',
  },
});

export default theme;
