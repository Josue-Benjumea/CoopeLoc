import { computed, onMounted } from "vue"
import { StateInterface } from "@/store"
import { useStore } from "vuex"

 export const usePlacesStore = ()=> {

    const store = useStore<StateInterface>()

    onMounted(() =>{
        if ( !store.getters['places/isUserlocationReady']){
            store.dispatch('places/getInitialLocation')
        }
    })


    return{
        isLoading:computed(()=> store.state.places.isLoading ),
        userLocation: computed(()=> store.state.places.userLocation),
        places:computed(()=> store.state.places.places),
        isLoadingPlaces:computed(()=>store.state.places.isLoadinPlaces),


        //getters
        isUserlocationReady:computed<boolean>(()=> store.getters["places/isUserlocationReady"]),

        //actions
        searchPlacesByTerm: (query: string) => store.dispatch('places/searchPlaces', query),
        search:(consult:string)=>store.dispatch('places/search')

    }


 }