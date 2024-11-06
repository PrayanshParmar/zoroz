import { Command, CommandInput } from "@/components/ui/command";

const SearchBar = () => {
  return (
    <Command className="rounded-lg border shadow-md max-w-[350px] w-full">
      <CommandInput placeholder="Type a command or search..." />
    </Command>
  );
};

export default SearchBar;
