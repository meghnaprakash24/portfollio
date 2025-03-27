import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/IMG_0609.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--bg-color) 0%, var(--bg-alt) 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Greeting = styled(motion.h1)`
  font-size: 1.25rem;
  color: var(--primary-color);
  font-weight: 500;
`;

const Name = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-color);
`;

const Title = styled(motion.h3)`
  font-size: 2rem;
  color: var(--secondary-color);
  font-weight: 500;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.6;
  max-width: 500px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 4/5;
  border-radius: 30px;
  overflow: hidden;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: 0 4px 20px var(--glass-shadow);
  margin: 0 auto;
  
  @media (max-width: 768px) {
    max-width: 300px;
  }
  
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

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HeroSection ref={ref}>
      <HeroContent>
        <HeroText>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </Greeting>
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meghna Prakash
          </Name>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Business Analytics Professional
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Undergraduate student at California State University-Sacramento, specializing in Management Information Systems and Business Analytics. 
            Passionate about leveraging data to drive business decisions and create meaningful impact.
          </Description>
        </HeroText>
        <HeroImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image src={profileImage} alt="Meghna Prakash" />
        </HeroImage>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 