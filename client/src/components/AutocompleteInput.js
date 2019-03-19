import React, {Component} from 'react';
import { Autocomplete }   from 'material-ui';

class MaterialUIAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.state = {
      dataSource : [],
      inputValue : ''
    }
  }

  onUpdateInput(inputValue) {
  }

  render() {
    return <AutoComplete
            dataSource    = {this.state.dataSource}
            onUpdateInput = {this.onUpdateInput} />
  }
}

export default MaterialUIAutocomplete;