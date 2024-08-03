/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import axios from "axios";
import { UploadButton } from "@/lib/uploadthings";

import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const [object, setobject] = useState({});
  async function senttoapi(e: any) {
    try {
      e.preventDefault();
      const response = await axios.post("/api/shopreg", object, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(response.data.data);

      if (response.data.message === "true") {
        router.push("/loginshop");
      }
    } catch (error) {
      alert(error);
    }
  }
  function onclick(e: any) {
    const { name, value } = e.target;
    setobject({
      ...object,
      [name]: value,
    });
  }

  return (
    <div>
      <div className="p-10">
        <h1 className="mb-8 font-extrabold text-4xl">Register</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={senttoapi}>
            <div>
              <label className="block font-semibold" htmlFor="name">
                Shop Name
              </label>
              <input
                onChange={onclick}
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-gray-300  p-2 border-none block mt-1 w-full"
                id="name"
                type="text"
                name="name"
                placeholder="People will search according to the name"
              />
            </div>
            <div className="mt-4">
              <label className="block font-semibold">Owner Name</label>
              <input
                onChange={onclick}
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-gray-300  p-2 border-none block mt-1 w-full"
                id="Ownername"
                type="text"
                placeholder="text"
                name="owner"
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold">Email</label>
              <input
                onChange={onclick}
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-gray-300 p-2 border-none block mt-1 w-full"
                id="email"
                type="email"
                placeholder="something@gmail.com"
                name="email"
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold" htmlFor="password">
                Password
              </label>
              <input
                onChange={onclick}
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-gray-300  p-2 border-none block mt-1 w-full"
                id="password"
                type="password"
                name="password"
              />
            </div>
            <div className="mt-4">
              <label className="block font-semibold">Phone Number</label>
              <input
                onChange={onclick}
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-gray-300  p-2 border-none block mt-1 w-full"
                id="number"
                type="number"
                name="number"
              />
            </div>
            <div className="mt-4">
              <label className="block font-semibold">
                Address with landmark
              </label>
              <input
                onChange={onclick}
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-gray-300  p-2 border-none block mt-1 w-full"
                id="address"
                type="text"
                name="address"
              />
            </div>
            <div className="mt-4">
              <label className="block font-semibold">Opening Hours</label>
              <input
                onChange={onclick}
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-gray-300  p-2 border-none block mt-1 w-full"
                id="open"
                type="text"
                placeholder="9:00am-10:00pm"
                name="open"
              />
            </div>
            <div className="mt-4">
              <label className="block font-semibold">
                Shop Photo "Wait till the ok message and procced"
              </label>
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response

                  console.log("Files: ", res[0].url);

                  setobject({
                    ...object,
                    img: res[0].url,
                  });
                  alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                type="submit"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Register
              </button>
              <a href="/loginshop" className="font-semibold">
                Already registered?
              </a>
            </div>
          </form>

          <aside className="">
            <div className="bg-gray-100 p-8 rounded">
              <h2 className="font-bold text-2xl">Instructions</h2>
              <ul className="list-disc mt-4 list-inside">
                <li>
                  All users must provide a valid email address and password to
                  create an account.
                </li>
                <li>
                  Users must not use offensive, vulgar, or otherwise
                  inappropriate language in their username or profile
                  information
                </li>
                <li>
                  Users must not create multiple accounts for the same person.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Page;
