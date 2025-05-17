"use client";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className='lg:py-16'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 items-center md:grid-cols-12"
            >
                <div className='col-span-8 2xl:col-span-6 w-full text-center md:text-left md:place-self-start my-auto sm:pl-4 xl:pl-16'>
                    <h1 className="text-zinc-300 text-3xl sm:text-5xl lg:text-6xl mt-12">
                        <span className='gradient-text bg-gradient-to-r'>Hi, I'm</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Gurkaran Singh',
                                1000,
                                'Full Stack Developer',
                                1000,
                                'MERN Stack Enthusiast',
                                1000,
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                        />
                    </h1>

                    <div className="text-zinc-500 text-base sm:text-lg lg:text-xl my-6 flex flex-col gap-3">
                        <p>I build full stack applications using the MERN stack 🚀</p>
                        <p>Passionate about solving real-world problems with clean, efficient code 💻</p>
                        <p>Always learning, adapting, and debugging—because there's always a better way 🧠</p>
                        <p>From data structures to dynamic UIs, I'm all in 🛠️</p>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                        <Link to='/contacts'>
                            <button className="sm:w-fit px-6 py-3 border-2 rounded-full font-semibold border-zinc-950
                            text-zinc-300 button-contact bg-gradient-to-br from-cyan-600 via-indigo-600 to-pink-600">
                                Contact me
                            </button>
                        </Link>
                        <a href="https://www.linkedin.com/in/gurkaran-singh-b0241b2a0" target="_blank" rel="noopener noreferrer">
                            <button className="sm:w-fit px-6 py-3 border-2 rounded-full font-semibold border-zinc-300
                            hover:border-cyan-500 hover:text-cyan-400">
                                LinkedIn
                            </button>
                        </a>
                        <a href="https://github.com/Gurkaran017" target="_blank" rel="noopener noreferrer">
                            <button className="sm:w-fit px-6 py-3 border-2 rounded-full font-semibold border-zinc-300
                            hover:border-indigo-500 hover:text-indigo-400">
                                GitHub
                            </button>
                        </a>
                        <a href="https://drive.google.com/file/d/1Io9mHb5mrwVRRgh6GpEPav3qVyp2BIMF/preview" target="_blank" rel="noopener noreferrer">
    <button className="sm:w-fit px-6 py-3 border-2 rounded-full font-semibold border-zinc-300
    hover:border-emerald-500 hover:text-emerald-400">
        View Resume
    </button>
</a>

<a href="https://drive.google.com/uc?export=download&id=1Io9mHb5mrwVRRgh6GpEPav3qVyp2BIMF">
    <button className="sm:w-fit px-6 py-3 border-2 rounded-full font-semibold border-zinc-300
    hover:border-lime-500 hover:text-lime-400">
        Download Resume
    </button>
</a>

                    </div>
                </div>

                <div className="col-span-4 place-self-center md:m-0 mt-6 mb-12">
                    <div className="rounded-full w-[250px] h-[250px] relative">
                        <img src="/images/pic2.jpg" alt="Gurkaran Singh" className="rounded-3xl absolute transform -translate-x-1/2
                        -translate-y-1/2 top-1/2 left-1/2 lg:w-fit w-[180px]" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
