"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNode,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiAppian, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const exper = {
  title: "My Experience",
  description:
    "With 2 years of experience as a Software Engineer, I have a strong foundation in Appian and continuing to learn others like NextJS, React, C#, and more. My expertise lies in Appian, where I have successfully delivered many products to internal facing partners",
  items: [
    {
      company: "Bank of America",
      position: "Software Engineer I - II",
      duration: "July 2022 - Present",
    },
    {
      company: "Wal-Mart",
      position: "Sales Associate - Team Lead",
      duration: "Decemeber 2016 - July 2022",
    },
  ],
};

const ed = {
  title: "My Education",
  description:
    "I graduated from Plainfield North Highschool in 2016. I then went on to JJC, where I finished my General Education. After moving to North Carolina, I attended the University of North Carolina at Charlotte. During my time at there, I focused on Computer Science.",
  items: [
    {
      school: "University of North Carolina at Charlotte",
      education: "Bachelors Degree",
      duration: "August 2019 - May 2022",
    },
    {
      school: "Joliet Junior College",
      education: "Completed Gen Eds",
      duration: "August 2016 - May 2018",
    },
    {
      school: "Plainfield North High School",
      education: "Graduated",
      duration: "August 2012 - May 2016",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Testing this method",
  items: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <SiAppian />,
      name: "Appian",
    },
  ],
};

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      className="flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-10"
        >
          <TabsList className="flex flex-col w-full mx-auto max-w-96 xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-20 w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-6 text-center mx-12 xl:text-left xl:mx-0">
                <h3 className="text-3xl font-bold">{exper.title}</h3>
                <p className="text-white/60 mx-auto xl:mx-0">
                  {exper.description}
                </p>
                <ScrollArea className="h-1/2">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {exper.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#0d2937] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-2xl text-accent">
                            {item.company}
                          </span>
                          <p className="text-white/60 max-w-60 min-h-8 text-center lg:text-left">
                            {item.duration}
                          </p>
                          <p className="flex items-center mt-4">
                            {item.position}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-6 text-center mx-12 xl:text-left xl:mx-0">
                <h3 className="text-3xl font-bold">{ed.title}</h3>
                <p className="text-white/60 mx-auto xl:mx-0">
                  {ed.description}
                </p>
                <ScrollArea className="h-1/2">
                  <ul className="grid grid-cols-1 gap-6">
                    {ed.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#0d2937] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-2xl text-accent">
                            {item.school}
                          </span>
                          <p className="text-white/60 max-w-60 min-h-8 text-center lg:text-left">
                            {item.duration}
                          </p>
                          <p className="flex items-center mt-4">
                            {item.education}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-6 mx-12 xl:mx-0">
                <div>
                  <h3 className="text-3xl font-bold">{skills.title}</h3>
                  <p className="text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 xl:gap-14">
                  {skills.items.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center"
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="p-6 lg:p-14 bg-[#0d2937] rounded-xl flex justify-center items-center group">
                              <div className="text-8xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Experience;
