"use client";
import { sidebarAtom } from "@/app/(private)/_atoms/atoms";
import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { GiCow } from "react-icons/gi";
import { motion } from "framer-motion";
const navlinks = [
  {
    name: "Home",
    href: "/home",
    icons: <HomeIcon className="mr-2 w-4 h-4" />,
  },
  {
    name: "About",
    href: "/about",
    icons: <GiCow size={16} className="mr-2" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icons: <GiCow size={16} className="mr-2" />,
  },
];

export default function Sidebar() {
  const [SidebarOpen] = useAtom(sidebarAtom);
  const pathname = usePathname();
  return (
    <motion.div
      animate={{ opacity: 0.5 }}
      transition={{
        opacity: { ease: "linear" },
      }}
      className={`bg-background h-screen w-44 flex flex-col space-y-2 m-2 ${
        SidebarOpen ? "block" : "hidden"
      }`}
    >
      <div>Logos</div>
      {navlinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link href={link.href} key={link.name}>
            <Button
              variant={isActive ? "default" : "ghost"}
              className="w-full justify-start"
            >
              {link.icons}
              {link.name}
            </Button>
          </Link>
        );
      })}
    </motion.div>
  );
}
