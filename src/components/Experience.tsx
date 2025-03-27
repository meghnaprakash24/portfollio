import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  background: var(--background-color);
`;

const ExperienceContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 3rem;
  text-align: center;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--primary-color);
    margin: 0.5rem auto;
  }
`;

const Timeline = styled(motion.div)`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--glass-border);
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  width: 50%;
  padding-right: 3rem;
  
  &:nth-of-type(even) {
    margin-left: 50%;
    padding-right: 0;
    padding-left: 3rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    right: -6px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--primary-color);
    border: 2px solid var(--background-color);
  }
  
  &:nth-of-type(even)::before {
    right: auto;
    left: -6px;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px var(--glass-shadow);
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const Company = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const Position = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const Date = styled.span`
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.7;
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  color: var(--text-color);
  opacity: 0.8;
`;

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'College of Continuing Education (CCE) at Sacramento State',
      position: 'Student Assistant',
      date: 'January 2024 - Present',
      location: 'California, United States',
      description: 'Contributing to the College of Continuing Education through administrative support and student services.',
      technologies: ['Administrative Support', 'Student Services', 'Office Management']
    },
    {
      company: 'Master of Science in Business Analytics Association',
      position: 'Treasurer',
      date: 'August 2023 - Present',
      location: 'California, United States',
      description: 'Managing financial operations and budgeting for the Business Analytics Association.',
      technologies: ['Financial Management', 'Budget Planning', 'Leadership']
    }
  ];

  return (
    <ExperienceSection id="experience" ref={ref}>
      <ExperienceContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </SectionTitle>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ExperienceCard
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <ExperienceHeader>
                  <div>
                    <Company>{exp.company}</Company>
                    <Position>{exp.position}</Position>
                  </div>
                  <Date>{exp.date}</Date>
                </ExperienceHeader>
                <Description>{exp.description}</Description>
                <TechStack>
                  {exp.technologies.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceContent>
    </ExperienceSection>
  );
};

export default Experience; 