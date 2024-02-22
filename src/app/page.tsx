import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import {
  LoginLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  const serviceCard = (
    name: string,
    detail: string,
    url: string,
    path: string
  ) => {
    return (
      <button className="box">
        <Link href={url}>
          <div className="front-face">
            <div className="icon flex justify-center items-center">
              <Image src={path} alt={name} width={70} height={70}></Image>
            </div>
            <br />
            <span>{name}</span>
          </div>
          <div className="back-face">
            <span>{name}</span>
            <p>{detail}</p>
          </div>
        </Link>
      </button>
    );
  };
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-12 sm:mt-24 p-0 flex flex-col items-center justify-center text-center">
        <div className="flex justify-end">
          <div className="m-2 p-1">
            <h1 className="max-w-xl text-2xl font-bold md:text-3xl lg:text-4xl">
              Simplify Complexity,{" "}
              <span className="text-blue-700"> Summarize with Ease.</span>
            </h1>
            <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
              Simplify complex information effortlessly with EasySummarize. Our
              platform makes summarization a breeze, allowing you to distill the
              essence of any content with ease. Unlock clarity and save time –
              Summarize with Ease
            </p>
            {user && user.id ? (
              <>
                <Link
                  className={buttonVariants({
                    size: "lg",
                    className: "mt-5",
                  })}
                  href="/pagePDF"
                  target="_blank"
                >
                  Get started with PDF
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <br />
                <Link
                  className={buttonVariants({
                    size: "lg",
                    className: "mt-5",
                  })}
                  href="/pageAudio"
                  target="_blank"
                >
                  Get started with Audio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <LoginLink
                  className={buttonVariants({
                    size: "lg",
                    className: "mt-5",
                  })}
                  target="_blank"
                >
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5" />
                </LoginLink>
              </>
            )}
          </div>
          <Image src="/heroSection.jpg" alt="Logo" width={600} height={450} />
        </div>
        <section className="mt-24">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl justify-start w-fit ">
            Services
          </h1>
          <hr />
          <div className="wrapper flex flex-row">
            {serviceCard(
              "Chat with Your PDFs",
              "ransform your PDF documents into interactive conversations. Highlight, annotate, and discuss directly within the PDF. Collaborate seamlessly with your team and clients",
              "/pagePDF",
              "/documents-search-icon.svg"
            )}
            {serviceCard(
              "Voice to Insight",
              "Effortlessly convert spoken words into summarized text. Ideal for meetings, interviews, or any recorded content. Save time and capture the essence of your audio files.",
              "/pageAudio",
              "diagnostic-pulse-icon.svg"
            )}
            {serviceCard("Comming Soon", "", "", "/under-construction-barrier-icon.svg")}
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
}
