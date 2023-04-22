import { Feature } from "@/interfaces/places"
import { StateInterface } from "@/store"
import { LngLat } from "@/store/map/actions"
import mapboxgl from "mapbox-gl"
import { computed } from "vue"
import { useStore } from "vuex"

export const useMapStore = () =>{
    const store = useStore<StateInterface>() 
    return{
        map:computed(()=>  store.state.map.map),
        distance:computed(()=>  store.state.map.distance),
        duration:computed(()=>  store.state.map.duration),

        //getters
        isMapready:computed<boolean>(()=> store.getters['map/isMapReady']),
        //mutations
        setMap:(map:mapboxgl.Map)=> store.commit('map/setMap', map),
        setPlaceMarkers:(places:Feature[])=>store.commit('map/setPlaceMarkers',places),

        //actions
        getRoute:(start:LngLat, end:LngLat) => store.dispatch('map/getRoute',{start,end})
     }
}