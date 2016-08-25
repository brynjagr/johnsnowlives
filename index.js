var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
app.set('port', (process.env.PORT || 5000));

app.post('/spoiler', function (req, res) {
    var userName = req.body.user_name;
    var spoilerText = req.body.text;
    var responseUrl = req.body.response_url;

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();

    request({
        url: responseUrl,
        method: 'POST',
        json: {
            response_type: 'in_channel',
            attachments: [{
                text: `${username} posted a spoiler.\nDo you want to show it?`,
                callback_id: 'wopr_game',
                color: '#3AA3E3',
                attachment_type: 'default',
                actions: [
                    {
                        name: war,
                        text: Thermonuclear War,
                        style: danger,
                        type: button,
                        value: war,
                    }
                ]
            }]
        }
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
        }
    });
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
