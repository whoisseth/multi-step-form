/** @format */

export type billingPlanType = {
  planType: string;
  monthlyPrice: number;
  yearlyPrice: number;
  imgurl: string;
};

export const bilingPlans: billingPlanType[] = [
  {
    planType: "arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    imgurl: "/images/icon-arcade.svg"
  },
  {
    planType: "advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    imgurl: "/images/icon-advanced.svg"
  },
  {
    planType: "pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    imgurl: "/images/icon-pro.svg"
  }
];
