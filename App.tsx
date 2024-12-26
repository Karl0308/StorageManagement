import { StatusBar } from 'expo-status-bar';
import { supabase } from './lib/supabase'
import { Session } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function App(){
  
const [session, setSession] = useState<Session | null>(null)

useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session)
  })

  supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session)
  })
}, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
