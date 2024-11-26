<template>
  <main class="font-sans">
    <PaperDoc>  <!-- หน้า 1 -->
      <div class="grid justify-items-center mt-20">
        <div class="grid grid-cols-3 justify-center">
          <div class="flex items-start">
            <div class="border-2 border-black px-2">
              <p>รับที่ <FiLL :data="data?.affiliation" class="min-w-16" /></p><p> วันที่<FiLL :data="data?.dateReceived" date-format="full"  class="min-w-28" />
                <FiLL :data="data?.receivedLocation" no-line />
              </p>
              <p>เจ้าหน้าที่/กรรมการ <FiLL class="min-w-20" :data="`${data?.officerFName}  ${data?.officerLName}`"/>
              </p>
              <p>แก้ไข/ส่งคืน<FiLL :data="data?.test" class="min-w-14" />/<FiLL :data="data?.test" class="min-w-14" />
              </p>
              <p>สังกัด<FiLL :data="data?.affiliation" class="min-w-40" />
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img class="w-[120px] h-auto"
              src="https://www.saving-sskh.com/images/logo-saving.png"
              alt="Logo" />
          </div>

          <div class="flex flex-col items-end">

            <div class="border-2 border-black px-2">
              <p>หนังสือกู้ที่<FiLL :data="data?.loanbook" class="min-w-32" />
              </p>
              <p>วันที่<FiLL :data="data?.dateReceived" date-format="full" class="min-w-48" />
              </p>
              <p>บัญชีเงินกู้ที่ <FiLL :data="data?.nbAccount" class="min-w-20" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="font-bold text-xl text-center col-span-2 mt-6">คำขอและหนังสือกู้หุ้นโดยใช้หุ้นค้ำประกัน</p>
      <div class="flex flex-col items-end mt-3">
        <p class="mt-2">วันที่<FiLL :data="data?.loanOnDay" class="min-w-16" />
          เดือน<FiLL :data="data?.loanOnMonth" class="min-w-16" />
          พ.ศ<FiLL :data="data?.loanOnYear" class="min-w-16" />
            </p>
      </div>

      <div class="flex flex-col mt-4">
        <p>เรียน คณะกรรมการดำเนินการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
      </div>
        <p class="mt-2"><span class=" ml-20">ด้วยข้าพเจ้า </span><FiLL class="min-w-32" :data="`${data?.fName}  ${data?.lName}`"/>
          สมาชิกเลขที่<FiLL :data="data?.member" class="min-w-20" />ตำแหน่ง<FiLL :data="data?.position" class="min-w-20" />หน่วยงาน<FiLL :data="data?.agency" class="min-w-20" />
          สถานภาพสมรส<FiLL :data="data?.newStatus" class="min-w-20" />เงินเดือน <FiLL :data="data?.salary" class="min-w-12" /> มีค่าหุ้นรวม<FiLL :data="data?.stockValue" class="min-w-16" />บาท 
          มีหนี้สามัญคงเหลือ<FiLL :data="data?.ordinaryDebt" class="min-w-32" />บาท
          ขอกู้เงินของสหกรณ์โดยใช้หุ้นค้ำประกัน จำนวน<FiLL :data="data?.guaranteedShares" class="min-w-32" />บาท (<MoneyText :data="data?.guaranteedShares" class="min-w-60" />)</p>
    
        <div class="border-solid border-2 border-slate-950 mt-2 px-2"> 
          <p><span class=" ml-20">ในการขอกู้เงินครั้งนี้ ข้พเจ้า(นาย/นาง/นส.) <FiLL class="min-w-60" :data="`${data?.newfName}  ${data?.newlName}`"/> ได้ตกลงยินยอม</span>
            รับภาระหนี้สินทั้งหมดแทน (นาย/นาง/นส.)<FiLL class="min-w-40" :data="`${data?.fName}  ${data?.lName}`"/> ผู้เป็นคู่สมรสของข้าพเจ้า จึงใด้ลงลายมือชื่อไว้เป็นสำคัญ
            <p class="text-right"><span>(ลงชื่อ)<FiLL :data="data?.test" class="min-w-44" />(ลายเซ็น) คู่สมรสผู้ให้คำยินยอม</span></p>
            <p class="text-right"><span class="mr-32">(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-44" />(ตัวบรรจง)</span></p>

          </p>
        </div>
        <p class="mt-2">1. ขัาพเจ้ากู้เงินไปใช้เพื่อจุดประสงค์<FiLL :data="data?.objective" class="min-w-80" /></p>
        <p>2. ข้าพเจ้ายินยอมให้เจ้าหน้าที่หักเงินเดือนได้ เมื่อได้รับมอบหมายจากสหกรณ์โดยไม่มีข้อแม้ใดๆ</p>
        <p>3. ข้าพเจ้าประสงค์ขอลาออกจากสหกรณ์ ข้าพเจ้าต้องแจ้งเป็นหนังสือและจัดการชำระหนี้สินคงด้างที่มีให้หมดสิ้นก่อน</p>
        <p>4. ข้าพเจ้าไม่ชำระหนี้ตามสัญญา ข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินเดือน เงินบำเหน็จ เงินกองทุนสำรองเลี้ยงชีพ หรือเงินอื่นใด
ที่ข้าพเจ้าได้รับ ให้นำไปชำระหนี้สามัญพร้อมตอกเบี้ยที่ยังคงด้างอยู่ให้หมดสิ้น โดยไม่มีข้อแม้ใดๆ</p>
       <div class="border-solid border-2 border-slate-950 mt-2 p-2"> 
        <p class="font-bold">อนุมัติให้กู้หุ้น<FiLL :data="data?.guaranteedShares" class="min-w-28" />บาท ชำระ<FiLL :data="data?.period" class="min-w-28" />งวด งวดละ<FiLL :data="data?.eachPeriod" class="min-w-28" />บาท พร้อมดอกเบี้ย</p>


      </div>
        <p class="mt-2"><span class="ml-20">ผู้กู้<FiLL :data="data?.test" class="min-w-44" />(ลายเซ็น)(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-44" />(ตัวบรรจง)</span></p>
        <p ><span class="ml-20">พยาน<FiLL :data="data?.test" class="min-w-40" />(ลายเซ็น)(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-44" />(ตัวบรรจง)</span></p>
        <p ><span class="ml-20">พยาน<FiLL :data="data?.test" class="min-w-40" />(ลายเซ็น)(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-44" />(ตัวบรรจง)</span></p>
        <p class="mt-2"><span class="ml-20">ข้าพเจ้าได้รับเงินกู้หุ้น จำนวน<FiLL :data="data?.guaranteedShares" class="min-w-32" />บาท(<MoneyText :data="data?.guaranteedShares" class="min-w-60" />)</span></p>
        <p>ณ วันที่<FiLL :data="data?.loanOnDay" class="min-w-20" />เดือน<FiLL :data="data?.loanOnMonth" class="min-w-20" />พ.ศ.<FiLL :data="data?.loanOnYear" class="min-w-20" /></p>
        <p class="mt-2"><span class="ml-20">แสดงบัตรประชาชนต่อเจ้าหน้าที่ ผู้รับเงิน<FiLL :data="data?.test" class="min-w-20" />(ลายเซ็น)(<FiLL :data="data?.test" class="min-w-32" />)(ตัวบรรจง)</span></p>
        <p ><span class="ml-52">เจ้าหน้าที่ผู้จ่ายเงินกู้ <FiLL :data="data?.test" class="min-w-20" />(ลายเซ็น)(<FiLL :data="data?.test" class="min-w-32" />)(ตัวบรรจง)</span></p>

        <div class="border-solid border-2 border-slate-950  p-2"> 
          <p class="font-bold text-center">บัญชีที่โอนต้องเป็นบัญชีของผู้กู้เท่านั้น</p>
          </div>
          <p class="mt-2"><span class="ml-20">ข้าพเจ้ามอบอำนาจให้สหกรณ์โอนเงินกู้เข้าบัญชีธนาคาร<FiLL :data="data?.savings" class="min-w-28" />สาขา<FiLL :data="data?.province" class="min-w-28" /></span></p>
          <p>เลขบัญชี<FiLL :data="data?.nbAccount" class="min-w-80" />โดยข้าพเจ้ายินยอมรับภาระค่าธรรมเนียมในการโอน</p>
          <p><span class="ml-36">ผู้กู้<FiLL :data="data?.test" class="min-w-40" />(ลายเซ็น)<FiLL :data="data?.test" class="min-w-40" />(ตัวบรรจง)</span></p>
          <p><span class="ml-24">เจ้าหน้าที่<FiLL :data="data?.test" class="min-w-40" />(ลายเซ็น)<FiLL :data="data?.test" class="min-w-40" />(ตัวบรรจง)</span></p>
       
        </PaperDoc>

        <MorePaperDoc>  <!-- หน้า 2 -->
          <p class="text-right mt-20">วันที่<FiLL :data="data?.loanOnDay" class="min-w-24" /> เดือน <FiLL :data="data?.loanOnMonth" class="min-w-24" />พ.ศ.<FiLL :data="data?.loanOnYear" class="min-w-24" /></p>
          <p class="font-bold mt-8">ข้าพเจ้าขอทำหนังสือค้ำประกันไว้ต่อสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
          <p class="mt-2">ข้อ 1. ตามที่ <FiLL class="min-w-28" :data="`${data?.fName}  ${data?.lName}`"/> สมาชิกเลขที่<FiLL :data="data?.member" class="min-w-24" />ได้ขอกู้เงินสหกรณ์โดยใช้หุ้นค้ำประกันนั้นข้าพเจ้ายินยอมนำหุ้นของตนเองมาค้ำประกันตามจำนวนเงินกู้ที่ได้กู้อย่างไม่มีจำกัด</p>
          <p>ข้อ 2. ในกรณีที่สหกรณ์ผ่อนเวลาส์งงวดชำระหนี้ตามที่ทำหนดไว้เดิม ถือเป็นความยินยอมของข้าพเจ้าด้วย</p>
          <p>ข้อ 3. เมื่อข้าพเจ้าลาออกจากการเป็นสมาชิกสหกรณ์ ไม่เป็นเหตุให้ข้าพเจ้าหลุดพันจากการชำระหนี้</p>
          <p>ข้อ 4. ในกรณีที่ข้าพเจ้าไม่จัดการชำระหนี้ให้เสร็จสิ้นตามที่กล่าว ข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินเดือนหักงวดชำระหนี้เงินบำเหน็จ บำนาญ โบนัส หรือเงินสำรองเลี้ยงชีพหรือเงินอื่นใดที่ข้าพเจ้าได้รับ ให้นำไปชำระหนี้พร้อมดอกเบี้ยที่ยังดงด้างโดยไม่มีข้อแม้ใดๆ</p>
          
          <p class="mt-2"><span class="ml-20">ผู้กู้<FiLL :data="data?.test" class="min-w-48" />(ลายเซ็น)(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-48" />(ตัวบรรจง)</span></p>
          <p ><span class="ml-16">พยาน<FiLL :data="data?.test" class="min-w-48" />(ลายเซ็น)(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-48" />(ตัวบรรจง)</span></p>
          <p ><span class="ml-16">พยาน<FiLL :data="data?.test" class="min-w-48" />(ลายเซ็น)(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-48" />(ตัวบรรจง)</span></p>

          <p class="text-center mt-16 text-xl font-bold">ข้อตกลงต่อท้ายสัญญา</p>
          <p class="ml-20 mt-2">ข้าพเจ้าสัญญาว่าจะส่งคืนต้นเงินกู้เป็นงวดรายเดือน งวดละ (ตัวอักษร)<FiLL :data="data?.eachPeriod" class="min-w-40"/>บาท</p>
          <p>พร้อมด้วยดอกเบี้ยในอัตราร้อยละ (ตัวอักษร)<FiLL :data="data?.newInterestRate" class="min-w-32"/>ต่อปี รวม (ตัวอักษร)<FiLL :data="data?.period" class="min-w-40"/>งวด </p>
          <p>เว้นแต่งวดสุดท้ายเป็นจำนวนเงิน (ตัวอักษร)<FiLL :data="data?.eachPeriod" class="min-w-32"/>บาท ทั้งนี้ตั้งแต่งวดประจำเดือน<FiLL :data="data?.mount" class="min-w-24"/>เป็นต้นไป </p>
          <p><span class="ml-20">ในกรณี</span>ที่มีเหตุจำเป็นที่สหกรณ์จะต้องเปลี่ยนแปลงอัตราดอกเบี้ยเงินกู้แล้ว ข้าพเจ้ายินยอมให้สหกรณ์เปลี่ยนแปลงอัตราดอกเบี้ยที่กำหนดไว้ในวรรดก่อนได้ตามที่เห็นสมควรเมื่อใดก็ได้ ทั้งนี้สหกรณ์ไม่จำเป็นต้องแจ้งให้ข้าพเจ้าทราบล่วงหน้า</p>

          <p class="mt-14"><span class="ml-20">ผู้กู้<FiLL :data="data?.test" class="min-w-48" />(ลายเซ็น)(นาย/นาง/นส.)<FiLL :data="data?.test" class="min-w-48" />(ตัวบรรจง)</span></p>

          <table class="border border-black mt-28">
                    <thead class="border border-black border-b-2">
                        <tr>
                            <th class="border border-r-2 border-black px-4 py-2">สำหรับเจ้าหน้าที่โดยเฉพาะ</th>
                            <th class="border border-black px-4 py-2 underline text-left">หมายเหตุ</th>
                        </tr>
                    </thead>
                    <tr>
                        <td class="border-r border-r-black px-4">ประธานกรรมการเงินกู้<FiLL :data="data?.test" class="min-w-52" /></td>
                        <td class="border-r border-r-black px-4">- กรอกรายการด้วยตนเอง โดยใช้หมึกสีเดียวกัน</td>
                    </tr>
                    <tr>
                        <td class="border-r border-r-black px-4">ผู้จัดการ<FiLL :data="data?.test" class="min-w-72" /></td>
                        <td class="border-r border-r-black px-4">- แก้ไขดำผิดโดยการขีดฆ่า ให้เซ็นชื่อกำกับ</td>
                    </tr>
                    <tr>
                        <td class="border-r border-r-black px-4">เจ้าหน้าที่ผู้ตรวจสัญญา<FiLL :data="data?.test" class="min-w-52" /></td>
                        <td class="border-r border-r-black px-4">และห้ามใช้น้ำยาลบคำผิด</td>
                    </tr>
                </table>
        </MorePaperDoc>
  </main>
</template>

<script setup
lang="ts">

const { data } = await useFetch<any>('/api/group2');
</script>