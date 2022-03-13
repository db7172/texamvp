export const mockEarning = [
  {
    name: "Vendor Name",
    id: "12345678",
    totalPayment: 80000,
    toalPayable: 67000,
    deduction: 13000,
    paid: 20000,
    unpaid: 47000,
    paymentHistory: [
      {
        amount: 10000,
        date: "12/12/2021",
        transectionId: "1234567890",
      },
      {
        amount: 10000,
        date: "31/12/2021",
        transectionId: "1234567890",
      },
    ],
    nextPaymentDate: "01/01/2022",
    deductions: {
      ttCommission: 8,
      rewards: 1000,
      tcs: 1,
      tds: 1,
      gst: 5,
    },
  },
  {
    name: "Vendor Name",
    id: "12345676",
    totalPayment: 100000,
  },
  {
    name: "Vendor Name",
    id: "12345676",
    totalPayment: 50000,
  },
  {
    name: "Vendor Name",
    id: "12345676",
    totalPayment: 30000,
  },
];
