import { TreeNodeData } from "./types"
import { RouteObject } from "react-router-dom"
import L from "lodash"
import * as Anthill from "anthill-ui-kit"

function childrensToReactRoutes (children: TreeNodeData[], res?: RouteObject[]): RouteObject[] {

  const routes = res || []

  const newRoutes = children.map(child => {

    const childSlug = child.slug.split("/")[0] !== undefined 
      ? child.slug.split("/")[0] 
      : ""

    const path = ("/" + (child.parentId || "") + "/" + childSlug).replaceAll("//", "/")

    const comps = child.content.map((arr, i) => {

      const Component = (Anthill as any)[arr.components[0].name]

      return <Component key={path + i + arr.id}/>
    })

    const container = 
      <>
        {comps}
      </>

    const route = {
      path,
      element: container
    }

    if (child.children && child.children.length > 0) {

      return childrensToReactRoutes(child.children, routes.concat(route))
    } else {
      
      return routes.concat(route)
    }
  })

  const flattenedRoutes = L.uniq(L.flatten(newRoutes))

  return flattenedRoutes
}

export async function reactGenRoutes(tree: TreeNodeData) {

  if (tree.children) {
    const children = tree.children

    const routes = childrensToReactRoutes(children)

    return routes
  }
}