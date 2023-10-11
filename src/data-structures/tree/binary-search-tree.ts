import { NodeDoublePointer } from "../../common/node-double-pointer";

class BinarySearchTree<N = number> {
  private _root: NodeDoublePointer<N> | null;

  constructor() {
    this._root = null;
  }

  insert(value: N) {
    const newNode = new NodeDoublePointer(value, null, null);

    if (!this.root) {
      this._root = newNode;
      return;
    }

    let nodeInQuestion = this.root;

    while (true) {
      if (value > nodeInQuestion.item) {
        if (nodeInQuestion.right) {
          nodeInQuestion = nodeInQuestion.right;
          continue;
        } else {
          nodeInQuestion.right = newNode;
          break;
        }
      }

      if (value < nodeInQuestion.item) {
        if (nodeInQuestion.left) {
          nodeInQuestion = nodeInQuestion.left;
          continue;
        } else {
          nodeInQuestion.left = newNode;
          break;
        }
      }
    }
  }

  lookUp(value: N): NodeDoublePointer<N> | null {
    if (!this.root) {
      return null;
    }

    let nodeInQuestion = this.root;

    while (true) {
      if (value === nodeInQuestion.item) {
        return nodeInQuestion;
      }

      if (value > nodeInQuestion.item) {
        if (nodeInQuestion.right) {
          nodeInQuestion = nodeInQuestion.right;
          continue;
        } else {
          return null;
        }
      }

      if (value < nodeInQuestion.item) {
        if (nodeInQuestion.left) {
          nodeInQuestion = nodeInQuestion.left;
          continue;
        } else {
          return null;
        }
      }
    }
  }

  //   Doesnt Work
//   remove(value: N): NodeDoublePointer<N> | null {
//     if (!this.root) {
//       return null;
//     }

//     let nodeInQuestion = this.root;
//     let nodeInQuestionParent = null;
//     while (true) {
//       if (value === nodeInQuestion.item) {
//         if (!nodeInQuestion.right) {
//           if (nodeInQuestionParent === null) {
//             this._root = nodeInQuestion.left;
//           } else {
//             if (nodeInQuestionParent.item > nodeInQuestion.item) {
//               nodeInQuestionParent.left = nodeInQuestion.left;
//             } else if (nodeInQuestionParent.item < nodeInQuestion.item) {
//               nodeInQuestionParent.right = nodeInQuestion.left;
//             }
//           }
//           return nodeInQuestion;
//         } else if (!nodeInQuestion.right.left) {
//         } else {
//         }

//         return nodeInQuestion;
//       }

//       if (value > nodeInQuestion.item) {
//         if (nodeInQuestion.right) {
//           nodeInQuestionParent = nodeInQuestion;
//           nodeInQuestion = nodeInQuestion.right;

//           continue;
//         } else {
//           return null;
//         }
//       }

//       if (value < nodeInQuestion.item) {
//         if (nodeInQuestion.left) {
//           nodeInQuestionParent = nodeInQuestion;
//           nodeInQuestion = nodeInQuestion.left;
//           continue;
//         } else {
//           return null;
//         }
//       }
//     }
//   }

  // Getters & Setters

  public get root(): NodeDoublePointer<N> | null {
    return this._root;
  }
}

export { BinarySearchTree };

// Took me 32 Mins to build - 11 October 2023 - 7:12 PM (CAT)
