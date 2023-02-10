import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets';
import { HeroImage } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


import * as Animatable from 'react-native-animatable';
import MenuContainer from '../components/MenuContainer';

import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';
import { getPlacesData } from '../api';


const Discover = () => {

  const navigation = useNavigation();

  const [type, setType] = useState("restaurants")
  const [isLoading, setIsLoading] = useState(false)
  const [mainData, setmainData] = useState([])

  {/*Reload if any layout has changed*/}
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false, //Hides the header of the screen

    })
    }, [])

    {/*Reload if anythings at all has changed*/}
    useEffect(() => {
      setIsLoading(true);
      getPlacesData().then(data => {
        setmainData(data);
        {/* wait 2 seconds */}
        setInterval(() => {
          setIsLoading(false)
        }, 2000);
      });
    }, [])

  return (
    <SafeAreaView className="flex-1 bg-white relative">

      {/* Top Section - Text Only */}
      <View className="flex-row items-center justify-between px-6 mt-10">
        <View>
          <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
          <Text className="text-[36px] text-[#527283]">the beauty today</Text>
        </View>

        <View className="w-12 h-12 rounded-md bg-black justify-center shadow-2xl">
           <Animatable.Image
                      source={Avatar} 
                      className="w-full h-full object-cover rounded-md"
              />
        </View>

      </View>

      {/*Google Places Search Section */}
      <View className="flex-row items-center mx-4 rounded-xl py-1 px-4 shadow-2xl ">
          <GooglePlacesAutocomplete
            GooglePlacesDetailsQuery={{fields : "geometry"}}
            placeholder='Search'
            fetchDetails={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              //console.log(data, details);
               
            }}
            query={{
              key: 'AIzaSyByK7ZnCoOAvXJqCLWXQ-YbsKSI9t3dyF8',
              language: 'en',
            }}
          />
      </View>

      {/*Menu Options Section */}

      {/*Condition to check if loading is happining*/}
      {isLoading ? 
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0B646B" />
      </View> : 

      <ScrollView>

      <View className="flex-row items-center justify-center">

              <View className="flex-row items-center justify-center px-3 mt-8">
                <MenuContainer
                  key={"hotels"}
                  title="Hotels"
                  imageSrc = {Hotels}
                  type={type}
                  setType={setType}
                />
              </View>

              <View className="flex-row items-center justify-center px-3 mt-8">
                <MenuContainer
                  key={"attractions"}
                  title="Attactions"
                  imageSrc = {Attractions}
                  type={type}
                  setType={setType}
                />
              </View>

              <View className="flex-row items-center justify-center px-3 mt-8">
                <MenuContainer
                  key={"restaurants"}
                  title="Restaurants"
                  imageSrc = {Restaurants}
                  type={type}
                  setType={setType}
                />
              </View>
      </View>

      {/*Top Tips Section */}

      <View>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
          <TouchableOpacity className="flex-row items-center justify-center space-x-2">
            <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
            <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
          </TouchableOpacity>
        </View>

        
        <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
          {/* Only render if maindata is greater than 0*/}
          { mainData?.length>0 ? (
              <>
              {/* Only render each container if there is something to display*/}
                {mainData?.map((data, i) => (
                  <ItemCardContainer 
                      key={i} 
                      imageSrc={data?.photo?.images?.small?.url ? data?.photo?.images?.small?.url : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"}
                      title={data?.name}
                      location={data?.location_string}
                      data={data}/>
                ))}

                {/*<ItemCardContainer key={"101"} imageSrc="https://cdn.pixabay.com/photo/2023/01/30/20/02/bird-7756521_1280.jpg" title="Something sdf sd fs" location="NA"/>*/}
                {/*<ItemCardContainer key={"102"} imageSrc="https://cdn.pixabay.com/photo/2023/01/30/06/43/village-7754827_1280.jpg" title="Something2" location="NA2"/>*/}
              </>
            ) : 
            (<>
                <View className=" w-full h-[300px] items-center space-y-8 justify-center">
                  <Image source={NotFound} className="w-32 h-32 object-cover"/>
                  <Text className="text-2xl text-[#428288] font-semibold">
                    Oops... No Data Found
                  </Text>
                </View>
            
            </>)}
          
          
        </View>
      </View>
          
    </ScrollView>
      
      }
      
      
    </SafeAreaView>
  )
}

export default Discover