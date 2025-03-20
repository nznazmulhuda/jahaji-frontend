import React from 'react'
import style from "../css/thirdRow.module.css"

function ThirdRow() {
  return (
    <div className='flex items-center justify-between'>
      <aside>
        <p className={style.copyright}>
          © 2077 Oscar Agency – Award winning design agency specializing in design and development.
        </p>
      </aside>

      <aside>
        <ul className='flex items-center gap-12'>
          <li>
            <a href="#" className={style.link}>
              Sitemap
            </a>
          </li>
          <li>
            <a href="#" className={style.link}>
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" className={style.link}>
              Privacy policy
            </a>
          </li>
          <li>
            <a href="#" className={style.link}>
              Cookie Settings
            </a>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default ThirdRow