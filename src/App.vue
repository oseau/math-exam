<template>
  <div class="flex" v-for="row in rows" :key="row">
    <div
      class="flex-auto pb-20 border-solid border-2"
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

const pages = [[[]]];
const ROWS_PER_PAGE = 15;

for (const [idx, expr] of exprs
  .split(/\r?\n/)
  .filter((l) => l.length > 0)
  .entries()) {
  if (expr === "====================") {
    if (pages[pages.length - 1].length === ROWS_PER_PAGE) {
      pages.push([[]]);
    } else {
      pages[pages.length - 1].push([]);
    }
  } else {
    const rows = pages[pages.length - 1];
    rows[rows.length - 1].push({ num: idx + 1, expr });
  }
}
</script>
