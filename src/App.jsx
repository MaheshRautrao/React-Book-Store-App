import DownloadAppSection from "./components/downloadAppSection/DownloadAppSection";
import Footer from "./components/footer/Footer";
import LibrarySection from "./components/librarySection/LibrarySection";
import TestimonialCard from "./components/testimonials/TestimonialCard";

function App() {
  return (
    <div>
      <LibrarySection />
      <TestimonialCard />
      <DownloadAppSection />
      <Footer />
    </div>
  );
}

export default App;
