import React , {memo} from 'react'

const Items = memo(({user}) => {
  React.useEffect(() => {
   console.log('Items') 
  });
  return (
    <li>{user.name}</li>
  )
})

export default Items