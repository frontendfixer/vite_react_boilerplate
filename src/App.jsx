import { useState } from 'react';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as CrwnLoogo } from './assets/crown.svg';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <CrwnLoogo className='logo' />
        </div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer noopener'>
          <ViteLogo className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer noopener'>
          <ReactLogo className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite React Boilerplate</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
