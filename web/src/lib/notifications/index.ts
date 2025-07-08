import type { TablerIcon } from '@tabler/icons-react';
import {
  clean,
  error,
  hide,
  info,
  loading,
  show,
  success,
  update,
  warning
} from './system';

// Types
export interface NotificationData {
  id?: string;
  title?: string;
  message?: string | React.ReactNode;
  color?: "blue" | "green" | "red" | "yellow" | "gray";
  icon?: React.ComponentType<TablerIcon> | React.ReactNode;
  autoClose?: number | false;
  withCloseButton?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
  className?: string;
}

export interface UpdateNotificationData extends NotificationData {
  id: string;
}

// Default export object that matches Mantine's API
export const notifications = {
  show,
  hide,
  clean,
  update,
  success,
  error,
  warning,
  info,
  loading,
};