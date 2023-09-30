import React, { useState } from "react";
import "../styles/app.css";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  ``;

  const [state, handleSubmit] = useForm("xyyqwzvd");
  if (state.succeeded) {
    return (
      <div className="nav-container">
        <div className=" flex items-center justify-center min-h-screen">
          <div className="card">
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <h5 class=" decoration-0 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                Successful Submission
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Thank you for reaching Out! I will reply as soon as I can!
              </p>
              <a
                href="../pages/Portfolio"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-400 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Home
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Dallas,+TX,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />

          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/4 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-cyan-400">
                Dallas <br />
                TX, 75203
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className="text-indigo-400 leading-relaxed"
                href="mailto: lealoscar56@gmail.com"
              >
                lealoscar56@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-cyan-400">469-777-0341</p>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form
          netlify
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className=" sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="App-text leading-relaxed mb-5">
            Send me a message to connect! I will response as soon as I can!
          </p>
          <input type="hidden" name="form-name" value="contact" />
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-lg">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-lime-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            disabled={state.submitting || !emailValue || !messageValue}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
