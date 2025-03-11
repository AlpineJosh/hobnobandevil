import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';
import HeadingPicture from "@/images/Cuddle-Club.png"
import RaspberryWhirl from "@/images/Raspberry-Whirl-Flip.png"
import Zzz from "@/images/Zzz.png"
import BlueTwistLine from "@/images/Blue-Whirl.png"
import BlueWave from "@/images/Blue-Wave.png"

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
    address: [
      "400 Stainland Rd",
      "Stainland",
      "Halifax",
      "HX4 9HF"
    ]
  },
  {
    name: "The Malt House",
    url: "https://malthouserishworth.co.uk/",
    driveTime: "10 minute drive",
    address: [
      "270 Oldham Rd",
      "Rishworth",
      "Sowerby Bridge",
      "HX6 4QB"
    ]
  },
  {
    name: "Pennine Manor Hotel",
    url: "https://penninemanor.co.uk",
    driveTime: "10 minute drive",
    address: [
      "Nettleton Hill Rd",
      "Scapegoat Hill",
      "Huddersfield",
      "HD7 4NH"
    ]
  },
  {
    name: "The Alma Inn",
    url: "https://www.alma-inn.co.uk/",
    driveTime: "15 minute drive",
    address: [
      "Four Lane Ends",
      "Sowerby Bridge",
      "HX6 4NS"
    ]
  },
  {
    name: "Stay Hotel",
    url: "https://stayhotel.co.uk/",
    driveTime: "20 minute drive",
    address: [
      "Princess St",
      "Huddersfield",
      "HD1 2TT"
    ]
  },
  {
    name: "Shibden Mill Inn",
    url: "https://shibdenmillinn.com/",
    driveTime: "25 minute drive",
    address: [
      "Shibden Mill Fold",
      "Halifax",
      "HX3 7UL"
    ]
  },
  {
    name: "Hebden Townhouse",
    url: "https://www.hebdentownhouse.co.uk/",
    driveTime: "25 minute drive",
    address: [
      "10 New Rd",
      "Hebden Bridge",
      "HX7 8AD"
    ]
  }
];

const SleepingPage: FC = () => {
  return (
    <div className="flex flex-col gap-12 px-4 items-center">
      <div className="relative w-full max-w-screen-md ">
        <Image src={HeadingPicture} alt="Josh and Eve" className="object-cover -mt-20 " />
        <Image src={RaspberryWhirl} alt="Raspberry Whirl" className="absolute top-1/2 -left-80 max-w-72" />
        <Image src={Zzz} alt="Zzz" className="absolute -right-60 bottom-0 max-w-52" />
        <Image src={BlueTwistLine} alt="Blue Twist Line" className="absolute -top-20 -right-65 max-w-52" />
        <h1 className="bg-pink absolute bottom-20 right-0 ">Sleeping Arrangements</h1>
      </div>

      
      <p className="mb-8 text-aqua">
        There are loads of hotels and B&Bs near the venue at a range of price points. 
        Below are some suggestions. We recommend booking soon to make sure they have space, 
        as this seems to be a surprisingly popular time of year for weddings up north!
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 self-stretch">
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
            <h3 className="text-lg mb-2 text-yellow">{accommodation.driveTime}</h3>
            {accommodation.address.map((line, index) => (
              <div className="text-purple" key={index}>{line}</div>
            ))}
          </div>
        ))}
      </div>

      <Image src={BlueWave} alt="Blue Wave" className="w-4/5" />
    </div>
  );
};

export default SleepingPage;