import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const Nav = styled(motion.nav)`
  position: fixed;
  width: 100%;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid var(--glass-border);
  box-shadow: 0 2px 10px var(--glass-shadow);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: var(--primary-color);
    border-radius: 50%;
  }
`;

const NavLinks = styled(motion.ul)`
  display: flex;
  list-style: none;
  gap: 2.5rem;
`;

const NavLink = styled(motion.a)`
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  padding: 0.5rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const NavButton = styled(motion.a)`
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent-color);
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  const navItems = ['About', 'Experience', 'Education', 'Contact'];

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContent>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Meghna Prakash
        </Logo>
        <NavLinks>
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: 'var(--primary-color)' }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </NavLink>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <NavButton
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </NavButton>
          </motion.li>
        </NavLinks>
      </NavContent>
    </Nav>
  );
};

export default Navbar; 