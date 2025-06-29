import { useState } from "react";

export const Tabs = () => {
  type Tab = {
    id: number;
    name: string;
    image: string;
    content: string;
  };

  const tabs: Tab[] = [
    {
      id: 1,
      name: "About us",
      image:
        "https://www.cnet.com/a/img/resize/e0ee03a09a8b5d83576ecd49fc194d4e63f93bfd/hub/2020/02/10/4f0d231c-d57b-48bc-84e0-adb6e97023ed/nissan-kyushu-plant-ogi-2.jpg?auto=webp&fit=crop&height=900&width=1200",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nam quibusdam dolore beatae quas velit similique impedit id libero eum.",
    },
    {
      id: 2,
      name: "History",
      image:
        "https://es.nissanusa.com/content/dam/Nissan/us/AboutNissan/heritage/nissan-1958-los-angeles-auto-show.jpg.ximg.l_full_m.smart.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit libero nostrum quibusdam odit sint officiis?",
    },
    {
      id: 3,
      name: "Products",
      image:
        "https://wieck-nissanao-production.s3.amazonaws.com/photos/1881878489d07c2348ed3eea3e2db203fb32f996/preview-928x522.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, totam!",
    }
  ];

  const [tab, setTab] = useState(1);

  function toggleTabs(id: number) {
    console.log("presionaste el boton:", id);
    setTimeout(() => {
      setTab(id);
    });
  }

  const currentTab = tabs.find((t) => t.id === tab);
  const { name, content, image } = currentTab as Tab;
  console.log(currentTab);

  return (
    <>
      <h2 className="tabs-tittle">Tabs</h2>
      <div className="buttons-container">
        {tabs.map((tab) => {
          return (
            <button
              className={`tab-button ${
                tab.id === currentTab?.id ? "active-tab" : ""
              }`}
              key={tab.id}
              onClick={() => toggleTabs(tab.id)}
            >
              {tab.id}: {tab.name}
            </button>
          );
        })}
      </div>
      <h2 className="tab-tittle tabs-tittle">{name}</h2>
      <div className="tabs-container">
        <div className="info-tab">
          <img src={image} alt={`${name} image`} />
          <p className="tab-paragraph">{content}</p>
        </div>
      </div>
    </>
  );
};
