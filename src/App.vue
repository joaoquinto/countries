<template>
  <header>
    <nav>
      <h1>Where in the World</h1>
      <MoonIconVue @click="darkMode" :color="THEME_MODE ? '#fff' : '#000'" />
    </nav>
  </header>
  <router-view />
</template>

<script>
import MoonIconVue from "./components/MoonIcon.vue";

import { ref, onMounted } from "vue";

export default {
  components: {
    MoonIconVue,
  },
  setup() {
    const THEME_MODE = ref(false);
    const body = document.querySelector("body");

    onMounted(() => {
      checkStorage();
    });

    function checkStorage() {
      const themeMode = localStorage.getItem("themeMode");

      if (themeMode == "dark") {
        body.classList.remove("light");
        THEME_MODE.value = !THEME_MODE.value;
        body.classList.add("dark");
      } else {
        body.classList.add("light");
        body.classList.remove("dark");
      }
    }

    function darkMode() {
      THEME_MODE.value = !THEME_MODE.value;

      if (THEME_MODE.value) {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("themeMode", "dark");
      } else {
        body.classList.add("light");
        body.classList.remove("dark");
        localStorage.setItem("themeMode", "light");
      }
    }

    return { darkMode, THEME_MODE };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  display: block;
}

:root {
  --Dark-Blue: hsl(209, 23%, 22%);
  --Very-Dark-Blue-Background: hsl(207, 26%, 17%);
  --Dark-Gray-input: hsl(0, 0%, 52%);
  --Very-Light-Gray: hsl(0, 0%, 98%);
  --VeryDark-Blue-Light-Mode-Text: hsl(200, 15%, 8%);
  --White-text: hsl(0, 0%, 100%);
  --font: "Nunito Sans", sans-serif;
}

body {
  font-family: var(--font);
}

header {
  padding: 1.875rem 0;
  margin-bottom: 1.25rem;
}

body.dark header {
  background: var(--Dark-Blue);
  color: var(--White-text);
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
}

body.light header {
  background: var(--Very-Light-Gray);
  color: var(--VeryDark-Blue-Light-Mode-Text);
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
}

nav {
  display: flex;
  justify-content: space-around;
  font-size: 0.875rem;
}

:root {
  --Dark-Blue: hsl(209, 23%, 22%);
  --Very-Dark-Blue-Background: hsl(207, 26%, 17%);
  --Dark-Gray-input: hsl(0, 0%, 52%);
  --Very-Light-Gray: hsl(0, 0%, 98%);
  --VeryDark-Blue-Light-Mode-Text: hsl(200, 15%, 8%);
  --White-text: hsl(0, 0%, 100%);
  --font: "Nunito Sans", sans-serif;
}

body.dark {
  background: var(--Very-Dark-Blue-Background);
}

body.light {
  background: #dddd;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
