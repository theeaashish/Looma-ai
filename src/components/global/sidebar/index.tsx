"use client";
import { usePaths } from "@/hooks/use-nav";
import { cn } from "@/lib/utils";
import LogoSmall from "@/svgs/logo-small";
import React from "react";
import Items from "./items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import HelpIcon from "@/icons/HelpIcon";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const container = cn(
    "w-[250px] border-[1px] radial fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden "
  );
  const { page } = usePaths();
  return (
    <div className={container}>
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-opacity-90 bg-clip-padding backdrop-filter backdrop-blur_safari backdrop-blur-3xl">
        <div className="flex gap-x-2 items-center justify-center">
          <LogoSmall fillColor="#768BDD" />
        </div>

        <div className="flex flex-col py-3">
          <Items page={page} slug={slug}/>
        </div>

        <div className="px-16">
          <Separator orientation="horizontal" className="bg-[#333336]"/>
        </div>

        <div className="px-3 flex flex-col gap-y-5">
          <div className="flex gap-x-2">
            <ClerkAuthState />
            <p className="text-[#9B9CA0]">Profile</p>
          </div>

          <div className="flex gap-x-3">
            <HelpIcon />
            <p className="text-[#9B9CA0]">Help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
