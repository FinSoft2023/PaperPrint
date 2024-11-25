<template>
    <main>
        <PaperDoc>
          <div class="grid grid-cols-1 grid-rows-2 justify-center h-10">
              <div class="flex-col items-center row-span-2 mt-20">
                <img class="w-[90px] h-auto"
                  src="https://www.saving-sskh.com/images/logo-saving.png"
                  alt="Logo" />
              </div>
            
            <diV class="text-3xl font-medium text-center mt-20" >
                <p>บันทึกข้อความ</p>
            </diV>
          </div>
            
            
            <div class="mt-36 text-xl font-medium">
                <p>
                    ส่วนราชการ <FiLL :data="data?.location" class="underline underline-offset-4 text-base " no-line /> ที่ <FiLL :data="data?.nb" class="underline underline-offset-4 text-base" no-line /> วันที่ <FiLL  class="underline underline-offset-4 text-base" :data="data?.dateReceived"date-format="full" no-line /><br>
                    เรื่อง <FiLL :data="data?.subject" class="underline underline-offset-4 text-base" no-line />
                </p>
            </div>
            <div class="mt-4 text-base">
              <p>
                  เรียน &nbsp; ประธานกรรมการสหกรณ์ออมทัพย์โรงพยาบาลศรีสะเกษ จำกัด
                </p>
            </div>
            <div class="grid justify-items-start mt-10 text-pretty text-base " >
              <p><span class="ml-20">ด้วย ข้าพเจ้า</span><FiLL class="min-w-56" :data="`${data?.fName}  ${data?.lName}`"/>ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /> สังกัดโรงพยาบาลศรีสะเกษ สมาชิกสหกรณ์ออมทรัพย์ฯ 
                เลขทะเบียนที่<FiLL :data="data?.numberRegis" class="min-w-20" />มีความประสงค์ขอเปลี่ยนเเปลงผู้ค้ำประกันเงินกู้สามัญ / เงินกู้พิเศษ ตามสัญญาเลขที่<FiLL :data="data?.nb" class="min-w-16" />ลงวันที่<FiLL  class="min-w-52" :data="data?.dateReceived"date-format="full" />
                จำนวนเงินกู้<FiLL :data="data?.salary" class="min-w-28" /> บาท จากเดิม (นาย/นาง/นางสาว)<FiLL class="min-w-56" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/>ตำเเหน่ง<FiLL :data="data?.position" class="min-w-36" />สมาชิกเลขที่<FiLL :data="data?.member" class="min-w-24" />
                สังกัด<FiLL :data="data?.affiliation" class="min-w-60" />เปลี่ยนเเปลงเป็น(นาย/นาง/นางสาว)<FiLL class="min-w-56" :data="`${data?.newprefix} ${data?.officerLName}  ${data?.newlName}`"/>ตำเเหน่ง<FiLL :data="data?.officerPOsition" class="min-w-36" />สมาชิกเลขที่<FiLL :data="data?.satang" class="min-w-24" />สังกัด<FiLL :data="data?.affiliation" class="min-w-60" />
              </p>
              <p class="mt-4 text-base ">
                  <span class="ml-20">จึงเรียนมาเพื่อโปรดพิจารณา</span>
              </p>
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
            <div class="text-center text-base"><BlankSpace class="min-w-60" /></div>
            <div ></div>
            <div class="text-center mt-4">
              ( <FiLL class="min-w-44" :data="`${data?.fName}  ${data?.lName}`"/>)<br><br>
              <p class="text-center text-base">
                สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-28" />
              </p>
              <p class="text-center text-base mt-6">
                เบอร์โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-36" />
              </p>
            </div>
            </div>

        </PaperDoc>
        <MorePaperDoc>
           
                        <!-- กู้สามัญทั่วไป general2  -->
                        <div class="grid grid-cols-3 grid-rows-2 justify-center h-16">
              <div class="items-start mt-6 w-50">
                <div class="border-2 border-black p-2  ">
                  <p>หนังสือเงินกู้ที่
                    <FiLL  :data="data?.loanbook" class="min-w-32"/>
                  </p>
                  <p>ชื่อผู้กู้
                    <FiLL class="min-w-44" :data="`${data?.fName}  ${data?.lName}`"/>
                  </p>
                </div>
                </div>

              <div class="flex flex-col items-center row-span-2">
                <img class="w-[100px] h-auto"
                  src="https://www.saving-sskh.com/images/logo-saving.png"
                  alt="Logo" />
                  <p class="mt-12 font-bold text-base">หนังสือค้ำประกันสำหรับเงินกู้สามัญ</p>
                  <p>เลขที่ <FiLL  :data="data?.housenb" class="min-w-28"/></p>
              </div>

              <div class="flex flex-col items-end row-span-2 mt-6">
                <div class="border-2 border-black p-2">
                  <p class="text-base">ทะเบียนผู้ค้ำประกัน
                  </p>
                  <p class="text-base">เล่ม<FiLL  :data="data?.nb" class="min-w-16"/> หน้า <FiLL  :data="data?.group" class="min-w-16"/></p>
                </div>
                <div class="border-2 border-black p-1 px-2 mt-2 w-44" >
                  <p class="text-base text-center">สหกรณ์ได้รับยกเว้นไม่ต้องติดอากรเเสตมป์ตามประมวลรัษฎากร
                  </p>
                  </div>
              </div>
            </div>
      
      <div class="grid justify-items mt-32">
            <p class="mr-10 text-sm text-end">วันที่ <FiLL  class="min-w-52" :data="data?.dateReceived"
                date-format="full" /> </p>
            </div>

            <div class="grid justify-items-start mt-2 text-pretty text-base  ">
            <p><span class="ml-10">ข้าพเจ้า</span>
              <FiLL class="min-w-56" :data="`${data?.fName}  ${data?.lName}`"/> สมาชิกเลขทะเบียนที่ <FiLL :data="data?.member" class="min-w-16" /> อายุ <FiLL :data="data?.age" class="min-w-20" /> ปี
              เลขประจำตัวชาชน <FiLL :data="data?.idcard" class="min-w-20" /> &nbsp;&nbsp;  เป็น <FiLLBox /> ข้าราชการ <FiLLBox /> ลูกจ้างประจำ <FiLLBox :checked="data?.fName" /> พนักงานกระทรวงสาธารณสุข 
              <FiLLBox /> อื่นๆ................... ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /> สังกัด <FiLL :data="data?.affiliation" class="min-w-44" />
              ได้รับเงินเดือน/ค่าจ้าง เดือนละ <FiLL :data="data?.salary" class="min-w-28" /> บาท ที่อยู่ปัจจุบัน บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-20" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-10" /> ถนน <FiLL :data="data?.road" class="min-w-28" /> ตำบล/เเขวง <FiLL :data="data?.district" class="min-w-24" />
              อำเภอ <FiLL :data="data?.district" class="min-w-20" /> จังหวัด <FiLL :data="data?.province" class="min-w-28" /> รหัสไปรษณีย์ <FiLL :data="data?.zipcode" class="min-w-20" /> โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-28" />
              ได้ทำหนังสือค้ำประกันให้ไว้ต่อสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด <span class="ml-0">ซึ่งต่อไปนี้ในหนังสือค้ำประกันนี้จะใช้คำว่า "สหกรณ์" เพื่อเป็นหลักฐานดังต่อไปนี้</span>
            </p>
            <p><span class="ml-10">ข้อ 1.</span> ตามที่สหกรณ์ได้ให้ <FiLL class="min-w-56" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> กู้เงิน จำนวนเงินกู้ <FiLL :data="data?.salary" class="min-w-20" />(<MoneyText :data="data?.debt" />)
            ตามหนังสือเงินกู้สามัญที่ <FiLL :data="data?.loanbook" class="min-w-20  " /> ลงวันที่ <FiLL  class="min-w-52" :data="data?.dateReceived"date-format="full" /> และผู้กู้ได้รับเงินไปจากสหกรณ์โดยถูกต้องแล้ว ข้าพเจ้ายินยอมค้ำประกันหนี้ดังกล่าวพร้อมดอกเบี้ยและค่าสินไหมทดแทน 
            ตลอดจนค่าภาระติดพันอันเป็นอุปกรณ์แห่งหนี้นั้นด้วย</p>

            <p><span class="ml-10">ข้อ 2.</span>ข้าพเจ้าได้ยินยอมค้ำประกันหนี้ดังกล่าวตามข้อ 1 และทราบข้อผูกพันของผู้กู้ในเรื่องการส่งเงินงวดชำระหนี้ อัตราดอกเบี้ยและการเรียกคืนเงินกู้ก่อนถึงกำหนดตามที่กล่าวไว้ในหนังสือกู้เงินสำหรับเงินกู้สามัญนั้นโดยตลอดแล้ว
            ข้าพเจ้ายอมปฏิบัติตามข้อผูกพันนั้นๆ ทุกประการจนกว่าหนี้สินและค่าสินไหมทดแทน ตลอดจนค่าภาระติดพันจะได้ชำระครบถ้วนแล้ว</p>

            <p><span class="ml-10">ข้อ 3.</span>ข้าพเจ้ายอมรับผูกพันว่า การออกจากการเป็นสมาชิกของสหกรณ์ ไม่ว่าเพราะเหตุใดๆ ไม่เป็นเหตุให้ข้าพเจ้าหลุดพ้นจากการค้ำประกันรายนี้จนกว่าผู้ที่ข้าพเจ้าค้ำประกันไว้นี้จะได้ให้สมาชิกอื่น ซึ่งคณะกรรมการดำเนินการของสหกรณ์ เห็นสมควรเข้าเป็นผู้ค้ำประกันแทนข้าพเจ้า</p>

            <p><span class="ml-10">ข้อ 4.</span>ในกรณีที่ข้าพเจ้าต้องชำระหนี้ให้แก่สหกรณ์แทนผู้กู้ หลังจากสหกรณ์ได้ส่งหนังสือบอกกล่าวให้แก่ข้าพเจ้าแล้วภายในหกสิบวันนับแต่วันที่ลูกหนี้ผิดนัด ข้าพเจ้ายินยอมชำระหนี้โดยให้ผู้บังคับบัญชาหรือเจ้าหน้าที่ผู้จ่ายเงินได้รายเดือนและเงินอื่นใดของข้าพเจ้า หักจำนวน
            เงิน ณ ที่จ่าย ชำระหนี้ซึ่งข้าพเจ้าต้องชำระให้สหกรณ์จากเงินได้รายเดือนและเงินอื่นใดของข้าพเจ้าส่งต่อสหกรณ์ด้วย โดยข้าพเจ้าได้ทำหนังสือยินยอมให้หักเงินได้รายเดือนและเงินอื่นใตมอบไว้กับสหกรณ์ และความยินยอมนี้ให้มีอยู่ตลอดไปทั้งนี้จนกว่าจะได้ชำระหนี้ ตามหนังสือกู้เงิน
            สามัญที่ข้าพเจ้าได้ค้ำประกันนั้น โดยสิ้นเชิงแล้ว</p>

            <p><span class="ml-10">ข้อ 5.</span>ข้าพเจ้าได้ทำหนังสือยินยอมให้ผู้บังคับบัญชาหักเงินได้รายเดือนและเงินอื่นใดของข้าพเจ้า มอบไว้ให้สหกรณ์ เพื่อแสดงต่อหน่วยงานต้นสังกัด ของข้าพเจ้าให้หักเงิน ณ ที่จ่ายให้สหกรณ์จนกว่าสหกรณ์จะ ได้รับชำระหนี้จนสิ้นเชิง</p>

            <p><span class="ml-10">ข้อ 6.</span>หากข้าพเจ้าได้ย้ายที่อยู่จากที่ได้แจ้งไว้ในหนังสือ ข้าพเจ้าจะแจ้งให้สหกรณ์ทราบเป็นหนังสือ โดยทันที
            ข้าพเจ้าได้อ่านข้อความในหนังสือค้ำประกันนี้โดยตลอดแล้วเห็นว่าถูกต้อง จึงลงลายมือชื่อไว้เป็น สำคัญ</p>
          </div>

            <div class="grid grid-cols-1 text-center mt-4">
            <div class="text-center text-base mr-7">ลงชื่อ<BlankSpace class="min-w-56" />ผู้ค้ำประกัน</div>
            <div class="text-center pr-8 mr-8">
              (<FiLL class="min-w-56" :data="`${data?.officerLName}  ${data?.newlName}`"/>)<br><br>
            </div>
            <div class="text-center text-base ">ลงชื่อ<BlankSpace class="min-w-56" />พยาน (สมาชิก)</div>
            <div class="text-center pr-8 mr-8 mt-2">
              (<BlankSpace class="min-w-56" />)<br><br>
            </div>
            <div class="text-center text-base">ลงชื่อ<BlankSpace class="min-w-56" />พยาน (สมาชิก)</div>
            <div class="text-center pr-8 mr-8 mt-2">
              (<BlankSpace class="min-w-56" />)<br><br>
            </div>
            </div>
            <div class="grid justify-items-end">
                <p>(โปรดพลิก)</p>
                </div>
        </MorePaperDoc>
        <MorePaperDoc>
                        <!-- กู้สามัญทั่วไป general3  -->

                        <div class="border-solid border-2 border-slate-950 mt-10 p-4">
<br>
<p class="text-center text-lg font-semibold ">คำยินยอมของคู่สมรส</p> 
<p  class="text-center text-base ">(ใช้เฉพาะกรณีที่ผู้ค้ำประกันมีคู่สมรส)</p>
<p class=" text-end text-base mr-10 mt-10">เขียนที่ <FiLL :data="data?.location" class="min-w-70"/></p>
<p class=" text-end text-base mr-32">วันที่ <FiLL :data="data?.dateReceived" class="min-w-60" date-format="full" /> </p><br>

<p class=" text-base mt-4"><span class="ml-16">ข้าพเจ้า นาย/นาง </span><FiLL class="min-w-96" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/>
  <span class="ml-20">เป็นคู่สมรสของ นาย/นาง</span><FiLL class="min-w-96" :data="`${data?.prefixMrs} ${data?.newfName}  ${data?.lName}`"/> <span class="ml-6">ยินยอมให้คู่สมรสของข้าพเจ้าเป็นผู้ค้ำประกันเงินกู้สามัญของสหกรณ์ออมทรัพย์แห่งนี้</span>  
  <span class="ml-32">ตามหนังสือค้ำประกันเงินกู้ข้างต้นนี้และข้าพเจ้าได้ลงลายมือชื่อไว้เป็นสำคัญ</span>
</p>
<div class="grid grid-cols-1 text-center mt-4 pl-48">
            <div class="text-center text-base">ลงชื่อ<BlankSpace class="min-w-56" />คู่สมรสผู้ให้คำยินยอม</div>
            <div class="text-center pr-24">
              ( <FiLL class="min-w-56" :data="`${data?.fName}  ${data?.lName}`"/>)<br><br>
            </div>
            <div class="text-center text-base mr-16 mt-4">ลงชื่อ<BlankSpace class="min-w-56" />ผู้ค้ำประกัน</div>
            <div class="text-center pr-24">
              ( <FiLL class="min-w-56" :data="`${data?.newfName}  ${data?.lName}`"/>)<br><br>
            </div>
            <div class="text-center text-base mr-10 mt-10">ลงชื่อ<BlankSpace class="min-w-56" />พยาน (สมาชิก)</div>
            <div class="text-center pr-24">
              (<BlankSpace class="min-w-56" />)<br><br>
            </div>
            <div class="text-center text-base mr-10 mt-10">ลงชื่อ<BlankSpace class="min-w-56" />พยาน (สมาชิก)</div>
            <div class="text-center pr-24">
              (<BlankSpace class="min-w-56" />)<br><br>
            </div>
            </div>
            
           </div>
        </MorePaperDoc>

    </main>
</template>
<script setup
        lang="ts">

        const { data } = await useFetch<any>('/api/group2');
</script>
