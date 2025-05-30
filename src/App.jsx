import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="ProductPage">
      <div className="Page">
        <header>
          <Title>메뉴 목록</Title>
        </header>
        <main>
          <ul>
            <li>
              <div className="ProductItem">
                <div className="description">
                  <h2>고소한 바질 파스타</h2>
                  <div>6,000원</div>
                  <button className="Button brand">주문하기</button>
                </div>
                <div className="thumbnail">
                  <img src="./images/menu-고소한바질파스타.jpg" alt="고소한바질파스타 6,000원" />
                </div>
              </div>
            </li>
          </ul>
        </main>
        <footer>
          <Navbar />
        </footer>
      </div>
    </div>
  );
};

export default App;
