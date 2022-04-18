<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h1>Circular</h1>
          </v-col>
        </v-row>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Color</h3>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-progress-circular :value="100" color="blue-grey"></v-progress-circular>

              <v-progress-circular :value="80" color="deep-orange lighten-2"></v-progress-circular>

              <v-progress-circular :value="60" color="brown"></v-progress-circular>

              <v-progress-circular :value="40" color="lime"></v-progress-circular>

              <v-progress-circular :value="20" color="indigo darken-2"></v-progress-circular>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Indeterminate</h3>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>

              <v-progress-circular indeterminate color="red"></v-progress-circular>

              <v-progress-circular indeterminate color="purple"></v-progress-circular>

              <v-progress-circular indeterminate color="green"></v-progress-circular>

              <v-progress-circular indeterminate color="amber"></v-progress-circular>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Rotate</h3>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-progress-circular :rotate="360" :size="100" :width="15" :value="value" color="teal">
                {{ value }}
              </v-progress-circular>

              <v-progress-circular :rotate="-90" :size="100" :width="15" :value="value" color="primary">
                {{ value }}
              </v-progress-circular>

              <v-progress-circular :rotate="90" :size="100" :width="15" :value="value" color="red">
                {{ value }}
              </v-progress-circular>

              <v-progress-circular :rotate="180" :size="100" :width="15" :value="value" color="pink">
                {{ value }}
              </v-progress-circular>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Size and Width</h3>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>

              <v-progress-circular :width="3" color="red" indeterminate></v-progress-circular>

              <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>

              <v-progress-circular :width="3" color="green" indeterminate></v-progress-circular>

              <v-progress-circular :size="50" color="amber" indeterminate></v-progress-circular>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h1>Linear</h1>
          </v-col>
        </v-row>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Colors</h3>
          </v-col>
          <v-col cols="12">
            <div>
              <v-progress-linear background-color="pink lighten-3" color="pink lighten-1" value="15">
              </v-progress-linear>
              <br>
              <v-progress-linear background-color="blue-grey" color="lime" value="30"></v-progress-linear>
              <br>
              <v-progress-linear background-color="success" color="error" value="45"></v-progress-linear>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Indeterminate</h3>
          </v-col>
          <v-col cols="12">
            <div>
              <v-progress-linear indeterminate color="yellow darken-2"></v-progress-linear>
              <br>
              <v-progress-linear indeterminate color="green"></v-progress-linear>
              <br>
              <v-progress-linear indeterminate color="teal"></v-progress-linear>
              <br>
              <v-progress-linear indeterminate color="cyan"></v-progress-linear>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Reversed</h3>
          </v-col>
          <v-col cols="12">
            <div>
              <v-progress-linear color="pink" value="15" reverse></v-progress-linear>

              <br>

              <v-progress-linear color="lime" indeterminate reverse></v-progress-linear>

              <br>

              <v-progress-linear buffer-value="55" color="success" reverse stream value="30"></v-progress-linear>

              <br>

              <v-subheader>In specific cases you may want progress to display in left-to-right mode regardless of the
                application direction (LTR or RTL):</v-subheader>

              <v-progress-linear :reverse="$vuetify.rtl" value="15"></v-progress-linear>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Stream</h3>
          </v-col>
          <v-col cols="12">
            <div>
              <v-progress-linear color="red lighten-2" buffer-value="0" stream></v-progress-linear>
              <br>
              <v-progress-linear color="teal" buffer-value="0" value="20" stream></v-progress-linear>
              <br>
              <v-progress-linear buffer-value="50" stream color="cyan"></v-progress-linear>
              <br>
              <v-progress-linear buffer-value="60" value="40" stream color="orange"></v-progress-linear>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Striped</h3>
          </v-col>
          <v-col cols="12">
            <div>
              <v-progress-linear color="light-blue" height="10" value="10" striped></v-progress-linear>
              <br>
              <v-progress-linear color="light-green darken-4" height="10" value="20" striped></v-progress-linear>
              <br>
              <v-progress-linear height="10" value="45" striped color="lime"></v-progress-linear>
              <br>
              <v-progress-linear value="60" height="10" striped color="deep-orange"></v-progress-linear>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Default</h3>
          </v-col>
          <v-col cols="12">
            <div>
              <v-progress-linear v-model="power" color="amber" height="25"></v-progress-linear>

              <br>

              <v-progress-linear v-model="skill" color="blue-grey" height="25">
                <template v-slot:default="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>

              <br>

              <v-progress-linear v-model="knowledge" height="25">
                <strong>{{ Math.ceil(knowledge) }}%</strong>
              </v-progress-linear>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>File loader</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="344">
              <v-toolbar color="deep-purple accent-4" dark prominent>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>My Files</v-toolbar-title>

                <v-btn absolute bottom color="white" fab left light>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>

              <v-container style="height: 400px;">
                <v-row class="fill-height" align-content="center" justify="center">
                  <v-col class="text-subtitle-1 text-center" cols="12">
                    Getting your files
                  </v-col>
                  <v-col cols="6">
                    <v-progress-linear color="deep-purple accent-4" indeterminate rounded height="6">
                    </v-progress-linear>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Toolbar loader</h3>
          </v-col>
          <v-col cols="12">
            <v-card class="mx-auto mt-6" width="344">
              <v-system-bar>
                <v-spacer></v-spacer>
                <v-icon>mdi-square</v-icon>
                <v-icon>mdi-circle</v-icon>
                <v-icon>mdi-triangle</v-icon>
              </v-system-bar>

              <v-toolbar>
                <v-btn icon>
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-toolbar-title>My Recipes</v-toolbar-title>

                <v-progress-linear :active="loading" :indeterminate="loading" absolute bottom
                  color="deep-purple accent-4"></v-progress-linear>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>

              <v-container style="height: 282px;">
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <div v-if="!loading" class="text-center">
                      <v-btn color="primary" @click="loading = true">
                        Start loading
                      </v-btn>
                    </div>
                  </v-scale-transition>
                </v-row>
              </v-container>
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
    data() {
      return {
        interval1: {},
        value: 0,
        loading: false,
        skill: 20,
        knowledge: 33,
        power: 78,
      }
    },
    beforeDestroy() {
      clearInterval(this.interval1)
    },
    watch: {
      loading(val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 3000)
      },
    },
    mounted() {
      this.interval1 = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    },
  }
</script>

<style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
</style>