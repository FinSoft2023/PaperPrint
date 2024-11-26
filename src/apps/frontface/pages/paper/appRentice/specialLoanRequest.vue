<template>
    <main>
        <PaperDoc> <!-- หน้า 1 -->
        <div class="grid grid-cols-3 justify-center">
            <div class="flex items-start">
            </div>
            <div class="flex flex-col items-center">
            <img class="w-[120px] h-auto"
                src="https://www.saving-sskh.com/images/logo-saving.png"
                alt="Logo" />
            </div>
            <div class="flex flex-col items-end">
                <div class=" p-2">
                    <p>รับที่ <FiLL :data="data?.location" class="min-w-40" /></p>
                    <p>วันที่ <FiLL  class="text-base" :data="data?.dateReceived"date-format="short"  /></p>
                    <p>สัญญาที่กู้ที่ <FiLL :data="data?.loanbook" class="min-w-20" /></p>
                </div>
            </div> 
            <div></div>
            <div class="mt-4"> 
                <div class="text-xl text-center font-bold">
                    <p>คำขอกู้เงินพิเศษ</p>
                </div>
            </div>   
        </div>
        <div class="flex flex-col items-end">
            <div class="text-start">
                <p class="mt-6">เขียนที่สำนักงานสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                <p class="mt-2">วันที่ <FiLL  class="text-base" :data="data?.dateReceived"date-format="full"  /></p>
            </div>
        </div>
        <p class="text-left mt-6">เรียน คณะกรรมการดำเนินการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        <div> 
            <p class="mt-2"><span class="ml-12">ข้าพเจ้า นาย/นาง/นางสาว </span> <FiLL class="min-w-60" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> อายุ <FiLL :data="data?.age" class="min-w-20" /> ปี สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-20" /> </p>
            <p>เป็น <FiLLBox :checked="data?.position" /> ข้าราชการ <FiLLBox /> พนักงาน <FiLLBox /> ลูกจ้างประจำ ตำแหน่ง <FiLL :data="data?.position" class="min-w-60" /></p>
            <p>สังกัด <FiLL :data="data?.affiliation" class="min-w-52" /> ตำบล <FiLL :data="data?.district" class="min-w-24" /> อำเภอ <FiLL :data="data?.district" class="min-w-28" />จังหวัด <FiLL :data="data?.province" class="min-w-36" />  </p>
            <p>เป็นสมาชิกแล้ว <FiLL :data="data?.alreadyMember" class="min-w-12" /> ปี อยู่บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-20" /> หมู่ที่ <FiLL :data="data?.group" class="min-w-12" /> ถนน <FiLL :data="data?.road" class="min-w-28" /> ตำบล <FiLL :data="data?.district" class="min-w-32" /></p>
            <p> อำเภอ <FiLL :data="data?.district" class="min-w-28" />จังหวัด <FiLL :data="data?.province" class="min-w-36" /> หมายเลขโทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-36" /> มีเงินได้รายเดือน <FiLL :data="data?.salary" class="min-w-28" /> บาท</p>

            <p>สถานภาพสมรส <FiLLBox /> โสด, <FiLLBox :checked="data?.agency" /> สมรสแล้ว, <FiLLBox /> เป็นหม้าย กรณีสมรสแลัวคู่สมรสชื่อ <FiLL class="min-w-56" :data="`${data?.newfName}  ${data?.lName}`"/> </p>
            <p><BlankSpace class="min-w-20" />อาชีพ <FiLL :data="data?.officerPOsition" class="min-w-28" /> มีเงินได้เดือนละ <FiLL :data="data?.salary" class="min-w-28" /> บาท สถานที่ทำงาน  <FiLL :data="data?.affiliation" class="min-w-28" /></p>
            <p><BlankSpace class="min-w-20" /> หมายเลขโทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-36" /> </p>

            <p class="mt-2 ml-12"> ข้อ 1. วัตถุประสงค์ในการขอกู้ ( โปรดกาเครื่องหมาย ถูก ใน <FiLLBox /> ที่ต้องการ )</p>
            <div class="grid grid-cols-2 justify-center flex flex-col ml-8 ">
            <p class="mt-2 ml-16">(1) <FiLLBox /> เพื่อการเคหะ</p>
            <p>(2) <FiLLBox checked /> เพื่อการลงทุนประกอบอาชีพ</p>
            <p class="ml-16">(3) <FiLLBox /> เพื่อซื้อรถยนต์หรือจักรยานยนต์</p>
            <p>(4) <FiLLBox /> เพื่อการไถ่ถอนจำนอง <BlankSpace class="min-w-32" /></p>
            </div>
            <div class="grid grid-cols-1 justify-center flex flex-col ml-8 ">
                <p class="ml-16">(5) <FiLLBox /> เพื่อการอื่น ๆ (ระบุ) <BlankSpace class="min-w-32" /></p>
            </div>

            <p class="mt-2 ml-12"> ข้อ 2. ข้าพเจ้าได้แนบหลักฐานมาพร้อมนี้คือ</p>
            <div class="grid grid-cols-2 justify-center flex flex-col ml-8 ">
            <p class="ml-16">(1) <FiLLBox checked /> สำเนาโฉนดที่ดินจำนวน 2 ชุด</p>
            <p>(2) <FiLLBox checked /> แผนที่สังเขปทางไปที่ดิน</p>
            <p class="ml-16">(3) <FiLLBox checked /> สำเนาหนังสือจะซื้อจะขายอาคารและที่ดิน </p>
            <p>(4) <FiLLBox checked /> สำเนาหนังสืออนุญาตสร้างหรือต่อเติมอาคาร</p>
            <p class="ml-16">(5) <FiLLBox checked /> สำเนาบัตรประจำตัวผู้ค้ำประกัน </p>
            <p>(6) <FiLLBox checked /> หนังสือรับรองประเมินราคาที่ดินจากทางราชการ</p>
            </div>
            <div class="grid grid-cols-1 justify-center flex flex-col ml-8 ">
                <p class="ml-16">(7) <FiLLBox checked /> สำเนาบัตรประจำตัวผู้กู้ คู่สมรสผู้กู้ สำนาทะเบียนบ้านผู้กู้ และทะเบียนสมรสหรือทะเบียนหย่าผู้กู้</p>
            </div>
            <div class="grid grid-cols-1 justify-center flex flex-col ml-8 ">
                <p class="ml-16">(8) <FiLLBox checked /> บัตรประจำตัวเจ้าของที่ดินและคู่สมรส พร้อมทะเบียนบ้าน และทะเบียนสมรส หรือทะเบียนหย่าของเจ้าของที่ดิน (กรณีที่ดินของบุคคลอื่น) </p>
            </div>
            <div class="grid grid-cols-1 justify-center flex flex-col ml-8 ">
                <p class="ml-16">(9) <FiLLBox checked /> กรณีไถ่ตอนจำนองให้แจ้งหนี้ค้างหรือมีเอกสารแสดงจำนวนนี้ที่ค้างชำระและสำเนาสัญญาจำนอง </p>
            </div>
            <div class="grid grid-cols-1 justify-center flex flex-col ml-8 ">
                <p class="ml-16">(10) <FiLLBox /> อื่น ๆ <BlankSpace class="min-w-60" /></p>
            </div>
            <p class="ml-12"> ข้อ 3. ข้าพเจ้ามีความประสงค์จะขอกู้เงินพิเศษของสหกรณ์จำนวน <FiLL :data="data?.salary" class="min-w-20" /> บาท</p>
            <p> ( <MoneyText :data="data?.monthlyIncome"/> )
                ถ้าข้าพเจ้าได้รับเงินกู้พิเศษ ข้าพเจ้าขอส่งคืนต้นเงินกู้เป็นรายเดือนเท่านั้นงวดละ <FiLL :data="data?.stockValue" class="min-w-24" /> บาท
                (เว้นแต่งวดสุดท้าย) พร้อมดอกเบี้ยตามที่สทกรณ์กำหนดเป็นจำนวน <FiLL :data="data?.nb" class="min-w-20" /> งวด ตั้งแต่เดือนที่สหกรณ์ฯ จ่ายเงินกู้ให้ (ไม่เกิน 380 งวด)</p>
            <p class="mt-4 ml-12">ข้อ 4. นอกจากการค้ำประกันด้วยเงินค่าหุ้น ซึ่งข้พเจ้ามือยู่ในสหกรณ์และเงินสิทธิเรียกร้องจากสหกรณ์ฯ แล้ว </p>
            <p>ข้าพเจ้า ขอเสนอหลักประกันในการขอกู้เงินพิเศษดังนี้อีกคือ</p>
            <div class="grid grid-cols-1 justify-center flex flex-col ml-8 ">
            <p class=" ml-16">(1) <FiLLBox checked /> ที่ดินอันปลอดภาระจำนองรายอื่น เพื่อจำนองเป็นประกัน</p>
            
            </div>
            
        </div>
       
        
      
        </PaperDoc>

        <MorePaperDoc> <!-- หน้า 2 -->
            
            <div class="grid grid-cols-1 justify-center flex flex-col ml-8 mt-4">
            
            <p class=" ml-16">(2) <FiLLBox checked /> ที่ดินพร้อมสิ่งปถูกสร้างบนที่ดิน (แนบหลักฐานที่ดินและสำเนาทะเบียนบ้าน)</p>
            <p class=" ml-16">(3) <FiLLBox checked /> พันธบัตรรัฐบาล หรือเงินฝากในสหกรณ์ (ต้องแนบสำเนาเอกสารดังกล่าวด้วย)</p>
            <p class=" ml-16">(4) <FiLLBox checked /> บุคคลค้ำประกัน</p>
            </div>
            <p><span class="ml-20">(ก) ชื่อ </span><FiLL class="min-w-80" :data="`${data?.fNameGuarantor1}  ${data?.lNameGuarantor1}`"/> สมาชิกเลขทะเบียน <FiLL :data="data?.memberGuarantor1" class="min-w-40" /></p>
            <p>ตำแหน่ง <FiLL :data="data?.positionGuarantor1" class="min-w-40" /> สังกัด <FiLL :data="data?.affiliation" class="min-w-52" /> กลุ่มงาน <FiLL :data="data?.workGroup1" class="min-w-52" /></p>
            <p>อำเภอ <FiLL :data="data?.district" class="min-w-52" /> จังหวัดศรีสะเกษ เงินได้รายเดือน <FiLL :data="data?.salaryGuarantor1" class="min-w-48" /> บาท</p>
            <p class="mt-2">ลายมือชื่อผู้ค้ำประกัน <BlankSpace class="min-w-60" /></p>

            <p><span class="ml-20">(ข) ชื่อ </span><FiLL class="min-w-80" :data="`${data?.fNameGuarantor2}  ${data?.lNameGuarantor2}`"/> สมาชิกเลขทะเบียน <FiLL :data="data?.memberGuarantor2" class="min-w-40" /></p>
            <p>ตำแหน่ง <FiLL :data="data?.positionGuarantor2" class="min-w-40" /> สังกัด <FiLL :data="data?.affiliation" class="min-w-52" /> กลุ่มงาน <FiLL :data="data?.workGroup2" class="min-w-52" /></p>
            <p>อำเภอ <FiLL :data="data?.district" class="min-w-52" /> จังหวัดศรีสะเกษ เงินได้รายเดือน <FiLL :data="data?.salaryGuarantor2" class="min-w-48" /> บาท</p>
            <p class="mt-2">ลายมือชื่อผู้ค้ำประกัน <BlankSpace class="min-w-60" /></p>

            <p class="mt-2"><span class="ml-12">ข้อ 5. </span> ข้าพเจ้าขอรับรองว่า ข้อความข้างตันเป็นความจริงทุกประการ และข้าพเจ้าจะให้ความร่วมมือแก่คณะกรรมการ
                ดำเนินการหรือบุคคลที่สหกรณ์มอบหมายให้ตรวจสอบ และทำรายงานเกี่ยวกับคำขอกู้เงินพิเศษรายนี้</p>
            <p><span class="ml-12">ข้อ 6. </span> ในการรับเงินกู้พิเศษ ข้พเจ้ายินดีที่จะทำหนังสือสัญญาวัเงินพิเศษให้ไว้ต่อสพกรณ์ตามแบบที่สหกรณ์ฯ กำหนด</p>  
            <p class="ml-12"> ข้อ 7. เมื่อได้รับเงินกู้พิเศษรายนี้ข้พเจ้าประสงค์จะให้</p>
            <div class="grid grid-cols-1 justify-center flex flex-col ml-8 ">
            <p class=" ml-16">(1) <FiLLBox :checked="data?.nbAccount"/> สหกรณ์นำเข้าฝากในบัญชีเงินฝากออมทรัพย์เลขที่ <FiLL :data="data?.nbAccount" class="min-w-52" /></p>
            <p class=" ml-16">(2) <FiLLBox /> อื่นๆ (ระบุพร้อมเหตุผล) <BlankSpace class="min-w-60" /></p>
            </div>

            <p><span class="ml-12">ข้อ 8. </span> ในการกู้เงินตามคำขอกู้นี้ข้าพเจ้าได้รับความยินยอมจากคู่สมรสซึ่งได้ลงลายมือชื่อไว้เป็นหลักฐานด้านหลังคำขอกู้นี้แล้ว</p>  
           
            <div class="flex flex-col items-end mt-20">
                <span>ลงชื่อ <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/> ผู้ขอกู้</span>
            </div>
            
            <hr class="mt-12 my-4 border-b-2 border-black">

            <div class="mt-4"> 
                <div class="text-xl text-center font-bold">
                    <p>คำยินยอมของคู่สมรส</p>
                </div>
            </div>  
            <div class="grid grid-cols-2">
                <div></div>
                <div class="text-start">
                    <p class="mt-6">เขียนที่ <FiLL :data="data?.location"   /></p>
                    <p class="mt-2">วันที่ <FiLL  class="text-base" :data="data?.dateReceived"date-format="full"  /></p>
                </div>
            </div> 
            <p class="mt-2"><span class="ml-16 "> ข้าพเจ้า นาย/นาง <FiLL class="min-w-56" :data="`${data?.prefixMrs} ${data?.newfName}  ${data?.lName}`"/> เป็นคู่สมรสของ นาย/นาง <FiLL class="min-w-52" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> </span> ได้ให้คำยินยอมแก่ นาย/นาง <FiLL class="min-w-60" :data="`${data?.prefix} ${data?.fName}  ${data?.lName}`"/> ซึ่งเป็นสามี/ภรรยา ของข้าพเจ้า ทำการกู้เงินพิเศษของ
                สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด ตามคำขอกู้ดังกล่าวแล้วครั้งนี้ได้
            </p>
            <div class="grid grid-cols-2 justify-center">
            <div class="flex items-start">
            </div>
            
            <div class="flex flex-col items-end">
                <p class="mt-10 ">
                        <span class="mr-10">
                            ลงชื่อ<BlankSpace class="min-w-56" />คู่สมรส
                        </span>
                    </p>
                    <p class="mr-20 text-center">
                        (<FiLL class="min-w-56" :data="`${data?.newfName}  ${data?.lName}`"/>)
                    </p>
                    <p class="mt-6 ">
                        <span class="mr-10">
                            ลงชื่อ<BlankSpace class="min-w-56" />พยาน
                        </span>
                    </p>
                    <p class="mr-20 text-center">(<FiLL class="min-w-56" :data="`${data?.fNameWitness1}  ${data?.lNameWitness1}`"/>)</p>

                    <span class="mt-6 ">
                        <span class="mr-10">
                            ลงชื่อ<BlankSpace class="min-w-56" />พยาน
                        </span>
                    </span>
                    <p class="mr-20 text-center">(<FiLL class="min-w-56" :data="`${data?.fNameWitness2}  ${data?.lNameWitness2}`"/>)</p>
            </div>
            </div>
               

            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 3 -->
            <div class="mt-4"> 
                <div class="text-xl text-center font-bold underline">
                    <p>คำรับรองของผู้บังคับบัญชา</p>
                </div>
            </div>  
            <p class="mt-2"><span class="ml-12">ข้าพเจ้า </span><FiLL class="min-w-80" :data="`${data?.fNameCommander}  ${data?.lNameCommander}`"/>  ตำแหน่ง <FiLL :data="data?.positionCommander" class="min-w-60" /> </p>
            <p>สังกัด <FiLL :data="data?.affiliation" class="min-w-80" /> อำเภอ <FiLL :data="data?.district" class="min-w-52" />จังหวัด ศรีสะเกษ</p>
            <p>ขอรับรองว่าตามที่ <FiLL class="min-w-56" :data="`${data?.fName}  ${data?.lName}`"/> รับราชการหรือทำงานประจำในตำแหน่ง <FiLL :data="data?.position" class="min-w-44" /> </p>
            <p>สังกัด <FiLL :data="data?.affiliation" class="min-w-80" /> ได้รับเงินได้รายเดือน <FiLL :data="data?.salary" class="min-w-48" /> บาท</p>
            <p>ขอกู้เงินจากสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด ตามคำขอกู้ข้างต้นจำนวนเงิน <FiLL :data="data?.salary" class="min-w-32" /> บาท</p>
            <p>( <MoneyText :data="data?.monthlyIncome"/> ) นั้น ข้าพเจ้าทราบและได้สอบถามผู้ขอกู้แล้ว เห็นว่ามีความจำเป็นจริงควรให้กู้ตามความประสงค์</p>
            <p class="ml-12">เพื่อเป็นหลักฐานจึงลงลายมือชื่อไว้เป็นหลักฐาน</p>
            <div class="flex flex-col items-end">
                <p class="mt-14 ">
                        <span class="mr-10">
                            ลงชื่อ<BlankSpace class="min-w-56" />ผู้รับรอง
                        </span>
                    </p>
                    <p class="mr-20 text-center">
                        ( <FiLL class="min-w-56" :data="`${data?.fNameCommander}  ${data?.lNameCommander}`"/> ) 
                    </p>
            </div>  
            <hr class="mt-12 my-4 border-b-2 border-black">
            <div class="mt-4"> 
                <div class="text-xl text-center font-bold underline">
                    <p>บันทึกของพนักงานสหกรณ์</p>
                </div>
            </div> 
            <div class="ml-12 mt-4">
            <p >1. ผู้กู้รายนี้เป็นสมาชิกสหกรณ์ติดต่อกันมาจนถึงวันยื่นคำขอกู้เป็นเวลา <FiLL :data="data?.loanOnDay" class="min-w-24" /> ปี <FiLL :data="data?.loanOnDay" class="min-w-24" /> เดือน</p>
            <p>2. ปัจจุบันผู้กู้ส่งหุ้นรายเดือนๆ ละ <FiLL :data="data?.stockValue" class="min-w-28" />บาท รวมมีหุ้นอยู่ในสหกรณ์ทั้งสิ้น <FiLL :data="data?.salary" class="min-w-32" />บาท</p>
            <p>3. ผู้ขอกู้มีหนี้อยู่ในสหกรณ์ในวันสิ้นเดือน <FiLL :data="data?.loanOnMonth" class="min-w-24" />พ.ศ.<FiLL :data="data?.loanOnYear" class="min-w-28" /> จำนวน <FiLL :data="data?.stockValue" class="min-w-28" />บาท</p>
            <p>4. ผู้ขอกู้เคยผิดนัดการส่งเงินงวดชำระหนี้หรือไม่อย่างไร <FiLLBox checked /> ไม่เคย <FiLLBox/> เคย <BlankSpace class="min-w-32" />งวด</p>
            <p>5. ข้อชี้แจงอื่นๆ (เงินได้รายเดือนของผู้กู้และคู่สมรส, ควรให้กู้เท่าใด, ต้องใช้หลักประกันอย่างไรบ้าง เป็นต้น) </p>
            </div>
            <div class="flex flex-col items-end">
                <p class="mt-14 ">
                        <span class="mr-20">
                            ลงชื่อ <FiLL class="min-w-56" :data="`${data?.officerFName}  ${data?.officerLName}`"/>  พนักงานสหกรณ์
                        </span>
                    </p>
                    <p class="mr-52 text-center">
                        <FiLL  class="text-base" :data="data?.dateReceived"date-format="full"  />
                    </p>
            </div>  
            
            <hr class="mt-12 my-4 border-b-2 border-black">

            <div class="mt-4"> 
                <div class="text-xl text-center font-bold underline">
                    <p>บันทึกการพิจารณาของคณะกรรมการดำเนินการ</p>
                </div>
            </div>
            <p class="ml-12 mt-4">ในการประชุมคณะกรรมการประจำเดือนครั้งที่ <FiLL :data="data?.noMeeting" class="min-w-24" /> เมื่อวันที่ <FiLL class="min-w-12" :data="`${data?.loanOnDay}`"/> เดือน<FiLL class="min-w-20" :data="`  ${data?.loanOnMonth}`"/> พ.ศ.<FiLL class="min-w-16" :data="`${data?.loanOnYear}`"/></p>
            <p>มีคณะกรรมการเข้าร่วมพิจารณาคำขอกู้พิเศษรายนี้จำนวน<FiLL :data="data?.numberBoard" class="min-w-12" /> คนที่ประชุมลงมติให้กู้โดยคะแนนเสียง<FiLL :data="data?.numberBoardYes" class="min-w-12" /> ต่อ</p>
            <p><FiLL :data="data?.numberBoardNo" class="min-w-12" />จึงเป็นอันว่า <FiLL :data="data?.summaryLoan" class="min-w-80" /></p>
           
            <div class="flex flex-col items-end">
                <p class="mt-14 ">
                    <span class="mr-20">
                        ลงชื่อ <FiLL class="min-w-56" :data="`${data?.fNameSecretary}  ${data?.lNameSecretary}`"/> เลขานุการ
                    </span>
                </p>
                <p class="mr-48 text-center">
                    <FiLL  class="text-base" :data="data?.dateReceived"date-format="full"  />
                </p>
            </div> 
            
        </MorePaperDoc>
        <MorePaperDoc> <!-- หน้า 4 -->
            <div class="mt-4"> 
                <div class="text-xl text-center font-bold underline">
                    <p>แผนที่พอสังเขปที่ดิน และทางไปที่ดินที่ทำเป็นหลักประกัน</p>
                </div>
            </div>  

  <div class="flex justify-center items-center h-full">
    <div class="grid grid-cols-1 grid-rows-1 w-full h-full  border border-b-2 border-black mt-2">
      <!-- Content Here -->&nbsp;
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