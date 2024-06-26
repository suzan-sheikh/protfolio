import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import logo from '../../assets/images/download.gif'

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Junior MERN Stack Developer.", "Frontend React Developer.", "MS Office Expert"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I am <span className="text-designColor capitalize">Suzan</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I always try to apply new ideas to my projects by utilizing my acquired knowledge and past experiences.
        </p>
      </div>
     {/* Media */}
     <Media />

     <div className="flex gap-4 justify-center">
        <a href="#" target="_blank" rel="noopener noreferrer">
          
          <div className="w-60 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"> 
          Download Resume
          <img src={logo} alt="image" className="w-6 ml-3" />
          </div>            
        </a>
      </div>
    </div>
  );
}

export default LeftBanner