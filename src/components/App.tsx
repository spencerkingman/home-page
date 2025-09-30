import 'styles/index.css'
import 'assets/fonts/Zen_Old_Mincho/ZenOldMincho-Regular.ttf'

function App() {
  return (
    <div className="zen-old-mincho-regular flex min-h-screen flex-col text-gray-900">
      <main className="flex-auto p-12 subpixel-antialiased">
        <h1 className="pb-3 text-4xl tracking-tight">Spencer Kingman</h1>
        <ul className="list-circle list-inside text-xl">
          <li className="m-1  p-2 pl-0">
            <a
              className="w-64 p-2 pl-0 active:text-gray-500 active:drop-shadow-[6px_8px_1px_gray-200]"
              href="https://spenking.spencerkingman.com"
            >
              songs
            </a>
          </li>
          <li className="m-1 p-2 pl-0">
            <a
              className="w-64 p-2 pl-0 active:text-gray-500 active:drop-shadow-[6px_8px_1px_gray-200]"
              href="https://personal-page.spencerkingman.com"
            >
              music diary
            </a>
          </li>
          <li className="m-1 p-2 pl-0">
            <a
              className="w-64 p-2 pl-0 active:text-gray-500 active:drop-shadow-[6px_8px_1px_gray-200]"
              href="https://professional.spencerkingman.com"
            >
              professional
            </a>
          </li>
          <li className="m-1 p-2 pl-0">
            <a
              className="pointer-events-none w-64 p-2 pl-0 line-through decoration-2"
              href="#"
            >
              lists
            </a>
          </li>
          <li className="m-1 p-2 pl-0">
            <a
              className="pointer-events-none w-64 p-2 pl-0 line-through decoration-2"
              href="#"
            >
              art
            </a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App
