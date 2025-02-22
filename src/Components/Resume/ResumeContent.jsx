import classes from './ResumeContent.module.css'

export default function ResumeContent(){
    return <>
        <div class={classes.resume_content}>
            <div class={classes.education}>
                <div class={classes.education_title}>Education</div>
                <div class={classes.education_item}>
                    <span class={classes.year}>2024</span>
                    <h3>German Language Diploma B1</h3>
                    <span class={classes.date}>TELC / 2024</span>
                    <p class={classes.text}>Is a language certificate for advanced basic knowledge of German.</p>
                </div>
                <div class={classes.education_item}>
                    <span class={classes.year}>2022</span>
                    <h3>Specialized Technician Diploma</h3>
                    <span class={classes.date}>CFMNTIOE Oujda / 2020 - 2022</span>
                    <p class={classes.text}>Technician specialized in development informatique at establishment l'offshoring oujda.</p>
                </div>
                {/* <div class="education-item">
                    <span class="year">2022</span>
                    <h3>WEBSITE CREATION CERTIFICATE</h3>
                    <span class="date">SYMPANUX / 2022</span>
                    <p class="text"> Creation of a website using PHP, DAO, HTML, CSS, and JavaScript.</p>
                </div> */}
                <div class={classes.education_item}>
                    <span class={classes.year}>2022</span>
                    <h3>MICROSOFT OFFICE SPECIALIST</h3>
                    <span class={classes.date}>MICROSOFT / 2022</span>
                    <p class={classes.text}> Office Word 2016, Office Excel 2016</p>
                </div>
                <div class={classes.education_item}>
                    <span class={classes.year}>2022</span>
                    <h3>COMPUTER TECHNOLOGY ESSENTIAL CERTIFICATE</h3>
                    <span class={classes.date}>CISCO / 2021</span>
                    <p class={classes.text}>Cisco Networking Academy</p>
                </div>
                <div class={classes.education_item}>
                    <span class={classes.year}>2018</span>
                    <h3>Bachelor degree</h3>
                    <span class={classes.date}>Charif El Edrissi High School / 2017 - 2018</span>
                    <p class={classes.text}>Baccalaureate in physical science (Charif El Edrissi High School).</p>
                </div>
            </div>
            {/* <div class={classes.experience}>
                <div class={classes.education_title}>Experience</div>
                
                <div class={classes.education_item}>
                    <span class={classes.year}>2023</span>
                    <h3>Training : Fullstack Developer</h3>
                    <span class={classes.date}>Bel Learning Pro / 2022 - 2023, Oujda</span>
                    <p class={classes.text}> I contributed to three projects. As a Full Stack Developer, I 
                        built an e-learning platform using HTML, Bootstrap 5, 
                        JavaScript, PHP, and MySQL, focusing on user experience, 
                        data security, and efficient storage. Another role as a Back
                        End Developer, I developed a system for managing orders 
                        and project files using ASP.NET Core, design patterns,.OOP, 
                        JWT and SQL Server for database. My responsibilities 
                        included back-end development, code organization, and 
                        ensuring data integrity. Also developed a warehouse 
                        business management application using ADO.NET.</p>
                </div>
                
                <div class={classes.education_item}>
                    <span class={classes.year}>2023</span>
                    <h3>Freelancer : Back-end Developer</h3>
                    <span class={classes.date}>Digital Butterfly Freelancer / 2023, Oujda</span>
                    <p class={classes.te}>I developed a system for Marrakech Invest platform using 
                        PHP . My responsibilities included back-end development 
                        and create database.</p>
                </div>
                <div class={classes.education_item}>
                    <span class={classes.year}>2022</span>
                    <h3>Training : Back-end Developer</h3>
                    <span class={classes.date}>SYMPANUX / 2022</span>
                    <p class={classes.text}>Creation of an e-commerce and e-learning platform with HTML,
                        Bootstrap 5, JavaScript, PHP, and MySQL.</p>
                </div>
            </div> */}
        </div>
    </>
}