import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    height: '100%',
    width: '100%',
  },

  titleContainer: {
    // backgroundColor: '#f14f15',
  },

  titleText: {
    fontSize: 15,
    color: '#757575',
  },

  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    maxHeight: 450,
  },
  titleLinkText: {
    margin: 30,
    fontSize: 18,
  },
  linkText: {
    marginBottom: 15,
    fontSize: 15,
  },
  inputText: {
    backgroundColor: '#e3e3e3',
    fontSize: 14,
    width: '100%',
    maxWidth: 250,
    alignItems: 'center',
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
  button: {
    marginTop: 60,
    backgroundColor: '#F14f15',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 15,
    color: '#fff',
  },
});
