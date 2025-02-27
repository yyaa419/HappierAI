

import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <>
    <Stack.Screen options={{ title: 'Oops!', headerShown: true, headerTitle: 'Oops!', headerTitleStyle: { fontSize: 20, fontWeight: 'bold' } }} />
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Anything bothering you ?</ThemedText>
        <ThemedText style={styles.link}>what if there's another way to see this?</ThemedText>
      </ThemedView>

      <ThemedView style={styles.dateContainer}>
        <ThemedText style={styles.date}>Today / OCT 20</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.journalText}>
          I'm an artist pouring my heart into my work, but no one seems to notice. Rejected by galleries and lost in social media algorithms, I question if I'm good enough. I'm torn between creating and giving up, hoping that one day, someone will truly see and appreciate my art.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.footer}>
        <ThemedText style={styles.button}>Reshape my thoughts</ThemedText>
      </ThemedView>
    </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginTop: 40,
    gap: 8,
  },
  link: {
    color: '#6B7280',
    textDecorationLine: 'underline',
  },
  dateContainer: {
    marginTop: 24,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    color: '#4B5563',
  },
  contentContainer: {
    flex: 1,
  },
  journalText: {
    fontSize: 16,
    lineHeight: 24,
  },
  footer: {
    padding: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#818CF8',
    color: 'white',
    padding: 16,
    borderRadius: 25,
    textAlign: 'center',
    overflow: 'hidden',
  },
});
