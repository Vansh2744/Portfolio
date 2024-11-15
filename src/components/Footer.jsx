import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full">
      <div className="bg-gray-600 h-[100px] sm:h-[130px] flex flex-col text-center">
        <h1 className="text-lg sm:text-xl font-bold my-2 sm:my-5 text-orange-600">
          You can find me on
        </h1>
        <div className="flex items-center justify-around">
          <a href="https://www.linkedin.com/in/vansh-choudhary/">
            <FaLinkedin className="text-black text-4xl sm:text-5xl shadow-sm shadow-orange-500 hover:shadow-md hover:shadow-orange-500 cursor-pointer" />
          </a>
          <a href="https://github.com/Vansh2744">
            <FaGithub className="text-black text-4xl sm:text-5xl shadow-sm shadow-orange-500 hover:shadow-md hover:shadow-orange-500 cursor-pointer" />
          </a>
          <a href="https://x.com/Vansh433759">
            <FaXTwitter className="text-black text-4xl sm:text-5xl shadow-sm shadow-orange-500 hover:shadow-md hover:shadow-orange-500 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
