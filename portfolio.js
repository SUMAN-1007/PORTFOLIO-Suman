/* Change this file to get your personal Portfolio */

// Site Settings
const settings = {
  isSplash: true,
};

// SEO
const seo = {
  title: "Portfolio",
  description:
    "Passionate Embedded Systems & PCB Design Engineer. Explorer of IoT, EVs, and Automation. Constant learner building smart solutions from scratch.",
  og: {
    title: "Suman Ghorai Portfolio",
    type: "website",
    url: "https://yourdomain.com",
  },
};

// Greeting Section
const greeting = {
  username: "Suman Ghorai",
  title: "Hi all, I'm Suman",
  subTitle:
    "Passionate Embedded Systems & PCB Design Engineer. Explorer of IoT, EVs, and Automation. Constant learner building smart solutions from scratch.",
  resumeLink: "https://drive.google.com/your-resume-link", // <-- replace
  githubProfile: "https://github.com/SUMAN-1007",
};

// Skills
const skills = {
  data: [
    {
      title: "Embedded Systems",
      fileName: "EmbeddedSkill",
      skills: [
        "⚡ Designing schematics and layouts using KiCad",
        "⚡ Writing Arduino code for EVs, sensors, and automation",
        "⚡ Familiar with interfacing sensors via I2C, SPI, UART",
      ],
      softwareSkills: [
        {
          skillName: "KiCad",
          fontAwesomeClassname: "simple-icons:kicad",
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "logos:arduino",
        },
        {
          skillName: "Embedded C",
          fontAwesomeClassname: "devicon:c",
        },
      ],
    },
    {
      title: "Simulation & Tools",
      fileName: "Tools",
      skills: [
        "⚡ Circuit simulation with Tinkercad and Wokwi",
        "⚡ Version control with Git & GitHub",
        "⚡ Code editing with VS Code & PlatformIO",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "devicon:github",
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "vscode-icons:file-type-vscode",
        },
      ],
    },
  ],
};

// Education
const degrees = {
  degrees: [
    {
      title: "B.Tech in Instrumentation Engineering",
      subtitle: "MAKAUT, West Bengal",
      logo_path: "makaut_logo.png",
      alt_name: "MAKAUT",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ Learned core electronics, sensors, and automation.",
        "⚡ Built hands-on projects related to EVs, monitoring systems, and PCB design.",
      ],
      website_link: "https://makautwb.ac.in",
    },
  ],
};

// Experience (Project-based)
const experience = {
  sections: [
    {
      title: "Projects",
      experiences: [
        {
          title: "EV Monitoring System",
          company: "Self Project",
          company_url: "https://github.com/suman-ghorai/ev-monitoring-system",
          logo_path: "ev_logo.png",
          duration: "2024 - Present",
          location: "Tinkercad / Arduino",
          description:
            "An Arduino-based smart EV monitoring system with sensors for temperature, voltage, and obstacle detection. Displayed on I2C LCD.",
          color: "#0879bf",
        },
        {
          title: "Automatic Room Light Controller",
          company: "PCB Design Project",
          company_url: "https://github.com/suman-ghorai/auto-light-controller",
          logo_path: "pcb_logo.png",
          duration: "2024",
          location: "KiCad",
          description:
            "Designed a PCB using LDR and 555 Timer for automatic light control with DC jack, ripple filtering, and L7805 thermal optimization.",
          color: "#f4652a",
        },
        {
          title: "Ripple Filter Power Supply",
          company: "Electronics Mini Project",
          company_url: "#",
          logo_path: "psu.png",
          duration: "2023",
          location: "Breadboard",
          description:
            "Created a filtered DC power supply using transformer, bridge rectifier, and capacitors for voltage ripple suppression.",
          color: "#3e74e0",
        },
      ],
    },
  ],
};

// Projects
const projects = {
  data: [
    {
      id: "1",
      name: "EV Monitoring System",
      url: "https://github.com/suman-ghorai/ev-monitoring-system",
      description:
        "Arduino-based monitoring of EV parameters like temperature, voltage, and distance using sensors and LCD display.",
      languages: [
        {
          name: "Arduino",
          iconifyClass: "logos:arduino",
        },
        {
          name: "C++",
          iconifyClass: "logos:c-plusplus",
        },
      ],
    },
    {
      id: "2",
      name: "Automatic Room Light Controller",
      url: "https://github.com/suman-ghorai/auto-light-controller",
      description:
        "A 555 Timer + LDR based automatic light controller with custom-designed PCB in KiCad. Includes DC jack and thermal filtering.",
      languages: [
        {
          name: "KiCad",
          iconifyClass: "simple-icons:kicad",
        },
        {
          name: "Electronics",
          iconifyClass: "logos:resistor",
        },
      ],
    },
  ],
};

// Contact Info
const contactInfo = {
  title: "Contact Me",
  subtitle: "Open to collaboration, jobs, and tech discussions!",
  number: "+91-9749820155",
  email_address: "sumanghorai119@gmail.com",
  github: "https://github.com/SUMAN-1007",
  linkedin: "https://linkedin.com/in/suman-ghorai-743381278",
};

export {
  settings,
  seo,
  greeting,
  skills,
  degrees,
  experience,
  projects,
  contactInfo,
};
