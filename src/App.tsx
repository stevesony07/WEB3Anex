import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { AuthPage } from './components/Auth/AuthPage';
import { DemoRequest } from './components/Contact/DemoRequest';
import { UserProfile } from './components/User/UserProfile';
import { Button } from './components/shared/Button';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="cursor-outline"
        style={{ left: `${position.x - 16}px`, top: `${position.y - 16}px` }}
      />
    </>
  );
};

function HomePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(auth.currentUser);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const sections = [
    {
      id: 'home',
      content: (
        <div className="flex items-center justify-between gap-12 max-w-7xl mx-auto px-4">
          <div className="flex-1">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-7xl font-bold cyber-text gradient-text mb-6"
            >
              Agentic Nex
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl mb-8 leading-relaxed"
            >
              Welcome to Agentic Nex, an AI-powered platform revolutionizing software development by automating the entire lifecycle—from conceptualization to deployment. As a lean startup, we operate with a maximum of 2 human employees, supported by a dynamic team of Agentic AI developers who autonomously handle software creation tasks, optimizing workflows, and ensuring rapid, scalable development. Enhance efficiency and innovation for your business with our advanced NLP, machine learning, and AI tools for SRS analysis, full-stack automation, design, and code generation.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4"
            >
              <Button type="primary" onClick={() => navigate('/request-demo')}>
                Get Started
              </Button>
              <Button type="outline" onClick={() => document.getElementById('mission')?.scrollIntoView()}>
                Learn More
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 relative w-full max-w-lg aspect-square"
          >
            <img
              src="/images/hero-image.png"
              alt="AI Development"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      )
    },
    {
      id: 'mission',
      title: 'Mission & Vision',
      content: (
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl mb-8 leading-relaxed">
            Fueled by a dynamic team of Agentic AI developers revolutionizing software automation, Agentic Nex is committed to transforming the development landscape with AI, aiming to streamline the entire lifecycle for unparalleled efficiency while envisioning error-free, accessible coding for all.
          </p>
          <div className="flex justify-center gap-4">
            <Button type="outline" onClick={() => document.getElementById('features')?.scrollIntoView()}>
              Explore Our Mission
            </Button>
            <Button type="secondary" onClick={() => navigate('/about')}>
              Discover Our Vision
            </Button>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Core Features',
      content: (
        <div>
          <p className="text-xl text-center mb-12 max-w-4xl mx-auto">
            Empowered by Agentic AI developers crafting innovative solutions, Agentic Nex delivers cutting-edge features providing rapid, scalable AI tools.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3 className="text-2xl mb-4 cyber-text">Intelligent SRS Analysis</h3>
              <p>Advanced NLP for comprehensive requirement analysis</p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl mb-4 cyber-text">Full-Stack Automation</h3>
              <p>End-to-end development process automation</p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl mb-4 cyber-text">Code Generation</h3>
              <p>Production-ready code synthesis with AI</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'why-us',
      title: 'Why Choose Agentic Nex',
      content: (
        <div>
          <p className="text-xl text-center mb-12 max-w-4xl mx-auto">
            With Agentic AI developers powering seamless automation, Agentic Nex offers unmatched advantages in the AI-driven software landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card">
              <h3 className="text-2xl mb-4 cyber-text">End-to-End Efficiency</h3>
              <p>Complete development lifecycle automation with context-aware intelligence</p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl mb-4 cyber-text">10x Development Speed</h3>
              <p>Accelerated development with enterprise-level security</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'clients',
      title: 'Who We Serve',
      content: (
        <div>
          <p className="text-xl text-center mb-12 max-w-4xl mx-auto">
            Supported by Agentic AI developers automating software for agility, Agentic Nex enhances productivity across industries through our futuristic AI approach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <h3 className="text-2xl mb-4 cyber-text">SMEs</h3>
              <p>Cost-effective, quick solutions for growing businesses</p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl mb-4 cyber-text">Startups</h3>
              <p>Rapid prototyping and development</p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl mb-4 cyber-text">Enterprises</h3>
              <p>Scalable, secure systems for large organizations</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Transform Your Development',
      content: (
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl mb-8">
            Step into the future of development with Agentic Nex, where Agentic AI developers drive a revolutionary AI-powered platform, transforming your software creation.
          </p>
          <div className="flex justify-center gap-4">
            <Button type="primary" onClick={() => navigate('/request-demo')}>
              Schedule Demo
            </Button>
            <Button type="outline" onClick={() => navigate('/docs')}>
              View Documentation
            </Button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="cyberpunk-bg text-white min-h-screen">
      <CustomCursor />
      
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50 bg-black/50 backdrop-blur-sm">
        <img 
          src="/images/logo.png" 
          alt="Agentic Nex Logo" 
          className="h-12 w-auto cursor-pointer"
          onClick={() => navigate('/')}
        />
        <div className="flex gap-4 items-center">
          {user ? (
            <UserProfile />
          ) : (
            <>
              <Button type="outline" onClick={() => navigate('/auth')}>Login</Button>
              <Button type="primary" onClick={() => navigate('/request-demo')}>Request Demo</Button>
            </>
          )}
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center pt-20">
        {sections.find(section => section.id === 'home')?.content}
      </section>

      {sections.slice(1).map(({ id, title, content }) => (
        <section key={id} id={id} className="min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4">
            {title && (
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold mb-12 text-center cyber-text"
              >
                {title}
              </motion.h2>
            )}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {content}
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/request-demo" element={<DemoRequest />} />
      </Routes>
    </Router>
  );
}

export default App;