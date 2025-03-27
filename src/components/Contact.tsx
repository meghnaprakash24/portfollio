import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: var(--background-color);
`;

const ContactContent = styled.div`
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

const ContactGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px var(--glass-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
`;

const ContactIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const ContactDescription = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ContactLink = styled(motion.a)`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      description: 'Get in touch with me via email',
      link: 'mailto:meghnaprakash24@gmail.com',
      text: 'meghnaprakash24@gmail.com'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      description: 'Connect with me on LinkedIn',
      link: 'https://www.linkedin.com/in/meghnaprakash-1b64a1291',
      text: 'linkedin.com/in/meghnaprakash-1b64a1291'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      description: 'Check out my projects on GitHub',
      link: 'https://github.com/meghna',
      text: 'github.com/meghna'
    }
  ];

  return (
    <ContactSection id="contact" ref={ref}>
      <ContactContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </SectionTitle>
        <ContactGrid>
          {contactMethods.map((method, index) => (
            <ContactCard
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <ContactIcon
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {method.icon}
              </ContactIcon>
              <ContactTitle>{method.title}</ContactTitle>
              <ContactDescription>{method.description}</ContactDescription>
              <ContactLink
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
              >
                {method.text}
              </ContactLink>
            </ContactCard>
          ))}
        </ContactGrid>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact; 