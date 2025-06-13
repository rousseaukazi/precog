export interface TreeNode {
  id: string;
  text: string;
  probability: number;
  children?: TreeNode[];
}

// Build a branching tree where each level exposes five choices. This keeps the
// data size reasonable while still allowing multiple branches to explore.
const BRANCHES = ['A', 'B', 'C', 'D', 'E'];

function buildBranch(prefix: string, level: number, maxDepth: number): TreeNode {
  const node: TreeNode = {
    id: `${prefix}-${level}`,
    text: `Path ${prefix} - Level ${level}`,
    probability: 1
  };

  if (level < maxDepth) {
    node.children = BRANCHES.map((letter) =>
      buildBranch(`${prefix}${letter}`, level + 1, maxDepth)
    );
  }

  return node;
}

// Five hard coded paths with five choices at each level (depth 5).
export const fakeTree: TreeNode = {
  id: 'root',
  text: 'GPT-5 launches next year',
  probability: 1,
  children: BRANCHES.map((letter) => buildBranch(letter, 1, 5))
};
