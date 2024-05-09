
import './App.css';
import Cards from './Component/Cards';
import Cric from './Component/Cricbuzz/cric';



function App() {
  return (
    // <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>


    //   <Cards  pic = " https://www.irctc.co.in/nget/assets/images/exterior.jpg " title ="Maharajas' Express"  para = "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years."/>
    //   <Cards  pic = " https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg " title ="Bharat Gaurav Tourist"  para = "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years."/>
    //   <Cards  pic = " https://www.irctc.co.in/nget/assets/images/Manali.jpg " title ="Rail Tour Packages"  para = "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years."/>
    //   <Cards  pic = " https://www.irctc.co.in/nget/assets/images/Kashmir.jpg " title ="Domestic Air Packages"  para = "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years."/>
    //   <Cards  pic = " https://www.irctc.co.in/nget/assets/images/Thailand.jpg " title ="International Packages"  para = "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years."/>
      
     
      
    // </div>


     
    <div style={{display:"block",gap:"20px",margin:"100px auto"}}>

     
    
     
     
     <Cric 

       image = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c463274/womens-t20-world-cup-2024-in.jpg"

     heading ="Women's T20 World Cup 2024: India to face Pakistan on October 6" 

     para = "The tournament gets underway on October 3 with England facing South Africa and the final is scheduled to be held on October 20"  

     link ="https://www.cricbuzz.com/cricket-news/130347/until-something-changes-that-will-remain-the-situation-icc-chief-on-afghanistan-not-having-a-womens-team"

     text = "https://www.cricbuzz.com/cricket-news/130347/until-something-changes-that-will-remain-the-situation-icc-chief-on-afghanistan-not-having-a-womens-team"

     />
      
      <Cric image = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c465954/all-round-narine-takes-kkr-to.jpg"

      heading ="All-round Narine takes KKR to top spot" 

      para = "Narine's breezy 81 at the top of the order helped KKR post 235, the highest IPL total ever scored in Lucknow"  

      link ="https://www.cricbuzz.com/cricket-news/130352/shreyas-iyer-hails-kkrs-splendid-opening-pair"

      text = "https://www.cricbuzz.com/cricket-news/130330/usa-pick-corey-anderson-for-mens-t20-world-cup-2024"
      
      />
     
     <Cric image = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c460756/shamar-joseph-included-in-west.jpg"

      heading ="Shamar Joseph included in West Indies squad for T20 World Cup" 

       para = "West Indies have also brought back Shimron Hetmyer; Alzarri Joseph named Rovman Powell's deputy"  

      link ="https://www.cricbuzz.com/cricket-news/130330/usa-pick-corey-anderson-for-mens-t20-world-cup-2024"
      
      text = "https://www.cricbuzz.com/cricket-news/130352/shreyas-iyer-hails-kkrs-splendid-opening-pair"
      />


    </div>



  );
}

export default App;
