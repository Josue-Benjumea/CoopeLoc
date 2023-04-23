<template>
  <v-app id="home" class="bg-dark">
    <NavBar></NavBar>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img src="dataearth.png" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="6">
          <h5 class="text-darken-4 top" style="color: #00e3ff">CoopeMaps</h5>
          <h1 class="white--text" style="color: white">
            Integrated Geolocation
          </h1>
          <p class="grey--text" style="color: grey">
            ⚠🔰Please enable location⚠🔰 In this application you will be able to search to different destinations on the map, 
            the results will be obtained based on your location, so it will be important to enable it, you will be able to 
            trace routes, consult different destinations, redirect to your location in real time, and show duration and 
            distance between points. 
          </p>
          <hr style="color: aqua; box-shadow: aqua 0px -50px 50px 26px" />
        </v-col>
        <v-col cols="12" class="padd">
          <div class="firts" id="product">
            <v-row>
              <v-col cols="12">
                <div class="child bgColor1" style="width: 16rem">
                  <v-icon color="#00E3FF">fas fa-forward</v-icon>
                  <h3
                    class="white--text ml-3 mt-4"
                    style="color: white; font-size: 30px"
                  >
                    Lorem
                  </h3>
                  <p
                    class="grey--text ml-3 mt-6"
                    style="color: grey; font-size: 15px"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Lorem ipsum dolor sit amet.
                  </p>
                  <v-btn color="#00E3FF" dark>
                    know more ->
                    <v-icon right></v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor2" style="width: 16rem">
                  <v-icon color="darck">fas fa-compass</v-icon>
                  <h3
                    class="white--text ml-3 mt-4"
                    style="color: black; font-size: 30px"
                  >
                    Lorem
                  </h3>
                  <p
                    class="grey--text ml-3 mt-6"
                    style="color: black; font-size: 15px"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Lorem ipsum dolor sit amet.
                  </p>
                  <v-btn color="light" dark>
                    know more ->
                    <v-icon right></v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor1" style="width: 16rem">
                  <v-icon color="#00E3FF">fas fa-location</v-icon>
                  <h3
                    class="white--text ml-3 mt-4"
                    style="color: white; font-size: 30px"
                  >
                    Lorem
                  </h3>
                  <p
                    class="grey--text ml-3 mt-6"
                    style="color: grey; font-size: 15px"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Lorem ipsum dolor sit amet.
                  </p>
                  <v-btn color="#00E3FF" dark>
                    know more ->
                    <v-icon right></v-icon>
                  </v-btn>
                </div>
              </v-col>
              <div class="xpContainer">
                <v-col cols="12" class="mt-10 xpContainer">
                  <div class="child1">
                    <h6 class="red--text text-darken-4 mt-4 number">+35</h6>
                    <h4 class="white--text mt-4">Years Experience</h4>
                  </div>
                  <div class="child2 mRight">
                    <v-row>
                      <v-col cols="12" class="childcol">
                        <div class="child2 mButton padding bgColor1 w-75">
                          <h2 class="red-text text--darken-4">+1543</h2>
                          <h4 class="gre--text">Clients</h4>
                        </div>
                      </v-col>
                      <v-col cols="12" class="childcol">
                        <div class="child2 mButton padding bgColor1 w-75">
                          <h2 class="red-text text--darken-4">+200</h2>
                          <h4 class="gre--text">Proyects</h4>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="child2">
                    <v-row>
                      <v-col cols="12" class="childcol">
                        <div class="child2 mButton padding bgColor1 w-75">
                          <h2 class="red-text text--darken-4">+6000</h2>
                          <h4 class="gre--text">employees</h4>
                        </div>
                      </v-col>
                      <v-col cols="12" class="childcol">
                        <div class="child2 mButton padding bgColor1 w-75">
                          <h2 class="red-text text--darken-4">+1500</h2>
                          <h4 class="gre--text">solutions</h4>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </div>
            </v-row>
          </div>
        </v-col>

        <v-col md="3" offset-md="3" id="about">
          <h6
            text
            class="white--text"
            style="font-size: 70px; color: white; text-align: start"
          >
            All Of <span style="color: aqua">Us</span>
          </h6>
          <h4
            class="grey--text"
            style="font-size: 15px; color: grey; text-align: start"
          >
            Lorem ipsum dolor dolor simbet
          </h4>
        </v-col>

        <v-col md="3" class="text-end">
          <v-btn tile color="#00E3FF" dark>View All</v-btn>
        </v-col>
        <v-col md="3" offset-md="2">
          <v-card class="pa-2 py-12" outlined tile height="300px" color="black">
            <v-img src="dash.webp" contain></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="pa-2 py-12" outlined tile height="300px" color="black">
            <v-img src="map.avif" contain></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="pa-2 py-12" outlined tile height="300px" color="black">
            <v-img src="map2.jpg" contain></v-img>
          </v-card>
        </v-col>
        <div class="xpContainer2">
          <v-col class="xpContainer2">
            <v-btnendc dark text class="ml-n4 btn btn-outline-light me-2 z-i">
              CoopeMap </v-btnendc
            ><br />
            <v-btn color="#00E3FF" dark text class="ml-n4 mt-4">
              <router-link style="color: black; text-decoration: none" to="/map"
                >View More ->
              </router-link>
            </v-btn>
          </v-col>
        </div>
        <v-col cols="12" class="padd topInverse" id="contact">
          <div class="second">
            <div class="secondchild1">
              <v-row>
                <v-col cols="7">
                  <h1 class="white--text" style="color: white">
                    Contact Us <br />
                    <span style="color: aqua">let's be great</span>
                  </h1>
                  <p class="gre--text" style="color: grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, quibusdam quis. Voluptatem. <br />
                  </p>
                </v-col>
                <v-col cols="5">
                  <v-btn tile color="#00E3FF" dark class="mt-16">Contact</v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import NavBar from "../components/NavBar/navBar.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
  },
});
</script>
<style scoped>
.xpContainer {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
}
.xpContainer2 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 100%;
}
.z-i {
  z-index: 1;
}
.top {
  margin-top: 180px;
}
h1,
h5,
p {
  text-align: start;
}
h4 {
  text-align: center;
  color: white;
}
h6 {
  font-size: 45px;
  color: #00e3ff;
}
h2 {
  font-size: 20px;
  color: #00e3ff;
}
.topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.firts {
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  margin-top: 15rem;
  width: 100%;
  height: 500px;
  background: #181818;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: center;
  text-align: left;
  box-shadow: #00e3ff 1px 1px 20px 0px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #00e3ff;
}
.child11 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0px;
}
.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
</style>
