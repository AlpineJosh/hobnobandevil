import JoshFAQ from "@/images/Josh-FAQ.png";
import EveFAQ from "@/images/Eve-FAQ.png";

import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hobnob and Evil | FAQ",
};

export default function FAQ() {
  return (
    <>
      <Image
        src={EveFAQ}
        alt="Josh and Eve"
        className="row-start-1 col-[1/12] object-cover -translate-x-1/4 -translate-y-1/8 hidden sm:block"
      />
      <Image
        src={JoshFAQ}
        alt="Josh and Eve"
        className="row-start-1 col-[10/20] object-cover translate-x-1/8 -translate-y-1/16 hidden sm:block"
      />
      <div className="row-start-1 col-[1/-1] sm:col-[10/-1] z-10">
        <h1 className="bg-aqua inline">Frequently Asked Questions</h1>
      </div>

      <div className="[&>h2]:text-pink space-y-6 text-purple col-[1/-1]">
        <h2>What time should I arrive on the day?</h2>
        <p>
          Please plan to arrive between 2 and 2:15pm so we can get everyone
          seated and settled. We’ll be kicking off at 2:30pm on the dot.{" "}
        </p>

        <h2>What’s the weather like in Yorkshire in November?</h2>
        <p>
          Honestly, who can say. Expect it to be chilly, maybe rainy, probably
          overcast, perhaps sunny, potentially all at once. All activities will
          be indoors, so you won’t have to worry about getting rained on, but in
          the UK it’s always best to bring layers.
        </p>

        <h2>What’s the dress code?</h2>
        <p>
          Party clothes! If you’re like us, you probably spend a lot of time in
          “athleisure,” aka PJs and slippers. This is your chance to dust off
          those old suits and dancing shoes. To us that means
          cocktail/semi-formal attire for ladies, dress shirts and trousers at
          minimum for guys. Just make sure you’re comfortable moving around and
          being on your feet.
        </p>

        <h2>Can I bring a plus one?</h2>
        <p>
          We love that you have friends! Friends are so important! But in this
          case, we’d be grateful if you didn’t bring any surprise extra friends
          to our wedding. If you’re allowed to bring a plus one it will say so
          explicitly on your invite.
        </p>

        <h2>Can I bring my child?</h2>
        <p>
          We respect all lifestyle choices and are deeply impressed that you are
          raising a human. That said, please leave your kid at home. This is a
          party for grown-ups. We really do have to insist on this one.
        </p>

        <h2>Can I bring my dog?</h2>
        <p>
          Unfortunately the venue is not pet-friendly, so your pooch will need
          to stay behind. You can bring pictures, though!
        </p>

        <h2>Can I take pictures at the wedding?</h2>
        <p>
          Heck yeah. Just please don’t take any during the ceremony, because it
          interferes with our photographers’ ability to get good shots.
        </p>

        <h2>I love social media. Can I post about you guys?</h2>
        <p>
          Go for it. We don’t use it much ourselves so any social coverage will
          need to come from you anyway. Feel free to tag Eve on Instagram at{" "}
          <Link
            className="text-aqua"
            href="https://www.instagram.com/evebinder"
          >
            @evebinder
          </Link>{" "}
          (Josh doesn’t have social media).
        </p>

        <h2>Good god, this sounds like a long day.</h2>
        <p>
          We know. People in the UK go hard at weddings, but not everyone is
          used to this level of revelry (including us). To help you power
          through, we’ll have spaces available for “recharge time”: reading,
          answering texts, joining Eve’s dad on the couch for a nap, whatever
          you want. We’ll also have lots of games that you can play either with
          others or on your own. Just try to stick around until the pub quiz,
          because you might win a prize!
        </p>

        <h2>What’s your policy on gifts?</h2>
        <p>
          We know how expensive weddings can be to attend, and we’re just happy
          you’re able to join us. If giving a gift feels important to you, you
          can contribute to our{" "}
          <span className="line-through">Empty Post-Wedding Bank Accounts</span>{" "}
          Honeymoon Fund{" "}
          <Link
            href="https://www.paypal.com/paypalme/hobnobandevil"
            className="text-aqua"
          >
            here
          </Link>
          . We’ll also have a place for cards at the venue if that’s more your
          thing.
        </p>

        <h2>I’m arriving early/staying an extra day. What can I do nearby?</h2>
        <p>
          Awesome! West Yorkshire is absolutely beautiful, so we recommend
          taking a country walk if the weather is nice. You can find some good
          trails{" "}
          <Link
            href="https://www.alltrails.com/en-gb/england/west-yorkshire/halifax/walking"
            className="text-aqua"
          >
            here
          </Link>
          . Halifax itself also has some cool sites, including{" "}
          <Link
            href="https://www.atlasobscura.com/places/piece-hall"
            className="text-aqua"
          >
            Piece Hall
          </Link>{" "}
          and, randomly, the “
          <Link
            href="https://www.atlasobscura.com/places/wainhouse-tower"
            className="text-aqua"
          >
            world’s tallest folly
          </Link>
          .” If you’re willing to travel a little farther, we’d wholeheartedly
          suggest taking the train to York, which is a gorgeous medieval town
          with loads of shops and pretty streets, plus{" "}
          <Link
            href="https://www.jorvikvikingcentre.co.uk/"
            className="text-aqua"
          >
            a truly unhinged museum
          </Link>
          .
        </p>

        <h2>I have another question.</h2>
        <p>
          We’re here to help! Email us{" "}
          <Link
            className="text-aqua"
            href="mailto:eve.binder@gmail.com,josh@hobson.io"
          >
            here
          </Link>
          .
        </p>
      </div>
    </>
  );
}
