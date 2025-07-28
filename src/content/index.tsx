import { createRoot } from 'react-dom/client'
import '../styles/tailwind.css'

const div = document.createElement('div')
div.id = 'my-extension-root'
document.body.appendChild(div)

const App = () => (
  <div className="fixed top-0 left-0 bg-white text-black p-2 shadow-lg z-[9999]">
    Injected Component
  </div>
)

const root = createRoot(div)
root.render(<App />)
