import * as React from "react";

import './App.scss';

export type IAppProps = {

};
type IAppState = {
  value?: string;
}
export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <>
        <div className="text-container">Test React</div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
