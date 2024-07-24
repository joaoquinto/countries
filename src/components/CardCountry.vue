<template>
  <div @click="MoreInformation(country?.name?.common)">
    <img :src="country?.flags?.png" alt="" />
    <h3>{{ country?.name?.common }}</h3>
    <p><strong>Population:</strong> {{ country?.population }}</p>
    <p><strong>Region:</strong> {{ country?.region }}</p>
    <p><strong>Capital:</strong> {{ country?.capital?.[0] }}</p>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "CardCountry",
  props: {
    country: {
      required: true,
      type: Object,
    },
  },
  setup() {
    const route = new useRouter();

    function MoreInformation(name) {
      route.push({ name: "country", params: { name: name } });
    }

    return { MoreInformation };
  },
};
</script>

<style scoped>
div {
  cursor: pointer;
  width: 100%;
  height: 390px;
  padding-bottom: 2.5rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
}

img {
  height: 160px;
  width: 320px;
}

@media (min-width: 1300px) {
  div {
    flex: 25%;
  }
}

:is(p, h3) {
  margin-left: 15px;
}

h3 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

p {
  font-size: 0.875rem;
}

p + p {
  margin-top: 0.3125rem;
}

body.dark div {
  background: var(--Dark-Blue);
}

body.dark h3 {
  color: var(--White-text);
}

body.dark strong {
  color: var(--White-text);
}

body.dark p {
  color: var(--White-text);
  font-weight: 300;
}

body.light div {
  background: var(--Very-Light-Gray);
}
</style>
