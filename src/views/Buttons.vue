<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Block</h3>
          </v-col>
          <v-col cols="12">
            <v-btn block> Block Button </v-btn>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4">
          <v-col cols="12">
            <h3>Depressed</h3>
          </v-col>
          <v-col cols="12">
            <v-row justify="space-around">
              <v-btn depressed> Normal </v-btn>
              <v-btn depressed color="primary"> Primary </v-btn>
              <v-btn depressed color="error"> Error </v-btn>
              <v-btn depressed disabled> Disabled </v-btn>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4">
          <v-col cols="12">
            <h3>Floating</h3>
          </v-col>
          <v-col cols="12">
            <v-row align="center" justify="center">
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark> mdi-minus </v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark small color="pink">
                <v-icon dark> mdi-heart </v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark color="indigo">
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark color="teal">
                <v-icon dark> mdi-format-list-bulleted-square </v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark large color="cyan">
                <v-icon dark> mdi-pencil </v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark large color="purple">
                <v-icon dark> mdi-android </v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Icon</h3>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <p>Normal</p>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn icon color="pink">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn icon color="indigo">
                  <v-icon>mdi-star</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn icon color="green">
                  <v-icon>mdi-cached</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn icon color="deep-orange">
                  <v-icon>mdi-thumb-up</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row class="mt-12">
              <v-col cols="12">
                <p>Disabled</p>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn icon disabled>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn icon disabled>
                  <v-icon>mdi-star</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn icon disabled>
                  <v-icon>mdi-cached</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn icon disabled>
                  <v-icon>mdi-thumb-up</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Loaders</h3>
          </v-col>
          <v-col cols="12">
            <v-row align="center" justify="space-between">
              <v-btn class="ma-2" :loading="loading" :disabled="loading" color="secondary" @click="loader = 'loading'">
                Accept Terms
              </v-btn>

              <v-btn :loading="loading3" :disabled="loading3" color="blue-grey" class="ma-2 white--text"
                @click="loader = 'loading3'">
                Upload
                <v-icon right dark> mdi-cloud-upload </v-icon>
              </v-btn>

              <v-btn class="ma-2" :loading="loading2" :disabled="loading2" color="success" @click="loader = 'loading2'">
                Custom Loader
                <template v-slot:loader>
                  <span>Loading...</span>
                </template>
              </v-btn>

              <v-btn class="ma-2" :loading="loading4" :disabled="loading4" color="info" @click="loader = 'loading4'">
                Icon Loader
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>

              <v-btn :loading="loading5" :disabled="loading5" color="blue-grey" class="ma-2 white--text" fab
                @click="loader = 'loading5'">
                <v-icon dark> mdi-cloud-upload </v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Outlined</h3>
          </v-col>
          <v-col cols="12">
            <v-row align="center" justify="center">

              <v-btn class="ma-2" outlined color="indigo">
                Outlined Button
              </v-btn>
              <v-btn class="ma-2" outlined fab color="teal">
                <v-icon>mdi-format-list-bulleted-square</v-icon>
              </v-btn>
              <v-btn class="ma-2" outlined large fab color="indigo">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Plain</h3>
          </v-col>
          <v-col class="text-center" cols="12">
            <v-sheet class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block" color="blue-grey darken-3" dark>
              <div class="grey--text text--lighten-1 text-body-2 mb-4">
                Are you sure you want to delete this album?
              </div>

              <v-btn :disabled="loading" class="ma-1" color="grey" plain>
                Cancel
              </v-btn>

              <v-btn :loading="loading" class="ma-1" color="error" plain @click="remove">
                Delete
              </v-btn>
            </v-sheet>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Rounded</h3>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn rounded color="primary" dark> Rounded button </v-btn>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Sizing</h3>
          </v-col>
          <v-col cols="6">
            <div class="text-center">
              <div class="my-2">
                <v-btn x-small color="secondary" dark>
                  Extra small Button
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn small color="primary" dark> Small Button </v-btn>
              </div>
              <div class="my-2">
                <v-btn color="warning" dark> Normal Button </v-btn>
              </div>
              <div class="my-2">
                <v-btn color="error" dark large> Large Button </v-btn>
              </div>
              <div class="my-2">
                <v-btn x-large color="success" dark> Extra large Button </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="text-center">
              <div class="my-2">
                <v-btn color="secondary" fab x-small dark>
                  <v-icon>mdi-television</v-icon>
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn color="primary" fab small dark>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn color="warning" fab dark>
                  <v-icon>mdi-account-circle</v-icon>
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn color="error" fab large dark>
                  <v-icon>mdi-alarm</v-icon>
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn color="success" fab x-large dark>
                  <v-icon>mdi-domain</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Text</h3>
          </v-col>
          <v-col cols="12">
            <v-row align="center" justify="space-around">
              <v-btn text> Normal </v-btn>
              <v-btn text color="primary"> Primary </v-btn>
              <v-btn text color="error"> Error </v-btn>
              <v-btn text disabled> Disabled </v-btn>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Tile</h3>
          </v-col>
          <v-col class="text-center" cols="12">
            <v-btn tile color="success">
              <v-icon left> mdi-pencil </v-icon>
              Edit
            </v-btn>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Raised</h3>
          </v-col>
          <v-col cols="12">
            <v-row align="center" justify="space-around">
              <v-btn>Normal</v-btn>
              <v-btn color="primary"> Primary </v-btn>
              <v-btn color="error"> Error </v-btn>
              <v-btn disabled> Disabled </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "Buttons",
    data() {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
      };
    },
    methods: {
      async remove() {
        this.loading = true;

        await new Promise((resolve) => setTimeout(resolve, 3000));

        this.loading = false;
      },
    },
    watch: {
      loader() {
        const l = this.loader;
        this[l] = !this[l];

        setTimeout(() => (this[l] = false), 3000);

        this.loader = null;
      },
    },
  };
</script>

<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }

  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>