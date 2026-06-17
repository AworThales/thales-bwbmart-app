import * as amplitude from "@amplitude/analytics-browser";

const API_KEY = "54a139f943ccb7d57016f0bd3cab82d0";

const init = () => {
  amplitude.init(API_KEY);
};

const track = (eventName, properties = {}) => {
  amplitude.track(eventName, properties);
};

export default {
  init,
  track,
};