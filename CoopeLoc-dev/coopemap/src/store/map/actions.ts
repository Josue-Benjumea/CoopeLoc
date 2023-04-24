import { ActionTree } from "vuex";
import { MapState } from "./state";
import { StateInterface } from "../index";
import { routesAPI } from "@/api";
import { DirectionsResponse } from "@/interfaces/directions";

export type LngLat = [number, number];

const actions: ActionTree<MapState, StateInterface> = {
  async getRoute({ commit }, { start, end }: { start: LngLat; end: LngLat }) {
    const response = await routesAPI.get<DirectionsResponse>(
      `${start.join(",")};${end.join(",")}`
    );

    commit("setDistanceDuration", {
      distance: response.data.routes[0].distance,
      duration: response.data.routes[0].duration,
    });

    commit("setRouteLine", response.data.routes[0].geometry.coordinates);
  },
};

export default actions;
