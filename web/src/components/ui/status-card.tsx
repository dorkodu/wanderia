import { Alert, AlertDescription, AlertTitle } from "@web/components/ui/alert";
import { cn } from "@web/lib/utils";

interface StatusCardProps {
  icon?: React.ReactNode;
  title?: string;
  color?: "default" | "destructive" | "warning" | "success";
  children?: React.ReactNode;
  className?: string;
}

const colorVariants = {
  default: "",
  destructive: "border-red-200 bg-red-50 [&>svg]:text-red-600",
  warning: "border-yellow-200 bg-yellow-50 [&>svg]:text-yellow-600",
  success: "border-green-200 bg-green-50 [&>svg]:text-green-600"
};

function StatusCard({
  icon,
  title,
  color = "default",
  children,
  className,
}: StatusCardProps) {
  return (
    <Alert className={cn(colorVariants[color], "p-4 rounded-lg", className)}>
      {icon && <div className="flex items-center justify-center w-5 h-5">{icon}</div>}
      {title && <AlertTitle>{title}</AlertTitle>}
      {children && <AlertDescription>{children}</AlertDescription>}
    </Alert>
  );
}

export default StatusCard;
