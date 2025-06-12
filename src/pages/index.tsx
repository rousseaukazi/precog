import TreeExplorer from '../components/TreeExplorer';
import { fakeTree } from '../data/fakeTree';

export default function Home() {
  return (
    <main>
      <TreeExplorer tree={fakeTree} />
    </main>
  );
}
