import React from 'react';
import '../Style/filter.css'


class Filter extends React.Component {

    render(){
        return (
            <div>
                
                {/* navbar  */}
                <div className = "div-nav">
                    <div className = "div-logo">
                        <p className = "text" style={{marginTop : "5px"}}>e!</p>
                    </div>
                    <div className="div-account">
                        <div classname="div-login">
                            <button className="login-button">Login</button>
                            <button className="create-id">Create an account</button>
                        </div>
                    </div>
                </div>

                {/* Heading  */}
                <p className = "div-heading"><b>Breakfast Places in Mumbai</b></p>

                {/* Filter part  */}
                <div className="div-filter">

                    {/* Filter section  */}
                    <div className = "filter-section">

                        <span class = "filters-text"><b>Filters</b></span><br></br>

                        <span style={{color: "#192F60"}}>Select Location</span><br></br>

                        <select class="div-location" style={{marginBottom:"30px"}}>
                            <option value="0" disabled selected>Select Location</option>
                        </select>
                        <br></br>
                        <span style={{color: "#192F60"}}>Cuisine</span><br></br>
                        <label><input type="checkbox" />North Indian</label><br></br>
                        <label><input type="checkbox" />South Indian</label><br></br>
                        <label><input type="checkbox" />Chinese</label><br></br>
                        <label><input type="checkbox" />Fast Food</label><br></br>
                        <label><input type="checkbox" />Street Food</label><br></br>

                        <span class="cost">Cost For Two</span><br></br>
                        <label><input type="radio" name = "cost" />Less than 500</label><br></br>
                        <label><input type="radio" name = "cost" />500 to 1000</label><br></br>
                        <label><input type="radio" name = "cost" />1000 to 1500</label><br></br>
                        <label><input type="radio" name = "cost" />1500 to 2000</label><br></br>
                        <label><input type="radio" name = "cost"/>2000+</label><br></br>

                        <span class="sort">Sort</span> <br></br>
                        <label><input type="radio" name="sort" />Price low to high</label><br></br>
                        <label><input type="radio" name="sort" />Price high to low</label>

                    </div>

                    {/* Card Section  */}
                    <div className = "div-card">

                        {/* Card 1  */}
                        <div className="card" style={{marginBottom: "4 rem"}}>
                            
                            <div className="restaurantDetail">
                                <div>
                                    <img src="./Images/1.png" height="140px" width="140px" alt="mealtype_image" style={{borderRadius: "20px"}} />
                                </div>
                                <div style={{paddingRight: "3rem", marginLeft: "1rem"}}>
                                    <h2>The Big Chill Cakery</h2>
                                    <p>Fort</p>
                                    <p>Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                                </div>
                            </div>

                            <div className="order-detail">
                                <div className="div-data">
                                    <div>
                                        <p>CUISINIES:</p>
                                    </div>
                                    <div style={{paddingLeft:"6rem"}}>
                                        <p>Bakery</p>
                                    </div>
                                </div>

                                <div className="div-data"> 
                                    <div>
                                        <p>COST FOR TWO:</p>
                                    </div>
                                    <div style={{paddingLeft:"3rem"}}>
                                        <p>₹700</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="card" >
                            
                            <div className="restaurantDetail">
                                <div>
                                    <img src="./Images/1.png" height="140px" width="140px" alt="mealtype_image" style={{borderRadius: "20px"}} />
                                </div>
                                <div style={{paddingRight: "3rem", marginLeft: "1rem"}}>
                                    <h2>The Big Chill Cakery</h2>
                                    <p>Fort</p>
                                    <p>Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                                </div>
                            </div>

                            <div className="order-detail">
                                <div className="div-data">
                                    <div>
                                        <p>CUISINIES:</p>
                                    </div>
                                    <div style={{paddingLeft:"6rem"}}>
                                        <p>Bakery</p>
                                    </div>
                                </div>

                                <div className="div-data"> 
                                    <div>
                                        <p>COST FOR TWO:</p>
                                    </div>
                                    <div style={{paddingLeft:"3rem"}}>
                                        <p>₹700</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination  */}
                    <div className="div-pagination">

                        <div><button style={{padding:"0px 8px", borderRadius:"6px", marginRight:"10px"}}> 1</button></div>
                        <div><button style={{padding:"0px 8px", borderRadius:"6px", marginRight:"10px"}}> 2</button></div>
                        <div><button style={{padding:"0px 8px", borderRadius:"6px", marginRight:"10px"}}> 3</button></div>
                        <div><button style={{padding:"0px 8px", borderRadius:"6px", marginRight:"10px"}}> 4</button></div>
                        <div><button style={{padding:"0px 8px", borderRadius:"6px", marginRight:"10px"}}> 5</button></div>
                        <div><button style={{padding:"0px 8px", borderRadius:"6px", marginRight:"10px"}}> 6</button></div>

                    </div>

                    </div>

                    

                </div>

            </div>
        )
    }
}

export default Filter;