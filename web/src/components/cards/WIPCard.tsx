import { IconAlertCircle } from "@tabler/icons-react";
import { Text } from "@web/components/ui/text";
import { cn } from "@web/lib/utils";

export default function WIPCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border border-yellow-300 bg-yellow-50 p-4 my-4 shadow-sm",
        className
      )}
      {...props}
    >
      <span className="text-yellow-500">
        <IconAlertCircle className="w-6 h-6" />
      </span>
      <Text size="md" weight="medium" className="text-yellow-800">
        This section is a work in progress. Check back soon!
      </Text>
    </div>
  );
}
