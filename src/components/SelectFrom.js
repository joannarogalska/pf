import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeSelectFrom} from '../actions/select';

class SelectFrom extends Component {

    handleChange = (value) => {
        this.props.changeSelectFrom(value);
    };

    renderFromOption() {

        return this.createFrom().map((destination,id) =>
            <option
                key={id}
                value={destination}
            >{destination}</option>
        )
    }

    createFrom(){
        let from = [];
        this.props.tripDetails.deals.forEach((deal) => {
            if( from.indexOf(deal.departure) === -1) {
                from.push(deal.departure);
            }
        });

        return from;
    }

    render() {

        return (
            <div className="form-group">
                <select
                    className="form-control"
                    value={this.props.departure}
                    onChange={(event) => this.handleChange(event.target.value)}
                >
                    <option>From</option>
                    {this.renderFromOption()}

                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tripDetails: state.app.tripDetails,
        departure: state.select.from,
    };
};

export default connect(mapStateToProps, {
    changeSelectFrom
})(SelectFrom)