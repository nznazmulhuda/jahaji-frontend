import React from 'react'

interface footerLinkProps {
  title: string,
  links: {
    title: string,
    link: string
  }[]
}

function FooterLinks({ title, links }: footerLinkProps) {
  return (
    <>
      <h6>{title}</h6>

      <ul>
        {
          links.map((link, index) => (
            <li key={index}>
              <a href={link.link}>{link.title}</a>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default FooterLinks