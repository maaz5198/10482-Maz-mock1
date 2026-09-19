import React from 'react'

const App = () => {
  return (
    <div>
      <div className='container  p-5'>
        <form>
            <div className='text-center'>
                <h1>Register</h1>
            </div>
            <div className="m-4">
    <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputusername1" />
  </div>
  <div className="m-4">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="m-4">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="m-4">
    <label htmlFor="exampleInputPassword1" className="form-label">Conform Password</label>
    <input type="password" className="form-control" id="exampleInputconformPassword1" />
  </div>
  <div className='mb-5'>

    <a href="./Login.jsx">aready have an accunt</a>
  </div>
  

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>

    </div>
  )
}

export default App
