import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import EditProfilePopup from "./components/EditProfilePopup";

function App() {
  return (
      <>

  <div className={"page"}>
    <Header />

    <Main />

    <Footer />

    <template id={"element"}>
      <div className={"element"}>
        <button type="submit" className={"element__delete"}></button>
        <img src=" " alt="" className={"element__image"} />
          <div className={"element__info"}>
            <h2 className={"element__paragraph"}></h2>
            <div className={"element__likes"}>
              <button type="button" className={"element__like"}></button>
              <label className={"element__like-info"}>
                <p className={"element__counter"}></p>
              </label>
            </div>
          </div>
      </div>
    </template>

    <EditProfilePopup />

  </div>
        </>
  );
}

export default App