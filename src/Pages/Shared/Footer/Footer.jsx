

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-900 text-white">
  <aside>
    <img className=" rounded-full max-h-20 " src="../../../../public/pklogo.jpg " alt="" />
    <p>PK SoundWave Emporium Ltd.<br/>Providing reliable tech since 2000</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Device Sales</a>
    <a className="link link-hover">Online Payment</a>
    <a className="link link-hover">user friendly </a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  
  )
}
