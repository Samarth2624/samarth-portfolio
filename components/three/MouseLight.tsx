"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MouseLight() {

    const light=useRef<THREE.PointLight>(null);

    const {mouse}=useThree();

    useFrame(()=>{

        if(!light.current) return;

        light.current.position.x=mouse.x*6;

        light.current.position.y=mouse.y*4;

        light.current.position.z=3;

    });

    return(

        <pointLight

        ref={light}

        intensity={10}

        color="#00d9ff"

        />

    )

}