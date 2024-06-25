import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="Trust Innovation - (2023 - Till Now)"
            result="Bangladesh"
            des="Trust Innovation is a software company of Bangladesh Army Welfare Trust. Various technology related services are provided from this institution. The institution is run by the Bangladesh Army."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="AITSO - (2021 - 2022)"
            result="Bangladesh"
            des="AITSO Bangladesh Army Information Technology Support Organizations It is a technology support organization of Bangladesh Army through which its own technology services are provided."
          />
          <ResumeCard
            title="Branch Supervisor"
            subTitle="Bangladesh Army - (2013 - 2023)"
            result="Bangladesh"
            des="As a non-commissioned officer in the Bangladesh Army, I served in various branches, including the accounting section, for a total of 10 years. During this period, I worked as an assistant for 6 years and as a branch supervisor for 4 years."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2023</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IT Instructor"
            subTitle="Army School of Administration and Education (2021 - 2022)"
            result="Tangail"
            des="As an instructor at the Army School of Administration and Education, I trained students on workplace IT, email writing, cybersecurity, and Microsoft Office for computer management."
          />
          <ResumeCard
            title="Software Instructor"
            subTitle="Bangladesh Army (2018 - 2019)"
            result="Chittagong "
            des="As a trainer, I have trained various units and organizations on payroll preparation and how to pay salaries and allowances to their employees using IBASS++, which is used for government pay Payment System. Also, I have provided training on communication software."
          />
          <ResumeCard
            title="Basic Instructor"
            subTitle="Bangladesh Army (2015 - 2017)"
            result="Bangladesh"
            des="As an additional responsibility, I taught the new soldiers the basics after joining the unit, making them understand their respective responsibilities."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
