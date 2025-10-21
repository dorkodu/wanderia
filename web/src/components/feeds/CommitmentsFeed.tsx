import { daystamp } from "@sdk/utils";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Badge } from "@web/components/ui/badge";
import { Button } from "@web/components/ui/button";
import { Box, Stack } from "@web/components/ui/layout";
import { Skeleton } from "@web/components/ui/skeleton";
import { db } from "@web/lib/db";
import { trekie } from "@web/lib/trekie";
import HabitCounter from "@web/namespaces/habit/HabitCounter";
import NoHabitsCard from "@web/namespaces/habit/NoHabitsCard";
import NoTodosCard from "@web/namespaces/todo/NoTodosCard";
import TodoCard from "@web/namespaces/todo/TodoCard";
import React from "react";

interface CommitmentsFeedProps {
  filter: "all" | "habits" | "todos";
  onFilterChange: (filter: "all" | "habits" | "todos") => void;
}

export function CommitmentsFeed({ filter, onFilterChange }: CommitmentsFeedProps) {
  const userId = trekie.use($ => $.user.id);
  const queryClient = useQueryClient();
  const [showCompleted, setShowCompleted] = React.useState(false);

  const habitsQuery = useQuery({
    queryKey: ['habits', userId],
    queryFn: async () =>
      db.habits
        .where({ userId: userId })
        .filter(habit => !Object.hasOwn(habit, "isDeleted"))
        .toArray(),
  });

  const todosQuery = useQuery({
    queryKey: ['todos', userId],
    queryFn: async () => db.todos.where("userId").equals(userId).toArray(),
  });

  if (habitsQuery.isLoading || todosQuery.isLoading)
    return (
      <Box className="h-60">
        <Stack gap={2}>
          <Skeleton className="h-2 rounded-xl" />
          <Skeleton className="h-2 rounded-xl" />
          <Skeleton className="h-2 w-[70%] rounded-xl" />
        </Stack>
      </Box>
    );

  const hasAnyHabits = habitsQuery.isSuccess && habitsQuery.data.length > 0;
  const hasAnyTodos = todosQuery.isSuccess && todosQuery.data.length > 0;

  // Filter items based on selected filter
  const filteredHabits = filter === "todos" ? [] : (habitsQuery.data || []).filter(habit => {
    const todayCount = habit.history.get(daystamp.today()) ?? 0;
    return todayCount < habit.dailyTarget;
  });
  const filteredTodos = filter === "habits" ? [] : (todosQuery.data || []).filter(todo => !todo.completed).slice(0, 3);

  // Filter completed items
  const completedHabits = filter === "todos" ? [] : (habitsQuery.data || []).filter(habit => {
    const todayCount = habit.history.get(daystamp.today()) ?? 0;
    return todayCount >= habit.dailyTarget;
  });
  const completedTodos = filter === "habits" ? [] : (todosQuery.data || []).filter(todo => todo.completed);

  const hasAnyCompletedItems = completedHabits.length > 0 || completedTodos.length > 0;

  const hasAnyItems = (filter === "all" || filter === "habits") && hasAnyHabits ||
    (filter === "all" || filter === "todos") && hasAnyTodos;

  return (
    <div className="rounded-2xl min-h-[150px] max-w-lg">
      {/* Filter Buttons - Always visible */}
      <div className="flex gap-2 mb-4">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "habits" ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("habits")}
        >
          Habits
        </Button>
        <Button
          variant={filter === "todos" ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("todos")}
        >
          Todos
        </Button>
      </div>

      {/* Content based on filter and availability */}
      {(() => {
        if (!hasAnyItems) {
          if (filter === "habits") return <NoHabitsCard />;
          if (filter === "todos") return <NoTodosCard />;
          return <NoHabitsCard />; // Default for "all"
        }

        return (
          <div className="flex flex-col gap-1">
            {/* Show habits if not filtered out */}
            {filteredHabits.map(habit => (
              <HabitCounter habitId={habit.id} key={habit.id} compact={true} />
            ))}

            {/* Show todos if not filtered out */}
            {filteredTodos.map(todo => (
              <TodoCard id={todo.id} key={todo.id} compact={true} />
            ))}

            {/* Completed Section */}
            {hasAnyCompletedItems && (
              <div className="mt-3 border-t border-border/50 pt-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCompleted(!showCompleted)}
                  className="w-full justify-between p-2 h-auto font-medium text-muted-foreground hover:text-foreground"
                >
                  <span className="flex items-center gap-2">
                    {showCompleted ? (
                      <IconChevronDown className="w-4 h-4" />
                    ) : (
                      <IconChevronRight className="w-4 h-4" />
                    )}
                    Completed ({completedHabits.length + completedTodos.length})
                  </span>
                </Button>

                {showCompleted && (
                  <div className="mt-2 space-y-2">
                    {/* Show completed habits */}
                    {completedHabits.map(habit => (
                      <HabitCounter habitId={habit.id} key={habit.id} compact={true} />
                    ))}

                    {/* Show completed todos */}
                    {completedTodos.map(todo => (
                      <TodoCard id={todo.id} key={todo.id} compact={true} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })()}

      {hasAnyItems && (
        <div className="flex mt-2">
          <Badge variant="secondary" className="mx-auto">
            Check your daily commitments!
          </Badge>
        </div>
      )}

      {showCompleted && hasAnyCompletedItems && (
        <div className="flex mt-2">
          <Badge variant="outline" className="mx-auto">
            Great job completing these!
          </Badge>
        </div>
      )}
    </div>
  );
}
