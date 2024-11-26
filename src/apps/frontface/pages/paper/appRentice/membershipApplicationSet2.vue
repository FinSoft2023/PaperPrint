<template>
    <main>
        <PaperDoc>    <!-- กู้สามัญทั่วไป general1  -->
            
            <br><br> <br><br> <br><br>
            <div class="border-2 border-slate-950">
              <p class="underline underline-offset-1 text-lg font-semibold "> ขั้นตอนการสมัครสมาชิก สสธท. ประเภทสามัญ (แอดไลน์ 0943934878 เพื่อสอบถามรายละเอียด)</p>
<p class="text-base">1.กรอกใบสมัครให้เรียบร้อย (ด้วยลายมือที่อ่านง่ายและชัดเจน)</p>
<p class="text-base">2.ขอใบรับรองแพทย์จากโรงพยาบาลของรัฐ (ใช้แบบฟอร์มของสมาคมในชุดสมัครเท่านั้น)</p>
<p class="text-base">3.เตรียมเอกสารประกอบการสมัคร ดังนี้</p>
<p class="text-base ml-8">3.1 สำเน่บัตรประชาชนผู้สมัครและผู้รับผลประโยชน์ อย่างละ 1 ฉบับ</p>
<p class="text-base ml-8">3.2 สำเนาทะเบียนบ้านผู้สมัครและผู้รับผลประโยชน์ อย่างละ 1 ฉบับ</p>
<p class="text-base ml-8">3.3 สำเนาทะเบียนสมรส หรือสำเนาทะเบียนหย่า ของผู้สมัคร (ถ้ามี) อย่างละ 1 ฉบับ</p>
<p class="text-base ml-8">3.4 สำเนาใบเปลี่ยนชื่อ /อสกุล ของผู้สมัครและผู้รับผลประโยชน์ (ถ้ามี) อย่างละ 1 ฉบับ</p>
<p class="text-base">4.ผู้รับผลประโยชน์ต้องลงชื่อในส่วนผู้รับผลประโยชน์ และ แบบคำรับรองสุขภาพตนเอง</p>
<p class="text-base">5.ผู้รับสมัครต้องมาสมัครด้วยตนเอง เท่านั้น</p>
<p class="text-base">6.ชำระค่าสมัครและเงินสงเคราะห์ล่วงหน้า ด้วยการด้วยการโอนเข้าบัญชีธนาคารของสหกรณ์ฯ
  <br> จำนวน 5,540.-บาท ผู้สมัครอายุไม่เกิน 54 ปี บริบูรณ์ ณ วันสมัคร
</p>
<p class="text-base">7.เปิดรับสมัครวันที่ 1-25 ของทุกเดือน ช่วงปลายเดือนจะไม่รับสมัคร แต่ตรวจสอบเอกสารได้</p>
<p class="text-base">8.สมาชิกที่กู้เกิน 300,000 - 1,000,000 บาท ต้องสมัครสสธท. หรือทำประกันสินเชื่อ 500,000 -บาท <br>
สมาชิกที่กู้ 1,000,000 - 2,000,000 บาท ต้องสมัครสสธท.หรือเลือกสมัครกองทุนล้านที่ 2 หรือประกัน 5 แสน <br>
สมาชิกกู้เกิน 2,000,000 บาท ต้องสมัครล้านที่ 2 ด้วย ต้องดำเนิกเอกสารดังกล่าวให้เรียบร้อย ส่งพร้อมกับเอกสารเงินกู้ 
หากไม่ปฏิบัติตามหลักเกณฑ์การกู้ อาจไม่ได้รับการพิจารณาเงินกู้ในรอบนั้น
</p>
<br>


            </div>

        </PaperDoc>


        <MorePaperDoc>    <!-- กู้สามัญทั่วไป general2  -->
                        
                        <div class="grid grid-cols-3 grid-rows-2 justify-center h-10">
              <div class="items-start mt-8">
                <div class="border-2 border-black p-1  ">
                  <p class="text-xs font-semibold tracking-tighter">โปรดเขียนตัวบรรจงและกรอกข้อมูลให้ครบทุกช่อง
                  </p>
                </div>
                <div class="border-2 border-black p-1  ">

                  <p class=" text-xs font-semibold">เอกสารประกอบ
                   <p class="text-xs font-semibold" > <FiLLBox :checked="data?.newInstallments"/> 1. สำเนาบัตรข้าราชการหรือบัตรประชาชน</p>
                   <p class="text-xs font-semibold" > <FiLLBox :checked="data?.newInstallments"/> 2. สำเนาทะเบียนบ้าน</p>
                   <p class="text-xs font-semibold" > <FiLLBox :checked="data?.newInstallments"/> 3. สำเนาทะเบียนสมรส (ถ้ามี)</p>
                   <p class="text-xs font-semibold" > <FiLLBox :checked="data?.newInstallments"/> 4. ใบสำคัญการเปลี่ยนชื่อ-นามสกุล (ถ้ามี)</p>
                   <p class="text-xs font-semibold" > <FiLLBox :checked="data?.newInstallments"/> 5. ใบรับรองแพทย์ฉบับจริง ที่ สสธท.กำหนด มีอายุไม่เกิน 30 วัน</p>
                   <p class="text-xs font-semibold" > <FiLLBox :checked="data?.newInstallments"/> 6. สำเนาบัตรและสำเนาทะเบียนบ้านผู้รับเงินสงเคราะห์</p>
                   <p class="text-xs font-semibold" > <FiLLBox :checked="data?.newInstallments"/> 7. กรณีสมาชิกสมัครตรง ต้องมีใบเสร็จรับเงินงวดสุดท้าย หรือใบรับรองของสหกรณ์ต้นสังกัด</p>



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
                  </p>
                  <p class="text-sm font-semibold underline underline-offset-2">ใบเสร็จรับเงิน สสธท.เล่มที่ <FiLL class="min-w-20" :data="data?.nb" /></p>
                  <p class="text-sm font-semibold underline underline-offset-2">เลขที่ <FiLL class="min-w-20" :data="data?.member" /></p>
                  
              </div>

            </div>
            <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>
      <p class="text-lg text-center font-semibold ml-32"> ใบสมัครสมาชิก <span class="underline underline-offset-2">ประเภทสามัญ</span>
      (วาระปกติ)
      <br> สมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณะสุขไทย (สสธท.)
      </p>
      <p class="text-base ml-96"> เขียนที่ <FiLL :data="data?.location" class="min-w-80" />
       <br>วันที่ <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" /></p>
     
       <p class="text-base"> <span class="ml-12">ข้าพเจ้า</span> (นางสาว/นาง/นาย) 
              <FiLL class="min-w-80" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/>
            อายุ <FiLL :data="data?.age" class="min-w-24" /> ปี เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-96" />
            เกิดวันที่ <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="full" /> คู่สมรสชื่อ <FiLL class="min-w-96" :data="`${data?.newprefix} ${data?.newfName}  ${data?.lName}`"/>
          </p> 
          <p class="text-base"> (1) <FiLLBox :checked="data?.savings"/> สมาชิกสามัญของสหกรณ์ออมทรัพย์ <FiLL :data="data?.savings" class="min-w-40" />จำกัด เลขสมาชิกสหกรณ์ <FiLL :data="data?.member" class="min-w-32" />
          <span class="text-base ml-6"><FiLLBox /> อื่นๆ </span>(ระบุ)<BlankSpace class="min-w-80" /><BlankSpace class="min-w-8" />
          </p>
          <p class="text-base"> (2) ตำแหน่ง <FiLL :data="data?.position" class="min-w-40" /> หรือปฏิบัติหน้าที่ <FiLL :data="data?.position" class="min-w-40" />
      <br> <span class="text-base ml-6"> สถานที่ปฏิบัติงาน / ชื่อหน่วยงาน </span><FiLL :data="data?.agency" class="min-w-80" /> <br> <span class="text-base ml-6">ตำบล (แขวง)</span> <FiLL :data="data?.district" class="min-w-44" />
      อำเภอ (เขต) <FiLL :data="data?.district" class="min-w-32" /> <br> <span class="text-base ml-6">จังหวัด</span> <FiLL :data="data?.province" class="min-w-32" /> รหัสไปรษณี <FiLL :data="data?.zipcode" class="min-w-32" />
      <br> <span class="text-base ml-6">โทรศัพท์ (ที่ทำงาน)</span> <FiLL :data="data?.nbPhon" class="min-w-32" /> 
    </p>
<p class="text-base ">(3)  สถานที่อยู่(ในการจัดส่งเอกสาร) <br>
<span class="text-base ml-6">บ้านเลขที่ </span><FiLL :data="data?.housenb" class="min-w-32" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-32" /> ซอย <BlankSpace class="min-w-16" /> ถนน <FiLL :data="data?.road" class="min-w-32" />
<br> <span class="text-base ml-6">ตำบล (แขวง)</span> <FiLL :data="data?.district" class="min-w-32" />
      อำเภอ (เขต) <FiLL :data="data?.district" class="min-w-32" /> จังหวัด <FiLL :data="data?.province" class="min-w-32" /><br>  <span class="text-base ml-6">รหัสไปรษณี</span> <FiLL :data="data?.zipcode" class="min-w-32" />
      โทรศัพท์ (บ้าน) <FiLL :data="data?.nbPhon" class="min-w-32" />  โทรศัพท์ (มือถือ) <FiLL :data="data?.nbPhon" class="min-w-32" /> 
</p> 
<p class="text-base ">(4) การชำระเงิน ดังนี้ <br>
<span class="text-base ml-12">4.1การชำระเงินครั้งแรก</span>
<br>
<div class="grid grid-rows-2 grid-flow-col">
                <div class="row-span-3">
                  <p class="ml-12" ><FiLLBox :checked="data?.savings"/> ค่าสมัครสมาชิกครั้งแรก</p>
                  <p class="ml-12"> <FiLLBox :checked="data?.savings"/> ค่าบำรุงรายปี </p>
                 
                </div>
                <div class="row-span-2 col-span-2 ml-10">
                  <p>เป็นเงิน 20 บาท</p>
                  <p>เป็นเงิน 20 บาท</p>                  
                </div>
            </div>
            <span class="text-base ml-12"><FiLLBox :checked="data?.savings"/> เงินสงเคราะห์ล่วงหน้า..............5,500.....บาท</span> <br>
            <span class="text-base ml-20">รวมชำระหนี้ครั้งนี้ เป็นเงิน..........5,500.....บาท</span> (ห้าพันห้าร้อยยี่สิบบาทถ้วน)<br>
            <span class="text-base ml-12">4.2 การชำระเงินครั้งต่อไป ข้าพเจ้ายินยอมให้หักและชำระเงินสงเคราะห์ล่วงหน้า ดังน้ี</span><br>
            <span class="text-base ml-12"> <FiLLBox :checked="data?.savings"/> ชำเป็นเงินสดที่สมาคมหรือศุนย์ประสานงานสมาคม</span><br>
            <span class="text-base ml-12"> <FiLLBox :checked="data?.savings"/> ชำระเงินเข้าบัญชีสมาคมธนาคารไทยพาณิชย์ สาขาเดอะคริสตัล ราชพฤกษ์ ชื่อบัญชี สมาคมฌาปนกิจ</span>สงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย
            สมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย ประเภทกระแสรายวัน (Bill Payment Pay- In Slip) เลขบัญชี 458-0-39888-5<br>
            <span class="text-base ml-12"> <FiLLBox :checked="data?.savings"/> ชำระจากเงินปันผล เฉลี่ยคืน จากสหกรณ์ต้นสังกัด <br>
              <span class="text-base ml-12"> ข้าพเจ้าได้ทราบและเข้าใจวัตถุประสงค์ </span> ข้อบังคับ ระเบียบ และประกาศของสมาคมฌาปนกิจสงเคราะห์</span>
            สมาชิกสามัญของสหกรณ์ออมทรัพย์สาธารณสุขไทย แล้ว มีความประสงค์สมัครเป็นสมาชิก และยินยอมปฏิบัติตามข้อบังคับและเงื่อไขดังกล่าวทุกประการ<br>
</p> 
<p class="text-base pl-96 ">ลงชื่อ<BlankSpace class="min-w-52" />ผู้สมัคร </p>
<p class="text-base pl-96 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( <FiLL class="min-w-52" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> )</p>

        </MorePaperDoc>


        <MorePaperDoc>    <!-- กู้สามัญทั่วไป general3  -->
                        
              
              <div class="flex flex-col items-center row-span-2 mt-20">
                          <img class="w-[100px] h-auto"
                            src="https://cypphcoop.com/mediafiles/data/sorsortortor.png"
                            alt="Logo" />
              </div>
  <p class="text-base font-semibold text-center"> คำรับรองคุณสมบัติผู้สมัครเป็นสมาชิก <br> 
  ผู้รับรองต้องเป็นสมาชิกสมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย
  </p>
  <p class="text-base "> <span class="ml-12">ข้าพเจ้า</span> 
              <FiLL class="min-w-80" :data="`${data?.fName}  ${data?.lName}`"/>สมาชิกสมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย
              ทะเบียนเลขประจำตัว<FiLL :data="data?.idcard" class="min-w-40" /> อยู่บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-32" /> 
              หมู่ที่ <FiLL :data="data?.group" class="min-w-32" /> ตรอก/ซอย <BlankSpace class="min-w-16" /> ถนน <FiLL :data="data?.road" class="min-w-32" />
              ตำบล/แขวง <FiLL :data="data?.district" class="min-w-32" />
      อำเภอ/เขต <FiLL :data="data?.district" class="min-w-32" /> จังหวัด <FiLL :data="data?.province" class="min-w-32" />
      โทรศัพท์<FiLL :data="data?.nbPhon" class="min-w-32" /> 
</p> 
<p class="text-base "> <span class="ml-6">ขอรับรองว่าผู้สมัคร</span>  นาย/นาง/นางสาว <FiLL class="min-w-52" :data="`${data?.newprefix} ${data?.newfName}  ${data?.lName}`"/>ฃ
มีคุณสมบัติตามข้อบังคับ ข้อ 10.1 ของสมาคมฌาปนกิจสงเคราะห์สมาชิกออมทรัพย์สาธารณสุขไทยทุกประการ
</p>
<p class="text-base ml-96"> ลงชื่อ<BlankSpace class="min-w-60" />ผู้รับรอง <br>
วันที่  <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="short" />
</p>
<p class="text-center text-lg font-semibold"> สำหรับเจ้าหน้าที่สมาคม</p><br>
<p class="text-base "><span class="ml-12">ตรวจสอบแล้วขอรับรองว่าผู้สมัครเป็นผู้มีคุณสมบัติในการสมัครสมาชิก</span>  สสธท. และได้แนบหลักฐานประกอบกาสมัครครบถ้วน พร้อมชำระเงินค่าสมัคร
และเงินค่าสงเคราะห์ล่วงหน้า ตามข้อบังคับ ระเบียบและประกาศการรับสมัครสมาชิก สสธท. ตามรอบการรับสมัคร หรือ การเปิดรับสมัครเป็นกรณีพิเศษ แล้วแต่กรณี
</p>
<p class="text-base ml-96"> ลงชื่อ<BlankSpace class="min-w-60" /><br>
ตำแหน่ง  <FiLL  class="min-w-56 " :data="data?.position" date-format="short" />
</p>
<p class="text-center text-lg font-semibold">ความเห็นของกรรมการ</p><br>
<p class="text-sm ml-12 "> เสนอ <FiLLBox :checked="data?.savings"/> เห็นควรอนุมัติให้สมัครเป็นสมาชิก สสธท. <br> <span class="ml-9"><FiLLBox /> ไม่เห็นควรอนุมัติ </span>เนื่องจาก<BlankSpace class="min-w-52" />
</p>
<p class="text-base ml-96"> ลงชื่อ<BlankSpace class="min-w-56" /><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( <FiLL class="min-w-52" :data="` ${data?.ofFname}  ${data?.ofLname}`"/> ) <br>
</p>
<p class="text-sm pl-96"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  กรรมการผู้ได้รับมอบหมาย</p>
<p class="text-center text-lg font-semibold">ความเห็นสำหรับคณะกรรมการสมาคม สสธท.</p><br>
<p class="text-sm ml-12 "> คำสั่ง <FiLLBox :checked="data?.savings"/> อนุมัติรับเข้าเป็นสมาชิก สสธท. ตั้งแต่วันที่ <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="short" />
  ตามมติที่ประชุมคณะกรรมการสมาคม ครั้งที่ <FiLL  class="min-w-20 " :data="data?.member" /> เมื่อวันที่ <FiLL  class="min-w-56 " :data="data?.dateReceived" date-format="short" />
  <br> <span class="ml-9"><FiLLBox /> ไม่อนุมัติ </span>  เนื่องจาก<BlankSpace class="min-w-64" />
</p>

<div class="grid grid-cols-3 grid-rows-2 justify-center h-1">
          <div class="items-start mt-4">
                <div class="border-2 border-black p-2">
                  <p class="text-sm font-bold ">ผู้มีอำนาจอนุมัติ (แล้วแต่กรณี)
                  </p>
                  <p class="text-sm"><FiLLBox :checked="data?.savings"/> นายกสมาคม สสธท. </p>            
                  <p class="text-sm "><FiLLBox /> กรรมการ สสธท. ปฏิบัติการแทน <span class="ml-4">นายกสมาคม สสธท. </span></p>
                </div>
                </div>
                </div>
        <div class="grid justify-items-center mt-4">
        <p class="pl-72">ลงชื่อ<BlankSpace class="min-w-52" /></p>
        <div class="pl-80">
   (<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/> ) 
        </div><br>
        <p class="pl-72">ตำเเหน่ง <FiLL :data="data?.position" class="min-w-28" /></p>
 </div>
 <br> 
        </MorePaperDoc>


        <MorePaperDoc>    <!-- กู้สามัญทั่วไป general4  -->
                        
              

                        <div class="grid grid-cols-3 grid-rows-2 justify-center h-10"> 
<div></div>
<div class="flex flex-col items-center row-span-2 mt-12">
                          <img class="w-[90px] h-auto"
                            src="https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Regular_octagon.svg/langth-1500px-Regular_octagon.svg.png&w=1200&q=50"
                            alt="Logo" />
              </div>
<div class="flex flex-col items-center row-span-2 mt-12">
                          <img class="w-[90px] h-auto"
                            src="https://cypphcoop.com/mediafiles/data/sorsortortor.png"
                            alt="Logo" />
                            <p class="text-base font-semibold">สสธท.2</p>
              </div>
            </div>
            <br>
              <p class="text-xs text-center"> ตราประทับ<br>สถานพยาบาล<br>ของรัฐ</p>
<br><br>
                        <p class="text-base font-semibold text-center">ใบรับรองแพทย์</p>
                        <p class="text-base font-semibold ">ส่วนที่ 1 ของผู้ขอใบรับรองแพทย์สมัครสมาชิก สสธท.</p>
                        <p class="text-base"> <span class="ml-12">ข้าพเจ้า</span> นาย/นาง/นางสาว 
              <FiLL class="min-w-80" :data="`${data?.fName}  ${data?.lName}`"/>
              อายุ <FiLL :data="data?.age" class="min-w-24" /> ปี เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-96" />
            ข้าพเจ้ามีสุขภาพดังนี้ โรคตามข้อ (3.1) - (3.9) ในส่วนที่ 2 ของแพทย์ <FiLLBox :checked="data?.savings"/> ไม่มี <FiLLBox /> มี (ระบุ) <BlankSpace class="min-w-96" />
          โรคประจำตัวอื่นๆ<BlankSpace class="min-w-80" /><BlankSpace class="min-w-64" /><BlankSpace class="min-w-12" />
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
                <div class="row-span-3 text-base">
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
            <p class="ml-16 font-semibold"> (4) โรคร้ายแรงอื่นๆ (ระบุ)<BlankSpace class="min-w-60" /><BlankSpace class="min-w-44" /></p>
            <p class="ml-16 font-semibold"> สรุปความเห็นและข้อแนะนำของแพทย์<BlankSpace class="min-w-60" /><BlankSpace class="min-w-20" /></p> 
              <BlankSpace class="min-w-80" /><BlankSpace class="min-w-80" /><BlankSpace class="min-w-28" />
              <p class="text-base ml-96"> ลงชื่อ<BlankSpace class="min-w-60" /><br>
                <span class="ml-8">( <FiLL class="min-w-56" :data="`${data?.lOwnerCollateral1}  ${data?.lMarryOwnerCollateral1}`"/> ) </span><br>
</p>
<p class="text-sm pl-96"> <span class="ml-24">แพทย์ผู้ตรวจร่างกาย</span></p>
<p class="text-sm "> <span class="font-semibold">หมายเหตุ</span> <span class="ml-4">(1) </span> ต้องเป็นแพทย์แผนปัจจุบันชั้นหนึ่ง จากสถานพยาบาลของรัฐตามกฎหมายว่าด้วยสถานพยาบาล
  <br><span class="ml-20">(2) </span> ใบรับรองแพทย์ฉบับนี้ให้ใช้ได้ไม่เกิน 30 วัน นับแต่วันที่ตรวจร่างกาย
  <br><span class="ml-20 font-semibold underline underline-offset-1 ">(3)  หากพบว่าเป็นโรค ตาม ข้อ (3) หรือตามที่คระกรรมการเห็นว่าอันตราย ให้การสมัครเป็นสมาชิิกตกเป็นโมฆะทันที</span>
  <br><span class="ml-20 font-semibold ">(4)  ให้ผู้สมัครใช้ใบรับรองแพทย์ตามแบบที่สมาคมฯ กำหนดนี้เท่านั้นเพื่อประกอบการสมัครเป็นสมาชิก สสธท. เริ่มใช้ตั้งแต่</span><span class="underline underline-offset-1 font-semibold">วันที่ 1 เมษายน 2564</span> 
  <span class="font-semibold"> เป็นต้นไป</span>
</p>

        </MorePaperDoc>

        <MorePaperDoc>    <!-- กู้สามัญทั่วไป general5  -->
          <div class="mr-3">
            <div class="grid grid-cols-1 grid-rows-2 justify-center h-10">
              <div class=" items-center row-span-2">
                <div class="text-base text-center mt-6">
                  <p>-2-</p>
                  <p class="text-base font-semibold mt-4 ">ถ้อยเเถลงเเละให้การยินยอมของผู้สมัครสมาชิก สสธท.</p>
                </div>
              </div>
              <div class="flex flex-col items-end row-span-2 mt-4">
                <img class="w-[100px] h-auto" src="https://cypphcoop.com/mediafiles/data/sorsortortor.png" alt="Logo" />
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
          </div>
            <div>
              <p class="mr-2"><span class="ml-14">5.</span> โรคร้ายแรงอื่น ๆ (ระบุ)<BlankSpace class="min-w-60" /><BlankSpace class="min-w-52" /></p>
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
            <div class="text-center text-base mr-4 mt-8">ลงชื่อ<BlankSpace class="min-w-56" /></div>
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

        <MorePaperDoc>      <!-- กู้สามัญทั่วไป general6  -->
          <div>
                <div class="flex flex-col items-end row-span-2">
                    <p class="mb-2 mr-12">สสธท. 3</p>
                </div>
                <div class="text-center">
                    <img class="w-[120px] h-auto mx-auto" src="https://cypphcoop.com/mediafiles/data/sorsortortor.png" alt="Logo" />
                </div>
                <div class="mb-2">
                    <p class="text-center font-bold mt-2 text-xl">สงเคราะห์เงินรับให้มอบการเจตนาแสดงหนังสือ</p>
                    <p class="text-center font-bold text-xl">สมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย</p>
                </div>
                <div class="text-base text-end mb-2">
                    <p> เขียนที่ <FiLL :data="data?.location" class="min-w-96" /></p>
                    <p> วันที่ <FiLL  :data="data?.dateReceived" class="min-w-96 "  date-format="full" /></p>
                </div>
                <p>
                    <span class="ml-20">ข้าพเจ้า</span> <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/> อายุ <FiLL :data="data?.age" class="min-w-20" /> ปี เกิดวันที่ <FiLL  class="min-w-44 " :data="data?.dateReceived" date-format="full" />
                    <p>สมาชิกสมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย เลขทะเบียนที่<FiLL :data="data?.member" class="min-w-40" /></p>
                    <p>อยู่บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-24" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-16" /> ถนน <FiLL :data="data?.road" class="min-w-44" /> ตำบล <FiLL :data="data?.district" class="min-w-48" /></p>
                    <p>อำเภอ <FiLL :data="data?.district" class="min-w-56" /> จังหวัด <FiLL :data="data?.province" class="min-w-56" /> รหัสไปรษณีย์ <FiLL :data="data?.zipcode" class="min-w-24" /> </p>
                    <p>โทรศัพท์  <FiLL :data="data?.nbPhon" class="min-w-32" /> มือถือ <FiLL :data="data?.nbPhon" class="min-w-96" /></p>
                </p>
                <div class="mt-10">
                    <p class="ml-20">1. สถานภาพ</p>
                    <p class="ml-20"><FiLLBox />โสด <span class="ml-12"><FiLLBox :checked="data?.newfName" />สมรส คู่สมรสชื่อ </span><FiLL class="min-w-60" :data="`${data?.newfName}  ${data?.newlName}`"/> <FiLLBox />หย่า หรือ หม้าย</p>
                    <p><span class="ml-20">2.</span> ข้าพเจ้าขอแสดงเจตนาการรับเงินสงเคราะห์ที่ สสธท. พึงจ่าย ให้ผู้จัดการศพข้าพเจ้าคือ <FiLL class="min-w-60" :data="`${data?.newfName}  ${data?.newlName}`"/> เกี่ยวข้องเป็น <FiLL :data="data?.newStatus" class="min-w-28" /> ของข้าพเจ้า(10%ของเงินสงเคราะห์) ส่วนที่เหลือมอบให้บุคคล ดังต่อไปนี้เป็นผู้รับเงินสงเคราะห์ คือ</p>
                </div>
                <LineFiLL :data="data?.beneficiary" :limit="5" class="mt-6 mb-6">
                    <template #data="{ index, item }">
                        <p class="text-center">
                            2.<FiLL :data="index" decimal normal no-line />
                            <FiLL :data="`${item.prefix}${item.fn}  ${item.ln}`" class="min-w-56" />
                            เกี่ยวข้องเป็น
                            <FiLL :data="item.status" class="min-w-20" />
                            ของข้าพเจ้า สัดส่วน
                            <FiLL :data="item.ratio" class="min-w-10" />
                            %
                        </p>
                    </template>
                    <template #default="{ index }">
                        <p class="text-center">
                            2.<FiLL :data="index" decimal normal no-line />
                            <BlankSpace class="min-w-56" />
                            เกี่ยวข้องเป็น
                            <BlankSpace class="min-w-20" />
                            ของข้าพเจ้า สัดส่วน
                            <BlankSpace class="min-w-10" />
                            %
                        </p>
                    </template>
                </LineFiLL>
                <div class="mx-20">
                    โดยมีเงื่อนไขดังนี้ 
                    <span class="ml-2"><FiLLBox /> ได้รับเต็มจำนวนเพียงผู้เดียว <FiLLBox /> ได้รับส่วนแบ่งเท่าๆกัน</span>
                    <br><span class="ml-32"><FiLLBox /> อื่นๆระบุ <BlankSpace class="min-w-96" /></span>
                </div>
                <p>
                    <span class="ml-20">อนึ่ง</span> ข้าพเจ้าขอรับรองว่า การแสดงเจตนาครั้งนี้เป็นไปด้วยความสมัครใจ ไม่มีผู้ใดบังคับ ข่มขู่ หรือกระทำ
                    การใดๆ ให้ข้าพเจ้าแสดงเจตนาดังกล่าว จึงได้ลงลายมือชื่อไว้เป็นสำคัญ ท้ายหนังสือนี้
                </p>



                <div class="grid grid-rows-2 grid-flow-col mt-6">
                    <div class="row-span-3">
                    <div ></div>
                    </div>
                    <div class="row-span-2 col-span-2  ">
                    <div ></div>
                    <div class="text-center text-base ml-72 mr-6">(ลงชื่อ)<BlankSpace class="min-w-52" />ผู้ให้คำยินยอม</div>
                    <div ></div>
                    <div class="text-center ml-56">
                        (<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/>)
                        <p class="text-center text-base">
                        ผู้สมัครสมาชิก สสธท.
                        </p>
                    </div>
                    <div class="text-center text-base ml-56 mt-2 mr-2">(ลงชื่อ)<BlankSpace class="min-w-52" />พยาน</div>
                    <div ></div>
                    <div class="text-center ml-56">
                        (<FiLL class="min-w-52" :data="`${data?.fNameWitness1}  ${data?.lNameWitness1}`"/>)
                        
                    </div>
                    <div class="text-center text-base ml-72 mt-2 ">(ลงชื่อ)<BlankSpace class="min-w-52" />เจ้าหน้าที่ สสธท.</div>
                    <div ></div>
                    <div class="text-center ml-56">
                        (<FiLL class="min-w-52" :data="`${data?.officerFName}  ${data?.officerLName}`"/>)
                        
                    </div>
                    </div>
                </div>
            </div>
        </MorePaperDoc>

        <MorePaperDoc>    <!-- กู้สามัญทั่วไป general7  -->
            <div class="text-end">
                <div class="flex flex-col items-end row-span-2">
                    <p class="mb-2 mr-12">สสธท. 9</p>
                </div>  
            </div>

            <div class="grid justify-items-center mt-10 text-lg font-semibold">
                <p>หนังสือยินยอมและมอบอำนาจการรับเงินสงเคราะห์</p>
                <p>สมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย (สสธท.)</p>
            </div>

            <div class="mr-14 mt-4">
                <div class="grid justify-items-center mt-2 text-base ">
                    <p class="ml-12">เขียนที่ <FiLL :data="data?.location" class="min-w-96" /></p>
                    <p class="ml-16">วันที่ <FiLL class="min-w-96" :data="data?.dateReceived" date-format="full" /></p>
                </div>

                <div class="grid justify-items-start mt-6 text-pretty text-base ">
                    <p><span class="ml-14">โดยหนังสือฉบับนี้ข้าพเจ้า </span> 
                        <FiLL class="min-w-60" :data="` ${data?.fName}  ${data?.lName}`"/> ซึ่งเป็นผู้ถือบัตรประจำตัวประชาชนเลขที่ <FiLL :data="data?.idcard" class="min-w-40" /> 
                        ที่อยู่ปัจจุบันเลขที่ <FiLL :data="data?.housenb" class="min-w-20" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-14" />  ซอย <FiLL :data="data?.group" class="min-w-14" /> ถนน <FiLL :data="data?.road" class="min-w-32" /> 
                        ตำบล(แขวง) <FiLL :data="data?.district" class="min-w-24" /> อำเภอ(เขต) <FiLL :data="data?.district" class="min-w-24" /> จังหวัด <FiLL :data="data?.province" class="min-w-28" /> 
                        รหัสไปรษณีย์ <FiLL :data="data?.zipcode" class="min-w-24" /> โทรศัพท์บ้าน <FiLL :data="data?.nbPhon" class="min-w-44 " /> โทรศัพท์มือถือ <FiLL :data="data?.nbPhon" class="min-w-44" />
                        ยินยอมและมอบอำนาจให้สหกรณ์ออมทรัพย์ <FiLL :data="data?.agency" class="min-w-52" /> จำกัด หรือ <FiLL class="min-w-52" :data="` ${data?.ofFname}  ${data?.lName}`"/> ซึ่งเป็นผู้ถือบัตรประจำตัวประชาชนเลขที่ <FiLL :data="data?.idcard" class="min-w-40" /> 
                        ที่อยู่ปัจจุบันเลขที่ <FiLL :data="data?.housenb" class="min-w-20" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-12" />  ซอย <FiLL :data="data?.group" class="min-w-12" /> ถนน <FiLL :data="data?.road" class="min-w-32" /> 
                        ตำบล(แขวง) <FiLL :data="data?.district" class="min-w-28" /> อำเภอ(เขต) <FiLL :data="data?.district" class="min-w-28" /> จังหวัด <FiLL :data="data?.province" class="min-w-36" /> 
                        รหัสไปรษณีย์ <FiLL :data="data?.zipcode" class="min-w-24" /> โทรศัพท์บ้าน <FiLL :data="data?.nbPhon" class="min-w-44 " /> โทรศัพท์มือถือ <FiLL :data="data?.nbPhon" class="min-w-48" />
                        เป็นผู้ <FiLLBox /> รับเงินค่าจัดการศพ <FiLLBox /> รับเงินสงเคราะห์ <FiLLBox /> อื่นๆ ที่พึ่งได้รับ
                    </p>
                    <p>แทนข้าพเจ้าเพื่อนำเงินดังกล่าวชำระหนี้ของ <FiLL :data="data?.affiliation" class="min-w-40" /> ที่มีต่อสหกรณ์ออมทรัพย์<FiLL :data="data?.savings" class="min-w-28" /> จำกัด จนเสร็จการ </p>
                    <p>
                        <span class="ml-14">ข้าพเจ้าขอรับผิดชอบในการที่ผู้รับยินยอมและรับมอบอำนาจได้กระทำไปตามหนังสือยินยอมและมอบอำนาจนี้
                        เสมือนว่าข้าพเจ้าได้กระทำด้วยตนเองทั้งสิ้น</span>
                    </p>
                    <p>
                        <span class="ml-14">เพื่อเป็นหลักฐานข้าพเจ้าได้ลงลายมือชื่อ / ลายพิมพ์นิ้วมือ ไว้เป็นสำคัญต่อหน้าพยานแล้ว</span>
                    </p>
                </div>
            </div>
            
            <div class="grid grid-cols-3 mt-4">
                <div ></div>
                <div class="col-span-2">
                    <p class="ml-14">(ลงชื่อ) <BlankSpace class="min-w-52" /> ผู้ยอมและมอบอำนาจ</p>
                    <p class="ml-24"><span class="ml-2">(<FiLL class="min-w-52" :data="`${data?.fName}  ${data?.lName}`"/>)</span></p>
                </div>
            </div>

            
            <div class="grid grid-rows-2 grid-flow-col mt-2">
                <div class="row-span-3">
                  <div ></div>
            <div class="text-center text-base mr-4">(ลงชื่อ)<BlankSpace class="min-w-40" />ผู้ยินยอมและมอบอำนาจ</div>
            <div ></div>
            <div class="text-start">
              <p class="text-start text-base  ml-12">(<FiLL class="min-w-40" :data="`${data?.newlName}  ${data?.fName}`"/>)</p>
              <p class="text-start text-base ">
                บัตรปชช.เลขที่ <FiLL :data="data?.idcard" class="min-w-32" />
              </p>
            </div>
                </div>
                <div class="row-span-2 col-span-2  ">
                  <div ></div>
                  <div class="text-end text-base">(ลงชื่อ)<BlankSpace class="min-w-40" />ผู้ยินยอมและมอบอำนาจ</div>
            <div ></div>
            <div class="text-start">
              <p class="text-start text-base  ml-12">(<FiLL class="min-w-40" :data="`${data?.officerLName}  ${data?.newlName}`"/>)</p>
              <p class="text-start text-base ">
                บัตรปชช.เลขที่ <FiLL :data="data?.idcard" class="min-w-32" />
              </p>
            </div>
                </div>
            </div>
            <div class="grid grid-rows-2 grid-flow-col mt-2">
                <div class="row-span-3">
                  <div ></div>
            <div class="text-center text-base mr-4">(ลงชื่อ)<BlankSpace class="min-w-40" />ผู้ยินยอมและมอบอำนาจ</div>
            <div ></div>
            <div class="text-start">
              <p class="text-start text-base  ml-12">(<FiLL class="min-w-40" :data="`${data?.fNameGuarantor1}  ${data?.lNameGuarantor1}`"/>)</p>
              <p class="text-start text-base ">
                บัตรปชช.เลขที่ <FiLL :data="data?.idcard" class="min-w-32" />
              </p>
            </div>
                </div>
                <div class="row-span-2 col-span-2  ">
                  <div ></div>
                  <div class="text-end text-base">(ลงชื่อ)<BlankSpace class="min-w-40" />ผู้ยินยอมและมอบอำนาจ</div>
            <div ></div>
            <div class="text-start">
              <p class="text-start text-base  ml-12">(<FiLL class="min-w-40" :data="`${data?.fNameGuarantor2}  ${data?.lNameGuarantor2}`"/>)</p>
              <p class="text-start text-base ">
                บัตรปชช.เลขที่ <FiLL :data="data?.idcard" class="min-w-32" />
              </p>
            </div>
                </div>
            </div>
            <div class="grid grid-rows-2 grid-flow-col mt-6">
                <div class="row-span-3">
                  <div ></div>
                </div>
                <div class="row-span-2 col-span-2  ">
                  <div ></div>
                  <div class="text-center text-base ml-60 mr-6">(ลงชื่อ)<BlankSpace class="min-w-52" />ผู้ยินยอมและมอบอำนาจ</div>
                  <div ></div>
                  <div class="text-center ml-28">
                    (<FiLL class="min-w-52" :data="`${data?.newfName}  ${data?.lName}`"/>)
                  </div>
                </div>
            </div>
            <p>
              <span class="ml-14">ข้าพเจ้าขอรับรองว่าเป็นลายมือชื่อ&nbsp; /&nbsp; ลายพิมพ์นิ้วมือของผู้ยืนยอมและมอบอำนาจและผู้รับยินยอม
                และรับมอบอำนาจจริงและได้ลงลายมือชื่อ&nbsp;/&nbsp; ลายพิมพ์นิ้วมือต่อหน้าข้าพเจ้า</span>
            </p>
            <div class="grid grid-rows-2 grid-flow-col mt-2">
                <div class="row-span-3">
                    <div ></div>
                    <div class="text-end text-base mr-4">(ลงชื่อ)<BlankSpace class="min-w-40" />พยาน</div>
                    <div ></div>
                    <div class="text-end">
                      <p class="text-center text-base ml-16">(<FiLL class="min-w-40" :data="`${data?.fNameGuarantor1}  ${data?.lNameGuarantor1}`"/>)</p>
                    </div>
                </div>
                <div class="row-span-2 col-span-2  ">
                <div ></div>
                <div class="text-center text-base">(ลงชื่อ)<BlankSpace class="min-w-40" />พยาน</div>
                    <div ></div>
                    <div class="text-center">
                      <p class="text-center text-base ml-1">(<FiLL class="min-w-40" :data="`${data?.fNameGuarantor2}  ${data?.lNameGuarantor2}`"/>)</p>
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
