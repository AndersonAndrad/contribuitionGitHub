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
    alignItems: 'center',
  },
  headerUserNamer: {
    justifyContent: 'flex-start',
  },
  headerYear: {},
  headerButton: {
    backgroundColor: '#239a3b',
    padding: 10,
    borderRadius: 10,
  },
  headerButtonText: {
    color: '#fff',
  },

  // Contribuition
  contribuitionContainer: {},
  contributionCard: {
    marginTop: 10,
  },
  contribuitionDate: {},
  contribuition: {
    backgroundColor: '#239a3b',
    borderRadius: 10,
    padding: 10,
  },
  contribuitionTitle: {},
  contribuitionNumber: {},

  // more buttons
  moreContainer: {
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 24,
    marginTop: Constants.statusBarHeight + 20,
    width: '100%',
    height: '100%',
  },

  moreButton: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#239a3b',
    borderRadius: 50,
    marginBottom: 40,
    marginRight: 30,
    display: 'none',
  },
});
