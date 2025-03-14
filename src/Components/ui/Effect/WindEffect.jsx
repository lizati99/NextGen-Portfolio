import classes from './WindEffect.module.css';

const WindEffect = ({symbols = ["4", "0", "Not Found", "404", "40", "04"]}) => {

    // const colors=["text", "overlay", "third", "secondary"]
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
                    top: `${35 + Math.floor(5 * Math.random() * 6)}%`,
                    opacity: `${(i+1)/100}`,
                    // color: `var(--color-${colors[Math.floor(Math.random() * colors.length)]})`
                }}
            >
                {symbol}
            </div>
        );
    });
};

export default WindEffect;