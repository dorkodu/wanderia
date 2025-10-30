import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_www/super')({
  component: Page,
})

function Page() {
  return <main>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Super Page</h1>
      <p className="text-lg text-gray-700">This is the super page content.</p>
    </div>
  </main>
}
