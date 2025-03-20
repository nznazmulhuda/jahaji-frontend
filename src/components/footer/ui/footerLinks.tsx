import React from 'react'
import style from "../css/footerLinks.module.css"

interface footerLinkProps {
  title: string,
  links: {
    title: string,
    link: string
  }[]
}

function FooterLinks({ title, links }: footerLinkProps) {
  return (
    <div className='flex flex-col'>
      <h6 className={style.footer_title}>{title}</h6>

      <ul className='mt-4'>
        {
          links.map((link, index) => (
            <li key={index}>
              <a href={link.link} className={style.footer_link}>{link.title}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FooterLinks