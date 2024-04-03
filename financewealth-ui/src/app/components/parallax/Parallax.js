import { useRef, useEffect, useState } from "react";
import "../../styles/parallax.scss"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Parallax() {
  const [background, setBackground] = useState(20);

  useEffect(() => {
    let ctx = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger);
        let tl = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: parallaxRef.current,
                start: "top top",
<<<<<<< HEAD
                end: "1000 bottom",
=======
                end: "5000 bottom",
>>>>>>> parent of d35f6eb (Correção de parallax, aprimoramento da landingpage, homepage)
                scrub: true,
                pin: true,
                onUpdate: (self) => {
                    setBackground(Math.ceil(self.progress * 100 + 10))
                },
            },
        });
        tl.to(
          montanha3.current,
          {
              y: "-=80",
          },
          0
      );
      tl.to(
        montanha2.current,
          {
              y: "-=30",
          },
          0
      );
      tl.to(
        montanha1.current,
          {
<<<<<<< HEAD
              y: "+=10",
=======
              y: "+=50",
>>>>>>> parent of d35f6eb (Correção de parallax, aprimoramento da landingpage, homepage)
          },
          0
      );
      tl.to(
        copy.current,
        {
            y: "2600%",
            opacity: 1
        },
        0
      );
      });
      return () => ctx.revert();
    }, []);


  const parallaxRef = useRef(null);
  const montanha3 = useRef(null);
  const montanha2 = useRef(null);
  const montanha1 = useRef(null);
  const copy = useRef(null);


  // style={{ background: `linear-gradient(#069e2d, #03440c ${background}%, #058e3f, #005c02 )` }} 
  return (
<<<<<<< HEAD

    <div className="parallax-outer" >
=======
    <div className="parallax-outer">
>>>>>>> parent of d35f6eb (Correção de parallax, aprimoramento da landingpage, homepage)
      <div ref={parallaxRef} className="parallax" >
        <img ref={montanha3} className="montanha-3" src="../images/parallax/Camada2.png"/>
        <img ref={montanha2} className="montanha-2" src="/images/parallax/Camada1.png" />
        <img ref={montanha1} className="montanha-1" src="/images/parallax/Background.png" alt="ODE"/>
      </div>
      <div ref={copy} className="copy">
        <h1>Finance Wealth</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quos?</span>
      </div>
    </div>
  )}
