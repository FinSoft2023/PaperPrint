<template>
    <main>
        <PaperDoc> <!-- หน้า 1 -->
          <br><br> 
            <div class="border-2 border-slate-950">
              <p class="underline underline-offset-1 text-lg font-semibold text-center "> ขั้นตอนการสมัครสมาชิกกองทุนสวัสดิการสมาชิก กสธท, ล้านที่ 3</p>
              <p class="text-base">1.กรอกใบสมัครให้เรียบร้อย (ด้วยลายมือที่อ่านง่ายและชัดเจน)</p>
              <p class="text-base">2.ขอใบรับรองแพทย์จากโรงพยาบาลของรัฐ (ใช้แบบฟอร์มของสมาคมในชุดสมัครเท่านั้น)</p>
              <p class="text-base">3.เตรียมเอกสารประกอบการสมัคร ดังนี้</p>
              <p class="text-base ml-8">3.1 สำเนาบัตรประชาชนผู้สมัคร จำนวน 1 ฉบับ</p>
              <p class="text-base ml-8">3.2 สำเนาหนังสือการเป็นสมาชิก สสธท. จำนวน 1 ฉบับ</p>
              <p class="text-base ml-8">3.3 สำเนาหนังสือการเป็นสมาชิก กสธท. ล้านที่ 2 จำนวน 1 ฉบับ</p>
              <p class="text-base">4.ผู้รับผลประโยชน์(คนเดิม) ต้องลงชื่อในส่วนของแบบคำรับรองสุขภาพตนเอง (ไม่ต้องแนบเอกสารใดๆ)</p>
              <p class="text-base">5. ผู้สมัครต้องมาสมัครด้วยตนเอง เท่านั้น</p>
              <p class="text-base">6.ชำระค่าสมัครและค่าเบี้ยประกันล่วงหน้า ด้วยการโอนเข้าบัญชีธนาคารของสหกรณ์ฯ</p>
              <p class="text-base">7.เปิดรับสมัครวันที่ 1-25 ของทุกเดือน ช่วงปลายเดือนจะไม่รับสมัคร แต่ตรวจสอบเอกสารได้</p>
              <p class="text-base">8.ผู้สมัครอายุไม่เกิน 64 ปี 6 เดือน</p>
              <p class="text-base">9.ผู้รับผลประโยชน์จะเป็นคนเดิม ที่เคยกรอกในการสมัคร สสธท. หากต้องการเพิ่มผู้รับผลประโยชน์
                                   ต้องกรอกแบบฟอร์มขอเพิ่มผู้รับผลประโยชน์ และแนบเอกสารของผู้สมัครและคนที่เพิ่มขึ้นมาด้วย</p>
              <p class="text-base">10.กองทุนสวัสดิการ กสธท.ล้านที่ 2 เป็นการเพิ่มสวัสดิการให้กับสมาชิก สสธท. โดยการร่วมมือกับบริษัทประกันฯ</p>
            </div>
            
        </PaperDoc>

        <MorePaperDoc> <!-- หน้า 2 -->
          <div class="grid grid-cols-3 grid-rows-2 justify-center h-10">
              <div class="items-start mt-8">
                <div class="border-2 border-black p-1  ">
                  <p class="text-xs font-semibold tracking-tighter">โปรดเขียนตัวบรรจงและกรอกข้อมูลให้ครบทุกช่อง
                  </p>
                </div>
                <div class="border-2 border-black p-1  ">

                  <p class=" text-xs font-semibold">เอกสารประกอบ
                  <p class=" text-xs font-semibold">(เริ่มใช้ตั้งแต่วันที่ 1 กุมภาพันธ์ 2565 เป็นต้นไป)
                   <p class="text-xs font-semibold" > <FiLLBox /> 1. สำเนาบัตรข้าราชการหรือบัตรประชาชน พร้อมรับรองสำเนา</p>
                   <p class="text-xs font-semibold" > <FiLLBox /> 2. สำเนาหนังสือสำคัญ สสรท. พร้อมรับรองสำเนา</p>
                   <p class="text-xs font-semibold" > <FiLLBox /> 3. ใบรับรองแพทย์ฉบับจริง มีอายุไม่เกิน 30 วัน
                                                                     (ตามแบบฟอร์มใบรับรองแพทย์ของ กสสท.)</p>



                  </p>
                  </p>
                </div>

             
                </div>

              <div class="flex flex-col items-center row-span-2 mt-20">
                          <img class="w-[100px] h-auto"
                            src="https://cypphcoop.com/mediafiles/data/sorsortortor.png"
                            alt="Logo" />
              </div>

              <div class="flex flex-col items-end row-span-2">
                  <p class="text-sm mt-8 mr-12 font-semibold">สสธท.1
                  </p><br>
                  <p class="text-sm font-semibold ">เลขทะเบียนสมาชิก กสธท. <FiLL class="min-w-20" :data="data?.member" /></p>
                  
              </div>

            </div>
            
      <p class="text-lg text-center font-semibold  mt-36"> ใบสมัครสมาชิก (ล้านที่ 3) 
      <br> กองทุนสวัสดิการสมาชิกของสหกรณ์ออมทรัพย์สาธารณสุขไทย (กสธท.)
      </p>
      <p class="text-base ml-96"> เขียนที่ <FiLL :data="data?.location" class="min-w-80" />
       <br>วันที่ <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" /></p>
     
       <p class="text-base"> <span class="ml-12">ข้าพเจ้า</span> (นางสาว/นาง/นาย) 
              <FiLL class="min-w-80" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/>
            อายุ <FiLL :data="data?.age" class="min-w-24" /> ปี เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-96" />
            เกิดวันที่ <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" /> 
          </p> 

        
          <span class="text-base ml-12">1. เลขทะเบียนสมาชิก กสรท. ที่<FiLL :data="data?.member" class="min-w-16" /></span>
          <span class="text-base ml-6"><FiLLBox checked /> สหกรณ์ออมทรัพย์<FiLL :data="data?.affiliation" class="min-w-48" />จำกัด</span>
          <br>
          <span class="text-base ml-6"><FiLLBox /> สมัครตรง กสธท.........</span>
          <br>
          <span class="text-base ml-6"><FiLLBox /> เป็นสมาชิกสามัญ สสธท. และ กลธท. ด้านที่ 2</span>
          <span class="text-base ml-6"><FiLLBox /> เป็นเจ้าหน้าที่ กสธท./สสธท</span>
          <br>
          <span class="text-base ml-6"><FiLLBox /> เป็นกรรมการ/ผู้ตรวจสอบกิจการ/เจ้าหน้าที่ ชสอ.</span>
          <br>
          <span class="text-base ml-6"><FiLLBox /> เป็นสมาชิกสมทบ สสธท. และ กสชท. ล้านที่ 2 (ประเภทสมทบสหกรณ์ออมทรัพย์) ที่เป็นพนักงานราชการ/พกส./ 
                                                   ลูกจ้างชั่วคราว ในสังกัดกระทรวงสาธารณสุข</span>
          <br>
          <span class="text-base ml-6"><FiLLBox /> เป็นสมาชิกสมทบคู่สมรส/สมทบบุตร สสชท, และ กลธท. ด้านที่ 2 ที่ประกอบอาชีพ (โปรดระบุ)..........<br>ยกเว้นอาชีพเกษตรกร และผู้ไม่ได้ประกอบอาชีพ</span>

          <br><span class="text-base ml-12">2. สถานที่อยู่ (ในการจัดส่งเอกสาร)</span>&nbsp;
<span>บ้านเลขที่ </span> <FiLL :data="data?.housenb" class="min-w-32" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-32" /> ซอย .................... ถนน <FiLL :data="data?.road" class="min-w-32" />
 <span class="text-base ml-6">ตำบล (แขวง)</span> <FiLL :data="data?.district" class="min-w-32" />
      อำเภอ (เขต) <FiLL :data="data?.district" class="min-w-32" /> <br>จังหวัด <FiLL :data="data?.province" class="min-w-32" />  <span >รหัสไปรษณี</span> <FiLL :data="data?.zipcode" class="min-w-24" />
      โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-32" />  โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-32" /> 

<br>
<span class="text-base ml-12"> 3. ขอสมัครเป็นสมาชิกของกองทุนสวัสดิการสมาชิกของสหกรณ์ออมทรัพย์สาธารณสุขไทย (กสธท.) ด้านที่ 3</span>
<br>
<span class="text-base ml-12"> 4. การชำระเงินค่าสมัครและเบี้ยประกันชีวิต ดังนี้</span>
<br>
<span class="text-base ml-20"> 4.1 การชำระเงินครั้งแรกเริ่มสมัคร เป็นเงิน.... ...บาท (ค่าสมัคร 100 บาท และเบี้ยประกันชีวิต.......บาท)</span>
<br>
<span class="text-base ml-20"> 4.2 การชำระเงินครั้งต่อไป ข้าพเจ้ายินยอมให้หักและชำระเงินเบี้ยประกันต่ออายุ กลธท. ล้านที่ 3 ดังนี้</span>
<br> 
<span class="text-base ml-24"><FiLLBox /> เป็นสมาชิกสามัญ สสธท. และ กลธท. ด้านที่ 2</span>
<br> 
<span class="text-base ml-24"><FiLLBox checked/> นำชำระเอง / โอนเข้าระบบ KTB teller payment ของธนาคารกรุงไทย สาขานนทบุรี ชื่อบัญชี กองทุน
สวัสดิการสมาชิกของสหกรณ์ออมทรัพย์สาธารณสุขไทย รหัสหน่วยงาน Company Code : 92778 ค่าธรรมเนียมการโอน 10 บาท</span>
<br>
<span class="text-base ml-24"><FiLLBox />ชำระจากเงินปันผล เฉลี่ยคืน จากสหกรณ์ต้นสังกัด</span>
<br>
<span class="text-base ml-12"> 5. หากข้าพเจ้าเสียชีวิต ข้าพเจ้ายินยอมมอบเงินสวัสดิการสงเคราะห์ให้สหกรณ์ต้นสังกัด เพื่อชำระหนี้ของข้าพเจ้า (กรณีสหกรณ์ต้น
สังกัดเป็นศูนย์ประสานงาน) และส่วนที่เหลือมอบให้บุคคล ตามที่กำหนดไว้ในใบสมัครหรือหนังสือเปลี่ยนแปลงของสมาคม สสขท.</span>
<br>
<span class="text-base ml-12"> 6. ข้าพเจ้าขอสัญญาว่า เมื่อคณะกรรมการอนุมัติให้ข้าพเจ้าเป็นสมาชิกแล้ว ข้าพเจ้าจะปฏิบัติตามระเบียบและประกาศของ
กองทุนสวัสดิการสมาชิกของสหกรณ์ออมทรัพย์สาธารณสุขไทย ทุกประการ และจะส่งเสริม สนับสนุน กสธท. ให้เจริญรุ่งเรืองยิ่งๆ ขึ้นไป</span>
<br>
<span class="text-base ml-12"> 6. ข้าพเจ้า<FiLL class="min-w-40" :data="`${data?.fName}  ${data?.lName}`"/>ขอรับรองว่า ข้าพเจ้ามีสุขภาพสมบูรณ์แข็งแรง (ไม่เคยมีประวัติ
การรักษาโรคตามใบรับรองแพทย์ที่ กสอท. กำหนด) มาก่อนวันสมัคร ตามระเบียบ กสธท. ข้อ 9.3 หากข้าพเจ้ารู้แล้วละเว้นเสีย
ไม่เปิดเผยข้อความจริงหรือแถลงข้อความนั้น เป็นความเท็จ ข้าพเจ้ายินยอม ให้ กสธท. ใช้สิทธิ์ตัดรายชื่อพ้นสมาชิกภาพ
กสธท. ตามระเบียบ กสธท. ข้อ 14 (1) (3) และ (7) ได้</span>
        </MorePaperDoc>
        <MorePaperDoc>
<div class="grid grid-cols-3 justify-center">
  <div class="flex flex-col items-start">
        
                        <div class="border-solid border-2 border-slate-950 text-xs">
                            <p class="ml-4 mr-4">
                            <p> ได้ตรวจสอบแล้ว </p>
                            <p> เป็นสมาชิก สตท. ทะเบียนเลขที่....และ </p>
                            <p> เป็นสมาชิก กสรท. ทะเบียนเลขที่....จริง</p>
                            <div class="ml-2">
                              <p class="mt-4">................................................................</p>
                              <p>(<span class="px-20"></span>)</p>
                              <p class="ml-8">เจ้าหน้าที่ศูนย์/กสธท</p>
                            </div>
                          </p>
                            
                        </div>
                        
                    </div>
                    <div class="flex flex-col items-end col-span-2 mr-40">
                      <div class="text-center text-base  mt-2 mr-2">(ลงชื่อ)<BlankSpace class="min-w-52" />พยาน</div>
                    <div ></div>
                    <div class="text-center ">
                        (<FiLL class="min-w-52" :data="`${data?.fNameWitness1}  ${data?.lNameWitness1}`"/>)
                        
                    </div>
                    
                    <div class="text-center text-base ml-56 mt-2 mr-2">(ลงชื่อ)<BlankSpace class="min-w-52" />พยาน</div>
                    <div ></div>
                    
                    <div class="text-center ">
                        (<FiLL class="min-w-52" :data="`${data?.fNameWitness1}  ${data?.lNameWitness1}`"/>)
                        
                    </div>
                    
                    </div>
                  </div><p>ความเห็นของกรรมการกองทุนฯ พิจารณารับเป็นสมาชิก <FiLLBox checked/> อนุมัติ <FiLLBox /> ไม่อนุมัติ</p>
                        <p>อาศัยระเบียบกองทุนสวัสดิการสมาชิกของสหกรณ์ออมทรัพย์สาธารณสุขไทย ข้อ 45 ตามมติที่ประชุมครั้งที่ <FiLL class="min-w-12" :data="`${data?.noMeeting}  `"/> วันที่ <FiLL  class="min-w-32 " :data="data?.dateReceived" date-format="short" /> </p>
                    



                

<p class="text-base pl-60 ">ลงชื่อ.................................................................ประธานกองทุนฯ / หรือผู้ได้รับมอบหมาย</p>
<p class="text-base pl-72 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( <FiLL class="min-w-52" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> )</p>
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 3 -->
            <div class="grid grid-cols-3 grid-rows-2 justify-center h-11"> 
<div class="ml-1 mt-12"><img class="w-[90px] h-auto"
                            src="https://cypphcoop.com/mediafiles/data/sorsortortor.png"
                            alt="Logo" /></div>
<div class="flex flex-col items-center row-span-2 mt-12">
                          <img class="w-[90px] h-auto"
                            src="https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Regular_octagon.svg/langth-1500px-Regular_octagon.svg.png&w=1200&q=50"
                            alt="Logo" />
              </div>
<div class="flex flex-col items-center row-span-2 mt-14">
                            <p class="text-base font-semibold">สสธท.2</p>
              </div>
            </div>
            <br>
              <p class="text-xs text-center"> ตราประทับ<br>สถานพยาบาล<br>ของรัฐ</p>
<br>
                        <p class="text-base font-semibold text-center mt-2">ใบรับรองแพทย์ (ล้านที่ 3)</p>
                        <p class="text-base font-semibold ">ส่วนที่ 1 ของผู้ขอใบรับรองแพทย์สมัครสมาชิก กสธท. ล้านที่ 3</p>
                        <p class="text-base"> <span class="ml-12">ข้าพเจ้า</span> นาย/นาง/นางสาว 
              <FiLL class="min-w-96" :data="`${data?.fName}  ${data?.lName}`"/><br>
              เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-72" />
              ข้าพเจ้ามีประวัติสุขภาพ ดังนี้<br> โรคตามข้อ (3.1) - (3.9) ในส่วนที่ 2 ของแพทย์ <FiLLBox :checked="data?.savings"/> ไม่มี <FiLLBox /> มี (ระบุ)<BlankSpace class="min-w-72" /><br>
          โรคประจำตัวอื่นๆ<BlankSpace class="min-w-80" /><BlankSpace class="min-w-64" /><BlankSpace class="min-w-6" />
         <br> <span class="ml-12">ข้าพเจ้าขอรับรองว่าข้อความข้างต้นเป็นความจริงทุกประการ</span>
        <br>  <span class="ml-12">ลงชื่อ <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/></span>วันที่<FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" />

          </p> 
          <p class="text-base font-semibold ">ส่วนที่ 2 ของแพทย์</p>
          <p class="text-base"> สถานที่ตรวจ <FiLL :data="data?.affiliation" class="min-w-96" />วันที่<FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" />
          <span class="ml-12">ข้าพเจ้า</span>นายแพทย์/แพทย์หญิง  <FiLL class="min-w-96" :data="`${data?.lOwnerCollateral1}  ${data?.lMarryOwnerCollateral1}`"/>
<br> ใบอนุญาติประกอบวิชาชีพเวชกรรม เลขที่ <FiLL :data="data?.newInstallments" class="min-w-96" /><br>
ได้ตรวจร่างกายและสอบประวัติ นาย/นาง/นางสาว <FiLL class="min-w-52" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> แล้ว มีรายละเอียด ดังนี้
<br><span class="ml-12 font-semibold"><FiLLBox :checked="data?.savings"/> (1) </span> ไม่เป็นผู้ผู้มีกายทุพพลภาพ จนไม่สามารถปฏิบัติหน้าที่ได้ 
<br><span class="ml-12 font-semibold"><FiLLBox :checked="data?.savings"/> (2) </span> ไม่มีจิตฟั่นเฟือน ไม่สมประกอบ
<br><span class="ml-16 font-semibold underline underline-offset-1"> (3) ประวัติการรักษาโรคต่อไปนี้ในโรงพยาบาลหรือสถานพยาบาลแห่งนี้</span> 
</p> 
<div class="grid grid-rows-2 grid-flow-col">
                <div class="row-span-3 text-sm">
                  <p class="pl-20" >(3.1) โรคมะเร็ง </p>
                  <p class="pl-20"> (3.2) โรคหัวใจ </p>
                  <p class="pl-20"> (3.3) โรควัณโรค </p>
                  <p class="pl-20"> (3.4) โรคปอดเรื้อรัง </p>
                  <p class="pl-20"> (3.5) โรคเบาหวานขั้นรุนแรง </p>
                  <p class="pl-20"> (3.6) ภาวะไตวาย(ล้างไต) </p>
                  <p class="pl-20"> (3.7) โรคเอดส์ </p>
                  <p class="pl-20"> (3.8) โรคตับแข็ง </p>
                  <p class="pl-20"> (3.9) โรคเอสแอลอี (SLE) </p>
                </div>
                <div class="row-span-2 col-span-2 ml-10 text-sm">
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-56" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-56" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-56" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-56" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-56" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-56" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-56" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-56" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-56" /></p>
                </div>
            </div>
            <p class="ml-16 font-semibold"> (4) โรคร้ายแรงอื่นๆ (ระบุ) <BlankSpace class="min-w-60" /><BlankSpace class="min-w-44" /></p>
            <p class="ml-20 font-semibold"> สรุปความเห็นและข้อแนะนำของแพทย์<BlankSpace class="min-w-60" /><BlankSpace class="min-w-20" /></p> 
              <BlankSpace class="min-w-80" /><BlankSpace class="min-w-80" /><BlankSpace class="min-w-28" />
              <p class="text-base ml-96"> ลงชื่อ<BlankSpace class="min-w-60" /><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( <FiLL class="min-w-56" :data="`${data?.lOwnerCollateral1}  ${data?.lMarryOwnerCollateral1}`"/> ) <br>
</p>
<p class="text-sm pl-96"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;แพทย์ผู้ตรวจร่างกาย</p>
<p class="text-sm "> <span class="font-semibold">หมายเหตุ</span> <span class="ml-4">(1) </span> ต้องเป็นแพทย์แผนปัจจุบันชั้นหนึ่ง จากสถานพยาบาลของรัฐ ตามกฎหมายว่าด้วยสถานพยาบาล
  <br><span class="ml-20">(2) </span> ใบรับรองแพทย์ฉบับนี้ให้ใช้ได้ไม่เกิน 30 วัน นับแต่วันที่ตรวจร่างกาย
  <br><span class="ml-20 font-semibold underline underline-offset-1 ">(3)  หากพบว่าเป็นโรค ตาม ข้อ (3) หรือตามที่คณะกรรมการเห็นว่าอันตราย กสธท. จะไม่รับ
<br><span class="ml-24 font-semibold underline underline-offset-1 ">เป็นสมาชิก</span></span>
  <br><span class="ml-20 font-semibold ">(4)  ให้ผู้สมัครใช้ใบรับรองแพทย์ตามแบบที่ กสธท. กำหนดนี้เท่านั้นเพื่อประกอบการสมัครเป็น
    <br><span class="ml-24 font-semibold ">สมาชิก กสธท. เริ่มใช้ตั้งแต่ </span><span class="underline underline-offset-1 font-semibold">วันที่ 1 เมษายน 2564</span></span> 
  <span class="font-semibold"> เป็นต้นไป</span>
</p>
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 4 -->
            <div class="mr-3">
                        <div class="grid grid-cols-1 grid-rows-2 justify-center h-10">
                        <div class="mt-4"><img class="w-[100px] h-auto"
                            src="https://cypphcoop.com/mediafiles/data/sorsortortor.png"
                            alt="Logo" /></div>

                        <div class=" items-center row-span-2">
                          <div class="text-base text-center mt-6">
                                      <p>-2-</p>
                                      <p class="text-base font-semibold mt-4 ">ถ้อยเเถลงเเละให้การยินยอมของผู้สมัครสมาชิก สสธท.</p>
                                  </div>
                        </div>

                        <div class="flex flex-col items-end row-span-2 mt-12">
                          
                            <p class="mr-6">สสธท.2</p>
                        </div>
                      </div>
                    </div>

            <div class="grid justify-items-start mt-28 text-lg">
            <p><span class="ml-10">เขียนที่</span> <FiLL :data="data?.location" class="min-w-80 text-base" /> วันที่ <FiLL  class="min-w-56 text-base" :data="data?.dateReceived"date-format="full" /></p>
            </div>

            <div class="grid justify-items-start mt-2 text-pretty text-base mx-10 ">
            <p><span class="ml-14">ข้าพเจ้า &nbsp;</span> นาย/นาง/นางสาว
              <FiLL class="min-w-96" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/>
            </p>
            <p>เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-44" /> อายุ <FiLL :data="data?.age" class="min-w-20" /> ปี</p>
            <p><span class="ml-14">ข้าพเจ้า</span>ข้าพเจ้าขอให้ประวัติสุขภาพของข้าพเจ้าเพื่อประกอบการสมัครสมาชิก สสธท. ดังนี้
            </p>
            <p><FiLLBox  :checked="data?.fName"  /> 1. มีสุขภาพแข็งแรง</p>
            <p><FiLLBox  :checked="data?.fName"  /> 2. ไม่เป็นผู้มีกายทุพพลภาพ จนไม่สามารถปฏิบัติหน้าที่ได้</p>
            <p><FiLLBox  :checked="data?.fName"  /> 3. ไม่มีจิตฟันเฟือน ไม่สมประกอบ</p>
            <p><span class="ml-5">4.</span> <span class="underline">ประวัติการรักษาโรคต่อไปนี้</span></p>
            

            <div class="grid grid-rows-2 grid-flow-col">
                <div class="row-span-3">
                  <p class="pl-10" >(4.1) โรคมะเร็ง </p>
                  <p class="pl-10"> (4.2) โรคหัวใจ </p>
                  <p class="pl-10"> (4.3) โรควัณโรค </p>
                  <p class="pl-10"> (4.4) โรคปอดเรื้อรัง </p>
                  <p class="pl-10"> (4.5) โรคเบาหวานขั้นรุนแรง </p>
                  <p class="pl-10"> (4.6) ภาวะไตวาย(ล้างไต) </p>
                  <p class="pl-10"> (4.7) โรคเอดส์ </p>
                  <p class="pl-10"> (4.8) โรคตับแข็ง </p>
                  <p class="pl-10"> (4.9) โรคเอสแอลอี (SLE) </p>
                </div>
                <div class="row-span-2 col-span-2 ml-10">
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-60" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-60" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-60" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-60" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-60" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-60" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-60" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-60" /></p>
                  <p><FiLLBox  :checked="data?.fName"  /> ไม่มี &nbsp;<FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-60" /></p>
                </div>
            </div>
          </div>
            <div>
              <p class="mr-2"><span class="ml-14">5.</span> โรคร้ายแรงอื่น ๆ (ระบุ)<BlankSpace class="min-w-60" /><BlankSpace class="min-w-56" /></p>
             <div class="mt-2 mr-20">
              <p><span class="ml-10 mt-16 text-pretty">ข้าพเจ้าขอยืนยันว่าถ้อยแถลงที่ให้ไว้เป็นความจริงทุกประการ</span> <span class="underline">หากข้าพเจ้าแถลงข้อความอันเป็นเท็จแล้ว
                  ให้ สสธท. ตัดสิทธิ์จากการเป็นสมาชิก สสธท. ตามข้อบังคับสมาคม พ.ศ. 2564 ข้อ 15(4) ได้ทันที 
                  และข้าพเจ้าตลอดทั้งทายาทหรือผู้รับเงินสงเคราะห์ของข้าพเจ้าจะไม่ขอรับสิทธิ์และใช้สิทธิ์ใด ๆ และขอสละสิทธิ์ในการที่จะ
                  รับเงินสงเคราะห์ครอบครัวเมื่อข้าพเจ้าเสียชีวิต รวมทั้ง ข้าพเจ้าไม่ติดใจที่จะเรียกร้องเงินสงเคราะห์หรือเงินอื่นใดจาก สสธท. ทั้งสิ้น</span>โดยข้าพเจ้ายินยอมปฏิบัติตามข้อบังคับสมาคมทุกประการ
            </p>
            <p class="mt-4"><span class="ml-10 ">ข้าพเจ้า</span>ยินยอมเปิดเผยประวัติสุขภาพของข้าพเจ้า&nbsp; โดยมอบให้&nbsp; สสธท.&nbsp; ขอประวัติการรักษาของข้าพเจ้า
              จากสถานพยาบาลที่เกี่ยวข้องได้
            </p>
             </div>

             <div class="grid grid-cols-1 text-center ">
            <div></div>
            <div></div>
            <div ></div>
            <div></div>
            <div ></div>
            <div ></div>
            <div ></div>
            <div ><br></div>
            <div ></div>
            <div class="text-center text-base mr-4">ลงชื่อ<BlankSpace class="min-w-56" /></div>
            <div ></div>
            <div class="text-center mt-2">
              (<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/>)
              <p class="text-center text-base mt-2">
                (ผู้สมัครสมาชิก สสธท.)
              </p>
            </div>
            </div>

            <div class="grid grid-rows-2 grid-flow-col mt-6">
                <div class="row-span-3">
                  <div ></div>
            <div class="text-start text-base mr-4">ลงชื่อ<BlankSpace class="min-w-56" /></div>
            <div ></div>
            <div class="text-start ml-8 mt-2">
              (<FiLL class="min-w-52" :data="`${data?.officerFName}  ${data?.officerLName}`"/>)
              <p class="text-start text-base mt-2 ml-1">
                พยาน/เจ้าหน้าที่ศูนย์ประสานงาน
              </p>
            </div>
                </div>
                <div class="row-span-2 col-span-2  ">
                  <div ></div>
            <div class="text-center text-base mr-4">ลงชื่อ<BlankSpace class="min-w-56" /></div>
            <div ></div>
            <div class="text-center mt-2 ">
              (<FiLL class="min-w-52" :data="`${data?.fNameWitness1}  ${data?.lNameWitness1}`"/>)
              <p class="text-center text-base mt-2">
                พยาน/ผู้มีชื่อรับเงินสงเคราะห์
              </p>
            </div>
                </div>
            </div>
              

            
 
            
            </div>
        </MorePaperDoc>
    </main>
</template>

<script setup lang="ts">
import BlankSpace from '~/components/BlankSpace.vue';
import MoneyText from '~/components/MoneyText.vue';

    const { data } = await useFetch<any>('/api/group2');
</script>