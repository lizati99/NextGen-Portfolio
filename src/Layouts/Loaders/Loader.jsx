import classes from './Loader.module.css';
const Loader = () => {
    return (
      <div className={classes.loader_container}>
        <div className={classes.loader}></div>
        {/* <SolarSystem /> */}
        <p className={classes.loading_text}>Loading...</p>
      </div>
    );
}

export default Loader;