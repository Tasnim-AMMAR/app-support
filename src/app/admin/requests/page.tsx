"use client";

import React from "react";
import { Title, Container } from "@mantine/core";
import AdminRequestsTable from "@/app/ui/AdminRequestsTable";
import MainTabBar from "@/app/ui/MainTabbar";
import MainPanelContent from "@/app/ui/MainPanelContent";

export default function AdminRequestsPage() {
  return (
    <>
      <MainTabBar />

      <Container size="2xl" px="lg" py="lg">
        <div className="grid grid-cols-12 gap-6">
          <div className="hidden md:block md:col-span-3 lg:col-span-2 mt-12">
            <MainPanelContent />
          </div>

          <div className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 py-8 px-6 rounded-md">
              <Title
                order={2}
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                Admin Table
              </Title>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-md shadow-md">
              <AdminRequestsTable />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
