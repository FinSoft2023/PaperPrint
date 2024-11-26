<template>
    <main class="font-sans">
      <MorePaperDoc>
        <div class="grid justify-items-center mt-20">
          <p class="pl-96">เขียนที่ สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
          <p class="pl-72">วันที่ <FiLL :data="data?.dateReceived" date-format="full" class="min-w-60"/></p>
        </div>
        <div class="grid justify-items-start mt-6 ">
          <p>เรื่อง ขอเปลี่ยนแปลงค่าหุ้นรายเดือน</p>
        </div>
        <div class="grid justify-items-start mt-6 ">
          <p>เรียน คณะกรรมการดำเนินการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        </div>
        <div class="grid justify-items-start mt-6 text-pretty text-base">
          <p><span class="ml-28"> ข้าพเจ้า (นาย/นาง/นางสาว)</span>
            <FiLL class="min-w-36" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-20" />
            ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /> สังกัดโรงพยาบาลศรีสะเกษ อำเภอเมือง จังหวัดศรีสะเกษ
            ได้รับเงินเดือนรวมประจำตำแหน่งเดือนละ <FiLL :data="data?.salary" class="min-w-20" /> บาท 
              เบอร์โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-40"/>
          </p>
        </div>
        <div class="grid justify-items-start mt-6">
          <p><span class="ml-28"> มีคสามประสงค์ขอเปลี่ยนแปลงการส่ง</span></p>
          ชำระค่าหุ้นรายเดือนดังนี้
          <p class="text-center font-semibold ml-28"> จากเดิม <span class=" ml-12">  ส่งค่าหุ้นเดือนละ
            <FiLL class="min-w-36" :data="`${data?.stockValue} `"/> <span class="font-normal ml-4">  บาท</span> </span></p>
          <p class="text-center font-semibold ml-28"><FiLLBox /><span class="ml-2"> ขอเพิ่ม </span><span class="font-normal ml-6"> ส่งเป็นเดือนละ
            <BlankSpace class="min-w-36" />
          </span> <span class="font-normal ml-10">  บาท</span> </p>
          
          <p class="text-center font-semibold ml-28"><FiLLBox :checked="data?.stockValueno" /><span class="ml-2"> ขอลด </span><span class="font-normal ml-8">  ส่งเป็นเดือนละ
            <FiLL class="min-w-36" :data="`${data?.stockValueno} `"/>
          </span> <span class="font-normal ml-10">  บาท</span> </p>
        </div>
        <p class=" ml-28 mt-10">ทั้งนี่ ขอให้การเปลี่ยนแปลงตั้งแต่เดือน <FiLL class="min-w-36" :data="`${data?.mount} `"/>พ.ศ <FiLL class="min-w-28" :data="`${data?.year} `"/> เป็นต้นไป</p>
        <div class="grid justify-items-center mt-10">
        <p class="pl-72">ลงชื่อ<BlankSpace class="min-w-52" /></p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/> ) 
        </div><br>
        <p class="pl-72">สมาชิกเลขที่<FiLL :data="data?.member" class="min-w-20" /></p>
        </div><br><br>
        <div class="border-solid border-2 border-slate-950 "></div>
        <p class=" font-semibold underline mt-4">บันทึกเจ้าหน้าที่สหกรณ์ฯ</p><br>
        <p><span class="ml-28 ">สมาชิกส่งชำระหุ้นมาแล้ว
          <FiLL class="min-w-36" :data="`${data?.nb} `"/>
          </span> <span class="font-normal ml-2"> งวด </span>
          <p><span class="ml-28 ">มีเรือนหุ้น
            <FiLL class="min-w-36" :data="`${data?.bath} `"/>
          </span> <span class="font-normal ml-6"> บาท </span>
        </p>
        <p><span class="ml-28 ">มีหนี้ทั้งสิ้น
          <FiLL class="min-w-36" :data="`${data?.togetherBath} `"/>
          </span> <span class="font-normal ml-2"> บาท </span>
          </p>
        </p><br>
   
        <p class="ml-40">ลงชื่อ<BlankSpace class="min-w-52" /></p>
        <div class="pl-48">
   (<FiLL class="min-w-52" :data="`${data?.officerFName}  ${data?.officerLName}`"/> ) 
        </div><br>
        <p class="pl-56"><FiLL :data="data?.dateReceived" date-format="short" class="min-w-40"/></p><br>
        <div class="grid grid-cols-2 grid-flow-col">
    <div class="border-solid border-2 border-slate-950">
        <p class="pl-4 font-semibold">หมายเหตุ <span class="font-normal">ส่งคำร้องไม่เกินวันที่ 16 ของเดือน มีผลในเดือนถัดไป</span></p>
    </div>
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