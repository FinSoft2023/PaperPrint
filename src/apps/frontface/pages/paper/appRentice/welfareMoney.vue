<template>
    <main >
        <PaperDoc>
            <br><br>  <br><br>
            <div class="flex text-cenetr">
            <div class="items-start ">
                <img class="w-[70px] h-auto"
                  src="https://www.saving-sskh.com/images/logo-saving.png"
                  alt="Logo" />
                  </div>
              <p class="text-3xl flex pl-56"> บันทึกข้อความ </p>
            </div>
            <div class="text-xl font-medium">
                <p>
                    ส่วนราชการ <FiLL :data="data?.location" class="underline underline-offset-4 text-base " no-line /> ที่ <FiLL :data="data?.nb" class="underline underline-offset-4 text-base" no-line /> วันที่ <FiLL  class="underline underline-offset-4 text-base" :data="data?.dateReceived"date-format="full" no-line /><br>
                    เรื่อง <FiLL :data="data?.subject1" class="underline underline-offset-4 text-base" no-line />
                </p>
            </div>
            <div class="mt-4 text-base">
              <p>
                  เรียน &nbsp; ประธานกรรมการสหกร์ออมทัพย์โรงพยาบาลศรีสะเกษ จำกัด
                </p>
            </div>
            <div class="grid justify-items-start mt-10 text-pretty text-base " >
              <p><span class="ml-20">ด้วย ข้าพเจ้า</span><FiLL class="min-w-56" :data="`${data?.fName}  ${data?.lName}`"/>ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" />
                สมาชิกสหกรณ์ฯเลขทะเบียนที่<FiLL :data="data?.numberRegis" class="min-w-20" />หน่วยงาน<FiLL :data="data?.agency" class="min-w-16" /> สังกัดโรงพยาบาลศรีสะเกษ 
                มีความประสงค์ขอเบิกเงินสวัสดิการสมาชิกเพื่อการฌาปนกิจศพ <FiLLBox :checked="data?.agency" /> คู่สมรส <FiLLBox/> บิดา <FiLLBox/> มารดา <FiLLBox/> บุตรที่ยังไม่บรรลุนิติภาวะ
                ชื่อ-สกุล <FiLL class="min-w-56" :data="`${data?.newfName}  ${data?.lName}`"/> ซึ่งได้ถึงแก่กรรม เมื่อวันที่ <FiLL :data="data?.deaddate" class="min-w-28" />
                โดยขอรับเงินดังกล่าวเป็น <FiLLBox/> เช็คเงินสด <FiLLBox :checked="data?.newnbAccount" /> โอนเข้า
                <br>ธนาคารกรุงไทย จำกัด (มหาชน) เลขที่บัญชี <FiLL :data="data?.newnbAccount" class="min-w-30" /> พร้อมแนบเอกสารหลักฐาน ดังนี้.-

              </p>
              <div class="grid grid-rows-2 grid-flow-col">
                <div class="row-span-3 text-sm">
                  <p class="pl-20" ><FiLLBox :checked="data?.newnbAccount" /> สำเนาบัตรประชาชนของผู้เสียชีวิต</p>
                  <p class="pl-20"> <FiLLBox :checked="data?.newnbAccount" /> สำเนาทะเบียนบ้านของผู้เสียชีวิต (ประทับตราคำว่า *ตาย*)</p>
                  <p class="pl-20"> <FiLLBox :checked="data?.newnbAccount" /> สำเนาใบมรณบัตร</p>
                  <p class="pl-20"> <FiLLBox :checked="data?.newnbAccount" /> สำเนาบัตรประชาชนของสมาชิก </p>
                  <p class="pl-20"> <FiLLBox :checked="data?.newnbAccount" /> สำเนาทะเบียนบ้านของสมาชิก</p>
                  <p class="pl-20"> <FiLLBox :checked="data?.newnbAccount" /> สำเนาทะเบียนสมรส (ในกรณีคู่สมรสเสียชีวิต)</p>
                  
                </div>
                <div class="row-span-2 col-span-2 ml-10 text-sm">
                  <p>จำนวน 1 ฉบับ</p>
                  <p>จำนวน 1 ฉบับ</p>
                  <p>จำนวน 1 ฉบับ</p>
                  <p>จำนวน 1 ฉบับ</p>
                  <p>จำนวน 1 ฉบับ</p>
                  <p>จำนวน 1 ฉบับ</p>
                 
                </div>
            </div>
           <br>
              <p class="ml-20 text-base ">จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติ</p>
             
             
            </div>

            <div class="grid grid-cols-2 text-end mt-10">
            <div></div>
            <div></div>
            <div ></div>
            <div></div>
            <div ></div>
            <div ></div>
            <div ></div>
            <div ><br></div>
            <div ></div>
            <div class="text-center text-base"><BlankSpace class="min-w-48" /></div>
            <div ></div>
            <div class="text-center mt-4">
              ( <FiLL class="min-w-44" :data="`${data?.fName}  ${data?.lName}`"/>)<br><br>
              <p class="text-center text-base">
                สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-28" />
              </p>
              
            </div>
            </div>

            
        </PaperDoc>

      <MorePaperDoc>
        <br><br>  <br><br>
        <br><br>  <br><br>
        <br>

        <p class="text-2xl text-center">
                  <FiLL class="min-w-20" :data="data?.location" />
                  </p>
                  <p class="underline underline-offset-2 text-2xl text-center font-semibold">ใบสำคัญทางการเงิน</p>
 <p class="pl-96 text-xl">วันที่ <FiLL class="min-w-60" :data="data?.dateReceived"
                      date-format="full" /></p>
                      <p class=" text-xl"><span class="ml-20">ข้าพเจ้า </span><FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/>
                    สมาชิกเลขทะเบียนที่ <FiLL class="min-w-40" :data="data?.numberRegis" /> ตำแหน่งหรือตำบลที่อยู่ <FiLL class="min-w-80" :data="data?.district" />
                ได้รับเงินจาก  <FiLL class="min-w-20" :data="data?.location" /> ดังรายการต่อไปนี้
                </p>
                ___________________________________________________________________________________________________________________
              
              <div class="flex ">
                
                <p class=" text-xl ml-8 mt-14">เป็นเงินค่า <FiLL class="min-w-80" :data="data?.money" /> <FiLL class="min-w-80" :data="data?.bath" />
                บาท <FiLL class="min-w-80" :data="data?.togetherBath" /> รวม
                </p>
                

                <table class="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">&nbsp;บาท&nbsp;</th>
      <th class="border border-slate-300 ...">&nbsp;สตางค์&nbsp;</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ..."><FiLL  :data="data?.bath" no-line/></td>
      <td class="border border-slate-300 text-center"><FiLL  :data="data?.satang" no-line/></td>
    </tr>
    <tr>
      <td class="border border-slate-300 ..."><FiLL  :data="data?.bath" no-line/></td>
      <td class="border border-slate-300 text-center"><FiLL  :data="data?.satang" no-line/></td>
    </tr>
    <tr>
      <td class="border border-slate-300 ..."><FiLL  :data="data?.bath" no-line/></td>
      <td class="border border-slate-300 text-center"><FiLL  :data="data?.satang" no-line/></td>
    </tr>
  </tbody>
</table>
</div>

<p class="underline underline-offset-1  text-xl ">คำชี้แจง <FiLL class="min-w-80" :data="data?.Explanation" /></p>
<br>
<p class=" text-xl text-center "><FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/> ผู้รับเงิน </p>

      </MorePaperDoc>
    </main>
  </template>
  
  <script setup
  lang="ts">

  const { data } = await useFetch<any>('/api/group2');
</script>