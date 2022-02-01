import { ThemeProvider } from 'styled-components';
import Header from './components/Header'

// Styles
import { Container } from './components/styles/Container.styled';
import Theme from './components/styles/Theme.styled';
import GlobalStyles from './components/styles/Global';

// Data
import content from './content'
import Card from './components/Card';
import Footer from './components/Footer';



function App() {
  
  
  return (
    <ThemeProvider theme={Theme}>
      <>
      <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card
              key={index} 
              {...item}
            />
          ) )}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}




export default App;
