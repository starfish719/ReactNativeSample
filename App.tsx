/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { ReactNode } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, TextInput, StatusBar } from 'react-native'

const Cat: () => JSX.Element = () => {
  const getFullName = (firstName: string, secondName: string, thirdName: string): string => {
    return firstName + ' ' + secondName + ' ' + thirdName
  }

  return (
    <View>
      <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}!</Text>
    </View>
  )
}
const App: () => ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <Cat />
            <Cat />
            <Cat />
            <Text>Hello, I am...</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1
              }}
              defaultValue="Name me!"
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFFFFF',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#FFFFFF',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

export default App
