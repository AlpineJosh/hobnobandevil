import Question from "@/components/Question";
import HeadingPicture from "@/images/Josh-Eve-Quiz.png";
import YellowSquiggle from "@/images/Yellow-Whirl.png";
import Image from "next/image";

export default function Quiz() {
  return (
    <>
      <Image
        src={HeadingPicture}
        alt="Josh and Eve"
        className="row-start-1 object-cover -mt-20 col-[3/-3]"
      />
      <h1 className="row-start-1 bg-pink col-[3/10] z-10">A Quiz</h1>
      <div className="relative w-full max-w-screen-md mx-auto"></div>

      <Image
        src={YellowSquiggle}
        alt="Yellow Squiggle"
        className="absolute top-0 -left-60 max-w-72"
      />
      <span className="row-start-2 col-[1/10] z-10 text-purple">
        <h2 className=" text-purple">
          How well do you know Josh and Eve?
          <br />
          Test your knowledge.
        </h2>
      </span>

      <div className="row-start-4 col-[1/-1] grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
        <Question
          question="Where did Josh and Eve meet?"
          options={[
            "At the gym",
            "At a restaurant",
            "Online",
            "While skydiving",
          ]}
          answer={1}
          explanation="This is kind of an unfair question because we met at a party hosted at a restaurant by the gym we both go to. So in a way, we met at the gym — but technically it was still a restaurant."
          color="aqua"
        />

        <Question
          question="Who is 'baby angel'?"
          options={[
            "One of Eve's cats",
            "Josh when he's done something nice",
            "A creature called a potto",
            "Eve's sister Darcie",
          ]}
          answer={0}
          explanation="Josh and Eve have three pets: Tilly the Australian Shepherd, and Disaster and Calamity, both Ragdoll cats. Tilly goes by 'Princess', Calamity is 'baby angel', and Disaster is 'asshole' (because he is one)."
          color="purple"
        />

        <Question
          question="How did Josh propose to Eve?"
          options={[
            "During a boat cruise on the Thames",
            "Over oatmeal while she was half asleep",
            "While riding a fat pony",
            "After a 17-course meal at a restaurant in Hounslow",
          ]}
          answer={1}
          explanation="Josh had been planning his proposal as a part of a getaway weekend for months, but he knew Eve would spend the whole time dying of nervous anticipation — so he got it out of the way before they left. She has no idea what he said because she was crying too loudly!"
          color="yellow"
        />

        <Question
          question="What is Josh and Eve's favourite snack?"
          options={[
            "Dairy Milk mini buttons",
            "Dried mango",
            "Sharing tub of ice cream in one sitting",
            "Chunks of feta cheese eaten straight from the fridge like a lunatic",
          ]}
          answer={"Any"}
          explanation="Josh and Eve have weird snacking habits, and neither of them care to self-reflect on this point."
          color="blue"
        />

        <Question
          question="What is Josh and Eve's lifelong aspiration?"
          options={[
            "To teach children to play the triangle",
            "To operate a charity for lazy cats",
            "To establish a worldwide empire of tiny houses",
            "To become cheesemongers in Yorkshire",
          ]}
          answer={2}
          explanation="Josh and Eve hope to live a delightfully carefree, childless life in their tiny homes across a range of continents. Josh will do most of the hard work of constructing said tiny homes, and Eve will entertain him by reading him problematic posts on Reddit."
          color="pink"
        />

        <Question
          question="Who is Josh's favourite author?"
          options={[
            "Some guy named Brian Anderson",
            "Some guy named Brian Sanderson",
            "Some guy named Brandon Anderson",
            "Some guy named Brandon Sanderson",
          ]}
          answer={3}
          explanation="Answer: D. Brandon Sanderson is an incredibly popular fantasy writer who has written over 70 books. Eve does not know the answer to this question."
          color="aqua"
        />
      </div>
    </>
  );
}
