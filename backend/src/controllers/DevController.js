const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response) {
        console.log(request.body);
        const { github_username, techs, zipCode } = request.body;

        const zipCodeApiResponse = await axios.get(`http://www.cepaberto.com/api/v3/cep?cep=${zipCode}`, { headers: { "Authorization": "Token token=YOUR_AUTHORIZATION, TOKEN" } })
        const latitude = zipCodeApiResponse.data.latitude;
        const longitude = zipCodeApiResponse.data.longitude;
        
        let dev = await Dev.findOne({ github_username });
    
        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = github_username, avatar_url, bio } = apiResponse.data;
            const techsArray = parseStringAsArray(techs);
            console.log(name, avatar_url, bio, github_username, techsArray);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }

        return response.json(dev);
    }

    // TODO: update e delete
};