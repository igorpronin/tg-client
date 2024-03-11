const axios = require('axios');

type Params = {
  token: string
  admin_id: number
  env: string
}

export class Telegram {
  private token: string;
  private api_url: string;
  private admin_id: number;
  private env: string;

  constructor(params: Params) {
    const {token, admin_id, env} = params;
    this.api_url = `https://api.telegram.org/bot${token}`;
    this.token = token;
    this.admin_id = admin_id;
    this.env = env;
  }

  public async send_message(chat_id: number, msg: string, is_env_msg?: boolean): Promise<any> {
    let text = msg;
    if (is_env_msg) {
      text += `\n===\nEnvironment: ${this.env}`;
    }
    return axios.post(`${this.api_url}/sendMessage`, {
      chat_id,
      text
    })
  }

  public async send_message_to_admin(msg: string, is_env_msg?: boolean): Promise<any> {
    return this.send_message(this.admin_id, msg, is_env_msg);
  }
}

