import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTransportDetails} from '../actions/app';
import SelectFrom from './SelectFrom';
import SelectTo from './SelectTo';
import Options from './Options';
import SorterList from './SorterList';
import ResetButton from './ResetButton';

class TripSorter extends Component {

    componentWillMount() {
        this.props.fetchTransportDetails();
    }

    render() {
        return (
            <section className="">
                <form>
                    <h1>TripSorter</h1>

                    {this.props.tripDetails && <SelectFrom/>}

                    {this.props.tripDetails && <SelectTo/>}

                    <Options/>

                    {this.props.tripDetails && this.props.departure && this.props.arrival &&  <SorterList/>}

                    <ResetButton />

                </form>
            </section>
        );
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
    fetchTransportDetails
})(TripSorter)