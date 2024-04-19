<template>
    <main>
      
      <PaperDoc>
        <div class="border-t border-r border-l border-b border-gray-900 p-2">
          <div class="flex justify-center font-bold text-xl mt-2">(สำหรับเจ้าหน้าที่ของสหกรณ์)</div>
          <div class="flex justify-center mt-3">
            <div>
              <p class="indent-20 break-all flex">
                จำนวนเงินกู้ <FiLL :data="data?.opsalary" /> บาท
            </p>
  
            </div>
          </div>
  
          <div class="border-t border-r border-l border-b border-gray-900 p-2 mt-3">
            <div class="flex justify-center font-bold text-xl">จำกัดวงเงินเพื่อเหตุฉุกเฉิน</div>
  
          </div>
  
          <table class="w-full text-xs text-left text-gray-500 dark:text-gray-400 border border-black">
  
            <tbody>
  
  
              <tr class="bg-white dark:bg-gray-800 ">
                <td scope="row"
                  class="px-6 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                  เงินได้รายเดือน 
                </td>
  
                <td
                  class="px-6 py-1 font-bold text-xs text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
  
                  <p>ต้นเงินกู้สามัญ</p>
                  <p class="text-center"> คงเหลือ</p>
                </td>
                <td scope="row"
                  class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                  <p>ต้นเงินกู้เพื่อเหตุฉุกเฉิน</p>
                  <p class="text-center"> คงเหลือ</p>
  
                </td>
                <td scope="row"
                  class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                  เงินได้รายเดือน
                </td>
                <td scope="row"
                  class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                  เงินได้รายเดือน
                </td>
              </tr>
  
              <tr class="bg-white dark:bg-gray-800">
                <th scope="row"
                  class="px-6 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
                 <FiLL :data= "data?.salary" />
                </th>
  
                <td class="px-6 py-8 border-b border-r border-black ">
                    <FiLL :data= "data?.salary" />
                </td>
                <td class="px-6 py-8 border-b border-r border-black ">
  
                </td>
                <td class="px-6 py-8 border-b border-r border-black ">
  
                </td>
                <td class="px-6 py-8 border-b border-r border-black ">
  
                </td>
  
              </tr>
  
  
  
  
  
  
            </tbody>
  
          </table>
          <div class="flex text-md mt-2">
            <div class="font-bold">หมายเหตุ
            </div>
            <div class="ml-8">๑. ผู้ขอกู้ เคยผิดนัดการส่งเงินงวดชำระหนี้ หรือขาดส่งเงินค่าหุ้นรายเดือนหรือไม่
            </div>
          </div>
  
  
          <div class="flex justify-center mt-3">
  
            <p class="ml-2 ">
  
            <p class="border-t border-r border-l border-b border-gray-900 px-3 "></p>
            <p class="mr-16">เคย  </p> 
  
            <p class="border-t border-r border-l border-b border-gray-900 px-3"></p>
            <p>ไม่เคย   <FiLL :data= "data?.mark" /></p>
  
            </p>
  
          </div>
  
          <div class="text-md mt-2">
  
            <div class="ml-20">๒.
              ข้อชี้แจงอื่นๆ....................................................................................................................
            </div>
          </div>
  
          <div class="flex justify-center mt-3">
  
            <p class="ml-5">
            <p class="border-t border-r border-l border-b border-gray-900 px-3 "></p>
            <p class="mr-12">อนุมัติ </p>
  
            <p class="border-t border-r border-l border-b border-gray-900 px-3"></p>
            <p>ไม่อนุมัติ</p>
  
            </p>
  
          </div>
          <p class="indent-20 break-all mt-3 pl-96 flex">
            <FiLL :data= "data?.officer" />  เจ้าหน้าที่
  
          </p>
  
  
          <div class="flex justify-center mt-3">
  
            <p class="ml-5">
            <p class="border-t border-r border-l border-b border-gray-900 px-3 "></p>
            <p class="mr-12">อนุมัติ <FiLL :data= "data?.mark" /></p>
  
            <p class="border-t border-r border-l border-b border-gray-900 px-3"></p>
            <p>ไม่อนุมัติ</p>
  
            </p>
  
          </div>
          <p class="indent-20 break-all mt-3 text-end flex">
            <FiLL :data= "data?.person" />
            ประธาน / รองประธาน /
            ผู้จัดการ / ผู้ที่ได้
            รับมอบหมาย
  
          </p>
  
  
  
  
  
        </div>
        <div class="mt-3 px-2">
  
  
          <p class="indent-20 break-all flex">ข้าพเจ้าผู้กู้มอบอำนาจให้
            <FiLL :data= "data?.payee" />  ตำแหน่ง  <FiLL :data= "data?.position2" />
         </p>
  
         <p class="indent-20 break-all flex">
            สังกัด  &nbsp;  <FiLL :data= "data?.affi" />  &nbsp; เป็นผู้รับเงินกู้ตามหนังสือกู้แทนข้าพเจ้า
          </p>
  
        </div>
  
        <div class="grid grid-cols-2 justify-center mt-3">
          <div class="flex items-start">
            <div class="border-2 border-black p-2">
              <p class="underline text-center">คำเตือน</p>
              <p class="text-center">ถ้าท่านมอบอำนาจให้ผู้อื่นรับเงินแทน</p>
              <p class="text-center">โปรดฝากบัตรประจำของท่านไปกับผู้รับเงิน</p>
              <p class="text-center">แทนท่านด้วยเพื่อแสดงต่อเจ้าหน้าที่</p>
            </div>
          </div>
  
  
          <div class="">
  
  
            <p class="indent-20 break-all flex"> <FiLL :data= "data?.kanfname" />  ผู้กู้</p>
            <p class="indent-20 break-all flex">  <FiLL :data= "data?.payee" /> ผู้รับมอบอำนาจ</p>
  
            <p class="mt-4">................................................................พยาน</p>
            <p>(................................................................)</p>
  
            <p class="mt-4">................................................................พยาน</p>
            <p>(................................................................)</p>
  
          </div>
  
        </div>
  
        <div class="mt-3 px-2">
  
  
          <p class="indent-20 break-all ">ข้าพเจ้า
             <FiLL :data= "data?.kanfname" /> ได้รับเงินกู้
            จำนวน <FiLL :data= "data?.opsalary" />  บาท
          </p>
  
          <p class="indent-20 break-all ">
            (<MoneyText :data= "data?.salary" /> ) ไปเป็นการถูกต้องแล้ว ณ
            วันที่ <FiLL :data= "formatDate(data?.dateReceived)" />
          </p>
  
        </div>
  
        <div class="grid grid-cols-2 justify-center mt-3">
          <div class="flex items-start">
  
          </div>
  
  
          <div class="">
  
            <p class="mt-8">................................................................ผู้รับเงิน</p>
            <p class="mt-4 text-right mr-32">( <FiLL :data= "data?.payee" />  )</p>
            <p class="text-xs mr-8">ต้องลงลายมือชื่อในการรับเงินต่อหน้าเจ้าหน้าที่ของสหกรณ์</p>
  
          </div>
  
        </div>
        <p class="mt-4 text-right">
          จ่ายเงินถูกต้องแล้ว........................................................................เจ้าหน้าที่การเงิน
        </p>
        <p class="mt-4 text-right mr-32">
          ( <FiLL :data= "data?.person" /> )</p>
      </PaperDoc>
    </main>
  </template>
  
  <script setup lang="ts">
  const { data } = await useFetch<any>('/api/aon&baem');
  // Function to get the formatted string from the Date object in DD/MM/YYYY format
  const formatDate = (date: string) => {
    const formattedDate = new Date(date);
    const bcYear = formattedDate.getFullYear() + 543;
    return formattedDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/(\d+)\/(\d+)\/(\d+)/, '$1/$2/' + bcYear);
  }
  </script>