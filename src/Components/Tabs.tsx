import { useState } from "react"

export const Tabs = () => {

  type Tab = {
    id: number,
    name: string,
    content: string
  }   

  const tabs: Tab[] = [
    {
        id: 1,
        name: 'Tab 1',
        content: 'Soy la primer tab'
    },
    {
        id: 2,
        name: 'Tab 2',
        content: 'Soy la segunda tab'
    },
    {
        id: 3,
        name: 'Tab 3',
        content: 'Soy la tercera tab'
    },
  ]

  const [tab, setTab] = useState(1)

  function toggleTabs(id: number){
    console.log('presionaste el boton:', id);
    setTimeout(()=>{
        setTab(id)
    },5000)
  }

  const currentTab = tabs.find(t => t.id === tab)
  const {name, content} = currentTab as Tab
  console.log(currentTab);
  
  return (
    <div className="tabs-container">
        {tabs.map((tab)=>{
            return (
            <button key={tab.id} onClick={()=>toggleTabs(tab.id)}>{tab.id}: {tab.name}</button>
        )
        })}
        <h2>{name}</h2>
        <p>{content}</p>
    </div>
  )
}
