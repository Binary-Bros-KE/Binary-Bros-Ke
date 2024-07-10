import React from 'react'

const CustomLinkAchor = ({ to='/quote', element, service, packageName, price }) => {

    const queryString = `?service=${encodeURIComponent(service)}&package=${encodeURIComponent(packageName)}&price=${encodeURIComponent(price)}`;

  return (
    <a href={`${to}${queryString}`}>
        {element}
    </a>
  )
}

export default CustomLinkAchor
