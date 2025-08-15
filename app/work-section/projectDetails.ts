export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Health Report Dashboard",
    description:
      "A web-based dashboard for analyzing and visualizing patient health data. It helps doctors access detailed medical records and gain insights through interactive visualizations.",
    technologies: ["Streamlit", "Ploty", "Pandas"],
    github: "https://github.com/SuryaAbyss/-Prediction-Dashboard-Using-Machine-Learning",
    demo: "https://healthcare-mxdhrwdwehmyzjiq2efkig.streamlit.app/",
    image: require(".//../../public/projects/Group3616.png"),
    available: true,
  },
  {
    id: 1,
    name: "Multi-Agent AI with Langflow",
    description:
      "Built a multi-agent AI system using Langflow, RAG, and Streamlit for tasks like support and order tracking. Combines visual workflows, Python logic, and document/vector database integration.",
    technologies: ["Langflow", "DataStak", "RAG"],
    github: "https://github.com/SuryaAbyss/Multi-Agent-AI-with-Langflow-RAG-and-Streamlit/tree/main",
    demo: "https://www.langflow.org/",
    image: require(".//../../public/projects/Group50n.png"),
    available: true,
  },
  {
    id: 2,
    name: "Face Recognition",
    description:
      "A real-time attendance system using OpenCV and MediaPipe. Captures webcam feed, recognizes faces, and logs attendance into daily CSV files with overlay and confidence scoring.",
    technologies: ["OpenCV", "MediaPipe", "Python"],
    github: "https://github.com/SuryaAbyss/Face-Recognition-Attendance-System",
    demo: "https://github.com/SuryaAbyss/Face-Recognition-Attendance-System",
    image: "/projects/face2.mp4",
    available: true,
  },
  {
    id: 3,
    name: "FoxiVerse",
    description:
      "A movie discovery platform using the TMDB API. Lets users explore films by genre, popularity, and more with real-time search, responsive design, and rich movie details.",
    technologies: ["css", "JavaScript", "TMDB API"],
    github: "https://github.com/SuryaAbyss/Movie_Project_Foxiverse",
    demo: "https://movie-project-foxiverse.vercel.app/",
    image: require(".//../../public/projects/Group4.png"),
    available: true,
  },
  {
    id: 4,
    name: "Flixify",
    description:
      "Built an advanced Python AI agent using Firecrawl, LangChain, and LangGraph. Supports multi-step reasoning, web scraping, and tool-based workflows with prompt control and state tracking.",
    technologies: ["LangGraph", "FireCrawl", "DeepSeek"],
    github: "https://github.com/SuryaAbyss/Advanced-AI-Agent-LangGraph-Firecrawl",
    demo: "https://www.langchain.com/langgraph",
    image: require(".//../../public/projects/Group5.png"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 100,
    name: "AI Voice Agent.",
    description:
      "Build smart voice agents with Python. Use Deepgram for transcription, Twilio for calls, and function calling for real-time actions. A full-stack AI voice guide for developers.",
    technologies: ["Deepgram", "twilio", "Function Calling"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/Group7.png"),
    available: false,
  },
  // {
  //   id: 101,
  //   name: "RAGS Scrubs Website",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["UX Research", "UI Design", "Prototyping"],
  //   github: "",
  //   demo: "",
  //   image: require(".//../../public/projects/rags.webp"),
  //   available: false,
  // },
  // {
  //   id: 102,
  //   name: "Crown Branding Agency Website",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["UX Research", "UI Design", "Prototyping"],
  //   github: "",
  //   demo: "",
  //   image: require(".//../../public/projects/crown.webp"),
  //   available: false,
  // },
  // {
  //   id: 103,
  //   name: "Titi Mobile App",
  //   description:
  //     "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
  //   technologies: ["UX Research", "UI Design", "Prototyping"],
  //   github: "",
  //   demo: "",
  //   image: require(".//../../public/projects/titi.webp"),
  //   available: false,
  // },
];
