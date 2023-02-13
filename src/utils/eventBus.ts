import EventBus from 'js-event-bus';

export const createEventBus = <E extends string>() => {
  const bus = new EventBus();

  const subscribeEvent = <CallbackPayload>(
    event: E,
    callback: (payload: CallbackPayload) => void,
  ) => { bus.on(event, callback); };

  const unsubscribeEvent = (
    event: E,
    callback: (...args: any[]) => void,
  ) => { bus.detach(event, callback); };

  const emitEvent = <EventPayload>(
    event: E,
    payload: EventPayload | undefined,
  ) => { bus.emit(event, null, payload); };

  return {
    bus,
    subscribeEvent,
    unsubscribeEvent,
    emitEvent,
  };
};
