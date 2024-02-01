/** @format */

import { pickAddonsType, pickAddonsdata } from "@/components/Steps/PickAddOns";
import { bilingPlans, billingPlanType } from "@/constants";
import { atom, useAtom } from "jotai";

export const selectedPlanAtom = atom<"monthly" | "yearly">("monthly");
export const billingPlanAtom = atom<billingPlanType>(bilingPlans[0]);
export const activeAddOnsAtom = atom<pickAddonsType[]>([pickAddonsdata[0]]);
