export default defineEventHandler(async (event) => {
  return {
    receivedLocation: "สหกรณ์ออมทรัพย์ รพ. ศรีสะเกษ",
    dateReceived: new Date(),
    monthlyIncome: 10000,
    loanAccountNumber: "345/67",
    repaymentPlan: [
      { m: "มค", amount: 1000 },
      { m: "กพ", amount: 1000 },
      { m: "มน", amount: 1000 },
      { m: "มษ", amount: 1000 },
    ],
  }
});