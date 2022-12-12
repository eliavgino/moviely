import React, { Component } from 'react';
class Movie extends Component {
    state = {  } 

    render() { 
        const{love,deleteme,loveme, myid,myname,mygener,myrating}=this.props;
        return (
            <tr>
                <th key={myid}>{myid}</th>
                <th key={myname}>{myname}</th>
                <th key={myrating}>{myrating}</th>
                <th key={mygener}>{mygener}</th>
                <th><button className="btn btn-danger btn-sm" 
                onClick={deleteme}>Delete</button></th>
                <th><i className={loveme} onClick={love} ></i></th>
            </tr>
            
        );
    }
}
 
export default Movie;