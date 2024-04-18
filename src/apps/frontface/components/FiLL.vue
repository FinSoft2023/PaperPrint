<template>
  <span class="font-bold">{{ formattedData }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();

// Computed property to format the date if it is a valid date string
const formattedData = computed(() => {
  if (typeof props.data == 'number') {
    console.log('number', props.data);    
    return props.data.toLocaleString();
  }
  if (Date.parse(props.data)) {
    return formatDate(props.data);
  }
  return props.data;
});

// Function to get the formatted string from the Date object in DD/MM/YYYY format
const formatDate = (date: string) => {
  const formattedDate = new Date(date);
  const bcYear = formattedDate.getFullYear() + 543;
  return formattedDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/(\d+)\/(\d+)\/(\d+)/, '$1/$2/ พ.ศ. ' + bcYear);
}
</script>