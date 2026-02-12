import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"


function Switch({

  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-size={size}
      className="pointer-events-none block rounded-full bg-white transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3"

      {...props}
    >
      <SwitchPrimitive.Thumb
        className="pointer-events-none block rounded-full bg-white transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
