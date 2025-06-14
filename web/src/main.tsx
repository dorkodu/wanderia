import { ErrorComponent, RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import * as TanstackQuery from "./lib/tanstack-query/root-provider";
import reportWebVitals from "./reportWebVitals";
import { routeTree } from "./routeTree.gen";

import { ThemeProvider } from "./components/theme-provider";
import "./styles.css";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <div className="p-2 text-2xl">LOADING...</div>,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,

  context: {
    ...TanstackQuery.getContext(),
  },

  defaultPreload: "intent",
  scrollRestoration: true,
});

const rootElement = document.getElementById("app");

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <TanstackQuery.Provider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </TanstackQuery.Provider>
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
