import MainHeading from '../Common/MainHeading/MainHeading'
import classes from './ServiceWorker.module.css'
export default function ServiceWorker(){
    const services=[
        {
            id:1,
            name:'Web Design',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti in reiciendis laborum quis labore dolores non omnis saepe nihil.',
            img:'../../assets/service/icons8-web-design-100.png'
        },
        {
            id:2,
            name:'Web Development',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti in reiciendis laborum quis labore dolores non omnis saepe nihil.',
            img:'../../assets/service/icons8-this-pc-100.png'
        },
        {
            id:3,
            name:'Mobile App Development',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti in reiciendis laborum quis labore dolores non omnis saepe nihil.',
            img:'../../assets/service/icons8-mobile-phone-100.png'
        },
        {
            id:4,
            name:'Digital Marketing',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti in reiciendis laborum quis labore dolores non omnis saepe nihil.',
            img:'../../assets/service/icons8-ad-campaign-100.png'
        },
        {
            id:5,
            name:'SEO & SEM',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti in reiciendis laborum quis labore dolores non omnis saepe nihil.',
            img:'../../assets/service/icons8-seo-100.png'
        },
        {
            id:6,
            name:'Branding & Identity',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti in reiciendis laborum quis labore dolores non omnis saepe nihil.',
            img:'./../../assets/service/icons8-branding-100.png'
        },
    ]

    const displayServices=()=>{
        return services.map(service=>(
            <div className={classes.service} key={service.id}>
                <div className={classes.service_icon}>
                    <img src="./../../assets/icons/service/icons8-branding-64.png" alt=""  />
                </div>
                <div className={classes.service_body}>
                    <h3><span>{service.name.split(' ')[0]}</span> {service.name.split(' ')[1]}</h3>
                    <p>{service.description}</p>
                </div>
            </div>
        ))
    }
    return <>
        <div className={classes.services_box}>
            <MainHeading smallText="Services i offer to my clients" mainText="My" highlightedText="Services"/>
            <div className={classes.services_content}>
                {displayServices()}
            </div>
        </div>
    </>
}