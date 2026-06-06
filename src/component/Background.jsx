import { useState, useEffect } from "react";
export const BackgroundAnimations = () => {

    //id,size,x,y, opacity, animatonDuration
    const [stars, setStars] = useState([]);
    useEffect(() => {
        generateStarsAnimation();
    },[]);
    const generateStarsAnimation= () => {
        const countStars = Math.floor((window.innerWidth *window.innerHeight) /1000);
        const neoColors =["#ffffff","#rgb(19,0,247)","#ffffff","#rgb(254, 6, 110)","#ffffff"];
        const newStars = [];
        for(let i=0; i< countStars;i++)
        {
            const color = neoColors[Math.floor(Math.random()* neoColors.length)];
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.4 + 0.3,
                animationDuration: Math.random() * 5 + 5,
                color: color,
            });
        }
        setStars(newStars);
    };  
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((item) => (
                <div key={item.id} className="absolute rounded-full animation-float" style={{
                    width: `${item.size}px`,
                    height: `${item.size}px`,
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    backgroundColor: `${item.color}`,
                    opacity: `${item.opacity}`,
                    animationDuration : `${item.animationDuration}`,
                    animationDelay: `${Math.random() * 2}s`
                }} />
            ))}
        </div>
    );
}