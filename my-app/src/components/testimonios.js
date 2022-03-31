import './testimonial.css'

export default function Testimonios(){
    
    return(
        <div className="testimonial-card">
        <div className="cards">
          <div className="card">
            <div className="card-header" id="card-header">
            </div>
            <div className="card-body" id="card-body">
              <div className="card__quote">
                <p className="card__paragraph" id="paragraph">
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="controls">
          <div className="circle-controller active" data-id={0} />
          <div className="circle-controller" data-id={1} />
          <div className="circle-controller" data-id={2} />
        </div>
      </div>
    )
}