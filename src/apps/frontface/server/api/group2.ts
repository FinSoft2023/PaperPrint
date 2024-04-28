export default defineEventHandler(async (event) => {
    return {
     fName: "สืบสกุล",            //ชื่อข้าพเจ้า
     lName: "สุขสำราญ",           //นามสกุล
     newfName: "สารีกา",            //ชื่อข้าพเจ้าใหม่
     newlName: "เจริญดี",           //นามสกุลใหม่
     officerFName:"ทินเดีย",           //ชื่อเจ้าหน้าที่
     officerLName:"สารุ",           //นามสกุลเจ้าหน้าที่
     officerPOsition:"ธุรการ",           //ตำแหน่งเจ้าหน้าที่
     age:"30",                          //อายุ
     idcard:"1428856552645",            //เลขบัตรประจำตัว
     savings   :"ไทยพาณิชย์",                     //สหกรณ์ออมทรัพย์
     district:"เมือง",                   //ตำบลที่อยู่ & //อำเภอ
     housenb:"32/59",                   //บ้านเลขที่
     group: 5,                        //หมู่
     road: "มิตรภาพ ",                 //ถนน
     province: "ขอนแก่น",              //จังหวัด
     zipcode: "40000",                //รหัสไปรษณี
     money:"ฌาปนกิจศพ",                           //เป็นเงินค่า
     satang: 0,                   //สตางค์
     bath: 20000,                   //เงินฝาก &  //ทุนเรือนหุ้น
     togetherBath:60000,               //รวมเงินฝาก   &  //หนี้สินทั้งสิ้น
     Explanation:"ไม่มี",            //คำชี้แจง
    ofFname: "นาตาชา",             //ชื่อคนโดนฌาปนกิจ
    ofLname: "โรมานอฟ",             //นามสกุล
    deaddate: 20/12/2564 ,       //วันที่ตาย
     nbAccount: "2012365412" ,       //เลขบัญชี
    nbPhon:"0865579988",            //เบอร์โทรข้าพเจ้า
     position: "ประธาน",           //ตำแหน่งข้าพเจ้า
     member: 21,               //สมาชิกเลขที่
     numberRegis: 563,        //เลขทะเบียน
     nb: 10,                    //ที่  &  // ส่งหุ้น
     agency: "กระทรวงสาธารณสุข",   //หน่วยงาน
     newnbAccount: "6895420004" ,       //เลขบัญชีใหม่
     prefix:"นาย",              //คำนำหน้า
     newprefix:"นางสาว",              //คำนำหน้าใหม่
     prefixMrs:"นาง",              //คำนำหน้าคู่สมรส
     salary:50000,          //เงินเดือนขอเปลี่ยนแปลงค่าหุ้น  &  //เงินกู้
     stockValue: 5000,          //ส่งค่าหุ้น
     stockValueno: 3500,           //ขอลดค่าหุ้น
        mount: "มกราคม",           //เดือน
        year:"2566",                //ปี
        affiliation:"โรงพยาบาลศรีสะเกษ",  //สังกัด
        loanbook:"405/96",         //หนังสือเงินกู้ที่
        location:"สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด",
        subject:"ขอเปลี่ยนเเปลงผู้ค้ำประกันเงินกู้",       //เรื่อง
        newStatus:"คู่สมรส", //สถานะ








        economize:"ออมทรัพย์",           //ประเภทเงินฝาก

           dateReceived: new Date().toISOString(), //วันที่ปัจจุบัน  full จะได้ผลลัพธ์ 1 เมษายน พศ.2567    short ผลลัพธ์  01/04/2567
           repaymentPlan: [
            { fn: "นาตาชา ", ln: "สุขสำราญ ", status: 'คู่สมรส' , share: 40  },
            { fn: "เจริญดี", ln: "สุขสำราญ ", status: 'บุตร' , share: 60 },
            //เอาไปใส่หน้าที่ 6
            // ชื่อนามสกุล                เกี่ยวข้อง         ส่วนเเบ่งเงิน         
          ],

    }
  });