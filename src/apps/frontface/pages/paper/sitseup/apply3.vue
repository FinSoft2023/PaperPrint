<template>
  <PaperDoc>
    <div class="mx-auto max-w-2xl">
      <table class="table-auto w-full border-collapse border">
        <tr>
          <td rowspan="2" class="border-2 border-black text-center">วัน เดือน ปี</td>
          <td rowspan="2" class="border-2 border-black text-center">เงินได้ รายเดือน</td>
          <td colspan="2" class="border-2 border-black text-center">เป็นผู้กู้ตามหนังสือกู้</td>
          <td colspan="2" class="border-2 border-black text-center">เป็นผู้คํ้าประกันตาม</td>
          <td rowspan="2" class="border-2 border-black text-center">เจ้าหน้าที่</td>
          <td rowspan="2" class="border-2 border-black text-center">หมายเหตุ</td>
        </tr>
        <tr>
          <td class="border-2 border-black text-center p-2">ที่</td>
          <td class="border-2 border-black text-center">วันที่</td>
          <td class="border-2 border-black text-center">หนังสือกู้ที่</td>
          <td class="border-2 border-black text-center">บัญชีเงินกู้ที่</td>
        </tr>
        <tbody>
          <tr v-for="i in 12" :key="i">
            <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted">&nbsp;</td>
            <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
            <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
            <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
            <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
            <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
            <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
            <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
          </tr>
          <tr class="min-h-1">
            <td class="border-b-2 border-x-2 border-black min-h-1">&nbsp;</td>
            <td class="border-b-2 border-x-2 border-black min-h-1"></td>
            <td class="border-b-2 border-x-2 border-black min-h-1"></td>
            <td class="border-b-2 border-x-2 border-black min-h-1"></td>
            <td class="border-b-2 border-x-2 border-black min-h-1"></td>
            <td class="border-b-2 border-x-2 border-black min-h-1"></td>
            <td class="border-b-2 border-x-2 border-black min-h-1"></td>
            <td class="border-b-2 border-x-2 border-black min-h-1"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </PaperDoc>
</template>
