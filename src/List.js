import React, {memo} from 'react'
import Items from './Items'

const List = memo(({users}) => {
  // React.useEffect(() => {
  //   console.log('List')
  //})
  return (
    <ul>
        { users.map(user=><Items key={user.id} user={user}/>)}
    </ul>
  )
})

export default List