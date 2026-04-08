import { styled } from "nativewind";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSSafeAreaView } from "react-native-safe-area-context";

import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/image";
import { formatCurrency } from "@/libs/utils";
import dayjs from "dayjs";
import { useState } from "react";

const SafeAreaView = styled(RNSSafeAreaView);

export default function App() {
  const [expendedSubscriptionId, setExpendedSubscriptionId] = useState<
    string | null
  >(null);

  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <>
              <View className="home-header">
                <View className="home-user">
                  <Image source={images.avatar} className="home-avatar" />
                  <Text className="home-user-name">{HOME_USER.name}</Text>
                </View>

                <Image source={icons.add} className="home-add-icon" />
              </View>

              <View className="home-balance-card">
                <Text className="home-balance-label">Balance</Text>
                <View className="home-balance-row">
                  <Text className="home-balance-amount">
                    {formatCurrency(HOME_BALANCE.amount)}
                  </Text>
                  <Text className="home-balance-date">
                    {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD/YYYY")}
                  </Text>
                </View>
              </View>

              <View className="mb-5">
                <ListHeading title="Upcoming" />
                <FlatList
                  horizontal
                  data={UPCOMING_SUBSCRIPTIONS}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <UpcomingSubscriptionCard {...item} />
                  )}
                  keyExtractor={(item) => item.id}
                  ListEmptyComponent={
                    <Text className="home-empty-state">
                      No upcoming renewls yet.
                    </Text>
                  }
                />
              </View>
              <ListHeading title="All Subscriptions" />
            </>
          )}
          data={HOME_SUBSCRIPTIONS}
          keyExtractor={(item) => item.id}
          contentContainerClassName="pb-30"
          renderItem={({ item }) => (
            <SubscriptionCard
              {...item}
              key={item.id}
              expanded={expendedSubscriptionId === item.id}
              onPress={() =>
                setExpendedSubscriptionId((current) =>
                  current === item.id ? null : item.id
                )}
            />
          )}
          showsVerticalScrollIndicator={false}
          extraData={expendedSubscriptionId}
          ItemSeparatorComponent={() => <View className="h-4" />}
          ListEmptyComponent={
            <Text className="home-empty-state">No subscriptions yet.</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}
