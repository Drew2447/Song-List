import React from 'react'
import { Form } from 'semantic-ui-react'


class SongForm extends React.Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
  
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Song' placeholder='song' />
          <Form.Input fluid label='Band' placeholder='band' />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default SongForm;