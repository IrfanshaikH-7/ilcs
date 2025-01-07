import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo, seventy_five_years, logo_short, thirty_years } from '../../assets';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Our Projects', link: '/projects' },
  { name: 'Gallery', link: '/gallery' },
  { name: 'Services', link: '/services' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) return; // Don't handle scroll events on other pages
      
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Set initial state based on route
    if (!isHomePage) {
      setScrolled(true);
    } else {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, isHomePage]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled || !isHomePage
          ? 'h-[65px] bg-white' 
          : 'h-[100px] bg-white'
      }`}
    >
      <nav className={`max-w-[99%] mx-auto px-2 md:px-8 h-full flex items-center justify-between transition-all duration-500 ${
        scrolled || !isHomePage ? 'py-2' : 'py-4'
      }`}>
        {/* Logo */}
        <div className='flex gap-4'>
        <Link 
          to="/" 
          className={`font-bold transition-all duration-500 ${
            scrolled || !isHomePage ? 'text-gray-800 text-xl' : 'text-gray-800 text-2xl'
          }`}
        >
          <img 
            src={logo_short} 
            alt="logo" 
            className={`w-auto transition-all duration-500 scale-90  ${
              scrolled || !isHomePage ? 'h-10 md:h-16' : 'h-12 md:h-24'
            }`} 
          />
        </Link>
        <Link 
          to="/" 
          className={`font-bold transition-all duration-500 ${
            scrolled || !isHomePage ? 'text-gray-800 text-xl' : 'text-gray-800 text-2xl'
          }`}
        >
          <img 
            src={seventy_five_years} 
            alt="logo" 
            className={`w-auto transition-all duration-500 scale-90 ${
              scrolled || !isHomePage ? 'h-10 md:h-16' : 'h-12 md:h-24'
            }`} 
          />
        </Link>
        <Link 
          to="/" 
          className={`font-bold transition-all duration-500 ${
            scrolled || !isHomePage ? 'text-gray-800 text-xl' : 'text-gray-800 text-2xl'
          }`}
        >
          <img 
            src={thirty_years} 
            alt="logo" 
            className={`w-auto transition-all duration-500 scale-90 ${
              scrolled || !isHomePage ? 'h-10 md:h-16' : 'h-12 md:h-24'
            }`} 
          />
        </Link>
        </div>
     

        {/* Navigation Links */}
        <div className=" items-center gap-8 hidden md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.link} 
              className={`transition-all duration-500 hover:opacity-75 ${
                scrolled || !isHomePage ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
       
          <button 
            className={`px-4 py-2 rounded-full transition-all duration-500 ${
              scrolled || !isHomePage
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
          >
            Contact
          </button>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div 
          className={`fixed inset-0 top-[65px] bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center pt-8 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 text-lg hover:opacity-75"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 