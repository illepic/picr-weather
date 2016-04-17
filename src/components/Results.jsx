import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import moment from 'moment';
import * as actionCreators from '../action_creators';

// "Dumb" component
export const Results = React.createClass({
  mixins: [PureRenderMixin],
  getTime: function() {
    console.log(this.props.currently.get('time'));
    return moment.unix(this.props.currently.get('time')).format('MMMM D, YYYY');
  },
  render: function() {
    return <div>
      <h1>Forecast results page</h1>
      <h3>Coordinates: {this.props.lat}, {this.props.lon}</h3>
      <div className="well">
        <span>Summary: {this.props.currently.get('summary')} </span>
        <span className="badge">{this.props.currently.get('temperature')}° </span>
        <span> at {this.getTime()}</span>
      </div>


      <h2>Testing non-CORS api below</h2>
      <ul>
      {this.props.results.map(result =>
        <li key={result.get('id')}>{result.get('title')}</li>
      )}
      </ul>
      <button ref="next"
              className="btn btn-default"
              onClick={this.props.dostuff}>
        Do thing
      </button>
      <Link to="/" className="btn btn-primary">Back to landing</Link>
    </div>
  }
});

function mapStateToProps(state) {
  return {
    results: state.get('results'),
    lat: state.get('lat'),
    lon: state.get('lon'),
    currently: state.get('currently')
  };
}

// "Connected" component, NOTE: any action_creators with same name as props
// are automatically lined up!
export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
