<template>
    <main class="font-sans">
      <MorePaperDoc>
        <div class=" grid justify-items-center mt-24">
            <p class="mt-2 font-medium font-bold text-3xl">บันทึกข้อความ</p>
        </div><br>    
        <div class="grid justify-items-start  ">
          <p>ส่วนราชการ  โรงพยาบาลศรีสะเกษ</p>
        </div>
        <div class="grid justify-items-start  ml-20">
          <p class="pl-72">วันที่ <FiLL :data="data?.dateReceived" date-format="full" class="min-w-60"/></p>
        </div>
        <div class="grid justify-items-start  ">
          <p>เรื่อง ขอถ่ายโฉนดที่ดินพร้อมราคาประเมินหลักทรัพย์</p>
        </div>
        <br>
        <div class="border-solid border-2 border-slate-950 "></div>
        <div class="grid justify-items-start  ">
            <p class="text-center font-semibold mt-10">เรียน ประธานกรรมการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        </div>
        <div class="grid justify-items-start mt-6 text-pretty text-base">
          <p><span class="ml-28">ด้วย ข้าพเจ้า</span>
            <FiLL class="min-w-36" :data="`${data?.fName}  ${data?.lName}`"/> 
            ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /> สังกัดโรงพยาบาลศรีสะเกษ สมาชิกสหกรณ์ออมทรัพย์ ฯ 
            สมาชิกเลขทะเบียนที่ <FiLL :data="data?.numberRegis" class="min-w-20" />
            มีความประสงค์ขอถ่ายเอกสารโฉนดที่ดิน พร้อมราคาประเมินหลักทรัพย์ เพื่อประกอบการกู้ยืมพิเศษ
          </p>
        </div>
        
        <p class=" ml-28 mt-8">จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติ</p><br>
        <div class="grid justify-items-center mt-10">
        <p class="pl-72">ลงชื่อ<BlankSpace class="min-w-52" /></p> 
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/> ) 
        </div><br>
        <p class="pl-72">สมาชิกเลขที่<FiLL :data="data?.member" class="min-w-20" /></p>
 </div>
 <br>
 <br>
      </MorePaperDoc>
    </main>
  </template>
  
  <script setup
  lang="ts">

  const { data } = await useFetch<any>('/api/group2');
</script>