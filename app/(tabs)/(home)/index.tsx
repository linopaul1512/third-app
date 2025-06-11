import { Link, router } from 'expo-router'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function HomeScreen (){
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Link href="/details">View details </Link>
            <Pressable
                    onPress={() =>
                    router.navigate({
                        pathname: '/details',
                        params: { id: 'bacon' }
                    })
                    }
                >
                <Text>View user (imperative)</Text>
            </Pressable>
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
