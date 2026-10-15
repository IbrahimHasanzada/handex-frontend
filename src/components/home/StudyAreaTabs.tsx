"use client";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

export interface StudyAreaTab {
    key: string;
    label: string;
    count: number;
}

const StudyAreaTabs = ({ tabs, active, onChange, dark }: {
    tabs: StudyAreaTab[];
    active: string;
    onChange: (key: string) => void;
    dark: boolean;
}) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
    const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

    const measure = useCallback(() => {
        const el = tabRefs.current[active];
        if (!el) return;
        setIndicator({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
    }, [active]);

    useLayoutEffect(measure, [measure, tabs]);

    useEffect(() => {
        if (!listRef.current) return;
        const observer = new ResizeObserver(measure);
        observer.observe(listRef.current);
        return () => observer.disconnect();
    }, [measure]);

    // Keep the active tab visible inside the horizontally scrolling bar on small screens.
    useEffect(() => {
        const scroller = scrollerRef.current;
        const el = tabRefs.current[active];
        if (!scroller || !el) return;

        const left = el.offsetLeft - 24;
        const right = el.offsetLeft + el.offsetWidth + 24 - scroller.clientWidth;
        if (left < scroller.scrollLeft) scroller.scrollTo({ left, behavior: 'smooth' });
        else if (right > scroller.scrollLeft) scroller.scrollTo({ left: right, behavior: 'smooth' });
    }, [active]);

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault();
        const next = tabs[(index + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
        onChange(next.key);
        tabRefs.current[next.key]?.focus();
    };

    return (
        <div
            ref={scrollerRef}
            className='-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        >
            <div
                ref={listRef}
                role='tablist'
                aria-label='Tədris sahəsi qrupları'
                className={`relative inline-flex min-w-max gap-1 p-1.5 rounded-full ${dark ? 'bg-[#282828]' : 'bg-white border border-[#DDD]'}`}
            >
                <span
                    aria-hidden
                    className={`absolute top-1.5 bottom-1.5 left-0 rounded-full motion-safe:transition-[transform,width] motion-safe:duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${dark ? 'bg-white' : 'bg-gradient-to-b from-[rgba(17,17,17,0.8)] to-[rgba(26,26,26,0.9)]'} ${indicator.ready ? 'opacity-100' : 'opacity-0'}`}
                    style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }}
                />
                {tabs.map((tab, index) => {
                    const selected = tab.key === active;
                    return (
                        <button
                            key={tab.key}
                            ref={(el) => { tabRefs.current[tab.key] = el; }}
                            id={`study-tab-${tab.key}`}
                            role='tab'
                            type='button'
                            aria-selected={selected}
                            aria-controls='study-areas-panel'
                            tabIndex={selected ? 0 : -1}
                            onClick={() => onChange(tab.key)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className={`relative z-10 flex items-center gap-2 h-11 px-5 rounded-full whitespace-nowrap text-sm md:text-base font-medium cursor-pointer transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary-corporate
                                ${selected
                                    ? (dark ? 'text-[#141414]' : 'text-white')
                                    : (dark ? 'text-white/70 hover:text-white' : 'text-[#141414]/60 hover:text-[#141414]')}`}
                        >
                            {tab.label}
                            <span className={`text-xs tabular-nums transition-opacity duration-300 ${selected ? 'opacity-60' : 'opacity-50'}`}>{tab.count}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default StudyAreaTabs;
