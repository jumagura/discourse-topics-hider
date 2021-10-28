import { h } from "virtual-dom";
import { withPluginApi } from "discourse/lib/plugin-api";
import { wantsNewWindow } from "discourse/lib/intercept-click";
import DiscourseURL from "discourse/lib/url";

export default {
  name: "discourse-topics-hider",
  initialize() {
    withPluginApi("0.8.20", (api) => {
      console.log("I am ", api.getCurrentUser().username);
      // settings.category_boxes.forEach((cat) => {
      //   console.log(cat);
      // });
      console.log(settings.category_boxes);
      console.log(typeof settings.category_boxes);
    });
  },
};
