<template>
  <div class="flex mb-20" v-for="row in rows" :key="row">
    <div
      class="flex-auto"
      v-for="expr in row"
      :key="expr"
      v-html="String.raw`\[${expr}\]`"
    ></div>
  </div>
</template>

<script setup>
const rows = String.raw`
2580-2547
1596-1296
365+97
365-97
150-85-15
-----------------
1450-375-203-625
-----------------
x = {-b \pm \sqrt{b^2-4ac} \over 2a}`
  .split(/\r?\n/)
  .filter((line) => line.length > 0)
  .reduce(
    (acc, cur) => {
      if (cur === "-----------------") {
        acc.push([]);
      } else {
        acc[acc.length - 1].push(cur);
      }
      return acc;
    },
    [[]]
  );
</script>
