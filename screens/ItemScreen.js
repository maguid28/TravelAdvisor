import { View, Text, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Discover from './Discover';


const ItemScreen = ({route}) => {

    const navigation = useNavigation();

    const data = route?.params?.param;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false, //Hides the header of the screen

    })
    }, [])

    console.log(data);
    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <ScrollView className="flex-1 px-4 py-12">

                <View className="relative bg-white shadow-lg">
                    {/*Image section*/}
                    <Image
                        source={
                            {uri : data?.photo?.images?.large?.url ? data?.photo?.images?.large?.url : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"}
                        }
                        className="w-full h-72 object-cover rounded-2xl"
                    />

                    {/*Buttons on image section*/}
                    <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                        <TouchableOpacity className=" w-10 h-10 rounded-md items-center justify-center bg-white" onPress={() => navigation.navigate(Discover)}>
                            <Entypo name="chevron-left" size={24} color="#06b2be" />
                        </TouchableOpacity>

                        <TouchableOpacity className=" w-10 h-10 rounded-md items-center justify-center bg-[#06b2be]">
                            <FontAwesome name="heartbeat" size={24} color="#ffffff" />
                        </TouchableOpacity>
                    </View>

                    
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default ItemScreen