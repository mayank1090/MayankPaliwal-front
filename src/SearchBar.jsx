
import React, { useState, useEffect } from 'react';
import "./searchbar.css"

function SearchBar(){
    const [searchItem, setseachItem] = useState('');
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const getAds = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/ads?searchTerm=${searchItem}`, {
          
        });
        const data = await response.json();
        console.log(data);
        setAds(data);
      } catch (error) {
        console.error(error);
      }
    };
    getAds();
  }, [searchItem]);

  const handleInputChange = ()=> {
      
    const answw=document.getElementsByClassName("search-input")[0].value
    setseachItem(answw)
  };


    return(
        <>
        <div>
        <h1>Search Ads</h1>
      <input type="text"
      className="search-input"
      placeholder="Search Ads..."/>
      <button className='search-button' onClick={handleInputChange} >Search <i src="fa-fas"></i></button>
      <div className="grid">
        {ads.map(adsone => (
          
          <div key={adsone._id} className="card">
            <img src={`data:image/jpeg;base64,${adsone.imageUrl}`} alt={adsone.company_Name} />
            <h2>{adsone.company_Name}</h2>
            <p>{adsone.primaryText}</p>
            <p>{adsone.headline}</p>
            <p>{adsone.description}</p>
            <a href={adsone.company_link}><button>{adsone.CTA}</button></a>
          </div>
        ))}
      </div>
        </div>
        </>
    )
}

export default SearchBar;

