// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import machineLearningLogo from './assets/tech_logo/machine_learning.png';
import figmaLogo from './assets/tech_logo/figma.png';
import genAILogo from './assets/tech_logo/genAI.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import flutterLogo from './assets/tech_logo/flutter.png';
import streamlitLogo from './assets/tech_logo/streamlit.png';
import jupyternbLogo from './assets/tech_logo/jupyter_nb.png';


// Experience Section Logo's
import sansoftechLogo from './assets/company_logo/sansoftech.png';

// Education Section Logo's
import igdtuwLogo from './assets/education_logo/college.png';
import lpsLogo from './assets/education_logo/school.png';

// Project Section Logo's
import alumniLogo from './assets/work_logo/alumni.png';
import insightIQLogo from './assets/work_logo/insightIQ.png';
import nutridocLogo from './assets/work_logo/nutridoc.png';
import saasProjLogo from './assets/work_logo/saasProj.png';
import mernAiLogo from './assets/work_logo/mern_ai.png';
import researchPPrLogo from './assets/work_logo/research_ppr.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
  {
  title: 'AI/ML',
  skills: [
    { name: 'Machine Learning', logo: machineLearningLogo },
    { name: 'GenAI', logo: genAILogo },
    { name: 'Streamlit', logo: streamlitLogo },
    { name: 'Jupyter Notebook', logo: jupyternbLogo },
  ],
},
{
  title: 'Mobile Development',
  skills: [
    { name: 'Flutter', logo: flutterLogo },
  ],
},

];

  export const experiences = [
    {
      id: 0,
      img: sansoftechLogo,
      role: "Summer Intern | Generative AI Prompt Engineering",
      company: "Sansoftech Services Pvt. Ltd.",
      date: "July 2024 - August 2024",
      desc: "Conducted research and experiments to enhance AI content generation. Developed and refined prompts for real-world applications, enhancing user-centric outputs. Achieved a significant boost in generative AI accuracy for customized user applications.",
      skills: [
        "GenAI",
         "Prompt Engineering",
          "Streamlit", 
          "Python",
           "LLMs",
      ],
    },
  ];
  


export const education = [
  {
    id: 0,
    img: igdtuwLogo,
    school: "Indira Gandhi Delhi Technical University for Women",
    date: "2023 – 2027",
    grade: "CGPA - 8.5",
    desc: "Currently pursuing a Bachelor of Technology in Computer Science and Engineering from IGDTUW. The curriculum covers core CS subjects such as Data Structures and Algorithms, DBMS, OOPs, and Software Engineering. Actively engaged in development projects and research in the field of AI and software systems.",
    degree: "B.Tech in Computer Science and Engineering",
  },
  {
    id: 1,
    img: lpsLogo,
    school: "The Lawrence Public Sr. Sec School, Janakpuri",
    date: "2022",
    grade: "XII - 87.2%",
    desc: "Completed Senior Secondary Education under CBSE board with a focus on Physics, Chemistry, Mathematics, and Computer Science.",
    degree: "CBSE (XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: lpsLogo,
    school: "The Lawrence Public Sr. Sec School, Janakpuri",
    date: "2020",
    grade: "X - 90.6%",
    desc: "Completed Higher Secondary Education under CBSE board, building a strong academic base in science and technology.",
    degree: "CBSE (X) - Science with Computer Applications",
  },
];


  export const projects = [
    {
      id: 0,
      title: "Alumni Engagement Platform",
      description:
        "Flutter-based app for enhancing alumni interactions. Includes job sharing, success stories, and an optimized onboarding flow.",
      image: alumniLogo,
      tags: ["Flutter", "Dart", "Firebase", "UI/UX"],
      github: "https://github.com/raizelk/SIH_alumni_app/tree/master",
      webapp: "https://drive.google.com/file/d/1ejEL1vvxSFH67IIhce3OmIQs5Byt-vnZ/view?usp=sharing",
    },
    {
      id: 1,
      title: "NutriDoc: A GenAI Doctor",
      description:
        "Nutritional GenAI assistant delivering real-time food analysis and personalized recommendations. Boosted user retention by 30%.",
      image: nutridocLogo,
      tags: ["GenAI", "Streamlit", "Python", "Gemini-1.5 Pro"],
      github: "https://github.com/GetRiyaTanwar/NutriDoc-APP",
      webapp: "getriyatanwar-nutridoc-app-app-new-f7jfwi.streamlit.app/",
    },
    {
      id: 2,
      title: "INSIGHT IQ: AI-Powered Competitive Analysis Tool",
      description:
        "Gemini LLM-powered app that ingests PDFs and outputs summaries, comparisons, and strategy insights for competitive reports.",
      image: insightIQLogo,
      tags: ["Python", "GenAI", "Gemini LLM", "NLP", "Streamlit"],
      github: "https://github.com/GetRiyaTanwar/INTEL360-Ai_Driven-Competitor/tree/master",
      webapp: "",
    },
    {
      id: 3,
      title: "MERN AI Assistant",
      description:
        "Voice-based developer assistant that explains code, suggests improvements, and integrates AI APIs for contextual help.",
      image: mernAiLogo,
      tags: [""],
      github: "",
      webapp: "",
    },
    {
      id: 4,
      title: "SaaS Operating Platform",
      description:
        "Admin panel and analytics dashboard for team collaboration, tracking KPIs, and dynamic module access. Built in Next.js.",
      image: saasProjLogo,
      tags: ["Next JS", "Tailwind CSS", "TypeScript", "SaaS", "Vercel"],
      github: "",
      webapp: "",
    },
    {
      id: 5,
      title: "Strengthening Android Security using Deep Learning",
      description:
        "Strengthening Android Security using Deep Learning",
      image: researchPPrLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "",
      webapp: "",
    },
  ];  