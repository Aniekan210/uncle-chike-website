import { useState, useEffect } from 'react';

const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState('largeDesktop');

    useEffect(() => {
        const updateDeviceType = () => {
            const width = window.innerWidth;

            if (width <= 600) {
                setDeviceType('mobile');
            } else if (width >= 601 && width <= 1024) {
                setDeviceType('tablet');
            } else if (width >= 1025 && width <= 1440) {
                setDeviceType('desktop');
            } else if (width >= 1441) {
                setDeviceType('largeDesktop');
            }
        };

        updateDeviceType();
        window.addEventListener('resize', updateDeviceType);

        return () => window.removeEventListener('resize', updateDeviceType);
    }, []);

    return deviceType;
};

export default useDeviceType;
