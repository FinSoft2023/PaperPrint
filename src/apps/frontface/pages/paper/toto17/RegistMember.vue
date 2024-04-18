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
  
        <p class=" text-xl text-center col-span-2">ใบสมัครเข้าเป็นสมาชิก</p>
        <p class=" text-xl text-center col-span-2">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        <p class=" text-xl text-center col-span-2 mt-4">*********************************</p>
        <div class="flex flex-col items-end mt-3">
          <p>สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
          <p >วันที่ .................. เดือน ................. ปี ................ </p>
        </div>
  
        <div class="flex flex-col mt-1">
          <p class="mt-4">เรียน คณะกรรมการดำเนินการสหกรณ๋ออมทรัพย์ โรงพยาบาลศรีสะเกษ จำกัด</p>
        
  
        <div class="flex flex-col ">
          <p class="mt-6 indent-20">
            ข้าพเจ้า ............ <span class="font-bold  ">{{ data?.fname }}  {{ data?.lname }}</span> ...........  บ้านเลขที่ ....... <span class="font-bold  ">{{ data?.housenumber }}</span> ....... หมู่ที่ ....... <span class="font-bold  ">{{ data?.village }}</span> ......
            ถนน .... <span class="font-bold  ">{{ data?.street }}</span> ..... <br>ตำบล ....... <span class="font-bold  ">{{ data?.parish }}</span> ........... อำเภอ ........... <span class="font-bold  ">{{ data?.district }}</span> ....... จังหวัด ............ <span class="font-bold  ">{{ data?.province }}</span> ............
            รหัสไปรษณีย์ ...... <span class="font-bold  ">{{ data?.postcode }}</span> .......... <br> เบอร์โทรศัพท์ ......... <span class="font-bold  ">{{ data?.tel }}</span> .......  
            ได้ทราบข้อบังคับของสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด โดยตลอดแล้ว เห็นชอบในวัตถุประสงค์ จึงขอสมัครเข้าเป็นสมาชิกของสหกรณ์ฯ ในฐานะเป็นผู้เข้าซื้อขอจดทะเบียนสหกรณ์ฯ และขอให้ถ้อยคำเป็นหลักฐาน ดังต่อไปนี้.-
          </p>
         
        </div>
        
    </div>
  
        
  
      </PaperDoc>
  
      <MorePaperDoc>
        
      </MorePaperDoc>
    </main>
  </template>
  
  <script setup lang="ts">
  const { data } = await useFetch<any>('/api/RegistMember');
  // Function to get the formatted string from the Date object in DD/MM/YYYY format
  const formatDate = (date: string) => {
    const formattedDate = new Date(date);
    const bcYear = formattedDate.getFullYear() + 543;
    return formattedDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/(\d+)\/(\d+)\/(\d+)/, '$1/$2/' + bcYear);
  }
  </script>