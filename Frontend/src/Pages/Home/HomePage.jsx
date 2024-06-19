import React from "react";
import { Carousel } from "react-bootstrap";
import HomeNavigation from "../../components/reusableComponents/HomeNavigation";

const HomePage = () => {
  return (
    <>
      <HomeNavigation />
      <div className="carousel-wrapper">
        <Carousel fade controls={true} pause={false} interval={5000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1664575197229-3bbebc281874?q=80&w=1270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="First slide"
              height={797}
            />
            <Carousel.Caption>
              <h3>Welcome to Freelancer Finder</h3>
              <p>Find the best freelancers for your projects</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1588064549181-755cf87668ab?q=80&w=1270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Second slide"
              height={797}
            />
            <Carousel.Caption>
              <h3>Find Your Perfect Job</h3>
              <p>Discover new opportunities as a freelancer</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1487073240288-854ac7f1bb3c?q=80&w=1270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Third slide"
              height={797}
            />
            <Carousel.Caption>
              <h3>Join Freelancer Finder Today</h3>
              <p>Connect with clients or find talented freelancers</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default HomePage;
