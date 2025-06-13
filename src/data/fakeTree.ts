export interface TreeNode {
  id: string;
  text: string;
  probability: number;
  children?: TreeNode[];
}

// Utility to build a single linear path of `depth` nodes. Each node only has
// one child so traversal is instantaneous.
function buildPath(prefix: string, depth: number): TreeNode {
  const root: TreeNode = {
    id: `${prefix}-1`,
    text: `Path ${prefix} - Level 1`,
    probability: 1,
    children: []
  };
  let current = root;
  for (let i = 2; i <= depth; i++) {
    const next: TreeNode = {
      id: `${prefix}-${i}`,
      text: `Path ${prefix} - Level ${i}`,
      probability: 1,
      children: []
    };
    current.children = [next];
    current = next;
  }
  // Last node should not have children to signal the end of the path.
  delete current.children;
  return root;
}

// Five hard coded paths, each 25 levels deep.
export const fakeTree: TreeNode = {
  id: 'root',
  text: 'GPT-5 launches next year',
  probability: 1,
  children: [
    buildPath('A', 25),
    buildPath('B', 25),
    buildPath('C', 25),
    buildPath('D', 25),
    buildPath('E', 25)
  ]
};
