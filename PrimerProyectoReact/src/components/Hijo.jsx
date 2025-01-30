import React from 'react'
import css from './Hijo.module.css'

const Hijo = ({color}) => {
  return (
    <>
        <div className={css.div} style={{backgroundColor: color}}></div>
    </>
  )
}

export default Hijo