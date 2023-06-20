import Navbar from "@/components/Nav";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <div className="flex justify-center min-h-screen bg-white font-abc bg-opacity-10">
        <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full max-w-sm mx-auto lg:w-96">
            <div>
              <svg
                className="ml-4 "
                width="65"
                height="65"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.4166 24.1458L13.4081 11.3755C12.345 10.2289 12.5152 9.39127 13.7689 8.66611C16.1257 7.30289 17.9617 7.26586 20.4459 8.62916L32.912 15.4704C33.7996 15.9574 34.6698 16.4511 35.5833 16.7204"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.7708 34.7273L37.1345 52.0269C37.5724 53.4398 38.3436 53.6958 39.5381 53.0108C41.784 51.7232 42.6893 50.236 42.7501 47.5564L43.0545 34.1086C43.0952 32.3125 43.0878 30.5546 44.4791 29.2292"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.1682 27.9182L25.9641 24.4141L37.2041 16.2192L37.2141 16.212L37.2331 16.198C37.4985 16.0038 41.453 13.121 43.6961 12.1384C46.4528 10.9308 49.0209 11.4922 51.7836 12.2638C53.2128 12.663 53.9273 12.8625 54.443 13.2348C55.2609 13.8255 55.7929 14.7347 55.9022 15.7291C55.9713 16.3558 55.7891 17.0662 55.4248 18.4869C54.7205 21.2337 53.9293 23.7091 51.4911 25.4611C49.5071 26.8868 44.9989 28.825 44.6967 28.9542L44.6751 28.9636L44.6637 28.9684L31.8514 34.4762L26.3779 36.8224C24.3934 37.6731 23.4011 38.0986 22.726 38.888C21.1449 40.7366 20.9217 44.0819 20.3316 46.3836C20.0055 47.6557 18.2173 49.8599 16.624 49.5289C15.6403 49.3249 15.6214 48.0934 15.499 47.3083L14.3202 39.7489C14.0384 37.941 14.0167 37.9039 12.571 36.7591L6.52589 31.9721C5.898 31.475 4.82669 30.8431 5.13923 29.9004C5.64551 28.3734 8.4741 27.9474 9.75355 28.3048C12.0687 28.9514 15.1165 30.4332 17.5295 30.0064C18.5597 29.8242 19.4292 29.1888 21.1682 27.9182Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{" "}
                <Link
                  href="#"
                  className="font-medium text-white duration-150 ease-in-out hover:text-buttonBlue"
                >
                  start your 14-day free trial
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <p className="text-sm font-medium leading-6 text-shite">
                    Sign in with
                  </p>

                  <div className="grid grid-cols-3 gap-3 mt-2">
                    <div>
                      <Link
                        href="#"
                        className="inline-flex justify-center w-full px-3 py-2 text-black duration-150 ease-in-out bg-white rounded-md shadow-sm ring-1 ring-inset hover:bg-buttonBlue hover:text-white focus:outline-offset-0"
                      >
                        <span className="sr-only">Sign in with Facebook</span>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>

                    <div>
                      <Link
                        href="#"
                        className="inline-flex justify-center w-full px-3 py-2 text-black duration-150 ease-in-out bg-white rounded-md shadow-sm ring-1 ring-inset hover:bg-secondary hover:text-white focus:outline-offset-0"
                      >
                        <span className="sr-only">Sign in with Twitter</span>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </Link>
                    </div>

                    <div>
                      <Link
                        href="#"
                        className="inline-flex justify-center w-full px-3 py-2 text-black duration-150 ease-in-out bg-white rounded-md shadow-sm ring-1 ring-inset hover:bg-fourth hover:text-white focus:outline-offset-0"
                      >
                        <span className="sr-only">Sign in with GitHub</span>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-white" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-black bg-white rounded">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-black bg-white placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 bg-white sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="w-4 h-4 text-indigo-600 border-white rounded focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="block ml-2 text-sm text-white"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex justify-center w-full px-3 py-2 text-sm font-semibold text-black bg-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
