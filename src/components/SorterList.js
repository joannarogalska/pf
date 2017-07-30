import React, {Component} from 'react';
import {connect} from 'react-redux';

class SorterList extends Component {

    createDataForList(){
        let departureList = this.props.tripDetails.deals.filter((deal) => {
            return deal.departure === this.props.departure;
        });

        let arrivalList = departureList.filter((deal) => {
            return deal.arrival === this.props.arrival;
        });

        var data = [];

        if(this.props.option === 'cheapest'){
            let arrayCost = [];

            arrivalList.forEach((value) => {
                arrayCost.push(value.cost);
            });

            arrayCost.sort(function (a, b) {
                return parseFloat(a) - parseFloat(b);
            });

            data = arrivalList.filter((value) => {
                return value.cost === arrayCost[0];
            });
        }
        else if(this.props.option === 'fastest'){
            let arrayTime = [];
            arrivalList.forEach((value) => {
                let time = parseFloat(value.duration.h * 60) + parseFloat(value.duration.m);
                arrayTime.push(time);
            });

            arrayTime.sort(function (a, b) {
                return parseFloat(a) - parseFloat(b);
            });

            data = arrivalList.filter((value) => {
                let time = parseFloat(value.duration.h * 60) + parseFloat(value.duration.m);
                return time === arrayTime[0];
            });

        }

        return data;
    }

    render() {

        return (
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <table className="table table-condensed">
                        <tbody>
                        {this.createDataForList().map((value,id) =>
                        <tr key={id} className="success">
                            <td>
                                <div className="header">{value.departure} > {value.arrival}</div>
                                <div className="italic">
                                    <span>{value.transport}</span>
                                    <span>{value.reference}</span>
                                    <span>for {value.duration.h}h{value.duration.m}</span>
                                </div>
                            </td>
                            <td className="header">{value.cost} {this.props.tripDetails.currency}</td>
                        </tr>
                        )}
                        </tbody>
                    </table>
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

export default connect(mapStateToProps)(SorterList)