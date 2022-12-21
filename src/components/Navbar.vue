<template>
    <v-app-bar :elevation="8" rounded color="teal" dark>
        <v-spacer />
        <v-btn variant="flat" color="info" class="ml-3">
            <router-link to="/auth">Регистрация</router-link>
        </v-btn>
        <v-btn variant="flat" color="info" class="ml-3">
            <router-link to="/login">Войти</router-link>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
a {
    text-decoration: none;
}
</style>
