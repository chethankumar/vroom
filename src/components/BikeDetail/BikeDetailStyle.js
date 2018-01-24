
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

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
    // alignItems: 'flex-start',
  },
  wrapper: {
    flex: 1,
  },
  content: {
    // paddingTop: 20,
    flex: 1,
  },
  back: {
    backgroundColor: 'transparent',
    paddingTop: 40,
    paddingLeft: 6,
  },
  footer: {
    // position: 'absolute',
    // bottom: 0,
    backgroundColor: '#fff',
    borderColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonWrapper: {
    padding: 25,
  },
  detailsCard: {
    padding: 0,
    marginTop: 25,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#fff',
  },
  aboutCard: {
    padding: 15,
  },
  detailsTextWrapper: {
    textAlign: 'center',
  },
  reviewsCard: {
    padding: 15,
    borderTopWidth: 0.5,
  },
  bookedText: {
    color: '#FF5722',
  },
  testDriveWrapper: {
    padding: 20,
    // borderBottomWidth: 1,
    // borderTopWidth: 1,
    // borderColor: '#ccc',
  },
  testDriveBtn: {
    borderRadius: 50,
  },
  statusBar: {
    backgroundColor: 'transparent',
    height: Constants.statusBarHeight + 20,
    elevation: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
  },
});

export default styles;
