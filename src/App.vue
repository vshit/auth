<template>
    <v-app>
        <navbar />
        <v-main>
            <router-view />
            <notifications position="bottom right" class="b"/>
            
        </v-main>
    </v-app>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
    name: "App",
    components: {
        Navbar,
    },
};
</script>
