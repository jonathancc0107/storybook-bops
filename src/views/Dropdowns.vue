<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Absolute</h3>
          </v-col>
          <v-col cols="12">
            <v-row class="d-flex" justify="center">
              <v-menu v-model="showMenu" absolute offset-y style="max-width: 600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-card class="portrait" img="https://cdn.vuetifyjs.com/images/cards/girl.jpg" height="300"
                    width="600" v-bind="attrs" v-on="on"></v-card>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Absolute without activator</h3>
          </v-col>
          <v-col cols="12">
            <div>
              <v-row class="flex" justify="center">
                <v-card :ripple="false" class="portrait" img="https://cdn.vuetifyjs.com/images/cards/girl.jpg"
                  height="300px" @contextmenu="show"></v-card>
              </v-row>

              <v-menu v-model="showMenu1" :position-x="x" :position-y="y" absolute offset-y>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Close on click</h3>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-switch v-model="closeOnClick" label="Close on click"></v-switch>
              <v-menu top :close-on-click="closeOnClick">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Dropdown
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Close on content click</h3>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-switch v-model="closeOnContentClick" label="Close on content click"></v-switch>
              <v-menu top :close-on-content-click="closeOnContentClick">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Dropdown
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Disabled</h3>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-switch v-model="disabled" label="Disabled"></v-switch>
              <v-menu :disabled="disabled" top offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Dropdown
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Offset x</h3>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-switch v-model="offsetX" label="X offset" color="primary"></v-switch>
              <v-menu top :offset-x="offsetX">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Dropdown
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Offset y</h3>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-switch v-model="offsetY" label="Y offset" color="primary"></v-switch>
              <v-menu top :offset-y="offsetY">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Dropdown
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Open on hover</h3>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-menu open-on-hover top offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Dropdown
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Rounded</h3>
          </v-col>
          <v-col cols="12">
            <v-row justify="space-around">
              <v-menu v-for="([text, rounded], index) in btns" :key="text" :rounded="rounded" offset-y>
                <template v-slot:activator="{ attrs, on }">
                  <v-btn :color="colors[index]" class="white--text ma-5" v-bind="attrs" v-on="on">
                    {{ text }} Radius
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="item in items1" :key="item" link>
                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Activator and tooltip</h3>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-menu>
                <template v-slot:activator="{ on: menu, attrs }">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on: tooltip }">
                      <v-btn color="primary" dark v-bind="attrs" v-on="{ ...tooltip, ...menu }">
                        Dropdown w/ Tooltip
                      </v-btn>
                    </template>
                    <span>Im A ToolTip</span>
                  </v-tooltip>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Custom transitions</h3>
          </v-col>
          <v-col cols="12">
            <v-row justify="space-around">
              <v-menu bottom origin="center center" transition="scale-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Scale Transition
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-menu transition="slide-x-transition" bottom right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="deep-orange" color="primary" dark v-bind="attrs" v-on="on">
                    Slide X Transition
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-menu transition="slide-y-transition" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="purple" color="primary" dark v-bind="attrs" v-on="on">
                    Slide Y Transition
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Popover menu</h3>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="indigo" dark v-bind="attrs" v-on="on">
                    Menu as Popover
                  </v-btn>
                </template>

                <v-card>
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar>
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>John Leider</v-list-item-title>
                        <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list>

                  <v-divider></v-divider>

                  <v-list>
                    <v-list-item>
                      <v-list-item-action>
                        <v-switch v-model="message" color="purple"></v-switch>
                      </v-list-item-action>
                      <v-list-item-title>Enable messages</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-action>
                        <v-switch v-model="hints" color="purple"></v-switch>
                      </v-list-item-action>
                      <v-list-item-title>Enable hints</v-list-item-title>
                    </v-list-item>
                  </v-list>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn color="primary" text @click="menu = false">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Use In components</h3>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="12" sm="6" offset-sm="3">
                <v-card height="200px">
                  <v-card-title class="blue white--text">
                    <span class="text-h5">Menu</span>

                    <v-spacer></v-spacer>

                    <v-menu bottom left>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn dark icon v-bind="attrs" v-on="on">
                          <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                      </template>

                      <v-list>
                        <v-list-item v-for="(item, i) in items" :key="i">
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-card-title>

                  <v-card-text>Lorem Ipsum</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Dropdowns',
    data: () => ({
      showMenu: false,
      showMenu1: false,
      x: 0,
      y: 0,
      closeOnClick: true,
      closeOnContentClick: true,
      disabled: true,
      offsetX: true,
      offsetY: true,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      btns: [
        ['Removed', '0'],
        ['Large', 'lg'],
        ['Custom', 'b-xl'],
      ],
      colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
      items: [{
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me 2'
        },
      ],
      items1: [...Array(4)].map((_, i) => `Item ${i}`),
    }),
    methods: {
      show(e) {
        e.preventDefault()
        this.showMenu1 = false
        this.x = e.clientX
        this.y = e.clientY
        this.$nextTick(() => {
          this.showMenu1 = true
        })
      },
    },
  }
</script>

<style scoped>
  .portrait.v-card {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }
</style>