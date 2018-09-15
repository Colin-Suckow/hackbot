import { Message } from 'discord.js';
import Command from '../library/command';

let Xmas: Command;

export default Xmas = class {

  static get description(): string {
    return 'Merry Christmas, ya filthy animals.';
  }

  public static execute(args: string[], msg: Message) {
    const { channel } = msg;
    const randomImage = 'https://giphy.com/gifs/foxhomeent-3o7TKLHb0PWRNnoVq0';
    channel.send(randomImage);
  }

};
