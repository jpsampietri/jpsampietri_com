import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';

// NEW IMPORTS: Using Material Icons from @mui/icons-material
// We choose icons that convey the original concepts:
import FlashOnIcon from '@mui/icons-material/FlashOn'; // Operational Efficiency (Zap)
import ViewModuleIcon from '@mui/icons-material/ViewModule'; // Measured Innovation (LayoutGrid)
import MemoryIcon from '@mui/icons-material/Memory'; // Simplicity/Minimalism (Cpu)

const featuresData = [
  {
    icon: FlashOnIcon, // Swapped icon reference
    title: 'Operational Efficiency',
    description: 'The ultimate measure of success for digital transformation efforts. We guarantee streamlined workflows and resource optimization.',
  },
  {
    icon: ViewModuleIcon, // Swapped icon reference
    title: 'Measured Innovation',
    description: 'A commitment to being as innovative as possible using the currently available and stable technology. We avoid speculative risk.',
  },
  {
    icon: MemoryIcon, // Swapped icon reference
    title: 'Simplicity/Minimalism',
    description: 'Solutions must be just as complex as the problem requires, rigorously avoiding unnecessary complexity and code bloat.',
  },
];

export const FeatureGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <Typography variant="h2" className="!text-5xl">
            Our Guiding Principles
          </Typography>
          <Typography variant="body" className="mt-4 text-xl max-w-2xl mx-auto">
            Our work is built on core values that ensure precision, stability, and measurable ROI for every client.
          </Typography>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} isElevated={true} className="text-left flex flex-col space-y-4">
              
              {/* Icon - Material Icons use the 'component' syntax */}
              {/* We use a Tailwind class to enforce size and color */}
              <feature.icon className="h-8 w-8 text-primary" sx={{ fontSize: '32px' }} />
              
              {/* Title, Description remain the same */}
              <Typography variant="h2" className="!text-2xl !mt-0">
                {feature.title}
              </Typography>
              
              <Typography variant="body" className="!text-base">
                {feature.description}
              </Typography>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
