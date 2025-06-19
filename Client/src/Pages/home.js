import React from 'react';
import '../Style/home.css';
import Banner from './banner';
import QuickSearch from './quickSearch';
import axios from 'axios';


class Homepage extends React.Component {

    constructor() {
        super();
        this.state = {
            loc : [],
            mealtype: []
        }
    }

    componentDidMount() {

        axios({
            url : "http://localhost:5500/location",
            method: "GET",
            headers: {'Content-Type': 'application/JSON'}
        })
        .then( res => {
                this.setState({loc : res.data.location})
        })
        .catch((err => console.log(err)));

        axios({
            url: "http://localhost:5500/mealtype",
            method: "GET",
            headers: {'Content-Type': 'application/JSON'}
        })
        .then(res => {
            this.setState({ mealtype : res.data.mealtype});
        })
        .catch(err => {
            console.log(err);
        })

    }

    render() {
        
        const { loc, mealtype} = this.state;
        // console.log(mealtype);

        return(
            <div>
                    {/*Banner Part*/}
                    <Banner locationData = { loc }/>

                    {/*<!-- Middle Part -->*/}
                    <QuickSearch mealtypeData = { mealtype }/>
                
            </div>
        )
    }
}

export default Homepage;