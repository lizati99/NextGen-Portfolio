import classes from './RainFall.module.css'

const rainFall = () => {
    const rain_number = 10;
    const distance = 100 / (rain_number - 1);
    return Array.from({ length: rain_number - 2 }).map((_, i) => {
        const animationDuration = Math.round(3 + Math.random() * 5);
        const animationDelay = Math.round(1 + Math.random() * 2);
        const height = `${Math.random() * 50 + 50}px`;
        
        return (
            <div 
                key={i} 
                className={classes.rain_way} 
                style={{ left: `${(i + 1) * distance}%` }} 
            >
                <span 
                    className={classes.rain}
                    style={{
                        animationDuration: `${animationDuration}s`,
                        animationDelay: `${animationDelay}s`,
                        height: height,
                        // background: `linear-gradient(to top, var(--color-${colors[Math.floor(Math.random() * colors.length)]}) 40%, transparent 60%)`
                    }}
                ></span>
            </div>
        );
    });
};

export default rainFall;