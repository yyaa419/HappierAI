import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  return (
    <>
      <Stack.Screen 
        options={{ 
          headerShown: false,
        }} 
      />
      <ThemedView style={styles.container}>
        <ThemedView style={styles.header}>
          <ThemedText type="title">Anything bothering you ?</ThemedText>
          <ThemedText style={styles.subtitle}>what if there's another way to see this?</ThemedText>
        </ThemedView>

        <ThemedView style={styles.dateContainer}>
          <View style={styles.dateWrapper}>
            <Ionicons name="menu-outline" size={20} color="#4B5563" />
            <ThemedText style={styles.date}>Today / OCT 20</ThemedText>
          </View>
          <View style={styles.progressLine}>
            <View style={styles.purpleSegment} />
            <View style={styles.greySegment} />
            <View style={styles.greySegment} />
          </View>
        </ThemedView>

        <ThemedView style={styles.contentContainer}>
          <ThemedText style={styles.journalText}>
            I'm an artist pouring my heart into my work, but no one seems to notice. Rejected by galleries and lost in social media algorithms, I question if I'm good enough. I'm torn between creating and giving up, hoping that one day, someone will truly see and appreciate my art.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.floatingButtons}>
          <Pressable 
            style={styles.iconButton}
            onPress={() => router.push('/history')}
          >
            <Ionicons name="time-outline" size={24} color="#6B7280" />
          </Pressable>
          <Pressable style={styles.iconButton}>
            <Ionicons name="add" size={24} color="#6B7280" />
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.footer}>
          <Pressable
              onPress={() => router.push('/feeling')}
          >
          <ThemedText style={styles.button}>Reshape my thoughts</ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 20,
    gap: 8,
  },
  subtitle: {
    color: '#6B7280',
    fontSize: 16,
  },
  dateContainer: {
    marginTop: 24,
    marginBottom: 16,
    gap: 12,
  },
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
    color: '#1F2937',
  },
  floatingButtons: {
    position: 'absolute',
    right: 16,
    bottom: 150,
    gap: 16,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 16,
  },
  progressLine: {
    flexDirection: 'row',
    gap: 4,
    height: 4,
  },
  purpleSegment: {
    flex: 1,
    height: '100%',
    backgroundColor: '#818CF8',
    borderRadius: 2,
  },
  greySegment: {
    flex: 1,
    height: '100%',
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
  },
});