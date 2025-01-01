const core = require('@actions/core');
const request = require('request');

try {
  const token = core.getInput('channel_access_token');
  const message = core.getInput('message');

  const messages = [
    {
      type: 'text',
      text: message,
    },
  ]

  request.post('https://api.line.me/v2/bot/message/broadcast', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages,
    }),
  })
  .on('response', function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log(data);
      if (response.statusCode !== 200) {
        core.setFailed(data.message);
      }
    });
  });
} catch (error) {
  core.setFailed(error.message);
}
