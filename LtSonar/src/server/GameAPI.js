// Copyright (C) 2020 Jonathan Dean, All Rights Reserved
'use strict';

import Express from 'express';
import Result from '../../lib/Result';
import GameModel from '../model/GameModel';

// Router from expreess
const Router = Express.Router();

// Get background images
Router.post('/teamTurn', (request, response) => {

    let resp = new Result();
    

    resp.ok();
    response.send(resp.serialize());
});

export default Router;