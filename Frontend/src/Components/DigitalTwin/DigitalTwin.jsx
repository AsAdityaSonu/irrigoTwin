import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AxesHelper } from "three";
import * as THREE from "three";

function DigitalTwin() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:ml-64 flex flex-col space-y-6">
      <div className="p-4 border-2 border-gray-200 rounded-lg shadow-lg bg-gray-50">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-4">
          Digital Twin: Tree with Sensors
        </h2>
        <p className="text-center text-gray-700 text-lg">
          This 3D tree represents the integration of environmental sensors:
          Temperature and Humidity.
        </p>

        <div className="flex justify-center items-center">
          <Canvas style={{ height: "80vh", width: "100%" }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {/* --- Objects --- */}
            <Stand />
            <HydroponicKit />

            {/* <HydroponicKit position={[-5, 0, 0]} /> 
            <HydroponicKit position={[5, 0, 0]} />   */}

            <OrbitControls />
            <axesHelper args={[10]} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

function Stand() {
  return (
    <>
      {/* Stand Base */}
      <mesh position={[-2.7, -1, 0]}>
        <boxGeometry args={[2.5, 0.5, 10]} />
        <meshStandardMaterial color="#FBD288" />
      </mesh>

      <mesh position={[2.7, -1, 0]}>
        <boxGeometry args={[2.5, 0.5, 10]} />
        <meshStandardMaterial color="#FBD288" />
      </mesh>

      {/* One stand */}
      <mesh
        position={[-3, -1, -4.9]}
        rotation={[0, 0, THREE.MathUtils.degToRad(-21.5)]}
      >
        <boxGeometry args={[0.5, 16.5, 0.3]} />{" "}
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh
        position={[3, -1, -4.9]}
        rotation={[0, 0, THREE.MathUtils.degToRad(21.5)]}
      >
        <boxGeometry args={[0.5, 16.5, 0.3]} />{" "}
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh
        position={[-3, -1, 4.9]}
        rotation={[0, 0, THREE.MathUtils.degToRad(-21.5)]}
      >
        <boxGeometry args={[0.5, 16.5, 0.3]} />{" "}
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh
        position={[3, -1, 4.9]}
        rotation={[0, 0, THREE.MathUtils.degToRad(21.5)]}
      >
        <boxGeometry args={[0.5, 16.5, 0.3]} />{" "}
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Stand Connector Up */}
      <mesh position={[0, 6.65, 0]}>
        <boxGeometry args={[0.7, 0.3, 10]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Stand Connector Down */}
      <mesh position={[0, -6, 0]}>
        <boxGeometry args={[0.7, 0.3, 10]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Stand Connector Left-Right */}
      <mesh position={[0, -6, 4.9]}>
        <boxGeometry args={[10, 0.3, 0.3]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[0, -6, -4.9]}>
        <boxGeometry args={[10, 0.3, 0.3]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </>
  );
}

function HydroponicKit() {
  return (
    <>
      <mesh position={[-2.7, 0, 0]}>
        <boxGeometry args={[2.1, 1.5, 9]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[2.7, 0, 0]}>
        <boxGeometry args={[2.1, 1.5, 9]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
}

export default DigitalTwin;
