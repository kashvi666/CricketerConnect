import { Linking, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { styles } from './App.styles';
import { ProfileCard } from './components/profileCard/Profile';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>My First App Using Expo</Text>

      <ProfileCard
        username={"MS Dhoni"}
        description={"Batsman | Wicket-keeper"}
        imgUrl={"https://images.news18.com/ibnlive/uploads/2024/10/ms-dhoni-csk-ipl-2025-2024-10-768f4f4630e2d64216ed2c73f82c179f-3x2.jpg"}
      />

      <ProfileCard
        username={"Virat Kohli"}
        description={"Batsman | Fielder"}
        imgUrl={"https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg"}
      />

      <ProfileCard
        username={"Yuvraj Singh"}
        description={"Batsman | Baller"}
        imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Yuvraj_Singh_bowling_%28cropped%29.jpg/640px-Yuvraj_Singh_bowling_%28cropped%29.jpg"}
      />

      <ProfileCard
        username={"Sachin Tendulkar"}
        description={"Batsman | All-rounder"}
        imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Historic_Moment_during_2011_Cricket_World_Cup.jpg/640px-Historic_Moment_during_2011_Cricket_World_Cup.jpg"}
      />


    </SafeAreaView>
  );
}
