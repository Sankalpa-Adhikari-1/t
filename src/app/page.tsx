import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
export default function Page() {
  return (
    <h1 className="m-10">
      Hello World, Next.js!
      <Button>hi</Button>
      <ModeToggle />
      <Link href="/home"> home </Link>
    </h1>
  );
}
