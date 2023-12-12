import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 relative">
      <SafeAreaView className="flex-1">
        <ScrollView className="py-16" showsVerticalScrollIndicator={true}>
          <View className="px-6">
            <Text className="text-4xl" style={{ fontFamily: "Inter_900Black" }}>
              Let’s enjoy your vacation!
            </Text>
          </View>

          {/* category components */}
          <View className="flex flex-col mt-[28px] px-6">
            <Text
              className="text-xl text-gray-400 mb-4"
              style={{ fontFamily: "Inter_500Medium" }}
            >
              Popular Category
            </Text>
            <View className="flex flex-row gap-5 flex-wrap">
              <View className="p-3 flex items-end w-[100px] h-[100px] bg-gray-700 rounded-xl">
                <View className="w-full h-full border flex-row items-end">
                  <Text className="text-white">Kuliner</Text>
                </View>
              </View>
              <View className="p-3 flex items-end w-[100px] h-[100px] bg-gray-700 rounded-xl">
                <View className="w-full h-full border flex-row items-end">
                  <Text className="text-white">Kuliner</Text>
                </View>
              </View>
              <View className="p-3 flex items-end w-[100px] h-[100px] bg-gray-700 rounded-xl">
                <View className="w-full h-full border flex-row items-end">
                  <Text className="text-white">Alam</Text>
                </View>
              </View>
              <View className="p-3 flex items-end w-[100px] h-[100px] bg-gray-700 rounded-xl">
                <View className="w-full h-full border flex-row items-end">
                  <Text className="text-white">Alam</Text>
                </View>
              </View>
              <View className="p-3 flex items-end w-[100px] h-[100px] bg-gray-700 rounded-xl">
                <View className="w-full h-full border flex-row items-end">
                  <Text className="text-white">Cafe</Text>
                </View>
              </View>
              <View className="p-3 flex items-end w-[100px] h-[100px] bg-gray-700 rounded-xl">
                <View className="w-full h-full border flex-row items-end">
                  <Text className="text-white">Cafe</Text>
                </View>
              </View>
            </View>
          </View>

          {/* blog component */}
          <View className="flex flex-col mt-[36px]">
            <Text
              className="text-xl text-gray-400 mb-4 px-6"
              style={{ fontFamily: "Inter_500Medium" }}
            >
              Latest Destination
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View className="px-6 flex-row gap-5">
                <View className="p-3 items-center w-[200px] h-[70px] bg-gray-700 rounded-xl">
                  <View className="w-full h-full border flex-row items-center">
                    <View className="border w-[87%]">
                      <Text className="text-white font-bold">
                        Test Blog Judul
                      </Text>
                      <Text className="text-white">Test Blog Isi</Text>
                    </View>
                    <Ionicons
                      name="arrow-forward-sharp"
                      size={24}
                      color={"white"}
                      className="items-center"
                    />
                  </View>
                </View>
                <View className="p-3 items-center w-[200px] h-[70px] bg-gray-700 rounded-xl">
                  <View className="w-full h-full border flex-row items-center">
                    <View className="border w-[87%]">
                      <Text className="text-white font-bold">
                        Test Blog Judul
                      </Text>
                      <Text className="text-white">Test Blog Isi</Text>
                    </View>
                    <Ionicons
                      name="arrow-forward-sharp"
                      size={24}
                      color={"white"}
                      className="items-center"
                    />
                  </View>
                </View>
                <View className="p-3 items-center w-[200px] h-[70px] bg-gray-700 rounded-xl">
                  <View className="w-full h-full border flex-row items-center">
                    <View className="border w-[87%]">
                      <Text className="text-white font-bold">
                        Test Blog Judul
                      </Text>
                      <Text className="text-white">Test Blog Isi</Text>
                    </View>
                    <Ionicons
                      name="arrow-forward-sharp"
                      size={24}
                      color={"white"}
                      className="items-center"
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>

          {/* popular destination components */}
          <View className="flex flex-col mt-[36px] mb-20">
            <Text
              className="text-xl text-gray-400 mb-4 px-6"
              style={{ fontFamily: "Inter_500Medium" }}
            >
              Latest Destination
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View className="px-6 flex-row gap-5">
                <View className="p-3 items-end w-[260px] h-[340px] bg-gray-700 rounded-xl">
                  <View className="w-full h-full border flex-row items-end">
                    <Text className="text-white">Test</Text>
                  </View>
                </View>
                <View className="p-3 items-end w-[260px] h-[340px] bg-gray-700 rounded-xl">
                  <View className="w-full h-full border flex-row items-end">
                    <Text className="text-white">Test</Text>
                  </View>
                </View>
                <View className="p-3 items-end w-[260px] h-[340px] bg-gray-700 rounded-xl">
                  <View className="w-full h-full border flex-row items-end">
                    <Text className="text-white">Test</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
