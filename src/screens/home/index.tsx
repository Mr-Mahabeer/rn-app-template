import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native';

enum COLORS {
  BLACK = 'black',
  WHITE = 'white',
}

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>
        This project is a template application for any react native application
        project for either personal or industrial use. This template is build to
        skip the headache of setting up the navigation and project structure for
        any project. This template is an effort to save some time of our
        precious developers for some other work. Please refer to github readme.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
    gap: 15,
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  txt: {
    color: 'black',
    fontSize: 18,
    textAlign: 'justify',
  },
});

export default HomeScreen;
