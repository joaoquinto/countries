<template>
  <section>
    <button>
      <ArrowIconVue />
    </button>
    <main class="container-content">
      <img
        :src="countryAccess?.flags?.svg"
        :alt="`Flag of ${countryAccess?.name?.common}`"
      />
      <div class="information">
        <div class="core-information">
          <h1>{{ countryAccess?.name?.common }}</h1>
          <ul>
            <li>
              <strong>Population: </strong>{{ countryAccess?.population }}
            </li>
            <li><strong>Region: </strong>{{ countryAccess?.region }}</li>
            <li><strong>Sub Region: </strong>{{ countryAccess?.subregion }}</li>
            <li><strong>Capital: </strong>{{ countryAccess?.capital?.[0] }}</li>
          </ul>
        </div>
        <div class="more-information">
          <ul>
            <li>
              <strong>Top Level Domain: </strong>{{ countryAccess?.tld[0] }}
            </li>
            <li class="languages">
              <strong>Languages:</strong>

              <div
                class="boxcontent"
                v-for="(item, index) in countryAccess?.languages"
                :key="index"
              >
                {{ `${item}` }}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="borders" v-show="countryAccess?.borders?.length > 0">
        <p><strong>Border Countries: </strong></p>
        <ul>
          <li
            class="boxcontent"
            v-for="(item, index) in countryAccess?.borders"
            :key="index"
          >
            {{ `${item} ` }}
          </li>
        </ul>
      </div>
    </main>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import ArrowIconVue from "@/components/ArrowIcon.vue";

export default {
  name: "CountryView",
  components: { ArrowIconVue },
  setup() {
    const route = new useRoute();
    const name = route.params.name;

    const country = ref();

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

    const countryAccess = computed(() => country.value?.[0]);

    return {
      country,
      countryAccess,
    };
  },
};
</script>

<style scoped>
section {
  width: 80%;
  margin: 0 auto;
}

main {
  width: 100%;
}

img {
  width: 100%;
  height: max-content;
}

ul li {
  list-style: none;
}

button {
  border: none;
  width: 6.25rem;
  height: 2.5rem;
  padding: 0.3125rem 0.625rem;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
  margin-bottom: 2.5rem;
}

section {
  padding: 20px 0;
}

h1 {
  margin-top: 1.875rem;
  margin-bottom: 1.25rem;
}

:is(.more-information, .core-information) li + li {
  margin-top: 20px;
}

:is(.more-information, .borders) {
  margin-top: 30px;
}

.borders {
  display: flex;
  align-items: center;
}

.borders > ul {
  display: flex;
  justify-content: baseline;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 0.3125rem;
  gap: 10px;
}

.borders > ul li {
  width: max-content;
}

.boxcontent {
  width: max-content;
  padding: 10px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
}

.languages {
  display: flex;
  align-items: baseline;
}

.languages div {
  margin-left: 5px;
}

@media (min-width: 1300px) {
  button {
    margin-bottom: 5rem;
  }

  .container-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }

  .information {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .more-information {
    margin-top: 0.9375rem;
    flex: 1;
    display: flex;
    align-items: baseline;
  }
  .core-information {
    flex: 2;
  }

  .borders {
    align-self: flex-end;
  }

  img {
    width: 500px;
    height: 400px;
  }
}

body.dark h1 {
  color: var(--White-text);
}

body.dark strong {
  color: var(--Very-Light-Gray);
  font-weight: 600;
}

body.dark li {
  color: var(--White-text);
  font-weight: 300;
}

body.dark button {
  color: var(--White-text);
  background: var(--Dark-Blue);
}

body.light h1 {
  color: var(--Very-Dark-Blue-Background);
}

body.light strong {
  color: var(--Very-Dark-Blue-Background);
  font-weight: 600;
}

body.light li {
  color: var(--Dark-Blue);
  font-weight: 300;
}

body.light button {
  color: var(--Dark-Blue);
  background: var(-Very-Light-Graye);
}
</style>
