import React from 'react';
import { Typography } from '../ui/Typography';

export interface Marker {
    point: number;
    label: string;
}

export interface TimelineProps {
    id: string;
    header: string;
    subtext: string;
    total: number;
    current: number;
    currentLabel: string;
    markers: Marker[];

}

export const Timeline: React.FC<TimelineProps> = ({ id, header, subtext, total, current, currentLabel, markers }) => {

    const getPosition = (years: number) => {
        return (years / total) * 100;
    };

    return (
        <section id={id} className="py-16 md:py-24 surface">
            <div className="container mx-auto px-4 max-w-4xl text-center">

                <Typography variant="h2" className="!text-4xl mb-3">
                    {header}
                </Typography>
                <Typography variant="body" className="text-xl mb-12 subtext">
                    {subtext}
                </Typography>

                <div className="relative w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">

                    <div
                        className="absolute top-0 left-0 h-2 bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${getPosition(current)}%` }}
                    />

                    {markers.map((marker) => (
                        <div
                            key={marker.point}
                            className="absolute center transform text-center"
                            style={{ left: `${getPosition(marker.point)}%` }}
                        >
                            <Typography variant="body" className="!text-sm !font-semibold text-gray-500 whitespace-nowrap absolute -translate-x-17 top-full mt-2">
                                {marker.label}
                            </Typography>

                            <div className="w-2 h-8 secondary-surface absolute top-2/3 transform -translate-x-1 rounded-full" />

                        </div>
                    ))}

                    <div
                        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-darker1 border-2 border-white dark:border-gray-800 rounded-full shadow-lg"
                        style={{ left: `${getPosition(current)}%` }}
                    >
                        <Typography variant="body" className="!text-sm !font-bold text-primary-darker2 dark:text-primary-lighter1 whitespace-nowrap absolute -top-8 left-1/2 transform -translate-x-1/2">
                            {currentLabel}
                        </Typography>
                    </div>

                </div>
            </div>
        </section>
    );
};