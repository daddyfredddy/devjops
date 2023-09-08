import React from 'react'

function WorkBoard({data}) {
  return (
    <div>
        <ul>
            {data.map((work) => (
                <li key={work.id}>{}</li>
            ))}
        </ul>
    </div>
  )
}

export default WorkBoard