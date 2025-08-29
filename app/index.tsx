import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>Index content</Text>
      <Link style={styles.links} href={'/dashboard'}>Redireccion a doctor</Link>
      <Link style={styles.links} href={'/login'}>Redireccion a login</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  links: {
    color: 'red',
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: 'black',
    margin: 10
  }
})


export default index