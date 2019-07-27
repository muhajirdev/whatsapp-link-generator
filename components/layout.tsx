import "../styles/main.css";
const Layout: React.FC = ({ children }) => (
  <div>
    <header className="shadow py-8 bg-whatsapp">
      <h1 className="max-w-3xl mx-auto text-lg px-8 text-white">
        WhatsApp Link Generator
      </h1>
    </header>
    <div>{children}</div>
  </div>
);

export default Layout;
