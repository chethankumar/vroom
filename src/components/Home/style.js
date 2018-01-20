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
});

export default styles;
