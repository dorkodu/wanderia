import { useId } from "react"

import { Label } from "@web/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@web/components/ui/radio-group"

export default function Component() {
  const id = useId()
  return (
    <RadioGroup defaultValue="1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="1" id={`${id}-1`} />
        <Label htmlFor={`${id}-1`}>Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="2" id={`${id}-2`} />
        <Label htmlFor={`${id}-2`}>Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="3" id={`${id}-3`} />
        <Label htmlFor={`${id}-3`}>Option 3</Label>
      </div>
    </RadioGroup>
  )
}
