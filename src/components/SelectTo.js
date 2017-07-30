import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeSelectTo} from '../actions/select';

class SelectTo extends Component {

    handleChange = (value) => {
        this.props.changeSelectTo(value);
    };

    renderToOption(){
        return this.createTo().map((arrival,id) =>
            <option
                key={id}
                value={arrival}
            >{arrival}</option>
        )
    }

    createTo(){
        let to = [];

        let toAllTransportType = this.props.tripDetails.deals.filter((deal) => {
            return deal.departure === this.props.departure;
        });

        toAllTransportType.forEach((deal) => {
            if(to.indexOf(deal.arrival) === -1) {
                to.push(deal.arrival);
            }
        });

        return to;
    }

    render() {

        return (
            <div className="form-group">
                <select
                    className="form-control"
                    value={this.props.arrival}
                    onChange={(event) => this.handleChange(event.target.value)}
                >
                    <option>To</option>
                    {this.renderToOption()}

                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tripDetails: state.app.tripDetails,
        departure: state.select.from,
        arrival: state.select.to,
    };
};

export default connect(mapStateToProps, {
    changeSelectTo
})(SelectTo)