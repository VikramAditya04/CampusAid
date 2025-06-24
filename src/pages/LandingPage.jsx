// src/pages/LandingPage.jsx
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { 
  BookOpen, 
  Store, 
  Calendar, 
  Home as HomeIcon, 
  Search,
  ChevronRight,
  UserPlus,
  BookMarked,
  Sparkles,
  Github,
  Twitter,
  Linkedin
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeatureCard from "../components/feature/FeatureCard";
import { Button } from "../components/ui/Button";
import SpotlightCard from "../components/ui/SpotlightCard";

const features = [
  {
    title: "Study Help",
    description: "Share notes, find study groups, and access tutorials to ace your courses.",
    icon: <BookOpen className="h-5 w-5 text-accent" />
  },
  {
    title: "Marketplace",
    description: "Buy and sell textbooks, furniture, and more within your campus community.",
    icon: <Store className="h-5 w-5 text-accent" />
  },
  {
    title: "Clubs & Events",
    description: "Discover and join campus activities, clubs, and events that match your interests.",
    icon: <Calendar className="h-5 w-5 text-accent" />
  },
  {
    title: "Roommate Finder",
    description: "Find compatible roommates and housing options near your campus.",
    icon: <HomeIcon className="h-5 w-5 text-accent" />
  },
  {
    title: "Lost & Found",
    description: "Reconnect with lost items and help others find their belongings.",
    icon: <Search className="h-5 w-5 text-accent" />
  }
];

const statements = [
  "Connecting Students",
  "Bridging Gaps",
  "Empowering Communities",
  "Simplifying Campus Life"
];

export default function LandingPage() {
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isStaggerComplete, setIsStaggerComplete] = useState(false);

  useEffect(() => {
    const statement = statements[currentStatementIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedText === statement) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentStatementIndex((prev) => (prev + 1) % statements.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? statement.substring(0, displayedText.length - 1)
          : statement.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentStatementIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStaggerComplete(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="home-page" className="min-h-screen bg-bg animate-gradient">
      <Navbar />
      {/* Hero Section */}
      <div className="min-h-[99vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0A0F2C] via-[#121C3B] to-[#1a237e]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[15%] w-32 h-32 rounded-full bg-primary opacity-10 animate-float blur-3xl"></div>
          <div className="absolute top-[60%] right-[10%] w-48 h-48 rounded-full bg-accent opacity-10 blur-3xl" style={{animation: 'float 4s ease-in-out infinite 1s'}}></div>
          <div className="absolute top-[30%] right-[20%] w-20 h-20 rounded-full bg-primary opacity-10 blur-3xl" style={{animation: 'float 7s ease-in-out infinite 0.5s'}}></div>
          <div className="absolute bottom-[15%] left-[25%] w-36 h-36 rounded-full bg-accent opacity-10 blur-3xl" style={{animation: 'float 5s ease-in-out infinite 1.5s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-black text-text sm:text-6xl md:text-7xl animate-fade-in">
              <span className="block mb-2">
                <span className="text-primary inline-block animate-pulse-soft">Campus</span>
                <span className="text-text">Aid</span>
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-purple-600 h-16 sm:h-20">
                {displayedText}
                <span className="animate-pulse text-purple-600">|</span>
              </span>
            </h1>
            <p className="mt-12 max-w-2xl mx-auto text-xl text-text-secondary sm:mt-8 animate-slide-up leading-relaxed">
              Connect with peers, find resources, and make the most of your university experience.
            </p>
            <div className="mt-20  flex flex-col sm:flex-row justify-center gap-16">
              <Button size="lg" className="px-8 shadow-lg hover-scale animate-slide-up glass" style={{animationDelay: '200ms'}}>
                <UserPlus className="mr-3 h-5 w-5" />
                Join Now
              </Button>
              <Button size="lg" variant="outline" className="px-8 shadow-md hover-scale animate-slide-up glass" style={{animationDelay: '400ms'}} asChild>
                <a href="#features" className="flex items-center">
                  <Sparkles className="mr-3 h-5 w-5" />
                  Explore Features
                </a>
              </Button>
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-10 mt-10 mb-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-text-secondary"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase animate-fade-in">
              Features
            </h2>
            <p className="mt-3 text-4xl font-black text-text sm:text-5xl sm:tracking-tight animate-slide-up">
              What You Can Do <span className="inline-block animate-pulse-soft">✨</span>
            </p>
            <p className="max-w-xl mt-6 mx-auto text-xl text-text-secondary animate-slide-up leading-relaxed" style={{animationDelay: '100ms'}}>
              Everything you need to make the most of your campus experience, all in one place.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {features.map((feature, index) => {
              let path = '/';
              if (feature.title === "Study Help") path = "/study-help";
              else if (feature.title === "Marketplace") path = "/marketplace";
              else if (feature.title === "Clubs & Events") path = "/clubs-events";
              else if (feature.title === "Roommate Finder") path = "/roommate-finder";
              else if (feature.title === "Lost & Found") path = "/lost-found";
              return (
                <div 
                  key={index} 
                  className={`transition-all duration-500 transform ${
                    isStaggerComplete 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${150 * index}ms` }}
                >
                  <SpotlightCard >
                    <Link to={path} className="block h-full">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-lg font-bold text-text mb-2">{feature.title}</h3>
                        <p className="text-sm text-text-secondary">{feature.description}</p>
                      </div>
                    </Link>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="card-dark glass glass-hover p-8 hover-scale animate-fade-in shadow-2xl border-2 border-glass-border">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary bg-opacity-10 mb-6">
                <UserPlus className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Connect with Peers</h3>
              <p className="text-text-secondary leading-relaxed">Find and connect with students who share your interests, courses, and goals.</p>
            </div>
            
            <div className="card-dark glass glass-hover p-8 hover-scale animate-fade-in shadow-2xl border-2 border-glass-border" style={{animationDelay: '200ms'}}>
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-accent bg-opacity-10 mb-6">
                <BookMarked className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Access Resources</h3>
              <p className="text-text-secondary leading-relaxed">Discover study materials, guides, and resources shared by your fellow students.</p>
            </div>
            
            <div className="card-dark glass glass-hover p-8 hover-scale animate-fade-in shadow-2xl border-2 border-glass-border" style={{animationDelay: '400ms'}}>
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary bg-opacity-10 mb-6">
                <Sparkles className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Enhance Experience</h3>
              <p className="text-text-secondary leading-relaxed">Make the most of your campus life with events, housing help, and more.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-24 text-center animate-fade-in">
            <div className="inline-block transform transition-all hover:scale-105">
              <Button size="lg" className="px-10 py-6 text-lg shadow-lg glass" asChild>
                <Link href="/community" className="inline-flex items-center">
                  Explore Community
                  <ChevronRight className="ml-3 h-5 w-5 animate-pulse-soft" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with social links */}
      <footer className="bg-footer-bg text-footer-text py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">CampusAid</h3>
              <p className="text-text-secondary leading-relaxed">Making campus life easier, one connection at a time.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors p-2">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-primary transition-colors p-2">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-primary transition-colors p-2">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-text-secondary">
            <p>&copy; {new Date().getFullYear()} CampusAid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
