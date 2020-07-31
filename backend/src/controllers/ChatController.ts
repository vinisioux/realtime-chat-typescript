import { Request, Response } from 'express';

import SendMessageChatService from '../services/SendMessageChatService';
import ShowMessagesChatService from '../services/ShowMessagesChatService';

class ChatController {
  async index(request: Request, response: Response) {
    const showMessagesChatService = new ShowMessagesChatService();

    const messages = await showMessagesChatService.execute();

    return response.status(200).json(messages);
  }

  async store(request: Request, response: Response) {
    const { content } = request.body;

    const sendMessageChat = new SendMessageChatService();

    const message = await sendMessageChat.execute({
      user_id: request.user.id,
      content,
    });

    return response.status(200).json(message);
  }
}

export default ChatController;
