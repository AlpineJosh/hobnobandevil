import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import HeadingPicture from "@/images/Cuddle-Club.png";
import RaspberryWhirl from "@/images/Raspberry-Whirl-Flip.png";
import Zzz from "@/images/Zzz.png";
import BlueTwistLine from "@/images/Blue-Whirl.png";
import BlueWave from "@/images/Blue-Wave.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobnob and Evil | Sleeping Arrangements",
}
interface Accommodation {
  name: string;
  url: string;
  driveTime: string;
  address: string[];
}

const accommodations: Accommodation[] = [
  {
    name: "1885 the Venue",
    url: "https://1885thevenue.com/",
    driveTime: "5 minute drive",
    address: ["400 Stainland Rd", "Stainland", "Halifax", "HX4 9HF"],
  },
  {
    name: "The Malt House",
    url: "https://malthouserishworth.co.uk/",
    driveTime: "10 minute drive",
    address: ["270 Oldham Rd", "Rishworth", "Sowerby Bridge", "HX6 4QB"],
  },
  {
    name: "Pennine Manor Hotel",
    url: "https://penninemanor.co.uk",
    driveTime: "10 minute drive",
    address: ["Nettleton Hill Rd", "Scapegoat Hill", "Huddersfield", "HD7 4NH"],
  },
  {
    name: "The Alma Inn",
    url: "https://www.alma-inn.co.uk/",
    driveTime: "15 minute drive",
    address: ["Four Lane Ends", "Sowerby Bridge", "HX6 4NS"],
  },
  {
    name: "Stay Hotel",
    url: "https://stayhotel.co.uk/",
    driveTime: "20 minute drive",
    address: ["Princess St", "Huddersfield", "HD1 2TT"],
  },
  {
    name: "Shibden Mill Inn",
    url: "https://shibdenmillinn.com/",
    driveTime: "25 minute drive",
    address: ["Shibden Mill Fold", "Halifax", "HX3 7UL"],
  },
  {
    name: "Hebden Townhouse",
    url: "https://www.hebdentownhouse.co.uk/",
    driveTime: "25 minute drive",
    address: ["10 New Rd", "Hebden Bridge", "HX7 8AD"],
  },
];

const SleepingPage: FC = () => {
  return (
    <>
      <Image
        src={HeadingPicture}
        alt="Josh and Eve"
        className="row-start-1 col-[3/-3] object-cover -mt-[15%]"
      />

      <Image
        src={RaspberryWhirl}
        alt="Raspberry Whirl"
        className="row-start-1 col-[1/8] -translate-x-2/3 translate-y-2/3"
      />
      <Image
        src={Zzz}
        alt="Zzz"
        className="row-start-1 col-[-5/-1] translate-x-1/3 place-self-end"
      />
      <Image
        src={BlueTwistLine}
        alt="Blue Twist Line"
        className="row-start-1 col-[-5/-1] translate-x-4/5 -translate-y-1/2 place-self-start"
      />
      <h1 className="bg-pink row-start-1 col-[-8/-2]">Sleeping Arrangements</h1>

      <p className="row-start-2 col-[2/-2]  text-aqua">
        There are loads of hotels and B&Bs near the venue at a range of price
        points. Below are some suggestions. We recommend booking soon to make
        sure they have space, as this seems to be a surprisingly popular time of
        year for weddings up north!
      </p>

      <div className="row-start-3 col-[2/-2] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 self-stretch">
        {accommodations.map((accommodation) => (
          <div key={accommodation.name}>
            <h2 className="block w-fit font-bold mb-2 text-pink not-underlined">
              <Link
                href={accommodation.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {accommodation.name}
              </Link>
            </h2>
            <h3 className="text-lg mb-2 text-yellow">
              {accommodation.driveTime}
            </h3>
            {accommodation.address.map((line, index) => (
              <div className="text-purple" key={index}>
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Image src={BlueWave} alt="Blue Wave" className="row-start-4 col-[3/-3]" />
    </>
  );
};

export default SleepingPage;
