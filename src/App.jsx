import { useEffect, useState } from 'react'

function App() {
  const [text, setText] = useState('');
  const [images, setImages] = useState('');
  let urls = [];

  const fetchData = async(text) => {
    const promise = await fetch('https://api.unsplash.com/search/photos?per_page=12&query='+text+'&client_id=nDVGplkkMEoSwSk1i140zjqISvjoULVjs0DcpC_plfU')
    const response = await promise.json();


    // GET ARRAY OF IMAGE URLS
    urls = [];
    response.results.forEach(result => {
      urls.push(result.urls.raw);
    });
    setImages(
      urls.map((url_img) => (
        <div className='img' style={{backgroundImage: `url(${url_img})`}}></div>
      ))
    );
  }

  return (
    <>
      <header className="header">
        <h1 className='text'>Image Search</h1>
        <input
          type="text"
          className='search' 
          onChange={(event) => {
            setText(event.target.value);
          }}
          placeholder='For example: office'
        />
        <button className='btn' onClick={() => fetchData(text)}>Search</button>
      </header>
      <hr />
      <div className="imgs">
        {images}
      </div>
    </>
  )
}

export default App
