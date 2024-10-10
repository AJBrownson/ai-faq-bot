"use client";
import { useState, useEffect } from "react";
import { CopilotPopup } from "@copilotkit/react-ui";
import { useCopilotReadable } from "@copilotkit/react-core";
// import frequentlyAskedQuestions from "@/utils/faq.json";
import teeweetyInfo from "@/utils/TeeweetyInfo";
import HeroSection from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTA";


// export interface FAQ {
//   question: string;
//   answer: string;
// }

// export interface FAQData {
//   frequentlyAskedQuestions: FAQ[];
// }

export default function Home() {
  /* this stores the information about Teeweety imported from the utils/TeeweetyInfo.ts file
     and it is stored in the state using the setFaq function */
  // const [faq, setFaq] = useState<FAQData | null>(null);

  // useEffect(() => {
  //   setFaq(frequentlyAskedQuestions as FAQData);
  // }, []);

  /* this stores the information about Teeweety imported from the utils/TeeweetyInfo.ts file
     and it is stored in the state using the setInfo function */
  const [info, setInfo] = useState<string | null>(null);

  /* this sets the info state to the imported data from the utils/TeeweetyInfo.ts file
     using the setInfo function */
  useEffect(() => {
    setInfo(teeweetyInfo);
  }, []);

  // this is the code to use the useCopilotReadable hook to display the info state in the Copilot popup
  // it takes in the info state as a value and displays it in the Copilot popup
  useCopilotReadable({
    description: "The data in the info",
    value: info,
  });

  return (
    <>
      <main>
        <HeroSection />
        <Features />
        <Testimonials />
        <Pricing />
        <CTASection />
      </main>

      <CopilotPopup
        instructions={
          "You are assisting the user as best as you can. Answer in the best way possible with the data you have been given."
        }
        labels={{
          title: "Mini 👩",
          initial:
            "👋 Hello. I'm Mini, your Teeweety Assistant. How can I help you make the most of your social media scheduling experience today?",
        }}
      />
    </>
  );
}
