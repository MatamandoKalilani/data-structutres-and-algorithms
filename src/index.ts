import verbalize from "./verbalizer";
import binarySearch from "./binary-search";

// Main Function
(() => {
  console.log("Started");

  verbalize({
    func: binarySearch,
    args: [{ list: [2, 4, 6, 8, 9, 12, 14, 56], item: 12 }],
  });

  console.log("Finished");
})();
