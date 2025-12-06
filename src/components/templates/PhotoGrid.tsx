// components/templates/PhotoHighlightsGallery.tsx
import React from 'react';
import Image from 'next/image';
import { Typography } from '../ui/Typography';

const getColSpanClass = (aspectRatioHint: Photo['aspectRatioHint']) => {
    switch (aspectRatioHint) {
        case 'landscape':
            return 'col-span1 md:col-span-3 row-span-2 h-64';
        case 'portrait':
            return 'col-span1 md:col-span-2 row-span-4 h-132';
        case 'square':
        default:
            return 'col-span-1 md:col-span-2 row-span-2 h-64';
    }
};

export interface Photo {
    miniatureSrc: string;
    altText: string;
    aspectRatioHint: 'square' | 'portrait' | 'landscape';
}

export interface PhotoProps {
    id: string;
    header: string;
    subtext: string;
    photos: Photo[];
}

export const PhotoGrid: React.FC<PhotoProps> = ({ id, header, subtext, photos }) => {
    const gridCols = photos.filter( photo => photo.aspectRatioHint === 'portrait' ).length > 0 ? 'md:grid-cols-8' : 'md:grid-cols-9';
    return (
        <section id={id} className="py-16 md:py-24 surface">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="text-center mb-12">
                    <Typography variant="h2" className="!text-4xl">
                        {header}
                    </Typography>
                    <Typography variant="body" className="mt-4 text-lg">
                        {subtext}
                    </Typography>
                </div>

                <div
                    className={`grid grid-cols-1 ${gridCols} gap-4`}
                >
                    {photos.map((photo, index) => {
                        const colSpanClass = getColSpanClass(photo.aspectRatioHint);

                        return (
                            <div
                                key={index}
                                className={`relative w-full overflow-hidden rounded-lg shadow-lg group ${colSpanClass}`}
                            >
                                <Image
                                    src={photo.miniatureSrc}
                                    alt={photo.altText}
                                    fill={true}
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 600px) 30vw, 50vw"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};