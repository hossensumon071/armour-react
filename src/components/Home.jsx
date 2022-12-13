import Hero from './Hero';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="home" style={{backgroundImage: "url('https://images.unsplash.com/photo-1637947582297-24ccbef1bd19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80')"}}>
      <Navbar/>
      <Hero/>
    </div>
  );
};

export default Home;