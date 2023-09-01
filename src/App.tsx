import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

//past here your result from console
const example = [
  { path: '/', element: 'Home page /' },
  { path: '/page-one', element: 'Page One /page-one' },
  { path: '/page-one/innerone', element: 'innerOne page-one/innerone' },
  {
    path: '/page-one/innerone/deepinnerone',
    element: 'deepInnerONE innerone/deepinnerone'
  },
  {
    path: '/page-one/innerone/deepinnertwo',
    element: 'deepInnerTWO innerone/deepinnertwo'
  },
  { path: '/page-one/innertwo', element: 'innerTwo page-one/innertwo' },
  {
    path: '/page-one/innertwo/1',
    element: 'NOPEDEEEPINNER innertwo/1'
  },
  { path: '/page-one/innertwo/2', element: '2 innertwo/2' },
  { path: '/page-two', element: 'Page Two /page-two' },
  {
    path: '/page-two/pagetwoinner',
    element: 'PAGETWOINNER page-two/pagetwoinner'
  },
  {
    path: '/page-two/pagetwoinner',
    element: 'PAGETWOINNER page-two/pagetwoinner'
  },
  { path: '/page-three', element: 'Page Three /page-three' },
  { path: '/blog', element: 'Blog /blog' },
  { path: '/external', element: 'external /external' },
  { path: '/resources', element: 'resources /resources' }
]

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
