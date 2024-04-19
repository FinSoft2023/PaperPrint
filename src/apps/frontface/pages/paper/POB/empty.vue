<template>
  <PaperDoc>
    <div class="grid grid-cols-3 justify-center">
      <div class="flex items-start">
        <div class="border-2 border-black p-2">
          <p>รับที่................................</p>
          <p>วันที่s........../........../..........</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="w-[120px] h-auto"
             src="https://www.saving-sskh.com/images/logo-saving.png"
             alt="Logo" />
      </div>
      <div class="flex items-start">
        <div class="border-2 border-black p-2">
          <p>หนังสือกู้ที่....................</p>
          <p>วันที่....................</p>
          <p>บัญชีเงินกู้....................</p>
        </div>
      </div>
    </div>
    <p class="font-bold text-xl text-center col-span-2">คำขอและหนังสือกู้เงินเพื่อเหตุฉุกเฉิน</p>
    <div class="w-full flex flex-col items-end">
      <div>
        <p>เขียนที่.....................</p>
        <p>วันที่........เดือน.............พ.ศ............</p>
      </div>
    </div>
    <p>เรียน คณะกรรมการดำเนินการสหกรณ๋ออมทรัพย์ โรงพยาบาลศรีสะเกษ จำกัด</p>
    <p class="indent-5">ข้าพเจ้า.................................สมาชิกเลขที่.....................</p>
  </PaperDoc>
</template>