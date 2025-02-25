import classes from './Square.module.css'

export default function Square(){
    return <>
        <div className={classes.square_parent}>
            <div className={classes.square_child}></div>
        </div>
    </>
}