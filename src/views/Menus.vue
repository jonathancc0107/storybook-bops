<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Bottom drawer</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto overflow-hidden" height="400" width="344">
              <v-system-bar color="deep-purple darken-3"></v-system-bar>

              <v-app-bar color="deep-purple accent-4" dark prominent>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>My files</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-filter</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-app-bar>

              <v-navigation-drawer v-model="drawer" absolute bottom temporary>
                <v-list nav dense>
                  <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item>
                      <v-list-item-title>Foo</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>Bar</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>Fizz</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>Buzz</v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-navigation-drawer>

              <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Expand on hover</h3>
          </v-col>
          <v-col cols="12">
            <div class="ma-12 pa-12">
              <v-card>
                <v-navigation-drawer permanent expand-on-hover>
                  <v-list>
                    <v-list-item class="px-2">
                      <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                      </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item link>
                      <v-list-item-content>
                        <v-list-item-title class="text-h6">
                          Sandra Adams
                        </v-list-item-title>
                        <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>

                  <v-divider></v-divider>

                  <v-list nav dense>
                    <v-list-item link>
                      <v-list-item-icon>
                        <v-icon>mdi-folder</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>My Files</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                      <v-list-item-icon>
                        <v-icon>mdi-account-multiple</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Shared with me</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                      <v-list-item-icon>
                        <v-icon>mdi-star</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Starred</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-navigation-drawer>
              </v-card>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Images</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" height="300" width="300">
              <v-navigation-drawer absolute dark src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
                width="100%" permanent>
                <v-list>
                  <v-list-item v-for="([icon, text], i) in items" :key="i" link>
                    <v-list-item-icon>
                      <v-icon>{{ icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ text }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Mini variant</h3>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-navigation-drawer v-model="drawer1" :mini-variant.sync="mini" permanent>
                <v-list-item class="px-2">
                  <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-title>John Leider</v-list-item-title>

                  <v-btn icon @click.stop="mini = !mini">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense>
                  <v-list-item v-for="item in items1" :key="item.title" link>
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Permanent and floating</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="pa-12" color="indigo darken-2" flat>
              <v-card elevation="12" width="256">
                <v-navigation-drawer floating permanent>
                  <v-list dense rounded>
                    <v-list-item v-for="item in items2" :key="item.title" link>
                      <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-navigation-drawer>
              </v-card>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Right</h3>
          </v-col>
          <v-col cols="12">
            <v-card height="350px">
              <v-navigation-drawer absolute permanent right>
                <template v-slot:prepend>
                  <v-list-item two-line>
                    <v-list-item-avatar>
                      <img src="https://randomuser.me/api/portraits/women/81.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Jane Smith</v-list-item-title>
                      <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>

                <v-divider></v-divider>

                <v-list dense>
                  <v-list-item v-for="item in items3" :key="item.title">
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Temporary</h3>
          </v-col>
          <v-col cols="12">
            <v-sheet height="400" class="overflow-hidden" style="position: relative;" elevation="6">
              <v-container class="fill-height">
                <v-row align="center" justify="center">
                  <v-btn color="pink" dark @click.stop="drawer2 = !drawer2">
                    Toggle
                  </v-btn>
                </v-row>
              </v-container>

              <v-navigation-drawer v-model="drawer2" absolute temporary>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense>
                  <v-list-item v-for="item in items4" :key="item.title" link>
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>
            </v-sheet>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Colored drawer</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" height="400" width="256">
              <v-navigation-drawer class="deep-purple accent-4" dark permanent>
                <v-list>
                  <v-list-item v-for="item in items5" :key="item.title" link>
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <template v-slot:append>
                  <div class="pa-2">
                    <v-btn block>
                      Logout
                    </v-btn>
                  </div>
                </template>
              </v-navigation-drawer>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Combined drawer</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" height="300" width="330">
              <v-navigation-drawer permanent width="100%">
                <v-row class="fill-height" no-gutters>
                  <v-navigation-drawer dark mini-variant mini-variant-width="56" permanent>
                    <v-list-item class="px-2">
                      <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>
                      </v-list-item-avatar>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list dense nav>
                      <v-list-item v-for="item in items6" :key="item.title">
                        <v-list-item-action>
                          <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-navigation-drawer>

                  <v-list class="grow">
                    <v-list-item v-for="link in links" :key="link" link>
                      <v-list-item-title v-text="link"></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-row>
              </v-navigation-drawer>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Menus',
    data() {
      return {
        drawer: false,
        group: null,
        items: [
          ['mdi-email', 'Inbox'],
          ['mdi-account-supervisor-circle', 'Supervisors'],
          ['mdi-clock-start', 'Clock-in'],
        ],
        drawer1: true,
        items1: [{
            title: 'Home',
            icon: 'mdi-home-city'
          },
          {
            title: 'My Account',
            icon: 'mdi-account'
          },
          {
            title: 'Users',
            icon: 'mdi-account-group-outline'
          },
        ],
        mini: true,
        items2: [{
            title: 'Home',
            icon: 'mdi-view-dashboard'
          },
          {
            title: 'About',
            icon: 'mdi-forum'
          },
        ],
        items3: [{
            title: 'Home',
            icon: 'mdi-home-city'
          },
          {
            title: 'My Account',
            icon: 'mdi-account'
          },
          {
            title: 'Users',
            icon: 'mdi-account-group-outline'
          },
        ],
        drawer2: null,
        items4: [{
            title: 'Home',
            icon: 'mdi-view-dashboard'
          },
          {
            title: 'About',
            icon: 'mdi-forum'
          },
        ],
        items5: [{
            title: 'Dashboard',
            icon: 'mdi-view-dashboard'
          },
          {
            title: 'Account',
            icon: 'mdi-account-box'
          },
          {
            title: 'Admin',
            icon: 'mdi-gavel'
          },
        ],
        items6: [{
            title: 'Home',
            icon: 'mdi-view-dashboard'
          },
          {
            title: 'About',
            icon: 'mdi-forum'
          },
        ],
        links: ['Home', 'Contacts', 'Settings'],
      }
    },

    watch: {
      group() {
        this.drawer = false
      },
    },
  }
</script>