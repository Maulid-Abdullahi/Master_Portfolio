/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Maulid's Portfolio",
  description:
    "A passionate and enthusiastic web developer with  2+ years of experience. I love new challenges and new projects that help me invest all my skills and experience into succeeding them.",
  og: {
    title: "Maulid Abdullahi Portfolio",
    type: "website",
    //url: "https://maulid-abdullahi.netlify.app/#/",
  },
};

//Home Page
const greeting = {
  title: "Maulid Abdullahi",
  logo_name: "Maulid Abdullahi",
  nickname: "Abdull",
  subTitle:
    "IT Professional with 2+ years of experience in Mobile, Web and Systems development for payment companies. I can develop Web applications using React and Angular Frameworks. My greatest strength is adaptability, flexibility and ability to learn fast",
  resumeLink:
    "https://drive.google.com/file/d/1Fvd0W5fo7TLZ0KL4bs5bgx8eAFSMwG2E/view?usp=sharing",
  portfolio_repository: "https://github.com/Maulid-Abdullahi?tab=repositories",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Maulid-Abdullahi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/maulid-abdullahi-00766b1a4/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:maulidabdullahi3@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React Js and Angular",
        "⚡ Supporting and implementing required changes android app using Java",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend using Java",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing and developing web dashboards using industry UI/UX standard",
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Advance Diploma In Software Engineering",
      subtitle: "Aptech",
      logo_path: "aptech3.png",
      alt_name: "Aptech",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ I have studied basic and advanced software engineering subjects like OOP, Algorithms,Design Patterns etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, SpringBoot, Cloud Computing and Full Stack Development.",
        "⚡ pass with Credit",
      ],
      website_link: "https://www.edulink.ac.ke/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Spring Framework 5: Beginner to Guru",
      subtitle: "- John Thompson",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.udemy.com/course/spring-framework-5-beginner-to-guru/",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "The Complete JavaScript Course 2021: From Zero to Expert!",
      subtitle: "- Jonas Schmedtmann",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.udemy.com/course/the-complete-javascript-course/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Andela Learning Community 4.0",
      subtitle: "- ALC Training",
      logo_path: "andela2.png",
      certificate_link:
        "https://andela.com/insights/andela-launches-alc-4-0-in-partnership-with-google-and-pluralsight/",
      alt_name: "Google",
      color_code: "#FFFF",
    },
    {
      title: "Learn Java Unit Testing with JUnit 5 in 20 Steps",
      subtitle: "- in28Minutes Official",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.udemy.com/course/junit-tutorial-for-beginners-with-java-examples/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Web Development",
      subtitle: "- Andela",
      logo_path: "andela2.png",
      certificate_link: "https://andela.com/for-engineers/learning-community/",
      alt_name: "Microsoft",
      color_code: "#FFFFFF",
    },
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      subtitle: "- Maximilian Schwarzmuller",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Software Developer and Designer. I have also worked with some well established companies mostly as Trainer. I also love organising community events.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Developer",
          company: "Tracom Services Limited",
          company_url: "https://tracom.co.ke/",
          logo_path: "tracom.jpeg",
          duration: "March 2020 - PRESENT",
          location: "Nairobi, Kenya",
          description:
            "I am working on Electronic fiscal device management solution (EFDM) that will monitor and track transactions and sales records of businesses in Liberia.The EFDM solution comprises of a Tax management solution known as “Miliki” and Electronic fiscal devices (ETRs). Upgraded Tulaa Mobile apps to use Kotlin and MVVM pattern.Developed Keytabu mobile app which is used by teachers to post their tutorials and teach students online(udemy).",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Tracom Academy",
          company: "Tracom Solutions Limited.",
          company_url: "https://www.delhivery.com/",
          logo_path: "tracom.jpeg",
          duration: "March 2020 - July 2020",
          location: "Nairobi, Kenya",
          description:
            "I have worked on hands project which focuses on software development and security, for Web, mobile, POS terminals, and ATMs.At the end of the academy,I built a payment system which helps POS terminals save their daily transactions in our database, also created user management system where i can view my database data, i used springboot and Angular.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Andela Learning Community",
          company: "Andela",
          company_url:
            "https://andela.com/insights/andela-launches-alc-4-0-in-partnership-with-google-and-pluralsight/",
          logo_path: "andela2.png",
          duration: "May 2019 - December 2019",
          location: "Nairobi, Kenya",
          description:
            "Andela Learning Community (ALC) is a Andela-sponsored program which is open to everyone interested in acquiring technical skills, regardless of their educational background, participants will be advancing their skills in  Web development, Android development and Google Cloud technologies on Pluralsight. Learners who successfully complete the Google Scholarship Certification Program have the opportunity to go a step further to take a Google Certification exam,thereby certifying their competence and job readiness. ",
          color: "#0000FF",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create full-stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "icon.png",
    description:
      "I am available on social media. Please get in touch and i will reply within 24 hours.I can help you with Java, dart, React, Android, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "00100, Nairobi Kenya",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Pangani,+Nairobi/@-1.2716788,36.8381268,16.71z/data=!4m5!3m4!1s0x182f16c39c0f766b:0xc78c8da617084376!8m2!3d-1.2667224!4d36.8398293",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+254720304574",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
