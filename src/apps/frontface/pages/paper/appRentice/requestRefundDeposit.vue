<template>
    <main class="font-sans">
      <PaperDoc> <!-- หน้า 1 -->
        <div class=" grid justify-items-center mt-24">
            <p class="mt-2 font-medium font-bold text-3xl">บันทึกข้อความ</p>
        </div><br>    
        <div class="grid justify-items-start  ">
          <p>ส่วนราชการ  สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        </div>
        <div class="grid justify-items-start  ml-20">
          <p class="pl-72">วันที่ <FiLL :data="data?.dateReceived" date-format="full" class="min-w-60"/></p>
        </div>
        <div class="grid justify-items-start  ">
          <p>เรื่อง ขอรับคืนเงินฝากส่วนเกิน</p>
        </div>
        <br>
        <div class="border-solid border-2 border-slate-950 "></div>
        <div class="grid justify-items-start  ">
            <p class="text-center font-semibold mt-10">เรียน ประธานกรรมการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        </div>
        <div class="grid justify-items-start mt-6 text-pretty text-base">
          <p><span class="ml-28">ด้วย ข้าพเจ้า</span>
            <FiLL class="min-w-80" :data="`${data?.fName}  ${data?.lName}`"/> 
            ตำเเหน่ง <FiLL :data="data?.position" class="min-w-48" /> สังกัดโรงพยาบาลศรีสะเกษ สมาชิกสหกรณ์ฯเลขทะเบียนที่ <FiLL :data="data?.numberRegis" class="min-w-20" />
            มีความประสงค์ขอรับคืนเงินฝากส่วนเกิน
            เนื่องจากได้โอนเงินเข้าบัญชีธนาคารกรุงไทย จำกัด (มหาชน) สาขาโรงพยาบาลศรีสะเกษ ชื่อบัญชี
            สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด เลขบัญชี 980-1-43747-2 จำนวน<FiLL :data="data?.bath" class="min-w-24" />บาท เมื่อวันที่<FiLL class="min-w-40" :data="`${data?.loanOnDay}  ${data?.loanOnMonth}  ${data?.loanOnYear}`"/>
            เนื่องจากสหกรณ์ออมทรัพย์ฯได้ประกาศเรื่องลดการฝากเงินฝากออมทรัพย์พิเศษ มีผลตั้งแต่วันที่ 1 พฤศจิกายน 2563 สมาชิกฝากเงินได้ไม่เกิน 20,000 .- บาท /คน/เดือน
          </p>
          <p><span class="ml-28">ดังนั้นข้าพเจ้าจึงขอรับคืนเงินฝากส่วนเกิน จำนวน</span>
            <BlankSpace class="min-w-20" /> บาท โดยนำฝากเข้าบัญชีธนาคารกรุงไทย จำกัด (มหาชน) สาขา <BlankSpace class="min-w-20" />
            เลขบัญชี <BlankSpace class="min-w-20" /> ต่อไป
          </p>
        </div>
        
        <p class=" ml-28 mt-8">จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติ</p><br>
        <div class="grid justify-items-center mt-10">
        <p class="pl-80"><BlankSpace class="min-w-52" /></p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/> ) 
        </div><br>
        <p class="pl-72">สมาชิกเลขที่<FiLL :data="data?.member" class="min-w-20" /></p>
 </div>
 <br>
 <br>
</PaperDoc>
    </main>
  </template>
  
  <script setup
  lang="ts">

  const { data } = await useFetch<any>('/api/group2');
</script>