<template>
    <main>
        <PaperDoc> <!-- หน้า 1 -->
            <div class="mt-10">
                <div class="text-xl text-center font-bold">
                    <p>สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษจำกัด</p>
                    <p>แบบคำขอปรับโครงสร้างหนี้</p>
                </div>
                <div class="grid grid-cols-2">
                    <div></div>
                    <div class="text-start">
                        <p class="mt-6">เขียนที่ <FiLL :data="data?.location"  /></p>
                        <p class="mt-2">วันที่ <FiLL  class="text-base" :data="data?.dateReceived"date-format="full" no-line /></p>
                    </div>
                    
                </div>
                <p class="text-left mt-6">เรียน คณะกรรมการดำเนินการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                <div> 
                    <p><span class="ml-20">ข้าพเจ้า</span> <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/> สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-32" /> อายุ <FiLL :data="data?.age" class="min-w-24" /> ปี</p>
                    <p>ตำแหน่ง <FiLL :data="data?.position" class="min-w-44" /> เงินเดือน <FiLL :data="data?.salary" class="min-w-28" /> บาท สังกัด <FiLL :data="data?.affiliation" class="min-w-60" /></p>
                    <p>อยู่บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-20" /> ถนน <FiLL :data="data?.road" class="min-w-28" /> ตำบล/แขวง <FiLL :data="data?.district" class="min-w-32" /> อำเภอ/เขต <FiLL :data="data?.district" class="min-w-28" /></p>
                    <p>จังหวัด <FiLL :data="data?.province" class="min-w-36" /> โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-36" /></p>
                </div>
                
                <p>ขอเรียนคณะกรรมการฯ ดังนี้</p>
                <p>ข้อ 1. ข้าพเจ้าได้กู้เงินตามหนังสือเงินกู้สามัญ/พิเศษเลขที่ <FiLL :data="data?.loanbook" class="min-w-36" /> เมื่อวันที่ <FiLL class="min-w-40" :data="`${data?.loanOnDay}  ${data?.loanOnMonth}  ${data?.loanOnYear}`"/></p>
                <p>จำนวนเงิน <FiLL :data="data?.salary" class="min-w-36" /> บาท ( <MoneyText :data="data?.salary" class="min-w-80" /> ) กำหนดชำระต้นเงินกู้</p>
                <p>และดอกเบี้ยงวดรายเดือนทุกเดือนงวดละ <FiLL :data="data?.oldDebtEachInstallment" class="min-w-24" /> บาท รวม <FiLL :data="data?.nb" class="min-w-20" /> งวด</p>
                <p>ข้อ 2. ข้าพเจ้าไม่สามารถชำระหนี้ได้ตามสัญญาเนื่องจาก <FiLL :data="data?.unablePayDebtDueTo" class="min-w-60" /></p>
                <p>ข้อ 3. ข้าพเจ้าได้แนบเอกสารหลักฐานที่แสดงให้เห็นว่ามีเหตุจำเป็นได้แก่ <FiLL :data="data?.evidenceReason" class="min-w-60" /></p>
                <p>ข้อ 4. ข้าพเจ้าจึงขอปรับโครงสร้างหนี้ดังนี้ <FiLL :data="data?.requestDebtRestructuring" class="min-w-72" /></p>
                <p class="ml-32 mt-4">จึงเรียนมาเพื่อโปรดพิจารณา</p>
                <div class="grid grid-cols-2 mt-6">
                    <div></div>
                    <div class="text-center">
                        <p>ขอแสงความนับถือ</p>
                        <p class="mt-4"><BlankSpace class="min-w-44" /></p>
                        <p>( <FiLL class="min-w-44" :data="`${data?.fName}  ${data?.lName}`"/> )</p>
                        <p>สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-28" /></p>
                    </div>
                </div>
            </div>
        </PaperDoc>

        <MorePaperDoc> <!-- หน้า 2 -->
            <div class="mt-10">
                <div class="text-xl text-center font-bold">
                    <p>สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                    <p>หนังสือปรับโครงสร้างหนี้</p>
                </div>
                <div class="grid grid-cols-2">
                    <div></div>
                    <div class="text-start">
                        <p class="mt-6">เขียนที่ <FiLL :data="data?.location"  /></p>
                        <p class="mt-2 mb-2">วันที่ <FiLL  class="text-base" :data="data?.dateReceived"date-format="full" no-line /></p>
                    </div>
                </div>
                <div> 
                    <p><span class="ml-20">ข้าพเจ้า</span> <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/> สมาชิกเลขที่ <FiLL :data="data?.member" class="min-w-32" /> อายุ <FiLL :data="data?.age" class="min-w-24" /> ปี</p>
                    <p>ตำแหน่ง <FiLL :data="data?.position" class="min-w-44" /> สังกัด <FiLL :data="data?.affiliation" class="min-w-60" /></p>
                    <p>เลขประจำตัวประชาชน <FiLL :data="data?.idcard" class="min-w-44" /></p>
                    <p>อยู่บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-20" /> ถนน <FiLL :data="data?.road" class="min-w-28" /> ตำบล/แขวง <FiLL :data="data?.district" class="min-w-32" /> อำเภอ/เขต <FiLL :data="data?.district" class="min-w-28" /></p>
                    <p>จังหวัด <FiLL :data="data?.province" class="min-w-36" /> โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-80" /></p>
                </div>
                
                <p>ข้าพเจ้าได้กู้เงินจากสหกรณ์ตามสัญญาเงินกู้ <FiLL :data="data?.loanContract" class="min-w-16" /> เลขที่ <FiLL :data="data?.loanbook" class="min-w-28" /> ลงวันที่ <FiLL class="min-w-40" :data="`${data?.loanOnDay}  ${data?.loanOnMonth}  ${data?.loanOnYear}`"/></p>
                <p>
                    จำนวนเงินกู้ <FiLL :data="data?.salary" class="min-w-36" /> บาท ( <MoneyText :data="data?.monthlyIncome" /> ) กำหนดชำระคืนต้นเงินกู้พร้อมดอกเบี้ยในอัตราร้อยละ
                    <FiLL :data="data?.oldInterestRate" class="min-w-16" /> ต่อปีส่งชำระแบบ <FiLL :data="data?.sentPayMent" class="min-w-24" /> งวดละ <FiLL :data="data?.oldDebtEachInstallment" class="min-w-28" /> บาทรวม <FiLL :data="data?.nb" class="min-w-20" /> งวด
                    ตั้งแต่เดือน <FiLL :data="data?.loanOnMonth" class="min-w-32" /> เป็นต้นมาแต่บัดนี้ข้าพเจ้ามีเหตุจำเป็นไม่สามารถชำระหนี้ให้แก่สหกรณ์ได้ตามกำหนด จึงขอทำหนังสือปรับโครงสร้างหนี้ไว้ต่อสหกรณ์ดังต่อไปนี้
                </p>
                
                
                <p>
                    ข้อ 1. ข้าพเจ้าสัญญาว่าจะชำระหนี้คืนเงินกู้ให้แก่สหกรณ์เป็นจำนวน <FiLL :data="data?.salary" class="min-w-36" /> บาท ( <MoneyText :data="data?.salary" /> )
                    พร้อมดอกเบี้ยในอัตราร้อยละ <FiLL :data="data?.newInterestRate" class="min-w-16" /> ต่อปีส่งชำระแบบ <FiLL :data="data?.sentPayMent" class="min-w-16" /> 
                    งวดละ <FiLL :data="data?.newDebtEachInstallment" class="min-w-24" /> บาท รวม <FiLL :data="data?.newInstallments" class="min-w-24" /> งวดตั้งแต่เดือน <FiLL :data="data?.mount" class="min-w-36" /> จนกว่าจะชำระหนี้เสร็จสิ้น
                </p>
                <p>
                    ข้อ 2. หากข้าพเจ้าผิดสัญญาตามข้อ 1. ข้าพเจ้ายินยอมให้ถือว่าเงินกู้นี้เป็นอันถึงกำหนดชำระคืนโดยสิ้นเชิง
                    ถ้าข้าพเจ้าไม่จัดการชำระหนี้ให้เสร็จสิ้นตามวรรคก่อนข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินเดือน เงินบำนาญ
                    เงินบำเหน็จ เงินกองทุนบำเหน็จบำนาญข้าราชการ เงินกองทุนสำรองเลี้ยงชีพ เงินค่าหุ้น เงินปันผลเงินเฉลี่ยคืนหรือเงินอื่น
                    ใดที่หน่วยงานต้นสังกัดและสหกรณ์จะพึงจ่ายให้แก่ข้าพเจ้าหักเงินดังกล่าวชำระหนี้ต่อสหกรณ์ให้เสร็จสิ้นได้ทันที
                </p>

                <div class="ml-10 item-center">
                    <p class="mt-4">ข้าพเจ้าได้อ่านและเข้าใจหนังสือนี้โดยตลอดแล้วจึงลงลายมือชื่อไว้เป็นหลักฐาน</p>
                    <div class="ml-10">
                        <p class="mt-2 ml-40">
                            <span class="ml-16">
                                ลงชื่อ<BlankSpace class="min-w-56" />สมาชิกผู้กู้
                            </span>
                        </p>
                        <p class="ml-40">
                            <span class="ml-24">(<FiLL class="min-w-56" :data="`${data?.fName}  ${data?.lName}`"/>)</span>
                        </p>
                        <p class="mt-2 ml-40">
                            <span class="ml-16">
                                ลงชื่อ<BlankSpace class="min-w-56" />พยาน/คู่สมรส
                            </span>
                        </p>
                        <p class="ml-40">
                            <span class="ml-24">(<FiLL class="min-w-56" :data="`${data?.newfName}  ${data?.lName}`"/>)</span>
                        </p>
                    </div>
                </div>
                <div>
                    <p class="font-bold mt-2 mb-2">เจ้าของหลักทรัพย์ค้ำประกันลงนามรับทราบการปรับโครงสร้างหนี้ จำนวน 1 คน</p>
                        1.ข้าพเจ้า(ลงชื่อ) <BlankSpace class="min-w-32" /> รับทราบการปรับโครงสร้างหนี้   (ลงชื่อ) <BlankSpace class="min-w-32" /> คู่สมรสผู้ค้ำประกัน
                        <p class="mt-2"><span class="ml-16">(<FiLL class="min-w-56" :data="`${data?.fOwnerCollateral1}  ${data?.lOwnerCollateral1}`"/>)</span> <span class="ml-32">(<FiLL class="min-w-56" :data="`${data?.fMarryOwnerCollateral1}  ${data?.lMarryOwnerCollateral1}`"/>)</span></p>
                            
                    <div class="grid grid-cols-2 mt-4">
                        <div class="mt-4">
                            <p class="ml-12">(ลงชื่อ) <BlankSpace class="min-w-40" /> พยาน(ผู้จัดการ)</p>
                            <p class="ml-16 mt-2">( <FiLL class="min-w-56" :data="`${data?.fNameManager}  ${data?.lNameManager}`"/> )</p>
                        </div>

                        <div class="mt-4">
                            <p class="ml-12">(ลงชื่อ) <BlankSpace class="min-w-40" /> พยาน(เจ้าหน้าที่)</p>
                            <p class="ml-16 mt-2">( <FiLL class="min-w-56" :data="`${data?.officerFName}  ${data?.officerLName}`"/> )</p>
                        </div>
                    </div>
                </div>
            </div>
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้าที่ 3 -->
            <div class="mt-10">
                <div class="text-xl text-center">
                    <p class="font-bold">บันทึกแนบท้ายสัญญาเงินกู้สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                </div>
                <div class="grid grid-cols-2">
                    <div></div>
                    <div class="text-start">
                        <p class="mt-6">เขียนที่ สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                        <p class="mt-2 mb-6">วันที่ <FiLL  class="text-base" :data="data?.dateReceived"date-format="full" no-line /></p>
                    </div>
                </div>
                <p>เรื่อง <span class="ml-6">การขอปรับโครงสร้างหนี้เงินกู้พิเศษ</span></p>
                <p class="mt-4 mb-4">เรียน <span class="ml-6">คณะกรรมการดำเนินการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span></p>
                <div> 
                    <p><span class="ml-20">ข้าพเจ้า</span> <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/> สมาชิกสหกรณ์เลขที่ <FiLL :data="data?.member" class="min-w-24" /> อายุ <FiLL :data="data?.age" class="min-w-20" /> ปี</p>
                    <p>ตำแหน่ง <FiLL :data="data?.position" class="min-w-32" /> ขอปรับโครงสร้างหนี้โดยขอขยายงวดการผ่อนชำระเงินกู้ <FiLLBox checked /> เงินกู้สามัญ <FiLLBox /> เงินกู้พิเศษ</p>
                    <p>
                        สัญญาเลขที่ <FiLL :data="data?.loanbook" class="min-w-36" /> ลงวันที่ <FiLL  class="text-base min-w-40" :data="data?.dateReceived"date-format="full" /> ชำระมาแล้ว <FiLL :data="data?.paidInstallments" class="min-w-12" /> งวด คงเหลือ <FiLL :data="`${data?.nb - data?.paidInstallments}`" class="min-w-16" /> งวด 
                        จากเดิมในสัญญาดังกล่าวต้องผ่อนชำระให้เสร็จภายใน <FiLL :data="data?.nb" class="min-w-16" /> งวด
                    </p>
                    <p><span class="ml-20">ข้าพเจ้า</span>ขอปรับโครงสร้างหนี้โดยขยายงวดการผ่อนชำระเงินต้นรายเดือนทุกเดือน  งวดละ <FiLL :data="data?.newDebtEachInstallment" class="min-w-20" /> บาท 
                        เป็นจำนวน <FiLL :data="data?.newInstallments" class="min-w-20" /> งวด โดยที่คู่สมรสของข้าพเจ้า(ถ้ามี) ผู้ค้ำประกันในสัญญาเงินกู้เลขที่ <FiLL :data="data?.loanbook" class="min-w-20" /> ลงวันที่
                        <FiLL  class="text-base" :data="data?.dateReceived"date-format="full" />
                        ยินยอมให้ข้าพเจ้าปรับโครงสร้างหนี้โดยขยายงวดผ่อนชำระหนี้เงินกู้ในสัญญาดังกล่าว
                    </p>
                    <div class="grid grid-cols-2 mt-6">
                        <div class="mt-4">
                            <p class="ml-12">(ลงชื่อ) <BlankSpace class="min-w-40" /> สมาชิกผู้กู้</p>
                            <p class="ml-16 mt-2">( <FiLL class="min-w-56" :data="`${data?.fName}  ${data?.lName}`"/> )</p>
                        </div>

                        <div class="mt-4">
                            <p class="ml-12">(ลงชื่อ) <BlankSpace class="min-w-40" /> คู่สมรสสมาชิก</p>
                            <p class="ml-16 mt-2">( <FiLL class="min-w-56" :data="`${data?.newfName}  ${data?.lName}`"/> )</p>
                        </div>
                    </div>
                    <p class="mt-2 mb-4 font-bold">หลักทรัพคํ้าประกัน</p>

                    <LineFiLL :data="data?.collateral" :limit="3">
                        <template #data="{ index, item }">
                            <p class="text-start"> <FiLL :data="index" number no-line normal />.
                                <FiLL :data="item.collateral" class="min-w-80" />
                            </p>
                        </template>
                        <template #default="{ index }">
                            <p class="text-start mt-2"> <FiLL :data="index" number no-line normal />.
                                <BlankSpace class="min-w-80" />
                            </p>
                        </template>
                        </LineFiLL>

                    <p class="mb-4 mt-2"><span class="font-bold">เจ้าของหลักทรัพย์ค้ำประกันลงนามรับทราบการปรับโครงสร้างหนี้</span> จำนวน <FiLL :data="data?.numberPeople" class="min-w-20" /> คน</p>
                    1.ข้าพเจ้า(ลงชื่อ) <BlankSpace class="min-w-32" /> รับทราบการปรับโครงสร้างหนี้   (ลงชื่อ) <BlankSpace class="min-w-32" /> คู่สมรสผู้ค้ำประกัน
                    <p class="mt-2 mb-2"><span class="ml-16">( <FiLL class="min-w-56" :data="`${data?.fOwnerCollateral1}  ${data?.lOwnerCollateral1}`"/> )</span> <span class="ml-32">( <FiLL class="min-w-56" :data="`${data?.fMarryOwnerCollateral1}  ${data?.lMarryOwnerCollateral1}`"/> )</span></p>
                    2.ข้าพเจ้า(ลงชื่อ) <BlankSpace class="min-w-32" /> รับทราบการปรับโครงสร้างหนี้   (ลงชื่อ) <BlankSpace class="min-w-32" /> คู่สมรสผู้ค้ำประกัน
                    <p class="mt-2"><span class="ml-16">( <FiLL class="min-w-56" :data="`${data?.fOwnerCollateral2}  ${data?.lOwnerCollateral2}`"/> )</span> <span class="ml-32">( <FiLL class="min-w-56" :data="`${data?.fMarryOwnerCollateral2}  ${data?.lMarryOwnerCollateral2}`"/> )</span></p>
                    <div class="mt-10">
                        <p class="mt-2 ml-40">
                            <span class="ml-14">
                                (ลงชื่อ)<BlankSpace class="min-w-56" />พยาน(ผู้จัดการ/ผู้ช่วยฯ/กรรมการเงินกู้)
                            </span>
                        </p>
                        <p class="mt-2 ml-40">
                            <span class="ml-24">( <FiLL class="min-w-56" :data="`${data?.fNameManager}  ${data?.lNameManager}`"/> )</span>
                        </p>
                        <p class="mt-2 ml-40">
                            <span class="ml-14">
                                (ลงชื่อ)<BlankSpace class="min-w-56" />พยาน(เจ้าหน้าที่)
                            </span>
                        </p>
                        <p class="mt-2 ml-40">
                            <span class="ml-24">( <FiLL class="min-w-56" :data="`${data?.officerFName}  ${data?.officerLName}`"/> )</span>
                        </p>
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