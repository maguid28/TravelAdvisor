import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const MenuContainer = ({title, imageSrc, type, setType}) => {


    const handlePress = () => {
        setType(title.toLowerCase());
        console.log(title.toLowerCase());
    };

    return (
        <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>

        <View className={`w-24 h-24 p-2 shadow-sm rounded-full ${ type === title.toLowerCase() ? 'bg-gray-200' : ''}`}>
            
            <Image 
                source={imageSrc}
                className="w-full h-full object-contain rounded-md"
            />

        </View>

        <Text className="text-[#00bcc9] text-xl font-semibold"> {title} </Text>
        </TouchableOpacity>
    )
}

export default MenuContainer