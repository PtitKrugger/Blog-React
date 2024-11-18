import { useEffect, useState } from "react";

export default function useHashNavigation() {
    const [hash, setHash] = useState(location.hash);

    useEffect(() => {
        const handleChange = () => {
            setHash(location.hash)
        }
        window.addEventListener('hashchange', handleChange)
        return () => window.removeEventListener('hashchange', handleChange);
    }, [])
    
    const cleanedHash = hash.replaceAll('#', '')

    return {
        page: cleanedHash ? cleanedHash.split(':')[0] : 'home',
        param: cleanedHash.split(':')[1]
    }
}