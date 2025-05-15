import { BrowserRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Helmet>
          <meta charSet="UTF-8" />
          <title>Portfolio Website - Gurkaran Singh</title>
          <meta name="description" content="Portfolio website of Gurkaran Singh, front-end developer." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content="web developer, portfolio, javascript, react, front-end, gurkaran singh" />
          <meta name="author" content="Gurkaran Singh" />
          <meta property="og:title" content="Portfolio Website - Gurkaran Singh" />
          <meta property="og:description" content="Official portfolio of Gurkaran Singh, showcasing development work." />
          <meta property="og:type" content="website"/>
          
          {/* Use a generic or blank favicon (optional: remove if not needed) */}
          <link rel="icon" href="data:,"></link>

          {/* Removed image and domain references */}
        </Helmet>

        <main className='flex flex-col min-h-screen'>
          <Navbar />
          <div className="container mt-24 mx-auto sm:py-4 py-6 px-12">
            <Pages />
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
