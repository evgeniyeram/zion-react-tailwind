import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom"

const example: RouteObject[] = [{}]

const router = createBrowserRouter(example)


function App() {

  return (
    <div>
      <RouterProvider router={router} />
      <li>
        {example.map(route => 
          <li className="p-2 text-blue-700">
            <a href={route.path}>{route.path}</a>
          </li>
        )}
      </li>
    </div>
  )
}

export default App
