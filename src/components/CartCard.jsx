import React from "react";

export const CartCard = ({ img, name, price, quantity }) => {
  return (
    <>
      <div className="d-flex py-2 flex-column">
        {/* <div className="list-group-item"> */}
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <img
              src={img}
              className="img-fluid rounded-start cart-img"
              alt={name}
            />
          </div>
          <div className="col-auto ">
            <h5 className="mb-0 fw-semibold">Pizza {name}</h5>
            <small className="text-body fw-semibold">${price}</small>
          </div>

          <div className="col-auto mt-2">
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-danger btn-sm px-2">−</button>
              <span className="mx-2">{quantity}</span>
              <button className="btn btn-outline-primary btn-sm px-2">+</button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
