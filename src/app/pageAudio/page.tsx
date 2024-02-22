import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
// import { ArrowRight } from 'lucide-react'
// import { buttonVariants } from '@/components/ui/button'
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">

        <h1>Audio Landing Page</h1>
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboardAudio"
          target="_blank"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
    </>
  );
}
