import { Feature } from "@/interfaces/places";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadinPlaces: boolean;
  places: Feature[];
}

function state(): PlacesState {
  return {
    isLoading: true,
    userLocation: undefined,
    isLoadinPlaces: false,
    places: [],
  };
}

export default state;
