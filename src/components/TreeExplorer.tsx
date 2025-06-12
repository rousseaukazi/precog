'use client';
import { useEffect, useState, useCallback } from 'react';
import { TreeNode } from '../data/fakeTree';

interface Props {
  tree: TreeNode;
}

export default function TreeExplorer({ tree }: Props) {
  const [path, setPath] = useState<TreeNode[]>([tree]);

  const current = path[path.length - 1];
  const children = current.children || [];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      const index = parseInt(e.key, 10) - 1;
      if (!isNaN(index) && children[index]) {
        setPath([...path, children[index]]);
      }
    },
    [children, path]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Future Tree Explorer</h1>
      <div className="mb-4">
        {path.map((node, idx) => (
          <span key={node.id}>
            {idx > 0 && ' -> '} {node.text}
          </span>
        ))}
      </div>
      <div className="space-y-2">
        {children.length === 0 && <p>No further branches.</p>}
        {children.map((child, idx) => (
          <div key={child.id} className="border p-2 rounded">
            <div className="font-semibold">
              {idx + 1}. {child.text}
            </div>
            <div className="text-sm text-gray-600">Probability: {child.probability}</div>
          </div>
        ))}
      </div>
      {children.length > 0 && (
        <p className="mt-4 text-sm text-gray-500">
          Press the number key corresponding to a branch to follow it.
        </p>
      )}
    </div>
  );
}
