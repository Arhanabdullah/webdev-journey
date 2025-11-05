import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className='px-18 h-[90vh] py-3 bg-gray-50 flex justify-between items-center gap-5'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1content
