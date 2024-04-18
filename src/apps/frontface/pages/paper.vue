<template>
  <div>
    <UHeader title="Document (paper)">
      <template #right>
        <UButton @click="printDoc">Print</UButton>
      </template>
    </UHeader>
    <UContainer class="bg-gray-400 py-4 print:py-0">
      <NuxtPage />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
function printDoc() {
  window.print();
}
</script>

<style>
@media print {
  header {
    display: none;
  }

  footer {
    display: none;
  }

  .paperDoc {
    margin: 0;
    padding: 0;
    /*
      border: initial;
      border-radius: initial;
      box-shadow: initial;
      background: initial;
      page-break-after: always; */
    print-color-adjust: exact;
  }

  .pagebreak {
    clear: both;
    page-break-after: always;
  }

  /* #page {padding: none; margin: none; border: none; box-shadow: none;} */
}
</style>