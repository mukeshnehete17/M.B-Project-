import React from 'react';

// Cute Pastel Baby T-Rex holding a flower
export function BabyTRex({ className = "w-16 h-16", color = "#D8EEE5", flowerColor = "#F2BED1" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#5A2438" floodOpacity="0.08" />
        </filter>
      </defs>
      <g filter="url(#soft-shadow)">
        {/* Tail */}
        <path d="M25 80 C15 75 8 62 10 50 C12 60 22 68 32 72 Z" fill={color} />
        {/* Body */}
        <ellipse cx="55" cy="72" rx="28" ry="24" fill={color} />
        {/* Back spikes (soft rounded) */}
        <circle cx="34" cy="58" r="4" fill="#FDCEDF" />
        <circle cx="42" cy="52" r="4.5" fill="#FDCEDF" />
        <circle cx="52" cy="49" r="4.5" fill="#FDCEDF" />
        {/* Head */}
        <path d="M48 55 C48 38 60 26 78 26 C94 26 102 36 102 48 C102 58 92 64 78 64 C68 64 56 62 48 55 Z" fill={color} />
        {/* Cute Snout Nostril */}
        <circle cx="95" cy="46" r="1.5" fill="#8B6B61" />
        {/* Big Cute Eye */}
        <circle cx="76" cy="40" r="6" fill="#5A2438" />
        <circle cx="78" cy="38" r="2.2" fill="#FFFFFF" />
        <circle cx="74.5" cy="42" r="1" fill="#FFFFFF" />
        {/* Cute Blush */}
        <ellipse cx="82" cy="52" rx="5" ry="3" fill="#F2BED1" opacity="0.8" />
        {/* Smile */}
        <path d="M84 56 C88 59 93 57 95 54" stroke="#5A2438" strokeWidth="1.8" strokeLinecap="round" />
        {/* Belly patch */}
        <ellipse cx="62" cy="76" rx="16" ry="14" fill="#FFF9F2" opacity="0.85" />
        {/* Left Foot */}
        <ellipse cx="46" cy="94" rx="8" ry="5" fill={color} />
        <circle cx="41" cy="95" r="1.5" fill="#FFF9F2" />
        <circle cx="45" cy="96" r="1.5" fill="#FFF9F2" />
        <circle cx="49" cy="95" r="1.5" fill="#FFF9F2" />
        {/* Right Foot */}
        <ellipse cx="68" cy="94" rx="8" ry="5" fill={color} />
        <circle cx="63" cy="95" r="1.5" fill="#FFF9F2" />
        <circle cx="67" cy="96" r="1.5" fill="#FFF9F2" />
        <circle cx="71" cy="95" r="1.5" fill="#FFF9F2" />
        {/* Tiny Arm holding flower */}
        <path d="M68 66 C75 66 82 72 80 77 C77 79 72 75 68 70 Z" fill={color} />
        {/* Flower stem */}
        <path d="M82 74 Q88 70 94 65" stroke="#A3C9A8" strokeWidth="2" strokeLinecap="round" />
        {/* Flower Petals */}
        <circle cx="94" cy="61" r="4" fill={flowerColor} />
        <circle cx="98" cy="65" r="4" fill={flowerColor} />
        <circle cx="94" cy="69" r="4" fill={flowerColor} />
        <circle cx="90" cy="65" r="4" fill={flowerColor} />
        <circle cx="94" cy="65" r="2.5" fill="#FFD93D" />
      </g>
    </svg>
  );
}

// Cute Long-Neck Brachiosaurus with a tiny party hat
export function LittleBrachio({ className = "w-16 h-16", color = "#DCE8D5", hatColor = "#F2BED1" }) {
  return (
    <svg viewBox="0 0 120 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="brachio-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#5A2438" floodOpacity="0.08" />
        </filter>
      </defs>
      <g filter="url(#brachio-shadow)">
        {/* Tail */}
        <path d="M90 92 C105 92 115 85 118 75 C116 85 102 98 85 96 Z" fill={color} />
        {/* Body */}
        <ellipse cx="65" cy="90" rx="26" ry="18" fill={color} />
        {/* Neck curving up */}
        <path d="M48 90 C45 65 38 45 35 28 C35 22 46 22 47 28 C50 48 58 70 65 88 Z" fill={color} />
        {/* Head */}
        <path d="M30 26 C30 18 38 14 48 16 C54 18 56 25 52 30 C46 34 33 34 30 26 Z" fill={color} />
        {/* Eye */}
        <circle cx="43" cy="22" r="3.5" fill="#5A2438" />
        <circle cx="44.2" cy="21" r="1.3" fill="#FFFFFF" />
        {/* Blush */}
        <ellipse cx="37" cy="27" rx="3.5" ry="2" fill="#FDCEDF" />
        {/* Smile */}
        <path d="M32 26 C34 29 38 29 40 27" stroke="#5A2438" strokeWidth="1.2" strokeLinecap="round" />
        {/* Cute Party Hat */}
        <path d="M42 15 L48 2 L54 16 Z" fill={hatColor} />
        <circle cx="48" cy="2" r="2.5" fill="#FFD93D" />
        <path d="M44 10 L51 12" stroke="#FFFFFF" strokeWidth="1" />
        {/* Back spots */}
        <circle cx="62" cy="82" r="3" fill="#F8E8EE" />
        <circle cx="72" cy="80" r="3.5" fill="#F8E8EE" />
        <circle cx="80" cy="84" r="2.5" fill="#F8E8EE" />
        {/* Legs */}
        <rect x="46" y="98" width="7" height="18" rx="3.5" fill={color} />
        <rect x="58" y="98" width="7" height="18" rx="3.5" fill={color} />
        <rect x="72" y="98" width="7" height="17" rx="3.5" fill={color} />
        <rect x="83" y="98" width="6" height="16" rx="3" fill={color} />
      </g>
    </svg>
  );
}

// Cute Pastel Stegosaurus with heart-shaped back plates
export function CuteStego({ className = "w-16 h-16", color = "#FDCEDF", plateColor = "#D8EEE5" }) {
  return (
    <svg viewBox="0 0 120 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="stego-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#5A2438" floodOpacity="0.08" />
        </filter>
      </defs>
      <g filter="url(#stego-shadow)">
        {/* Heart Plates on Back */}
        <path d="M32 38 C30 32 36 28 40 33 C44 28 50 32 48 38 C46 42 40 46 40 46 C40 46 34 42 32 38 Z" fill={plateColor} />
        <path d="M48 30 C46 24 52 20 56 25 C60 20 66 24 64 30 C62 34 56 38 56 38 C56 38 50 34 48 30 Z" fill={plateColor} />
        <path d="M64 28 C62 22 68 18 72 23 C76 18 82 22 80 28 C78 32 72 36 72 36 C72 36 66 32 64 28 Z" fill={plateColor} />
        <path d="M80 34 C78 28 84 24 88 29 C92 24 98 28 96 34 C94 38 88 42 88 42 C88 42 82 38 80 34 Z" fill={plateColor} />
        
        {/* Tail */}
        <path d="M85 64 C98 62 108 55 114 48 C110 58 98 70 82 69 Z" fill={color} />
        {/* Tail spikes */}
        <polygon points="110,48 116,42 113,52" fill="#F2BED1" />
        <polygon points="114,52 120,48 116,56" fill="#F2BED1" />
        
        {/* Body */}
        <ellipse cx="60" cy="62" rx="28" ry="19" fill={color} />
        
        {/* Head */}
        <path d="M40 60 C38 50 26 48 18 52 C12 55 10 62 14 68 C20 74 34 72 40 66 Z" fill={color} />
        
        {/* Eye */}
        <circle cx="22" cy="58" r="3" fill="#5A2438" />
        <circle cx="23" cy="57" r="1.1" fill="#FFFFFF" />
        {/* Blush */}
        <ellipse cx="28" cy="64" rx="3.5" ry="2" fill="#F2BED1" />
        {/* Smile */}
        <path d="M14 62 C16 65 20 65 22 63" stroke="#5A2438" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Belly */}
        <ellipse cx="58" cy="66" rx="16" ry="11" fill="#FFF9F2" opacity="0.8" />
        
        {/* Legs */}
        <rect x="42" y="74" width="7" height="15" rx="3.5" fill={color} />
        <rect x="54" y="74" width="7" height="15" rx="3.5" fill={color} />
        <rect x="68" y="74" width="7" height="15" rx="3.5" fill={color} />
        <rect x="78" y="74" width="7" height="14" rx="3.5" fill={color} />
      </g>
    </svg>
  );
}

// Cute Dino Egg with ribbon & sparkles
export function DinoEgg({ className = "w-12 h-14", color = "#FFF9F2", spotColor = "#FDCEDF" }) {
  return (
    <svg viewBox="0 0 80 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="egg-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#5A2438" floodOpacity="0.1" />
        </filter>
      </defs>
      <g filter="url(#egg-shadow)">
        {/* Egg Shell */}
        <path d="M40 8 C18 8 10 38 10 65 C10 82 22 92 40 92 C58 92 70 82 70 65 C70 38 62 8 40 8 Z" fill={color} stroke="#F2BED1" strokeWidth="2" />
        {/* Spots */}
        <circle cx="30" cy="38" r="5" fill={spotColor} opacity="0.8" />
        <circle cx="52" cy="46" r="6" fill={spotColor} opacity="0.8" />
        <circle cx="34" cy="68" r="7" fill={spotColor} opacity="0.8" />
        <circle cx="54" cy="74" r="4.5" fill={spotColor} opacity="0.8" />
        {/* Cute Ribbon Bow */}
        <path d="M28 52 C22 46 22 58 28 54 C34 54 36 50 40 52 C44 50 46 54 52 54 C58 58 58 46 52 52 Z" fill="#F2BED1" />
        <circle cx="40" cy="52" r="3" fill="#EA99B8" />
      </g>
    </svg>
  );
}

// Cute Prehistoric Botanical Leaf (Monstera / Fern)
export function BotanicalLeaf({ className = "w-8 h-8", color = "#DCE8D5", rotate = 0 }) {
  return (
    <svg 
      viewBox="0 0 60 80" 
      className={className} 
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M30 75 C30 45 48 35 48 15 C38 22 34 32 30 40 C26 32 22 22 12 15 C12 35 30 45 30 75 Z" 
        fill={color} 
      />
      <path d="M30 75 L30 20" stroke="#B8D5B0" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Cute Prehistoric Fern Frond
export function FernBranch({ className = "w-10 h-10", color = "#D8EEE5" }) {
  return (
    <svg viewBox="0 0 80 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 95 C40 60 40 30 40 10" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Fern Leaflets */}
      <path d="M40 80 C52 75 58 78 62 76" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M40 80 C28 75 22 78 18 76" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M40 60 C54 54 60 58 64 54" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M40 60 C26 54 20 58 16 54" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M40 40 C52 34 58 38 60 34" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M40 40 C28 34 22 38 20 34" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M40 20 C48 16 52 18 54 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M40 20 C32 16 28 18 26 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Cute Dino 3-Toed Footprint
export function DinoFootprint({ className = "w-6 h-6", color = "#FDCEDF", rotate = 0 }) {
  return (
    <svg 
      viewBox="0 0 50 50" 
      className={className} 
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="25" cy="32" rx="10" ry="8" fill={color} />
      <ellipse cx="14" cy="18" rx="4.5" ry="7" transform="rotate(-20 14 18)" fill={color} />
      <ellipse cx="25" cy="14" rx="4.5" ry="8" fill={color} />
      <ellipse cx="36" cy="18" rx="4.5" ry="7" transform="rotate(20 36 18)" fill={color} />
    </svg>
  );
}

// Cute Pastel Washi Tape with torn edge effect
export function WashiTape({ className = "", pattern = "dots", color = "#FDCEDF", rotate = -2 }) {
  return (
    <div 
      className={`relative h-6 rounded-xs opacity-90 shadow-xs pointer-events-none select-none ${className}`}
      style={{
        backgroundColor: color,
        transform: `rotate(${rotate}deg)`,
        backdropFilter: "blur(2px)",
        boxShadow: "0 1px 3px rgba(90, 36, 56, 0.08)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-around opacity-30 text-[10px] text-[#5A2438] overflow-hidden">
        {pattern === "dots" && "• • • • • • • • • • • • • • •"}
        {pattern === "hearts" && "♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡"}
        {pattern === "dino" && "🦖 🌸 🦖 🌸 🦖 🌸"}
      </div>
    </div>
  );
}

// Vintage Wax Seal Stamp with Heart or Dino
export function WaxSeal({ className = "w-12 h-12", icon = "🦖" }) {
  return (
    <div 
      className={`rounded-full flex items-center justify-center bg-gradient-to-br from-[#EA99B8] via-[#F2BED1] to-[#D988A1] shadow-md border-2 border-[#FFF0F5]/60 text-white select-none ${className}`}
      style={{
        boxShadow: "0 4px 10px rgba(90, 36, 56, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.4)"
      }}
    >
      <div className="w-4/5 h-4/5 rounded-full border border-dashed border-white/50 flex items-center justify-center text-sm">
        <span>{icon}</span>
      </div>
    </div>
  );
}

// Collectible Dinosaur Field Guide Badge
export function DinoGuideBadge({ label, level, icon = "🦖", color = "bg-[#D8EEE5]/70" }) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-[#5A2438]/10 text-[#5A2438] shadow-xs ${color}`}>
      <span>{icon}</span>
      <span className="font-semibold">{label}:</span>
      <span className="opacity-90">{level}</span>
    </div>
  );
}
