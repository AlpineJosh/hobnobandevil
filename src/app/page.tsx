import Link from "next/link";
import Image from "next/image";
import JoshAndEve from "@/images/Josh-and-Eve.png";
import BlueRing from "@/images/Blue-Ring.png";
export default function HomePage() {
  return (
    <div className="grid grid-cols-12 gap-5 grid-rows-[auto_min-content_auto_auto_auto] ">
      <div className="bg-white col-start-1 col-span-12 row-start-2 row-end-6">
        
      </div>

      <Image src={JoshAndEve} alt="Josh and Eve" className="-mt-20 -ml-20 col-start-1 col-end-7 row-start-1 row-span-3" />
      <div className="col-start-5 col-end-10 row-start-2">
        <h1 className="bg-pink text-3xl">Let The Games Begin!</h1>
        <h1 className="bg-aqua text-3xl">29 November 2025</h1>
      </div>
      <div className="relative col-start-7 col-span-6 row-start-3 text-blue">
        <div className="absolute -top-15  -left-20 -right-20">
          <Image src={BlueRing} alt="Blue Ring" className="object-contain" />
        </div>
        <h2 className="text-2xl [--color-underline:var(--color-aqua)]">
          Josh “Hobnob” Hobson and Eve “Evil” Binder are tying the knot this
          November!
        </h2>
        <p className="text-xl">
          We’ve been planning our wedding since our third date, and we can’t
          wait to finally celebrate with our nearest and dearest.
        </p>
      </div>
      <div className="col-start-2 col-end-12 flex flex-row gap-4 items-center">
        <h1 className="bg-purple">Where</h1>
        <Link href="/getting-there" className="text-pink text-2xl">The Venue Bowers Mill</Link>
      </div>
      <div className="col-start-3 col-end-12 flex flex-row gap-4 items-center">
        <h1 className="bg-purple">When</h1>
        <p className="text-2xl text-blue">2:30pm - Midnight*</p>
      </div>
      <div className="col-start-6 col-span-6 text-aqua">
      *Note to our American friends: believe it or not, this is the normal length of a UK wedding. We'll help you get through it, don't worry.
      </div>
    </div>
  );
}
