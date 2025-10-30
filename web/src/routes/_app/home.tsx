import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/home')({
  component: Home,
})

function Home() {

  return (
    <div className="m-2 flex flex-col gap-6">
      <p>HOME PAGE</p>
    </div>
  );
}

