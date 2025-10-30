import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Badge } from "@web/components/ui/badge";
import { Box, Flex } from "@web/components/ui/layout";
import { Skeleton } from "@web/components/ui/skeleton";
import { db } from "@web/lib/db";
import { trekie } from "@web/lib/trekie";
import GoalCard from "@web/namespaces/goal/GoalCard";
import { default as NoGoalsCard } from "@web/namespaces/goal/NoGoalsCard";
import React from "react";

export function GoalsFeed() {
  const userId = trekie.use($ => $.user?.id);
  const queryClient = useQueryClient();

  if (!userId)
    return (
      <Box className="py-2.5 md:hidden">
        <NoGoalsCard />
      </Box>
    );

  const goalsQuery = useQuery({
    queryKey: ['goals', userId],
    queryFn: async () => db.goals.where("userId").equals(userId).toArray(),
  });

  // Invalidate queries when component mounts to ensure fresh data
  React.useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['goals', userId] });
  }, [queryClient, userId]);

  if (goalsQuery.isLoading)
    return (
      <>
        <Skeleton className="h-2 rounded-xl radius-xl" />
        <Skeleton className="h-2 rounded-xl mt-8 radius-xl" />
        <Skeleton className="h-2 w-[70%] rounded-xl mt-8 radius-xl" />
      </>
    );

  const hasAnyLifeGoals = goalsQuery.isSuccess && goalsQuery.data.length > 0;

  if (!hasAnyLifeGoals) return <NoGoalsCard />;

  return (
    <div className="rounded-lg">
      <div className="flex flex-col gap-2">
        {goalsQuery.data.map(goal => (
          <GoalCard id={goal.id} key={goal.id} compact={true} />
        ))}
      </div>
      <Flex className="mt-2">
        <Badge variant="default" color="gray" className="mx-auto">
          Track your goals!
        </Badge>
      </Flex>
    </div>
  );
}
