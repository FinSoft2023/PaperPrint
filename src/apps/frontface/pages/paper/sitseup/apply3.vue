<template>
  <PaperDoc>
    <div class="mx-auto max-w-2xl">
      <table class="table-auto w-full border-collapse border">
        <tr>
          <td rowspan="2" class="border text-center">วัน เดือน ปี</td>
          <td rowspan="2" class="border text-center">เงินได้ รายเดือน</td>
          <td class="border text-center" colspan="2">เป็นผู้กู้ตามหนังสือกู้</td>
          <td class="border text-center" colspan="2">เป็นผู้คํ้าประกันตาม</td>
          <td rowspan="2" class="border text-center">เจ้าหน้าที่</td>
          <td rowspan="2" class="border text-center">หมายเหตุ</td>
        </tr>
        <tr>
          <td class="border text-center">ที่</td>
          <td class="border text-center">วันที่</td>
          <td class="border text-center">หนังสือกู้ที่</td>
          <td class="border text-center">บัญชีเงินกู้ที่</td>
        </tr>
        <tr v-for="i in 12" :key="i">
          <td class="border text-center">&nbsp;</td>
          <td class="border text-center"></td>
          <td class="border text-center"></td>
          <td class="border text-center"></td>
          <td class="border text-center"></td>
          <td class="border text-center"></td>
          <td class="border text-center"></td>
          <td class="border text-center"></td>
        </tr>
      </table>
    </div>
  </PaperDoc>
</template>