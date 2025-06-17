import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="flex overflow-hidden gap-x-2 border-2 border-[#323748] rounded-full px-4 py-1 items-center flex-1">
      <SearchIcon color="#373740" />

      <Input
        placeholder="Search by name, email or status"
        className="border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default Search;
