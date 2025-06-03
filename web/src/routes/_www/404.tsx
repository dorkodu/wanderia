import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_www/404')({
  component: NotFound,
})

import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

function NotFound() {
  return (
    <div className="max-w-xl mx-auto p-10 mt-[5vw] mb-[10vw] flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-[15vw] text-gray-400 opacity-25 leading-none select-none">
          404
        </h1>
        <h2 className="font-extrabold leading-none tracking-tight text-3xl mt-2">
          Not Found
        </h2>
      </div>
      <p className="text-xl max-w-xl text-center mx-auto leading-snug mt-6 mb-8">
        The page you are looking for was moved, removed, renamed or may have never existed.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition font-semibold text-lg"
      >
        Go Back Home
        <IconArrowRight className="w-5 h-5" />
      </Link>
    </div>
  )
}

export default NotFound;
