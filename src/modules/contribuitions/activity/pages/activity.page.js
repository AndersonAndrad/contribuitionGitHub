import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './activity.styles';

export default function activity() {
  const navigate = useNavigation();

  function navigateToContribuitions() {
    navigate.navigate('contribuition');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Contribuition activity</Text>
          <Text style={styles.headerTitleData}>June 27, 2020</Text>
        </View>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={navigateToContribuitions}
        >
          <Text style={styles.headerButtonText}>back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.informationTitle}>
          Created 7 commits in 3 repositories
        </Text>
        <Text style={styles.informationText}>
          AndersonAndrad/jestStudy 5 commits
        </Text>
        <Text style={styles.informationText}>AndersonAndrad/jest 1 commit</Text>
        <Text style={styles.informationText}>
          AndersonAndrad/beTheHeroFrontend 1 commit
        </Text>
        <Text>--------------------------------------------------</Text>
        <Text style={styles.informationTitle}>Created 2 repositories</Text>
        <Text style={styles.informationText}>AndersonAndrad/jest</Text>
        <Text style={styles.informationText}>AndersonAndrad/jestStudy</Text>
        <Text>--------------------------------------------------</Text>
        <Text style={styles.headerTitleData}>June</Text>
        <Text style={styles.informationTitle}>
          Created 45 commits in 10 repositories
        </Text>
        <Text style={styles.informationText}>
          AndersonAndrad/betheheroFrontend 14 commits
        </Text>
        <Text style={styles.informationText}>
          AndersonAndrad/betheheroMobile 8 commits
        </Text>
        <Text style={styles.informationText}>
          AndersonAndrad/betheheroBackend 5 commits
        </Text>
        <Text style={styles.informationText}>
          AndersonAndrad/knex 5 commits
        </Text>
        <Text style={styles.informationText}>
          AndersonAndrad/stop 3 commits
        </Text>
        <Text style={styles.informationText}>
          AndersonAndrad/using.reacthooks 3 commits
        </Text>
        <Text style={styles.informationText}>
          AndersonAndrad/helpdesk.frontend 2 commits
        </Text>
        <Text style={styles.informationText}>
          AndersonAndrad/flux.architecture 2 commits
        </Text>
        <Text style={styles.informationText}>
          AndersonAndrad/aircnc.backend 2 commits
        </Text>
        <Text style={styles.informationText}>
          AndersonAndrad/SoftwareAndCommands 1 commit{' '}
        </Text>
      </View>
    </View>
  );
}
