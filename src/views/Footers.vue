<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Example</h3>
          </v-col>
          <v-col cols="12">
            <v-card height="400px">
              <v-footer v-bind="localAttrs" :padless="padless">
                <v-card flat tile width="100%" class="red lighten-1 text-center">
                  <v-card-text>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                      <v-icon size="24px">
                        {{ icon }}
                      </v-icon>
                    </v-btn>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                  </v-card-text>
                </v-card>
              </v-footer>

              <v-row align="center" justify="center" class="ma-12">
                <v-col cols="12" md="8">
                  <v-select v-model="variant" :items="items" clearable label="Variant"></v-select>

                  <v-checkbox v-model="padless" hide-details label="Padless"></v-checkbox>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Padless footer</h3>
          </v-col>
          <v-col cols="12">
            <v-footer padless>
              <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
              </v-col>
            </v-footer>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Company Footer</h3>
          </v-col>
          <v-col cols="12">
            <v-footer color="primary lighten-1" padless>
              <v-row justify="center" no-gutters>
                <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
                  {{ link }}
                </v-btn>
                <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
                  {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
              </v-row>
            </v-footer>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Indigo Footer</h3>
          </v-col>
          <v-col cols="12">
            <v-footer dark padless>
              <v-card flat tile class="indigo lighten-1 white--text text-center">
                <v-card-text>
                  <v-btn v-for="icon in icons2" :key="icon" class="mx-4 white--text" icon>
                    <v-icon size="24px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </v-card-text>

                <v-card-text class="white--text pt-0">
                  Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
                  Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
                  dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
                  Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam
                  elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                  {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
              </v-card>
            </v-footer>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Teal Footer</h3>
          </v-col>
          <v-col cols="12">
            <v-footer dark padless>
              <v-card class="flex" flat tile>
                <v-card-title class="teal">
                  <strong class="subheading">Get connected with us on social networks!</strong>

                  <v-spacer></v-spacer>

                  <v-btn v-for="icon in icons2" :key="icon" class="mx-4" dark icon>
                    <v-icon size="24px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </v-card-title>

                <v-card-text class="py-2 white--text text-center">
                  {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
              </v-card>
            </v-footer>
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
      icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
      icons2: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      items: ["default", "absolute", "fixed"],
      padless: false,
      variant: "default",
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
    computed: {
      localAttrs() {
        const attrs = {};

        if (this.variant === "default") {
          attrs.absolute = false;
          attrs.fixed = false;
        } else {
          attrs[this.variant] = true;
        }
        return attrs;
      },
    },
  };
</script>