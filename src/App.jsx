import React from 'react'
import Cookies from 'universal-cookie';
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react';

import './App.css'
import { ChannelContainer, ChannelListContainer, Auth } from './components';

// API KEYS 
const apiKey = process.env.REACT_APP_STREAM_API_KEY

const client = StreamChat.getInstance(apiKey)

const authToken = false;

const App = () => {

    if (!authToken) return <Auth />

    return (
        <div className="app__wrapper" >
            <Chat client={client} theme="team light" >
                <ChannelListContainer

                />
                <ChannelContainer

                />
            </Chat>
        </div>
    )
}

export default App;
