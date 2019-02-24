<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="'/login'" v-if="!getToken">
          <v-list-tile-action>
            <!--<v-icon v-html="items.login" />-->
          </v-list-tile-action>
          <v-list-tile-content>
            Log-in
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logout" v-if="getToken">
          <v-list-tile-action>
            <!--<v-icon v-html="items.logout" />-->
          </v-list-tile-action>
          <v-list-tile-content>
            Logout
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'" />
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      :right="right"
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Top-rated', to: '/top-rated' },
          //{ icon: 'login', title: 'Log-in', to: '/login' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
        token: ''
      }
    },
    updated: function () {
      this.$nextTick(function () {
        // Код, который будет запущен только после
        // обновления всех представлений
      })
    },
    computed: {
      getToken(){
        console.log('this.$store.getters.retToken', !!this.$store.getters.retToken);
        return this.$store.getters.retToken
      }
    },
    methods:{
      logout(){
        this.$store.commit('SET_TOKEN', null);
        $nuxt.$router.push('/')
      }
    }
  }
</script>
