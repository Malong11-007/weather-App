import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { AddressFromInput,fetchGetRequest } from '../Actions/GeoCode/geoCode_actions';


const Search = (props) => {

  // onButtonClick = (e) => {
  //
  //   this.props.fetchGetRequest()
  //   this.props.AddressFromInput(this.state.address)
  // }


    console.log(props)
    return (
      <div>
        <input
        type="text"
          id="outlined-name"
          placeholder="Enter Address Here"
          name="address"
          value={props.Geocode.address}
          onChange={(e) => {
            (AddressFromInput(e.target.value))
          }}
        />
        <button onClick={fetchGetRequest}>GO</button>
      </div>
    )

}

const mapActionsToProps = ({
  AddressFromInput : (e) => AddressFromInput(e),
  fetchGetRequest
})

const mapStateToProps = state => ({ Geocode : state.Geocode })

export default connect(mapStateToProps,mapActionsToProps)(Search);
