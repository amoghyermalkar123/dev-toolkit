import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'


export default function SnapshotExample() {
  return (
    <div className="h-full">
      <Tldraw persistenceKey="pkey" />
    </div>
  )
}

