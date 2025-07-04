import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <Navigate to="/" />
  );
}
