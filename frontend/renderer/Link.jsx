import React from 'react'
import { usePageContext } from './usePageContext'

export { Link }

function Link(props) {
  const pageContext = usePageContext()
  const className = [props.className, pageContext.urlPathname === props.href && 'is-active'].filter(Boolean).join(' ')

  let baseLink = import.meta.env.BASE_URL;
  let hrefWithBaseLink = `${baseLink}${props.href}`;

  return <a {...props} href={hrefWithBaseLink} className={className} />
}

