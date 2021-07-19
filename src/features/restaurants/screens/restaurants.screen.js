import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, Text, View } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  margintop: StatusBar.currentHeight;
`;

const RestaurantSearch = styled(View)`
  padding: 16;
`;

const RestaurantList = styled(View)`
  flex: 1;
  padding: 16;
  background-color: "blue";
`;

export const RestaurantsScreen = () => (
  <SafeAreaViewContainer>
    <RestaurantSearch>
      <Searchbar />
    </RestaurantSearch>
    <RestaurantList>
      <RestaurantInfoCard />
    </RestaurantList>
  </SafeAreaViewContainer>
);
