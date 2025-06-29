import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationBtn from "../../activate-automation-button";

type Props = {
    id: string
};

const AutomationsBreadCrumb = ({ id }: Props) => {
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9B9CA0] truncate">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#9B9CA0" size={18} />
        <span className="flex gap-x-3 items-center min-w-0">
          <p className="text-[#9B9CA0] truncate">This is automation title</p>
          <span className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4">
            <PencilIcon color="#9B9CA0" size={18} />
          </span>
        </span>
      </div>
      <div className="flex gap-x-5 items-center ml-auto">
        <p className="text-sm hidden md:block truncate min-w-0 text-gray-400/60">
          All test are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-sm text-gray-400 min-w-0 truncate">
            Changes Saved
          </p>
        </div>
      </div>
      <ActivateAutomationBtn />
    </div>
  );
};

export default AutomationsBreadCrumb;
