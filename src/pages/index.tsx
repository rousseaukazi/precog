import TreeExplorer from '../components/TreeExplorer';
import { fakeTree } from '../data/fakeTree';

export default function Home() {
  return (
    <main className="p-8">
      <TreeExplorer tree={fakeTree} />
    </main>
  );
}
