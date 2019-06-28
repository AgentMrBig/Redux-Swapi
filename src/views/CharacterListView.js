import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from "../actions";
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  
`

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  height: 50px;
  margin: 200px;

`

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <Message>Looking for Star Wars characters!</Message>
      )
    }
    return (
      <ListWrapper className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </ListWrapper>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);
