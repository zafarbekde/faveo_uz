import React from 'react'

function CatModal({close}) {
  return (
    <div>CatModal
        <button onClick={() => close()}>Close</button>
    </div>
  )
}

export default CatModal