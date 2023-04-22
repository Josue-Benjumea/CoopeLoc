import axios from 'axios'
const searchAPI = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        proximity:'-75.57348894400877, 2C6.244549319027712',
        language:'es',
        access_token:'pk.eyJ1Ijoiam9zdWViZW4iLCJhIjoiY2xncjlrcTM4MTlsZzNrcDlyNHdxcDk2dSJ9.fXRYEzvyv1Qfgk3keTnObQ'
    }
})

export default searchAPI