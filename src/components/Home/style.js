import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  text: {
    color: 'red',
  },
  contentContainer: {
    paddingVertical: 20,
  },
  statusBar: {
    backgroundColor: '#fff',
    height: Constants.statusBarHeight,
    elevation: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
  },
  footer: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 1,
  },
  footerTabBtn: {
    borderRadius: 0,
    borderRightWidth: 1,
    borderColor: '#FF5722',
  },
  footerText: {
    fontSize: 14,
  },
});

export default styles;
