<template>
  <div @click="goBack">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
      <path
        d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"
        fill="#000"
      />
    </svg>
    <p>Back</p>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "ArrowIcon",
  setup() {
    const themeMode = localStorage.getItem("themeMode");
    const router = new useRouter();
    const color = ref();

    function goBack() {
      router.push("/");
    }

    function setThemeMode() {
      if (themeMode == "dark") {
        color.value = "#fff";
      } else {
        color.value = "#000";
      }
    }

    onMounted(() => {
      setThemeMode();
    });
    return {
      color,
      setThemeMode,
      themeMode,
      goBack,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.3125rem;
}
p {
  margin-left: 9px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
