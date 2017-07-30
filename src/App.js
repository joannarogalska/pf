import React, {Component} from 'react';
import TripSorter from './components/TripSorter';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-6">
                            <TripSorter/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
