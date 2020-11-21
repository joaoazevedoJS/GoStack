import React, { FC } from 'react'

import './styles.css'

import { IIconsDescriptionProps } from '../../models/components/IIconsDescription'

const IconDescription: FC<IIconsDescriptionProps> = ({ icon, headerDescription, children }) => {
  return (
    <div className="c-iconDescription">
      <img src={icon.source} alt={icon.alt} />

      <h3>{headerDescription}</h3>
      
      {children}
    </div>
  )
}

export default IconDescription