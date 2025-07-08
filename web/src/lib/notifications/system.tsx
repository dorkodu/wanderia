import type { ReactNode } from "react";
import { toast } from "sonner";
import type { NotificationData, UpdateNotificationData } from ".";
import { createToastContent } from "./toast";

// Core notification functions
export function show(data: NotificationData): string {
  const {
    id,
    autoClose = 5000,
    onClose,
    onOpen,
    position = "top-right",
    className,
    ...rest
  } = data;

  // Call onOpen if provided
  if (onOpen) {
    setTimeout(onOpen, 0);
  }

  const toastId = toast.custom((_toastId) => createToastContent(rest), {
    id,
    duration: autoClose === false ? Infinity : autoClose,
    position,
    className,
    onDismiss: onClose,
  });

  return String(toastId);
}

export function hide(id: string): void {
  toast.dismiss(id);
}

export function clean(): void {
  toast.dismiss();
}

export function update(data: UpdateNotificationData): void {
  const { id, ...rest } = data;

  // Dismiss the old toast and show a new one with the same ID
  toast.dismiss(id);
  show({ ...rest, id });
}

// Convenience functions
export function success(message: string | ReactNode, options?: Omit<NotificationData, "message" | "color">): string {
  return show({
    title: "Success!",
    message,
    color: "green",
    withCloseButton: true,
    autoClose: 5000,
    ...options,
  });
}

export function error(title?: string, message?: string | ReactNode, options?: Omit<NotificationData, "title" | "message" | "color">): string {
  return show({
    title: title ?? "Error!",
    message: message ?? "An error occurred. Please try again, or restart the app.",
    color: "red",
    withCloseButton: true,
    autoClose: 5000,
    ...options,
  });
}

export function warning(message: string | ReactNode, options?: Omit<NotificationData, "message" | "color">): string {
  return show({
    title: "Warning",
    message,
    color: "yellow",
    withCloseButton: true,
    autoClose: 5000,
    ...options,
  });
}

export function info(message: string | ReactNode, options?: Omit<NotificationData, "message" | "color">): string {
  return show({
    title: "Info",
    message,
    color: "blue",
    withCloseButton: true,
    autoClose: 5000,
    ...options,
  });
}

export function loading(message: string | ReactNode, options?: Omit<NotificationData, "message" | "autoClose">): string {
  return show({
    title: "Loading...",
    message,
    autoClose: false,
    withCloseButton: false,
    icon: (
      <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-gray-600"></div>
    ),
    ...options,
  });
}