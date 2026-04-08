import { Link } from "expo-router";
import { Text, View } from "react-native";

const SingIn = () => {
    return (
        <View>
            <Text>SingIn</Text>
            <Link href="/(auth)/sign-up" />
        </View>
    );
};

export default SingIn;
