import React, { useState } from 'react'
import Tour from './Tour'

const Tours = ({ data }) => {
  const [info, setInfo] = useState(data)

  const deleteHandler = (id) => {
    setInfo((prev) => prev.filter((each) => each.id !== id))
    console.log(info.length)
  }

  const onClickHandler = () => {
    setInfo(data)
  }
  return (
    <>
      <section>
        <div className="title">
          <h2>Our tours</h2>
          <div className="underline"></div>
        </div>
        {info.length < 1 ? (
          <button className="btn" onClick={onClickHandler}>
            refresh
          </button>
        ) : (
          <div>
            {info.map((each) => {
              return <Tour data={each} key={each.id} deleteHandler={deleteHandler} />
            })}
          </div>
        )}
      </section>
    </>
  )
}

export default Tours
