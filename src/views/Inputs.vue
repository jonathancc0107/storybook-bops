<template>
  <v-container>

    <v-row justify="center">
      <v-col cols="6">

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h1>Text Fields</h1>
          </v-col>
        </v-row>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Types</h3>
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Regular"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Regular" placeholder="Placeholder"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Solo" solo></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Solo" placeholder="Placeholder" solo></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Filled" filled></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Filled" placeholder="Placeholder" filled></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Outlined" outlined></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Outlined" placeholder="Placeholder" outlined></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Counter</h3>
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="title" :rules="rules" counter="25" hint="This field uses counter prop"
                      label="Regular"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field v-model="description" :rules="rules" counter maxlength="25"
                      hint="This field uses maxlength attribute" label="Limit exceeded"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field v-model="title" :rules="wordsRules" counter="5"
                      hint="This field counts words instead of characters" label="Custom counter from prop"
                      :counter-value="v => v.trim().split(' ').length"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field v-model="title" :rules="wordsRules" counter="5"
                      hint="This field counts words instead of characters" label="Custom counter from slot">
                      <template v-slot:counter="{ props }">
                        <v-counter v-bind="props" :value="title.trim().split(' ').length"></v-counter>
                      </template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Clearable</h3>
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="message1" label="Regular" clearable></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field v-model="message2" solo label="Solo" clearable></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field v-model="message3" filled label="Filled" clearable></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field v-model="message4" label="Outlined" outlined clearable></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Dense</h3>
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field dense label="Regular"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Filled" filled dense></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Filled" placeholder="Dense & Rounded" filled rounded dense></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Solo" solo dense></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Outlined" outlined dense></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Outlined" placeholder="Placeholder" outlined dense></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Disabled and readonly</h3>
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field value="John Doe" label="Regular" disabled></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field value="John Doe" label="Regular" readonly></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field value="John Doe" label="Solo" solo disabled></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field value="John Doe" label="Solo" solo readonly></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field value="John Doe" label="Filled" filled disabled></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field value="John Doe" label="Filled" filled readonly></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field value="John Doe" label="Outlined" outlined disabled></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field value="John Doe" label="Outlined" outlined readonly></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Hide Details</h3>
          </v-col>
          <v-col cols="12">
            <div>
              <v-text-field label="Main input" :rules="rules1" hide-details="auto"></v-text-field>
              <v-text-field label="Another input"></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Hint</h3>
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Your product or service" value="Grocery delivery"
                      hint="For example, flowers or used cars"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field label="Your landing page" hint="www.example.com/page" persistent-hint></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field label="Your product or service" value="Grocery delivery"
                      hint="For example, flowers or used cars" filled></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field label="Your landing page" hint="www.example.com/page" persistent-hint filled>
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field label="Your product or service" value="Grocery delivery"
                      hint="For example, flowers or used cars" outlined></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field label="Your landing page" hint="www.example.com/page" persistent-hint outlined>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Icon</h3>
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Prepend" prepend-icon="mdi-map-marker"></v-text-field>

                    <v-text-field label="Prepend inner" prepend-inner-icon="mdi-map-marker"></v-text-field>

                    <v-text-field label="Append" append-icon="mdi-map-marker"></v-text-field>

                    <v-text-field label="Append outer" append-outer-icon="mdi-map-marker"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field solo label="Prepend" prepend-icon="mdi-map-marker"></v-text-field>

                    <v-text-field solo label="Prepend inner" prepend-inner-icon="mdi-map-marker"></v-text-field>

                    <v-text-field solo label="Append" append-icon="mdi-map-marker"></v-text-field>

                    <v-text-field solo label="Append outer" append-outer-icon="mdi-map-marker"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field filled label="Prepend" prepend-icon="mdi-map-marker"></v-text-field>

                    <v-text-field filled label="Prepend inner" prepend-inner-icon="mdi-map-marker"></v-text-field>

                    <v-text-field filled label="Append" append-icon="mdi-map-marker"></v-text-field>

                    <v-text-field filled label="Append outer" append-outer-icon="mdi-map-marker"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field outlined label="Prepend" prepend-icon="mdi-map-marker"></v-text-field>

                    <v-text-field outlined label="Prepend inner" prepend-inner-icon="mdi-map-marker"></v-text-field>

                    <v-text-field outlined label="Append" append-icon="mdi-map-marker"></v-text-field>

                    <v-text-field outlined label="Append outer" append-outer-icon="mdi-map-marker"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Prefixes and suffixes</h3>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="4">
                <v-subheader>Prefix for dollar currency</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field label="Amount" value="10.00" prefix="$"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader>Suffix for weight</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field label="Weight" value="28.00" suffix="lbs"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader>Suffix for email domain</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field label="Email address" value="example" suffix="@gmail.com"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader>Suffix for time zone</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field label="Label Text" value="12:30:00" type="time" suffix="PST"></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Icon events</h3>
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="message" :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
                      :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'" :prepend-icon="icon" filled
                      clear-icon="mdi-close-circle" clearable label="Message" type="text" @click:append="toggleMarker"
                      @click:append-outer="sendMessage" @click:prepend="changeIcon" @click:clear="clearMessage">
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Progress</h3>
          </v-col>
          <v-col cols="12">
            <v-container fluid>
              <v-checkbox v-model="custom" label="Custom progress bar"></v-checkbox>
              <v-text-field v-model="value" color="cyan darken" label="Text field" placeholder="Start typing..."
                loading>
                <template v-slot:progress>
                  <v-progress-linear v-if="custom" :value="progress" :color="color" absolute height="7">
                  </v-progress-linear>
                </template>
              </v-text-field>
            </v-container>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Password input</h3>
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules2.required, rules2.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                      label="Normal with hint text" hint="At least 8 characters" counter @click:append="show1 = !show1">
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules2.required, rules2.min]"
                      :type="show2 ? 'text' : 'password'" name="input-10-2" label="Visible" hint="At least 8 characters"
                      value="wqfasds" class="input-group--focused" @click:append="show2 = !show2"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules2.required, rules2.min]"
                      :type="show3 ? 'text' : 'password'" name="input-10-2" label="Not visible"
                      hint="At least 8 characters" value="wqfasds" class="input-group--focused"
                      @click:append="show3 = !show3"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules2.required, rules2.emailMatch]" :type="show4 ? 'text' : 'password'" name="input-10-2"
                      label="Error" hint="At least 8 characters" value="Pa" error @click:append="show4 = !show4">
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h1>Switches</h1>
          </v-col>
        </v-row>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Default</h3>
          </v-col>
          <v-col class="text-center" cols="12">
            <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`"></v-switch>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Flat</h3>
          </v-col>
          <v-col class="text-center" cols="12">
            <v-sheet width="100%" height="100%" class="pa-12">
              <v-switch v-model="switch2" flat :label="`Switch 1: ${switch2.toString()}`"></v-switch>
              <v-switch v-model="switch3" flat :label="`Switch 2: ${switch3.toString()}`"></v-switch>
            </v-sheet>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>Inset</h3>
          </v-col>
          <v-col cols="12">
            <v-sheet class="pa-5">
              <v-switch v-model="switch4" inset :label="`Switch 1: ${switch4.toString()}`"></v-switch>
              <v-switch v-model="switch5" inset :label="`Switch 2: ${switch5.toString()}`"></v-switch>
            </v-sheet>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="my-4" justify="center">
          <v-col cols="12">
            <h3>States</h3>
          </v-col>
          <v-col cols="12">
            <v-row class="dark--text">
              <v-col cols="6">
                on
              </v-col>
              <v-col cols="6">
                off
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-switch color="primary" value input-value="true"></v-switch>
              </v-col>
              <v-col cols="6">
                <v-switch color="primary"></v-switch>
              </v-col>
            </v-row>
            <v-row class="dark--text">
              <v-col cols="6">
                on disabled
              </v-col>
              <v-col cols="6">
                off disabled
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-switch color="primary" value input-value="true" disabled></v-switch>
              </v-col>
              <v-col cols="6">
                <v-switch disabled></v-switch>
              </v-col>
            </v-row>
            <v-row class="dark--text">
              <v-col cols="6">
                on loading
              </v-col>
              <v-col cols="6">
                off loading
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-switch loading="warning" value input-value="true"></v-switch>
              </v-col>
              <v-col cols="6">
                <v-switch loading="warning"></v-switch>
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
    data() {
      return {
        switch1: true,
        switch2: true,
        switch3: false,
        switch4: true,
        switch5: false,
        message1: 'Hey!',
        message2: 'Hey!',
        message3: 'Hey!',
        message4: 'Hey!',
        title: 'Preliminary report',
        description: 'California is a state in the western United States',
        rules: [v => v.length <= 25 || 'Max 25 characters'],
        wordsRules: [v => v.trim().split(' ').length <= 5 || 'Max 5 words'],
        rules1: [
          value => !!value || 'Required.',
          value => (value && value.length >= 3) || 'Min 3 characters',
        ],
        password: 'Password',
        show: false,
        message: 'Hey!',
        marker: true,
        iconIndex: 0,
        icons: [
          'mdi-emoticon',
          'mdi-emoticon-cool',
          'mdi-emoticon-dead',
          'mdi-emoticon-excited',
          'mdi-emoticon-happy',
          'mdi-emoticon-neutral',
          'mdi-emoticon-sad',
          'mdi-emoticon-tongue',
        ],
        value: '',
        custom: true,
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        rules2: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
    computed: {
      icon() {
        return this.icons[this.iconIndex]
      },
      progress() {
        return Math.min(100, this.value.length * 10)
      },
      color() {
        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
      },
    },
    methods: {
      toggleMarker() {
        this.marker = !this.marker
      },
      sendMessage() {
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage() {
        this.message = ''
      },
      resetIcon() {
        this.iconIndex = 0
      },
      changeIcon() {
        this.iconIndex === this.icons.length - 1 ?
          this.iconIndex = 0 :
          this.iconIndex++
      },
    },
  }
</script>