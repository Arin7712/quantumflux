import React from 'react'
import { Button } from './ui/button'
import { BentoGridDemo } from './BentoGridDemo'

const Tech = () => {
  return (
    <div className="md:py-[8rem] py-[4rem] padding flex md:flex-row flex-col items-start justify-center">
    <div className="flex flex-col items-start gap-6 md:pb-0 pb-6">
      <Button
        variant="outline"
        className="bg-transparent border-[1px] border-[#8606E6] text-[#8606E6] hover:bg-transparent hover:text-[#8606E6]"
      >
        Technologies
      </Button>
      <h1 className="md:text-3xl text-2xl max-w-4xl">
        "Transforming ideas innovative software and websites that drive success."
      </h1>

    </div>
    <BentoGridDemo />

    </div>
  )
}

export default Tech
