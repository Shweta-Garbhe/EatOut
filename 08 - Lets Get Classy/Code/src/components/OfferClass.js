import React from "react";
import { Link } from "react-router-dom";
import { configData } from "../Config";
import { OfferCard } from "./OfferCard";
import Shimmer from "./Shimmer";

class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: null,
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(configData.OFFERS_API);
      const json = await data.json();
      this.setState({
        restaurants: json?.data?.cards,
      });
    } catch (error) {
      return null;
    }
  }

  render() {
    return (
      <>
        <div className="offer-wrapper">
          <div className="offer-banner">
            <div>
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "600",
                  marginTop: "1rem",
                }}
              >
                Offers for you
              </p>
              <p style={{ fontSize: "25px", fontWeight: "600" }}>
                Explore top deals and offers exclusively for you!
              </p>
            </div>
            <div>
              <img
                src={require("../../public/offer.webp")}
                height={170}
                width={240}
              />
            </div>
          </div>
        </div>
        <div className="offer-container">
          {this.state.restaurants == null ? (
            <Shimmer />
          ) : (
            <div className="card-wrapper mt-4">
              {this.state.restaurants.length == 0 ? (
                <h4 className="ms-3">
                  No offer for any restaurant as of now. Better luck next time!
                </h4>
              ) : (
                this.state.restaurants.map((restaurant) => {
                  if (
                    (restaurant.cardType = "restaurant") &&
                    restaurant.data.type == "restaurant"
                  ) {
                    return (
                      <Link
                        className="card-link"
                        to={"/restaurant/" + restaurant.data.data.id}
                        key={restaurant.data.data.id}
                      >
                        <OfferCard {...restaurant.data.data} />
                      </Link>
                    );
                  }
                })
              )}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Offer;
