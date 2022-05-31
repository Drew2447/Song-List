import React from "react";
import { Table, Button} from "semantic-ui-react";


class Songs extends React.Component {
  renderSongs = () => {
    console.log(this.props)
    return this.props.songs.map((c) => (
      <Song deleteSong={this.props.deleteSong} key={c.id} {...c} />
    ));
  };
  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Song</Table.HeaderCell>
            <Table.HeaderCell>Album</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{this.renderSongs()}</Table.Body>
      </Table>
    );
  }
}
class Song extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.song}</Table.Cell>
        <Table.Cell>{this.props.album}</Table.Cell>
        <Table.Cell>
          <Button
            color="red"
            onClick={() => this.props.deleteSong(this.props.id)}
          >
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default Songs;