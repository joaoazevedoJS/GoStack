import React, { FC } from 'react'

import './styles.css'

const TextGrey: FC = ({ children }) => {
  return (
    <p className='c-textGrey'>{children}</p>
  )
}

export default TextGrey