import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function App() {
  return (
      <>
          <div className='App'>
              {/* 1. NAVBAR */}
              <Navbar expand="lg" className="bg-body-tertiary fs-5">
                  <Container fluid>
                      <Navbar.Brand href="#" className="fs-4">MonLogo</Navbar.Brand>
                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                          <Nav
                              className="me-auto my-2 my-lg-0"
                              style={{ maxHeight: '100px' }}
                              navbarScroll
                          >
                              <Nav.Link href="#action1">Accueil</Nav.Link>
                              <Nav.Link href="#action2">Menu 1</Nav.Link>
                              <NavDropdown title="Menu 2" id="navbarScrollingDropdown">
                                  <NavDropdown.Item href="#action3">Element 1</NavDropdown.Item>
                                  <NavDropdown.Item href="#action4">
                                      Element 2
                                  </NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="#action5">
                                      Autres Options
                                  </NavDropdown.Item>
                              </NavDropdown>
                          </Nav>
                          <Form className="d-flex">
                              <Form.Control
                                  type="search"
                                  placeholder="Rechercher..."
                                  className="me-2"
                                  aria-label="Search"
                              />
                              <Button variant="outline-primary">Rechercher </Button>
                          </Form>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>

              {/* 2. L'EN-TÊTE (HERO SECTION) */}
              {/* On utilise un fond léger (bg-light), du padding (py-5) et des textes centrés */}
              <header className="bg-light text-center py-5 mb-4 border-bottom">
                  <Container>
                      <h1 className="fw-light">Bienvenue sur mon site</h1>
                      <p className="lead text-muted">
                          Ceci est l'en-tête (Hero section).
                      </p>
                      <Button variant="primary">En savoir plus</Button>
                  </Container>
              </header>

              {/* 3. SECTION POUR LES CARTES */}
              <Container>
                  {/* Row md={3} force automatiquement l'alignement de 3 colonnes sur grand écran */}
                  <Row xs={1} md={3} className="g-4 mb-5">
                      {/* Carte 1 */}
                      <Col>
                          <Card>
                              <Card.Body>
                                  <Card.Title>Carte n°1</Card.Title>
                                  <Card.Text>Contenu de la première carte pour le CheckPoint.</Card.Text>
                                  <Button variant="outline-primary">Voir</Button>
                              </Card.Body>
                          </Card>
                      </Col>

                      {/* Carte 2 */}
                      <Col>
                          <Card>
                              <Card.Body>
                                  <Card.Title>Carte n°2</Card.Title>
                                  <Card.Text>Contenu de la deuxième carte pour le CheckPoint.</Card.Text>
                                  <Button variant="outline-primary">Voir</Button>
                              </Card.Body>
                          </Card>
                      </Col>

                      {/* Carte 3 */}
                      <Col>
                          <Card>
                              <Card.Body>
                                  <Card.Title>Carte n°3</Card.Title>
                                  <Card.Text>Contenu de la troisième carte pour le CheckPoint.</Card.Text>
                                  <Button variant="outline-primary">Voir</Button>
                              </Card.Body>
                          </Card>
                      </Col>
                  </Row>
              </Container>
          </div>
      </>
  )
}

export default App
