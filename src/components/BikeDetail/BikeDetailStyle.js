
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text_normal: {
    fontSize: 15,
    fontFamily: 'Circular',
    fontWeight: '300',
    paddingLeft: 18,
  },
  text_bold: {
    fontSize: 15,
    fontFamily: 'Circular',
    fontWeight: '700',
    color: '#149bcc',
  },
  image: {
    height: 300,
    width: '100%',
    // top: 0,
    // left: 0,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  content: {
    paddingTop: 290,
  },
  back: {
    backgroundColor: 'transparent',
    paddingTop: 40,
    paddingLeft: 6,
  },
});

export default styles;
