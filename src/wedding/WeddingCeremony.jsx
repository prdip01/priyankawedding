import React, { useRef, useState, useEffect } from "react";

const RITUALS = [
  {icon:"🔥",title:"Saptapadi",sanskrit:"सप्तपदी",desc:"The Seven Steps — the heart of a Hindu wedding. The couple walks seven steps around the sacred fire, each step a sacred vow of love, loyalty, prosperity, happiness, progeny, health, and friendship."},
  {icon:"🌸",title:"Var Mala",sanskrit:"वर माला",desc:"The exchange of flower garlands symbolises mutual acceptance. The bride and groom garland each other, marking the beautiful beginning of their journey as one."},
  {icon:"🌿",title:"Havan",sanskrit:"हवन",desc:"Sacred fire ritual where offerings are made to Agni, the fire god. Vedic mantras purify the air and invoke divine blessings for the couple."},
  {icon:"💛",title:"Haldi",sanskrit:"हल्दी",desc:"Turmeric paste applied by family members brings a golden glow and wards off evil spirits. A joyful pre-wedding ceremony filled with laughter and love."},
  {icon:"🎨",title:"Mehndi",sanskrit:"मेहंदी",desc:"Intricate henna patterns on the bride's hands and feet. Tradition says the deeper the colour, the stronger the love. The groom's name is hidden within the design."},
  {icon:"🎵",title:"Sangeet",sanskrit:"संगीत",desc:"A night of music, dance, and celebration. Families come together to sing folk songs, perform choreographed dances, and welcome the union with joy."},
];

function useInView(ref){
  const [v,setV]=useState(false);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);obs.disconnect();}},{threshold:0.08});
    if(ref.current)obs.observe(ref.current);
    return()=>obs.disconnect();
  },[]);
  return v;
}

function RitualCard({ritual,index}){
  const ref=useRef(null);
  const vis=useInView(ref);
  return (
    <div ref={ref} style={{
      opacity:vis?1:0,transform:vis?"translateY(0)":"translateY(30px)",
      transition:`all 0.6s ease ${index*0.1}s`
    }}>
      <div style={{
        borderRadius:"16px",padding:"20px",height:"100%",
        background:"rgba(212,160,23,0.06)",border:"1px solid rgba(212,160,23,0.18)",
        backdropFilter:"blur(6px)",transition:"all 0.25s"
      }}
        onTouchStart={()=>{}}
      >
        <div style={{fontSize:"2rem",marginBottom:"8px"}}>{ritual.icon}</div>
        <div style={{fontSize:"0.65rem",letterSpacing:"0.2em",color:"#c8a96e",marginBottom:"4px"}}>{ritual.sanskrit}</div>
        <h3 style={{fontSize:"clamp(0.95rem,3.5vw,1.1rem)",fontWeight:600,color:"#f5e6c8",marginBottom:"10px"}}>{ritual.title}</h3>
        <p style={{fontSize:"clamp(0.78rem,2.8vw,0.85rem)",lineHeight:1.65,color:"#b8976e",margin:0}}>{ritual.desc}</p>
      </div>
    </div>
  );
}

export default function WeddingCeremony(){
  const headRef=useRef(null);
  const headVis=useInView(headRef);
  return (
    <section id="rituals" style={{
      padding:"80px 0",background:"linear-gradient(180deg,#1a0800 0%,#0d0500 100%)",position:"relative",overflow:"hidden"
    }}>
      <div style={{maxWidth:"900px",margin:"0 auto",padding:"0 16px"}}>
        <div ref={headRef} style={{
          textAlign:"center",marginBottom:"48px",
          opacity:headVis?1:0,transform:headVis?"translateY(0)":"translateY(28px)",
          transition:"all 0.7s ease"
        }}>
          <div style={{fontSize:"2rem",marginBottom:"8px",color:"#d4a017"}}>🪔</div>
          <h2 style={{
            fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",
            fontSize:"clamp(2rem,7vw,3rem)",color:"#f5e6c8",margin:"0 0 8px",
            textShadow:"0 0 30px rgba(212,160,23,0.3)"
          }}>Sacred Rituals</h2>
          <p style={{fontSize:"clamp(0.6rem,2.5vw,0.72rem)",letterSpacing:"0.3em",color:"#c8a96e",margin:"0 0 12px"}}>ANCIENT TRADITIONS · ETERNAL BONDS</p>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",marginBottom:"20px"}}>
            <div style={{height:"1px",width:"50px",background:"linear-gradient(to right,transparent,#d4a017)"}}/>
            <span style={{color:"#d4a017"}}>✿</span>
            <div style={{height:"1px",width:"50px",background:"linear-gradient(to left,transparent,#d4a017)"}}/>
          </div>
          <p style={{maxWidth:"480px",margin:"0 auto",fontSize:"clamp(0.82rem,3vw,0.9rem)",lineHeight:1.7,color:"#a88050"}}>
            A Hindu wedding is a sacred tapestry of timeless rituals woven with devotion, joy, and divine blessings.
          </p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,280px),1fr))",gap:"16px"}}>
          {RITUALS.map((r,i)=><RitualCard key={r.title} ritual={r} index={i}/>)}
        </div>
      </div>
    </section>
  );
}
