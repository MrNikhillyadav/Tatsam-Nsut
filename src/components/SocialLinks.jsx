import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import { RiThreadsLine, RiDownloadFill } from "react-icons/ri";

export default function SocialLinks() {
  return (
    <div className="flex flex-col  h-[5vh] justify-center items-center">
    <div className="  border border-slate-600 decoration-purple-100 drop-shadow-2xl   bg-black sm:bg-opacity-30 bg-opacity-50 bg-blur-lg  px-[2rem] md:px-[4rem] rounded-xl  flex text-white text-sm mb-[4rem] sm:mb-5 md:text-xl gap-8 justify-center items-center py-5">
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
