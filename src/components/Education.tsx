import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

const EducationSection = styled.section`
  padding: 6rem 2rem;
  background: var(--background-color);
`;

const EducationContent = styled.div`
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

const EducationGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const EducationCard = styled(motion.div)`
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px var(--glass-shadow);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const School = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const Degree = styled.h4`
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

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Achievement = styled.li`
  font-size: 0.95rem;
  color: var(--text-color);
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '•';
    color: var(--primary-color);
    font-weight: bold;
  }
`;

const CertificationsContainer = styled(motion.div)`
  margin-top: 4rem;
`;

const CertificationsTitle = styled(motion.h3)`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const CertificationsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const CertificationCard = styled(motion.div)`
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px var(--glass-shadow);
`;

const CertificationTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const CertificationDate = styled.span`
  font-size: 0.85rem;
  color: var(--text-color);
  opacity: 0.7;
`;

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      school: 'California State University-Sacramento',
      degree: 'Bachelor\'s degree, Management Information Systems and Business Analytics',
      date: 'August 2021 - December 2024',
      description: 'Specialized in Business Analytics and Management Information Systems.',
      achievements: [
        'Allen J. Rosoff Memorial Scholarship',
        'Faculty Endowment Award',
        'Dean\'s List',
        'Active member of Business Analytics Association'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Level 4: Excel Black Belt',
      date: '2023',
      issuer: 'Microsoft'
    },
    {
      title: 'Foundations of Project Management',
      date: '2023',
      issuer: 'Google'
    }
  ];

  return (
    <EducationSection id="education" ref={ref}>
      <EducationContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Education
        </SectionTitle>
        <EducationGrid>
          {education.map((edu, index) => (
            <EducationCard
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <School>{edu.school}</School>
              <Degree>{edu.degree}</Degree>
              <Date>{edu.date}</Date>
              <Description>{edu.description}</Description>
              <AchievementsList>
                {edu.achievements.map((achievement, i) => (
                  <Achievement key={i}>{achievement}</Achievement>
                ))}
              </AchievementsList>
            </EducationCard>
          ))}
        </EducationGrid>
        <CertificationsContainer>
          <CertificationsTitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Certifications
          </CertificationsTitle>
          <CertificationsGrid>
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <CertificationTitle>{cert.title}</CertificationTitle>
                <CertificationDate>{cert.date} • {cert.issuer}</CertificationDate>
              </CertificationCard>
            ))}
          </CertificationsGrid>
        </CertificationsContainer>
      </EducationContent>
    </EducationSection>
  );
};

export default Education; 