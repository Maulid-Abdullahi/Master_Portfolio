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
  nickname: "Abdul",
  subTitle:
    "IT Professional with 2 years of experience in Mobile, Web and Systems development for payment companies. I can develop Web applications using React and Angular Frameworks. My greatest strength is adaptability, flexibility and ability to learn fast",
  resumeLink:
    "https://drive.google.com/file/d/1rG41g6NO6l7m7EED4c2R5d2z6ICR8cDD/view?usp=sharing",
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
    // {
    //   title: "Web Development",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Develops and delivers database driven websites and web applications using on-premise and hosted IIS and Apache application server",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
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
      // profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      // profileLink: "https://www.codechef.com/users/maulid",
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
      // profileLink: "https://www.kaggle.com/laymanbrother",
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
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
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
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
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
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
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
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
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
