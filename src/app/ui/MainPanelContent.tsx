"use client";

import Link from "next/link";
import {
  IconBell,
  IconListDetails,
  IconListCheck,
  IconLogin2,
  IconSmartHome,
  IconSquareRoundedPlus,
  IconUser,
} from "@tabler/icons-react";

export default function MainPanelContent() {
  return (
    <div className="hidden md:flex h-full flex-col justify-between pt-safe pb-safe ps-safe pe-safe">
      <div className="space-y-2">
        <Link href="/" className="flex items-center p-2 rounded-lg hover:bg-gray-200">
          <IconSmartHome className="mr-3" />
          <span>Home</span>
        </Link>

        <Link href="/request" className="flex items-center p-2 rounded-lg hover:bg-gray-200">
          <IconSquareRoundedPlus className="mr-3" />
          <span>New Request</span>
        </Link>

        <Link href="/requestsList" className="flex items-center p-2 rounded-lg hover:bg-gray-200">
          <IconListDetails className="mr-3" />
          <span>User Requests</span>
        </Link>

        <Link href="/admin/requests" className="flex items-center p-2 rounded-lg hover:bg-gray-200">
          <IconListCheck className="mr-3" />
          <span>Admin Table</span>
        </Link>

        <Link href="/notifications" className="flex items-center p-2 rounded-lg hover:bg-gray-200">
          <IconBell className="mr-3" />
          <span>Notifications</span>
        </Link>

        <Link href="/profile" className="flex items-center p-2 rounded-lg hover:bg-gray-200">
          <IconUser className="mr-3" />
          <span>Profile</span>
        </Link>

        <Link href="/signin" className="flex items-center p-2 rounded-lg hover:bg-gray-200">
          <IconLogin2 className="mr-3" />
          <span>Sign In</span>
        </Link>
      </div>
    </div>
  );
}
