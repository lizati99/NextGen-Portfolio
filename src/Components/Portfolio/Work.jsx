import { useState, useCallback } from 'react';
import classes from './Work.module.css';
import closeSvg from './../../assets/icons/close.png';

export default function Work({ image, title, description, role }) {
  const [show, setShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const handleMouseOver = () => setAnimationClass(classes.moveDownOver);
  const handleMouseOut = () => setAnimationClass(classes.moveDownOut);
  const togglePopup = useCallback(() => setShow((prev) => !prev), []);

  return (
    <>
      <div className={classes.work} onClick={togglePopup}>
        <div className={classes.work_head}>
          <img className={classes.work_pic} src={image} alt={title} />
        </div>
        <div className={classes.work_body}>
          <span>{title}</span> {description}
        </div>
        <div className={classes.work_role}>
          <small>{role}</small>
        </div>
      </div>

      {show && (
        <div className={classes.port_overlay} onClick={() => setShow(false)}>
          <div className={classes.popup} onClick={(e) => e.stopPropagation()}>
            <div className={classes.close_popup} onClick={() => setShow(false)}>
              <img className={classes.close_icon} src={closeSvg} alt="" height="10" />
            </div>
            <h2 className={classes.popup_title}>
              Mouse <span>over</span> me
            </h2>
            <div
              className={`${classes.popup_img} ${animationClass}`}
              style={{ backgroundImage: `url(${image})` }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}
