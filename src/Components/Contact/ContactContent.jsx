import classes from "./ContactContent.module.css";

export default function ContactContent() {
    return (
        <div className={classes.contact_content}>
            <div className={classes.start}>
                <div className={classes.container}>
                    <div className={classes.contact_info}>
                        <div className={classes.info}>
                            <div className={classes.info_icon}><i className="fa-solid fa-signature"></i></div>
                            <div>
                                <h4>NAME</h4>
                                <p className={classes.text}>Lizati Mohammed</p>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <div className={classes.info_icon}><i className="fa-solid fa-location-dot"></i></div>
                            <div>
                                <h4>LOCATION</h4>
                                <p className={classes.text}>hay benazzi rue 28 <p>nr 26, oujda</p></p>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <div className={classes.info_icon}><i className="fa-solid fa-envelope"></i></div>
                            <div>
                                <h4>EMAIL</h4>
                                <p className={classes.text}>medliz99@gmail.com</p>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <div className={classes.info_icon}><i className="fa-solid fa-phone"></i></div>
                            <div>
                                <h4>CALL ME</h4>
                                <p className={classes.text}>0695283656</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.end}>
                <div className={classes.container}>
                    <div className={`${classes.nv_message} ${classes.active}`}><a href="#">New Message</a></div>
                    <form action="" method="get">
                        <h1>Contact <span>Us</span></h1>
                        <div className={classes.input_group}>
                            <input type="text" id="name" placeholder="Enter your Name" />
                            <input type="text" id="email" placeholder="Enter a valid email address" />
                        </div>
                        <input type="text" id="subject" placeholder="Enter your Subject" />
                        <textarea id="text" cols="30" rows="10"></textarea>
                        <p className={classes.errors}></p>
                        <div className={classes.button_group}>
                            <button type="submit" className={classes.send_message}>Send <i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
