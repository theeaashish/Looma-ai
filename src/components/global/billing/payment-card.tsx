import { Button } from "@/components/ui/button";
import { PLANS } from "@/constants/pages";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import React from "react";

type Props = {
  label: string;
  current: "PRO" | "FREE";
  landing?: boolean;
};

const PaymentCard = ({ current, label, landing }: Props) => {
  return (
    <div
      className={cn(
        label !== current
          ? "bg-in-active"
          : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        "p-0.5 rounded-xl overflow-hidden"
      )}
    >
      <div
        className={cn(
          landing && "radial--gradient--pink",
          "flex flex-col rounded-xl pl-5 py-5 pr-10 h-full bg-background-90"
        )}
      >
        {landing ? (
          <h2 className="text-2xl">
            {label === "PRO" && "Premium plan"}
            {label === "FREE" && "Standard"}
          </h2>
        ) : (
          <h2>
            {label === current
              ? "Your Current Plan"
              : current === "PRO"
              ? "Downgrade"
              : "Upgrade"}
          </h2>
        )}

        <p className="text-zinc-400 text-sm mb-2">
          This is what your plan covers for automations and AI features
        </p>

        {label === "PRO" ? (
          <span className="bg-gradient-to-r text-xl font-bold from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Smart AI
          </span>
        ) : (
          <p className="font-semibold mt-2 text-zinc-400">Standard</p>
        )}

        {label === "PRO" ? (
          <p className="mb-2">
            <b className="text-xl">$99</b>/month
          </p>
        ) : (
          <p className="text-xl mb-2">Free</p>
        )}

        {PLANS[label === "PRO" ? 1 : 0].features.map((i) => (
          <p key={i} className="mt-2 text-muted-foreground flex gap-3 text-sm">
            <CircleCheck className="text-indigo-500" /> {i}
          </p>
        ))}

        {landing ? (
          <Button
            className={cn(
              "rounded-full mt-5",
              label === "PRO"
                ? "bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500"
                : "bg-background-80 text-white hover:text-background-80"
            )}
          >
            {label === current
              ? "Get Started"
              : current === "PRO"
              ? "FREE"
              : "Get Started"}
          </Button>
        ) : (
          <Button
            className="rounded-full mt-5 bg-background-80 text-white hover:bg-gray-200 hover:text-zinc-800 transition duration-300"
            disabled={label === current}
          >
            {label === current
              ? "Active"
              : current === "PRO"
              ? "Downgrade"
              : "Upgrade"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
