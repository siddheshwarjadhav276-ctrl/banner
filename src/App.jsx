import { useEffect, useRef } from "react";

export default function Banner() {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 40;
      const y = (window.innerHeight / 2 - e.pageY) / 40;
      if (cardRef.current) {
        cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="banner">
      <svg className="wave" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="0.5">
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
            M0,192L60,170C120,149,240,107,360,112C480,117,600,171,720,176C840,181,960,139,1080,117C1200,96,1320,96,1380,96L1440,96L1440,320L0,320Z;
            M0,160L60,150C120,139,240,117,360,128C480,139,600,181,720,192C840,203,960,181,1080,160C1200,139,1320,117,1380,106L1440,96L1440,320L0,320Z;
            M0,192L60,170C120,149,240,107,360,112C480,117,600,171,720,176C840,181,960,139,1080,117C1200,96,1320,96,1380,96L1440,96L1440,320L0,320Z"
          />
        </path>
      </svg>

      <div className="card" ref={cardRef}>
        <h1>Siddheshwar Jadhav</h1>
        <p className="typing">
          Full Stack Developer | React | Node | DSA | Spring Boot
        </p>
      </div>

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family: 'Poppins', sans-serif;
        }

        .banner{
          width:100%;
          height:400px;
          background:linear-gradient(135deg,#00ff9d,#00c3ff);
          display:flex;
          justify-content:center;
          align-items:center;
          overflow:hidden;
          position:relative;
        }

        .card{
          width:800px;
          padding:60px;
          border-radius:10px;
          background:rgba(255, 255, 255, 0.27);
          backdrop-filter:blur(30px);
          box-shadow:0 30px 50px rgba(0,0,0,0.2);
          text-align:center;
          color:white;
          transition:0.2s;
          z-index:2;
        }

        h1{
          font-size:48px;
          margin-bottom:15px;
        }

        .typing{
  font-size:20px;
  white-space:nowrap;
  overflow:hidden;
  border-right:3px solid white;
  display:inline-block;        /* IMPORTANT */
  width:0;                     /* IMPORTANT */
  animation:typing 7s steps(40,end) infinite alternate,
            blink 0.5s step-end infinite;
}

@keyframes typing{
  from{width:0}
  to{width:47ch;} 
}

@keyframes blink{
  50%{border-color:transparent}
}

        .wave{
          position:absolute;
          bottom:0;
          width:100%;
        }
      `}</style>
    </div>
  );
}