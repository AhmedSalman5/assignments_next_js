import React from 'react'

interface Props{
    params:{id:number}
}
// props.params
const UserDetailsPage = ({params:{id}}:Props) => {
  return (
    <div>
      Detail {id}
    </div>
  )
}

export default UserDetailsPage
