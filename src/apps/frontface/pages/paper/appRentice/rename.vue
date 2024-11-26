<template>
    <main class="font-sans">
      <MorePaperDoc>
        <div class="grid justify-items-center mt-20">
          <p class="pl-96">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
          <p class="pl-72">วันที่ <FiLL :data="data?.dateReceived" date-format="full" class="min-w-60"/></p>
        </div>
        <div class="grid justify-items-start mt-6 ">
          <p>เรื่อง ขอแจ้งเปลี่ยนชื่อ/ชื่อสกุล/เลขบัญชีธนาคาร</p>
        </div>
        <div class="grid justify-items-start mt-6 ">
          <p>เรียน ผู้จัดการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        </div>
        <div class="grid justify-items-start mt-6 text-pretty text-base">
          <p><span class="ml-28"> ข้าพเจ้า (นาย/นาง/นางสาว)</span>
            <FiLL class="min-w-36" :data="` ${data?.prefix} ${data?.fName}  ${data?.lName}`"/> สมาชิกเลขทะเบียนที่ <FiLL :data="data?.numberRegis" class="min-w-20" />
            ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /> สังกัดโรงพยาบาลศรีสะเกษ อำเภอเมือง จังหวัดศรีสะเกษ
              เบอร์โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-40"/>
          </p>
        </div>
        <div class="grid justify-items-start mt-6">
          <p class="text-center font-semibold "><FiLLBox :checked="data?.prefix" /><span class="ml-4"> เปลี่ยนคำนำหน้า </span><span class="font-normal ml-12">  จากเดิม 
            <FiLL class="min-w-36" :data="`${data?.prefix} `"/> </span></p>
          <p><span class="ml-52"> ชื่อที่เปลี่ยนใหม่ <FiLL class="min-w-36" :data="`${data?.newprefix} `"/> </span></p>
          <p class="text-center font-semibold "><FiLLBox :checked="data?.fName" /><span class="ml-4"> เปลี่ยนชื่อ </span><span class="font-normal ml-24">  จากเดิม
            <FiLL class="min-w-36" :data="`${data?.fName} `"/>
          </span></p>
          <p><span class="ml-52"> ชื่อที่เปลี่ยนใหม่ <FiLL class="min-w-36" :data="`${data?.newfName} `"/> </span></p>
          
          <p class="text-center font-semibold "><FiLLBox :checked="data?.lName" /><span class="ml-4"> เปลี่ยนนามสกุล </span><span class="font-normal ml-14">  จากเดิม
            <FiLL class="min-w-36" :data="`${data?.lName} `"/>
          </span></p>
          <p><span class="ml-52"> นามสกุลที่เปลี่ยนใหม่ <FiLL class="min-w-36" :data="`${data?.newlName} `"/> </span></p>
          <p class="text-center font-semibold "><FiLLBox :checked="data?.nbAccount" /><span class="ml-4"> เปลี่ยนเลขบัญชีธนาคาร </span><span class="font-normal ">  จากเดิม
            <FiLL class="min-w-36" :data="`${data?.nbAccount} `"/>
          </span></p>
          <p><span class="ml-52"> เลขบัญชีที่เปลี่ยนใหม่ <FiLL class="min-w-36" :data="`${data?.newnbAccount} `"/> </span></p>
        </div>
        <p class="text-center font-semibold mt-10">จึงลงลายมือชื่อไว้เป็นหลักฐาน</p>
        <div class="grid justify-items-center mt-10">
        <p class="pl-72">ลงชื่อ<BlankSpace class="min-w-52" /></p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/> ) 
        </div><br>
        <p class="pl-72">สมาชิกเลขที่<FiLL :data="data?.member" class="min-w-20" /></p>
        </div><br><br>
        <div class="border-solid border-2 border-slate-950 "></div>
        <p class=" font-semibold underline mt-10">บันทึกเจ้าหน้าที่สหกรณ์ฯ</p>
        <p><span class="ml-28">เจ้าหน้าที่ได้ดำเนินการเปลี่ยนแปลงในระบบโปรแกรมเรียบร้อยแล้ว</span>
        </p><br>
   
        <p class="ml-40">ลงชื่อ<BlankSpace class="min-w-52" /></p>
        <div class="pl-48">
   (<FiLL class="min-w-52" :data="`${data?.officerFName}  ${data?.officerLName}`"/> ) 
        </div><br>
        <p class="pl-40">ตำแหน่ง<FiLL :data="data?.officerPOsition" class="min-w-20" /></p><br>
        <p class="pl-52"><FiLL :data="data?.dateReceived" date-format="short" class="min-w-40"/></p><br>
        <div class="grid grid-cols-2">
 
 <div class="border-solid border-2 border-slate-950 ">
    <p class="pl-4 font-semibold">หมายเหตุ <span class="font-normal ml-2">แนบเอกสารเปลี่ยนแปลง จำนวน 1 ชุด</span></p>
 </div>
 </div>
 <div class="border-solid border-2 border-slate-950 ">

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