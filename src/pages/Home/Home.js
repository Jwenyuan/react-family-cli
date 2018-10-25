import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleCountDownClick = () => {
        this.setState({
            count: this.state.count++
        });
        console.log(124);
        console.log(this.state.count);
    }
    render() {
        return (
            <div>
                我是首页，当前倒计时：{this.state.count}<br/>
                <button onClick={this.handleCountDownClick}>增加</button>
            </div>
        );
    }
}