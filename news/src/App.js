import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/card';
import NavBar from './components/navbar';
import PropertiesBadges from './components/props';
import axios from 'axios'
const BaseUrl= "http://localhost:9000/"

export const getTopStories = ()=>{
    const stories = axios.get(`${BaseUrl}`)
    return stories.data
} 
function App() {
  const [stories, setStories]=useState([])
  const [section, setSection] = useState('home')
  const story =()=>{
    axios.get(`${BaseUrl}nyt/top-stories/${section}`).then(story=>{
      setStories(story.data.data)
    }).catch(err=>{
      console.log(err)
    })
  }
  const selectSection =(value)=>{
    setSection(value)
    console.log(value)
    // story()
  }
  useEffect(() => {
    story()
  }, [section])
  

  return (
    <>
      <NavBar/>
      <PropertiesBadges selectSection={selectSection} selectedSection ={section}/>
      <Cards cardData={stories}/>
    </>
  );
}

export default App;
