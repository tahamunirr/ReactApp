import Nav from "./Components/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Community from "./Components/community";
import Search from "./Components/search";
import Developers from "./Components/developers";
import Page from "./Components/page";
import Join from "./Components/join";
import End from "./Components/end";
import Footer from "./Components/footer";
import Mdevelopers from "./Components/mdevelopers";

function App() {
  return (
    <div>
      <Nav />
      <Community />
      <Search />
      <Mdevelopers />
      <Page />
      <Join />
      <End />
      <Footer />
    </div>
  );
}

export default App;
