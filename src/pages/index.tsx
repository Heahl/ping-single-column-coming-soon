import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { z } from "zod";

const emailSchema = z.string().email();

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError("Please provide a valid email address");
    } else {
      setError("");
      setEmail("");
    }
  };

  return (
    <>
      <Head>
        <title>Ping - COMING SOON!</title>
        <meta name="description" content="ping-single-column-coming-soon" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="flex h-screen flex-col items-center justify-evenly overflow-hidden bg-white p-14 font-franklin">
        {/* Header */}
        <div className="flex flex-col">
          <Image src={"/images/logo.svg"} width={100} height={100} alt="Logo" />
        </div>
        <div className="flex flex-col items-center gap-6 lg:mt-12">
          <h1 className="text-4xl font-extralight text-gray lg:text-5xl">
            We are launching{" "}
            <strong className="font-bold text-very-dark-blue">soon!</strong>
          </h1>
          <h3 className="text-xl font-thin lg:text-2xl">
            Subscribe and get notified
          </h3>
        </div>
        {/* Form */}
        <form
          className="flex w-[60%] min-w-[400px] flex-col items-center justify-center gap-4 lg:my-8 lg:w-full lg:max-w-[800px] lg:flex-row lg:gap-6"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="relative lg:w-2/3">
            <input
              type="email"
              onChange={handleEmailChange}
              placeholder="Your email address..."
              className={`relative w-full rounded-full border px-6 py-3 placeholder:text-pale-blue ${error ? "border-light-red" : "border-pale-blue"}`}
            />
            {error && (
              <p className="absolute left-5 mt-1 text-center text-sm font-light italic text-light-red lg:mt-1">
                {error}
              </p>
            )}
          </div>
          <button
            disabled={!email}
            type="submit"
            className="my-4 rounded-full bg-blue p-2 py-3 text-white shadow-lg shadow-pale-blue disabled:bg-pale-blue/50 disabled:text-white disabled:shadow-pale-blue/20 lg:w-1/3"
          >
            Notify Me
          </button>
        </form>
        {/* Illustration */}
        <Image
          className="w-[60%] min-w-[400px] max-w-[760px]"
          src={"/images/illustration-dashboard.png"}
          width={400}
          height={400}
          alt="Dashboard Illustration"
        />
        {/* Footer */}
        <div className="mt-6 flex flex-col items-center justify-center lg:mt-4">
          <div className="mb-4 flex w-[60%] min-w-[400px] items-center justify-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-pale-blue">
              <FontAwesomeIcon
                icon={faFacebookF}
                width={12}
                className="text-blue"
              />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-pale-blue">
              <FontAwesomeIcon
                icon={faTwitter}
                width={18}
                className="text-blue"
              />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-pale-blue">
              <FontAwesomeIcon
                icon={faInstagram}
                width={18}
                className="text-blue"
              />
            </div>
          </div>
          <p className="text-sm font-extralight text-gray">
            © Copyright Ping. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}
