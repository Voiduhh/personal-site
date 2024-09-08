"use client";

import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Canvas } from "@react-three/fiber";
import Keybaord from "@/components/Site_board";
import { OrbitControls } from "@react-three/drei";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Jacob Pikul</span>
            </h1>
            <p className="max-w-[500px] mb-8 text-white">
              Creative dev that likes to experiment with new fields to gain all
              the knowledge I can
            </p>
            <div className="flex items-center justify-center">
              <Link href="/my resume.txt" target="_blank" download={true}>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Résumé</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
            </div>
          </div>
          <div></div>
          <div className="flex w-1/2 h-[400px] ml-auto mr-0">
            <Canvas
              camera={{ fov: 50, position: [0, 0, 376] }}
              dpr={[1, 1.5]}
              gl={{ preserveDrawingBuffer: true }}
            >
              <OrbitControls enableZoom={false} />
              <ambientLight />
              <directionalLight position={[0, -1, 10]} intensity={0.75} />
              <Suspense fallbak={null}>
                <Keybaord />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
