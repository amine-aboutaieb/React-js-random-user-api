import React from 'react'
import load from '../loading.gif'
import Table from './Table'


class FetchUser extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            loading: true,
            user: null
        }

    }

    sendRequest = () => {
        setTimeout(() => {
            const response = fetch('https://api.randomuser.me/');
            response.then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data.results[0]);
                this.setState({
                    user: data.results[0],
                    loading: false
                });
            })
        }, 2000);
    }

    componentDidMount() {
        this.sendRequest();
    }

    fetchUser = () => {
        this.setState({
            loading: true
        });
        this.sendRequest();
    }

    render() {
        return (
            <div>

                <h1 style={{ color: '#61dafb' }}>Fetching from API</h1>

                {this.state.loading ? <img src={load} width="100px" /> : <Table user={this.state.user} />}

                <button style={{ position: 'absolute', bottom: '5%', left: '44.5%', width: '10%', backgroundColor: '#61dafb', border: 'none', padding: '10px', fontWeight: 'bold', cursor: 'pointer' }} onClick={this.fetchUser}>Fetch</button>
            </div>
        );

    }

}

export default FetchUser;