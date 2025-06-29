import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { Radio } from "lucide-react";

type Props = {};

const ActivateAutomationBtn = (props: Props) => {
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] transition duration-300 ml-4">
      <Loader state={false}>
        <Radio />
        <p className="lg:inline hidden">Activate</p>
      </Loader>
    </Button>
  );
};

export default ActivateAutomationBtn;
