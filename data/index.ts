export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
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
      "I'm flexible with different programming languages and development environments.",
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
      "Tech enthusiast with a passion for technology that impacts the world.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Currently learning front-end development skills.",
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
    title: "Compiler for a syntax-similar language to Java",
    des: "A compilter that generates Java byte code from a syntax-similar language to Java. The compiler consists of a Lexer, Parser, Type Checker, and Code Generator.",
    iconLists: ["./java-svgrepo-com.svg"],
    img: "./programming-monitor-svgrepo-com.svg",
  },
  {
    id: 2,
    title:
      "Workout app aimed for peer-to-peer training developed as part of my CS Senior Project",
    des: "On a bike ride with a friend? With this app you can monitor each others heart rate and speed to elevate each other's performance.",
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
    id: 3,
    title: "College major quiz",
    des: "A react based app which could help narrow down which major is best given your interests",
    img: "./quiz-on-computer-with-question-signs-around-svgrepo-com.svg",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg", "./three.svg", "./c.svg"],
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer - Microsoft",
    desc: "Under the load balancing team of Substrate Core, helping to maintain and improve distributed systems.",
    className: "md:col-span-2",
    thumbnail: "./microsoft-svgrepo-com.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern - Microsoft",
    desc: "Learned how to create Window applications with C++ Win32 and developed a new touch screen animation for my team. ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./microsoft-svgrepo-com.svg",
  },
  {
    id: 3,
    title: "Software Engineer Co-op - GE Appliances",
    desc: "Worked with the Android team to help create a mobile app to ease testing of appliances, being able to connect to them via the app. Learned how to develop in Kotlin and how to use C for embedded sytems. ",
    className: "md:col-span-2", // change to md:col-span-2
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
