import DownloadAppSection from "./components/downloadAppSection/DownloadAppSection";
import Footer from "./components/footer/Footer";
import LibrarySection from "./components/librarySection/LibrarySection";

import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div>
      <LibrarySection />
      <DownloadAppSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
