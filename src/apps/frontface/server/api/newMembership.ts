export default defineEventHandler(async (event) => {
    return {
        fname: "จิโรมันเดย์",             //ชื่อหน้า
        lname: "ยืนยง",              //นามสกุล
        houseNumber: "152/2",      //บ้านเลขที่
        village: 11,                //หมู่ที่
        alley: 9,                   //ซอย
        road: "วิจตรนคร",              //ถนน
        district: "เมืองเหนือ ",          //ตำบล
        canton: "เมือง",            //อำเภอ
        province: "ศรีสะเกษ",         //จังหวัด
        phoneNo: "0987654231",      //เบอร์โทร
        phoneNoRelation: "0887654231",      //เบอร์โทร
        position: "พยาบาลผู้ช่วย",          //ตำแหน่ง  
        memberNumber: "3032",   //เลขทะเบียนสมาชิก
        zipCode: "42150",           //รหัสไปรษณี
        age: 32,                    //อายุ
        birthDay: "22",             //วันเกิด
        birthMonth: "ธันวาคม",       //เดือนเกิด
        birthYear: "2535",          //ปีเกิด
        idenNumber: "1929300028581",    //เลขประจำตัวประชาชน
        bankAccountNumber: "8767656542",    //เลขบัญชีธนาคาร
        depart: "ผู้ป่วยนอก",            //แผนก
        monthlyMoney: 25000,        //เงินเดือน
        mothlyPayment: 200,       //จ่ายรายเดือน
        office: "หนี้บ้าน",      //หนี้
        debt: 20000,                        //เงินกู้
        annualRate: 'อัตราต่อปี 22%',            //อัตราต่อปี
        guarantee: "ค้ำประกัน รถยนต์",         //สิ่งที่ค้ำประกัน
        remain: 11000,                      //เงินคงเหลือที่ติดหนี้
        interest: "หนี้บัตรเครดิค",          //หนี้
        reason: "ค่าบ้าน 5,000",   //เหตุผลการกู้
        reason1: "จ่ายบัตรเครดิด 6,000",   //เหตุผลการกู้
        fnameInterestedWitness: "พรรณดา",   //ชื่อพยานผู้มีผลประโยชน์
        lnameInterestedWitness: "ยืนยง", //นามสกุลพยานผู้มีผลประโยชน์
        unit: 7,                    //หน่วย
        relation: "ลูกสาว",             //ความสัมพันธ์

        dateReceived: new Date().toISOString(),
    }
});