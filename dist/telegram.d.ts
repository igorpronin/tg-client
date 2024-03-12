type Params = {
    token: string;
    admin_id: number;
    env: string;
};
export declare class Telegram {
    private token;
    private api_url;
    private admin_id;
    private env;
    constructor(params: Params);
    send_message(chat_id: number, msg: string, is_env_msg?: boolean): Promise<any>;
    send_message_to_admin(msg: string, is_env_msg?: boolean): Promise<any>;
}
export {};
