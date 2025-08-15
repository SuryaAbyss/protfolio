import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { useInteraction } from "../context/InteractionContext";

const About = () => {
  const { hasInteracted, setHasInteracted } = useInteraction();
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I MAKE AI INTELLIGENT, WEBSITES UNSTOPPABLE AND IDEAS UNFORGETTABLE."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I specialize in crafting intelligent apps, Agentic AI systems, dynamic dashboards, and sleek web solutions for AI-driven and data-focused ventures. I’m passionate about building tech that tackles real-world challenges and scales without limits."
              }
            />
            <AnimatedBody
              text={
                "Beyond my role as a developer and ML innovator, I’ve driven and collaborated on diverse projects — from Agentic AI multi-agent assistants to real-time gesture recognition systems. I thrive on turning bold ideas into high-impact solutions."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "Beyond my work as a developer, I lead in tech communities, hosting workshops and mentoring peers through Google Developer Student Clubs and Microsoft Learn Student Ambassadors."
              }
            />
            <AnimatedBody
              text={
                "When I’m not coding, I’m exploring emerging AI tools, testing cloud platforms, or pushing new tech stacks. I’m always ready for ambitious projects and impactful collaborations."
              }
            />
            <AnimatedBody
              text={
                "I'm currently working on some exciting projects that I can't wait to share with you. But I’m always open to new opportunities and collaborations."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Languages & Frameworks"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Python, JavaScript, SQL, HTML, CSS, Bash, Java, Node.js, Express, React.js, Django, FastAPI, Flask"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Machine Learning & AI Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "TensorFlow, Scikit-learn, OpenCV, Pandas, NumPy, LangChain, LangGraph, LLM Agents"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Web & API Development"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "REST APIs, Firebase SDK, MySQL, Oracle, AWS (EC2/S3), GCP, CI/CD, Postman"
                }
              />
                          <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design & Visualization Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, Plotly, Matplotlib, Power BI, Streamlit, Google Colab"
                }
              />
            </div>
          </div>
        </div>
       </div> 
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <a
            href="#" // TODO: Replace with actual link if needed
            target="_blank"
            rel="noopener noreferrer"
            data-no-blobity
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] hover:underline focus:underline cursor-pointer"
            style={{ zIndex: 20 }}
          >
            A few songs I can recommend if you're looking for some fresh tunes :)
          </a>
        </div>
      </div>
      {/* Global Unmute Button */}
      {!hasInteracted && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="fluid-border">
            <button
              onClick={setHasInteracted}
              aria-label="Unmute and enable song previews"
              className="fluid-border-inner flex items-center gap-2"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9 7.828V4a1 1 0 0 1 1.707-.707l4.586 4.586A1 1 0 0 1 15 9h-3.172l-2.293-2.293A1 1 0 0 1 9 7.828zM4 8a1 1 0 0 1 1-1h2.586l2.293 2.293A1 1 0 0 1 10 10v4a1 1 0 0 1-1.707.707l-4.586-4.586A1 1 0 0 1 4 8zm10.707 2.293a1 1 0 0 1 0 1.414l-4.586 4.586A1 1 0 0 1 9 17v-3.172l2.293-2.293A1 1 0 0 1 11 11h3.172a1 1 0 0 1 .707.293z"/></svg>
              Unmute
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;