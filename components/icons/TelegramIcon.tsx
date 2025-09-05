import React from 'react';

const TelegramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.88-1.42 6.75c-.1.49-.42.62-.82.39l-2.18-1.6-1.05 1.01c-.12.12-.22.22-.44.22l.16-2.25 4.1-3.72c.18-.16-.06-.25-.3-.1l-5.06 3.15-2.16-.68c-.48-.15-.48-.46.1-.7l8.28-3.23c.4-.16.76.1.64.58z"/>
  </svg>
);

export default TelegramIcon;
