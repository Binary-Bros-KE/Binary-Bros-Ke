import React from 'react'

const CustomLinkAchor = ({ to='/quote', element, service, packageName }) => {

    const queryString = `?service=${encodeURIComponent(service)}&package=${encodeURIComponent(packageName)}`;

  return (
    <a href={`${to}${queryString}`}>
        {element}
    </a>
  )
}

export default CustomLinkAchor
