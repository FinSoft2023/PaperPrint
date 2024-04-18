<template>
  <PaperDoc>
    <div class="mx-auto max-w-2xl">
      <p class="text-center mb-4">ชื่อสมาชิก {{ data?.Fname }} {{ data?.Lname }} เลขทะเบียนที่ {{ data?.Regis_number }} หน่วย {{ data?.unit }}</p>
      <hr class="my-4 border-b-2 border-black">
      <p class="text-center mb-4">บัตรตัวอย่างลายมือชื่อสมาชิก</p>
      <hr class="my-1 border-b-1 border-black">
      <hr class="my-1 border-b-1 border-black">
      <div class="flex justify-between text-center">
        <div class="flex justify-center">
          <p class="text-center mt-3 ml-50">ตัวอย่างลายมือชื่อ</p>
        </div>
        <div class="flex justify-center items-center">
          <p class="text-center mt-3">วันที่ _ _ _ _ /_ _ _ _ /_ _ _ _</p>
        </div>
      </div>
      
      <hr class="my-1 border-b-1 border-black">
      <hr class="my-1 border-b-1 border-black">
      <ol class="list-decimal mx-auto max-w-xs">
        <li class="text-center mb-2 mt-6">{{ data?.Fname }}</li>
        <li class="text-center mb-2">{{ data?.Fname }}</li>
        <li class="text-center mb-3">{{ data?.Fname }}</li>
      </ol>
      <div>
        <p class="text-center mb-1">(โปรดลงลายมือชื่อคนละ 3 ลายมือชื่อ)</p>
        <p class="text-center mb-4">ขอรับรองว่าลายมือชื่อข้างบนนี้ เป็นลายมือชื่อของสมาชิกผู้นี้จริง</p>
        <p class="text-center mb-4 ml-19">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ พยาน</p>
        <p class="text-center mb-4 mr-9">(_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _)</p>
        <p class="text-center mb-4 ml-19">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ พยาน</p>
        <p class="text-center mb-4 mr-9">(_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _)</p>
      </div>
    </div>
  </PaperDoc>
</template>

<script setup lang="ts">
const { data } = await useFetch<any>('/api/sit');
// Function to get the formatted string from the Date object in DD/MM/YYYY format
const formatDate = (date: string) => {
  const formattedDate = new Date(date);
  const bcYear = formattedDate.getFullYear() + 543;
  return formattedDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/(\d+)\/(\d+)\/(\d+)/, '$1/$2/' + bcYear);
}
</script>