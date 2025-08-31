import React from "react";

interface AvatarProps {
  lightImg: string; // avatar for light mode
  darkImg: string; // avatar for dark mode
}

const GlowingAvatar: React.FC<AvatarProps> = ({ lightImg, darkImg }) => {
  return (
    <div className="relative group inline-block">
      {/* Light Mode Avatar */}
      <img
        src={lightImg}
        alt="AI Avatar Light"
        className="w-96 h-112 object-contain dark:hidden cursor-pointer hover:brightness-90 transition-all"
        onClick={() => {
          // Open chatbot when robot is clicked
          const event = new CustomEvent('openChatbot');
          window.dispatchEvent(event);
        }}
      />

      {/* Dark Mode Avatar with Glow */}
      <div className="relative hidden dark:block">
        <img
          src={darkImg}
          alt="AI Avatar Dark"
          className="
            w-96 h-112 object-contain cursor-pointer transition-all duration-500
            dark:filter dark:drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]
            dark:group-hover:drop-shadow-[0_0_25px_rgba(0,255,255,0.9)]
            dark:hover:brightness-90
          "
          onClick={() => {
            // Open chatbot when robot is clicked
            const event = new CustomEvent('openChatbot');
            window.dispatchEvent(event);
          }}
        />

      </div>
    </div>
  );
};

export default GlowingAvatar;
