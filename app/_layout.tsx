import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ZendeskWidget from './components/ZendeskWidget';
import { useNotifications } from './hooks/useNotifications';
import { useZendesk } from './hooks/useZendesk';

export default function RootLayout() {
  const token = useNotifications();
  const { handleOpenChat } = useZendesk({ token });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#252324" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <ZendeskWidget icon="chatbox" onPress={handleOpenChat} style={styles.chatButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  chatButton: {
    position: 'absolute',
    bottom: 64,
    right: 12,
  },
});
