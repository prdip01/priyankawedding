import React, { useEffect, useState } from "react";

const MAPS_LINK = "https://www.google.com/maps/dir/?api=1&destination=M7F9%2BJ53%2C+Unnamed+Road%2C+Pailadi%2C+Jharkhand+827013";

export default function WeddingHero({ scrollY }) {
  const [cd, setCd] = useState({d:0,h:0,m:0,s:0});
  const [mounted, setMounted] = useState(false);
  useEffect(()=>{
    setMounted(true);
    const wedding = new Date("2026-11-24T10:00:00");
    const tick=()=>{
      const diff=wedding-new Date();
      if(diff>0) setCd({d:Math.floor(diff/86400000),h:Math.floor(diff%86400000/3600000),m:Math.floor(diff%3600000/60000),s:Math.floor(diff%60000/1000)});
    };
    tick(); const id=setInterval(tick,1000); return()=>clearInterval(id);
  },[]);

  return (
    <section id="home" style={{
      minHeight:"100svh",position:"relative",display:"flex",flexDirection:"column",
      alignItems:"center",justifyContent:"center",overflow:"hidden",
      background:"linear-gradient(160deg,#1a0800 0%,#3a1800 45%,#1a0800 100%)"
    }}>
      {/* Dot grid */}
      <div style={{position:"absolute",inset:0,opacity:0.07,backgroundImage:"radial-gradient(#d4a017 1px,transparent 1px)",backgroundSize:"28px 28px"}}/>

      {/* Faint mandala bg */}
      <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",opacity:0.06}}>
        <svg width="min(80vw,480px)" height="min(80vw,480px)" viewBox="0 0 200 200">
          <g fill="none" stroke="#d4a017" strokeWidth="0.6">
            {[90,70,50,30,12].map(r=><circle key={r} cx="100" cy="100" r={r}/>)}
            {Array.from({length:16},(_,i)=>{const a=i*(360/16)*Math.PI/180;return <line key={i} x1={100+12*Math.cos(a)} y1={100+12*Math.sin(a)} x2={100+90*Math.cos(a)} y2={100+90*Math.sin(a)}/>;}).join?Array.from({length:16},(_,i)=>{const a=i*(360/16)*Math.PI/180;return <line key={i} x1={100+12*Math.cos(a)} y1={100+12*Math.sin(a)} x2={100+90*Math.cos(a)} y2={100+90*Math.sin(a)}/>;}):[]}
          </g>
        </svg>
      </div>

      {/* Main content */}
      <div style={{position:"relative",zIndex:1,textAlign:"center",padding:"80px 20px 40px",maxWidth:"540px",width:"100%",margin:"0 auto"}}>
        {/* Om */}
        <div style={{fontSize:"clamp(2.5rem,8vw,4rem)",color:"#d4a017",fontFamily:"serif",marginBottom:"4px",animation:"pulse 3s ease-in-out infinite"}}>ॐ</div>

        {/* Tagline */}
        <p style={{fontSize:"clamp(0.6rem,2.5vw,0.75rem)",letterSpacing:"0.35em",color:"#c8a96e",marginBottom:"12px",fontWeight:300}}>
          WITH THE BLESSINGS OF THE DIVINE
        </p>

        {/* Names */}
        <h1 style={{
          fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",
          fontSize:"clamp(2.8rem,12vw,5.5rem)",color:"#f5e6c8",lineHeight:1.05,
          textShadow:"0 0 50px rgba(212,160,23,0.35)",marginBottom:0,fontWeight:300
        }}>Priyanka</h1>

        {/* Heart divider */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"12px",margin:"10px 0"}}>
          <div style={{height:"1px",width:"clamp(40px,12vw,80px)",background:"linear-gradient(to right,transparent,#d4a017)"}}/>
          <span style={{color:"#d4a017",fontSize:"1.4rem"}}>❤</span>
          <div style={{height:"1px",width:"clamp(40px,12vw,80px)",background:"linear-gradient(to left,transparent,#d4a017)"}}/>
        </div>

        <h1 style={{
          fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",
          fontSize:"clamp(2.8rem,12vw,5.5rem)",color:"#f5e6c8",lineHeight:1.05,
          textShadow:"0 0 50px rgba(212,160,23,0.35)",marginBottom:0,fontWeight:300
        }}>Prakash</h1>

        <p style={{fontSize:"clamp(0.8rem,3vw,1rem)",letterSpacing:"0.25em",color:"#c8a96e",margin:"8px 0 0",fontWeight:300}}>Kumari &amp; Kumar</p>

        {/* Ornament */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",margin:"16px 0"}}>
          <span style={{color:"#d4a017",fontSize:"0.7rem"}}>✦</span>
          <div style={{height:"1px",width:"60px",background:"rgba(212,160,23,0.5)"}}/>
          <span style={{color:"#d4a017",fontSize:"1rem"}}>✿</span>
          <div style={{height:"1px",width:"60px",background:"rgba(212,160,23,0.5)"}}/>
          <span style={{color:"#d4a017",fontSize:"0.7rem"}}>✦</span>
        </div>

        {/* Date badge */}
        <div style={{
          display:"inline-block",padding:"10px 24px",borderRadius:"50px",
          border:"1.5px solid rgba(212,160,23,0.4)",background:"rgba(212,160,23,0.08)",
          backdropFilter:"blur(8px)",marginBottom:"24px"
        }}>
          <p style={{fontSize:"clamp(0.7rem,2.8vw,0.85rem)",letterSpacing:"0.25em",color:"#e8c87a",fontWeight:500,margin:0}}>
            TUESDAY · 24 NOVEMBER 2026
          </p>
        </div>

        {/* Countdown - 2x2 on mobile, 4 across on wider */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"8px",maxWidth:"320px",margin:"0 auto 28px"}}>
          {[{v:cd.d,l:"Days"},{v:cd.h,l:"Hrs"},{v:cd.m,l:"Min"},{v:cd.s,l:"Sec"}].map(({v,l})=>(
            <div key={l} style={{
              display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"12px",
              padding:"10px 4px",background:"rgba(212,160,23,0.1)",border:"1px solid rgba(212,160,23,0.25)"
            }}>
              <span style={{fontFamily:"monospace",fontSize:"clamp(1.2rem,5vw,1.6rem)",fontWeight:700,color:"#f5e6c8"}}>
                {String(v).padStart(2,"0")}
              </span>
              <span style={{fontSize:"clamp(0.55rem,2.2vw,0.65rem)",marginTop:"3px",letterSpacing:"0.05em",color:"#c8a96e"}}>{l}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center",width:"100%"}}>
          <a href="#couple" style={{
            display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",
            width:"100%",maxWidth:"290px",textAlign:"center",
            padding:"13px 22px",borderRadius:"50px",fontWeight:700,letterSpacing:"0.08em",
            fontSize:"clamp(0.82rem,3.4vw,0.92rem)",
            background:"linear-gradient(135deg,rgba(212,160,23,0.2),rgba(212,160,23,0.06))",
            border:"1.5px solid rgba(212,160,23,0.55)",color:"#f5e6c8",
            boxShadow:"0 0 25px rgba(212,160,23,0.2)",textDecoration:"none",
            WebkitTapHighlightColor:"transparent"
          }}>
            <span>✨</span><span>Meet Bride & Groom</span><span>✨</span>
          </a>
          <a href="#events" style={{
            display:"block",width:"100%",maxWidth:"280px",textAlign:"center",
            padding:"14px 24px",borderRadius:"50px",fontWeight:600,letterSpacing:"0.1em",
            fontSize:"clamp(0.8rem,3.5vw,0.9rem)",
            background:"linear-gradient(135deg,#d4a017,#b87333)",color:"#1a0800",
            boxShadow:"0 0 28px rgba(212,160,23,0.4)",textDecoration:"none",
            WebkitTapHighlightColor:"transparent"
          }}>
            📅 View Events
          </a>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" style={{
            display:"block",width:"100%",maxWidth:"280px",textAlign:"center",
            padding:"14px 24px",borderRadius:"50px",fontWeight:600,letterSpacing:"0.1em",
            fontSize:"clamp(0.8rem,3.5vw,0.9rem)",
            border:"1.5px solid rgba(212,160,23,0.6)",color:"#e8c87a",
            background:"rgba(212,160,23,0.05)",textDecoration:"none",
            WebkitTapHighlightColor:"transparent"
          }}>
            📍 Get Directions
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{position:"absolute",bottom:0,left:0,width:"100%",lineHeight:0}}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{width:"100%",height:"40px"}}>
          <path d="M0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 L0 60 Z" fill="#1a0800" opacity="0.95"/>
        </svg>
      </div>
    </section>
  );
}
