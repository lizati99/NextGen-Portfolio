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


const assignIcons = (index) => ({
    about: images.icon.about[`about_${index + 1}`],
    resume: images.icon.resume[`resume_${index + 1}`],
    portfolio: images.icon.portfolio[`portfolio_${index + 1}`],
    contact: images.icon.contact[`contact_${index + 1}`],
  });
  
const MODE = {
    secondaryColor: "#009688",
    light: {
        backgroundColor: "#f5f4ef",
        textColor: "#686763",
        overlayColor: "#e5e2d9",
        thirdColor: "#b8b5b0",
        logo: "",
        COLORS: [
        { color: "#ba021d", logo: images.logo.logo_1 },
        { color: "#ffc107", logo: images.logo.logo_2 },
        { color: "#00bcd4", logo: images.logo.logo_3 },
        { color: "#009688", logo: images.logo.logo_4 },
        { color: "#000", logo: "" },
        ],
    },
    dark: {
        backgroundColor: "#000",
        textColor: "#F9F9F9",
        overlayColor: "#222",
        thirdColor: "#999",
        logo: "",
        COLORS: [
        { color: "#ba021d", logo: images.logo.logo_1 },
        { color: "#ffc107", logo: images.logo.logo_2 },
        { color: "#00bcd4", logo: images.logo.logo_3 },
        { color: "#009688", logo: images.logo.logo_4 },
        { color: "#EEE", logo: "" },
        ],
    },
};
  
export default MODE;
