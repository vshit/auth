<template>
    <v-app>
        <v-sheet class="pa-12" rounded>
            <v-card class="mx-auto px-6 py-8" max-width="344">
                <v-form v-model="form" @submit.prevent="onSubmit">
                    <v-text-field
                        v-model="email"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Email"
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Normal with hint text"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                    ></v-text-field>

                    <br />

                    <v-btn
                        :disabled="!form"
                        :loading="loading"
                        block
                        color="success"
                        size="large"
                        type="submit"
                        variant="elevated"
                    >
                        Sign In
                    </v-btn>
                </v-form>
            </v-card>
        </v-sheet>
    </v-app>
</template>

<script>
export default {
    data () {
        return {
form: false,
    email: null,
    password: null,
    loading: false,
    show1: false,
      show2: true,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
        }
    }},


  methods: {
    onSubmit () {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    required (v) {
      return !!v || 'Field is required'
    },

  },
};
</script>

<style lang="scss" scoped></style>
