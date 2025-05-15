import Header from './components/Header/Header';
import Main from './pages/Main/Main';

/* 
styles.module.css
*/
function App(props) {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
