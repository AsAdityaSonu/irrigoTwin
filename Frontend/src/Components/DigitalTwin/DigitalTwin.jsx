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
          <Canvas style={{ height: "630px", width: "100%" }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {/* <Tree /> */}
            <Stand />
            {/* <HydroponicKit position={[-5, 0, 0]} /> 
            <HydroponicKit position={[5, 0, 0]} />   */}

            <OrbitControls />

            {/* Add AxesHelper here */}
            <axesHelper args={[10]} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

function Tree() {
  return <></>;
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

function HydroponicKit({ position }) {
  return (
    <>
      {/* Hydroponic Container */}
      <mesh position={position}>
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>

      {/* Water Level Indicator */}
      <mesh position={[position[0], position[1] + 0.5, position[2]]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* Plant in Hydroponic Kit */}
      <mesh position={[position[0], position[1] + 1.2, position[2]]}>
        <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Temperature Sensor (for example) */}
      <mesh position={[position[0] - 1, position[1] + 1.5, position[2]]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Humidity Sensor (for example) */}
      <mesh position={[position[0] + 1, position[1] + 1.5, position[2]]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}

export default DigitalTwin;
