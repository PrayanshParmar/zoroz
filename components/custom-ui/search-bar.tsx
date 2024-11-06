import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { CalendarIcon, RocketIcon, ScanFaceIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <Command className="rounded-lg border shadow-md max-w-[350px] w-full">
      <CommandInput placeholder="Type a command or search..." />
    </Command>
  );
};

export default SearchBar;
