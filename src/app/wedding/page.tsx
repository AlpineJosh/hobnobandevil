import HeadingPicture from "@/images/Bowers-Mill.png";
import ProposalPicture from "@/images/Josh-Eve-Books.png";
import YellowWave from "@/images/Yellow-Wave.png";
import RaspberryLine from "@/images/Raspberry-Line.png";
import CakeFork from "@/images/Cake-Fork.png";
import LetsPlayCocktail from "@/images/Lets-Play-Cocktail.png";

import Image from "next/image";
import Link from "next/link";
export default function Wedding() {
  return (
    <div className="flex flex-col gap-12 px-4 items-center">
      <div className="relative w-full max-w-screen-md ">
        <Image
          src={HeadingPicture}
          alt="Josh and Eve"
          className="object-cover -mt-20 "
        />
        <h1 className="bg-pink absolute top-0 left-0 ">The Wedding</h1>
      </div>

      <span className=" text-blue flex flex-col gap-6">
        <p>
          Our venue is a gorgeous former textile mill in the heart of the
          English countryside. We love it because it features lots of wood,
          which Josh likes, and industrial pointy bits, which Eve likes. It also
          happens to be pretty convenient and accessible by public transport.
          (Well, sort of. It’s a lot more convenient than a barn in rural Wales,
          which was also an option at one point.)
        </p>

        <p>
          All events on the day, from the ceremony to reception, will be held at
          the mill. For details on getting there and where to stay, please see{" "}
          <Link className="text-pink" href="/sleeping">
            Sleeping Arrangements
          </Link>
          .
        </p>
      </span>
      <div className="flex flex-row gap-10">
        <div className="w-1/3">
          <Image
            src={ProposalPicture}
            alt="Josh and Eve"
            className="h-full aspect-auto -ml-20"
          />
        </div>
        <div className="grid grid-cols-2  gap-2 text-aqua">
          <h2 className="col-span-2">Order of the Day</h2>
          <h2>2:00pm</h2>
          <p>Arrive and get settled</p>
          <h2>2:30pm</h2>
          <p>Ceremony</p>
          <h2>3:00pm</h2>
          <p>Food, games and mingling</p>
          <h2>5:00pm</h2>
          <p>Dinner is served</p>
          <h2>7:00pm</h2>
          <p>Dancing (and/or recharging)</p>
          <h2>9:30pm</h2>
          <p>Pub quiz and prizes</p>
        </div>
      </div>
      <Image src={YellowWave} alt="Yellow Wave" className="w-7/8" />

      <div className="flex flex-row gap-24">
        <div className="w-3/4 text-purple flex flex-col gap-4">
          <h2>The Vibe</h2>
          <p>
            Yes, this is a party about our love and stuff, but our #1 goal is to
            make sure YOU have fun. We’re planning lots of (optional,
            low-stakes) activities/puzzles/games to keep everyone entertained
            throughout the day—and if you need to tap out for an hour to
            recharge, we’ll have dedicated spaces for that too. Let’s all just
            relax and be silly together.
          </p>
        </div>
        <Image
          src={LetsPlayCocktail}
          alt="Lets Play Cocktail"
          className="w-1/4 shrink-0 -mr-12"
        />
      </div>

      <Image src={RaspberryLine} alt="Raspberry Line" className="w-7/8" />
        

      <div className="flex flex-row gap-24">
        <Image src={CakeFork} alt="Cake Fork" className="w-1/4 shrink-0" />

        <div className="w-3/4 text-pink flex flex-col gap-4">
          <h2>The Aftermath</h2>
          <p>
            For anyone who doesn’t have to shoot off first thing on Sunday, come
            join us at The Cakery, a local brunch spot, from 9:30am to 12pm.
            Depending on numbers, we’ll either book tables or take over the whole
            place, so let us know when you RSVP if we should count you in!
          </p>
        </div>
      </div>
    </div>
  );
}
