<template>
    <main>
        <PaperDoc> <!-- หน้า 1 -->
            <div class="flex flex-col items-center">
          <img class="w-[120px] h-auto"
            src="https://cpct.icoopsiam.com/static/logo/logo.png"
            alt="Logo" />
        </div>
            <div class="mt-10">
                <div class="text-xl text-center font-bold">
                    <p>หนังสือแจ้งการขอโอนย้าย สมาชิก</p>
                    <p>สมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย (สสธท.)</p>
                </div>
                <div class="grid grid-cols-2">
                    <div></div>
                    <div class="text-start">
                        <p class="mt-6">เขียนที่ <FiLL :data="data?.location" class="underline underline-offset-4 text-base text-right" no-line /></p>
                        <p class="mt-2">วันที่ <FiLL  class="text-base" :data="data?.dateReceived"date-format="full" no-line /></p>
                    </div>
                    
                </div>
                <p class="text-left mt-6">เรียน คณะกรรมการสมาคมฌาปนกิจสงเคราะห์สมาชิกสหกรณ์ออมทรัพย์สาธารณสุขไทย</p>
                <div> 
                    <p class="mt-5"><span class="ml-20">ข้าพเจ้า</span> <FiLL class="min-w-60" :data="`${data?.fName}  ${data?.lName}`"/> เลขประจำตัวสมาชิก <FiLL :data="data?.member" class="min-w-40" /></p>
                    <p>เป็นสมาชิกภาพสมาคมโดยสมบูรณ์เมื่อวันที่ <FiLL  class="min-w-96 " :data="data?.dateReceived" date-format="full" /> </p>
                    <p>อยู่บ้านเลขที่ <FiLL :data="data?.housenb" class="min-w-28" /> หมู่<FiLL :data="data?.group" class="min-w-16" />ถนน  <FiLL :data="data?.road" class="min-w-32" /> ตำบล/แขวง <FiLL :data="data?.district" class="min-w-32" /> </p>
                    <p>อำเภอ/เขต <FiLL :data="data?.district" class="min-w-40" />จังหวัด <FiLL :data="data?.province" class="min-w-36" />รหัสไปรษณีย์<FiLL :data="data?.zipcode" class="min-w-36" /> </p>
                    <p>โทรศัพท์ <FiLL :data="data?.nbPhon" class="min-w-52" />มือถือ<FiLL :data="data?.nbPhon" class="min-w-52" /></p>
                </div>
                <p><span class="ml-20">ข้าพเจ้ามีความประสงค์ ขอให้สมาคม ฯ ดำเนินการ</span></p>

                <p class="mt-5"><span class="ml-20"><FiLLBox :checked="data?.newnbAccount" />โอนย้ายสมาชิก</span></p>
                <p><span class="ml-20">จากเดิมสังกัด ศูนย์ประสานงานสหกรณ์ออมทรัพย์</span> <FiLL :data="data?.coordinationCenter1" class="min-w-40" />จำกัด</p>
                <p><span class="ml-20">เป็น สังกัด ศูนย์ประสานงานสหกรณ์ออมทรัพย์</span> <FiLL :data="data?.coordinationCenter2" class="min-w-44" /> จำกัด</p>
                <p>เนื่องจาก <BlankSpace class="min-w-80" />
                ตั้งแต่วันที่<FiLL  class="min-w-52 " :data="data?.dateReceived" date-format="full" />เป็นต้นไป</p>
                
                <div class="grid grid-cols-2 mt-6">
                    <div></div>
                    <div class="text-center">
                        
                        
                        <p>ลงชื่อ<BlankSpace class="min-w-44" />สมาชิก</p>
                        <p>( <FiLL class="min-w-44" :data="`${data?.fName}  ${data?.lName}`"/> )</p>
                        <p><FiLL  class="text-base" :data="data?.dateReceived"date-format="short" no-line /></p>
                    </div>
                </div>
            </div>
        </PaperDoc>
    </main>
</template>
<script setup lang="ts">
import BlankSpace from '~/components/BlankSpace.vue';
import MoneyText from '~/components/MoneyText.vue';

    const { data } = await useFetch<any>('/api/group2');
</script>