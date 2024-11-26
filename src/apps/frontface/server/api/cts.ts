export default defineEventHandler(async (event) => {
    return {
      number: "00001",                      // บัญชีเงินกู้ที่
      fname: "สุริยะ",                                    //  ชื่อ
      lname: "ประจันนวล",                                //  นามสกุล    
      phone: "143520004343",                     //  สมาชิกเลขทะเบียนที่
      location: "8/78 ถ.ร่วมใจ",                                //  ตำแหน่ง
      idCar:"ธธ 9751",                       //  สังกัด
      dayMonthYear:"2-12-2023",                    //  วัน / เดือน / ปี
      transfer:"โอน",      
      bank:"ธนาคารพัฒนาลาว LDB",
      mt:"หนึ่งแสนกีบ",  
      note:"นย.",       
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
  