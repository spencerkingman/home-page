import 'styles/index.css'
import 'assets/fonts/Zen_Old_Mincho/ZenOldMincho-Regular.ttf'

function App() {
  return (
    <div className="zen-old-mincho-regular flex min-h-screen flex-col text-gray-900">
      {/* <header className="flex-initial">
        <span className="p-10">spencerkingman.com</span>
      </header> */}
      <main className="flex-auto p-12 subpixel-antialiased">
        <h1 className="pb-3 text-4xl tracking-tight">Spencer Kingman</h1>
        <ul className="list-circle list-inside text-xl">
          <li className="m-1  p-2 pl-0">
            <a
              className="w-64 p-2 pl-0"
              href="https://spenking.spencerkingman.com"
            >
              songs
            </a>
          </li>
          <li className="m-1   p-2 pl-0">
            <a
              className="w-64 p-2 pl-0"
              href="https://personal-page.spencerkingman.com"
            >
              music diary
            </a>
          </li>
          <li className="m-1   p-2 pl-0">
            <a
              className="w-64 p-2 pl-0"
              href="https://professional.spencerkingman.com"
            >
              professional
            </a>
          </li>
          <li className="m-1  p-2 pl-0">
            <a
              className="pointer-events-none w-64 p-2 pl-0 line-through"
              href="#"
            >
              lists
            </a>
          </li>
          <li className="m-1   p-2 pl-0">
            <a
              className="pointer-events-none w-64 p-2 pl-0 line-through"
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
