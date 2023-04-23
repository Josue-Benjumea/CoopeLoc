import { computed, defineComponent, ref } from "vue";
import SearchResults from "../search-results/SearchResults.vue";
import { usePlacesStore } from "@/composables";
import { searchAPI } from "@/api";
import { PlacesResponse } from "@/interfaces/places";
import placesModule from "@/store/places";
import actions from "@/store/places/actions";
import { Feature } from "@/interfaces/places";


export default defineComponent(
  {
  name: "SearchBar",
  components: { SearchResults},
  
  setup() {
    const debounceValued = ref("");
    const debounceValued2 = ref("");
    const debounceTimeOut = ref();
    const {searchPlacesByTerm,search} = usePlacesStore()
    let  defSearch:any
       

    return {
      defSearch,
      debounceValued,
      searchTerm: computed({
        get() {
          return debounceValued.value;
        },
        set(val: string) {
          if (debounceTimeOut.value) clearTimeout(debounceTimeOut.value);

          debounceTimeOut.value = setTimeout(() => {
            debounceValued.value = val;
            searchPlacesByTerm(val);
          }, 500);
        },
      }),

      searchTerm2: computed({
        get() {
          return debounceValued2.value;
        },
        set(val: string) {
          if (debounceTimeOut.value) clearTimeout(debounceTimeOut.value);

          debounceTimeOut.value = setTimeout(() => {
            debounceValued2.value = val;
              console.log(val);
              search(val)
              defSearch = val
          }, 500);
        },
      }),
    };
  },
});
