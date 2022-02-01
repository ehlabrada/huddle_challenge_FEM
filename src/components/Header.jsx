import { Image, Logo, Nav, StyledHeader } from './styles/Header.styled';
import { Button } from './styles/Button.styled'
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';


function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='logo-img' />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing odit natus est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laboriosam!</p>
            <Button bg='#FF0099' color='white' >
              Get Started For Free
            </Button>
          </div>
          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
