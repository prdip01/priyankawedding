import React, { useEffect, useRef } from "react";
const COLORS = ["#e63946","#f4a261","#e9c46a","#ff8c94","#ffd1dc","#ffaaa5","#d4a5a5","#c9b1bd"];
function rand(a,b){return a+Math.random()*(b-a);}
export default function FloatingPetals(){
  const cvs=useRef(null), ptls=useRef([]), anim=useRef(null);
  useEffect(()=>{
    const c=cvs.current; if(!c)return;
    const ctx=c.getContext("2d");
    const isMob=window.innerWidth<768;
    const COUNT=isMob?18:35;
    const resize=()=>{c.width=window.innerWidth;c.height=window.innerHeight;};
    resize();
    window.addEventListener("resize",resize);
    const mk=()=>({x:rand(0,c.width),y:rand(-60,-5),r:rand(3,8),color:COLORS[0|Math.random()*COLORS.length],
      speed:rand(0.4,1.4),wobble:rand(0,Math.PI*2),wobbleSpeed:rand(0.008,0.03),
      rot:rand(0,Math.PI*2),rotSpeed:rand(-0.025,0.025),opacity:rand(0.4,0.8)});
    ptls.current=Array.from({length:COUNT},mk);
    const draw=(p)=>{
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);
      ctx.globalAlpha=p.opacity;ctx.fillStyle=p.color;
      ctx.beginPath();ctx.ellipse(0,0,p.r,p.r*1.6,0,0,Math.PI*2);ctx.fill();ctx.restore();
    };
    const tick=()=>{
      ctx.clearRect(0,0,c.width,c.height);
      ptls.current.forEach(p=>{
        p.y+=p.speed;p.wobble+=p.wobbleSpeed;p.x+=Math.sin(p.wobble)*0.9;p.rot+=p.rotSpeed;
        if(p.y>c.height+20)Object.assign(p,mk(),{y:-20,x:rand(0,c.width)});
        draw(p);
      });
      anim.current=requestAnimationFrame(tick);
    };
    tick();
    return()=>{window.removeEventListener("resize",resize);cancelAnimationFrame(anim.current);};
  },[]);
  return <canvas ref={cvs} style={{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:0,opacity:0.3}}/>;
}
