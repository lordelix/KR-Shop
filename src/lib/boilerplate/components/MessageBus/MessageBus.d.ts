import type { ComponentBaseProps } from '../../boilerplate.d';
import type { MessageBus } from './MessageBus';

export interface MessageBusProps extends ComponentBaseProps {
  messages: MessageBus.Store;
  blurDuration?: number;
}
