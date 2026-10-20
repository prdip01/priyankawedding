import React, { useRef, useState, useEffect } from "react";

const EVENTS = [
  {
    date:"22 November 2026", day:"Sunday", shortDate:"22 NOV",
    name:"Haldi Ceremony", nameHindi:"हल्दी समारोह", time:"Morning",
    icon:"💛", color:"#f4c430", bgAccent:"rgba(244,196,48,0.12)",
    desc:"Begin the celebrations with the sacred Haldi ritual — turmeric paste applied lovingly by family, bestowing radiance, blessings, and protection before the wedding.",
    items:["Turmeric & Sandalwood","Family Blessings","Traditional Songs","Floral Decor"],
  },
  {
    date:"23 November 2026", day:"Monday", shortDate:"23 NOV",
    name:"Mehndi & Sangeet", nameHindi:"मेहंदी & संगीत", time:"Evening",
    icon:"🎵", color:"#e63946", bgAccent:"rgba(230,57,70,0.1)",
    desc:"An evening of beauty and celebration — intricate henna patterns on the bride's hands, followed by music, dance, and heartfelt performances by both families.",
    items:["Bridal Mehndi","Dance Performances","Live Music","Festive Feast"],
  },
  {
    date:"24 November 2026", day:"Tuesday", shortDate:"24 NOV",
    name:"Wedding Ceremony", nameHindi:"विवाह समारोह", time:"Auspicious Morning",
    icon:"💍", color:"#d4a017", bgAccent:"rgba(212,160,23,0.15)",
    highlight:true,
    desc:"The grand celebration of union — sacred Saptapadi vows around the holy fire, blessings of the elders, and the joyful joining of two families into one.",
    items:["Vedic Rituals & Vows","Saptapadi (Seven Steps)","Sindoor & Mangalsutra","Grand Reception"],
  },
];

function useInView(ref){
  const [v,setV]=useState(false);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);obs.disconnect();}},{threshold:0.1});
    if(ref.current)obs.observe(ref.current);
    return()=>obs.disconnect();
  },[]);
  return v;
}

function EventCard({event,index}){
  const ref=useRef(null);
  const vis=useInView(ref);
  return (
    <div ref={ref} style={{
      opacity:vis?1:0,transform:vis?"translateY(0)":"translateY(30px)",
      transition:`all 0.6s ease ${index*0.15}s`,marginBottom:"20px"
    }}>
      <div style={{
        borderRadius:"20px",overflow:"hidden",
        border:`2px solid ${event.highlight?"rgba(212,160,23,0.5)":"rgba(212,160,23,0.15)"}`,
        background:event.bgAccent,
        boxShadow:event.highlight?"0 0 40px rgba(212,160,23,0.12)":"none"
      }}>
        {/* Highlighted Date Banner */}
        <div style={{
          background:`linear-gradient(135deg,${event.color}25,${event.color}10)`,
          borderBottom:`1.5px solid ${event.color}40`,
          padding:"14px 20px",
          display:"flex",alignItems:"center",gap:"12px"
        }}>
          {/* BIG date highlight */}
          <div style={{
            background:event.color,borderRadius:"12px",
            padding:"8px 14px",textAlign:"center",flexShrink:0,
            boxShadow:`0 4px 16px ${event.color}60`
          }}>
            <div style={{fontSize:"1.6rem",fontWeight:800,color:"#1a0800",fontFamily:"monospace",lineHeight:1}}>
              {event.shortDate.split(" ")[0]}
            </div>
            <div style={{fontSize:"0.6rem",fontWeight:700,color:"#1a0800",letterSpacing:"0.1em"}}>
              {event.shortDate.split(" ")[1]}
            </div>
          </div>
          <div>
            <div style={{fontSize:"clamp(0.6rem,2.5vw,0.7rem)",letterSpacing:"0.3em",color:"#c8a96e",marginBottom:"2px"}}>{event.nameHindi}</div>
            <div style={{fontSize:"clamp(1rem,4vw,1.3rem)",fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",color:"#f5e6c8",lineHeight:1.2}}>{event.name}</div>
            <div style={{fontSize:"clamp(0.65rem,2.5vw,0.75rem)",color:"#a88050",marginTop:"3px"}}>
              {event.day} · {event.date} · {event.time}
            </div>
          </div>
          <span style={{fontSize:"clamp(1.5rem,5vw,2rem)",marginLeft:"auto"}}>{event.icon}</span>
        </div>

        {/* Body */}
        <div style={{padding:"16px 20px"}}>
          {event.highlight && (
            <div style={{
              display:"inline-block",marginBottom:"10px",padding:"4px 14px",borderRadius:"50px",
              fontSize:"0.65rem",letterSpacing:"0.2em",fontWeight:600,
              background:"rgba(212,160,23,0.2)",color:"#d4a017",border:"1px solid rgba(212,160,23,0.4)"
            }}>✦ MAIN WEDDING DAY ✦</div>
          )}
          <p style={{fontSize:"clamp(0.8rem,3vw,0.88rem)",lineHeight:1.7,color:"#b8976e",margin:"0 0 12px"}}>{event.desc}</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px"}}>
            {event.items.map(item=>(
              <div key={item} style={{display:"flex",alignItems:"center",gap:"6px",fontSize:"clamp(0.7rem,2.5vw,0.78rem)",color:"#c8a96e"}}>
                <span style={{color:event.color,fontSize:"7px"}}>◆</span>{item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WeddingEvents(){
  const headRef=useRef(null);
  const headVis=useInView(headRef);
  return (
    <section id="events" style={{
      padding:"80px 0",background:"linear-gradient(180deg,#0d0500 0%,#1a0a00 100%)",
      position:"relative",overflow:"hidden"
    }}>
      <div style={{maxWidth:"600px",margin:"0 auto",padding:"0 16px"}}>
        <div ref={headRef} style={{
          textAlign:"center",marginBottom:"48px",
          opacity:headVis?1:0,transform:headVis?"translateY(0)":"translateY(28px)",
          transition:"all 0.7s ease"
        }}>
          <div style={{fontSize:"2rem",marginBottom:"8px",color:"#d4a017"}}>📅</div>
          <h2 style={{
            fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",
            fontSize:"clamp(2rem,7vw,3rem)",color:"#f5e6c8",margin:"0 0 8px",
            textShadow:"0 0 30px rgba(212,160,23,0.3)"
          }}>Wedding Events</h2>
          <p style={{fontSize:"clamp(0.6rem,2.5vw,0.72rem)",letterSpacing:"0.3em",color:"#c8a96e",margin:"0 0 12px"}}>THREE DAYS OF CELEBRATION</p>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
            <div style={{height:"1px",width:"50px",background:"linear-gradient(to right,transparent,#d4a017)"}}/>
            <span style={{color:"#d4a017"}}>✿</span>
            <div style={{height:"1px",width:"50px",background:"linear-gradient(to left,transparent,#d4a017)"}}/>
          </div>
        </div>
        {EVENTS.map((ev,i)=><EventCard key={ev.name} event={ev} index={i}/>)}
      </div>
    </section>
  );
}
