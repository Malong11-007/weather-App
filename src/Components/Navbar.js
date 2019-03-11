import React from 'react';
import { Navbar , Columns } from 'react-bulma-components/full';
import Search from './Search'

const Nvbar = () => {
  return (
    <div>
      <Navbar>
        <Columns.Column className="Column is-2">
          <h1 className="title is-5 is-primary" >Weather</h1>
          <h2 className="subtitle is-6">For Better Day</h2>
        </Columns.Column>
        <Columns.Column className="Column is-10">
          <Search></Search>
        </Columns.Column>
      </Navbar>
    </div>
  )
}

export default Nvbar;
