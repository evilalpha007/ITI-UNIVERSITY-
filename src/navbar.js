import React , {useState}from   'react';


const Navbar =()=> {

const [show ,setShow]= useState (false);

return (
<>
<section className="navbar-bg">
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#">ITI Governance
    <img src=""/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  onClick={() => setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
       
        <li class="nav-item">
       
          <a class="nav-link" href="#">services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form class="d-flex">
        
        <button class="btn-style btn-outline-success" type="submit">log in </button>
        <button class="btn-style btn-outline-success" type="submit">Sign up </button>
      </form>
    </div>
  </div>
</nav>
</section>
</>

)


}

export default Navbar;