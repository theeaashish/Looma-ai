import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const PaymentButton = (props: Props) => {
  return (
    <Button className="bg-gradient-to-br text-white rounded-full from-[#9685DB] via-[#9434E6] font-bold to-[#CC3BD4] hover:opacity-80 transition duration-300 ">
      Upgrade
    </Button>
  );
};

export default PaymentButton;
