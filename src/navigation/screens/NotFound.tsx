import { Text, Button } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import { ROUTES } from '../routers';

export function NotFound() {
  return (
    <View style={styles.container}>
      <Text>404</Text>
      <Button screen={ROUTES.MAIN_TABS}>Go to Home</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
