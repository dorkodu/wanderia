import {
  IconAlertCircle,
  IconCheck,
  IconInfoCircle,
  IconX
} from "@tabler/icons-react";
import type { ReactNode } from "react";
import type { NotificationData } from ".";

// Internal helper to create toast content
export function createToastContent(data: NotificationData) {
  const { title, message, icon, color } = data;

  // Get default icon based on color/type
  const getDefaultIcon = () => {
    switch (color) {
      case "green": return IconCheck;
      case "red": return IconX;
      case "yellow": return IconAlertCircle;
      case "blue": return IconInfoCircle;
      default: return IconInfoCircle;
    }
  };

  // Handle different icon types
  let iconElement: ReactNode = null;

  if (icon) {
    if (typeof icon === "function") {
      const IconComp = icon as React.ComponentType<{ size?: number; className?: string }>;
      iconElement = <IconComp size={20} />;
    } else {
      iconElement = icon;
    }
  } else {
    const DefaultIcon = getDefaultIcon();
    iconElement = <DefaultIcon size={20} />;
  }

  return (
    <div className="flex items-start gap-3">
      {iconElement && (
        <div className={`flex-shrink-0 mt-0.5 ${color === "green" ? "text-green-500" :
          color === "red" ? "text-red-500" :
            color === "yellow" ? "text-yellow-500" :
              color === "blue" ? "text-blue-500" :
                "text-gray-500"
          }`}>
          {iconElement}
        </div>
      )}
      <div className="flex-1 min-w-0">
        {title && (
          <div className="font-semibold text-sm leading-5 mb-1">
            {title}
          </div>
        )}
        {message && (
          <div className="text-sm text-muted-foreground leading-5">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

