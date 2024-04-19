export default defineEventHandler(async (event) => {
  return {
    receivedLocation: "สหกรณ์ออมทรัพย์ รพ. ศรีสะเกษ",
    dateReceived: new Date(),
    monthlyIncome: 10000,
    loanAccountNumber: "345/67",
    repaymentPlan: [
      { m: "Jan", amount: 1000 },
      { m: "Feb", amount: 1000 },
      { m: "March", amount: 1000 },
    ],
  }
});