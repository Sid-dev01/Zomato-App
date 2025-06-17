import React from 'react';


class QuickSearch extends React.Component {

    render () {

        const { locationData } = this.props;

        return(

            <div>

                <div className="between">
                    <h3 style= {{color:" #192f60"}}>Quick Searches</h3>
                    <p style={{color: "#8c96ab"}}>Discover restaurants by type of meal</p>
                    </div>

                    {/*<!-- Cards -->*/}
                    <div className="cards-group">
                    {/*<!-- Card 1 -->*/}
                    <div
                        className="card mb-3"
                        style={{
                        maxWidth: "360px",
                        maxHeight: "160px",
                        margin: "1rem",
                        boxShadow: "0px 3px 6px #00000029"
                        }}
                    >
                        <div className="row g-0">
                        <div className="col-md-5">
                            <img
                            src="/Images/Breakfast.png"
                            className="img-fluid rounded-start"
                            alt="Breakfast"
                            style={{height: "100%", width: "auto"}}
                            />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                            <h5 className="card-title" style={{color: "#192f60", fontSize: "18px"}}>
                                Breakfast
                            </h5>
                            <p className="card-text" style={{color: "#8c96ab", fontSize: "14px"}}>
                                Start your day with exclusive breakfast options
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary"></small>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/*<!-- Card 2 -->*/}
                    <div
                        className="card mb-3"
                        style={{
                        maxWidth: "360px",
                        maxHeight: "160px",
                        margin: "1rem",
                        boxShadow: "0px 3px 6px #00000029"
                    }}
                    >
                        <div className="row g-0">
                        <div className="col-md-5">
                            <img
                            src="/Images/Lunch.png"
                            className="img-fluid rounded-start"
                            alt="Lunch"
                            style={{height: "100%", width: "auto"}}
                            />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                            <h5 className="card-title" style={{color: "#192f60", fontSize: "18px"}}>
                                Lunch
                            </h5>
                            <p className="card-text" style={{color: "#8c96ab", fontSize: "14px"}}>
                                Start your day with exclusive breakfast options
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary"></small>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/*<!-- Card 3 -->*/}
                    <div
                        className="card mb-3"
                        style={{
                        maxWidth: "360px",
                        maxHeight: "160px",
                        margin: "1rem",
                        boxShadow: "0px 3px 6px #00000029"
                        }}
                    >
                        <div className="row g-0">
                        <div className="col-md-5">
                            <img
                            src="/Images/Snack.png"
                            className="img-fluid rounded-start"
                            alt="Snacks"
                            style={{height: "100%", width: "auto"}}
                            />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                            <h5 className="card-title" style={{color: "#192f60", fontSize: "18px"}}>
                                Snacks
                            </h5>
                            <p className="card-text" style={{color: "#8c96ab", fontSize: "14px"}}>
                                Start your day with exclusive breakfast options
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary"></small>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/*<!-- Card 4 -->*/}
                    <div
                        className="card mb-3"
                        style={{
                        maxWidth: "360px",
                        maxHeight: "160px",
                        margin: "1rem",
                        boxShadow: "0px 3px 6px #00000029"
                        }}
                    >
                        <div className="row g-0">
                        <div className="col-md-5">
                            <img
                            src="/Images/Dinner.png"
                            className="img-fluid rounded-start"
                            alt="Dinner"
                            style={{height: "100%", width: "auto"}}
                            />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                            <h5 className="card-title" style={{color: "#192f60", fontSize: "18px"}}>
                                Dinner
                            </h5>
                            <p className="card-text" style={{color: "#8c96ab", fontSize: "14px"}}>
                                Start your day with exclusive breakfast options
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary"></small>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/*<!-- Card 5 -->*/}
                    <div
                        className="card mb-3"
                        style={{
                        maxWidth: "360px",
                        maxHeight: "160px",
                        margin: "1rem",
                        boxShadow: "0px 3px 6px #00000029"
                        }}
                    >
                        <div className="row g-0">
                        <div className="col-md-5">
                            <img
                            src="/Images/Drinks.png"
                            className="img-fluid rounded-start"
                            alt="Drinks"
                            style={{height:"100%", width: "auto"}}
                            />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                            <h5 className="card-title" style={{color: "#192f60", fontSize: "18px"}}>
                                Drinks
                            </h5>
                            <p className="card-text" style={{color: "#8c96ab", fontSize: "14px"}}>
                                Start your day with exclusive breakfast options
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary"></small>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/*<!-- Card 6 -->*/}
                    <div
                        className="card mb-3"
                        style={{
                        maxWidth: "360px",
                        maxHeight: "160px",
                        margin: "1rem",
                        boxShadow: "0px 3px 6px #00000029"
                        }}
                    >
                        <div className="row g-0">
                        <div className="col-md-5">
                            <img
                            src="/Images/Nightlife.png"
                            className="img-fluid rounded-start"
                            alt="Nightlife"
                            style={{ height: "100%", width: "auto"}}
                            />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                            <h5 className="card-title" style={{color: "#192f60", fontSize: "18px"}}>
                                Nightlife
                            </h5>
                            <p className="card-text" style={{color: "#8c96ab", fontSize: "14px"}}>
                                Start your day with exclusive breakfast options
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary"></small>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default QuickSearch;