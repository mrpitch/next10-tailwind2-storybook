import { Button } from "@/components/atoms/Button"

export default function Home() {
  return (
    <div className="py-12 bg-white">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-grow lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Boilerplate
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailwind 2 with Next 10 & Storybook 6
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            This boilerplate uses tailwind combat mode since storybook 6 seems
            not to support postcss 8 for now.
          </p>
          <div className="mt-4 flex-row flex space-x-3 lg:justify-center">
            <Button
              onClick={() =>
                window.open(
                  "https://tailwindcss.com/docs/installation#post-css-7-compatibility-build",
                  "_blank"
                )
              }
              colorSet="btn--primary"
              size="text-base"
              label="Postcss7 combat build"
            >
            </Button>
            <Button
              onClick={() =>
                window.open("https://tailwindcss.com/docs", "_blank")
              }
              colorSet="btn--secondary"
              size="text-base"
              label="Tailwind 2 docs"
            >
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
