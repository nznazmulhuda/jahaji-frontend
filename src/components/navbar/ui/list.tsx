import Link from "next/link"

function List({ link, children }:
  { link: string, children: string }
) {
  return (
    <Link
      href={link}
      className="navlink"
    >
      <li>
        {children}

        <div className="bar"></div>
      </li>
    </Link>
  )
}

export default List