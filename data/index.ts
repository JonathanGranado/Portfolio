export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Efficient and reliable engineering for large-scale systems. I build infrastructure you can trust.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Workload management reliability at scale. Enabling confident decisions across ~420K servers globally.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Inspired by the intersection of software engineering, healthcare, and AI. Building solutions that directly impact people.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Computer Science graduate from University of Florida. Always learning, always building.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Have something cool to share?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Rent & Utility Expense Tracking - Gmail Integration",
    des: "Built a personal project integrating with Gmail API to extract and structure rent and utility-related emails into categorized financial records. Demonstrates end-to-end system design across API integration and data processing pipelines.",
    iconLists: ["./c.svg"],
    img: "./programming-monitor-svgrepo-com.svg",
  },
  {
    id: 2,
    title: "Compiler for a syntax-similar language to Java",
    des: "A compiler that generates Java byte code from a syntax-similar language to Java. The compiler consists of a Lexer, Parser, Type Checker, and Code Generator. Demonstrates deep understanding of language design and compilation theory.",
    iconLists: ["./java-svgrepo-com.svg"],
    img: "./programming-monitor-svgrepo-com.svg",
  },
  {
    id: 3,
    title:
      "Workout app - Peer-to-peer training platform (CS Senior Project)",
    des: "Real-time fitness monitoring app allowing users to track each other's heart rate and speed during workouts. Built with modern web and mobile technologies.",
    img: "./cycle-cycling-cyclist-svgrepo-com.svg",
    iconLists: [
      "./next.svg",
      "./tail.svg",
      "./ts.svg",
      "./stream.svg",
      "./c.svg",
    ],
  },
  {
    id: 4,
    title: "College major quiz",
    des: "Interactive React application to help students identify the best college major based on their interests and strengths.",
    img: "./quiz-on-computer-with-question-signs-around-svgrepo-com.svg",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg", "./three.svg", "./c.svg"],
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer - Microsoft",
    desc: "Led critical infrastructure initiatives for workload management: improved reliability of workload management signal that became focal point for infrastructure balancing decisions across ~420K servers. Designed and deployed optimization policies, enabling confident system-wide scaling decisions through highly reliable telemetry and signal confidence.",
    className: "md:col-span-2",
    thumbnail: "./microsoft-svgrepo-com.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern - Microsoft",
    desc: "Developed Windows applications using C++ Win32 API. Designed and implemented a new touch screen animation framework that improved user experience and was adopted by the team for production use.",
    className: "md:col-span-2",
    thumbnail: "./microsoft-svgrepo-com.svg",
  },
  {
    id: 3,
    title: "Software Engineer Co-op - GE Appliances",
    desc: "Collaborated with the Android team to develop a mobile app for appliance testing and connectivity. Gained hands-on experience with Kotlin for mobile development and C for embedded systems programming.",
    className: "md:col-span-2",
    thumbnail: "./general-electric-logo-svgrepo-com.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
  },
  {
    id: 3,
    img: "./link.svg",
  },
];
