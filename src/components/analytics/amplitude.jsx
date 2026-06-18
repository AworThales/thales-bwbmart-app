import * as amplitude from "@amplitude/analytics-browser";

const API_KEY = "a605fae0b0717fc21b6b13e477f56407";

const init = () => {
  amplitude.init(API_KEY, {
    defaultTracking: true,
  });
};

const track = (eventName, properties = {}) => {
  amplitude.track(eventName, properties);
};

export default {
  init,
  track,
};