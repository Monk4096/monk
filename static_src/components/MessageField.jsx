import React from 'react';
import Message from './Message'

export default class MessageField extends React.Component {
    state = {
        messages: ['mes1', 'mes2', 'mes3'],
    };

    // componentDidMount() {
    //     const newMessages = [...this.state.messages, 'mess'];
    //     setTimeout(() => this.setState({ messages: newMessages }), 1000)
    // }

    componentDidUpdate(prevProps, prevState) {
        let lastEl = this.state.messages[this.state.messages.length - 1];
        if (lastEl !== 'сообщение отправлено') {
        const newMessages = [...this.state.messages, 'сообщение отправлено'];
        setTimeout(() => this.setState({ messages: newMessages }), 1000)
        }
    }

    handleClick = () => {
        let userMess = document.getElementById('test');
        if (userMess.value !== ''){
            const newMessages = [...this.state.messages, userMess.value];
            this.setState({ messages: newMessages });
        }
        userMess.value = '';
    };

    render() {
        const messages = this.state.messages.map((message, index) =>
            <Message key={ index } text={ message } />
        );

        return (
            <div>
                { messages }
                <input type="text" id="test" placeholder="ваше сообщение!"/>
                <input type="submit" onClick={ this.handleClick }/>
            </div>
        )
    }
}
