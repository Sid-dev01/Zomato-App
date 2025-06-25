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

                        <span class = "filters-text">Filters</span><br></br>

                        <span>Select Location</span><br></br>

                        <select class="div-location" style={{marginBottom:"30px"}}>
                            <option value="0" disabled selected>Select Location</option>
                        </select>
                        <br></br>
                        <span>Cuisine</span><br></br>
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
                        <div>
                            <p>Yo</p>
                        </div>

                        {/* Card 2 */}
                        <div>
                            <p>Yo</p>
                        </div>

                    </div>

                    {/* Pagination  */}
                    <div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Filter;