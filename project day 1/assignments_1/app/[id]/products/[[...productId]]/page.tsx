
import React from 'react'
interface Props{
    params: {id:number,productId:string[]};
    
}

const UserProductsPage = ({params:{id,productId}}:Props) => {
  return (
    <div>
     Products  {id} {productId}

    </div>
  )
}

export default UserProductsPage
