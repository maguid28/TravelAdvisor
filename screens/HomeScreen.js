import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {


    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false, //Hides the header of the screen

    })
    }, [])

    return (
        <SafeAreaView className="bg-white flex-1 relative">
            {/* First Section - Logo */}

            {/*flex-row adds everything into a line*/}
            {/*px-6 adds some space from the left side*/}
            {/*mt-16 adds a margin from the top of the screen*/}
            {/*space-x-2 adds a space of 2 between Texts*/}
            <View className="flex-row px-6 mt-16 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#00bcc9] text-3xl font-semibold">Go</Text>
                </View>
                <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
            </View>

            {/* Second Section - Text*/}
            <View className="px-6 mt-8 space-y-3">
                <Text className="text-[#3c6072] text-[42px]">Enjoy the trip with</Text>
                <Text className="text-[#00bcc9] text-[38px] font-bold">Good Moments</Text>
                <Text className="text-[#3c6072] text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                </Text>
            </View>

            {/* Third Section - Circle Section*/}
            <View className="w-[350] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-20 -right-36"></View>
            <View className="w-[350] h-[350] bg-[#e99265] rounded-full absolute -bottom-14 -left-36"></View>

            {/* Fourth Section - Image Section*/}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out"
                    source={HeroImage} 
                    className="w-full h-full object-cover mt-10"
                />
            
            
                {/* Fifth Section - Button Section*/}
                <TouchableOpacity 
                    onPress={() => navigation.navigate("Discover")}
                    className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
                    {/*TouchableOpacity allows the inclosed View to have opacity when tapped/clicked*/}
                        {/* This is how to add the pulse effect on the button*/}
                        <Animatable.View 
                            animation={"pulse"} 
                            easing="ease-in-out"
                            iterationCount={'infinite'}
                            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                            <Text className="text-gray-50 text-[35px] font-semibold">Go</Text>
                        </Animatable.View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen