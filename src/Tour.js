import React, { useState, useSyncExternalStore } from 'react'

const Tour = ({ data, deleteHandler }) => {
  const { id, name, price, image, info } = data
  const [readMore, setReadMore] = useState(false)

  const onClickHandler = (id) => {
    deleteHandler(id)
  }

  const readMoreHandler = () => {
    setReadMore(!readMore)
  }
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}................`}{' '}
          <button onClick={readMoreHandler}>{readMore ? 'Show Less' : 'Show More'}</button>
        </p>

        <button className="delete-btn" onClick={() => onClickHandler(id)}>
          Not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
