import Link from "next/link";
import { FC } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobnob and Evil | Getting There",
};
const GettingThere: FC = () => {
  return (
    <>
      <iframe
        className="row-start-1 sm:row-end-4 -mt-12 sm:-mt-18 col-[1/-1] sm:col-[2/10] w-full aspect-square border-8 border-blue rounded-xl"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-1.899942755699158%2C53.675618544198855%2C-1.8932533264160158%2C53.67904390690464&amp;layer=mapnik&amp;marker=53.677334470324844%2C-1.8965953588485718"
      />
      <h1 className="bg-purple row-start-1 sm:row-start-2 col-[1/12] -ml-6 sm:-ml-0 z-10">
        Getting There
      </h1>

      <span className="row-start-2 col-[1/-1] sm:col-[11/-1] flex flex-col gap-2">
        <h2 className="text-yellow">The address</h2>
        <p className="text-pink text-xl font-semibold">
          The Venue Bowers Mill
          <br />
          Branch Rd
          <br />
          Barkisland
          <br />
        Halifax
          <br />
          HX4 0AD
          <br />
          United Kingdom
        </p>

        <h2 className="text-yellow">What3words</h2>
      <p className="row-start-3 col-[1/-1] sm:col-[11/-1] text-pink">
        <Link
          href="https://what3words.com/award.words.rather"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold"
        >
          &#47;&#47;&#47;award.words.rather
        </Link>
      </p>
      </span>
      <div className="row-start-4 col-[1/-1] sm:col-[2/-2] flex flex-col gap-4">
        <h2 className="text-purple">By train</h2>

        <p className="text-purple">
          Halifax Station is helpfully very close to the venue. You can get a
          direct train there from London King’s Cross; it takes about 2.5 hours.
          For tickets,{" "}
          <Link
            href="https://www.thetrainline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink"
          >
            click here
          </Link>
          .
        </p>

        <p className="text-purple">
          Once you’re at the station, the easiest thing is to order a taxi: some
          options are{" "}
          <Link
            href="https://www.google.com/localservices/prolist?spp=CgsvZy8xdGg1YzNycg%3D%3D&source=sh/x/loc/srv/m1/0&kgs=3fbd045c51c12314&src=2&slp=UhMIARIPEg0iCy9nLzF0aDVjM3Jy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink"
          >
            Best Taxis
          </Link>{" "}
          or{" "}
          <Link
            href="https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWM0NXI0em42&source=sh/x/loc/srv/m1/0&kgs=5e3f618843c31939&src=2&slp=UhUIARIREg8iDS9nLzExYzQ1cjR6bjY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink"
          >
            Crossley Cars
          </Link>
          , but Uber works here too. It’s about 15 minutes to the venue.
        </p>

        <h2 className="text-pink">By car</h2>
        <span className="text-pink">
          <p className="text-pink">
            For those driving, the best way to get here is via the M62:
          </p>
          <ul className="list-disc list-inside ml-8">
            <li>Exit at Junction 24 for Halifax/Huddersfield.</li>
            <li>Follow signs for Halifax, then Barkisland.</li>
            <li>
              The Venue is located on Branch Road, with parking available
              on-site.
            </li>
          </ul>
        </span>
        <span className="text-blue flex flex-col gap-4">
          <h2 className="text-purple">If you’re flying</h2>
          <p>
            We’re so grateful to our international guests who are making the
            journey to see us. We want you to feel your best on the day, so if
            possible, we’d suggest arriving 1-2 days before to settle in.
          </p>
          <p>
            The closest airport is Manchester Airport (MAN), which is about an
            hour’s drive away. You can also take the train from Manchester
            Airport to Halifax, then grab a taxi from the station (see “by
            train” above).
          </p>
          <p>
            If you’re flying into London, it’s a bit more of a headache as
            you’ll need to get into central London, then out again. Here’s some
            guidance on how to make it as simple as possible.
          </p>

          <h3 className="text-purple">From Gatwick</h3>
          <p>
            Look for the Thameslink Railway service heading north, which will
            take you to St Pancras Station. These trains come very frequently,
            at least every 10 minutes. You can buy tickets if you want, but if
            you have contactless on your phone or credit/debit card you can also
            just tap in and out at the turnstiles. (Don’t take the Gatwick
            Express—it will take you to another part of London and you’ll have
            to catch the Tube from there.) You’ll be on the Thameslink for about
            an hour.
          </p>
          <p>
            Get off at St Pancras, grab a snack if you want, then leave the
            station and go across the street to King’s Cross station (they are
            next to each other but not in the same building). This is where
            you’ll catch the train to Halifax (see “by train” above).
          </p>

          <h3 className="text-aqua">From Heathrow</h3>
          <p>
            Take the Piccadilly Line from the airport to King’s Cross St
            Pancras. This should take about an hour. From there, you can catch
            your train to Halifax (see “by train” above).
          </p>

          <h3 className="text-yellow">From Stansted</h3>
          <p>
            Don’t go into London at all. Instead, take the CrossCountry Railway
            service north to Peterborough, which takes about 90 minutes. At
            Peterborough you can then catch a train to Halifax. (Grand Central
            Railway does run some direct trains between Halifax and
            Peterborough, so it’s a good idea to look for those, but most of the
            time you’ll have to change at Leeds.)
          </p>

          <p>
            <strong>A general note on trains in the UK:</strong> this country
            has a very good and well-connected train system, and you can book
            most tickets on{" "}
            <Link
              href="https://www.thetrainline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink"
            >
              TheTrainline.com
            </Link>
            . Prices tend to be transparent and consistent, but definitely go up
            closer to the date. If you know you need to take a train, it’s a
            good idea to book your tickets about a month in advance. If you’d
            like some help planning your journey, just drop us a line!
          </p>
        </span>
      </div>
    </>
  );
};

export default GettingThere;
