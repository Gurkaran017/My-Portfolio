import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faClock,
  faUsers,
  faHandsHelping,
  faBrain
} from '@fortawesome/free-solid-svg-icons';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SkillSection() {
  const techSkills = [
    { name: 'HTML & CSS', percentage: 100 },
    { name: 'JavaScript', percentage: 100 },
    { name: 'React', percentage: 100 },
    { name: 'Node.js', percentage: 90 },
    { name: 'Tailwind CSS', percentage: 100 },
    { name: 'Responsive Design', percentage: 100 },
    { name: 'UI/UX Design', percentage: 70 },
    { name: 'SQL & Databases', percentage: 60 },
    { name: 'React Native', percentage: 10 }
  ];

  const softSkills = [
    { name: 'Communication', icon: faComments },
    { name: 'Time Management', icon: faClock },
    { name: 'Teamwork', icon: faUsers },
    { name: 'Collaboration', icon: faHandsHelping },
    { name: 'Problem Solving', icon: faBrain }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id='skills'>
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-zinc-300 mt-8 mb-8 md:mb-12">Tech Skills</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:grid-cols-3 lg:gap-x-24'>
        {techSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className='my-4'
          >
            <p>{skill.name}</p>
            <div className='mt-2'>
              <div
                style={{
                  backgroundColor: 'rgb(212, 212, 216)',
                  borderRadius: '20px',
                  height: '16px',
                  margin: '5px 0'
                }}
              >
                <div
                  style={{
                    width: `${skill.percentage}%`,
                    background: 'linear-gradient(90deg, rgba(8,145,178,1) 0%, rgba(79,70,229,1) 50%, rgba(219,39,119,1) 100%)',
                    borderRadius: '20px',
                    height: '100%'
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="text-center text-2xl sm:text-3xl font-bold text-zinc-300 mt-12 mb-8 md:mb-12">Soft Skills</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 lg:grid-cols-3 lg:gap-x-24'>
        {softSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            ref={ref}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className='bg-zinc-300 rounded-full w-full h-fit my-2 flex flex-row items-center'
          >
            <FontAwesomeIcon icon={skill.icon} className='p-5 sm:w-7 text-zinc-800' />
            <p className='text-zinc-900 font-semibold mx-4'>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
