import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    // backgroundColor: '#FF5722',
    // padding: 20,
  },
  intro: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  image: {
    height: 100,
    width: '50%',
    alignSelf: 'flex-start',
    transform: [{ scaleX: -1 }],
  },
  facebookButton: {
    borderRadius: 50,
  },
  fbIcon: {
    fontSize: 20,
    // height: 40,
    // width: 40,
  },
  createButton: {
    // backgroundColor: '#FF5722',
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 20,
  },
  formWrapper: {
    paddingTop: 40,
    paddingBottom: 40,
    marginBottom: 30,
    flexGrow: 2,

  },
  formItem: {
    marginBottom: 20,
    marginLeft: 0,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  statusBar: {
    backgroundColor: '#FC642D',
    height: Constants.statusBarHeight,
    elevation: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
  },
});

export default styles;
