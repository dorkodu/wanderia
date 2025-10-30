import type { IUser } from "@sdk/core/index"; // Changed to type import
import {
  IconAlertCircle,
  IconCake,
  IconCalendar,
  IconCopyCheck,
  IconLink,
  IconMapPin,
  IconTargetArrow,
} from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query"; // Removed useQueryClient as it's unused in LifeGoalSummary after change
import { AlertDescription, AlertTitle, Alert as ShadAlert } from "@web/components/ui/alert";
import { Badge } from "@web/components/ui/badge";
import { Card } from "@web/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@web/components/ui/tabs";
import { db } from "@web/lib/db";
import { trekie } from "@web/lib/trekie";
import GoalCard from "@web/namespaces/goal/GoalCard";
import NoGoalsCard from "@web/namespaces/goal/NoGoalsCard"; // Added import
import HabitCounter from "@web/namespaces/habit/HabitCounter";
import NoHabitsCard from "@web/namespaces/habit/NoHabitsCard";
import { DailyStats } from "@web/namespaces/life/DailyStats";
import React from "react"; // Added for useState, useEffect
// import { vanilla } from "@web/styles/theme" // No longer needed for these components
import { relativeDateString } from "@web/utils/format";
import { useLiveQuery } from "dexie-react-hooks";
import { getProfile } from "./getProfile";
import { Skeleton } from "@web/components/ui/skeleton";

// Helper hook to replace useMediaQuery
const useIsMobile = (maxWidth = 768) => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`)
    const handleChange = () => setIsMobile(mediaQuery.matches)

    handleChange() // Initial check
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [maxWidth])

  return isMobile
}

export const ProfileEntry = ({
  icon,
  text,
}: { icon: React.ReactNode; text: React.ReactNode }) => (
  <div className="flex items-center gap-1">
    <div className="text-muted-foreground flex items-center justify-center w-5 h-5">
      {icon}
    </div>
    <p className="text-muted-foreground leading-none text-sm">
      {text}
    </p>
  </div>
)

export function Profile({ username }: { username: string }) {
  const isMobile = useIsMobile(768) // Replaces useMediaQuery

  const { isPending, isError, error, data } = useQuery({ // Removed isSuccess
    queryKey: [`profile:${username}`], // Changed to template literal
    queryFn: () => getProfile(username),
  })

  // TODO: remove this forced type, let trpc handle it
  const user = data as IUser

  if (isPending) return <Loader />
  if (isError)
    return (
      <ShadAlert variant="destructive" className="mt-4">
        <IconAlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to get user profile. {error instanceof Error ? error.message : ""}
        </AlertDescription>
      </ShadAlert>
    )

  // const iconStyle = { width: rem(20), height: rem(20) } // Replaced with Tailwind classes h-5 w-5 or direct size prop

  return (
    <Card className="p-4"> {/* Replaces Paper */}
      <div className="mb-2.5 flex items-center gap-2 flex-nowrap"> {/* Replaces Group mb={10} gap=\"sm\" wrap=\"nowrap\" */}
        <img src={user.pictureUrl} alt={user.name} className="w-16 h-16 rounded-lg" /> {/* Replaces Image */}
        <div className="flex flex-col gap-0"> {/* Replaces Stack gap={0} */}
          <p className="font-bold text-lg leading-none"> {/* Replaces Text fw={700} size=\"lg\" lh={1} */}
            {user.name}
          </p>

          <p className="text-muted-foreground font-medium"> {/* Replaces Text c=\"dimmed\" fw={500} */}
            @{user.username}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1"> {/* Replaces Stack gap={4} */}
        <p className="text-sm">{user.bio}</p> {/* Replaces Text size=\"sm\" */}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pb-2"> {/* Replaces Group gap={4} pb={8}, using gap-x-4 for wider spacing between items */}
          <ProfileEntry
            icon={<IconCalendar size={20} />} // Passed size directly
            text={`Joined ${relativeDateString(user.joinedAt)}`}
          />
          {user.birthDate && (
            <ProfileEntry
              icon={<IconCake size={20} />} // Passed size directly
              text={`Born ${relativeDateString(user.birthDate)}`}
            />
          )}
          {user.location && (
            <ProfileEntry
              icon={<IconMapPin size={20} />} // Passed size directly
              text={user.location}
            />
          )}
          {user.url && (
            <ProfileEntry
              icon={<IconLink size={20} />} // Passed size directly
              text={
                <a
                  href={user.url}
                  referrerPolicy="no-referrer"
                  target="_blank"
                  rel="noopener noreferrer" // Added rel attribute
                  className="text-primary hover:underline" // Replaces Anchor
                >
                  {user.url}
                </a>
              }
            />
          )}
        </div>

        {isMobile && <DailyStats />}

        <Tabs defaultValue="habits" className="mt-2 w-full"> {/* Replaces Tabs mt={8} ... */}
          <TabsList>
            <TabsTrigger value="goals">
              <IconTargetArrow className="mr-2 h-5 w-5" /> {/* Icon from leftSection */}
              Life Goals
            </TabsTrigger>
            <TabsTrigger value="habits">
              <IconCopyCheck className="mr-2 h-5 w-5" /> {/* Icon from leftSection */}
              Habits
            </TabsTrigger>
          </TabsList>

          <TabsContent value="habits" className="mt-2">
            <UserHabitSummary />
          </TabsContent>

          <TabsContent value="goals" className="mt-2">
            <LifeGoalSummary />
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}

export function UserHabitSummary() {
  const userId = trekie.use(($) => $.user?.id)

  if (!userId)
    return (
      <div className="py-2.5"> {/* Replaces Box py={10} */}
        <NoHabitsCard />
      </div>
    )

  const habits = useLiveQuery(async () => {
    return db.habits.where("userId").equals(userId).toArray()
  }, [userId])

  if (!habits) return <></> // TODO: maybe add skeleton?? -> Handled by shadcn Skeleton if needed elsewhere

  const hasAnyHabits = habits?.length > 0
  if (!hasAnyHabits)
    return (
      <div className="py-2.5"> {/* Replaces Box py={10} */}
        <NoHabitsCard />
      </div>
    )

  return (
    <div
      className="bg-muted p-1.5 rounded-2xl my-2.5" // Replaces Box style={{ background: vanilla.colors.gray.light, padding: 6, borderRadius: 20 }} py={6} my={10}
    >
      <div className="flex flex-col gap-0"> {/* Replaces Stack gap={0} */}
        {habits.map((habit) => (
          <HabitCounter habitId={habit.id} key={habit.id} />
        ))}
      </div>
      <div className="flex mt-2"> {/* Replaces Flex, added mt-2 for spacing */}
        <Badge variant="secondary" className="mx-auto"> {/* Replaces Badge variant=\"light\" color=\"gray\" */}
          Check your daily habits!
        </Badge>
      </div>
    </div>
  )
}

export function LifeGoalSummary() {
  const userId = trekie.use(($) => $.user?.id)
  if (!userId)
    return (
      <div className="py-2.5"> {/* Replaces Box py={10} */}
        <NoGoalsCard /> {/* Changed from NoHabitsCard, assuming it was a typo */}
      </div>
    )

  // const queryClient = useQueryClient() // Removed unused variable

  const goals = useLiveQuery(
    async () => db.goals.where("userId").equals(userId).toArray(),
    [],
    "loading",
  )

  if (goals === "loading") // Changed == to ===
    return (
      <div className="space-y-2 py-2.5"> {/* Added space-y-2 for spacing between skeletons */}
        <Skeleton className="h-2 rounded-xl" /> {/* Replaces Skeleton height={8} radius=\"xl\" */}
        <Skeleton className="h-2 rounded-xl" /> {/* Replaces Skeleton height={8} mt={8} radius=\"xl\" */}
        <Skeleton className="h-2 w-[70%] rounded-xl" /> {/* Replaces Skeleton height={8} mt={8} width=\"70%\" radius=\"xl\" */}
      </div>
    )

  const hasAnyLifeGoals = goals.length > 0

  if (!hasAnyLifeGoals) return <NoGoalsCard />

  return (
    <div className="py-2.5"> {/* Replaces Box py={10} */}
      <div className="flex flex-col gap-2"> {/* Replaces Stack, assuming a small gap for GoalCards */}
        {goals.map((goal) => (
          <GoalCard id={goal.id} key={goal.id} />
        ))}
      </div>
    </div>
  )
}


function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  )
}