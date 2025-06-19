import React from 'react';


class QuickSearch extends React.Component {

    render () {

        const {mealtypeData} = this.props;

        return(

            <div>

                <div className="between">
                    <h3 style= {{color:" #192f60"}}>Quick Searches</h3>
                    <p style={{color: "#8c96ab"}}>Discover restaurants by type of meal</p>
                </div>

                    {/*<!-- Cards -->*/}
                    <div className="cards-group">

                        {
                            mealtypeData?.map((meal => {
                                return(
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
                                                            src={`/Images/${meal.image}`}
                                                            className="img-fluid rounded-start"
                                                            alt="images_mealtype"
                                                            style={{height: "100%", width: "auto"}}
                                                            />
                                                        </div>
                                                        <div className="col-md-7">
                                                            <div className="card-body">
                                                            <h5 className="card-title" style={{color: "#192f60", fontSize: "18px"}}>
                                                                {meal.name}
                                                            </h5>
                                                            <p className="card-text" style={{color: "#8c96ab", fontSize: "14px"}}>
                                                                {meal.content}
                                                            </p>
                                                            <p className="card-text">
                                                                <small className="text-body-secondary"></small>
                                                            </p>
                                                            </div>
                                                        </div>
                                                        </div>
                                                </div>
                                )
                            }))
                        }
                        {/*<!-- Card 1 -->*/}
                        
                    </div>

            </div>
        )
    }
}

export default QuickSearch;