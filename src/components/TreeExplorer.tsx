'use client';
import { useEffect, useState, useCallback } from 'react';
import { TreeNode } from '../data/fakeTree';
import styles from './TreeExplorer.module.css';

interface Props {
  tree: TreeNode;
}

export default function TreeExplorer({ tree }: Props) {
  const [path, setPath] = useState<TreeNode[]>([tree]);
  const [choices, setChoices] = useState<number[]>([]);

  const current = path[path.length - 1];
  const children = current.children || [];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      const index = parseInt(e.key, 10) - 1;
      if (!isNaN(index) && children[index]) {
        setChoices([...choices, index]);
        setPath([...path, children[index]]);
      }
    },
    [children, path, choices]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return (
    <div className={styles.wrapper}>
      <h1>Future Tree Explorer</h1>
      <div className={styles.path}>
        {path.map((node, idx) => (
          <div key={node.id}>
            <div className={styles.node}>
              <span className={styles.nodeText}>{node.text}</span>
            </div>
            {idx < choices.length && (
              <div className={styles.branches}>
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`${styles.branch} ${
                      i === choices[idx] ? styles.active : ''
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="children">
        {children.length === 0 && <p>No further branches.</p>}
        {children.map((child, idx) => (
          <div key={child.id} className="child">
            <div>
              <strong>{idx + 1}. {child.text}</strong>
            </div>
            <div className="prob">Probability: {child.probability}</div>
          </div>
        ))}
      </div>
      {children.length > 0 && (
        <p className="hint">Press the number key corresponding to a branch to follow it.</p>
      )}
    </div>
  );
}
