import { useState } from "react";
import Layout from "../components/layout";

const Home = () => {
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const url =
    phone && `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  const copyUrl = () => {
    const el = document.getElementById("url");
    if (el) {
      (el as HTMLInputElement).select();
      document.execCommand("copy");
    }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-4 px-8">
        <div className="mb-2">
          <label className="mb-4">Phone</label>
          <input
            type="tel"
            name="phone"
            className="input"
            placeholder="6285270401234"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
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
        <div className="relative cursor-pointer" onClick={copyUrl}>
          <input
            id="url"
            className="input cursor-pointer"
            value={url}
            disabled
          />
          <span className="absolute right-0 mr-8 mt-4">COPY</span>
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
