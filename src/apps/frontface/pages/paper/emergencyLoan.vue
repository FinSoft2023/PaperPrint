<template>
    <main>
      <PaperDoc>
        <h3>กู้ฉุกเฉินหน้าที่ 1</h3>
       
      </PaperDoc>
  
      
      <MorePaperDoc>  
        <h3>กู้ฉุกเฉินหน้าที่ 1</h3>
     
       
      </MorePaperDoc>
    </main>
  </template>
  
  <script setup lang="ts">
  import Index from '../index.vue';
  
  const { data } = await useFetch<any>('/api/sampleWithData');
  </script>