<template>
    <main>
        <PaperDoc>
            <div class="font-bold text-md mt-2 px-8 text-gray-100 bg-gray-800 dark:bg-gray-700 dark:text-white">ใบถอนเงินฝากออมทรัพย์พิเศษ SPECIAL SAVINGS WITHDRAWAL SLIP
               </div>
            <div class="flex justify-end mt-3 text-gray-900 dark:text-gray-900">
                <p class="px-4 ">สหกรณ์ออมทรัพย์ </p> <FiLL :data="data?.location" class="underline underline-offset-4 text-base " no-line /> 
                <p class="px-4">จำกัด</p>
               
            </div>
            <hr class="my-2 border-b-2 border-black">
            <div class="grid grid-cols-2 dark:text-gray-900">
                <div class="text-sm">
                    <p>สำนักงาน</p>
                    <p>Office</p>
                    <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">
                    <p>วันที่</p>
                    <p>Date</p>
                </div>
            </div>

            <div class="">
                <table class="w-full text-xs text-left text-gray-500 dark:text-gray-400 border border-black">
                    <tbody>
                        <tr class=" bg-gray-300 dark:bg-gray-400 dark:text-gray-400 ">
                            <td scope="row"
                                colspan="4"
                                class="px-6 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                                <div class="flex">
                                ชื่อบัญชี Account Name
                                <p class="ml-2">
                                <FiLL class="min-w-56" :data="`${data?.fName}  ${data?.lName}`"/>
                                </p>
                            </div>
                            </td>
                            <td scope="row"
                                colspan="3"
                                class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                                <div class="flex">
                                    เลขที่บัญชี Account No.
                                    <p class="ml-8">
                                        6895420004
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-white ">
                            <td scope="row"
                                rowspan="1"
                                colspan="3"
                                class="text-xs font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                                <p> จำนวนเงินที่ถอนเป็นตัวอักษร Withdrewal Amount in Words </p>
                                <p class="flex justify-center">
                                    <MoneyText :data="data?.monthlyIncome" />
                                </p>
                            </td>
                            <td scope="row"
                                class="py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                                <p class="ml-8"> บาท </p>
                                <p class="ml-8"> Baht </p>
                            </td>
                            <td scope="row"
                                colspan=""
                                class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                                <p> จำนวนเงินที่ถอน Withdrewal Amount</p>
                                <p class="flex justify-center">
                                    <FiLL :data="data?.salary"
                                          class="min-w-36" />
                                </p>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-white ">
                            <td scope="row"
                                colspan=""
                                class="py-1 pb-6 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                                ลายมือชื่อเจ้าของบัญชี Account Holder's Signature
                            </td>
                            <td scope="row"
                                colspan="4"
                                class="py-1 pb-6 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                                <p>ลายมือชื่อ ผู้รับเงิน (ผู้รับมอบฉันทะ)</p>
                                <p>Receiver's Signature (Nominee)</p>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-white ">
                            <td scope="row"
                                colspan="4"
                                class="py-1 pb-6 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                                สำหรับเจ้าหน้าที่
                            </td>
                            <td scope="row"
                                colspan=""
                                class="py-1 pb-6 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                                ลายมือชื่อเจ้าหน้าที่ Authorized Signature
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </PaperDoc>
        <MorePaperDoc>
            <p class="font-bold text-xl text-center col-span-2">ใบมอบฉันทะ</p>
      <div class="flex flex-col items-end mt-3 mb-6">
        <p>วันที่............................................................</p>        
      </div>     
      <div class="flex flex-col">
        <p>
          ข้าพเจ้า....................................................................................เจ้าของบัญชีเลขที่..................................................................................
        </p>
        <p>
            ขอมอบฉันทะให้...................................................<FiLLBox /> บัตรประจำตัวประชาชน  <FiLLBox />บัตรข้าราชการ เลขที่...................................................
        </p>
        <p>
            ออกโดย.......................................................................วันที่ออก..................................................................วันหมดอายุ...................................
        </p>
        <p>
            ที่อยู่ เลขที...............................ถนน........................ตำบล/แขวง...........................อำเภอ/เขต....................จังหวัด..................................
        </p>
        <p>เป็นผู้รับเงินจำนวนที่ขอถอน และรับสมุดคู่ฝากของข้าพเจ้าคืนจากสหกรณ์ฯ และในการนี้ข้าพเจ้าเป็นผู้รับผิดชอบเสมือนหนึ่งข้าพเจ้าได้กระทำด้วยตนเองทั้งสิ้น</p>
        <div class="mt-16 flex justify-center gap-4 pl-80">
            <div>
                <p class="text-base text-center">...................................................</p>
                <p class="text-base text-center">ลายมือชื่อเจ้าของบัญชี</p>
            </div>
            <div>
                <p class="text-base text-center">...................................................</p>
                <p class="text-base text-center">ลายมือชื่อผู้รับมอบฉันทะ</p>
                <p class="text-base text-center">(ต้องเซ็นต่อหน้าเจ้าของบัญชี)</p>
            </div>
        </div>

      </div>    
        </MorePaperDoc>


    </main>
</template>

<script setup
        lang="ts">
        import Index from '../index.vue';

        const { data } = await useFetch<any>('/api/group2');
</script>