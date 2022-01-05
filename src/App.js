import Item from "./component/ContactDetails/Item";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./component/redux/store";

import List from "./component/ContactList/List";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/item/:id" element={<Item />} />
        <Route path="/" element={<List />} />
      </Routes>
    </Provider>
  );
}

export default App;
