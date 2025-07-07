import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// import Home from "./components/home";
// import About from './components/about';
// import Contact from './components/contact';
import { lazy, Suspense } from 'react';
import LazyLoader from './components/lazy-loader';

const Home = lazy(() => import('./components/home'));
// const About = lazy(() => import('./components/about'));
const About = lazy(() => slowImport(() => import('./components/about')));
const Contact = lazy(() => import('./components/contact'));

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 6xl;
  text-align: center;
  margin-top: 8rem;
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: 2xl;
`;

const NavContainer = styled.div`
  margin-top: 8rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

// Simulates long import
const slowImport = (loader, delay = 5000) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(loader()), delay);
  });

function App() {
  return (
    <AppContainer>
      <Heading>Practicing advanced React</Heading>
      <NavContainer>
        <Nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </Nav>
      </NavContainer>
      <Suspense fallback={<LazyLoader show delay={1000} />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Suspense>
    </AppContainer>
  );
}

export default App;
