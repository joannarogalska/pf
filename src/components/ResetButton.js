import React, {Component} from 'react';
import {connect} from 'react-redux';
import {resetAllValues} from '../actions/select';

class ResetButton extends Component {

    handleChange = () => {
        this.props.resetAllValues();
    };

    render() {

        return (
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <button type="button" className="btn btn-success" onClick={this.handleChange}>Reset</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tripDetails: state.app.tripDetails,
        departure: state.select.from,
        arrival: state.select.to,
        option: state.select.option,
    };
};

export default connect(mapStateToProps, {
    resetAllValues
})(ResetButton)