import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const githubProjects = [
  {
    title: "Portfolio Site",
    link: "https://github.com/Voiduhh/personal-site",
    image: "",
    description:
      "This sites github repository. Used for people to see how I created this site and use it as inspiration",
  },
  {
    title: "Project 1",
    link: "",
    image: "",
    description: "tesing",
  },
  {
    title: "Project 1",
    link: "",
    image: "",
    description: "tesing",
  },
  {
    title: "Project 1",
    link: "",
    image: "",
    description: "tesing",
  },
  {
    title: "Project 1",
    link: "",
    image: "",
    description: "tesing",
  },
  {
    title: "Project 1",
    link: "",
    image: "",
    description: "tesing",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto grid auto-rows-auto grid-cols-3 gap-6">
      {githubProjects.map((project, index) => {
        return (
          <Link
            href={project.link}
            target="_blank"
            className={`row-span-1  ${
              index === 0
                ? "col-span-3"
                : index === githubProjects.length - 1
                ? "col-span-3"
                : index % 4 === 0
                ? "col-span-1"
                : index % 4 === 1
                ? "col-span-1"
                : index % 4 === 2
                ? "col-span-2"
                : index % 4 === 3
                ? "col-span-2"
                : "col-span-3"
            } hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-slate-950 duration-300 ease-in-out`}
          >
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Test</p>
                <img src="" alt="" />
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default Projects;
