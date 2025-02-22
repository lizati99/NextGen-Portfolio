import ResumeCard from './ResumeCard';
import classes from './ResumeContent.module.css';

const educationData = [
    {
        year: "2024",
        title: "German Language Diploma B1",
        date: "TELC / 2024",
        description: "Is a language certificate for advanced basic knowledge of German."
    },
    {
        year: "2022",
        title: "Specialized Technician Diploma",
        date: "CFMNTIOE Oujda / 2020 - 2022",
        description: "Technician specialized in development informatique at establishment l'offshoring oujda."
    },
    {
        year: "2022",
        title: "MICROSOFT OFFICE SPECIALIST",
        date: "MICROSOFT / 2022",
        description: "Office Word 2016, Office Excel 2016"
    },
    {
        year: "2022",
        title: "COMPUTER TECHNOLOGY ESSENTIAL CERTIFICATE",
        date: "CISCO / 2021",
        description: "Cisco Networking Academy"
    },
    {
        year: "2018",
        title: "Bachelor degree",
        date: "Charif El Edrissi High School / 2017 - 2018",
        description: "Baccalaureate in physical science (Charif El Edrissi High School)."
    }
];

const experienceData = [
    {
        year: "2025",
        title: "Training : Fullstack Developer",
        date: "SoftCactus / 2024 - 2025, Oujda",
        description: `I worked on the E-Commerce project, customizing the user interface 
            using React JS and fixing some backend issues with Laravel. I also analyzed 
            the Sales and Purchase project from scratch, created a UML diagram, 
            and developed the backend using Laravel.`
    },
    {
        year: "2023",
        title: "Training : Fullstack Developer",
        date: "Bel Learning Pro / 2022 - 2023, Oujda",
        description: `I contributed to three projects. As a Full Stack Developer, I 
            built an e-learning platform using HTML, Bootstrap 5, JavaScript, PHP, and MySQL, 
            focusing on user experience, data security, and efficient storage. 
            Another role as a Back End Developer, I developed a system for managing orders 
            and project files using ASP.NET Core, design patterns, OOP, JWT, and SQL Server. 
            Also developed a warehouse business management application using ADO.NET.`
    },
    {
        year: "2023",
        title: "Freelancer : Back-end Developer",
        date: "Digital Butterfly Freelancer / 2023, Oujda",
        description: `I developed a system for Marrakech Invest platform using PHP. 
            My responsibilities included back-end development and database creation.`
    },
    {
        year: "2022",
        title: "Training : Back-end Developer",
        date: "SYMPANUX / 2022",
        description: `Creation of an e-commerce and e-learning platform with HTML, 
            Bootstrap 5, JavaScript, PHP, and MySQL.`
    }
];



export default function ResumeContent() {
    return (
        <div className={classes.resume_content}>
            <div className={classes.education}>
                <div className={classes.header}>
                    Education
                    <div className={classes.square_parent}>
                        <div className={classes.square_child}></div>
                    </div>
                </div>
                {educationData.map((item, index) => (
                    <ResumeCard key={index} {...item} />
                ))}
            </div>
            <div className={classes.experience}>
                <div className={classes.header}>
                    Experience
                    <div className={classes.square_parent}>
                        <div className={classes.square_child}></div>
                    </div>
                </div>
                {experienceData.map((item, index) => (
                    <ResumeCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
