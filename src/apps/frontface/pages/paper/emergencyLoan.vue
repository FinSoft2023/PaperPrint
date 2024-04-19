<template>
    <main>
      <PaperDoc>
        <h3>กู้ฉุกเฉินหน้าที่ 1</h3>
        <div class="grid grid-cols-3 justify-center">
        <div class="flex items-start">
          <div class="border-2 border-black p-2">
            <p>รับที่
              <FiLL :data="data?.receivedLocation" />
            </p>
            <p>วันที่
              <FiLL :data="data?.dateReceived"
                date-format="short" />
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img class="w-[120px] h-auto"
            src="https://www.saving-sskh.com/images/logo-saving.png"
            alt="Logo" />
        </div>

        <div class="flex flex-col items-end">

          <div class="border-2 border-black p-2">
            <p>หนังสือกู้ที่
              <FiLL :data="data?.receivedLocation" />
            </p>
            <p>วันที่.............................................</p>
            <p>บัญชีเงินกู้ที่
              <FiLL :data="data?.loanAccountNumber" />
            </p>
          </div>
        </div>
      </div>

      <p class="font-bold text-xl text-center col-span-2">คำขอและหนังสือกู้เงินเพื่อเหตุฉุกเฉิน</p>
      <div class="flex flex-col items-end mt-3">
        <p>เขียนที่............................................................</p>
        <p>วันที่............................................................</p>
      </div>

      <div class="flex flex-col mt-1">
        <p>เรียน คณะกรรมการดำเนินการสหกรณ๋ออมทรัพย์ โรงพยาบาลศรีสะเกษ จำกัด</p>
      </div>

      <div class="flex flex-col ml-10">
        <p>
          ข้าพเจ้า <FiLL :data="data?.fname" /> <FiLL :data="data?.lname" /> สมาชิกเลขทะเบียนที่ <FiLL :data="data?.id" /> 
        </p>
      </div>

      <div class="flex flex-col ">
        <p>
          รับราชการหรือทำงานประจำในตำแหน่ง......................................................................สังกัด.................................................................
        </p>
        <p>ได้รับเงินได้รายเดือน
          <FiLL :data="data?.monthlyIncome" /> บาท
          ขอเสนอคำขอกู้เงินเพื่อเหตุฉุกเฉินดังต่อไปนี้
        </p>
      </div>

      <div class="flex flex-col ml-10">
        <p>ข้อ ๑. ข้าพเจ้าขอกู้เงินของสหกรณ์
          จำนวน.......................................................บาท
          (
          <MoneyText :data="data?.monthlyIncome" /> )
        </p>
      </div>

      <div class="flex flex-col ">
        <p>
          โดยจะนำไปใช้เพื่อการดังนี้......................................................................................................................................................................
        </p>
      </div>


      <div class="flex flex-col ml-10">
        <p>ข้อ ๒. ถ้าข้าพเจ้าได้รับเงินกู้ ข้าพเจ้าขอส่งเงินกู้คืน ดังนี้
        </p>
      </div>

      <div class="flex flex-col ml-10">
        <LineFiLL :data="data?.repaymentPlan"
          :limit="12">
          <template #data="{ index, item }">
            <p class="text-end">(
              <FiLL :data="index"
                thai-number
                normal />)
              ภายในวันสิ้นเดือน...
              <FiLL :data="item.m" />..ต้นเงิน..
              <FiLL :data="item.amount" />...บาท
              พร้อมด้วยดอกเบี้ย
            </p>
          </template>
          <template #default="{ index }">
            <p class="text-end">(
              <FiLL :data="index"
                thai-number
                normal />)
              ภายในวันสิ้นเดือน................................................ต้นเงิน.......................................................บาท
              พร้อมด้วยดอกเบี้ย
            </p>
          </template>
        </LineFiLL>

      </div>

      <div class="flex flex-col ml-10">
        <p>ข้อ ๓. เมื่อข้าพเจ้าได้รับเงินกู้แล้ว ข้าพเจ้ายอมรับผู้พันตามข้อบังคับของสหกรณ์ ดังนี้
        </p>
        <p class="text-end mr-1">๓.๑ ยินยอมให้ผู้บังคับบัญชา หรือเจ้าหน้าที่ผู้จ่ายเงินได้รายเดือนของข้าพเจ้า
          ที่ได้รับมอบหมายจากสหกรณ์
        </p>
        <p class="text-start ml-14">หักเงินได้รายเดือนของข้าพเจ้า ตามจำนวนงวดชำระหนี้ข่้อ ๒ เพื่อส่งต่อสหกรณ์
        </p>

        <p class="text-end mr-1"> ๓.๒ ยอมให้ถือว่าในกรณีใดๆดังกล่าวในข้อบังคับของสหกรณ์
          ให้เงินกู้ที่ขอกู้ไปจากสหกรณ์เป็นอันถึงกำหนด
        </p>
        <p class="text-start ml-14">ส่งคืนโดยสิ้นเชิงพร้อมทั้งดอกเบี้ยในทันที
          โดยมิพักคำนึงถึงกำหนดเวลาเวลาที่ตกลงไว้
        </p>
        <p class="text-end mr-2"> ๓.๓ ถ้าประสงค์จะขอลาออกหรือย้ายจากราชการ
          หรืองานประจำตามข้อบังคับของสหกรณ์จะแจ้งเป็นหนังสือ
        </p>
        <p class="text-start ml-14">ให้สหกรณ์ทราบ และจัดการชำระหนี้ซึ่งมีอยู่ต่อสหกรณ์ให้เสร็จสิ้นเสียก่อน
          ถ้าข้าพเจ้าไม่จัดการชำระหนี้
        </p>
        <p class="text-start ml-14">ให้เสร็จสิ้นตามที่กล่าวข้างต้น เมื่อข้าพเจ้าได้ลงชื่อรับเงินเดือน ค่าจ้าง
          เงินสะสม บำเหน็จ บำนาญ เงิน
        </p>
        <p class="text-start ml-14">กองทุนเลี้ยงชีพหรือเงินอื่นใด
          ในหลักฐานที่ทางราชการหรือหน่วยงานเจ้าสังกัดหรือนายจ้างจะจ่ายเงิน
        </p>
        <p class="text-start ml-14">ให้แก่ข้าพเจ้า ข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินดังกล่าว
          หักเงินชำระหนี้ พร้อมด้วยดอกเบี้ยส่งชำระ
        </p>
        <p class="text-start ml-14">ต่อสหกรณ์ให้เสร็จสิ้นเสียก่อนได้
        </p>
      </div>

      <div class="mb-3 text-right ">
        <div class=" ml-10 mt-1">
          ..........................................................................ผู้ขอกู้
        </div>
        <div class=" mr-10 ">
          (........................................................................)
        </div>
        <div class=" ml-10 ">
          ..........................................................................พยาน
        </div>
        <div class=" mr-10">
          (........................................................................)
        </div>
        <div class=" ml-10">
          ..........................................................................พยาน
        </div>
        <div class=" mr-10">
          (........................................................................)
        </div>

      </div>
       
      </PaperDoc>
  
      
      <MorePaperDoc>  
        <h3>กู้ฉุกเฉินหน้าที่ 1</h3>
     
       
      </MorePaperDoc>
    </main>
  </template>
  
  <script setup lang="ts">
  import Index from '../index.vue';
  
  const { data } = await useFetch<any>('/api/sampleWithData');
  </script>