import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="md:block hidden" /> {/* Empty block in first row */}
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={"col-span-1"}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <Image src='/01.png' alt='bg' width={100} height={100}/>
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <Image src='/02.png' alt='bg' width={100} height={100}/>
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <Image src='/03.png' alt='bg' width={100} height={100}/>
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <Image src='/04.png' alt='bg' width={100} height={100}/>
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <Image src='/05.png' alt='bg' width={100} height={100}/>
  },
];