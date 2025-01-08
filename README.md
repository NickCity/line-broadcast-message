# LINE Broadcast Message
Because the LINE Notify service is deprecated on 2025-03-31, this action use [LINE Broadcast Message](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message) instead of LINE Notify.

## Usage
```yml
- uses: NickCity/line-broadcast-message@v1.0.0
  with:
    channel_access_token: ${{ secrets.LINE_CHANNEL_ACCESS_TOKEN }}
    message: some message
```

## Example
See [example.yml](.github/workflows/example.yml)
