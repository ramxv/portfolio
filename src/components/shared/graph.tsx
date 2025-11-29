"use client";
import dynamic from "next/dynamic";
const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
});

const data = {
  nodes: [{ id: "A" }, { id: "B" }, { id: "C" }],
  links: [
    { source: "A", target: "B" },
    { source: "B", target: "C" },
  ],
};

export default function Graph3D() {
  return (
    <div style={{ height: 500 }}>
      <ForceGraph3D
        graphData={data}
        nodeAutoColorBy="id"
        linkOpacity={0.3}
        linkWidth={1}
        nodeThreeObjectExtend
        // Ejemplo: nodos como esferas
        nodeThreeObject={(n) => {
          const THREE = require("three");
          const geo = new THREE.SphereGeometry(3, 16, 16);
          const mat = new THREE.MeshStandardMaterial({ color: n.color });
          return new THREE.Mesh(geo, mat);
        }}
      />
    </div>
  );
}
