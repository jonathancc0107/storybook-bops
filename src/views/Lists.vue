<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Types</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="400" tile>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Single-line item</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Two-line item</v-list-item-title>
                  <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title>Three-line item</v-list-item-title>
                  <v-list-item-subtitle>
                    Secondary line text Lorem ipsum dolor sit amet,
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    consectetur adipiscing elit.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Dense</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="300" tile>
              <v-list dense>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Disabled</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="300" tile>
              <v-list disabled>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Flat</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="300" tile>
              <v-list flat>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Nav</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" width="256" tile>
              <v-navigation-drawer permanent>
                <v-system-bar></v-system-bar>
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                    </v-list-item-avatar>
                  </v-list-item>

                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title class="text-h6">
                        John Leider
                      </v-list-item-title>
                      <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-icon>mdi-menu-down</v-icon>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list nav dense>
                  <v-list-item-group v-model="selectedItem1" color="primary">
                    <v-list-item v-for="(item, i) in items1" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-navigation-drawer>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Sub group</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" width="300">
              <v-list>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>

                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-group :value="true" prepend-icon="mdi-account-circle">
                  <template v-slot:activator>
                    <v-list-item-title>Users</v-list-item-title>
                  </template>

                  <v-list-group :value="true" no-action sub-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>Admin</v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
                      <v-list-item-title v-text="title"></v-list-item-title>

                      <v-list-item-icon>
                        <v-icon v-text="icon"></v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list-group>

                  <v-list-group no-action sub-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>Actions</v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
                      <v-list-item-title v-text="title"></v-list-item-title>

                      <v-list-item-icon>
                        <v-icon v-text="icon"></v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list-group>
                </v-list-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Three line</h3>
          </v-col>
          <v-col cols="12">
            <v-card max-width="450" class="mx-auto">
              <v-toolbar color="cyan" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Inbox</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-toolbar>

              <v-list three-line>
                <template v-for="(item, index) in items2">
                  <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

                  <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                  <v-list-item v-else :key="item.title">
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-html="item.title"></v-list-item-title>
                      <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3></h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="500">
              <v-toolbar color="pink" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Inbox</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-btn>
              </v-toolbar>

              <v-list two-line>
                <v-list-item-group v-model="selected" active-class="pink--text" multiple>
                  <template v-for="(item, index) in items3">
                    <v-list-item :key="item.title">
                      <template v-slot:default="{ active }">
                        <v-list-item-content>
                          <v-list-item-title v-text="item.title"></v-list-item-title>

                          <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>

                          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                          <v-icon v-if="!active" color="grey lighten-1">
                            mdi-star-outline
                          </v-icon>

                          <v-icon v-else color="yellow darken-3">
                            mdi-star
                          </v-icon>
                        </v-list-item-action>
                      </template>
                    </v-list-item>

                    <v-divider v-if="index < items3.length - 1" :key="index"></v-divider>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3></h3>
          </v-col>
          <v-col cols="12">

          </v-col>
        </v-row>

        <v-divider></v-divider>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 1,
      items: [{
          text: 'Real-Time',
          icon: 'mdi-clock'
        },
        {
          text: 'Audience',
          icon: 'mdi-account'
        },
        {
          text: 'Conversions',
          icon: 'mdi-flag'
        },
      ],
      selectedItem1: 0,
      items1: [{
          text: 'My Files',
          icon: 'mdi-folder'
        },
        {
          text: 'Shared with me',
          icon: 'mdi-account-multiple'
        },
        {
          text: 'Starred',
          icon: 'mdi-star'
        },
        {
          text: 'Recent',
          icon: 'mdi-history'
        },
        {
          text: 'Offline',
          icon: 'mdi-check-circle'
        },
        {
          text: 'Uploads',
          icon: 'mdi-upload'
        },
        {
          text: 'Backups',
          icon: 'mdi-cloud-upload'
        },
      ],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
      items2: [{
          header: 'Today'
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
      selected: [2],
      items3: [{
          action: '15 min',
          headline: 'Brunch this weekend?',
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: 'Ali Connors',
        },
        {
          action: '2 hr',
          headline: 'Summer BBQ',
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: 'me, Scrott, Jennifer',
        },
        {
          action: '6 hr',
          headline: 'Oui oui',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
          title: 'Sandra Adams',
        },
        {
          action: '12 hr',
          headline: 'Birthday gift',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
          title: 'Trevor Hansen',
        },
        {
          action: '18hr',
          headline: 'Recipe to try',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          title: 'Britta Holt',
        },
      ],
    }),
  }
</script>