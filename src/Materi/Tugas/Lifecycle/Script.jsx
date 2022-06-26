import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Navbar, Container, Card, Button, Row , Form, FormControl} from "react-bootstrap"

export default class Lifecycle extends React.Component {

	constructor() {
		super();
		this.state = {
			dataApi : [],
			search : 'input'
		}

		this.inputOnChange = this.inputOnChange.bind(this)
	}

	inputOnChange (e) {
		this.setState({
			search : e.target.value
		})
	}

	componentDidMount() {
	    axios
	      .get(`https://newsapi.org/v2/everything?q=${this.state.search}&apiKey=46a5e3ecb80c43c78537217627614c72`)
	      .then((response) => {
	      this.setState({ dataApi: response.data.articles });
	      })
	      .catch((error) => {
	        console.log(error);
	      });
	  }

	componentDidUpdate(prevState) {
	      axios
	        .get(`https://newsapi.org/v2/everything?q=${this.state.search}&apiKey=46a5e3ecb80c43c78537217627614c72`)
	        .then((response) => {
	        this.setState({ dataApi: response.data.articles });
	        })
	        .catch((error) => {
	          console.log(error);
	        });
	    
	  }

	render() {

		return (
			<div> 
        <Navbar bg="dark" expand="xlg" variant="dark">
				  <Navbar.Brand href="#">---News From API WAWAN---</Navbar.Brand>
				    <Form className="d-flex">
				      <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" onChange={this.inputOnChange}/>
				      {/* <Button variant="outline-success">Search</Button> */}
				    </Form>
				</Navbar>
	   <Container>
	     	<Row>
	         {this.state.dataApi.map((data, index) => {
	          return (
	          <div className="col-md-4 my-3" key={index}>
	           <Card border="black">
	           <Card.Img variant="top" src={data.urlToImage} />
	           <Card.Body>
	            <Card.Title>{data.title}</Card.Title>
	            <Card.Subtitle className="mb-2 text-muted">
	             {data.author}
	             {data.publishedAt}
	            </Card.Subtitle>
	            <Card.Text style={{textAlign :"center"}}>{data.content}</Card.Text>
	            <Button variant="success" href={data.url} >Go News</Button>
	           </Card.Body>
	           </Card>
	          </div>
            );
            })}
        </Row>
        </Container>		
        </div>
    );
  }
}
