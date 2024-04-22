export default defineEventHandler(async (event) => {
  return {
    receivedLocation: "สหกรณ์ออมทรัพย์ รพ. ศรีสะเกษ",    // ชื่อโรงบาล  / เขียนที่
    loanAccountNumber: "504/67",                      // บัญชีเงินกู้ที่
    fname: "สุริยะ",                                    //  ชื่อ
    lname: "ประจันนวล",                                //  นามสกุล    
    memberNumber: "143520004343",                     //  สมาชิกเลขทะเบียนที่
    location: "แพทย์",                                //  ตำแหน่ง
    affiliation:"โรงพยาบาลเลย",                       //  สังกัด
    dayMonthYear:"27/ธันวาคม/2567",                    //  วัน / เดือน / ปี
    officer:"สมศัก วันจิตรา",                            //   เจ้าหน้าที่
    usedTo:"การศึกษา",                                //   ใช้เพื่อการดังนี้
    monthlyIncome: 1000,                             //   จำนวนเงิน
    intendent: "กรกนก กระดกทอง",                              //  ประธาน / รองประธาน / ผู้จัดการ / ผู้ที่ได้ รับมอบหมาย
    load : 3327325,



    repaymentPlan: [
      { m: "ม.ค.", amount: 1000 },
      { m: "ก.พ.", amount: 1000 },
      { m: "มี.ค.", amount: 1000 },
      { m: "เม.ย.", amount: 1000 },
      { m: "พ.ค.", amount: 1000 },
      { m: "มิ.ย.", amount: 1000 },
      { m: "ก.ค.", amount: 1000 },
      { m: "ส.ค.", amount: 1000 },
      { m: "ก.ย.", amount: 1000 },
      { m: "ต.ค.", amount: 1000 },
      { m: "พ.ย.", amount: 1000 },
      { m: "ธ.ค.", amount: 1000 },
    ],
    dateReceived: new Date().toISOString(),
  }
});
