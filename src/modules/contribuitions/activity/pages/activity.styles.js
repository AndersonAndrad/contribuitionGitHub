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

  // header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitleContainer: {},
  headerTitle: {},
  headerTitleData: {
    fontSize: 16,
  },
  headerButton: {
    backgroundColor: '#239a3b',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtonText: {
    color: '#fff',
  },

  // information
  informationContainer: {
    marginTop: 30,
  },
  informationTitle: {
    marginBottom: 15,
    fontSize: 18,
  },
  informationText: {
    marginBottom: 5,
  },
});
