import { useState } from 'react';
import './App.css';

const tabData = [
  { id: 1, title: 'Tab 1', body: 'Content for Tab 1' },
  { id: 2, title: 'Tab 2', body: 'Content for Tab 2' },
  { id: 3, title: 'Tab 3', body: 'Content for Tab 3' },
];

function App() {
  const [activeTabID, setActiveTabID] = useState(1);

  const handleClick = (id) => {
    setActiveTabID(id);
  };

  return (
    <div className="tab-component">
      {tabData.map((item) => (
        <button
          className={`tab ${activeTabID === item.id ? 'active' : ''}`}
          onClick={() => handleClick(item.id)}
          key={item.id}
        >
          {item.title}
        </button>
      ))}
      <div className="tab-component-content">
        {tabData[activeTabID - 1].body}
      </div>
    </div>
  );
}

export default App;
