"use client";

import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      className="container mx-auto grid grid-cols-1 h-[80vh] py-12 px-6 gap-2 xl:grid-cols-2 xl:py-0 xl:px-0"
    >
      <div className="flex flex-col w-full mx-auto justify-start items-start">
        <h3 className="font-bold text-4xl mb-8">Contact Me</h3>
        <ul>
          <li className="flex gap-4 mb-6 justify-left items-center">
            <MdEmail className="text-2xl" />
            <p>jpik98@yahoo.com</p>
          </li>
          <li className="flex gap-4 mb-6 justify-left items-center">
            <FaLinkedinIn className="text-2xl" />
            <p>@jacobpikul</p>
          </li>
          <li className="flex gap-4 mb-6 justify-left items-center">
            <FaGithub className="text-2xl" />
            <p>@Voiduhh</p>
          </li>
        </ul>
      </div>
      <div className="flex items-center rounded-3xl h-full justify-center bg-[#003554]">
        <div className="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center">
          <div className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16">
            <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
              Thank You!
            </p>
            <p className="px-10 text-[10px] sm:text-[12px] text-gray-700">
              Be sure to contact me with any questions or inquiries.
            </p>
            <p className="font-serif text-[10px] sm:text-[12px text-gray-700">
              Have a good rest of the day!
            </p>
          </div>
          <button className="seal bg-accent text-black w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-accent-secondary">
            JP
          </button>
          <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
          <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
          <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
          <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
