<template>
  <v-app>
    
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Christian</span>
        <span class="font-weight-light">MultiMediedesigner</span>
      </v-toolbar-title>
      <!--<v-spacer></v-spacer> -->
      
      

      
    </v-toolbar>
    

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
#nav-btn {
  margin-left:-10px;
}
</style>
