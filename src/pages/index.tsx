import TreeExplorer from '../components/TreeExplorer';
import ThreeCanvas from '../components/ThreeCanvas';
import { fakeTree } from '../data/fakeTree';

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <ThreeCanvas />
      <TreeExplorer tree={fakeTree} />
    </main>
  );
}
