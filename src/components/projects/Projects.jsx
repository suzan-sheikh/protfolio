import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 text-justify">
        <ProjectsCard
          title="Study Platform"
          des=" This project is an advanced educational platform that allows students to book sessions, create and manage their notes, and access various learning materials. It incorporates Firebase for secure email-password registration, and Google and GitHub login options. MongoDB is utilized for backend data management through APIs."
          src={projectOne}
          github="https://github.com/suzan-sheikh/Collaborative-Study-Platform-Client"
          githubServer="https://github.com/suzan-sheikh/Collaborative-Study-Platform-Server"
          liveSite="https://brainbond-e920d.web.app"
        />
        <ProjectsCard
          title="Job Hunter"
          des="You Can apply ultimate destination for career opportunities in this website! Browse through thousands of job listings across various industries, from tech to healthcare, and everything in between. I user-friendly interface makes job searching a breeze, while our advanced search filters help you the perfect match for your skills."
          src={projectTwo}
            github="https://github.com/suzan-sheikh/Job-Hunter-Client"
            githubServer="https://github.com/suzan-sheikh/Job-Hunter-Server"
            liveSite="https://upwork-8699b.web.app"
        />
        <ProjectsCard
          title="Tourism Management"
          des="The Tursum Management website, developed with React, features Lottie animations, typewriter effects, and form handling via React Hook Form. It includes Swiper sliders, AOS scrolling animations, theme toggling, and Firebase-based user authentication. MongoDB manages tour data, and private routes secure content."
          src={projectThree}
            github="https://github.com/suzan-sheikh/Tourism-Management"
            githubServer="https://github.com/suzan-sheikh/Tourism-Management-Server"
            liveSite="https://awt-tourism.web.app"
        />        
      </div>
    </section>
  );
}

export default Projects