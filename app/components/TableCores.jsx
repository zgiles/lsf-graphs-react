import React, {PropTypes} from 'react';

let TableCores = ({ data, title, subject }) => {

  function arrow(n) {
    if(n > 0) {
      return [ (<i key={n} className="fa fa-arrow-up" style={{ color: 'green' }}></i>), n ];
    } else {
      if(n < 0) {
        return [ (<i key={n} className="fa fa-arrow-down" style={{ color: 'red' }}></i>), n ];
      } else {
        return [ (<i key={n} style={{ color: 'orange' }}>{ '\u2014' }</i>) ];
      }
    }
  }


  function rows(n) {
    let x = [];
    for (let i = 0; i < ( n < data.length ? n : data.length ) ; i++) {
      x.push( <tr key={i}><th scope="row">{i+1}</th><td>{data[i].longname}</td><td>{data[i].cores}</td><td>{ arrow(data[i].diff) }</td></tr> );
    }
    return x;
  }

  return (
    <table className="table table-condensed">
      <caption className="text-center"><h4>{title}</h4></caption>
      <thead><tr><th className="col-md-1">Rank</th><th>{subject}</th><th className="col-md-1">Cores</th><th className="col-md-1"></th></tr></thead>
      <tbody>
        { rows(5) }
      </tbody>
    </table>
  );

}


TableCores.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
  subject: PropTypes.string
}

export default TableCores
