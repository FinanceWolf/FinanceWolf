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
            defaults: { duration: 10000 },
            scrollTrigger: {
                trigger: parallaxRef.current,
                start: "top top",
                end: "1000 bottom",
                scrub: true,
                pin: true,
                onUpdate: (self) => {
                    setBackground(Math.ceil(self.progress * 10000 + 10))
                },
            },
        });
        tl.to(
          montanha3.current,
          {
              y: "-=120", // céu
          },
          0
      );
      tl.to(
        montanha2.current,
          {
              y: "-=60", // casas
          },
          0
      );
      tl.to(
        montanha1.current,
          {
              y: "+=15", // montanha
          },
          0
      );
      tl.to(
        copy.current,
        {
            y: "150%",
            opacity: 0
        },
        2
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
    <div className="parallax-outer">
      <div ref={parallaxRef} className="parallax">
        <img ref={montanha3} className="montanha-3" src="../images/parallax/Camada2.png"/>
        <img ref={montanha2} className="montanha-2" src="/images/parallax/Camada1.png" />
        <img ref={montanha1} className="montanha-1" src="/images/parallax/Background.png" alt="ODE"/>
      </div>
      <div ref={copy} className="copy">
        <div class="landing__titles">
          <h2 className="landing__title">Finance Wolf</h2>
          <span className="landing__subtitle">Le finance dolor sit</span>
        </div>

        <span className="landing__description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </span>
        <a className="landing__button">Vambora ent</a>
      </div>
    </div>
  )}
