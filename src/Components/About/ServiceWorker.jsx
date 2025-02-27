import MainHeading from '../Common/MainHeading/MainHeading'
import classes from './ServiceWorker.module.css'
import webDesign from '../../assets/icons/service/icons8-web-design-100.png'
import webIcon from '../../assets/icons/service/icons8-this-pc-100.png'
import responsiveIcon from '../../assets/icons/service/icons8-responsive-64.png'
import digitalIcon from '../../assets/icons/service/icons8-pro-display-xdr-48.png'
import serviceIcon from '../../assets/icons/service/icons8-service-48.png'
import brandingIcon from './../../assets/icons/service/icons8-branding-64.png'
import { useTranslation } from 'react-i18next';
import "./../../i18n";
import { useEffect } from 'react'

export default function ServiceWorker() {
    const { t, i18n } = useTranslation();
   
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); 
    };

    useEffect(()=>{
        changeLanguage("en");
    }, [])

    const services = [
        {
            id: 1,
            name: t("aboutPage.serviceContent.services.webDesign.name"),
            description: t("aboutPage.serviceContent.services.webDesign.description"),
            img: webDesign
        },
        {
            id: 2,
            name: t("aboutPage.serviceContent.services.webDevelopment.name"),
            description: t("aboutPage.serviceContent.services.webDevelopment.description"),
            img: webIcon
        },
        {
            id: 3,
            name: t("aboutPage.serviceContent.services.mobileAppDevelopment.name"),
            description: t("aboutPage.serviceContent.services.mobileAppDevelopment.description"),
            img: responsiveIcon
        },
        {
            id: 4,
            name: t("aboutPage.serviceContent.services.digitalMarketing.name"),
            description: t("aboutPage.serviceContent.services.digitalMarketing.description"),
            img: digitalIcon
        },
        {
            id: 5,
            name: t("aboutPage.serviceContent.services.seoSem.name"),
            description: t("aboutPage.serviceContent.services.seoSem.description"),
            img: serviceIcon
        },
        {
            id: 6,
            name: t("aboutPage.serviceContent.services.brandingIdentity.name"),
            description: t("aboutPage.serviceContent.services.brandingIdentity.description"),
            img: brandingIcon
        }
    ];
    

    const displayServices = () => {
        return services.map(service => (
            <div className={classes.service} key={service.id}>
                <div className={classes.service_icon}>
                    <img src={service.img} alt={service.name} />
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
            <MainHeading 
                smallText={t('aboutPage.serviceContent.mainHeading.smallText')} 
                mainText={t('aboutPage.serviceContent.mainHeading.mainText')} 
                highlightedText={t('aboutPage.serviceContent.mainHeading.highlightedText')} 
            />
            <div className={classes.services_content}>
                {displayServices()}
            </div>
        </div>
    </>
}