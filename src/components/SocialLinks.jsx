import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import { RiThreadsLine, RiDownloadFill } from "react-icons/ri";

export default function SocialLinks() {
  return (
    <div className="hidden sm:flex flex-col  h-[5vh] justify-center items-center">
      <div className=" shadow-lg border drop-shadow-xl   border-slate-400 duration-100 ease-in bg-slate-800  px-12  rounded-md flex text-white text-sm  md:text-xl gap-8 justify-center items-center py-5">
        <a className="hover:text-[#FF9100] hover:scale-150 duration-300 ease-in-out" href="#">
          <ImGithub />
        </a>
        <a className="hover:text-[#FF9100] hover:scale-150 duration-300 ease-in-out" href="#">
          <ImTwitter />
        </a>
        <a className="hover:text-[#FF9100] hover:scale-150 duration-300 ease-in-out" href="#"><RiThreadsLine /></a>
        
        <a className="hover:text-[#FF9100] hover:scale-150 duration-300 ease-in-out" href="#">
          
          <ImLinkedin />
        </a>
      </div>
     
    </div>
  );
}
