import BestBooksSection from "./components/bestBooksSection/BestBooksSection";
import DownloadAppSection from "./components/downloadAppSection/DownloadAppSection";
import Footer from "./components/footer/Footer";
import HeaderPage from "./components/header/HeaderPage";
import LibrarySection from "./components/librarySection/LibrarySection";
import Testimonials from "./components/testimonials/Testimonials";
import TopBooksSection from "./components/topBooksSection/TopBooksSection";

function App() {
  return (
    <div>
      <HeaderPage />
      <BestBooksSection />
      <TopBooksSection />
      <LibrarySection />
      <DownloadAppSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
