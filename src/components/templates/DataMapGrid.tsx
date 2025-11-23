import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';

interface DataMap {
    logoPath: string;
    sort: number;
    label: string;
    loader: number;
    tag: string;
    bgClass?: string;
    textClass?: string;
}

interface DataMapProps {
    id: string;
    header: string;
    subtext: string;
    dataMapContent: DataMap[];
}

export const DataMapGrid: React.FC<DataMapProps> = ({ id, header, subtext, dataMapContent }) => {
    dataMapContent.sort((a, b) => { return b.sort - a.sort })
    return (
        <section id={id} className="py-16 md:py-24 surface">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="text-center mb-12">
                    <Typography variant="h2" className="!text-5xl">
                        {header}
                    </Typography>
                    <Typography variant="body" className="mt-4 text-xl max-w-2xl mx-auto subtext">
                        {subtext}
                    </Typography>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {dataMapContent.map((tech) => {

                        return (
                            <Card
                                key={tech.label}
                                className="p-4 flex flex-col items-center text-center transition-shadow hover:shadow-xl bg-gray-900 h-full"
                                isElevated={false}
                            >

                                <div className="h-12 w-28 relative mb-3">
                                    <Image
                                        src={tech.logoPath}
                                        alt={`${tech.label} Logo`}
                                        fill={true}
                                        className="object-contain"
                                    />
                                </div>

                                <Typography variant="h2" className="!text-lg !font-bold !mt-0 h-16 text-gray-200">
                                    {tech.label}
                                </Typography>

                                <div
                                    className={`mt-2 px-3 py-1 rounded-full text-xs font-semibold ${tech.bgClass} ${tech.textClass}`}
                                >
                                    {tech.tag}
                                </div>

                                <div className="w-full mt-3 h-1.5 bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div
                                        className={`h-1.5 rounded-full ${tech.bgClass}`}
                                        style={{ width: `${tech.loader}%` }}
                                    />
                                </div>

                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};