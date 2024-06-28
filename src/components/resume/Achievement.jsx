
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-4xl font-bold">Course Completed</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="JavaScript Algorithms and Data Structures"
            subTitle="I completed the JavaScript Algorithms and Data Structures course with FreeCodeCamp in 2019"
            result="Certificate"
            des="The JavaScript Algorithms and Data Structures course covering the fundamental concepts of JavaScript including algorithms, data structures, and essential problem solving techniques."
          />
          <ResumeCard
            title="ResPonsive Web Design"
            subTitle="I completed the Responsive Web Design course with FreeCodeCamp in 2021."
            result="Certificate"
            des="The Responsive Web Design course from freeCodeCamp teaches how to create greater web pages on any device, focusing on HTML, CSS, and media queries."
          />
          <ResumeCard
            title="Corporate Etiquette"
            subTitle="10 minute school in 2024."
            result="Certificate"
            des="Learned efficient meetings, data security, cloud software benefits, official email/SMS use, and effectively using IQ and EQ at work."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-4xl font-bold">Course Completed</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Communication Hack"
            subTitle="I completed the Communication Hack course with 10 minute school in 2024."
            result="Certificate"
            des="The 10-Minute School Communication Hack emphasizes effective interaction: use names, avoid filler, maintain eye contact, listen actively, and give constructive feedback."
          />
          <ResumeCard
            title="Proper Email Writing"
            subTitle="10 minute school in 2024."
            result="Certificate"
            des="Proper Email Writing Course covers essential skills including email fields, subject lines, tone, salutations, acronyms, and response etiquette for professionalism."
          />
          <ResumeCard
            title="Basic JavaScript"
            subTitle="Bangladesh Army."
            result="Certificate"
            des="The Basic JavaScript course covered essential topics: variables, data types, functions, conditionals, loops, arrays, objects, DOM manipulation, and basic event handling."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
