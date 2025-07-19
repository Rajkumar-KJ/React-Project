import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div>
  <div className="home-container">
      <img src="/images/bg1.jpg" alt="Recipe background" className="home-image" />
      <div className="home-content">
        <h1>Welcome to MealMate 🍽️</h1>
        <p>All-in-onerecipe manager & planner app</p>
        <p>The ultimate recipe organiser for easy access to all of your recipes on all of your devices</p>
      </div>
    </div>
   <div className="info">
  <div className="info-div">
    <img src="/images/r3.jpg" alt="" className="info-img" />
    <h2>Recipe Categories</h2>
    <p>
      Explore by Taste & Type<br />
      Browse recipes by cuisine, diet, or prep time.<br />
      Quickly find what suits your craving and lifestyle.
    </p>
  </div>
  <div className="info-div">
    <img src="/images/r2.jpg" alt="" className="info-img" />
    <h2>Add a Recipe</h2>
    <p>
      Share Your Flavors<br />
      Input ingredients, steps, and tags easily.<br />
      Auto-numbered steps and calorie tracking included!
    </p>
  </div>
  <div className="info-div">
    <img src="/images/1.jpg" alt="" className="info-img" />
    <h2>Edit a Recipe</h2>
    <p>
      Update with Ease<br />
      Modify ingredients, steps, or categories anytime.<br />
      Keep your recipe collection fresh and accurate.
    </p>
  </div>
  </div>

  <div className='info2'>
    <div className='info2-div'>
        <img src="/images/info21.jpg" alt="" className='info2-img'/>
    <div className='info2-p'>
        <p>🍴 Choose Your Culinary Path</p>
        <p>where you can explore a wide variety of dishes based on your food preferences. Whether you're in the mood for wholesome vegetarian meals, hearty non-vegetarian delights, or specialized diets like vegan and gluten-free, we've organized everything to help you find the perfect recipe with ease. Discover vibrant flavors, diverse cuisines, and healthy options—all in one place. Start browsing by category and let your taste buds lead the way!</p>
    </div> 
    </div>

     <div className='info2-div'>
       
    <div className='info2-p'>
        <p>🧑‍🍳 Add a Recipe – Your Kitchen, Your Rules</p>
        <p>Share your favorite dishes with ease! Use this page to add your own recipes and keep them organized in one place. Simply enter the recipe name, ingredients, cooking steps, preparation time, and category (like veg, non-veg, vegan, or gluten-free). You can even add tags, photos, and tips to make it more personal. Whether it’s a family secret or a new creation, this is your space to save and revisit your culinary ideas anytime. Start building your recipe collection today!</p>
    </div> 
     <img src="/images/info22.jpg" alt="" className='info2-img'/>
    </div>

     <div className='info2-div'>
        <img src="/images/info23.jpg" alt="" className='info2-img'/>
    <div className='info2-p'>
        <p>🧂 Add a Pinch of Perfection</p>
        <p>Easily update and refine your saved recipes on this page. Whether you're improving ingredient quantities, changing cooking steps, updating the recipe name, or uploading a new photo, this is your space to keep everything accurate and up to date. You can also modify categories like veg, non-veg, vegan, or gluten-free, adjust preparation time, and add or remove tags to make your recipe more organized and searchable. Your cooking evolves, and so should your recipe—edit with ease and keep your collection fresh and personalized.</p>
    </div> 
    </div>
  </div>

  <div className='cover'>
    <img src="/images/cover.jpg" alt="" />
  </div>

  <div className='cover-info'> 
    <p>Your ultimate kitchen companion.</p>
    <Link to="/recipes">  <button>Get Start</button></Link>
   
  </div>

   <div>
        <footer className='footer1'>
            <p> MealMate 🍽️. All rights reserved.</p>
        </footer>
    </div>

</div>
     
  )
}

export default Home;