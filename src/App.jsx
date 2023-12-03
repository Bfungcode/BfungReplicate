import React from "react";
import Main from "./components/Main";
import { messages, tabs, navigation } from "../src/components/Data";
function App() {
  return (
    <div>
      <div className="m-0 p-0">
        <Main messages={messages} tabs={tabs} navigation={navigation} />
      </div>
    </div>
  );
}

export default App;
