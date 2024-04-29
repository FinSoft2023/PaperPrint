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
      explanation:"ไม่มี",            //คำชี้แจง
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
      loanContract:"สามัญ/พิเศษ",   //รูปแบบสัญญาเงินกู้
      loanOnDay:"1",                      //กู้เมื่อ(วัน)
      loanOnMonth:"มีนาคม",               //กู้เมื่อ(เดือน)
      loanOnYear:"2567",                  //กู้เมื่อ(ปี)
      unablePayDebtDueTo: "เศรษฐกิจแย่ ขาดทุนสูง",   //เหตุผลที่ไม่สามารถชำระเงินได้
      evidenceReason: "รายการการเดือนบัญชีบบริษัท",   //หลักฐานที่แสดงว่ามีเหตุจำเป็น
      requestDebtRestructuring:"ขอชำระ 24 งวด และเลื่อนเป็นปีหน้า", //ขอยื่นปรับโครงสร้างหนี้
      oldInterestRate:"5%",  //อัตราดอกเบี้ยเก่า
      newInterestRate:"10%",  //อัตราดอกเบี้ยใหม่
      sentPayMent:"รายเดือน", //ส่งชำระแบบ
      oldDebtEachInstallment:5250,    //ส่งหนี้งวดละ(เก่า)
      newDebtEachInstallment:2300,       //ส่งหนี้งวดละ(ใหม่)
      paidInstallments:3,               //จ่ายแล้วกี่งวด
      newInstallments:24,               //หนี้ใหม่กี่งวด
      fOwnerCollateral1:"มั่นมง",            //ชื่อเจ้าของหลักทรัพ
      lOwnerCollateral1:"ยั่งยืน",            //นามสกุลเจ้าของหลักทรัพ
      fMarryOwnerCollateral1:"ฝันดี",            //ชื่อคู่สมรสเจ้าของหลักทรัพ
      lMarryOwnerCollateral1:"ยั่งยืน",            //นามสกุลคู่สมรสเจ้าของหลักทรัพ
      fOwnerCollateral2:"นอนเช้า",            //ชื่อเจ้าของหลักทรัพคนที่ 2
      lOwnerCollateral2:"หลับเย็น",            //นามสกุลเจ้าของหลักทรัพคนที่ 2
      fMarryOwnerCollateral2:"บัวผัน",            //ชื่อคู่สมรสเจ้าของหลักทรัพคนที่ 2
      lMarryOwnerCollateral2:"หลับเย็น",            //นามสกุลคู่สมรสเจ้าของหลักทรัพคนที่ 2
      fNameManager:"สุริยัน",                 //ชื่อผู้จัดการ
      lNameManager:"แผดเผา",                 //นามสกุลผู้จัดการ
      numberPeople:2,                     //จำนวนเจ้าของหลักทรัพย๋
      fNameWitness1: "ธรรมดา",            //ชื่อพยานคนที่1
      lNameWitness1: "นอนนา",           //นามสกุลพยานคนที่1
      fNameWitness2: "สมศรี",            //ชื่อพยานคนที่2
      lNameWitness2: "คนรวย",           //นามสกุลพยานคนที่2
      fNameGuarantor1: "ชุติมา",            //ชื่อบุคคลค้ำประกันคนที่1
      lNameGuarantor1: "ทรัพย์มั้นคง",           //นามสกุลบุคคลค้ำประกันคนที่1
      fNameGuarantor2: "นิษา",            //ชื่อบุคคลค้ำประกันคนที่2
      lNameGuarantor2: "รักษาทรัพย์",           //นามสกุลบุคคลค้ำประกันคนที่2
      positionGuarantor1: "พยาบาล",         //ตำแหน่งบุคคลค้ำประกัน1
      positionGuarantor2: "แพทย์",         //ตำแหน่งบุคคลค้ำประกัน2
      salaryGuarantor1:30000,          //เงินเดือนบุคคลค้ำประกัน1
      salaryGuarantor2:50000,          //เงินเดือนบุคคลค้ำประกัน2
      memberGuarantor1: 31,               //สมาชิกเลขที่บุคคลค้ำประกัน1
      memberGuarantor2: 44,               //สมาชิกเลขที่บุคคลค้ำประกัน2
      workGroup1:"ห้องผู้ป่วยภายนอก",           //กลุ่มงาน1
      workGroup2:"ห้องเอกซเรย์",           //กลุ่มงาน2
      positionCommander: "ผู้อำนวยการ",         //ตำแหน่งผู้บังคับบัญชา
      fNameCommander:"ชาญวิทย์",                //ชื่อผู้บังคับบัญชา
      lNameCommander:"ยิ่งงาม",                //นามสกุลผู้บังคับบัญชา
      fNameSecretary:"กนกนุช",                  //ชื่อเลขานุการ
      lNameSecretary:"สันติสุข",                  //นามสกุลเลขานุการ
      noMeeting: "1 / 2" ,                         //ประชุมกรรมการประจำเดือนครั้งที่
      numberBoard:"8",                          //จำนวนคณะกรรมการ
      numberBoardYes:"6",                          //จำนวนคณะกรรมการให้ผ่าน
      numberBoardNo:"2",                          //จำนวนคณะกรรมการไม่ให้ผ่าน
      summaryLoan:"ผ่านการพิจารณาจากคณะกรรมการ",            //สรุปการกู้   
      email:"oo@gmail.com",


         dateReceived: new Date().toISOString(), //วันที่ปัจจุบัน  full จะได้ผลลัพธ์ 1 เมษายน พศ.2567    short ผลลัพธ์  01/04/2567
         collateral:[
            {collateral: "รถจักรยานยนต์"},
            {collateral: "ทอง 1 บาท"},
         ], //หลักทรัพย์คํ้าประกัน
         repaymentPlan: [
            { fn: "สารีกา ", ln: "สุขสำราญ ", status: 'คู่สมรส' , share: 40  },
            { fn: "เจริญดี", ln: "สุขสำราญ ", status: 'บุตร' , share: 60 },
            //เอาไปใส่หน้าที่ 6
            // ชื่อนามสกุล                เกี่ยวข้อง         ส่วนเเบ่งเงิน         
         ],

   }
});