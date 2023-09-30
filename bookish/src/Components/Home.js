import React from 'react';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div className='homeParentCards'>
        <div className="homeChildCards"><img /><div></div> </div>
        <div className="homeChildCards"><img /><div></div> </div>
        <div className="homeChildCards"><img /><div></div> </div>
        <div className="homeChildCards"><img /><div></div> </div>
        <div className="homeChildCards"><img /><div></div> </div>
        <div className="homeChildCards"><img /><div></div> </div>
        <div className="homeChildCards"><img /><div></div> </div>
        <div className="homeChildCards"><img /><div></div> </div>
        <div className="homeChildCards"><img /><div></div> </div>
        <div className="homeChildCards  clickForMore">click here for more</div>
      </div>

    </Fragment>
  )
}

export default Home;
