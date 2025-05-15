/* eslint-disable react/prop-types */
"use client";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";


const projectsData = [
    
    {
    id: 1,
    title: "BookStore Full Stack App",
    description: "A complete MERN stack BookStore app with user authentication, book listings, and cart functionality.",
    image: "/images/projects/bookstore.PNG",
    gitUrl: "https://github.com/Gurkaran017/BookStore-App",
    previewUrl: "https://bookstore-mern-karan.netlify.app/",
  },
  {
  id: 2,
  title: "LuckyRoll Website",
  description: "A modern and interactive React-based website for a virtual dice roll game, built with Tailwind CSS.",
  image: "/images/projects/luckyroll.PNG",
  gitUrl: "https://github.com/Gurkaran017/LuckyRoll",
  previewUrl: "https://luckroll.netlify.app/",
},
  {
    id: 3,
    title: "Chat App",
    description: "A real-time chat application using Socket.io, React, and Node.js with private room support.",
    image: "/images/projects/chatapp.PNG",
    gitUrl: "https://github.com/Gurkaran017/Chat-App",
    previewUrl: "https://chat-app-karan.netlify.app/",
  },
  {
    id: 4,
    title: "Apple Clone",
    description: "A responsive Apple website clone built using React and Tailwind CSS, replicating Apple’s sleek UI.",
    image: "/images/projects/apple.PNG",
    gitUrl: "https://github.com/Gurkaran017/Apple-Clone",
    previewUrl: "https://apple-clone-karan.netlify.app/",
  },
  {
    id: 5,
    title: "Amazon Clone",
    description: "Amazon UI clone built using React with Tailwind CSS and cart functionality.",
    image: "/images/projects/amazon.PNG",
    gitUrl: "https://github.com/Gurkaran017/Amazon-Clone",
    previewUrl: "https://amazon-clone-karan.netlify.app/",
  },
  {
    id: 6,
    title: "Microsoft Clone",
    description: "Microsoft homepage clone built with React and Tailwind CSS featuring grid layout and animations.",
    image: "/images/projects/microsoft.PNG",
    gitUrl: "https://github.com/Gurkaran017/Microsoft-Clone",
    previewUrl: "https://microsoft-clone-karan.netlify.app/",
  }
];



export default function ProjectSection( {isHomepage} ) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { opacity: 0,  y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    const projectsToDisplay = isHomepage ? projectsData.slice(0, 3) : projectsData;


    return (
        <section id="projects">
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-zinc-300 mt-8 mb-8 md:mb-12">My Projects</h2>

            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsToDisplay.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    />
                </motion.li>
                ))}
            </ul>

            {isHomepage && (
            <div className="flex justify-center mt-12">
                <Link to="/projects">
                    <button className="sm:w-fit px-6 py-3 border-2 rounded-full font-semibold
                     border-zinc-500 text-zinc-500 hover:border-zinc-300 hover:text-zinc-300">All</button>
                </Link>
            </div>
            )}
        </section>
    )
}
