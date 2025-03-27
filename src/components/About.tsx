import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/IMG_0609.jpg';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: var(--background-color);
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const AboutText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--primary-color);
    margin-top: 0.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillsTitle = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
`;

const SkillTag = styled(motion.div)`
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  font-size: 1.1rem;
  color: var(--text-color);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 450px;
  aspect-ratio: 3/4;
  border-radius: 30px;
  overflow: hidden;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: 0 4px 20px var(--glass-shadow);
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
    opacity: 0.1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'Business Analytics',
    'Financial Management',
    'Project Management',
    'Data Analysis',
    'Excel',
    'Management',
    'Leadership',
    'Administrative Support'
  ];

  return (
    <AboutSection id="about" ref={ref}>
      <AboutContent>
        <AboutText>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About Me
          </SectionTitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm a dedicated Business Analytics professional with a strong foundation in Management Information Systems. 
            Currently pursuing my Bachelor's degree at California State University-Sacramento, I combine academic excellence 
            with practical experience in financial management and administrative support.
          </Description>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My experience as a Treasurer for the Master of Science in Business Analytics Association and Student Assistant 
            at the College of Continuing Education has equipped me with valuable skills in leadership, financial management, 
            and administrative operations. I'm passionate about leveraging data-driven insights to make informed business decisions.
          </Description>
          <SkillsContainer
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SkillsTitle>Skills & Expertise</SkillsTitle>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillTag
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </SkillTag>
              ))}
            </SkillsGrid>
          </SkillsContainer>
        </AboutText>
        <AboutImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image src={profileImage} alt="About Me" />
        </AboutImage>
      </AboutContent>
    </AboutSection>
  );
};

export default About; 