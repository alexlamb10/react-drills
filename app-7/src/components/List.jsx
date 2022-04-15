import React from 'react'
import Todo from './Todo'

function List({list}) {
    let displayItems = list.map((item,i) => {
        return <Todo key={i} item={item} />
    })

  return (
      <div>
          {displayItems}

      </div>
  )
}

export default List