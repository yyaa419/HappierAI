import React from 'react';
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function History() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen 
        options={{ 
          headerShown: true,
          title: "My History",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: '600',
          },
          headerLeft: () => (
            <Pressable onPress={() => router.back()} style={{ marginLeft: 16 }}>
              <ThemedText>
                <Ionicons name="arrow-back" size={24} color="#4B5563" />
              </ThemedText>
            </Pressable>
          ),
        }} 
      />
      <ThemedView style={styles.container}>
        <ScrollView style={styles.content}>
          <View style={styles.dateSection}>
            <ThemedText style={styles.dateHeader}>Today / OCT 20</ThemedText>
            <View style={styles.entriesContainer}>
              {[1, 2, 3].map((_, index) => (
                <View key={index} style={styles.entryCard}>
                  <ThemedText style={styles.entryText}>
                    Just finished a captivating painting session - poured my emotions onto canvas using vibrant
                  </ThemedText>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.dateSection}>
            <ThemedText style={styles.dateHeader}>2 days ago / OCT 18</ThemedText>
            <View style={styles.entriesContainer}>
              {[1, 2, 3].map((_, index) => (
                <View key={index} style={styles.entryCard}>
                  <ThemedText style={styles.entryText}>
                    Just finished a captivating painting session - poured my emotions onto canvas using vibrant
                  </ThemedText>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.dateSection}>
            <ThemedText style={styles.dateHeader}>1 week ago / OCT 12</ThemedText>
            <View style={styles.entriesContainer}>
              <View style={styles.entryCard}>
                <ThemedText style={styles.entryText}>
                  Just finished a captivating painting session - poured my emotions onto canvas using vibrant
                </ThemedText>
              </View>
            </View>
          </View>
        </ScrollView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 50,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  dateSection: {
    marginBottom: 24,
  },
  dateHeader: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 12,
  },
  entriesContainer: {
    gap: 12,
  },
  entryCard: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 12,
  },
  entryText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
});