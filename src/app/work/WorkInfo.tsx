/* eslint-disable react/jsx-key */
export interface WorkInfoProps {
  name: string;
  icon: string;
  technologies: string[];
  keyDetails: string[];
  description: string;
  screenshots: string[];
  testimonial?: string;
  testimonialAuthor?: string;
}

export const workInfo: WorkInfoProps[] = [
  {
    name: "ABC iview",
    icon: "/appIcons/iView.jpeg",
    technologies: ["Android", "Kotlin", "Jetpack Compose", "Mobile", "TV"],
    keyDetails: [
      "Government owned project",
      "5M+ downloads",
      "Full rewrite (partially greenfield project)",
    ],
    description:
      "I worked as a senior developer on the ABC iview project. Responsible for architecture decisions, " +
      "coding and guiding others. IView is a free video streaming service for Australians to watch Live Streams, TV shows and movies. " +
      "The app was developed using Jetpack Compose and Kotlin, at the time the Jetpack Compose TV library was" +
      " very recently released (Still in alpha when we started) and I enjoyed the challenges that came with being one " +
      "of the early adopters.",
    screenshots: [
      "/screenshots/iViewScreenShot1.jpg",
      "/screenshots/iViewScreenShot2.jpg",
      "/screenshots/iViewScreenShot3.jpg",
      "/screenshots/iViewScreenShot4.jpg",
    ],
    testimonial: "",
    testimonialAuthor: "",
  },
  {
    name: "Virgin Australia",
    icon: "/appIcons/virginIcon.jpeg",
    technologies: ["Android", "Kotlin", "Mobile"],
    keyDetails: ["500,000+ downloads", "Android, Kotlin"],
    description:
      "Virgin Australias official mobile app for assisting travellers, allowing them to book and manage flights. " +
      "We had a large team for this project, I was responsible for ensuring that key stakeholders were happy with the " +
      "Android side of the app, developing high-quality code and mentoring other developers.",
    screenshots: [
      "/screenshots/virginScreenshot1.jpg",
      "/screenshots/virginScreenshot2.jpg",
      "/screenshots/virginScreenshot3.jpg",
    ],
    testimonial: "",
    testimonialAuthor: "",
  },
  {
    name: "myLearners",
    icon: "/appIcons/mylearners.jpeg",
    technologies: ["Android", "Kotlin", "RxJava", "Mobile"],
    keyDetails: [
      "100,000K+ downloads",
      "Government owned project",
      "Android, Kotlin",
    ],
    description:
      "myLearners is a mobile app for assisting learner drivers in Australia to track driving hours. The  " +
      "state of Victoria required an application that can be used to track the users hours driven, road conditions " +
      "and provide useful learning materials to help learner drivers move on to their full license. There were some" +
      "unique challenges with this project, such as the need to track the users location and distance travelled.",
    screenshots: [
      "/screenshots/mylearnersScreenshot1.jpg",
      "/screenshots/mylearnersScreenshot2.jpg",
      "/screenshots/mylearnersScreenshot3.jpg",
      "/screenshots/mylearnersScreenshot4.jpg",
    ],
  },
  {
    name: "My 7-Eleven",
    icon: "/appIcons/my7eleven.jpg",
    technologies: ["Android", "iOS", "Kotlin", "React Native", "TypeScript"],
    keyDetails: ["1M+ downloads", "Android, Kotlin"],
    description:
      "7 Eleven loyalty awards, the ability to lock in a low fuel price, checkout items and petrol " +
      "using only the app. I was tasked to integrate React-Native for a feature into an existing Android app. " +
      "It was an interesting challenge and gave me an in-depth understanding of how React-Native works at a low level.",
    screenshots: [
      "/screenshots/my7elevenScreenshot1.jpg",
      "/screenshots/my7elevenScreenshot2.jpg",
      "/screenshots/my7elevenScreenshot3.jpg",
      "/screenshots/my7elevenScreenshot4.jpg",
    ],
    testimonial: "",
    testimonialAuthor: "",
  },
  {
    name: "King Facade International",
    icon: "/appIcons/KFI.png",
    technologies: [
      "React",
      "iOS",
      "Kotlin",
      "Swift",
      "React Native",
      "TypeScript",
      "Firebase",
      "Dropbox",
      "PDF generation",
    ],
    keyDetails: ["in-house app (<20 users)"],
    description:
      "Completely designed and developed by myself for a company that manufactures and installs facades for buildings. " +
      "The app allows the company to perform quality control checks on their work.",
    screenshots: ["/screenshots/KFISS1.png", "/screenshots/KFISS2.png"],
    testimonial: "",
    /*'We created an app with James to help automate some of our' +
      ' company procedures. James stuck to the brief and budget and communicated ' +
      'well throughout the process. We now have a well designed, intuitive app that ' +
      "has helped with our efficiency and consistency. We highly recommend James' services"*/
    testimonialAuthor: "",
  },
  {
    name: "Lautrec Façade Design",
    icon: "/appIcons/Lautrec.png",
    technologies: ["Android", "Kotlin", "Mobile"],
    keyDetails: [
      "in-house app (<20 users)",
      "Firebase",
      "Dropbox",
      "PDF generation",
    ],
    description:
      "Completely designed and developed by myself for a company that designs facades for buildings. " +
      "The app allowed the company to generate PDF reports used for engineering inspections.",
    screenshots: ["/screenshots/LautrecSS1.png", "/screenshots/LautrecSS2.png"],
    testimonial: "" /*
      'We gave James a brief & a suggested report format for a ' +
      'software tool that would better meet our specific needs. ' +
      'James met the brief & the budget for the android app he designed & implemented ' +
      'for us. James engineering background and practical experience ' +
      'in the construction sector meant he had a good understanding of our requirements. ' +
      'We have a had a great payback for the time & money invested in developing this tool ' +
      "and have no hesitation in recommending James' services.",*/,
    testimonialAuthor: "Ron Hanley - Director",
  },
  {
    name: "Structural Coating Services",
    icon: "/appIcons/SCS.png",
    technologies: ["Android", "Kotlin", "Mobile"],
    keyDetails: [
      "Automatically formatted PDF generation",
      "Dropbox file sync",
      "Firebase Database / Login",
    ],
    description:
      "An in house app used to streamline internal process. This app helps with Quality Assurance for Site Inspections",
    screenshots: ["/screenshots/SCSSS1.png", "/screenshots/SCSSS2.png"],
    testimonial: "" /*
      'We created an app with James to assist with our company’s ' +
      'daily operations. The app is very easy to use and has helped us to improved ' +
      'time efficiency for the business. James is easy to work with, ' +
      'communicated well throughout the development, testing phases and incorporated ' +
      'our ideas for adjustments on schedule. ' +
      'The knowledge and skills that James has with developing an app that suits ' +
      'our exact needs is impressive. We have had feedback from our customers that ' +
      'the app is very easy to follow. We would recommend anyone to work with James.', */,
    testimonialAuthor: "Sara - SCS Administration",
  },
];
