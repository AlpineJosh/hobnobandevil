import Link from "next/link";
import Image from "next/image";
import JoshAndEve from "@/images/Josh-and-Eve.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobnob and Evil",
  description:
    "Josh and Eve are tying the knot this November! We've been planning our wedding since our third date, and we can't wait to finally celebrate with our nearest and dearest.",
};
export default function HomePage() {
  return (
    <>
      <Image
        src={JoshAndEve}
        alt="Josh and Eve"
        className="row-start-1 sm:row-end-4 row-end-1 col-[1/-1] sm:col-[1/12] -ml-[10%] -mt-16 sm:-mt-24"
      />
      <span className="row-start-1 col-[1/-1] sm:col-[10/-1] flex flex-col space-y-0 self-end sm:self-center z-10 sm:mt-36">
        <h1 className=" bg-pink sm:text-4xl">Let The Games Begin!</h1>
        <h1 className="  bg-aqua sm:text-4xl">29 November 2025</h1>
      </span>
      <div className="relative col-[3/-3] sm:col-[13/-2]  sm:row-start-3 place-self-end text-blue space-y-8">
        {/* <div className="absolute -top-10 -mx-25">
          <Image src={BlueRing} alt="Blue Ring" className="object-contain" />
        </div> */}
        <h2 className="[--color-underline:var(--color-aqua)] sm:text-2xl">
          Josh “Hobnob” Hobson and Eve “Evil” Binder are tying the knot this
          November!
        </h2>
        <p className="sm:text-lg">
          We’ve been planning our wedding since our third date, and we can’t
          wait to finally celebrate with our nearest and dearest.
        </p>
        <Link
          className="bg-yellow text-lg text-white px-4 py-2 rounded-md not-underlined font-semibold hover:bg-yellow/80 mx-auto block w-32 text-center"
          href="/rsvp"
        >
          <span className="underlined">RSVP here</span>
        </Link>
      </div>
      <div className="col-[1/-1] sm:col-[3/-2] flex flex-row gap-4 items-center mt-12">
        <h1 className="bg-purple sm:text-3xl">Where</h1>
        <Link href="/getting-there" className="text-pink text-xl sm:text-2xl">
          The Venue Bowers Mill
        </Link>
      </div>
      <div className="col-[1/-1] sm:col-[3/-2] flex flex-row gap-4 items-center -mt-8">
        <h1 className="bg-purple sm:text-3xl">When</h1>
        <p className="text-xl text-blue sm:text-2xl">2:30pm - Midnight*</p>
      </div>
      <div className="col-[2/-2] sm:col-[10/-2] text-aqua text-sm sm:text-base">
        *Note to our American friends: believe it or not, this is the normal
        length of a UK wedding. We’ll help you get through it, don’t worry.
      </div>
    </>
  );
}
