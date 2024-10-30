import React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

export const ButtonDemo = () => {
  return (
    <>
      <div className='flex gap-4'>
        <Button capitalize={true} variant="outline">capitalize</Button>
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="link">Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="destructive">Button</Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  )
}
