/**
 * Created by 0easy-23 on 2017/9/1.
 * 路由配置（方便本地打包，使用了HashRouter）;
 * tips:开发环境下面使用了browserHistory，打包上线的时候需要服务器进行配置;
 */
import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';


import AlbumList from '../containers/Home/AlbumList';
import Player from '../containers/Play/Player'
import RankList from '../containers/Rank/RankList';
import Artist from '../containers/Artist/Artist';
import ArtistList from '../containers/Artist/ArtistList';
import ArtistSinger from '../containers/Artist/ArtistSinger';
import New from '../containers/New/New';
import Search from '../containers/Search/Search';
import Result from '../containers/Search/Result';
import Center from '../containers/User/Center';
import Love from '../containers/User/Love';
import NotFound from '../components/Common/NotFound';
import SingerInfo from '../components/Artist/SingerInfo';

const MyLoadingComponent = ({isLoading, error}) => {
    // Handle the loading state
    if (isLoading) {
      return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
      return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
      return null;
    }
  };

const Home  = Loadable({
    loader: () => import('../containers/Home/Index'),
    loading: MyLoadingComponent
});

const Login  = Loadable({
    loader: () => import('../containers/User/Login'),
    loading: MyLoadingComponent
});

const Album  = Loadable({
    loader: () => import('../containers/Home/Album'),
    loading: MyLoadingComponent
});

const Play  = Loadable({
    loader: () => import('../containers/Play/Play'),
    loading: MyLoadingComponent
});


const Rank  = Loadable({
    loader: () => import('../containers/Rank/Rank'),
    loading: MyLoadingComponent
});


//https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html
const Routes = () => (
    <div className="app">
        <Player/>
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/album/:id" component={Album}/>
                <Route path="/album" component={AlbumList}/>
                <Route path="/play" component={Play}/>
                <Route path="/rank" exact component={Rank}/>
                <Route path="/rank/list/:id" component={RankList}/>
                <Route path="/artist" exact component={Artist}/>
                <Route path="/artist/list/:id" exact component={ArtistList}/>
                <Route path="/artist/list/singer/:id" component={ArtistSinger}/>
                <Route path="/new" component={New}/>
                <Route path="/search" exact component={Search}/>
                <Route path="/search/result" component={Result}/>
                <Route path='/user/login' component={Login}/>
                <Route path="/user/center" component={Center}/>
                <Route path="/user/love" component={Love}/>
                <Route path="/singer/info" component={SingerInfo}/>
                <Route path='/404' component={NotFound} />
                <Redirect from='*' to='/404' />
            </Switch>
        </Router>
    </div>
);

export default Routes;