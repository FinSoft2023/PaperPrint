export default defineEventHandler(async (event) => {
    return {
        fname: "ยิ่งใหญ่",             //ชื่อหน้า
        lname: "ยืนยง",              //นามสกุล
        houseNumber: "666/66",      //บ้านเลขที่
        village: 11,                //หมู่ที่
        alley: 9,                   //ซอย
        road: "ข้าวหุง",              //ถนน
        district: "โนนต่ำ",          //ตำบล
        canton: "โนนสูง",            //อำเภอ
        province: "โนนไกล",         //จังหวัด
        phoneNo: "0987654231",      //เบอร์โทร
        position: "ลูกจ้างประจำ",          //ตำแหน่ง  
        memberNumber: "69696969",   //เลขทะเบียนสมาชิก
        zipCode: "42150",           //รหัสไปรษณี
        age: 29,                    //อายุ
        birthDay: "22",             //วันเกิด
        birthMonth: "ธันวาคม",       //เดือนเกิด
        birthYear: "2538",          //ปีเกิด
        idenNumber: "1929300028581",    //เลขประจำตัวประชาชน
        bankAccountNumber: "8767656542",    //เลขบัญชีธนาคาร
        depart: "ผู้ป่วยนอก",            //แผนก
        monthlyMoney: 16000,        //เงินเดือน
        mothlyPayment: 5000,       //จ่ายรายเดือน
        office:"สำนักงานธนาคารกรุงไทย",      //สำนักงานเงินกู้
        debt:20000,                        //เงินกู้
        annualRate:'อัตราต่อปี 22%',            //อัตราต่อปี
        guarantee:"ค้ำประกัน รถยนต์",         //สิ่งที่ค้ำประกัน
        remain:11000,                      //เงินคงเหลือที่ติดหนี้
        interest:"ไม่มีดอกเบี้ย",          //ดอกเบี้ย
        reason:"กู้ยืมเงินเพื่อการประกอบอาชีพ",   //เหตุผลการกู้
        fnameInterestedWitness: "ธนงทวย",   //ชื่อพยานผู้มีผลประโยชน์
        lnameInterestedWitness: "คงควรคอย", //นามสกุลพยานผู้มีผลประโยชน์
        unit: 7,                    //หน่วย
        relation: "ลุง",             //ความสัมพันธ์
        

        dateReceived: new Date().toISOString(),
    }
  });