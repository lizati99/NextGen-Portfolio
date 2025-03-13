import classes from './NotFoundBg.module.css';

export default function NotFoundBg() {
    const rain_number = 10;
    const distance = 100 / (rain_number - 1);
    const symbols = ["4", "0", "Not Found", "404", "40", "04"];
    const colors=["text", "overlay", "third", "secondary"]
    

    const rainFall = () => {
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


    const windEffect = () => {
        return Array.from({ length: 99 }).map((_, i) => {
            const animationDuration = Math.round(5 + Math.random() * 8);
            const animationDelay = Math.round(1 + Math.random() * 4);
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            return (
                <div 
                    key={`wind-${i}`} 
                    className={classes.wind_text} 
                    style={{
                        animationDuration: `${animationDuration}s`,
                        animationDelay: `${animationDelay}s`,
                        left: `${Math.random() * 100}%`,
                        top: `${45 + Math.floor(5 * Math.random() * 3)}%`,
                        opacity: `${(i+1)/100}`,
                        // color: `var(--color-${colors[Math.floor(Math.random() * colors.length)]})`
                    }}
                >
                    {symbol}
                </div>
            );
        });
    };

    return (
        <div className={classes.notfound_bg}>
            {rainFall()}
            {windEffect()}
        </div>
    );
}
