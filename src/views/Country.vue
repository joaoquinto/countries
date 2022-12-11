<template>
  <div>
    <button @click="goBack">
      <ArrowIconVue />
    </button>
    {{ country }}
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import ArrowIconVue from "@/components/ArrowIcon.vue";

export default {
  name: "CountryView",
  components: { ArrowIconVue },
  setup() {
    const route = new useRoute();
    const router = new useRouter();
    const name = route.params.name;
    const country = ref();

    function goBack() {
      router.push("/");
    }

    async function getCountryByName() {
      await fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((response) => response.json())
        .then((response) => {
          country.value = response;
        })
        .catch((error) => console.log(error.status));
    }

    onMounted(() => {
      getCountryByName();
    });

    return {
      country,
      goBack,
    };
  },
};
</script>

<style scoped>
button {
  border: none;
  width: 100px;
  padding: 5px 10px;
}

body.dark button {
  color: var(--White-text);
  background: var(--Dark-Blue);
}
</style>
