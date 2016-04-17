import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router'

export const Landing = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      <h1>Hello</h1>
      <p>Welcome this is the landing page</p>
       <Link to="/results" className="btn btn-primary">Go to results</Link>
    </div>;
  }
});
