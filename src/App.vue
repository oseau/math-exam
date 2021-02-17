<template>
  <div
    class="a4 flex flex-col mb-10 mx-auto shadow-2xl print:-my-1 print:shadow-none"
    v-for="page in pages"
    :key="page"
  >
    <div class="flex flex-1" v-for="(row, idxRow) in page" :key="row">
      <div
        class="flex-auto border-solid border-2 border-b-0 border-l-0"
        :class="{ 'border-t-0': idxRow === 0 }"
        v-for="c in row"
        :key="c.num"
      >
        ({{ c.num }})
        {{ c.expr }}
      </div>
    </div>
  </div>
</template>

<script setup>
import expressions from "./expressions";
import containsUnicode from "./containsUnicode";

const pages = [[[]]];
const ROWS_PER_PAGE = 17;

let idxExpr = 0;
for (const expr of expressions.split(/\r?\n/).filter((l) => l.length > 0)) {
  if (expr === "====================") {
    if (pages[pages.length - 1].length === ROWS_PER_PAGE) {
      pages.push([[]]);
    } else {
      pages[pages.length - 1].push([]);
    }
  } else {
    const rows = pages[pages.length - 1];
    idxExpr++;
    rows[rows.length - 1].push({
      num: idxExpr,
      expr: containsUnicode(expr) ? expr : String.raw`\(${expr}\)`,
    });
  }
}
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    window?.MathJax?.typeset();
  });
});
</script>
