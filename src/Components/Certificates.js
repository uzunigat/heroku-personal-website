import React, { Component } from 'react';

class Certificates extends Component {
  render() {

    console.log(this.props.data)
    if(this.props.data){
        var certificates = this.props.data.certificates.map(function(certificate){
          let projectImage = 'images/certificates/'+certificate.image;
            return <div key={certificate.title} className="columns portfolio-item">
                        <div className="item-wrap">
                        <a href={certificate.url} title={certificate.title}>
                            <img alt={certificate.title} src={projectImage} />
                            <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>{certificate.title}</h5>
                            </div>
                            </div>
                        </a>
                    </div>
                    </div>

        });

      }

      return (
        <section id="certificates">
  
        <div className="row">
  
           <div className="twelve columns collapsed">
  
              <h1>Check Out my certificates.</h1>
  
              <div id="certificates-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  {certificates}
              </div>
            </div>
        </div>
     </section>
      );
  }

}


export default Certificates;