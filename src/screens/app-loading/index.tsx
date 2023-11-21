import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {LogoLight} from 'src/assets/png';

const AppLoading = () => {
  return (
    <View style={styless.container}>
      <DotLoading />
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppLoading;

const DotLoading = () => {
  const [dots, setDots] = useState(''); // Initial state is an empty string

  useEffect(() => {
    // Use a setInterval to add dots every 500ms
    const intervalId = setInterval(() => {
      if (dots.length >= 3) {
        setDots(''); // Reset to no dots
      } else {
        setDots(prevDots => prevDots + '.'); // Add a dot
      }
    }, 500);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [dots.length]);

  return (
    <View style={styles.container}>
      <Image source={LogoLight} style={styles.img} />
      <Text>App Template</Text>
      <Text>Loading{dots}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {height: 100, width: 100},
});
