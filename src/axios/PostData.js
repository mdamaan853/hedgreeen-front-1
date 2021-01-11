import React, { useState, useEffect } from "react";
import { FaSortDown } from "react-icons/fa";
import { Button } from "antd";
import Checkboxfeature from "../common/checkbox/Checkboxfeature";
import axios from "axios";
import {url} from "../url";
import { Row, Col, Container, Dropdown, DropdownButton } from "react-bootstrap";
import Carousel from "../Myntra/Carousel";
import Product from "./Product";

const PostData = () => {
  const [product, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCat,setSubcat] = useState([]);
  const [Type,setType] = useState("0");
  useEffect(() => {
    // const fetch = async () => {
    //   const res = await axios.get(url+"product");
    //   console.log(res);
    //   setProducts(res.data.result);
    // };

    const fetch = async () => {
      const res = await axios.all([
      axios.get(url+"product"),
      axios.get(url+'category')
    ])
    .then(axios.spread((product,category) => {
      setProducts(product.data.result)
      setCategory(category.data.result)
    }));
  }
    fetch();
  }, []);

const SubCat=(id)=>{
console.log(id)
axios.get(url+`category/getsub/${id}`)
.then(res => (
setSubcat(res.data.result),
console.log(res.data.result))
)
.catch(err => console.log(err))
}

const foodType=()=>{
  if(Type == 0){
    axios.get(url+`product/type/${0}`)
    .then(res => {setType(1)
      setProducts(res.data.result)
       console.log(res)})
    .catch(err => console.log(err))
    }
    else{
      setType(0)
     axios.get(url+`product`)
    .then(res => {
      setProducts(res.data.result)
       console.log(res)})
    .catch(err => console.log(err))
    }
}

  return (
    <>
      <Carousel />
      <Container>
        {/* <div col-sm-12>
          <h1 className="menu-title">
            Our<strong> Food Menu</strong>
          </h1>
          <div class="title-line text-center">
            {" "}
            <span class="short-line"></span> <span class="long-line"></span>
          </div>
        </div> */}
        <hr />
        <div class="p-2 bg-white px-4">
          <div class="d-flex flex-row justify-content-between">
            <div class="d-flex flex-row align-items-center ">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="eat-filters">
                  <h6>
                    {" "}
                    EAT NOW{" "}
                    <FaSortDown
                      color="rgb(245, 226, 57)"
                      size="30"
                      // className="eat-now"
                    />
                    
                  </h6>
                  {/* <p>Select Menu</p> */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {
                    category.map(cat => <Dropdown.Item key={cat.id} onClick={() => SubCat(cat.id)} >{cat.catName}</Dropdown.Item>) 
                  }
                  </Dropdown.Menu>
              </Dropdown> 
            </div>
            <div class="d-flex flex-row align-items-center ">
              <div class="d-flex flex-row align-items-center">
                {/* <h5 class="mt-1">Sort by</h5> */}
                {/* <Button className="veg-btn">VEG</Button> */}
                <Button type="text" className="veg-btn" onClick={()=> foodType()}>
                  {
                    Type == 0 ?  "All" : "Veg"
                  }
                </Button>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="filters">
                    <img
                      src={
                        "https://static.cure.fit/assets/images/filter-black.svg"
                      }
                      className="img-filter"
                    />
                    <span className="ml-2">FILTERS</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">calories</Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */}
                      {/* <label for="points">Calaories</label>
                      <input type="range" id="points" name="points" min="0" max="10"></input> */}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div class="d-flex flex-row align-items-center ml-3"></div>
            </div>
          </div>
        </div>
        <Row>
          <Col md={3}>
            <nav
              id="sidebarMenu"
              class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                  {
                    subCat.map(sub => <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <span data-feather="home"></span>  
                   {sub.catName}
                    </a>
                  </li>
                    )}
                </ul>
              </div>
            </nav>
          </Col>
          <Col md={9}>
            <Row>
              {product.map((result, i) => (
                <Col md={4} xs={12} sm={12} xl={4} key={result.id}>
                  <Product result={result} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default PostData;
