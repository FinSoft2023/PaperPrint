<template>
    <main class="font-sans">
      <PaperDoc> <!-- หน้า 1 -->  
        <div class="grid justify-items-start  ml-20 mt-24">
          <p class="pl-72">เขียนที่ สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        </div>
        <div class="grid justify-items-start  ml-20">
          <p class="pl-80">วันที่ <FiLL :data="data?.dateReceived" date-format="full" class="min-w-60"/></p>
        </div>
        <div class="grid justify-items-start  mt-10">
          <p>เรื่อง ขอโอนเงินปันผลและเงินเฉลี่ยคืนชำระหนี้เงินกู้สามัญ</p>
        </div>
        <div class="grid justify-items-start  ">
            <p class="text-center  mt-8">เรียน ประธานกรรมการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        </div>
        <div class="grid justify-items-start mt-6 text-pretty text-base">
          <p><span class="ml-28">ด้วย ข้าพเจ้า นาย/นาง/นางสาว </span>
            <FiLL class="min-w-60" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> 
            สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-28" /> สังกัดโรงพยาบาลศรีสะเกษ มีความประสงค์ขอโอนเงินปันผลและเงินเฉลี่ยคืนทั้งจำนวนที่ได้รับประจำปี<FiLL :data="data?.stockValue" class="min-w-28" />
            ชำระหนี้เงินกู้สามัญตามสัญญาเลขที่<FiLL :data="data?.loanbook" class="min-w-28" />ลงวันที่ <FiLL class="min-w-40" :data="`${data?.loanOnDay}  ${data?.loanOnMonth}  ${data?.loanOnYear}`"/> เมื่อสหกรณ์ฯได้จัดประชุมใหญ่สามัญเสร็จเรียบร้อยแล้ว
          </p>
        </div>
        
        <p class=" ml-28 mt-8">จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติ</p><br>
        <div class="grid justify-items-center mt-10">
        <p class="pl-80"><BlankSpace class="min-w-52" /></p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/> ) 
        </div>
        <p class="pl-72 mt-2">สมาชิกเลขที่<FiLL :data="data?.member" class="min-w-20" /></p>
        <p class="pl-72">เบอร์โทร<FiLL :data="data?.nbPhon" class="min-w-32" /></p>
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