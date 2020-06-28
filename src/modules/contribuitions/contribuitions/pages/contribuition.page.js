import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// styles
import style from './contribuition.styles';
import { AntDesign } from '@expo/vector-icons';

export default function contribuition() {
  const navigation = useNavigation();

  function navigateToActivity() {
    navigation.navigate('activity');
  }

  return (
    <View style={style.container}>
      <View style={style.moreContainer}>
        <TouchableOpacity style={style.moreButton}>
          <AntDesign name="pluscircle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={style.headerContainer}>
        <Text style={style.headerUserNamer}>Wellcome AndersonAndrad</Text>
        <Text style={style.headerYear}>Year: 2020</Text>
        <TouchableOpacity style={style.headerButton}>
          <Text style={style.headerButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={style.contribuitionContainer}>
        <View style={style.contributionCard}>
          <Text style={style.contribuitionDate}>Jun 27, 2020</Text>
          <TouchableOpacity
            style={style.contribuition}
            onPress={navigateToActivity}
          >
            <Text style={style.contribuitionTitle}>Contribuition activity</Text>
            <Text style={style.contribuitionNumber}>9 Contribuitions</Text>
          </TouchableOpacity>
        </View>
        <View style={style.contributionCard}>
          <Text style={style.contribuitionDate}>Jun 26, 2020</Text>
          <TouchableOpacity style={style.contribuition}>
            <Text style={style.contribuitionTitle}>Contribuition activity</Text>
            <Text style={style.contribuitionNumber}>28 Contribuitions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
