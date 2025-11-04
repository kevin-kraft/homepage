// ThreeViewer.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1.5} />;
}

export default function ThreeViewer({
  modelPath = "../assets/models/model.glb",
  height = "500px",
}: {
  modelPath?: string;
  height?: string;
}) {
  return (
    <div style={{ width: "100%", height, background: "#111" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <Model path={modelPath} />
          <OrbitControls enableZoom />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}