import React from 'react';


class Banner extends React.Component {

    render() {

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
                            <option value="" className="location-place">
                            Please type a location
                            </option>
                            <option value="" className="location-place">
                            Sarjapur Road, Bengaluru
                            </option>
                            <option value="" className="location-place">
                            HSR Layout, Bengaluru
                            </option>
                            <option value="" className="location-place">
                            Karmangala, Bengaluru
                            </option>
                            <option value="" className="location-place">
                            Jay Nagar, Bengaluru
                            </option>
                            <option value="" className="location-place"></option>
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