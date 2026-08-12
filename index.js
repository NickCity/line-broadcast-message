import * as core from '@actions/core';

async function run() {
  try {
    const token = core.getInput('channel_access_token');
    const message = core.getInput('message');

    const messages = [
      {
        type: 'text',
        text: message,
      },
    ]

    const response = await fetch('https://api.line.me/v2/bot/message/broadcast', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages,
      }),
    });

    const data = await response.text();
    console.log(data);

    if (!response.ok) {
      let errorMessage = data;
      try {
        errorMessage = JSON.parse(data).message || data;
      } catch {}
      core.setFailed(errorMessage || `LINE API request failed with status ${response.status}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

await run();
