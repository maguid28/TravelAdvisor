import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ItemCardContainer = ({imageSrc, title, location, data}) => {

    const navigation = useNavigation();

    const handlePress = () => {
        console.log(imageSrc);
        console.log(title);
        console.log(location);
        //navigate to item screen
        
        navigation.navigate("ItemScreen", {param: data});
    };

    return (
        <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2" onPress={handlePress}>
            <Image
                source={{uri : imageSrc}}
                className="w-full h-40 rounded-md object-cover"
            />

            <Text className="text-[#428288] text-[18px] font-bold">
                {/*conditional statement to check if title is larger than 14 chars and slice it if so*/}
                {title?.length > 14 ? `${title.slice(0,14)}..` : title}
            </Text>

            <View className="flex-row items-center space-x-1">
                <FontAwesome name="map-marker" size={20} color="#8597a2" />
                <Text className="text-[#428288] text-[14px] font-bold">
                    {/*conditional statement to check if title is larger than 14 chars and slice it if so*/}
                    {location?.length > 18 ? `${location.slice(0,18)}..` : location}
                </Text>
                
            </View>
        </TouchableOpacity>
    )
}

export default ItemCardContainer