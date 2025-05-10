// src/app/admin/requests/page.tsx

import React from "react";
import { Title, Container } from "@mantine/core";
import AdminRequestsTable from "@/app/ui/AdminRequestsTable";

export default function AdminRequestsPage() {
  return (
    <Container size="xl" py="md">
      <Title order={2} mb="lg">
        Support Requests
      </Title>
      <AdminRequestsTable />
    </Container>
  );
}
