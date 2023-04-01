import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';
import { Categories } from './questionSet';
import { Success } from './success';
import { Main2 } from './Main2';
// import VerticalTabs  from './section2';


/** react routes */
const router = createBrowserRouter([
  {
    path : '/prep',
    element : <Main></Main>
  },
  {
    path : '/',
    element : <Main2></Main2>
  },
  {
    path : '/quiz',
    element : < Categories/>
  },
  {
    path : '/success',
    element : <Success/>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
