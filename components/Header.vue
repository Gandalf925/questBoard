<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-avatar v-show="isLoggedIn" class="right" @click="moveMyProfile()">
        <img :src="avatar" />
      </v-avatar>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      rate: '',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Quest Board',
          to: '/questBoard',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Request Job',
          to: '/questBoard/requestJobs',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'My Profile',
          to: '/myProfile',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'help',
          to: '/help',
        },
      ],

      miniVariant: false,

      title: 'QuestBoard',
      avatar: this.$store.getters.getAvatarUrl,
      isLoggedIn: this.$store.getters.getLoggedIn,
    }
  },
  methods: {
    moveMyProfile() {
      this.$router.push('/myProfile')
    },
  },
}
</script>

<style></style>
