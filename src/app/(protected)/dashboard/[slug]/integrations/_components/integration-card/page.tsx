import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: "INSTAGRAM" | "CRM";
};

const IntegrationCard = ({ title, description, strategy, icon }: Props) => {
  return (
    <div className="border-2 border-[#3352CC] rounded-2xl gap-x-5 p-5 flex items-center">
      {icon}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl"> {title} </h3>
        <p className="text-[#9D9D9D] text-sm w-full md:w-10/12 ">
          {" "}
          {description}{" "}
        </p>
      </div>
      <Button
        // onClick={onInstaOAuth}
        // disabled={integrated?.name === strategy}
        className="bg-gradient-to-br text-white rounded-full from-[#3352CC] text-base font-normal to-[#1C2D17] hover:opacity-70 transition duration-100"
      >
        {/* {integrated ? "Connected" : "Connect"} */}
        Connect
      </Button>
    </div>
  );
};

export default IntegrationCard;
