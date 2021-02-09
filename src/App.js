import './App.css'
import { Container } from 'react-bootstrap'
import Header from './component/header.component/'
import HomeScreen from './screen/HomeScreen'

function App() {
  return (
    <>
		<Header />
		<main className='py-3'>
		<Container>
			<HomeScreen />
		</Container>
		</main>
    </>
  );
}

export default App