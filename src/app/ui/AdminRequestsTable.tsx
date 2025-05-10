"use client";

import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Group,
  Loader,
  Modal,
  ScrollArea,
  Select,
  Table,
  Text,
  Textarea,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQuery, gql } from "@apollo/client";
import { IconEdit } from "@tabler/icons-react";
import { useState } from "react";

// GraphQL queries and mutations
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

const UPDATE_SUPPORT_REQUEST = gql`
  mutation UpdateSupportRequest(
    $id: ID!
    $status: String!
    $adminComment: String
  ) {
    updateSupportRequest(
      id: $id
      status: $status
      adminComment: $adminComment
    ) {
      id
      status
      adminComment
    }
  }
`;

export default function AdminRequestsTable() {
  const { data, loading, error, refetch } = useQuery(GET_SUPPORT_REQUESTS);
  const [updateRequest] = useMutation(UPDATE_SUPPORT_REQUEST);

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const handleEditClick = (request: any) => {
    setSelectedRequest(request);
    setStatus(request.status);
    setComment(request.adminComment || "");
    open();
  };

  const handleSubmit = async () => {
    if (!selectedRequest || !status) return;

    await updateRequest({
      variables: {
        id: selectedRequest.id,
        status,
        adminComment: comment,
      },
    });

    await refetch(); // Refresh data
    close();
  };

  if (loading) return <Loader size="xl" className="mx-auto mt-20" />;
  if (error)
    return (
      <Text color="red" ta="center">
        Error fetching support requests: {error.message}
      </Text>
    );

  const getStatusBadgeColor = (status: string) => {
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

  const getUrgencyBadgeColor = (urgency: string) => {
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

  const rows = data.supportRequests.map((request: any) => (
    <Table.Tr key={request.id}>
      <Table.Td>{request.title}</Table.Td>
      <Table.Td>{request.description}</Table.Td>
      <Table.Td>
        <Badge color="gray" variant="light">
          {request.category}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Badge color={getUrgencyBadgeColor(request.urgency)} variant="light">
          {request.urgency}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Badge color={getStatusBadgeColor(request.status)}>
          {request.status}
        </Badge>
      </Table.Td>
      <Table.Td>{request.adminComment || "-"}</Table.Td>
      <Table.Td>
        {new Date(request.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Table.Td>
      <Table.Td>
        <Tooltip label="Edit request" withArrow>
          <ActionIcon
            variant="light"
            color="blue"
            onClick={() => handleEditClick(request)}
          >
            <IconEdit size={18} />
          </ActionIcon>
        </Tooltip>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <ScrollArea>
        <Box p="md">
          <Table striped highlightOnHover withTableBorder>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Title</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Category</Table.Th>
                <Table.Th>Urgency</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Admin Comment</Table.Th>
                <Table.Th>Created At</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Box>
      </ScrollArea>

      <Modal
        opened={opened}
        onClose={close}
        title="Edit Support Request"
        centered
      >
        <Select
          label="Status"
          data={["accept", "reject"]}
          value={status}
          onChange={setStatus}
          mb="md"
        />
        <Textarea
          label="Admin Comment"
          placeholder="Enter your comment here"
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
          minRows={3}
        />
        <Group mt="md" justify="flex-end">
          <Button variant="default" onClick={close}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </Group>
      </Modal>
    </>
  );
}
