"use client";

import { useQuery, gql } from "@apollo/client";
import { Loader, Text, Card, Badge, Group } from "@mantine/core";

const GET_SUPPORT_REQUESTS = gql`
  query GetSupportRequests {
    supportRequests {
      id
      title
      description
      category
      urgency
      status
      adminComment
      createdAt
    }
  }
`;

const getUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case "Normal":
      return "gray";
    case "Urgent":
      return "red";
    case "Critique":
      return "blue";
    default:
      return "gray";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "orange";
    case "accept":
      return "green";
    case "reject":
      return "red";
    default:
      return "gray";
  }
};

export default function AllRequestsList() {
  const { data, loading, error } = useQuery(GET_SUPPORT_REQUESTS);

  if (loading) return <Loader size="xl" className="mx-auto mt-20" />;
  if (error)
    return (
      <Text color="red" style={{ textAlign: "center" }}>
        Error fetching support requests: {error.message}
      </Text>
    );

  return (
    <div className="space-y-4">
      {data.supportRequests.map((request: any) => (
        <Card key={request.id} shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="xs">
            <Text fw={500}>{request.title}</Text>
            <Badge color={getUrgencyColor(request.urgency)} variant="light">
              {request.urgency}
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            {request.description}
          </Text>

          <Group mt="md" justify="space-between">
            <Badge color="gray">{request.category}</Badge>
            <Badge color={getStatusColor(request.status)}>{request.status}</Badge>
          </Group>

          {request.adminComment && (
            <Text mt="md" size="sm" color="indigo">
              <strong>Admin:</strong> {request.adminComment}
            </Text>
          )}

          <Text mt="sm" size="xs" color="dimmed">
            Created At: {new Date(request.createdAt).toLocaleString()}
          </Text>
        </Card>
      ))}
    </div>
  );
}
