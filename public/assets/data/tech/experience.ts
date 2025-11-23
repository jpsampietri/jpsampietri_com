interface Marker {
    point: number;
    label: string;
}

interface TimelineProps {
    id: string;
    header: string;
    subtext: string;
    total: number;
    current: number;
    currentLabel: string;
    markers: Marker[];

}

export const experienceProps: TimelineProps = {
    id: 'experience',
    header: 'Over a Decade of End-to-End SDLC Execution',
    subtext: 'From initial architecture to deployment and continuous system optimization',
    total: 15,
    current: 10,
    currentLabel: '10+ years',
    markers: [
        {
            point: 5,
            label: '5 years',
        },
        {
            point: 10,
            label: '10 years',
        },
        {
            point: 15,
            label: '15 years',
        },
    ]
}
