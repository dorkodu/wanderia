import { useNavigate } from "@tanstack/react-router"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, } from "@web/components/ui/command"
import * as React from "react"
import type { SpotlightAction } from "./types"
import { useSpotlight } from "./useSpotlight"

export function Spotlight() {
  const { isOpen, close, open: openSpotlight, actions, searchString, setSearchString } = useSpotlight()
  const navigate = useNavigate()

  // Effect to handle focusing the input when opening with initial search string
  React.useEffect(() => {
    if (isOpen && searchString) {
      // Small delay to ensure the dialog is fully rendered
      const timer = setTimeout(() => {
        const input = document.querySelector('[cmdk-input]') as HTMLInputElement
        if (input) {
          input.focus()
          // Place cursor at the end of the text
          input.setSelectionRange(searchString.length, searchString.length)
        }
      }, 100)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isOpen, searchString])

  const handleNavigation = (path: string) => {
    navigate({ to: path })
    close()
  }

  const handleAction = (action: SpotlightAction) => {
    action.onSelect()
    close()
  }

  // Group actions by their group property
  const groupedActions = React.useMemo(() => {
    const groups: Record<string, SpotlightAction[]> = {}

    actions.forEach(action => {
      const groupName = action.group || 'Other'
      if (!groups[groupName]) {
        groups[groupName] = []
      }
      groups[groupName].push(action)
    })

    return groups
  }, [actions])

  return (
    <CommandDialog open={isOpen} onOpenChange={(isOpenState) => isOpenState ? openSpotlight() : close()}>
      <CommandInput
        placeholder="Type a command or search..."
        value={searchString}
        onValueChange={setSearchString}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {Object.entries(groupedActions).map(([groupName, groupActions], index) => (
          <React.Fragment key={groupName}>
            {index > 0 && <CommandSeparator />}
            <CommandGroup heading={groupName}>
              {groupActions.map((action) => (
                <CommandItem
                  key={action.id}
                  onSelect={() => handleAction(action)}
                  keywords={action.searchTerms}
                >
                  {action.icon && (
                    <action.icon size={16} className="opacity-60" aria-hidden="true" />
                  )}
                  <span>{action.label}</span>
                  {action.shortcut && (
                    <CommandShortcut>{action.shortcut}</CommandShortcut>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </React.Fragment>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
