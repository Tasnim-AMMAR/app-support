"use client";

import React from "react";
import { Title, Container } from "@mantine/core";
import RequestForm from "../ui/RequestForm";
import MainTabBar from "../ui/MainTabbar";
import MainPanelContent from "../ui/MainPanelContent";

export default function NewRequestPage() {
  return (
    <>
      <MainTabBar />

      <Container size="2xl" px="lg" py="lg">
        <div className="grid grid-cols-12 gap-6">
          <div className="hidden md:block md:col-span-3 lg:col-span-2 mt-12">
            <MainPanelContent />
          </div>

          <div className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6">
            <div className="bg-gray-100 py-8 px-6 rounded-md">
              <Title order={2} className="text-2xl font-bold">
                New Request
              </Title>
              <p className="text-gray-700 text-sm mt-2">
                Fill out the form below and our support team will get back to
                you shortly.
              </p>
            </div>

            <div className="w-full bg-white p-6 sm:p-10 rounded-md shadow-md">
              <RequestForm />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
