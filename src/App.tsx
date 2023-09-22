import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { TreeNodeData } from "./types"
import { reactGenRoutes } from "./utils"
import * as Anthill from "anthill-ui-kit"

const jsons = import.meta.glob('../data/*.json', { as: 'raw', eager: true })

const key = Object.keys(jsons)

const projectTree: TreeNodeData = JSON.parse(jsons[key[0]])

const routes = await reactGenRoutes(projectTree) || []

const router = createBrowserRouter(routes)

function App() {
  const Ant = Anthill as any

  const Nav = Ant[projectTree.selectedMenu || ""]
  const Footer = Ant[projectTree.selectedFooter || ""]

  return (
    <div>
      {routes.map((route, i) => 
        <li className="p-2 text-blue-700" key={i}>
          <a href={route.path}>{route.path}</a>
        </li>
      )}
      {<Nav/> || <></>}
      <RouterProvider router={router} />
      {<Footer/> || <></>}
    </div>
  )
}

export default App
