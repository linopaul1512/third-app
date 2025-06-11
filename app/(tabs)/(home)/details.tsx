import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

export default function HomeScreen (){
    return(
        <View style={styles.container}>
            <Text>Details</Text>
            <Link href="/">View details </Link>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})
