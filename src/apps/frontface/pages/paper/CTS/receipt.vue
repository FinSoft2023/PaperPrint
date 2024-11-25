<template>
    <main>
        <PaperDoc>
          <div class="grid grid-cols-7 grid-rows-2 justify-center h-10">
              <div class="flex-col items-center row-span-2 ">
                <img class="w-[90px] h-auto"
                  src="https://www.saving-sskh.com/images/logo-saving.png"
                  alt="Logo" />
                  
              </div>
            
            <diV class="text-md font-md text-center  col-span-2" >
                <p class="flex justify-start font-bold">ศูนย์ตรวจสอบเทคนิคยานยนต์</p>
                <p class="flex justify-start font-bold">TECHICAL INSPECTION</p>
            </diV>

            <diV class="text-md font-md text-center  col-span-2" >
                
            </diV>

            <diV class="text-md font-md text-center  col-span-2" >
                <p class="flex justify-start">เลขที่: <FiLL :data="data?.number" no-line /> </p>
                <p class="flex justify-start">วันที่: <FiLL :data="data?.dayMonthYear" no-line /></p>
            </diV>
          </div>
          <div class="grid grid-cols-3 grid-rows-2 justify-center h-16">
              <div class="items-start mt-6 w-50">
                <div>
                 
                </div>
                </div>

              <div class="flex flex-col items-center row-span-2">
                  <p class="mt-12 font-bold text-3xl">ใบรับเงิน</p>
              </div>

              <div class="flex flex-col items-end row-span-2 mt-6">
                <div>
                    <p class="mt-12  text-sm">สแกนเพื่อดูผลการทดสอบ</p>
                  </div>
              </div>
            </div>
            
       <div class="grid grid-cols-3 grid-rows-2 justify-center h-16">
              <div class="items-start mt-6 w-50">
                <div>
                    <p class="mt-3">ชื่อและนามสกุล :
              <FiLL :data="data?.fname" no-line /> <FiLL :data="data?.lname" no-line />
            </p>
            <p class="mt-3">หมายเลขโทรศัพท์ :
              <FiLL :data="data?.phone" no-line />
            </p>
            <p class="mt-3">ที่อยู่ :
              <FiLL :data="data?.location" no-line />
            </p>
            <p class="mt-3">หมายเลขทะเบียนรถ :
              <FiLL :data="data?.idCar" no-line />
            </p>
                </div>
                </div>

              <div class="flex flex-col items-center row-span-2">
               
                 
              </div>

              <div class="flex flex-col items-end row-span-2 mt-6">
                <div >
                    <img class="w-[180px] h-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  alt="Logo" />
                </div>
              
              </div>
            </div>


            <div class="p-2">
       


                <table class="w-full text-xs text-left text-gray-500 dark:text-gray-400 border border-black mt-36">
  <tbody>
    <tr class="bg-white dark:bg-gray-800">
      <td scope="row" class="px-1 py-3 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black flex justify-center">ID</td>
      <td class="px-6 py-3 font-bold text-xs text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
        <p class="flex justify-center">รายการ</p>
      </td>
      <td scope="row" class="px-1 py-3 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
        <p class="flex justify-center">จำนวน</p>
      </td>
      <td scope="row" class="px-6 py-3 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
        <p class="flex justify-center">จำนวนเงิน(กีบ)</p>
      </td>
    </tr>

    <tr class="bg-white dark:bg-gray-800">
      <th scope="row" class="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black"></th>
      <td class="px-6 py-5 border-b border-r border-black"></td>
      <td class="px-6 py-5 border-b border-r border-black"></td>
      <td class="px-6 py-5 border-b border-r border-black"></td>
    </tr>
    <tr class="bg-white dark:bg-gray-800">
      <th scope="row" class="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black"></th>
      <td class="px-6 py-5 border-b border-r border-black"></td>
      <td class="px-6 py-5 border-b border-r border-black"></td>
      <td class="px-6 py-5 border-b border-r border-black"></td>
    </tr>
    <tr class="bg-white dark:bg-gray-800">
      <th scope="row" class="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black"></th>
      <td class="px-6 py-5 border-b border-r border-black"></td>
      <td class="px-6 py-5 border-b border-r border-black"></td>
      <td class="px-6 py-5 border-b border-r border-black"></td>
    </tr>
    <tr class="bg-white dark:bg-gray-800">
      <th scope="row" class="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black"></th>
      <td class="px-6 py-5 border-b border-r border-black"></td>
      <td class="px-6 py-5 border-b border-r border-black"></td>
      <td class="px-6 py-5 border-b border-r border-black"></td>
    </tr>


    <!-- Bottom two rows merged with right border on the fourth column -->
    <tr class="bg-white dark:bg-gray-800 ">
      <td colspan="3" class="px-6 py-3 font-bold text-gray-900 whitespace-nowrap dark:text-white border-b border-r border-black text-right">ภาษีมูลค่าเพิ่ม 10%</td>
      <td class="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white border-b border-r border-black"></td>
    </tr>
    <tr class="bg-white dark:bg-gray-800">
      <td colspan="3" class="px-6 py-3 font-bold text-gray-900 whitespace-nowrap dark:text-white border-b border-r border-black text-right ">รวมค่าบริการ</td>
      <td class="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-black"></td>
    </tr>
  </tbody>
</table>

<div class="grid justify-items-start">
      <p class="mt-3">ช่องทางการชำระ : 
          <FiLL :data="data?.transfer" no-line /> : <FiLL :data="data?.bank" no-line />
      </p>
      <p class="mt-3">จำนวนเงินเป็นตัวอักษร : 
          <FiLL :data="data?.mt" no-line />
      </p>
      <p class="mt-3">หมายเหตุ : 
          <FiLL :data="data?.note" no-line />
      </p>
      </div>

      <div class="grid grid-cols-4 grid-rows-2 justify-center h-16">
        <div class="items-start mt-6 w-50">
          <div>
              <p class="mt-3">วันที่ :
        <FiLL :data="data?.dayMonthYear" no-line />
      </p>
      <p class="mt-3">ลายเซ็นผู้จ่ายเงิน 
        <FiLL :data="data?.receivedLocation" no-line />
      </p>
 
          </div>
          </div>

        <div class="flex flex-col items-center row-span-2">
         
           
        </div>

        <div class="flex flex-col items-end row-span-2 mt-6">
          <div >
              <p class="mt-3">วันที่ :
        <FiLL :data="data?.dayMonthYear" no-line />
      </p>
      <p class="mt-3">ลายเซ็นผู้จ่ายเงิน 
        <FiLL :data="data?.receivedLocation" no-line />
      </p>
          </div>
        
        </div>
      </div>

      <p class="mt-56">ผู้อำนวยการฝ่ายเทคโนโลยี สาขานครหลวง โพนสร้าง
          </p>
          <p> ถนน. หมู่บ้านโพนตุส : โพนสว่าง อำเภอจันทบุรี เมืองหลวง</p>
          <p> ตู้ ปณ. 04833 เบอร์โทรศัพท์ (021263557) Email: Technicalinspectionlaos@gmail.com</p>
      </div>

        

        </PaperDoc>


       

       
    </main>
</template>
<script setup
        lang="ts">

        const { data } = await useFetch<any>('/api/cts');
</script>
