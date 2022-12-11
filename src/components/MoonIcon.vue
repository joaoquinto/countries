<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
      <path
        d="M14 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.151-3.187Q4 14.05 4 12q0-2.075.787-3.887.788-1.813 2.151-3.175Q8.3 3.575 10.125 2.787 11.95 2 14 2q1.35 0 2.625.35t2.375 1q-2.275 1.325-3.637 3.587Q14 9.2 14 12t1.363 5.062Q16.725 19.325 19 20.65q-1.1.65-2.375 1T14 22Z"
        :fill="color"
      />
    </svg>
    <p>Darkmode</p>
  </div>
</template>

<script>
export default {
  name: "MoonIcon",
  props: {
    color: {
      required: true,
      type: String,
    },
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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body.dark p {
  color: var(--White-text);
}
</style>
