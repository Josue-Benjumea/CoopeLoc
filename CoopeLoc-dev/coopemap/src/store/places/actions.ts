import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "../index";
import { searchAPI } from "@/api";
import { Feature, PlacesResponse } from "@/interfaces/places";

const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        commit("setLngLat", { lng: coords.longitude, lat: coords.latitude }),
      (err) => {
        console.error(err);
        throw new Error("No hay geolocalizacion");
      }
    );
  },

  async searchPlaces({ commit, state }, query: string): Promise<Feature[]> {
    if (query.length === 0) {
      commit("setPlaces", []);
      return [];
    }

    commit("setIsLoadingPlaces");

    const response = await searchAPI.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation?.join(","),
      },
    });
    console.log(response.data.features);
    commit("setPlaces", response.data.features);
    return response.data.features;
  },

  async search(consult) {
    const response = await searchAPI.get<PlacesResponse>(`/${consult}.json`);
    console.log(response.data.features);
    return response.data.features;
  },
};

export default actions;
