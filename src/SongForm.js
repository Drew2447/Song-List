import React from 'react'
import { Form } from 'semantic-ui-react'


class SongForm extends React.Component {
  state = {
    song: "",
    band: "",
  }

  //handleChange = (e, { value }) => this.setState({ value })
  handleSubmit = (e) => {
    console.log('click')
    this.props.addSong(this.state)
    this.setState({
      song: "",
      band: "",
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.song]: e.target.value
    })
  }
  render() {
  
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Song' 
          placeholder='song'
          value={this.state.song} 
          onChange={this.handleChange}/>
          <Form.Input fluid label='Band' placeholder='band' value={this.state.band} onChange={this.handleChange}/>
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default SongForm;