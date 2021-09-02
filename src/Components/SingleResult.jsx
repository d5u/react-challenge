const SingleResult = ({ politician }) => {
  return (
  <div key={politician.name} className='single-result'>
    <div>
      <a href={politician.link} rel='politician-site-link'>
        <span>{politician.name}</span>
      </a>
    </div>
    <div className='state'>
      <span>State: {politician.state}</span>
    </div>
    <div className='party'>
      <span>Party: {politician.party}</span>
    </div>
    <div className='phone-number'>
      <span>Phone: {politician.phone}</span>
    </div>
    <div className='office'>
      <span>Office: {politician.office}</span>
    </div>
  </div>
 )
}

export default SingleResult;
