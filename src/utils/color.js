import images from "./imagesImports";

export const SOLARSYSTEMCOLORS = {
    core: "#512BD4",
    adoNet: "#007ACC", 
    cSharp: "#68217A", 
    laravel: "#FF2D20",
    php: "#777BB4",
    react: "#61DAFB", 
    javascript: "#F7DF1E", 
    typescript: "#3178C6",
    nextjs: "#000000", 
    graphql: "#E10098", 
    sql: "#CC2929", 
    sqlServer: "#005C84", 
    mySql: "#4479A1",
    python: "#3776AB", 
    aws: "#FF9900", 
    docker: "#2496ED", 
    cloudinary: "#333333", 
    tailwind: "#06B6D4", 
    reactQuery: "#FF4081", 
    materialui: "#0081CB", 
    awsLambda: "#FFC107", 
    bootstrap: "#7952B3",
    library: "#FF9900",
    framerMotion: "#4285F4", 
    redux: "#764ABC",
};


const MODE = {
    secondaryColor: "#009688",
    light: {
        backgroundColor: "#EEE",
        textColor: "#000",
        overlayColor: "#AAA",
        logo: "",
        COLORS: [
            { color: "#ba021d", logo: images.logo.logo_1, icons : images.icon.about },
            { color: "#ffc107", logo: images.logo.logo_2, icons : images.icon.resume },
            { color: "#00bcd4", logo: images.logo.logo_3, icons : images.icon.portfolio },
            { color: "#009688", logo: images.logo.logo_4, icons : images.icon.contact },
            { color: "#000", logo: "" }
        ]
    },
    dark: {
        backgroundColor: "#000",
        textColor: "#EEE",
        overlayColor: "#222",
        logo: "",
        COLORS: [
            { color: "#ba021d", logo: "logo_1.png" },
            { color: "#ffc107", logo: "logo_2.png" },
            { color: "#00bcd4", logo: "logo_3.png" },
            { color: "#009688", logo: "logo_4.png" },
            { color: "#EEE", logo: "" }
        ]
    }
};

export default MODE;
