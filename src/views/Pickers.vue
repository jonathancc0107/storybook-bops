<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Default</h3>
          </v-col>
          <v-col cols="12">
            <v-row justify="center">
              <v-date-picker v-model="picker"></v-date-picker>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Elevation</h3>
          </v-col>
          <v-col cols="12">
            <v-row justify="space-around" align="center">
              <v-date-picker v-model="picker2" flat></v-date-picker>

              <v-date-picker v-model="picker2" elevation="15"></v-date-picker>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Multiple</h3>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="12" sm="6">
                <v-date-picker v-model="dates" multiple></v-date-picker>
              </v-col>
              <v-col cols="12" sm="6">
                <v-menu ref="menu" v-model="menu3" :close-on-content-click="false" :return-value.sync="dates"
                  transition="scale-transition" offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-combobox v-model="dates" multiple chips small-chips label="Multiple picker in menu"
                      prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-combobox>
                  </template>
                  <v-date-picker v-model="dates" multiple no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu3 = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu3.save(dates)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Range</h3>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="12" sm="6">
                <v-date-picker v-model="dates" range></v-date-picker>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="dateRangeText" label="Date range" prepend-icon="mdi-calendar" readonly>
                </v-text-field>
                model: {{ dates }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Show sibling months</h3>
          </v-col>
          <v-col cols="12">
            <v-date-picker v-model="picker3" show-adjacent-months></v-date-picker>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Active picker</h3>
          </v-col>
          <v-col cols="12">
            <div>
              <div class="mb-6">Active picker: <code>{{ activePicker || 'null' }}</code></div>
              <v-menu ref="menu" v-model="menu4" :close-on-content-click="false" transition="scale-transition" offset-y
                min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="date2" label="Birthday date" prepend-icon="mdi-calendar" readonly
                    v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date2" :active-picker.sync="activePicker"
                  :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                  min="1950-01-01" @change="save"></v-date-picker>
              </v-menu>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Dialog and menu</h3>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
                  transition="scale-transition" offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="date" label="Picker in menu" prepend-icon="mdi-calendar" readonly
                      v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="6" md="4">
                <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="date" label="Picker in dialog" prepend-icon="mdi-calendar" readonly
                      v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="date" label="Picker without buttons" prepend-icon="mdi-calendar" readonly
                      v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Formatting</h3>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="12" lg="6">
                <v-menu ref="menu1" v-model="menu5" :close-on-content-click="false" transition="scale-transition"
                  offset-y max-width="290px" min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="dateFormatted" label="Date" hint="MM/DD/YYYY format" persistent-hint
                      prepend-icon="mdi-calendar" v-bind="attrs" @blur="date3 = parseDate(dateFormatted)" v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date3" no-title @input="menu5 = false"></v-date-picker>
                </v-menu>
                <p>Date in ISO format: <strong>{{ date3 }}</strong></p>
              </v-col>

              <v-col cols="12" lg="6">
                <v-menu v-model="menu6" :close-on-content-click="false" transition="scale-transition" offset-y
                  max-width="290px" min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="computedDateFormatted" label="Date (read only text field)"
                      hint="MM/DD/YYYY format" persistent-hint prepend-icon="mdi-calendar" readonly v-bind="attrs"
                      v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="date3" no-title @input="menu6 = false"></v-date-picker>
                </v-menu>
                <p>Date in ISO format: <strong>{{ date3 }}</strong></p>
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
    data: vm => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      picker2: null,
      dates: ['2018-09-15', '2018-09-20'],
      dates2: ['2019-09-10', '2019-09-20'],
      menu3: false,
      picker3: null,
      activePicker: null,
      date2: null,
      menu4: false,
      date3: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString()
        .substr(0, 10)),
      menu5: false,
      menu6: false,
    }),
    watch: {
      menu4(val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
      date3() {
        this.dateFormatted = this.formatDate(this.date3)
      },
    },
    computed: {
      dateRangeText() {
        return this.dates.join(' ~ ')
      },
      computedDateFormatted() {
        return this.formatDate(this.date3)
      },
    },
    methods: {
      save(date) {
        this.$refs.menu4.save(date)
      },
      formatDate(date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate(date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    }
  }
</script>