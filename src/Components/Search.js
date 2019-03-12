import { Button, Form , Columns} from 'react-bulma-components/full';
import React from 'react';
import { connect } from 'react-redux';
import { AddressFromInput,fetchWithThunk } from '../Actions/GeoCode/geoCode_actions';


const Search = (props) => {
    return (
      <div>
        <Columns>
          <Columns.Column className="Column is-9">
            <Form.Input
              className="input  is-medium is-primary is-small is-rounded is-hovered"
              type="text"
              id="outlined-name"
              placeholder="Enter Address Here"
              name="address"
              value={props.Geocode.address}
              onChange={(e) => {
                (props.AddressFromInput(e.target.value))
              }}
            />
          </Columns.Column>
          <Columns.Column className="Column is-1">

          </Columns.Column>
          <Columns.Column className="Column is-2">
            {props.Geocode.geoFetching ? <Button className=".button is-medium is-primary is-rounded is-loading is-fullwidth"
              onClick={() => props.fetchWithThunk(props.Geocode.address)}></Button> :
              <Button className=".button is-medium is-primary is-rounded is-fullwidth "
                onClick={() => props.fetchWithThunk(props.Geocode.address)}>
                GO
            </Button>
            }
          </Columns.Column>
        </Columns>
      </div>

    )
}

const mapActionsToProps = ({
  AddressFromInput,
  fetchWithThunk
})

const mapStateToProps = state => ({ Geocode : state.Geocode })

export default connect(mapStateToProps,mapActionsToProps)(Search);
