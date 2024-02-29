import { useState, useEffect } from "react";


const useScreenDetect = () => {
    // Define your breakpoints
    const mobileBreakpoint = 768;
    const tabletBreakpoint = 1024;

    // Initialize state with undefined or a server-side equivalent
    const [screenType, setScreenType] = useState('');

    useEffect(() => {
        // This function will be executed only in the browser, thanks to useEffect
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= mobileBreakpoint) {
                setScreenType('mobile');
            } else if (width <= tabletBreakpoint) {
                setScreenType('tablet');
            } else {
                setScreenType('desktop');
            }
        };

        // Call handleResize initially to set the screen type
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures this effect runs only once at mount

    return screenType;
};


export default useScreenDetect;
