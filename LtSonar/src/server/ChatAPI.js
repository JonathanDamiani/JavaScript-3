// Copyright (C) 2020 Jonathan Dean, All Rights Reserved
'use strict';

import Express from 'express';
import Result from '../../lib/Result';
import ChatInfo from '../model/ChatInfo';

// Router from expreess
const Router = Express.Router();

// Get background images
Router.get('/:teamId', (request, response) => {

    let resp = new Result();
    

    resp.ok();
    response.send(resp.serialize());
});

// Get background images
Router.post('/say', (request, response) => {

    let resp = new Result();
    

    resp.ok();
    response.send(resp.serialize());
});
export default Router;