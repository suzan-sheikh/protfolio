import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          <ResumeCard
            title="Diploma in IT"
            subTitle="Bangladesh University of Professional (01 Year)"
            result="Pass"
            des="The Bangladesh Army enhanced my skills with a Diploma in IT, where I learned computer programming, networking, database management, and workplace security relevant to our duties."
          />
          <ResumeCard
            title="Higher Secondary Certificate"
            subTitle="Sirajganj Police Lines School And College (2011 - 2013)"
            result="3.19/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Areamohon High School in Sirajgonj (2006 - 2010)"
            result="3.10/5"
            des="Secondary School Certificate is a public examination in Bangladesh conducted by the Boards of Intermediate and Secondary Education under the Ministry of Education."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="Trust Innovation - (2023 - Till Now)"
            result="Bangladesh"
            des="Trust Innovation is a software company of Bangladesh Army Welfare Trust. Various technology related services are provided from this institution. The institution is run by the Bangladesh Army."
          />
          <ResumeCard
            title="Front-end Developer (Attachment)"
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
    </motion.div>
  );
}

export default Education