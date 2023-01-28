import React from 'react'
import { marked } from 'marked';



class markdown extends React.Component {

  state = {
    text: ''
  }


  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
      const { text } = this.state;
      const markdown = marked(text);
    return (
      
      <>
      <div>
        <h2 className="text-center mt-4 ">Convert your Markdown</h2>

        <div className="row">
          <div className="col-6">
            <h5>Enter your Markdown Here: </h5>
            <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange} />
          </div>
          <div className="col-6" id="preview">
            <h5 className="text-center">Result </h5>
            <div className="preview rounded p-2" dangerouslySetInnerHTML={{ __html: markdown}} />


          </div>
        </div>
        </div>
       </>
       
    );
  }
}

export default markdown;