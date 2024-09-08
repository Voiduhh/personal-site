import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const githubProjects = [
  {
    title: "Portfolio Site",
    link: "https://github.com/Voiduhh/personal-site",
    image: "/site_image.png",
    description:
      "This sites github repository. Used for people to see how I created this site and use it as inspiration",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-6 xl:px-0">
      <h1 className="text-4xl font-bold mb-6">
        Projects I am working on or completed
      </h1>
      <div className=" grid auto-rows-auto grid-cols-3 gap-6">
        {githubProjects.map((project, index) => {
          return (
            <Link
              key={index}
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
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    width={250}
                    height={250}
                    className={
                      project.image.length === 0
                        ? "hidden"
                        : "w-full h-24 object-scale-down"
                    }
                    src={project.image}
                    alt=""
                  />
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
