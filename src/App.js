import logo from './logo.svg';
import './App.css';
import LatestPosts from './components/LatestPosts';
import TopBar from './components/TopBar';
import Footer from './components/Footers/Footer';

function App() {
  return (
    <div>
      <TopBar />
      <LatestPosts />
      <Footer />
    </div>
  );
}
export default App;
