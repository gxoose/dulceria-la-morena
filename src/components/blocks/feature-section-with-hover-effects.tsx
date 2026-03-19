import { cn } from "@/lib/utils";
import {
  IconCandy,
  IconPepper,
  IconGift,
  IconBalloon,
  IconTruck,
  IconHeart,
  IconSparkles,
  IconStar,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Authentic Mexican Candy",
      description:
        "Imported directly from Mexico — tamarind, chamoy, mazapan, obleas, and classics you remember from childhood.",
      icon: <IconCandy />,
    },
    {
      title: "Spicy & Sweet",
      description:
        "From chile-lime lollipops to dulce de leche, we carry the full spectrum of Mexican flavor.",
      icon: <IconPepper />,
    },
    {
      title: "Party Supplies",
      description:
        "Pinatas, decorations, balloons, and candy packages for every celebration.",
      icon: <IconGift />,
    },
    {
      title: "Balloons & Decor",
      description:
        "Custom balloon arrangements and festive decorations for birthdays, quinceañeras, and more.",
      icon: <IconBalloon />,
    },
    {
      title: "Snacks & Chips",
      description:
        "Chicharrones, Japanese peanuts, chips, hot sauces, and all your favorite Mexican munchies.",
      icon: <IconSparkles />,
    },
    {
      title: "Friendly Service",
      description:
        "Our team knows every candy in the store and will help you find exactly what you need.",
      icon: <IconHeart />,
    },
    {
      title: "Wholesale Prices",
      description:
        "Bulk candy and party supplies at prices that make every celebration affordable.",
      icon: <IconStar />,
    },
    {
      title: "Shipped With Care",
      description:
        "Every order packed with love — in-store pickup or delivery to bring the sweetness to your door.",
      icon: <IconTruck />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-morena-surface",
        (index === 0 || index === 4) && "lg:border-l border-morena-surface",
        index < 4 && "lg:border-b border-morena-surface"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-morena-surface to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-morena-surface to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-morena-gold">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-morena-surface group-hover/feature:bg-morena-red transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
