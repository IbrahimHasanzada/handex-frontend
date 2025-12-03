'use client';

import { useEffect, useState } from 'react';

interface Snowflake {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
}

export default function Snowfall({ isDark = true }: { isDark?: boolean }) {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        const flakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 5 + 5,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.6 + 0.4,
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className={`absolute animate-snowfall ${isDark ? 'text-gray-200' : 'text-gray-400'}`}
                    style={{
                        left: `${flake.left}%`,
                        fontSize: `${flake.size * 3}px`,
                        opacity: flake.opacity,
                        animationDuration: `${flake.duration}s`,
                        animationDelay: `${flake.delay}s`,
                    }}
                >
                    ❄
                </div>
            ))}
            <style jsx>{`
                @keyframes snowfall {
                    0% {
                        transform: translateY(-10px) rotate(0deg);
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                    }
                }
                .animate-snowfall {
                    animation: snowfall linear infinite;
                }
            `}</style>
        </div>
    );
}
