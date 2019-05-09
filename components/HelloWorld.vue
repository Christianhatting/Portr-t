<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        
        <v-parallax
          :src="require('../assets/123123.jpg')"
          height="350"
        >
          <v-layout column align-center justify-center class>
            <img src="assets/vuetify.png" alt>

            <h1 class="white--text mb-2 display-1 text-xs-center"></h1>
            <div class="subheading mb-3 text-xs-center"></div>
          </v-layout>
        </v-parallax>
      </v-flex>
      <!-- 
  
  Sociale medier til "kontakt" 
  
  <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <a href="https://www.facebook.com/christian.h.hansen.18" target="_blank">Facebook</a>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"></div>
                    </v-card-title>
                    <v-card-text>
                      
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <a href="https://community.vuetifyjs.com" target="_blank">Linkedin</a>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline"></div>
                    </v-card-title>
                    <v-card-text>
                       
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <a href="https://community.vuetifyjs.com" target="_blank">Twitter</a>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"></div>
                    </v-card-title>
                    <v-card-text>
                      
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
      -->
      <!--
            INDSÆT LINK/LOGO TIL Sociale medier
      -->

      <v-flex xs12>
        <v-flex mt-5>
        
        <h2  class="headline font-weight-bold mb-3">Du skal være velkommen til at tage et kig på de projekter jeg har lavet herunder!</h2>
        </v-flex>
        <div id="mofotogo"> 
        <v-flex xs12 >
          <v-container grid-list-xl>
            
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
              <v-card color="#ECEFF1" class="font-weight-thin">
                <v-img
                  class="white--text"
                  height="300px"
                  src="http://hornslethandel.dk/wp-content/uploads/2017/03/profiloptik-hornslet3.jpg"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline transparent--text"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span class="title">Infomercial</span>
                    <br>
                    <span class="subheading">Kampagnefilm og reklamefilm for Profil Optik by Synsam</span>
                    <br>
                    

                    
              <!-- DIALOG 1 -->      
  <div class="text-xs-center">
    <v-dialog
    full-width="true"
      v-model="dialog1"
      width="564px"
      
      
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="blue lighten-2"
          dark
          v-on="on"
        >
          Klik her for at se mere
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
        (Kampagne for Profil Optik by Synsam) <br> Infomercial
        </v-card-title>

        <v-card-text>
           
        </v-card-text>
        <div class="youtube-responsive-container">
        
<iframe width="560" height="315" src="https://www.youtube.com/embed/ebcFszn718M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog1 = false"
          >
            Tilbage
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

                    <span>.</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                 
                </v-card-actions>
              </v-card>
              </v-flex>

              <!-- 1. VÆRK SLUT-->

              <!-- 2. VÆRK-->

              
              <v-flex xs12 md4>
                <v-card color="#ECEFF1" class="font-weight-thin">
                  <v-img
                  
                    class="white--text"
                    height="300px"
                    :src="require('../assets/Infographic.jpg')"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline transparent--text">Top 10 Australian beaches</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="title">Infographic</span>
                      <br>
                      <span class="subheading"> Informationsplakat som er et udvalgt skoleprojekt</span>
                      <br>
<!-- DIALOG 1 SLUT -->



<!-- DIALOG 2 -->
<div class="text-xs-center">
  
    <v-dialog
    full-width="true"
      v-model="dialog2"
      width="1000px"
      
      
      
    >
      <template v-slot:activator="{ on }">
        <v-btn 
          color="blue lighten-2"
          dark
          v-on="on"
        >
          Klik her for at se mere
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
         Informationsplakat <br>
        
        </v-card-title>

        <v-card-text>

<!-- BALLADE START -->

           <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md4>
              <v-card class="font-weight-thin" height="400px">
                  <v-img
                    class="white--text"
                    height="400px"
                    :src="require('../assets/Infographic-2.jpg')"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline transparent--text"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      
                    </div>
                  </v-card-title>
                  <v-card-actions>
                
                  </v-card-actions>
              
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm8>
              <v-layout row wrap>
                <v-flex d-flex>
                  <v-card color="#ECEFF1" width="680px">
                    
                    <v-card-text color="black" class="headline"> Hvad er en Infographic?</v-card-text>
                    <v-card-text color="black" class="subheading"> Infographics – eller informationsgrafik – er en overskuelig <br> måde
                      præsentere kompleks information på en iøjenfaldende, “spiselig” og indbydende 
                      måde.
                       </v-card-text>
 
 <v-card-text color="black" class="headline"> Hvad er fordelene ved Infographics? </v-card-text>
<v-card-text color="black" class="subheading"> 
  - Stærke til at kommunikere et budskab.<br>
- Lave store mængder data/tekst til småt og let forståeligt materiale. <br>
- Vise data på en overskuelig facon.<br>
- Generelt opsummere et større emne på kort tid.<br>

       </v-card-text>
      </v-card>
     </v-flex>
   </v-layout>
  </v-flex>
 </v-layout>

 <!-- BALLADE SLUT -->
        </v-card-text>
        

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog2 = false"
          >
            Tilbage
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>



                      <span>.</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                   
                  </v-card-actions>
                </v-card>
              </v-flex>

               <!-- 1. SLUT -->


              <v-flex xs12 md4>
                <v-card color="#ECEFF1" class="font-weight-thin">
                  <v-img
                    class="white--text"
                    height="300px"
                    :src="require('../assets/Forside-stole.png')"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline transparent--text"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="title">Designside for designerstole</span>
                      <br>
                      <span class="subheading">En hjemmeside som skal sælge designerstole </span>
                      <br> 
                      <!-- DIALOG 2 SLUT -->

                      <!-- DIALOG 3 -->

<div class="text-xs-center">
    <v-dialog
    full-width="true"
      v-model="dialog3"
      width="1000px"
      
      
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="blue lighten-2"
          dark
          v-on="on"
        >
          Klik her for at se mere
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
        Designer hjemmeside for designstole <br>
        
        </v-card-title>

        <v-card-text>
          <!-- carusel 1 -->


          <v-carousel >
    <v-carousel-item

      v-for="(items1,i) in items1"
      :key="i"
      :src="items1.src"
    ></v-carousel-item>
  </v-carousel> 

  <!-- carusel 1  END -->
        </v-card-text>
        

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Tilbage
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>



                      <span>.</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                   
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>

        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4></v-flex>
            </v-layout>
          </v-container>
        </v-flex>

        <!-- Her skiller "mine værker" sig -->

        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
              <v-card color="#ECEFF1" class="font-weight-thin">
                <v-img
                  class="white--text"
                  height="300px"
                  :src="require('../assets/FR-2.jpg')"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline transparent--text"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span class="title">Mobil Applikation </span>
                    <br>
                    <span class="subheading">En mobil APP hvor man kan handle og sælge secondhand tøj </span>
                    <br>

<div class="text-xs-center">
    <v-dialog
    full-width="true"
      v-model="dialog4"
      width="1000px"
      
      
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="blue lighten-2"
          dark
          v-on="on"
        >
          Klik her for at se mere
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
        På denne App kan man sælge og købe secondhand tøj
        </v-card-title>

        <v-card-text>
           

           
        </v-card-text>
        <v-carousel >

          <!-- carusel 2 -->
    <v-carousel-item
    
    
      v-for="(items2,i) in items2"
      :key="i"
      :src="items2.src"
    ></v-carousel-item>
  </v-carousel> 
<!-- carusel 2 SLUT -->
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Tilbage
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

                    <span>.</span>
                  </div>
                </v-card-title>
                <v-card-actions>
             
                </v-card-actions>
              </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card color="#ECEFF1" class="font-weight-thin">
                  <v-img
                    class="white--text"
                    height="300px"
                    :src="require('../assets/Double-Exposure.png')"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline transparent--text"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="title">Double Exposure</span>
                      <br>
                      <span class="subheading">Et billede hvor man benytter sig af Double Exposure</span>
                      <br>  

<div class="text-xs-center">
    <v-dialog
    full-width="true"
      v-model="dialog5"
      width="1000px"
      
      
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="blue lighten-2"
          dark
          v-on="on"
        >
          Klik her for at se mere
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
        Double Exposure 
        </v-card-title>

        <v-card-text>
           
        </v-card-text>

<!-- NY BALLADE start -->

<v-layout row wrap>
            <v-flex d-flex xs12 sm6 md4>
              <v-card class="font-weight-thin" height="400px">
                  <v-img
                    class="white--text"
                    height="400px"
                    :src="require('../assets/Double-Exposure.png')"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline transparent--text"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      
                    </div>
                  </v-card-title>
                  <v-card-actions>
                
                  </v-card-actions>
              
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm8>
              <v-layout row wrap>
                <v-flex d-flex>
                  <v-card color="#ECEFF1" width="680px">
                    
                    <v-card-text color="black" class="headline"> Hvad er Double Exposure?</v-card-text>
                    <v-card-text color="black" class="subheading"> 
                      Double Exposure er en fotografisk teknik, hvor man på forhånd <br> 
                      har valgt 2 billeder, som man så kombinere i et billede.
                       </v-card-text>
 
 <v-card-text color="black" class="headline"> Hvad er fordelene ved Double Exposure?  </v-card-text>
<v-card-text color="black" class="subheading"> 
  - Skabe et stærkt visuelt udtryk<br>
  - Skabe kontrast som kan levere et stærkt budskab<br>
  - Kan appellere til følelser da man kan manipulere billedet ekstremt<br>
  - Man kan arbejde ekstremt dealjeret

       </v-card-text>
      </v-card>
     </v-flex>
   </v-layout>
  </v-flex>
 </v-layout>

 <!-- NY BALLADE SLUT -->

    

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Tilbage
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

                      <span>.</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                   
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card color="#ECEFF1" class="font-weight-thin">
                  <v-img
                    class="white--text"
                    height="300px"
                     :src="require('../assets/RS-1.png')"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline transparent--text">Top 10 Australian beaches</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="title">Illustreret Videnskab</span>
                      <br>
                      <span class="subheading">Informationsside som er udarbejdet for Illustreret Videnskab </span>
                      <br> 

<div class="text-xs-center">
    <v-dialog
    full-width="true"
      v-model="dialog6"
      width="1000px"
      
      
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="blue lighten-2"
          dark
          v-on="on"
        >
          Klik her for at se mere
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
        Billeder af hjemmesiden, som blev udarbejdet for Illustreret Videnskab
        </v-card-title>

        <v-card-text>
           
        </v-card-text>
        <v-carousel >
    <v-carousel-item

      v-for="(items3,i) in items3"
      :key="i"
      :src="items3.src"
    ></v-carousel-item>
  </v-carousel> 

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Tilbage
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

                      <span>.</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                  
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        </div>
        <h2 class="headline font-weight-bold" id="mofoimmad" >Om mig</h2>
<!-- LOL -->

        
        <v-container fluid grid-list>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md4>
              <v-card class="font-weight-thin" height="400px">
                  <v-img
                    class="white--text"
                    height="400px"
                    :src="require('../assets/gladfyr.jpg')"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline transparent--text">Top 10 Australian beaches</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      
                    </div>
                  </v-card-title>
                  <v-card-actions>
                
                  </v-card-actions>
              
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm8>
              <v-layout row wrap>
                <v-flex d-flex>
                  <v-card color="#ECEFF1" width="680px">
                    
                    <v-card-text color="black" class="headline"> Hvem er jeg?</v-card-text>
                    <v-card-text color="black" class="subheading font-weight-regular font-italic"> Mit navn 
                      er Christian Hatting Hansen, og jeg er uddannet multimediedesigner fra Esbjerg. 
                      <br> Jeg er 26 somre ung og har altid haft ild i røven og lysten til at skabe noget.
                      Jeg er derfor endt på den helt korrekte uddannelse hvor jeg kan folde mig ud og dyrke min passion.
                       </v-card-text>
 
 <v-card-text color="black" class="headline"> Hvad er min passion, spørger du så?  </v-card-text>
<v-card-text color="black" class="subheading font-weight-regular font-italic"> Igennem min akademiuddannelse, har jeg kunne dyrke min passion som har givet mig færdigheder inden 
  for grafisk design, hjemmesideprogrammering, søgemaskineoptimering, 
  videoredigering, UX som er User Experience samt online markedsføring

  <br> </v-card-text> 
   <div class="text-xs-center">
    <v-dialog
      v-model="dialog7" width="800px"
      
      persistent
      scrollable
      
      
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="blue lighten-2"
          dark
          v-on="on"
        >
          Klik her for at se mit CV
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
       CV <br> 
        </v-card-title>

        <v-img contain
                    class="white--text"
                    max-width="100%"
                    :src="require('../assets/CV123.svg')">
                    </v-img>
   
       

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog1 = false"
          >
            Tilbage
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  
       
      </v-card>
     </v-flex>
   </v-layout>
  </v-flex>
 </v-layout>
</v-container>

       

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >{{ next.text }}</a>
        </v-layout>
      </v-flex>

      
                  
                <v-flex d-flex>
                  <v-layout row wrap>
                    <v-flex v-for="n in 2" :key="n" d-flex xs12>

                      
                      
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>

<v-container fluid grid-list>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md6>
          
              <v-card color="#ECEFF1" class="font-weight-thin" height="300px">
                
              <v-card-text color="black" class="headline"> Kontakter</v-card-text>
                    <v-card-text color="black" class="subheading"> Telefon: 42 15 18 16</v-card-text>
                      <v-card-text color="black" class="subheading"> E-mail: ChrsitianHatting@live.dk</v-card-text>
                        <v-card-text color="black" class="subheading"> Adresse: Kirkegade 12</v-card-text>
                 
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline transparent--text">Top 10 Australian beaches</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                
                  <v-card-title>
                    <div>
                      
                    </div>
                  </v-card-title>
                  <v-card-actions>
                
                  </v-card-actions>
                </v-card>
              
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-layout row wrap>
                <v-flex d-flex>
                  <v-card color="#ECEFF1" width="500px">
                    
                    <v-card-text color="black" class="headline"> Kontakter</v-card-text>
                    <v-card-text color="black" class="subheading"> Telefon: 42 15 18 16</v-card-text>
                      <v-card-text color="black" class="subheading"> E-mail: ChrsitianHatting@live.dk</v-card-text>
                        <v-card-text color="black" class="subheading"> Adresse: Kirkegade 12</v-card-text>
                     
 

 
                    
                  </v-card>
                  
                </v-flex>
                
              </v-layout>
            </v-flex>
            
          </v-layout>
        </v-container>

        

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >{{ next.text }}</a>
        </v-layout>
      
              

      <!-- Her skiller det sig ad igen -->

      <!-- Her skal der indsættes kontakt oplysninger af mig --> 
<v-layout id="footerfck">
<v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      class="grey lighten-2 white--text text-xs-center "
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 transparent--text">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit ame
        t. Mauris cursus commodo interdum. Praesent ut risus eget metus luc
        tus accumsan id ultrices nunc. Sed at orci sed massa consectetur dig
        issim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehi
        cula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursu
        s iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tem
        por vel ut orci. Orci varius natoque penatibus et magnis dis parturien
        t montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 — <strong>Edited by Christian with   Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>

</v-layout>

  </v-container>

  
</template>



<script>
export default {

data: () => ({

        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        dialog6: false,
        dialog7: false,

       

    lorem: ``,
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuetifyjs.com"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
      
      },
      {
       
      },
      {
        
      }
    ],

    items1: [
          {
            src: require('../assets/Forside-stole.png')
           
          },
          {
            src: 'https://i.imgur.com/G9t1zDH.png'
          },
          {
            src: 'https://i.imgur.com/hQvNeRQ.png'
          },
          {
            src: 'https://i.imgur.com/k6vHgYv.png'
          },
          {
            src: 'https://i.imgur.com/3pLn6IC.png'
          },
          {
            src: 'https://i.imgur.com/DUxD1PC.png'
          }
        ],
items3: [ 
{
            src: require('../assets/RS-1.png')
           
          },
          {
            src: require('../assets/RS-2.png')
           
          },
          {
            src: require('../assets/RS-3.png')
           
          },
          {
            src: require('../assets/RS-4.png')
           
          },
          {
            src: require('../assets/RS-5.png')
           
          },
        ],


items2: [ 
          {
            src:'https://i.imgur.com/U5LwBND.jpg'
           
          },
          {
            src: 'https://i.imgur.com/HvFXaJO.jpg'
          },
          {
            src: 'https://i.imgur.com/u28xAsc.jpg'
          },
          {
            src: 'https://i.imgur.com/n2bCZki.jpg'
          },
          {
            src: 'https://i.imgur.com/NGJFc33.jpg'
          },
        
        ],

  })
  
};


</script>

<style>
#footerfck {
  margin-left:-13%;
  width:126%;
}
#mofotogo {

}


.v-image__image.v-image__image--cover {
  max-width:1000px;
}


</style>


