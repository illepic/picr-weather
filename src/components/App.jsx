import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="container">
      <div className="row">
        <div className="col-sm-12">
          {this.props.children}
        </div>
      </div>
    </div>;
  }
});
