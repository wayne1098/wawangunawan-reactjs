import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./index.css";

export default class Portofolio extends React.Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#">Wawan Gunawan</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#biografi">Biografi</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <Nav.Link href="#file">File</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className="p-3 mb-1 bg-light rounded-3 jumbotron a">
                    <Container fluid className="py-4 text-center">
                        <p className="display-6">I AM</p>
                        <h1 className="display-4">Wawan Gunawan</h1>
                        <Button variant="outline-dark" size="sm" className="btn-warning mt-5 text-white px-3 py-2">LinkedIn Profile</Button>
                    </Container>
                </div>
                
                <Container className="text-center" id="file">
                <h3 className="fs-bold fs-2">My File.</h3>
                    <Row>
                        <Col lg="4" md="4" sm="12">
                            <h6 className="fs-5">Retouch 1</h6>
                            <p className="fw-light">Filter ini adalah salah satu fitur di Instagram yang dibuat menggunakan spark ar stdio menggabungkan posting asli (foto dan video) dengan efek virtual. Efek ini bisa membuat wajah kita jadi lebih bersih, cerah dan percaya diri pada pemirsa Anda, pembukaan dan pembagian mungkin lebih rendah dari impresi yang diharapkan, filter ini dapat diakses dengan /549014873321045 by phone.</p>
                        </Col>
                        <Col lg="4" md="4" sm="12">
                            <h6 className="fs-5">Local Guides Connect</h6>
                            <p className="fw-light">Forum online tempat Anda bisa berkenalan dengan Local Guide lainnya, membagikan penemuan Anda, mendapatkan info produk terbaru, dan banyak lagi. Anda juga dapat menyarankan perbaikan untuk program dan fitur Local Guides di Google Maps. Selain itu, banyak Local Guide mengunjungi Connect untuk mengetahui lebih banyak tentang fotografi, makanan, dan perjalanan.</p>
                        </Col>
                        <Col lg="4" md="4" sm="12">
                            <h6 className="fs-5">Legends Arena</h6>
                            <p className="fw-light">Acara bulanan untuk pemain yang telah maju hingga ke Liga Legenda, Liga paling elit di Chess.com. Pemain akan bersaing di 3+0 Blitz Arena dalam tiga kategori peringkat yang berbeda untuk mendapatkan bagian dari dana hadiah bulanan $1.050. Acara berlangsung pada hari Jumat terakhir setiap bulan, dengan Legends Arena pertama dimulai pada 27 Mei pukul 9 pagi PT/18:00 CET.</p>
                        </Col>
                    </Row>
                </Container>
                
                <Container className="text-center" id="biografi">
                <h3 className="fs-bold fs-2">My Bio.</h3>
                <p className="fs-6 fst-italic fw-light">Halo perkenalkan nama saya Wawan Gunawan. Saat ini saya sedang mengikuti kelas ReactJS dan NodeJS di Eduwork. Keseharian saya menonton video dan masih belajar coding. Saya membuat portofolio ini sebagai tugas membuat biografi sederhana di kelas dasar html. Saya sangat tertarik dengan kelas koding. mohon isi kolom berikut sebagai masukan dan saran buat saya. Terimakasih.</p>
                </Container>

                <Container className="mt-5" id="contact">
                    <h3 className="fs-bold fs-2 text-center mb-3">Contact</h3>
                    <Card className="mx-auto" style={{width: "500px"}}>
                        <Card.Body>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="ExampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your message ..."></textarea>
                            </div>
                            <div className="d-grid gap-2">
                                <Button className="btn-warning text-white px-3 py-2" variant="outline-dark" size="sm">Send</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>

                <Container fluid className="thanks bg-dark mb-0 mt-5">
                    <p className="text-white text-center footer">
                         &copy; Copyright @2022 - All right reserved. 
                    </p>
                </Container>
            </div>
        )
    }
}