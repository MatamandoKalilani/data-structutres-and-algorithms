import verbalize from "./verbalizer";
import binarySearch from "./binary-search";

// Main Function
(() => {
  console.log("Started");

  verbalize({
    func: binarySearch,
    args: [{ list: [2, 4, 6, 8, 12, 14, 56,  80, 90], item: 80 }],
  });

  console.log("Finished");
})();
