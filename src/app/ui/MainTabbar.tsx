// src/components/MainTabBarStatic.tsx

import {
    IconBookmarks,
    IconCalendarCheck,
    IconListCheck,
    IconListDetails,
    IconSearch,
    IconSmartHome,
    IconSquareRoundedPlus,
  } from "@tabler/icons-react";
  import Link from "next/link";
  import { ReactNode } from "react";
  
  const maskImage = `radial-gradient(closest-side ,black 40%, transparent)`;
  
  const TabBarItem = ({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: ReactNode;
    label: string;
  }) => {
    return (
      <Link
        href={href}
        className="flex flex-col items-center text-gray-600"
      >
        <div className="relative">
          {icon}
          <div
            className="absolute -inset-2 -z-10 rounded-lg backdrop-blur-md"
            style={{ maskImage, WebkitMaskImage: maskImage }}
          />
        </div>
        <span className="relative text-[0.7rem]">
          {label}
          <div
            className="absolute -inset-x-4 -inset-y-1 -z-10 rounded-sm backdrop-blur-md"
            style={{ maskImage, WebkitMaskImage: maskImage }}
          />
        </span>
      </Link>
    );
  };
  
  const MainTabBar = () => {
    return (
      <div className="fixed bottom-4 z-20 flex w-full justify-center gap-6 lg:hidden">
        <TabBarItem
          href="/"
          icon={<IconSmartHome stroke={1} size={32} />}
          label="Home"
        />
        <TabBarItem
          href="/request"
          icon={<IconSquareRoundedPlus stroke={1} size={32} />}
          label="New Request"
        />
        <TabBarItem
          href="/requestsList"
          icon={<IconListDetails stroke={1} size={32} />}
          label="User Requests"
        />
        <TabBarItem
          href="/admin/requests"
          icon={<IconListCheck stroke={1} size={32} />}
          label="Admin Table"
        />
      </div>
    );
  };
  
  export default MainTabBar;
  