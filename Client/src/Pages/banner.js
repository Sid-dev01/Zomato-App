import React from 'react';


class Banner extends React.Component {

    render() {

        const { locationData } = this.props;

        return(

            <div>

                <div className="top-part">
                    <div className="navigation-bar">
                        <button className="login">Login</button>
                        <button type="button" className="btn btn-outline-light create-account">
                        Create an account
                        </button>
                    </div>
                    <div className="middle-part">
                        <div className="logo-div">
                        <h3 className="logo">e!</h3>
                        </div>
                        <h3 className="find-the">Find the best restaurants, cafés, and bars</h3>
                        <div className="search-box">
                        <select name="location" id="location">
                            <option value="0" disabled selected>
                            Please type a location
                            </option>
                            {
                                locationData?.map((item) => {
                                    return(
                                        <option value={item.city_id} className="location-place"> {item.name} </option>
                                    )
                                    
                                }) 
                            }
                            
                            
                        </select>

                        <i className="bi bi-search search-glass"></i>
                        <input
                            type="text"
                            className="search-restaurants"
                            placeholder="Search for restautrants"
                        />
                        </div>
                    </div>
                    </div>

            </div>
        )
    }

}

export default Banner;