import classes from './Square.module.css'

export default function Square(){
    const direction=localStorage.getItem('direction') || 'ltr';
    return <>
        <div className={classes.square_parent} style={direction==='rtl' ? {marginLeft:"20px"} : {marginRight:"20px"} }>
            <div className={classes.square_child}></div>
        </div>
    </>
}