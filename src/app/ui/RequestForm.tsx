"use client";

import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import client from "../lib/apollo-client";
import { IconX } from "@tabler/icons-react";
import {
  TextInput,
  Textarea,
  Select,
  Button,
  Stack,
  Notification,
} from "@mantine/core";

const CREATE_SUPPORT_REQUEST = gql`
  mutation CreateSupportRequest(
    $title: String!
    $description: String!
    $category: String!
    $urgency: String!
  ) {
    createSupportRequest(
      title: $title
      description: $description
      category: $category
      urgency: $urgency
    ) {
      id
    }
  }
`;

export default function RequestForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    urgency: "Normal",
  });

  const [createRequest, { loading, error }] = useMutation(
    CREATE_SUPPORT_REQUEST,
    {
      client,
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createRequest({ variables: formData });
      alert("Support request submitted!");
      setFormData({
        title: "",
        description: "",
        category: "",
        urgency: "Normal",
      });
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="md">
        <TextInput
          label="Title"
          placeholder="Enter the request title"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.currentTarget.value })
          }
          required
        />

        <Textarea
          label="Description"
          placeholder="Provide a detailed description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.currentTarget.value })
          }
          minRows={4}
          required
        />

        <Select
          label="Category"
          placeholder="Select a category"
          data={[
            { value: "Technical", label: "Technical Issue" },
            { value: "Information", label: "Information Request" },
            { value: "Bug", label: "Bug Report" },
            { value: "Suggestion", label: "Feature Suggestion" },
            { value: "Other", label: "Other" },
          ]}
          value={formData.category}
          onChange={(value) =>
            setFormData({ ...formData, category: value || "" })
          }
          required
        />

        <Select
          label="Urgency"
          data={["Normal", "Urgent", "Critique"]}
          value={formData.urgency}
          onChange={(value) =>
            setFormData({ ...formData, urgency: value || "Normal" })
          }
        />

        <Button type="submit" loading={loading} fullWidth color="green">
          Submit Request
        </Button>

        {error && (
          <Notification
            color="red"
            icon={<IconX size={16} />}
            title="Submission failed"
          >
            {error.message}
          </Notification>
        )}
      </Stack>
    </form>
  );
}
