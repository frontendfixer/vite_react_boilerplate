import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';

function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-center text-white">
      <div className="mb-8 flex gap-4">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer noopener">
          <ViteLogo className=" h-24 w-24  transition-all md:h-32 md:w-32" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
          <ReactLogo
            className="h-24 w-24 animate-spin-slow transition-all hover:animate-none md:h-32 md:w-32"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="mb-4 text-4xl font-bold transition md:text-6xl">Vite React Boilerplate</h1>
      <p className="text-sm  md:text-xl">
        ⚙️ Created with <br />
        <code className=" font-mono text-neutral-70">🔱 ESLint</code> |{' '}
        <code className=" font-mono text-neutral-70">🎀 Prettier</code> |{' '}
        <code className=" font-mono text-neutral-70">🎨 TailwindCSS</code> |{' '}
        <code className=" font-mono text-neutral-70">🔮 Postcss</code>
      </p>
    </div>
  );
}

export default App;
