import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DetailsCollection from "./components/DetailsCollection";
import InterviewAvailability from "./components/InterviewAvailability";
import StatementOfPurpose from "./components/StatementOfPurpose";
import DocumentCllection from "./components/DocumentCllection";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/interview-availability":
        title = "";
        metaDescription = "";
        break;
      case "/statement-of-purpose":
        title = "";
        metaDescription = "";
        break;
      case "/document-cllection":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DetailsCollection />} />
      <Route
        path="/interview-availability"
        element={<InterviewAvailability />}
      />
      <Route path="/statement-of-purpose" element={<StatementOfPurpose />} />
      <Route path="/document-cllection" element={<DocumentCllection />} />
    </Routes>
  );
}
export default App;
