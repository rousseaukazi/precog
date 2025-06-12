import TreeExplorer from '../components/TreeExplorer';
import { fakeTree } from '../data/fakeTree';

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <TreeExplorer tree={fakeTree} />
    </main>
  );
}
