import { RouterProvider } from "@tanstack/react-router"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { router } from "./App.tsx"
import * as TanstackQuery from "./integrations/tanstack-query/root-provider"
import reportWebVitals from "./reportWebVitals.ts"
import "./styles.css"

const rootElement = document.getElementById("app")
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <TanstackQuery.Provider>
        <RouterProvider router={router} />
      </TanstackQuery.Provider>
    </StrictMode>,
  )
}

reportWebVitals()
