import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex sm:min-h-[92vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 py-8">
      
      <div className="flex flex-row mb-4 items-center">
      <Image src="/comparit_logo.svg" width={60} height={60} alt="logo"/>
      <h1 className="pl-[12px] text-3xl font-bold sm:text-6xl items-center">
        Comparit
      </h1>
      </div>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        An IDE-agnostic domain model comparison framework
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        {/* <Link
          href="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Read Blog
        </Link> */}
      </div>
    </div>
  );
}
