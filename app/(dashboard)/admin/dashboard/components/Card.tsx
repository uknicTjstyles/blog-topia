import React from 'react';
// import {ReceiptCentIcon} from 'lucide-react'

interface CardProps {
    card_title?: string,
    card_count?: number,
    Icons?: React.ElementType,
}

const DashboardCard = ({card_title,card_count, Icons}: CardProps) => {
  return (
    <>
    
        <div className='flex flex-row bg-[rgb(243,235,255)]  p-[3rem] rounded-lg shadow-md'>
        <div className="flex-1 space-y-[.7rem]">
        <h3 className="text-xl font-bold">{card_title}</h3>
        <p className="text-2xl font-semibold text-[rgb(190,133,242)]">{card_count}</p>
      </div>
      <div className="flex items-center justify-center">
        {Icons && <Icons className="w-12 h-12" />} {/* Render icon */}
      </div>


        </div>
    
    </>
  )
}

export default DashboardCard