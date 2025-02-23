import classes from './Work.module.css'

export default function Work({image, title, description, role}){
    return <>
        <div className={classes.work}>
            <div className={classes.work_head}>
                <img className={classes.work_pic} src={image} alt="" />
            </div>
            <div className={classes.work_body}>
                <span>{title}</span> {description}
            </div>
            <div className={classes.work_role}>
                <small>{role}</small>
            </div>
        </div>
    </>
}