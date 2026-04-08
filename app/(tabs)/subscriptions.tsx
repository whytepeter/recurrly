import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSSafeAreaView);

const Subscriptions = () => {
    return (
        <SafeAreaView className="flex-1 p-5 bg-background">
            <Text>subscriptions</Text>
        </SafeAreaView>
    );
};

export default Subscriptions;
