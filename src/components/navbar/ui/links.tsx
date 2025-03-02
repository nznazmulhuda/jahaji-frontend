import List from "./list"
import { navlinks } from "@/constant/navlinks"

function Links() {
  return (
    <ul className="flex items-center gap-6">
      {
        navlinks.map(list => <List key={list.link} link={list.link}>{list.title}</List>)
      }
    </ul>
  )
}

export default Links