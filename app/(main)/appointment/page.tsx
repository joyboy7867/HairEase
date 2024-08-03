import { currentprofile } from "@/lib/current-profile";
import React from "react";
import { auth, redirectToSignIn } from "@clerk/nextjs/server";

const page = async () => {
  const profile = await currentprofile();
  if (!profile) {
    auth().redirectToSignIn();
  }
  return (
    <div>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          className="h-14 w-96 pr-8 pl-5 rounded bg-slate-600 z-0 focus:shadow focus:outline-none"
          placeholder="Search anything..."
        />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Saloon
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>

                  <div className="flex items-center flex-wrap ">
                    <a href={'/hairease/hello'} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Book Now.
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
