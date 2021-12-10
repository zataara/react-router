import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Item from "./Item";

const VendingMachine = () => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/apples"
          element={<Item name="apples" backGround="https://giphy.com/gifs/angryorchard-drink-apple-1yidCdsFTZ5Qfk6HmG" text="An Apple a Day" />}
        ></Route>
        <Route exact path="/oranges" element={<Item name="oranges" />}></Route>
        <Route exact path="/bananas" element={<Item name="bananas" />}></Route>
        <Route
          exact
          path="/blueberries"
          element={<Item name="blueberries" />}
        ></Route>
        <Route
          exact
          path="/cherries"
          element={<Item name="cherries" />}
        ></Route>
        <Route exact path="/peaches" element={<Item name="peaches" />}></Route>
        <Route
          exact
          path="/watermelon"
          element={<Item name="watermelon" />}
        ></Route>
      </Routes>
    </div>
  );
};

export default VendingMachine;
