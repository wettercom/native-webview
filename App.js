import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <View style={{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333'
      }}>
        <Text style={{ color: '#FFFFFF' }}>Radar Deutschland</Text>
      </View>
      <WebView
          source={{
            uri: 'http://192.168.2.57:8080/radar/v2/index.html',
          }}
        />
        <View style={{
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#333333'
        }}>
          <Text style={{ color: '#FFFFFF' }}>HIER KÖNNTE IHRE WERBUNG STEHEN</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
