<template>
    <main>
      <PaperDoc>
        
          <div class="flex flex-col items-center">
            <img class="w-[120px] h-auto"
              src="https://www.saving-sskh.com/images/logo-saving.png"
              alt="Logo" />
              
          </div>
          
          <div class="flex flex-col items-end">
        </div>
  
        <p class=" text-xl text-center col-span-2">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        
        <div class="flex flex-col items-end mt-3 mr-6">
          <p>เขียนที่ สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
          <p class="mr-20">0859 ถนนกสิกรรม ตำบลเมืองใต้</p>
          <p class="mr-14">อำเภอเมือง จังหวัดศรีสะเกษ 33000</p>
          <p class="mr-20 mt-4" >วันที่...............เดือน...................................ปี................</p>
        </div>
  
        <div class="flex flex-col mt-1">
          <p class="mt-4">เรียน ประธานกรรมการสหกรณ์ออมทรัทย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        
  
        <div class="flex flex-col mr-6">
            <p class="mt-6 indent-20 ">
                ข้าพเจ้า <FiLL :data="data?.fname" /> <FiLL :data="data?.lname" /> เป็นข้าราชการ/ลูกจ้างประจำ/
                พนักงานราชการ/พนักงานกระทรวงสาธารณสุข (ตามวุฒิ)/พนักงานกระทรวงสาธารณสุข/ลูกจ้างชั่วคราว
                เงินบำรุง (ตามวุฒิ) ลูกจ้างชั่วคราวเงินบำรุง ตำแหน่ง <FiLL :data="data?.position" /> <span class="font-bold"> สังกัดโรงพยาบาล
                ศรีสะเกษ เป็นสมาชิกสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> เลขทะเบียนที่ <FiLL :data="data?.Regis_number" />
                และยินยอมให้สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด หักเงินที่ข้าพเจ้าได้รับเงินเดือน ค่าจ้าง
                เงินบำนาญ เงินบำเหน็จ เงินบำเหน็จตกทอด กบข. ฌกส. หรือเงินอื่นใดที่ข้าพเจ้ามีสิทธิได้รับจาก
                ส่วนราชการต้นสังกัด เพื่อชำระค่าหุ้นหรือหนี้ตามสัญญากู้เงิน ไม่ว่าจะเป็นหนี้เงินต้นและดอกเบี้ย ค่าอุปกรณ์
                แห่งหนี้และค่าเสียหายตามที่ปรากฏในสัญญากู้ได้เต็มจำนวน ทั้งนี้โดยไม่ต้องบอกกล่าวให้ผู้ยินยอมหรือ
                ผู้รับผลประโยชน์ทราบล่วงหน้าก่อน
            </p>


            <p class="mt-14 ml-40">
                <span class="ml-14">
                    ลงชื่อ..................................................................ผู้ให้คำยินยอม (ผู้สมัคร)
                </span>
            </p>
            <p class="mb-6 text-center">(<FiLL :data="data?.fname" /> <FiLL :data="data?.lname" />)</p>

            <p class="mt-4 ml-40">
                <span class="ml-14">
                    ลงชื่อ..................................................................พยาน(ผู้รับผลประโยชน์)
                </span>
            </p>
            <p class="text-center">(..................................................................)</p>
            <p class="text-center">เกี่ยวข้องเป็น............................................</p>
            <p class="text-center">เบอร์โทร...............................................</p>


            <p class="mt-14 ml-40">
                <span class="ml-14">
                    ลงชื่อ..................................................................พยาน(หัวหน้าฝ่ายการเงิน)
                </span>
            </p>
            <p class="mb-6 text-center">(..................................................................)</p>

            <p class="mt-4 ml-40">
                <span class="ml-14">
                    ลงชื่อ..................................................................ผู้อำนวยการโรงพยาบาลศรีสะเกษ
                </span>
            </p>
            <p class="text-center">(..................................................................)</p>
        
        </div>
        
    </div>
  
        
  
      </PaperDoc>
    </main>
  </template>
  
  <script setup lang="ts">
  const { data } = await useFetch<any>('/api/apply10');
  // Function to get the formatted string from the Date object in DD/MM/YYYY format
  const formatDate = (date: string) => {
    const formattedDate = new Date(date);
    const bcYear = formattedDate.getFullYear() + 543;
    return formattedDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/(\d+)\/(\d+)\/(\d+)/, '$1/$2/' + bcYear);
  }
  </script>