import MainHeading from '../Common/MainHeading/MainHeading'
import classes from './ServiceWorker.module.css'
import webDesign from '../../assets/icons/service/icons8-web-design-100.png'
import webIcon from '../../assets/icons/service/icons8-this-pc-100.png'
import responsiveIcon from '../../assets/icons/service/icons8-responsive-64.png'
import digitalIcon from '../../assets/icons/service/icons8-pro-display-xdr-48.png'
import serviceIcon from '../../assets/icons/service/icons8-service-48.png'
import brandingIcon from './../../assets/icons/service/icons8-branding-64.png'

export default function ServiceWorker(){
    const services=[
        {
            id:1,
            name:'Web Design',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti in reiciendis laborum quis labore dolores non omnis saepe nihil.',
            img: webDesign
        },
        {
            id:2,
            name:'Web Development',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti in reiciendis laborum quis labore dolores non omnis saepe nihil.',
            img: webIcon
        },
        {
            id:3,
            name:'Mobile App Development',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti in reiciendis laborum quis labore dolores non omnis saepe nihil.',
            img: responsiveIcon
        },
        {
            id:4,
            name:'Digital Marketing',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti in reiciendis laborum quis labore dolores non omnis saepe nihil.',
            img: digitalIcon
        },
        {
            id:5,
            name:'SEO & SEM',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti in reiciendis laborum quis labore dolores non omnis saepe nihil.',
            img: serviceIcon
        },
        {
            id:6,
            name:'Branding & Identity',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti in reiciendis laborum quis labore dolores non omnis saepe nihil.',
            img: brandingIcon
        },
    ]

    const displayServices=()=>{
        return services.map(service=>(
            <div className={classes.service} key={service.id}>
                <div className={classes.service_icon}>
                    <img src={service.img} alt={service.name}  />
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