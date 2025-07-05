import React from 'react'

const Card = ({title,desc}) => {
  return (
    <div className='card border-flex flex-col px-4 py-8 gap-3 rounded-sm'>
        <h1 className='text-blue text-center font-heading text-2xl font-bold'>{title}</h1>
        <p className='text-justify text-gray font-text text-sm pt-4'>{desc}</p>
    </div>
  )
}

export default Card