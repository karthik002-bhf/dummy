import logo from './logo.svg';
import './App.css';
import Carouseldemo from './common/carouseldemo';
import NavbarDemo from './common/navbardemo';
import TopContent from './common/topcontent';
import Secondcontent from './common/secondcontent';
import ThirdContent from './common/thirdcontent';
import Faqs from './common/faqs';
import MultiCarousel from './common/MultiCarousel';

function App() {
  return (
    <div className="container-fluid">
      <NavbarDemo />
      <Carouseldemo />
      <TopContent />
      <Secondcontent />
      <ThirdContent />
      <div className='my-4>'>
        <MultiCarousel />
      </div>
      <Faqs />
    </div>
  );
}

export default App;
