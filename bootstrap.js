import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Bootstrap(props){
    return (
    
       
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{props.tag}</h5>
              <h6 className="card-price text-center">{props.price}<span class="period">/month</span></h6>
            <hr></hr> 
              <ul className="fa-ul">
                <li><span className={props.yes1}><i className="fas fa-check"></i></span>{props.cont1}</li>
                <li><span className={props.yes2}><i className="fas fa-check"></i></span>{props.cont2}</li>
                <li><span className={props.yes3}><i className="fas fa-check"></i></span>{props.cont3}</li>
                <li><span className={props.yes4}><i className="fas fa-check"></i></span>{props.cont4}</li>
                <li className={props.yes5}><span className="fa-li"><i className="fas fa-times"></i></span>{props.cont5}</li>
                <li className={props.yes6}><span className="fa-li"><i className="fas fa-times"></i></span>{props.cont6}</li>
                <li className={props.yes7}><span className="fa-li"><i className="fas fa-times"></i></span>{props.cont7}</li>
                <li className={props.yes8}><span className="fa-li"><i className="fas fa-times"></i></span>{props.cont8}</li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
        
     )
}

export default Bootstrap;