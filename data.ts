import { FaGithub, FaLinkedin, FaDatabase, FaLaptop, FaNetworkWired, FaTools, FaToolbox } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

export const socials = [
    { icon: FaGithub, href: "https://github.com/JadWhite2003", label: "Github" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/jadon-white-b27828202/", label: "Linkedin" },
    { icon: Mail, href: "mailto:jadwhite2003@gmail.com", label: "Email" },

]

export const footerSocials = [
    { icon: FaGithub, href: "https://github.com/JadWhite2003", label: "Github" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/jadon-white-b27828202/", label: "Linkedin" },

]

export const projects = [
    {
        title: "Devularity",
        description: "A curated suite of productivity apps that seamlessly connect together",
        image: "/images/placeholder.png",
        technologies: ["React", "Flutter", "TailwindCSS", "Supabase", "MySQL"],
        github: "https://github.com/JadWhite2003",
        demo: "https://github.com/JadWhite2003",
        featured: true,
    },
    {
        title: "DEVonance",
        description: "A small application that allows users to quickly share files, images and text with their devices",
        image: "/images/placeholder.png",
        technologies: ["React", "Next.js", "TailwindCSS", "Python", "FastAPI"],
        github: "https://github.com/JadWhite2003",
        demo: "https://github.com/JadWhite2003",
        featured: false,
    },
    {
        title: "MouseRing",
        description: "A desktop app that allows a custom ring with shortcuts displayed around the mouse cursor, for quick access to shortcuts and actions",
        image: "/images/placeholder.png",
        technologies: ["React", "Next.js", "TailwindCSS"],
        github: "https://github.com/JadWhite2003",
        demo: "https://github.com/JadWhite2003",
        featured: false,
    },
    {
        title: "BigBangButtons(BBB)",
        description: "A collection of customizable buttons for quick access to frequently used applications, files, and websites that will open all at once",
        image: "/images/placeholder.png",
        technologies: ["React",],
        github: "https://github.com/JadWhite2003",
        demo: "https://github.com/JadWhite2003",
        featured: false,
    },
    {
        title: "The Clocktower",
        description: "A fully functional watch e-commerce store with working payments and content management systems",
        image: "/images/placeholder.png",
        technologies: ["React", "Next.js", "Stripe", "TailwindCSS", "Supabase"],
        github: "https://github.com/JadWhite2003",
        demo: "https://github.com/JadWhite2003",
        featured: false,
    },
    {
        title: "AIment",
        description: "A conference of AI's with assignable roles, where they interact with both the user an each other to create the users desired output",
        image: "/images/placeholder.png",
        technologies: ["React", "Next.js", "TailwindCSS", "AI"],
        github: "https://github.com/JadWhite2003",
        demo: "https://github.com/JadWhite2003",
        featured: false,
    },
]

export const legacyProjects = [
    {
        title: "Test",
        description: "Test",
        image: "/images/test.png",
        technologies: ["React", "Next.js", "TailwindCSS"],
        github: "https://github.com/JadWhite2003",
        demo: "",
    },
]

export const skills = [
    {
        title: "Frontend",
        titleIcon: FaLaptop,
        skills: [
            { name: "React", icon: "/logos/react.svg" },
            { name: "Next.js", icon: "/logos/next.svg" },
            { name: "TailwindCSS", icon: "/logos/tailwind.svg" },
            { name: "TypeScript", icon: "/logos/typescript.svg" },
        ],
    },
    {
        title: "Backend",
        titleIcon: FaDatabase,
        skills: [
            { name: "Node.js", icon: "/logos/node.svg" },
            { name: "Python", icon: "/logos/python.svg" },
            { name: "JavaScript", icon: "/logos/javascript.svg" },
            { name: "FastAPI", icon: "/logos/fastapi.svg" },
        ],
    },
    {
        title: "Database",
        titleIcon: FaNetworkWired,
        skills: [
            { name: "MySQL", icon: "/logos/mysql.svg" },
            { name: "MongoDB", icon: "/logos/mongodb.svg" },],
    },
    {
        title: "DevOps",
        titleIcon: FaToolbox,
        skills: [
            { name: "Docker", icon: "/logos/docker.svg" },
            { name: "Github Actions", icon: "/logos/githubaction.svg" },],
    },
    {
        title: "Tools & Others",
        titleIcon: FaTools,
        skills: [
            { name: "Git", icon: "/logos/git.svg" },
            { name: "Visual Studio Code", icon: "/logos/vscode.svg" },
            { name: "Figma", icon: "/logos/figma.svg" },
            { name: "Adobe Photoshop", icon: "/logos/photoshop.svg" },
            { name: "Supabase", icon: "/logos/supabase.svg" },],
    },

]

export const experiences = [
    {
        title: "Software Developer",
        company: "Self-Employed",
        duration: "2023 - Present",
        description: " Developing productivity apps used by 100+ users, handling bug reports and feedback, Creating and maintaining APIs and databases, Managing sensitive user data, Creating CI/CD pipelines to automate testing, Working with and creating AI tools to increase productivity, reduce repetitiion and for quick iteration and planning.",
        technologies: ["Test", "Test"],

    },
    {
        title: "IT Support Technician",
        company: "No Problem IT",
        duration: "2021 - 2022",
        description: "Provided technical support to clients, troubleshooting hardware and software issues, and ensuring smooth IT operations.",
        technologies: ["Test", "Test"],

    },
    {
        title: "Library Assistant",
        company: "Pimlico Library",
        duration: "2018 - 2018",
        description: "Assisted patrons with research and information needs, maintained library collections, and operated library systems.",
        technologies: ["Test", "Test"],

    },

]

export const education = [
     {
        title: "Just IT Software Development Bootcamp",
        company: "Just IT",
        duration: "2022 - 2023",
        description: "A skills bootcamp that covers a wide range of topics including web development, programming, databases, and software engineering principles.",
        technologies: ["Test", "Test"],

    },
    {
        title: "BTEC Level 3 Extended Diploma in IT",
        company: "Southwark College",
        duration: "2019 - 2021",
        description: "Cyber Security, Networking, Programming, Web Development, Database Management, and IT Project Management.",
        technologies: ["Test", "Test"],

    },
    {
        title: "GCSEs",
        company: "Westminster Academy",
        duration: "2014 - 2029",
        description: " GCSEs in Mathematics, English Language, English Literature, Science, and Computer Science.",
        technologies: ["Test", "Test"],

    },
   

]

export const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "jadwhite2003@gmail.com",
        href: "mailto:jadwhite2003@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+44 Message me first!",
        href: "tel:+441234567890"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "London, UK",
        href: "https://www.google.com/maps/place/London,+UK"
    }
]