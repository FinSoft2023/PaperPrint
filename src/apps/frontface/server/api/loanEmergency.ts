export default defineEventHandler(async (event) => {
  return {
    receivedLocation: "สหกรณ์ออมทรัพย์ รพ. ศรีสะเกษ จำกัด",    // ชื่อโรงบาล  / เขียนที่
    loanAccountNumber: "504/67",                      // บัญชีเงินกู้ที่
    fname: "สุริยะ",                                    //  ชื่อ
    lname: "ประจันนวล",                                //  นามสกุล    
    memberNumber: "143520004343",                     //  สมาชิกเลขทะเบียนที่
    location: "พยาบาลผู้ช่วย",                                //  ตำแหน่ง
    affiliation:"โรงพยาบาลเลย",                       //  สังกัด
    dayMonthYear:"27/ธันวาคม/2567",                    //  วัน / เดือน / ปี
    officer:"สมศัก วันจิตรา",                            //   เจ้าหน้าที่
    usedTo:"ใช้เพื่อการศึกษา",                                //   ใช้เพื่อการดังนี้
    monthlyIncome: 25000,                             //   จำนวนเงิน
    intendent: "กรกนก กระดกทอง",                              //  ประธาน / รองประธาน / ผู้จัดการ / ผู้ที่ได้ รับมอบหมาย
    load : 25000,



    repaymentPlan: [
      { m: "ม.ค.", y:"2568", amount: 2084 },
      { m: "ก.พ.", y:"2568", amount: 2084 },
      { m: "มี.ค.", y:"2568", amount: 2084 },
      { m: "เม.ย.", y:"2568", amount: 2084 },
      { m: "พ.ค.", y:"2568", amount: 2084 },
      { m: "มิ.ย.", y:"2568", amount: 2084 },
      { m: "ก.ค.", y:"2568", amount: 2084 },
      { m: "ส.ค.", y:"2568", amount: 2084 },
      { m: "ก.ย.", y:"2568", amount: 2084 },
      { m: "ต.ค.", y:"2568", amount: 2084 },
      { m: "พ.ย.", y:"2568", amount: 2084 },
      { m: "ธ.ค.", y:"2568", amount: 2084 },
    ],
    dateReceived: new Date().toISOString(),
  }
});
