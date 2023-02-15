import EventBus from 'js-event-bus';

export const createEventBus = <E extends string>() => {
  const bus = new EventBus();

  const unsubscribeEvent = (
    event: E,
    callback: (...args: any[]) => void,
  ) => { bus.detach(event, callback); };

  const subscribeEvent = <CallbackPayload>(
    event: E,
    callback: (payload: CallbackPayload) => void,
  ) => {
    bus.on(event, callback);

    return () => unsubscribeEvent(event, callback);
  };

  const emitEvent = <EventPayload>(
    event: E,
    payload: EventPayload | null,
  ) => {
    bus.emit(event, null, payload);
  };

  return {
    bus,
    subscribeEvent,
    unsubscribeEvent,
    emitEvent,
  };
};
