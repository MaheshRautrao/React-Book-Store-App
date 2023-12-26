import BestBooksSection from "./components/bestBooksSection/BestBooksSection";
import DownloadAppSection from "./components/downloadAppSection/DownloadAppSection";
import Footer from "./components/footer/Footer";
import LibrarySection from "./components/librarySection/LibrarySection";
import Testimonials from "./components/testimonials/Testimonials";
import TopBooksSection from "./components/topBooksSection/TopBooksSection";

function App() {
  return (
    <div>
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
