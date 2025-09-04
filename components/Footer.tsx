import React from 'react';

const SocialIcon: React.FC<{ href: string, path: string }> = ({ href, path }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  </a>
);

const Footer: React.FC = () => {
  // Placeholder paths for social icons
  const socialLinks = {
    telegram: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.88-1.42 6.75c-.1.49-.42.62-.82.39l-2.18-1.6-1.05 1.01c-.12.12-.22.22-.44.22l.16-2.25 4.1-3.72c.18-.16-.06-.25-.3-.1l-5.06 3.15-2.16-.68c-.48-.15-.48-.46.1-.7l8.28-3.23c.4-.16.76.1.64.58z",
    instagram: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.94 6.32h-1.66c-.48 0-.9.1-.9.7v.9h2.46l-.32 2.46h-2.14v6.28h-2.58v-6.28H9.32v-2.46h1.58v-.7c0-1.58.94-2.46 2.46-2.46h1.58v2.46z",
  };

  return (
    <footer className="bg-text text-background py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="border-t border-gray-700/50 pt-10">
          <p className="font-semibold text-lg font-serif tracking-wider">&copy; {new Date().getFullYear()} LEONID GRIVKO</p>
          <p className="text-sm text-gray-400 mt-2 tracking-widest uppercase">Luxury Business Wear</p>
          <div className="flex justify-center space-x-6 mt-6">
            <SocialIcon href="#" path={socialLinks.telegram} />
            <SocialIcon href="#" path={socialLinks.instagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;