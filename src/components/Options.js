import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeOption} from '../actions/select';

class SelectFrom extends Component {

    handleChangeCheap = (value) => {
        this.props.changeOption(value);
    };

    handleChangeFast = (value) => {
        this.props.changeOption(value);
    };

    render() {

        return (
            <div className="form-group">
                <div className="radio-inline">
                    <input
                        className="radio"
                        id="cheapest"
                        name="option"
                        type="radio"
                        value="cheapest"
                        checked={this.props.option === 'cheapest'}
                        onChange={(event) => this.handleChangeCheap(event.target.value)}
                    />
                    <label htmlFor="cheapest">Cheapest</label>
                </div>
                <div className="radio-inline">
                    <input
                        className="radio"
                        id="fastest"
                        name="option"
                        type="radio"
                        value="fastest"
                        checked={this.props.option === 'fastest'}
                        onChange={(event) => this.handleChangeFast(event.target.value)}
                    />
                    <label htmlFor="fastest">Fastest</label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        option: state.select.option
    };
};

export default connect(mapStateToProps, {
    changeOption
})(SelectFrom)