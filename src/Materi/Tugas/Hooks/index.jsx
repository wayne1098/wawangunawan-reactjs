import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, Navbar,} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsApi from "./NewsApi/cards";

const Hook = () => {
    let [query, setQuery] = useState('');
    let [data, setData] = useState([]);
    let [dataCount, setCount] = useState(0);
    let [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getData =  async () => {
            const res = await axios(
                `https://newsapi.org/v2/everything?q=${query}&apiKey=10b07017fe314da1ba834e02b205b90c`
                );
                setData(res.data.articles);
                setCount(res.data.totalResults);
                setLoading(false);
                console.log(res.data.totalResults);
                console.log(res.data.articles);
            }
        getData()
    }, [query])

    return (
        <div>  <Container >
            <Navbar bg="dark" expand="xlg" variant="dark">
				<Navbar.Brand href="#">---News From API WAWAN---</Navbar.Brand>   </Navbar>
                {/* <Form className="d-flex"> */}
                  	<Form.Control type="search" placeholder="Search" className="py-2" aria-label="Search" value={query} onChange={(e) => { setLoading(true); setQuery(e.target.value); }} id="search" />
				    {/* <Button id="search" variant="outline-success">Search</Button> */}
                {/* </Form> */}
               
                </Container>
            
            <div id="content">
                <Container id="news-content">
                    <div id="newsApi" className="newsApi">
                        <NewsApi data={data} count={dataCount} isLoading={isLoading} />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hook;


