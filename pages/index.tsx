import { useState } from "react";
import Layout from "../components/layout";
import copy from "copy-to-clipboard";

const Home = () => {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [text, setText] = useState("");

  const trimmedPhone = phone.replace(/\s/g, "").replace(/-/g, "");

  const url =
    phone &&
    `https://wa.me/${country}${trimmedPhone}?text=${encodeURIComponent(text)}`;

  const copyUrl = () => {
    copy(url);
    alert('URL copied')
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-4 px-8">
        <div className="mb-2">
          <label className="mb-4">Phone</label>
          <div className="flex items-center">
            <span className="mr-1">+</span>
            <input
              type="tel"
              name="phone"
              className="input w-10 mr-2 text-center truncate"
              placeholder="1"
              value={country}
              onChange={e => setCountry(e.target.value)}
            />
            <input
              type="tel"
              name="phone"
              className="input"
              placeholder="541 754 3010"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-2">
          <label>Message</label>
          <textarea
            name="text"
            className="input"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="text-lg">URL:</div>
        <div className="cursor-pointer">
          <div className="flex items-center">
            <input
              id="url"
              className="input cursor-pointer"
              value={url}
              disabled
            />
            <button
              className="ml-4 shadow px-4 py-4 rounded bg-whatsapp text-white"
              onClick={copyUrl}
            >
              COPY
            </button>
          </div>
        </div>
        <div className="mt-12">
          Made by{" "}
          <a className="underline" href="https://muhajir.dev">
            www.muhajir.dev
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
