"use client";
import { sidebarAtom } from "@/app/(private)/_atoms/atoms";
import { useAtom } from "jotai";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
export default function Navbar() {
  const [SidebarOpen, setSidebarOpen] = useAtom(sidebarAtom);
  const handleSidebar = () => {
    setSidebarOpen(!SidebarOpen);
  };
  console.log(SidebarOpen);
  return (
    <div className="flex flex-col bg-secondary h-12 ">
      <div className="flex justify-between pt-1 space-x-6 pr-3 ">
        <Button onClick={handleSidebar} variant="ghost" size="icon">
          <MenuIcon />
        </Button>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
