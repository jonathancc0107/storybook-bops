<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Loading</h3>
          </v-col>
          <v-col class="text-center" cols="12">
            <v-card :loading="loading" class="mx-auto" max-width="374">
              <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
              </template>

              <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

              <v-card-title>Cafe Badilico</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                  <div class="grey--text ms-4">
                    4.5 (413)
                  </div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  $ • Italian, Cafe
                </div>

                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Tonight's availability</v-card-title>

              <v-card-text>
                <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                  <v-chip>5:30PM</v-chip>

                  <v-chip>7:30PM</v-chip>

                  <v-chip>8:00PM</v-chip>

                  <v-chip>9:00PM</v-chip>
                </v-chip-group>
              </v-card-text>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Reserve
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Outlined</h3>
          </v-col>
          <v-col class="text-center" cols="12">
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    OVERLINE
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    Headline 5
                  </v-list-item-title>
                  <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn outlined rounded text>
                  Button
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Card Reveal</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="344">
              <v-card-text>
                <div>Word of the Day</div>
                <p class="text-h4 text--primary">
                  el·ee·mos·y·nar·y
                </p>
                <p>adjective</p>
                <div class="text--primary">
                  relating to or dependent on charity; charitable.<br>
                  "an eleemosynary educational institution."
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="teal accent-4" @click="reveal = true">
                  Learn More
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                  <v-card-text class="pb-0">
                    <p class="text-h4 text--primary">
                      Origin
                    </p>
                    <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin
                      eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-btn text color="teal accent-4" @click="reveal = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Content wrapping</h3>
          </v-col>
          <v-col cols="12">
            <v-row justify="space-around">
              <v-card width="400">
                <v-img height="200px" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg">
                  <v-app-bar flat color="rgba(0, 0, 0, 0)">
                    <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

                    <v-toolbar-title class="text-h6 white--text pl-0">
                      Messages
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn color="white" icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-app-bar>

                  <v-card-title class="white--text mt-8">
                    <v-avatar size="56">
                      <img alt="user" src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg">
                    </v-avatar>
                    <p class="ml-3">
                      John Doe
                    </p>
                  </v-card-title>
                </v-img>

                <v-card-text>
                  <div class="font-weight-bold ml-8 mb-2">
                    Today
                  </div>

                  <v-timeline align-top dense>
                    <v-timeline-item v-for="message in messages" :key="message.time" :color="message.color" small>
                      <div>
                        <div class="font-weight-normal">
                          <strong>{{ message.from }}</strong> @{{ message.time }}
                        </div>
                        <div>{{ message.message }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Custom Actions</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="344">
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

              <v-card-title>
                Top western road trips
              </v-card-title>

              <v-card-subtitle>
                1,000 miles of wonder
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="orange lighten-2" text>
                  Explore
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show = !show">
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
                    for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data
                    file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got
                    to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Grid</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="500">
              <v-system-bar color="indigo darken-2" dark>
                <v-spacer></v-spacer>

                <v-icon>mdi-window-minimize</v-icon>

                <v-icon>mdi-window-maximize</v-icon>

                <v-icon>mdi-close</v-icon>
              </v-system-bar>

              <v-toolbar color="indigo" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Discover</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-toolbar>

              <v-container fluid>
                <v-row dense>
                  <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                    <v-card>
                      <v-img :src="card.src" class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                        <v-card-title v-text="card.title"></v-card-title>
                      </v-img>

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn icon>
                          <v-icon>mdi-bookmark</v-icon>
                        </v-btn>

                        <v-btn icon>
                          <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Horizontal cards</h3>
          </v-col>
          <v-col cols="12">
            <v-card max-width="400" class="mx-auto">
              <v-system-bar color="pink darken-2" dark>
                <v-spacer></v-spacer>

                <v-icon>mdi-window-minimize</v-icon>

                <v-icon>mdi-window-maximize</v-icon>

                <v-icon>mdi-close</v-icon>
              </v-system-bar>

              <v-app-bar dark color="pink">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>My Music</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-app-bar>

              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-card color="#385F73" dark>
                      <v-card-title class="text-h5">
                        Unlimited music now
                      </v-card-title>

                      <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and
                        offline.</v-card-subtitle>

                      <v-card-actions>
                        <v-btn text>
                          Listen Now
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>

                  <v-col v-for="(item, i) in items" :key="i" cols="12">
                    <v-card :color="item.color" dark>
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                          <v-card-title class="text-h5" v-text="item.title"></v-card-title>

                          <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                          <v-card-actions>
                            <v-btn v-if="item.artist === 'Ellie Goulding'" class="ml-2 mt-3" fab icon height="40px"
                              right width="40px">
                              <v-icon>mdi-play</v-icon>
                            </v-btn>

                            <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                              START RADIO
                            </v-btn>
                          </v-card-actions>
                        </div>

                        <v-avatar class="ma-3" size="125" tile>
                          <v-img :src="item.src"></v-img>
                        </v-avatar>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Information card</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="344">
              <v-card-text>
                <div>Word of the Day</div>
                <p class="text-h4 text--primary">
                  be•nev•o•lent
                </p>
                <p>adjective</p>
                <div class="text--primary">
                  well meaning and kindly.<br>
                  "a benevolent smile"
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Media with text</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="400">
              <v-img class="white--text align-end" height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                Number 10
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>
                  Share
                </v-btn>

                <v-btn color="orange" text>
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Twitter card</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" color="#26c6da" dark max-width="400">
              <v-card-title>
                <v-icon large left>
                  mdi-twitter
                </v-icon>
                <span class="text-h6 font-weight-light">Twitter</span>
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold">
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type
                invalid as well."
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img class="elevation-6" alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                    </v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Evan You</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-icon class="mr-1">
                      mdi-heart
                    </v-icon>
                    <span class="subheading mr-2">256</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1">
                      mdi-share-variant
                    </v-icon>
                    <span class="subheading">45</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Weather card</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="400">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="text-h5">
                    San Francisco
                  </v-list-item-title>
                  <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-text>
                <v-row align="center">
                  <v-col class="text-h2" cols="6">
                    23&deg;C
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sun.png" alt="Sunny image" width="92"></v-img>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-send</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-cloud-download</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>48%</v-list-item-subtitle>
              </v-list-item>

              <v-slider v-model="time" :max="6" :tick-labels="labels" class="mx-4" ticks></v-slider>

              <v-list class="transparent">
                <v-list-item v-for="item in forecast" :key="item.day">
                  <v-list-item-title>{{ item.day }}</v-list-item-title>

                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-subtitle class="text-right">
                    {{ item.temp }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn text>
                  Full Report
                </v-btn>
              </v-card-actions>
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
    name: 'Cards',
    data: () => ({
      loading: false,
      selection: 1,
      reveal: false,
      show: false,
      cards: [{
          title: 'Pre-fab homes',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 12
        },
        {
          title: 'Favorite road trips',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 6
        },
        {
          title: 'Best airlines',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 6
        },
      ],
      messages: [{
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple lighten-1',
        },
      ],
      items: [{
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
      labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
      time: 0,
      forecast: [{
          day: 'Tuesday',
          icon: 'mdi-white-balance-sunny',
          temp: '24\xB0/12\xB0'
        },
        {
          day: 'Wednesday',
          icon: 'mdi-white-balance-sunny',
          temp: '22\xB0/14\xB0'
        },
        {
          day: 'Thursday',
          icon: 'mdi-cloud',
          temp: '25\xB0/15\xB0'
        },
      ],
    }),

    methods: {
      reserve() {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>

<style scoped>
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute !important;
    width: 100%;
  }
</style>