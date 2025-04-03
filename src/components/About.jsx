// import React, { useState } from 'react'

const About = (props) => {
  // const [myStyle, setMyStyle ] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'

  }


  // const [btnText, setbtnText] = useState("Enable Dark Mode");
  // const [className, setclassName] = useState("btn btn-dark my-3")

  // function toggleStyle () {
  //   if(myStyle.color === 'white'){
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //     })
  //     setbtnText("Enable Dark Mode");
  //     setclassName("btn btn-dark my-3");
  //   }else{
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //     })
  //     setbtnText("Enable Light Mode");
  //     setclassName("btn btn-primary my-3");
  //   }
  // }
    return (
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className='my-3'>About Us</h1>
          <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <strong> Analyze Your text</strong>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                      textUtils gives yu a way to analyze your text quickly and efficiently, Be it word count, character count or 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <strong>Free to use</strong>
                      
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                      TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. thus it is suitable for writing text word/ character limit.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <strong>Browser Compatible</strong>
                      
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                      This word counter software works in any web browsers such as Chrome, FireFox, Internet Exlorer, Brave, Safari, Open. It suits to count character in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                  </div>
                </div>
            </div> 
            {/* <div className="container">
              <button
              onClick={toggleStyle}
              type="button" className={className} >{btnText}</button>
            </div> */}
      </div>
    );
};

export default About;