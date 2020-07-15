// Copyright (C) 2020 Jonathan Dean, All Rights Reserved
'use strict';

import Express from 'express';
import Result from '../../lib/Result';
import Player from '../model/Player';

// Router from expreess
const Router = Express.Router();

const TEAM_A = [];

// Get background images
Router.post('/login', (request, response) =>{
    let params = { ...request.params, ...request.query, ...request.body }
    let resp = new Result();
    console.log(params);
    let value = request.body.name;

    let player = new Player(value);

    TEAM_A.push( player );

    resp.ok();
    
    response.send(resp.serialize());
});

// Get background images
Router.post('/set_team_role', (request, response) =>{
    let params = { ...request.params, ...request.query, ...request.body }
    let resp = new Result();

    let value = request.body.name;
    resp.payload = params;
    let player = new Player(value);

    TEAM_A.push( player );
    
    resp.ok();
    
    response.send(resp.serialize());
});

export default Router;