import { Button, View } from "react-native"


function SignIn({navigation}) {
    return (
        <View className="flex-1 items-center justify-center bg-blue-600">
            <Button title="SignIn" onPress={() => navigation.navigate("Tabs")} />
        </View>
    )
}

export default SignIn