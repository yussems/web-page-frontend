import React from "react";
import "./Content.scss";
import "./Container.scss";

function Content() {
  return (
    <div className="packages">
      <div className="package">
        <h6>Starter</h6>
        <div className="price-info">
          <div className="price">$8.99/Month</div>

          <div className="description">Billed Yearly</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            quidem earum repellendus nam, consequatur eum debitis aspernatur
            doloribus quae minus voluptate laudantium, corporis necessitatibus
            cumque! Odio, molestias voluptas, magnam ipsum consequuntur nostrum
            sapiente delectus eius voluptate dolore, veritatis dolorem
            accusantium?
          </p>
          <a href="#" className="button">
            Get Starter
          </a>
        </div>
      </div>
      <div className="package">
        <h6>Profsesionel</h6>
        <div className="price-info">
          <div className="price">$8.99/Month</div>

          <div className="description">Billed Yearly</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            quidem earum repellendus nam, consequatur eum debitis aspernatur
            doloribus quae minus voluptate laudantium, corporis necessitatibus
            cumque! Odio, molestias voluptas, magnam ipsum consequuntur nostrum
            sapiente delectus eius voluptate dolore, veritatis dolorem
            accusantium?
          </p>
          <a href="#" className="button">
            Get Starter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Content;
