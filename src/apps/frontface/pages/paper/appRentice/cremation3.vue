<template>
    <main class="font-sans">
      <MorePaperDoc>  <!-- กู้สามัญทั่วไป general1  -->

                        <br><br> 
            <div class="border-2 border-slate-950">
              <p class="underline underline-offset-1 text-lg font-semibold text-center "> ขั้นตอนการสมัครสมาชิก สส.ชสอ. ประเภทสามัญ</p>
              <p class="underline underline-offset-1 text-lg font-semibold text-center "> ผู้สมัครต้องเป็นสมาชิกสหกรณ์มาแล้วไม่น้อยกว่า 1 ปี (เริ่มใช้มกราคม 2566 เป็นต้นไป)</p>
              <p class="text-base">1.กรอกใบสมัครให้เรียบร้อย (ด้วยลายมือที่อ่านง่ายและชัดเจน)</p>
              <p class="text-base">2.ขอใบรับรองแพทย์จากโรงพยาบาลของรัฐ (ใช้แบบฟอร์มของ รพ.รัฐ เท่านั้น)</p>
              <p class="text-base">3.เตรียมเอกสารประกอบการสมัคร ดังนี้</p>
              <p class="text-base ml-8">3.1 สำเนาบัตรประชาชนผู้สมัครและผู้รับผลประโยชน์ อย่างละ 1 ฉบับ</p>
              <p class="text-base ml-8">3.2 สำเนาทะเบียนบ้านผู้สมัครและผู้รับผลประโยชน์ อย่างละ 1 ฉบับ</p>
              <p class="text-base ml-8">3.3 สำเนาทะเบียนสมรส หรือสำเนาทะเบียนหย่า ของผู้สมัคร (ถ้ามี) จำนวน 1 ฉบับ</p>
              <p class="text-base ml-8">3.4 สำเนาใบเปลี่ยนชื่อ / สกุล ของผู้สมัครและผู้รับผลประโยชน์ (ถ้ามี) อย่างละ 1 ฉบับ</p>
              <p class="text-base">4.ผู้รับผลประโยชน์ต้องลงชื่อในส่วนผู้รับผลประโยชน์ และ แบบคำรับรองสุขภาพตนเอง</p>
              <p class="text-base">5.ผู้สมัครต้องมาสมัครด้วยตนเอง เพื่อถ่ายรูปเต็มตัว ณ วันสมัคร แนบเป็นหลักฐาน</p>
              <p class="text-base">6.ชำระค่าสมัครและเงินสงเคราะห์ล่วงหน้า ด้วยการโอนเข้าบัญชีธนาคารของสหกรณ์ฯ
                <br> จำนวน 4,840 .- บาท
              </p>
              <p class="underline underline-offset-1 text-base font-semibold  "> หมายเหตุ เพื่อความสะดวกรวดเร็ว รบกวนแจ้งเจ้าหน้าที่เพื่อนัดวัน เวลา ในการสมัคร</p>
              <p class="text-base mt-1">โทร.0943934878 สุภานัน</p>


            </div>

        </MorePaperDoc>
        <MorePaperDoc>  <!-- กู้สามัญทั่วไป general2  -->

                        <div class="grid grid-cols-3 grid-rows-2 justify-center h-10">
              <div class="items-start ">
                <div class="border-2 border-black p-1 ">
                  <p class="text-xs font-semibold tracking-tighter">โปรดเขียนตัวบรรจงและกรอกข้อมูลให้ครบทุกช่อง
                  </p>
                </div>
                <div class="border-2 border-black p-1 ">

                  <p class=" text-xs font-semibold">เอกสารประกอบ
                   <p class="text-xs font-semibold" > <FiLLBox  :checked="data?.fName"  /> 1. สำเนาบัตรประชาชน หรือบัตรข้าราชการผู้สมัคร</p>
                   <p class="text-xs font-semibold" > <FiLLBox  :checked="data?.fName"  /> 2. สำเนาทะเบียนบ้านผู้สมัคร</p>
                   <p class="text-xs font-semibold" > <FiLLBox  :checked="data?.fName"  /> 3. ใบรับรองเเพทย์ของรัฐฉบับจริง มีอายุไม่เกิน 30 วัน</p>
                   <p class="text-xs font-semibold" > <FiLLBox  :checked="data?.fName"  /> 4. ใบรับรองสุขภาพตนเอง</p>
                   <p class="text-xs font-semibold" > <FiLLBox  :checked="data?.fName"  /> 5. สำเนาบัตรปรชาชน เเละทะเบียนบ้านผู้รับเงินสังเคราะห์</p>
                   <p class="text-xs font-semibold" > <FiLLBox  :checked="data?.fName"  /> 6. รูปถ่าย ณ วันยื่นเอกสาร</p>
                   <p class="text-xs font-semibold" > <FiLLBox  :checked="data?.fName"  /> 7. หนังสือรับรองการเป็นสมาชิกประเภทสามัญของ สอ.</p>
                   <p class="text-xs font-semibold" > <FiLLBox  :checked="data?.fName"  /> 8. สำเนาทะเบียนสมรส (ถ้ามี)</p>
                   <p class="text-xs font-semibold" > <FiLLBox  :checked="data?.fName"  /> 9. ใบสำคัญการเปลี่ยนชื่อ-นามสกุล (ถ้ามี)</p>



                  </p>
                </div>

             
                </div>

              <div class="flex flex-col items-center row-span-2 mt-40">
                          <img class="w-[100px] h-auto"
                            src="https://cypphcoop.com/mediafiles/data/sorsortortor.png"
                            alt="Logo" />
                            
              </div>

              <div class="items-start  mr-14">
                <p class="text-end mr-2  font-semibold">สส.ชสอ. ส.1/1 (สามัญ)</p>
                <div class="border-2 border-black p-1 mt-1">
                  <p class="text-xs font-semibold tracking-tighter text-center">สมัครผ่าน
                  </p>
                </div>
                <div class="border-2 border-black p-1 ">
                <p class="text-xs font-semibold" > <FiLLBox  :checked="data?.fName"  /> ศูนย์ประสารงาน</p>
                <p class="text-xs font-semibold" > <FiLLBox /> ศูนย์ประสารงานระดับจังหวัด</p>

                </div>

                <div class="border-2 border-black p-1 mt-1">
                  <p class="text-xs font-semibold tracking-tighter text-center">สำหรับเจ้าหน้าที่สมาคม
                  </p>
                </div>
                <div class="border-2 border-black p-1 ">
                <p class="text-xs font-semibold" >เลขฌาปนกิจ</p>
                <p class="text-xs font-semibold" >รอบสมัคร</p>

                </div>
                </div>

            </div>
            <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>
      <p class="text-lg text-center font-semibold mt-6 "> ใบสมัครสมาชิก <span class="underline underline-offset-2">ประเภทสามัญ</span><br>
      </p>
      <p class="text-base text-center font-semibold ">สมาคมฌาปนกิจสงเคราะห์สหกรณ์สมาชิกของชุมนุมสหกรณ์ออมทรัพย์แห่งประเทศไทย (สส.ชสอ.)</p>
      <div class="mt-2 mr-14">
      <p class="text-base text-end"> เขียนที่ <FiLL :data="data?.location" class="min-w-80" /></p>
       <p class="text-base text-end "> วันที่ <FiLL  class="min-w-80 " :data="data?.dateReceived" date-format="full" /></p>
       <p  class="text-base text-start font-semibold">(1) <span class="underline underline-offset-2">ข้อมูลสมาชิก</span> :</p>
     <p class="text-base mt-1 "> ข้าพเจ้า (นางสาว/นาง/นาย) 
              <FiLL class="min-w-60" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> วัน/เดือน/ปี/ เกิด <FiLL  class="min-w-40 " :data="data?.dateReceived" date-format="full" />
            อายุ <FiLL :data="data?.age" class="min-w-20" /> ปี เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-60" /> เพศ <FiLLBox  :checked="data?.fName"  /> ชาย <FiLLBox /> หญิง
          </p> 
          <p>สถานภาพ <FiLLBox /> โสด <FiLLBox  :checked="data?.fName"  /> สมรส คู่สมรสชื่อ <FiLL class="min-w-96" :data="`${data?.newprefix} ${data?.newfName}  ${data?.lName}`"/> <FiLLBox /> หย่า หรือ หม้าย
            เป็นสมาชิกสามัญของสหกรณ์ออมทรัพย์ <FiLL :data="data?.savings" class="min-w-52" /> เลขทะเบียนสมาชิก <FiLL :data="data?.member" class="min-w-20" /> โทรศัพท์มือถือ <FiLL :data="data?.nbPhon" class="min-w-36" />
            โทรศัพท์บ้าน <FiLL :data="data?.nbPhon" class="min-w-32" /> โทรศัพท์ที่ทำงาน <FiLL :data="data?.nbPhon" class="min-w-32" /> Email <FiLL :data="data?.email" class="min-w-36" />
          </p>
          <p  class="text-base text-start font-semibold">(2) <span class="underline underline-offset-2">กลุ่มวิชาชีพของศูนย์ประสานงานต้นสังกัด</span> :</p>
          <p class="ml-6"><FiLLBox /> ครู <FiLLBox /> สาธารณสุข <FiLLBox /> ทหาร <FiLLBox /> ตำรวจ <FiLLBox /> ราชการ <FiLLBox  :checked="data?.fName"  /> รัฐวิสาหกิจ <FiLLBox /> ประกอบการ </p> 
          <p class="mt-1">สังกัด <FiLL :data="data?.affiliation" class="min-w-52" /> หน่วยงาน <FiLL :data="data?.agency" class="min-w-52" /> ดำรงตำเเหน่ง <FiLL :data="data?.position" class="min-w-24" /></p>

          <p  class="text-base text-start font-semibold">(3) <span class="underline underline-offset-2"> ที่อยู่ตามทะเบียนบ้าน </span> :</p>
          <p class="mt-1">บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-24" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-20" /> ซอย <FiLL :data="data?.group" class="min-w-20" /> ถนน <FiLL :data="data?.road" class="min-w-24" />
            ตำบล/แขวง <FiLL :data="data?.district" class="min-w-24" /> อำเภอ/เขต <FiLL :data="data?.district" class="min-w-24" /> จังหวัด <FiLL :data="data?.province" class="min-w-28" /> รหัสไปรษณีย์ <FiLL :data="data?.zipcode" class="min-w-24" />
          </p>
          <p  class="text-base text-start font-semibold">(4) <span class="underline underline-offset-2"> ที่อยู่ปัจจุบันที่สามารถติดต่อได้  </span> :</p>
          <p class="mt-1">บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-24" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-20" /> ซอย <FiLL :data="data?.group" class="min-w-20" /> ถนน <FiLL :data="data?.road" class="min-w-24" />
            ตำบล/แขวง <FiLL :data="data?.district" class="min-w-24" /> อำเภอ/เขต <FiLL :data="data?.district" class="min-w-24" /> จังหวัด <FiLL :data="data?.province" class="min-w-28" /> รหัสไปรษณีย์ <FiLL :data="data?.zipcode" class="min-w-24" />
          </p>
          <p  class="text-base text-start font-semibold">(5) <span class="underline underline-offset-2"> การชำระเงิน  </span> :</p>
          <p ><span class="ml-14"> (5.1) การชำระเงินค่าสมัครสมาชิกครั้งแรก จำนวน 4,840 บาท ดังนี้ </span></p>
          <p class="ml-24"><FiLLBox  :checked="data?.fName"  /> ชำระเป็นเงินสด <span class="ml-28"> <FiLLBox /> ชำระจากการเพิ่มเงินในการกู้สามัญ/กู้ฉุกเฉิน </span> </p>
          <p ><span class="ml-14"> (5.2) การชำระเงินสงเคราะห์ล่วงหน้ารายปีครั้งต่อไป โดยให้สหกรณ์หัก ดังนี้ </span></p>
          <p class="ml-24"><FiLLBox /> ชำระเป็นรายเดือน (12 งวด) <span class="ml-9"> <FiLLBox /> ชำระจากเงินปันผล,เฉลี่ยคืน </span> </p>
          <p class="ml-24"><FiLLBox /> ชำระเป็นราย 3 เดือน (4 งวด) <span class="ml-7"> <FiLLBox /> ชำระจากการเพิ่มเงินในการกู้สามัญ/กู้ฉุกเฉิน </span> </p>
          <p class="ml-24"><FiLLBox  :checked="data?.fName"  /> ชำระเป็นราย 6 เดือน (2 งวด) <span class="ml-7"> <FiLLBox /> ชำระจากการเก็บเงินล่วงหน้า จากเงินกู้สามัญ </span> </p>
          <p class="ml-24"><FiLLBox /> ชำระจากบัญชีโครงการฝากเพื่อสวัสดิการ/เงินฝากในสหกรณ์สมาชิก  </p>
          <p class="mt-2 text-base text-start font-semibold"><span class="ml-14"> ** ข้าพเจ้า </span>ได้รับทราบ และเข้าใจวัตถุประสงค์ของข้อบังคับ สมาคมณาปนกิจสงเคราะห์สหกรณ์สมาชิกของชุมนุมสหกรณ์
            ออมทรัพย์แห่งประเทศไทยแล้ว มีความประสงค์สมัครเป็นสมาชิก และยินยอมปฏิบัติตามข้อบังคับ และเงื่อนไขดังกล่าวทุกประการ **</p>
          
 
          <p class="text-base text-end mr-7 ">ลงชื่อ<BlankSpace class="min-w-52" />ผู้สมัคร </p>
          <p class="text-base text-end mr-16 ">( <FiLL class="min-w-52" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> )</p>
          </div>

        </MorePaperDoc>
      <MorePaperDoc>  <!-- กู้สามัญทั่วไป general3  -->
                      
        <div class="grid justify-items-start font-bold  ml-48">
          <p class="pl-96">สส.ชสอ. ส.1/2(สามัญ)</p>
        </div>

        <div class=" grid justify-items-center mt-6">
            <p class="  font-bold text-xl">สำหรับเจ้าหน้าที่ศูนย์ประสานงาน</p>
        </div>
        <div class="grid justify-items-start text-pretty text-base mt-1">
          <p><span class="ml-11">ตรวจสอบแล้วขอรับรองว่า </span>
            นาย/นาง/นางสาว <FiLL class="min-w-52" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> เป็นผู้มีคุณสมบัติ
            ในการสมัครสมาชิก สส.ชสอ. รวมทั้งได้แบบเอกสารหลักฐานประกอบการสมัคร และชำระเงินค่าสมัคร เงินบำรุง และ
            เงินค่าสงเคราะห์ล่วงหน้าครบถ้วน ตามข้อบังคับ ระเบียบ และประกาศ สส.ชสอ. เรื่อง การรับสมัครสมาชิก สส.ชสอ. หรือ
            การเปิดรับสมัครเป็นกรณีพิเศษ แล้วแต่กรณี
          </p>
        </div>
  
        <div class="grid justify-items-center">
        <p class="pl-72">ลงชื่อ<BlankSpace class="min-w-52" /></p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.lNameCommander}  ${data?.lNameSecretary}`"/> ) 
        </div><br>
        <p class="pl-72">ตำเเหน่ง <FiLL :data="data?.positionCommander" class="min-w-28" /></p>
 </div>
 <div class=" grid justify-items-center mt-2">
            <p class="mt-2  font-bold text-xl">สำหรับคณะกรรมการศูนย์ประสานงาน</p>
        </div>  
        <div class="grid justify-items-start  mt-2">
          <p>เรียน <span class=" ml-2"> นายก สส.ชสอ.</span></p>
          <p><span class="ml-11">ตรวจสอบแล้วขอรับรองว่า สมาชิกมีคุณสมบัติครบถูกต้อง </span></p>
          <p><span class="ml-11"><FiLLBox  :checked="data?.fName"  /> เห็นควรรับเป็นสมาชิก สส.ชสอ. </span></p>
          <p><span class="ml-11"><FiLLBox /> ไม่ควรรับเป็นสมาชิก สส.ชสอ. เนื่องจาก<BlankSpace class="min-w-96" /><BlankSpace class="min-w-6" /></span></p>
        </div>
        <div class="grid grid-cols-3 grid-rows-2 justify-center h-1 ml-14">
          <div class="items-start mt-4">
                <div class="border-2 border-black p-2">
                  <p class="text-sm font-bold ">ผู้มีอำนาจเสนอ (แล้วแต่กรณี)
                  </p>
                  <p class="text-sm"><FiLLBox /> เหรัญยิก/เลขานุการ ศุนย์ฯ </p>            
                  <p class="text-sm "><FiLLBox /> อุปนายก ศูนย์ฯ </p>
                  <p class="text-sm "><FiLLBox :checked="data?.fName" /> ประธาน ศูนย์ฯ </p>
                </div>
                </div>
                </div>
        <div class="grid justify-items-center mt-4">
        <p class="pl-72">ลงชื่อ<BlankSpace class="min-w-52" /></p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fNameWitness2}  ${data?.lNameWitness1}`"/> ) 
        </div><br>
        <p class="pl-72">ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /></p>
 </div>
 <br> 

        <div class="border-solid border-2 border-slate-950 "></div>
        <div class=" grid justify-items-center mt-4">
            <p class=" font-bold text-xl">สำหรับเจ้าหน้าที่ สส.ชสอ.</p>
        </div>
        <div class="grid justify-items-start text-pretty text-base mt-2">
          <p><span class="ml-11">ตรวจสอบแล้วขอรับรองว่า </span>
            ผู้สมัครเป็นผู้มีคุณสมบัติ ในการสมัครสมาชิก สส.ชสอ.และได้แนบหลักฐานประกอบการ
            สมัครครบถ้วน พร้อมทั้งชำระค่าสมัคร เงินบำรุง และเงินค่าสงเคราะห์ล่วงหน้าครบถ้วน ตามข้อบังคับ ระเบียบ และประกาศ
             สส.ชสอ. เรื่อง การรับสมัครสมาชิก สส.ชสอ. หรือการเปิดรับสมัครเป็นกรณีพิเศษ แล้วแต่กรณี
          </p>
        </div>
        <div class="grid justify-items-center mt-8">
        <p class="pl-72">ลงชื่อ<BlankSpace class="min-w-52" /></p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fNameGuarantor1}  ${data?.lNameGuarantor1}`"/> ) 
        </div><br>
        <p class="pl-72">ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /></p>
 </div>
 <div class=" grid justify-items-center mt-6">
            <p class="  font-bold text-xl">สำหรับคณะกรรมการ สส.ชสอ.</p>
        </div>
        <div class="grid justify-items-start  mt-4">
          <p class=" font-semibold ">คำสั่ง <FiLLBox  :checked="data?.fName"  /> <span class="font-normal">อนุมัติรับเข้าเป็นสมาชิกตั้งแต่วันที่ <FiLL :data="data?.dateReceived" date-format="full" class="min-w-60"/></span></p>
          <p><span class="ml-11">(คณะกรรมการ <FiLL :data="data?.agency" class="min-w-44" /> คราวประชุมครั้งที่ <FiLL :data="data?.paidInstallments" class="min-w-14" /> เมื่อวันที่ <FiLL :data="data?.dateReceived" date-format="full" class="min-w-40"/> ) </span></p>
          <p><span class="ml-11"><FiLLBox /> ไม่อนุมัติ เนื่องจาก<BlankSpace class="min-w-96" /><BlankSpace class="min-w-8" /></span></p>
        </div>
        <div class="grid grid-cols-3 grid-rows-2 justify-center h-1 ml-14">
          <div class="items-start mt-4">
                <div class="border-2 border-black p-2">
                  <p class="text-sm font-bold ">ผู้มีอำนาจเสนอ (แล้วแต่กรณี)
                  </p>
                  <p class="text-sm"><FiLLBox /> กรรมการ สส.ชสอ. </p>            
                  <p class="text-sm "><FiLLBox /> อุปนายก สส.ชสอ. </p>
                  <p class="text-sm "><FiLLBox :checked="data?.fName" /> นายก สส.ชสอ. </p>
                </div>
                </div>
                </div>
        <div class="grid justify-items-center mt-4">
        <p class="pl-72">ลงชื่อ<BlankSpace class="min-w-52" /></p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fNameGuarantor2}  ${data?.lNameGuarantor2}`"/> ) 
        </div><br>
        <p class="pl-72">ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /></p>
 </div>
 <br> 
 
      </MorePaperDoc>
      <MorePaperDoc>  <!-- กู้สามัญทั่วไป general4  -->

                        <div class="flex flex-col items-end row-span-2">
                <p class="font-bold mb-2">สส.ชสอ. ส.2/1 (สามัญ)</p>
                </div>
              <div class="flex flex-col items-center row-span-2">
                <img class="w-[100px] h-auto"
                  src="https://cypphcoop.com/mediafiles/data/sorsortortor.png"
                  alt="Logo" />
                  <p class="mt-2 font-bold text-base">หนังสือให้ความยินยอมในการหักเงิน และแสดงเจตนาการรับเงินสงเคราะห์</p>
                  <p class="mt-2 font-bold text-base">สมาคมฌาปนกิจสงเคราะห์สหกรณ์สมาชิกของชุมนุมสหกรณ์ออมทรัพย์แห่งประเทศไทย (สส.ชสอ.)</p>
              </div>
              <div class="grid justify-items mt-8">
<p class=" text-base text-end">เขียนที่ <FiLL :data="data?.location" class="min-w-80" /> &nbsp;</p>
<p class=" text-base text-end" >วันที่ <FiLL  class="min-w-80 " :data="data?.dateReceived" date-format="full" /> </p><br>
            </div>
            <div class="grid justify-items-start text-pretty text-base  ">
            <p><span class="ml-20">1. ข้าพเจ้า</span>
               <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/> อายุ <FiLL :data="data?.age" class="min-w-20" /> ปี เกิดวันที่ <FiLL  class="min-w-40 " :data="data?.dateReceived" date-format="full" />
              สมาชิกสหกรณ์ออมทรัพย์ <FiLL :data="data?.savings" class="min-w-52" /> เลขทะเบียนสมาชิก<FiLL :data="data?.member" class="min-w-20" />
              ปัจจุบันอยู่บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-24" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-24" /> ถนน <FiLL :data="data?.road" class="min-w-24" /> ตำบล <FiLL :data="data?.district" class="min-w-24" />
          อำเภอ <FiLL :data="data?.district" class="min-w-24" /> จังหวัด <FiLL :data="data?.province" class="min-w-24" /> รหัสไปรษณีย์ <FiLL :data="data?.zipcode" class="min-w-24" /> เบอร์โทรศัพท์  <FiLL :data="data?.nbPhon" class="min-w-32" />
              ทำงานประจำในตำแหน่ง<FiLL :data="data?.position" class="min-w-24" /> สถานที่ทำงานง<FiLL :data="data?.location" class="min-w-24" /> ตำบล/แขวง <FiLL :data="data?.district" class="min-w-24" />
          อำเภอ/เขต <FiLL :data="data?.district" class="min-w-24" /> จังหวัด <FiLL :data="data?.province" class="min-w-24" /> รหัสไปรษณีย์ <FiLL :data="data?.zipcode" class="min-w-24" /> โทรศัพท์ที่ทำงาน <FiLL :data="data?.nbPhon" class="min-w-32" />
            </p>
            <p> <span class="ml-20"></span>2. หากข้าพเจ้าถึงแก่ความตาย ข้าพเจ้าขอมอบสิทธิให้<FiLL class="min-w-60" :data="`${data?.newfName}  ${data?.lName}`"/> 
              เลขประจำตัวประชาชน<FiLL :data="data?.idcard" class="min-w-24" /> เกี่ยวข้องเป็น<FiLL :data="data?.newStatus" class="min-w-24" /> เป็นผู้จัดการศพของข้าพเจ้า
      </p>
      <p> <span class="ml-20"></span>3. ข้าพเจ้าขอแสดงเจตนารับการเงินสงเคราะห์ที่ สส.ขสอ. พึงจ่าย หลังจากจ่ายค่าจัดงานศพให้บุคคลที่ระบุไว้และ
        ยินยอมให้สหกรณ์ออมทรัพย์ฯ<FiLL :data="data?.affiliation" class="min-w-24" />จำกัด หักเงินชำระหนี้ให้เสร็จสิ้น
        เท่ากับจำนวนหนี้สินที่ข้าพเจ้าผูกพันอยู่ในขณะนั้นเป็นอันดับแรก (ถ้ามี) ส่วนที่เหลือขอมอบให้บุคคลดังต่อไปนี้
      </p>
            </div>
<div class="flex flex-col ml-10 text-start "no-line>
        <LineFiLL :data="data?.repaymentPlan"
          :limit="5">
          <template #data="{ index, item }">
            <p class=" text-base pl-8"></p>
            <p class="text-start text-base"><span class="ml-20">3 </span>
              <FiLL :data="index"
                number
                normal no-line/>.
                ชื่อ <FiLL class="min-w-72" :data="`${item.fn}  ${item.ln}`" />   เลขประจำตัวประชาชน<FiLL :data="item.idCards" class="min-w-32" /><br>
            ตำแหน่ง<FiLL :data="item.usPosition" class="min-w-80" /><br>
             เบอร์โทรศัพท์<FiLL :data="item.nbPhone" class="min-w-72" />เกี่ยวข้องเป็น<FiLL :data="item.status" class="min-w-48" />
            </p>
          </template>
          <template #default="{ index }">
            <p class="text-start text-base"><span class="ml-20">3 </span>
              <FiLL :data="index"
                number
                normal no-line/>.
                ชื่อ 
              ................................................................................. เลขประจำตัวประชาชน....................................<br>
            ตำแหน่ง........................................................................................<br>
             เบอร์โทรศัพท์.......................................................................................เกี่ยวข้องเป็น.....................................................
            </p>

          </template>
        </LineFiLL>
        </div>
        <p> <span class="ml-20 font-bold">อนึ่งข้าพเจ้าขอรับรองว่า การแสดงเจตาครั้งนี้เป็นไปด้วยความสมุครใจ ไม่มีผู้ใดบังคับ ข่มขู่ หรือกระทำการ
              ใดๆ ให้ข้าพเจ้าแสดงเจตนาดังกล่าว จึงได้ลงมือไว้เป็นสำคัญ ท้ายหนังสือนี้</span></p>
              <p class="mt-2">(ลงชื่อ)<BlankSpace class="min-w-52" />ผู้ให้คำยินยอม
                <span class="ml-4"> (ลงชื่อ)<BlankSpace class="min-w-52" />พยาน </span></p>
              <p class="mt-2">(ลงชื่อ)<BlankSpace class="min-w-52" />ผู้จัดการ/จนท.ศูนย์ฯ
                <p class="mt-2">(ลงชื่อ)<BlankSpace class="min-w-52" />ประทาน/รองประธาน/กรรมการ ศูนย์ฯ
                </p>
              </p>
              <br>
            </MorePaperDoc>


            <MorePaperDoc>    <!-- กู้สามัญทั่วไป general5  -->

              <div class="flex flex-col items-end row-span-2">
                <p class="font-bold mb-2">สส.ชสอ. ส.2/2 (สามัญ)</p>
                </div>
                <p> <span class="underline font-bold">ลงลายมือชื่อผู้รับเงินสงเคราะห์ไว้เป็นหลักฐานการยินยอมให้หักเงินเพื่อชำระหนี้</span></p>
            <div class="grid justify-items-start text-pretty text-base mt-2 ">
            <p><span class=" ml-20">1. ผู้รับเงินสงเคราะห์และหรือผู้จัดการศพ</span>
              ซึ่งต้องเป็นบุคคล (ตามข้อบังคับ สมาคมหมวด 7 ข้อ23 และประกาศกระทรวงพัฒนาสังคมฯ เรื่องวิธีจ่ายเงินค่าจัดการศพและสงเคราะห์ครอบครัวฯ ข้อ3) ดังต่อไปนนี้
            </p>
            <p class="mt-2"> <span class="ml-32 mt-"></span>1.1 สามี ภรรยา บัตร บิดา มารดา 
              <span class="ml-20"> 1.4 ปู่ ย่า ตา ยาย</span></p>
              <p class="mt-2"> <span class="ml-32 "></span>1.2 พี่น้องร่วมบิดามารดาเดียวกัน 
              <span class="ml-20"> 1.5 ลุง ป้า น้า อา</span></p>
              <p class="mt-2"> <span class="ml-32"></span> 1.3 พี่น้องร่วมบิดาหรือมารดาเดียวกัน 
              <span class="ml-14"> 1.6 ผู้อุปการะเลี้ยงดูหรือผู้อยู่ในอุปการะเลี้ยงดู</span></p>
              <p class="mt-2"> <span class="ml-32 "></span>ถ้าไม่มีบุคคลที่สมัครสมาชิกระบุไว้ในใบสมัคร ให้สมาคมฯ แบ่งแบ่งจ่าเงินดังกล่าวให้แก่บุคลลใน ข้อ 1 ตามลำดับ
                ก่อนหลัง ถ้ามีอยู่ในลำดับเดียวกันหลายคน ให้สมาคมฯ แบ่งเงินค่าจัดการศพหรือค่าจัดการศพและสงเคราะห์ครอบครัว
                ที่เหลืออยู่ให้แก่ทุกคนในสัดส่วนที่เท่ากัน หากไม่อาจแบ่งเงินให้แก่บุคคลใดได้ให้เงินนั้นตกเป็นของแผ่นดิน
              </p>
              <p class="font-semibold mt-2"><span class="ml-20 ">2. ผู้รับเงินสงเคราะห์</span>
                <span class="font-normal ">
                  ยินยอมให้สหกรณ์ออมทรัพย์ฯต้นสังกัดหักเงินเพื่อชำระหนี้ดังกล่าวจนเสร็จสิ้นก่อนโดย
                ขอรับเฉพาะส่วนที่เหลือจึงได้ลงลายมือชื่อไว้เป็นหลักฐาน
              </span></p>
            </div>
            <div class="grid grid-cols-2 mt-4">
 
 <div class="border-solid border-2 border-slate-950 ">
<p>
  <div class="pl-14 text-base mt-4">2.1 ลงชื่อ<BlankSpace class="min-w-52" /></div>
  <div ></div>
  <div class="text-center pl-12">
    (<FiLL class="min-w-60" :data="`${data?.newfName}  ${data?.lName}`"/>)<br>
</div>
<div ></div>
<div class="pl-14 text-base mt-4">เกี่ยวข้องเป็น<FiLL :data="data?.newStatus" class="min-w-44" /></div>
</p>

 </div>
 <div class="border-solid border-2 border-slate-950 ">
  <p>
  <div class="pl-14 text-base mt-4">2.2 ลงชื่อ<BlankSpace class="min-w-52" /></div>
  <div ></div>
  <div class="text-center pl-12">
    (<BlankSpace class="min-w-52" />)<br>
</div>
<div ></div>
<div class="pl-14 text-base mt-4">เกี่ยวข้องเป็น<BlankSpace class="min-w-44" /></div>
</p>
<br>

</div>
</div>
<div class="grid grid-cols-2 ">
 
 <div class="border-solid border-2 border-slate-950 ">
<p>
  <div class="pl-14 text-base mt-4">2.3 ลงชื่อ<BlankSpace class="min-w-52" /></div>
  <div ></div>
  <div class="text-center pl-12">
    (<BlankSpace class="min-w-52" />)<br>
</div>
<div ></div>
<div class="pl-14 text-base mt-4">เกี่ยวข้องเป็น.<BlankSpace class="min-w-44" /></div>
</p>

 </div>
 <div class="border-solid border-2 border-slate-950 ">
  <p>
  <div class="pl-14 text-base mt-4">2.4 ลงชื่อ<BlankSpace class="min-w-52" /></div>
  <div ></div>
  <div class="text-center pl-12">
    (<BlankSpace class="min-w-52" />)<br>
</div>
<div ></div>
<div class="pl-14 text-base mt-4">เกี่ยวข้องเป็น<BlankSpace class="min-w-44" /></div>
</p>
<br>

</div>
</div>
<div class="grid grid-cols-2 ">
 
 <div class="border-solid border-2 border-slate-950 ">
<p>
  <div class="pl-14 text-base mt-4">2.5 ลงชื่อ<BlankSpace class="min-w-52" /></div>
  <div ></div>
  <div class="text-center pl-12">
    (<BlankSpace class="min-w-52" />)<br>
</div>
<div ></div>
<div class="pl-14 text-base mt-4">เกี่ยวข้องเป็น<BlankSpace class="min-w-44" /></div>
</p>

 </div>
 <div class="border-solid border-2 border-slate-950 ">
  <p>
  <div class="pl-14 text-base mt-4">2.6 ลงชื่อ<BlankSpace class="min-w-52" /></div>
  <div ></div>
  <div class="text-center pl-12">
    (<BlankSpace class="min-w-52" />)<br>
</div>
<div ></div>
<div class="pl-14 text-base mt-4">เกี่ยวข้องเป็น<BlankSpace class="min-w-44" /></div>
</p>
<br>

</div>
</div>
<div class="grid justify-items-center mt-16">
        <p class="pl-72">ลงชื่อ<BlankSpace class="min-w-56" /></p>
        <div class="pl-80">
   (<FiLL class="min-w-60" :data="`${data?.newfName}  ${data?.lName}`"/> ) 
        </div>
        <div ></div>
        <p class="pl-72">ณ วันที่<FiLL  class="min-w-80 " :data="data?.dateReceived" date-format="full" /></p>
 </div>
              <br>
            </MorePaperDoc>



            <MorePaperDoc>  <!-- กู้สามัญทั่วไป general6  -->
              

              <div class="flex flex-col items-end row-span-2">
                <p class="font-bold mb-2">สส.ชสอ. ส.5</p>
                <p class=" mb-2">(30 ก.ย 63)</p>
                </div>
              <div class="flex flex-col items-center row-span-2">
                <img class="w-[120px] h-auto"
                  src="https://cypphcoop.com/mediafiles/data/sorsortortor.png"
                  alt="Logo" />
                  </div>
      <p class="text-lg text-center font-semibold  "> ใบคำรับรองสุขภาพตนเอง<br>
      </p>
      <p class="text-base text-center font-semibold ">สมาคมฌาปนกิจสงเคราะห์สหกรณ์สมาชิกของชุมนุมสหกรณ์ออมทรัพย์แห่งประเทศไทย (สส.ชสอ.)</p>
      <div class="mt-2 mr-14">
      <p class="text-base text-end"> เขียนที่ <FiLL :data="data?.location" class="min-w-80" /></p>
       <p class="text-base text-end "> วันที่ <FiLL  class="min-w-80 " :data="data?.dateReceived" date-format="full" /></p>
       </div>
     <p class="text-base mt-2 "> <span class="pl-14">ข้าพเจ้า (นางสาว/นาง/นาย) </span>
      <FiLL class="min-w-60" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/>
             เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-36" />  
             อายุ <FiLL :data="data?.age" class="min-w-20" /> ปี
          </p> 
          <p class="text-base  mt-2 "> ข้าพเจ้าขอให้ประวัติสุขภาพของข้าพเจ้าเพื่อประกอบการสมัครสมาชิก สส.ชสอ. ดังนี้ </p>
          <p class="text-base pl-8 "><FiLLBox :checked="data?.fName"/> 1. มีสุขภาพแข็งแรง </p>
          <p class="text-base pl-8 "><FiLLBox :checked="data?.fName"/> 2. ไม่เป็นผู้เป็นผู้มีกายทุพพลภาพ จนไม่สามารถปฏิบัติหน้าที่ได้ </p>
          <p class="text-base pl-8 "><FiLLBox :checked="data?.fName"/> 3. ไม่มีจิตฟั่นเฟือน ไม่สมประกอบ</p>
          <p  class="text-base text-start pl-14 font-semibold">4. <span class="underline underline-offset-2"> ประวัติการรักษาโรคต่อไปนี้  </span> </p>
          <p class="text-base pl-20 mt-2"> (4.1) โรคมะเร็ง <span class="ml-32"> <FiLLBox :checked="data?.fName"/> ไม่มี <FiLLBox /> มี ระบุ<BlankSpace class="min-w-60" /> </span></p>
          <p class="text-base pl-20 "> (4.2) โรคหัวใจ หรือหลอดลม <span class="ml-10"> <FiLLBox :checked="data?.fName"/> ไม่มี <FiLLBox /> มี ระบุ<BlankSpace class="min-w-60" /> </span></p>
          <p class="text-base pl-20 "> (4.3) โรควัณโรคในระยะอันตราย <span class="ml-5"> <FiLLBox :checked="data?.fName"/> ไม่มี <FiLLBox /> มี ระบุ<BlankSpace class="min-w-60" /> </span></p>
          <p class="text-base pl-20 "> (4.4) โรคเบาหวานขั้นรุนแรง <span class="ml-12"> <FiLLBox :checked="data?.fName"/> ไม่มี <FiLLBox /> มี ระบุ<BlankSpace class="min-w-60" /> </span></p>
          <p class="text-base pl-20 "> (4.5) โรคเอดส์ <span class="pl-1.5 ml-32"> <FiLLBox :checked="data?.fName"/> ไม่มี <FiLLBox /> มี ระบุ<BlankSpace class="min-w-60" /> </span></p>
          <p class="text-base pl-20 "> (4.6) โรคเอสแอลอี (SLE) <span class="pl-1 ml-16"> <FiLLBox :checked="data?.fName"/> ไม่มี <FiLLBox /> มี ระบุ<BlankSpace class="min-w-60" /> </span></p>
          <p class="text-base pl-20 "> (4.7) โรคตับแข็ง <span class="pl-2.5 ml-28"> <FiLLBox :checked="data?.fName"/> ไม่มี <FiLLBox /> มี ระบุ<BlankSpace class="min-w-60" /> </span></p>
          <p class="text-base pl-20 "> (4.8) โรคปอดเรื้อรัง <span class="pl-2 ml-24"> <FiLLBox :checked="data?.fName"/> ไม่มี <FiLLBox /> มี ระบุ<BlankSpace class="min-w-60" /> </span></p>
          <p class="text-base pl-20 "> (4.9) ภาวะไตวาย (ล้างไต) <span class="pl-1.5 ml-14"> <FiLLBox :checked="data?.fName"/> ไม่มี <FiLLBox /> มี ระบุ<BlankSpace class="min-w-60" /> </span></p>
          <p  class="text-base text-start pl-14">5. <span> โรคร้ายแรงอื่นๆ (ระบุ)<BlankSpace class="min-w-96" /><BlankSpace class="min-w-16" /><BlankSpace class="min-w-2" />  </span> </p>
          <p  class="text-base text-start "><span class="pl-14">ข้าพเจ้าขอรับรองและยืนยันว่า บันทึกถ้อยคำดังกล่าวที่ได้ให้ไว้ข้างต้น เป็นความสัตย์จริงทุกประการ </span>
            <span class="underline underline-offset-2 font-semibold"> หากบันทึกถ้อยที่ได้แจ้งไว้ไม่ตรงกับวามเป็นจริงแล้ว ขอให้ สส.ชสอ. ตัดสิทธิให้ข้าพเจ้าเป็นผู้ขาดคุณสมบัติการเป็นสมาชิกได้
              ความคิดคณพกรรมการ สส.ชสอ. ข้าพเจ้าและผู้รับเงินสงเคราะห์ของข้าพเจ้าจะไม่ขอรับสิทธิและสิทธิใดๆ ในการที่
            ได้รับเงินสงเคราะห์ตามที่กำหนด เมื่อข้าพเจ้าได้เสียชีวิตตามข้อ (4.1)-(4.9) ทั้งสิ้น </span> </p>
            <p class="text-base  "><span class="pl-14"> ข้าพเจ้าได้รับทราบเงื่อนไขและข้อกำหนดแล้วว่าภายใน 1 ปี นับตั้งแต่ที่ สส.ชสอ. มีมติรับขพเจ้าเข้าเป็นสมาชิกแล้ว
              หากข้าพเจ้าเสียชีวิตก่อนกำหนด 1 ปี ทาง สส.ชสอ. จะไม่จ่าเงินสงเคราะห์ให้ผู้รับเงินสงเคราะห์ </span></p>
              <p class="text-base  "><span class="pl-14"> ข้าพเจ้ายินยอมเปิดเผยประวัติสุขภาพของข้าพเจ้า และขอมอบอำนาจให้ สส.ชสอ. ขอประวัติการรักษาของข้าพเจ้า
                จากสถานพยาบาลที่เกี่ยวข้องได้ </span></p>
                <p class="mt-4 text-center">ลงชื่อ<BlankSpace class="min-w-52" /></p>
                <p class="mt-2 text-center">ตัวบรรจง(<BlankSpace class="min-w-52" />)</p>
                <p class="mt-2 text-center">(ผู้สมัครสมาชิก สส.ชสอ.)</p>

                <p class="mt-4 text-center">ลงชื่อ<BlankSpace class="min-w-56" />
                <span class="ml-10"> ลงชื่อ<BlankSpace class="min-w-56" /> </span></p>
                <p class="mt-2 text-center">ตัวบรรจง(<BlankSpace class="min-w-52" />)
                <span class="ml-8"> ตัวบรรจง(<BlankSpace class="min-w-52" />) </span></p>
                <p class="mt-2 text-center">พยาน (เจ้าหน้าที่ศูนย์ประสานงาน)
                  <span class="ml-28"> พยาน (ผู้มีชื่อรับเงินวงเคราะห์) </span>
                </p>

</MorePaperDoc> 

<MorePaperDoc>  <!-- กู้สามัญทั่วไป general7  -->

<br><br> 
<div class="flex flex-col items-end row-span-2 mt-14">
                <p class="font-bold mb-2">สส.ชสอ. ส.7</p>
                </div>
            <div class="border-2 border-slate-950">
              <div class="flex items-center justify-center">
    <img class="w-[30px] h-auto mr-2" src="https://cypphcoop.com/mediafiles/data/sorsortortor.png" alt="Logo" />
    <p class="text-lg font-semibold">ขั้นตอนการสมัครสมาชิก สส.ชสอ. ประเภทสามัญ</p>
</div>

              <p class="text-base font-semibold pl-4 mt-4">สหกรณ์ออมทรัพย์<FiLL  class="min-w-72 " :data="data?.affiliation" />
                รหัส<FiLL  class="min-w-32 " :data="data?.year" />พื้นที่ <FiLL  class="min-w-32 " :data="data?.numberRegis"  />
                ชื่อสกุลผู้สมัคร<FiLL class="min-w-64" :data="`${data?.fMarryOwnerCollateral2}  ${data?.lMarryOwnerCollateral2}`"/>เลขบัตรประชาชน<FiLL  class="min-w-64 " :data="data?.idcard" />
                วัน/เดือน/ปี เกิด<FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" />อายุ<FiLL  class="min-w-20 " :data="data?.memberGuarantor1"  />ปี วันที่สมัคร<FiLL  class="min-w-52 " :data="data?.dateReceived" date-format="full" />
                เลขฌาปนกิจ<FiLL  class="min-w-32 " :data="data?.memberGuarantor1" />รอบสมัคร<FiLL  class="min-w-20 " :data="data?.memberGuarantor2"  />วันที่เริ่มเป็นสมาชิก<FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" />
              
              </p>
<br>

            </div>
            <p class="text-base font-semibold pl-4 mt-2 "> เอกสารหลักฐานการสมัคร สส.ชสอ. ดังนี้ </p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 1. ใบสมัครสมาชิก : สส.ชสอ.ส.1/1 </p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 2. สําหรับเจ้าหน้าที่ กรรมการ ศูนย์ประสานงานและสมาคม : สส.ชสอ.ส.1/2 </p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 3. หนังสือให้คํายินยอมในการหักเงิน และแสดงเจตนาการรับเงินสงเคราะห์ : สส.ชสอ.ส.1/3</p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 4. ลงลายมือชื่อผู้รับเงินสงเคราะห์ไว้เป็นหลักฐานการยินยอมให้หักเงินเพื่อชําระหนี้ : สส.ชสอ.ส.1/4</p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 5. แบบคํารับรองสุขภาพตนเอง : สส.ชสอ.ส.5 (30 ก.ย.63)</p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 6. รูปถ่าย ณ วันยื่นเอกสาร ตามแบบฟอร์มที่สมาคมกําหนด</p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 7. สําเนาบัตรประชาชน หรือ บัตรข้าราชการของผู้สมัคร</p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 8. สําเนาทะเบียนบ้านของผู้สมัคร</p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 9. สําเนาบัตรประชาชน หรือ บัตรข้าราชการของผู้รับเงินสงเคราะห์ จํานวน<FiLL  class="min-w-20 " :data="data?.group"  />คน</p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 10. สําเนาทะเบียนบ้านของผู้รับเงินสงเคราะห์ จํานวน<FiLL  class="min-w-20 " :data="data?.group"  />.คน</p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 11. ใบรับรองแพทย์ออกโดยโรงพยาบาล หรือสถานพยาบาลของรัฐฉบับจริง (อายุไม่เกิน 30 วัน นับถึงวันที่สมัคร)</p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 12. หลักฐานการเป็นสมาชิกประเภทสามัญของสหกรณ์ออมทรัพย์ต้นสังกัด</p>
          <p class="text-base pl-5 "><FiLLBox :checked="data?.memberGuarantor2"/> 13. สําเนาทะเบียนสมรส (ถ้ามี)</p>
          <p class="text-base pl-5 "><FiLLBox /> 14. เอกสารหลักฐานอื่นๆ <BlankSpace class="min-w-96" /></p>
 
            <div class="grid grid-cols-2 mt-4">
 
 <div class="border-solid border-2 border-slate-950 ">
  <p class="text-center text-sm font-semibold">เจ้าหน้าที่ศูนย์ ผู้ตรวจสอบ</p>
 </div>
 <div class="border-solid border-2 border-slate-950 "> 
  <p class="text-center text-sm font-semibold ps-2">คณะกรรมการศูนย์ ผู้พิจรณา</p>
</div>
</div>
<div class="grid grid-cols-2">
 <div class="border-solid border-2 border-slate-950 ">
   

<p class="text-base pl-6">เอกสารหลักฐาน <span class="pl-4"><FiLLBox :checked="data?.memberGuarantor2"/> ครบถ้วน <FiLLBox /> ไม่ครบ</span></p>
<p class="text-base pl-6">อื่นๆ <BlankSpace class="min-w-60" /></p>
<p class="text-base text-center mt-4">(<FiLL class="min-w-56" :data="`${data?.fNameWitness1}  ${data?.lNameWitness1}`"/>)</p>
<p class="text-base pl-14 mt-2">ตำแหน่ง<FiLL :data="data?.position" class="min-w-28" /></p>
<p class="text-base text-center mt-1">ผู้ตรวจสอบเอกสาร</p>
<p class="text-base text-center mt-1"><FiLL  class="min-w-80 " :data="data?.dateReceived" date-format="short" /></p>
 </div>
 <div class="border-solid border-2 border-slate-950 ">
  <p class="text-base pl-6">เอกสารหลักฐาน <span class="pl-4"><FiLLBox :checked="data?.memberGuarantor2"/> ครบถ้วน <FiLLBox /> ไม่ครบ</span></p>
<p class="text-base pl-6">อื่นๆ <BlankSpace class="min-w-60" /></p>
<p class="text-base text-center mt-4">(<FiLL class="min-w-56" :data="`${data?.fNameGuarantor1}  ${data?.lNameGuarantor1}`"/>)</p>
<p class="text-base pl-14 mt-2">ตำแหน่ง<FiLL :data="data?.positionCommander" class="min-w-28" /></p>
<p class="text-base text-center mt-1">ผู้พิจรณาคุณสมบัติ</p>
<p class="text-base text-center mt-1"><FiLL  class="min-w-80 " :data="data?.dateReceived" date-format="short" /></p>
</div>

</div>
</MorePaperDoc>
<MorePaperDoc>    <!-- กู้สามัญทั่วไป general8  -->
    <div class="mx-3">
        <div class="flex text-cenetr">
        <div class="items-start ">
                <img class="w-[80px] h-auto mt-8"
                  src="https://www.saving-sskh.com/images/logo-saving.png"
                  alt="Logo" />
                  </div>
                  <h1 class="text-xl text-center font-semibold mb-2 mt-16 p-2 w-72 ml-32">บันทึกข้อความ</h1>
            </div>

              <div class="mb-2 mt-4">
                  <p class="mb-1">ส่วนราชการ <FiLL :data="data?.location"date-format="full" class="min-w-96" />
                  </p>
                  <p class="mb-1">ที่ <FiLL :data="data?.location"date-format="full" class="min-w-40" /> <span>วันที่</span>
                  </p>
                  <p class="mb-1">เรื่อง
                  </p>
                  <p class="mb-1 mt-2">เรียน ประธานกรรมการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด
                  </p>
              </div>
              <br>
              <span class="ml-32">
              ด้วยข้าพเจ้า <FiLL class="min-w-72" :data="`${data?.fName}  ${data?.lName}`"/>  สมาชิกเลขที่ <FiLL class="min-w-24" :data="data?.member" />
          ตำแหน่ง <FiLL class="min-w-60":data="data?.positionGuarantor2" />สังกัดโรงพยาบาลศรีสะเกษ มีความประสงค์ขอหนังสือสำคัญ<br>
               การเป็นสมาชิกสหกรณ์ฯ เพื่อนำไปประกอบหลักฐานการสมัครสมาชิกสามคมฌาปนกิจสงเคราะห์สหกรณ์<br>
               สมาชิกของชุมชนสหกรณ์ออมทรัพย์ แห่งประเทศไทย
        </span>
            <br>
            <div class="mb-2 mt-4">
            <span class="ml-20">จึงเรียนมาเพื่อโปรดพิจารณาและดำเนินการต่อไป</span>
            </div>
                <div class="mt-4">
        <div class="grid grid-cols-2 justify-start mt-4">
            <div class="items-start  text-center">
            </div>
            <div class="items-end ">
                
              <p class="text-left pl-12 mt-6 ">...........................................................
            </p>

              <tr>
              <p class="text-left pl-16">(<FiLL class="min-w-40" :data="`${data?.fName}  ${data?.lName}`"/>)
              </p>
              </tr><br>

              <p class="text-left pl-4 ">สมาชิกเลขที่<FiLL class="min-w-36":data="data?.member" />
            </p>

              <tr>
              <p class="text-left pl-4">เบอร์โทร<FiLL class="min-w-44" :data="data?.nbPhon"/>
              </p>
              </tr><br>
          </div>
          <div class="grid grid-cols-2 justify-center">
            <div class="items-start  text-nowrap">
      </div><br>
  </div>
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