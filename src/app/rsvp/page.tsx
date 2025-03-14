"use client";

import { useEffect, useRef, useState } from "react";

export default function RSVP() {
  const [iframeHeight, setIframeHeight] = useState(400); // Default height
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Listen for messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "tally-height-update") {
        setIframeHeight(event.data.height);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      // Cleanup
      document.body.removeChild(script);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
    <div className="row-start-1 col-[1/-1]">
      <h2 className="text-pink col-span-full">
        Please let us know if you can join us by June 1! Just fill out the form
        below.
      </h2>
    </div>
      <iframe
        ref={iframeRef}
        data-tally-src="https://tally.so/embed/w2lbA9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height={iframeHeight}
        title="RSVP to our wedding!"
        className="border-none outline-none focus:outline-none col-span-full"
      />
    </>
  );
}
