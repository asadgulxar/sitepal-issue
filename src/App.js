import { useState } from "react";
import { SitePal } from "sitepal-react";

function App() {
  const [showSitepal, setShowSitepal] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShowSitepal((val) => !val)}>
        {showSitepal ? "unmount" : "mount"}
      </button>
      {showSitepal && (
        <SitePal embed='8392872,200,200,"",1,1,2747681,0,1,0,"KM1eb6QyXGYolnCUoJqbp2f41T5IULrt",0,"256|480|15|15|L|B|false|0|0|0|0|vhss-d.oddcast.com/admin/img//no_image.jpg|Double%20click%20to%20play%20me|0|C|0|0|0|0"' />
      )}
    </div>
  );
}

export default App;
