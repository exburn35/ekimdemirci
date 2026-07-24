"use client";

interface LogoProps {
  className?: string;
  textClassName?: string;
}

export default function Logo({ className, textClassName }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      {/* SVG Icon */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 160 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-12" // Default height, scalable
      >
        {/* The 'e' outside ring */}
        <path d="M12.6,56.7 c0,22,17,39.9,39.1,39.9 c11.5,0,22.1-5,29.3-13.1 l-14.7-14.1 c-3.9,4.2-9.4,6.7-15.5,6.7 c-9.1,0-16.7-5.9-19-14.2 H86 c0.3-1.7,0.5-3.5,0.5-5.3 c0-21.8-17.7-39.6-39.6-39.6 C23.6,17,4,33.5,4,55 C4,55.6,4,56.1,4.1,56.7 H12.6 z M46.9,34 c9.3,0,17.2,6.5,19.2,15.1 H27.7 C29.7,40.5,37.6,34,46.9,34 z" fill="#392F67"/>
        
        {/* The 'd' ring and stem */}
        <path d="M112,17 c-21.9,0-39.6,17.8-39.6,39.6 c0,21.8,17.7,39.6,39.6,39.6 c21.9,0,39.6-17.8,39.6-39.6 V17 H112 z M112,76.5 c-11,0-19.9-8.9-19.9-19.9 C92.1,45.6,101,36.7,112,36.7 c11,0,19.9,8.9,19.9,19.9 C131.9,67.6,123,76.5,112,76.5 z" fill="#392F67"/>
        
        {/* Orange element on 'e' */}
        <polygon points="53.8,77.5 73.1,88.9 78.4,79.5 59.1,68.1" fill="#F5985A"/>
        
        {/* Orange element on 'd' top */}
        <polygon points="120.3,17 151.6,2.2 151.6,17" fill="#F5985A"/>
      </svg>
      
      {/* Custom Text specifically matching the font style of "ekimdemirci" */}
      <span 
        className={textClassName || "text-2xl font-bold tracking-tight text-[#392F67]"}
        style={{ fontFamily: "'Inter', sans-serif" }} // Using Inter as fallback to closest geometry
      >
        ekimdemirci
      </span>
    </div>
  );
}
