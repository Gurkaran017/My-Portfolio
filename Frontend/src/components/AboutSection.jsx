import TabButton from "./TabButton";
import { useState } from "react";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 md:grid-cols-3 gap-x-4">
        <li>Java</li>
        <li>JavaScript</li>
        <li>C/C++</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Git & GitHub</li>
        <li>RESTful APIs</li>
        <li>Data Structures & Algorithms</li>
        <li>Operating Systems</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Engineering in Computer Science — Chitkara University (2021–2025)</li>
        <li>Senior Secondary (Class 12) — Chandigarh Model-40 School</li>
        <li>Courses: DBMS, OOP, Core Java, Front-End & Back-End Engineering</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 gap-x-4">
        <li>Coding mini projects</li>
        <li>Exploring new tech tools</li>
        <li>Watching documentaries</li>
        <li>Late-night debugging 😅</li>
      </ul>
    ),
  }
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-zinc-300" id="about-me">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
    src="/images/b.png" 
    alt="Gurkaran coding" 
    className="w-full h-auto object-contain rounded-lg max-h-[500px]" // Better responsive control
  />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-zinc-300">About Me</h2>

            <p className="text-base lg:text-lg">
              I’m <b>Gurkaran Singh</b>, a Computer Science engineering student and passionate full stack developer.<br />
              I specialize in the MERN stack and love building scalable, responsive web applications. With a strong foundation in Java, data structures, and backend systems, I enjoy solving real-world problems through code.<br />
              I’ve built full-stack projects like a bookstore app and real-time chat app, and I’m always eager to learn new technologies and frameworks.<br />
              Whether it's refining a UI or debugging backend logic, I thrive on learning and improvement.
            </p>

            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("hobbies")}
                active={tab === "hobbies"}
              >
                Hobbies
              </TabButton>
            </div>

            <div className="mt-4">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
