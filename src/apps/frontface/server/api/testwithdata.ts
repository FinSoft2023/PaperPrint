export default defineEventHandler(async (event) => {
    return {
      receivedLocation: "สหกรณ์ออมทรัพย์ รพ. เลย",
      loanAccount: "123-123-900",
      location: "วิทยาลัยเทคนิคเลย",
      fname: "อัมรินทร์",
      lname: "ศรีอ่อน",
      IDmember: "012355",
      position: "นักเรียน นักศึกษา",
      Affiliation: "แผนก IT",
      Monthly: "ไม่มี",
      dateReceived: new Date().toISOString(),
    }
  });