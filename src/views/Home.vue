<template>
  <section>
    <div class="container-search">
      <div class="search">
        <input
          data-cy="SearchByName"
          type="text"
          placeholder="Search for a country..."
          v-model="searchCountry"
          autofocus
        />
        <small v-if="warningMessage"
          >Please check if you written the name rightly</small
        >
      </div>
      <select v-model="searchByRegion" data-cy="SelectByRegion">
        <option value="">Filter by Region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  </section>
  <section class="container-countries">
    <div v-for="(country, index) in countries" :key="index" class="country">
      <CardCountryVue :country="country" />
    </div>
  </section>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import CardCountryVue from "@/components/CardCountry.vue";

export default {
  name: "HomeView",
  components: {
    CardCountryVue,
  },
  setup() {
    const countries = ref([]);
    const searchCountry = ref("");
    const searchByRegion = ref("");
    const warningMessage = ref(false);

    onMounted(() => {
      getAllCountries();
    });

    watch(searchCountry, (newValue) => {
      if (newValue.length === 0) {
        getAllCountries();
        return;
      }
      getCountryByName(newValue);
    });

    watch(searchByRegion, (newValue) => {
      getCountriesByRegion(newValue);
    });

    async function getAllCountries() {
      await fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((response) => {
          countries.value = response;
          warningMessage.value = false;
        })
        .catch((error) => console.log(error));
    }

    async function getCountryByName(name) {
      await fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((response) => response.json())
        .then((response) => {
          if (response.status === 404) {
            warningMessage.value = true;
            countries.value = [];
            return;
          }
          countries.value = response;
        })
        .catch((error) => console.log(error.status));
    }

    async function getCountriesByRegion(region) {
      if (!region) {
        await getAllCountries();
        return;
      }

      await fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then((response) => response.json())
        .then((response) => {
          countries.value = response;
        });
    }
    return { searchCountry, warningMessage, searchByRegion, countries };
  },
};
</script>

<style scoped>
section {
  width: 80%;
  margin: 0 auto;
}

.search {
  display: flex;
  flex-direction: column;
}

.container-search {
  display: flex;
  flex-direction: column;
}

:is(input, select) {
  height: 50px;
  padding: 0.9375rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
}

input {
  width: 100%;
}

small {
  margin-top: 10px;
}

select {
  margin-top: 1.875rem;
  width: 60%;
}

select > option {
  font-family: var(--font);
  padding: 8px;
}

body.dark input,
body.dark select {
  background: var(--Dark-Blue);
  color: var(--White-text);
}

body.dark input::placeholder {
  color: var(--White-text);
}

body.dark small {
  color: var(--White-text);
}

body.light input,
body.light select {
  background: var(--Very-Light-Gray);
  color: var(--Dark-Blue);
}

body.light small {
  color: var(--Dark-Blue);
}

.container-countries {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.country + .country {
  margin-top: 2.5rem;
}

@media (min-width: 700px) {
  .container-search {
    flex-direction: row;
    justify-content: space-between;
  }

  .container-search > * {
    margin-bottom: 0;
  }

  input {
    width: 500px;
  }

  select {
    margin-top: 0;
    width: 300px;
    margin-left: 0.625rem;
  }
}

@media (min-width: 1300px) {
  .container-countries {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 60px;
  }

  .country {
    flex: 0;
  }

  .country + .country {
    margin-top: 0;
  }
}
</style>
