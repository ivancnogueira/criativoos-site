import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { Cyber3DRenderStage } from "./Cyber3DRenderStage";

export type WebGLAvatarPreset =
  | "reactor-bot"
  | "squad-core"
  | "nexora-synth";

interface WebGLCyberRobot3DProps {
  preset?: WebGLAvatarPreset;
  className?: string;
}

/**
 * Palco 3D WebGL PBR em tempo real (Three.js + RoomEnvironment HDRI):
 * Renderiza o Robô / Esquadrão CriativoOS com reflexos especulares de estúdio,
 * vidro curvo obsidiana, neon Volt oficial (#B9FC01) sem estourar para branco,
 * pedestal holográfico completo visível na base e tracking de mouse em 3D.
 */
export const WebGLCyberRobot3D: React.FC<WebGLCyberRobot3DProps> = ({
  preset = "reactor-bot",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      setWebglFailed(true);
      return;
    }

    const width = Math.max(container.clientWidth, 300);
    const height = Math.max(container.clientHeight, 300);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    // Ambiente HDRI de estúdio para reflexos reais metálicos e de vidro
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envTexture = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;
    scene.environmentIntensity = 0.8;

    // Câmera posicionada para enquadrar 100% do robô + 100% do pedestal sem cortes
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.12, 7.05);

    // ILUMINAÇÃO CYBERPUNK DE ESTÚDIO (#B9FC01 Volt + #0031CC Cobalt + Branco Frio)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.1);
    keyLight.position.set(3.2, 5.0, 4.8);
    scene.add(keyLight);

    const voltBottomLight = new THREE.PointLight(0xb9fc01, 16, 12, 1.5);
    voltBottomLight.position.set(0, -1.65, 0.9);
    scene.add(voltBottomLight);

    const cobaltRimLight = new THREE.SpotLight(0x1d4ed8, 28, 16, Math.PI / 3, 0.5);
    cobaltRimLight.position.set(-4.6, 2.5, -2.5);
    scene.add(cobaltRimLight);

    const voltRimRight = new THREE.SpotLight(0xb9fc01, 22, 14, Math.PI / 3, 0.45);
    voltRimRight.position.set(4.2, 2.8, -2.0);
    scene.add(voltRimRight);

    // MATERIAIS PBR COMPARTILHADOS
    const darkCarbonMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a0d13,
      metalness: 0.72,
      roughness: 0.22,
      clearcoat: 0.95,
      clearcoatRoughness: 0.12,
    });

    const gunmetalMat = new THREE.MeshPhysicalMaterial({
      color: 0x1d2432,
      metalness: 0.88,
      roughness: 0.22,
      clearcoat: 0.65,
    });

    const ceramicWhiteMat = new THREE.MeshPhysicalMaterial({
      color: 0xcbd5e1,
      metalness: 0.22,
      roughness: 0.2,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
    });

    const obsidianGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x030507,
      metalness: 0.12,
      roughness: 0.04,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      ior: 1.55,
      reflectivity: 1.0,
    });

    // Neon Volt #B9FC01 calibrado para permanecer verde-limão vivo (sem saturar para branco no ACES)
    const voltNeonMat = new THREE.MeshStandardMaterial({
      color: 0xb9fc01,
      emissive: 0x9fe600,
      emissiveIntensity: 1.25,
      roughness: 0.25,
      metalness: 0.05,
    });

    const voltRingMat = new THREE.MeshStandardMaterial({
      color: 0xb9fc01,
      emissive: 0x84cc16,
      emissiveIntensity: 1.05,
      roughness: 0.2,
    });

    const cobaltNeonMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: 0x1d4ed8,
      emissiveIntensity: 1.8,
      roughness: 0.2,
    });

    // =========================================================================
    // 1. PEDESTAL HOLOGRÁFICO 3D COMPLETO NA BASE
    // =========================================================================
    const pedestalGroup = new THREE.Group();
    pedestalGroup.position.set(0, -1.78, 0);
    scene.add(pedestalGroup);

    const outerRing = new THREE.Mesh(
      new THREE.CylinderGeometry(1.48, 1.65, 0.15, 64),
      darkCarbonMat
    );
    pedestalGroup.add(outerRing);

    const middlePlate = new THREE.Mesh(
      new THREE.CylinderGeometry(1.16, 1.28, 0.12, 64),
      gunmetalMat
    );
    middlePlate.position.y = 0.09;
    pedestalGroup.add(middlePlate);

    const glowingTorus = new THREE.Mesh(
      new THREE.TorusGeometry(1.19, 0.032, 20, 72),
      voltRingMat
    );
    glowingTorus.rotation.x = Math.PI / 2;
    glowingTorus.position.y = 0.13;
    pedestalGroup.add(glowingTorus);

    const plasmaDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.82, 0.82, 0.035, 48),
      voltRingMat
    );
    plasmaDisc.position.y = 0.145;
    pedestalGroup.add(plasmaDisc);

    // Anel holográfico giratório flutuante acima do pedestal
    const holoOrbitRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.06, 0.014, 12, 72),
      voltRingMat
    );
    holoOrbitRing.rotation.x = Math.PI / 2;
    holoOrbitRing.position.y = 0.34;
    pedestalGroup.add(holoOrbitRing);

    // Feixe cônico translúcido de luz holográfica
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xb9fc01,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const beamCone = new THREE.Mesh(
      new THREE.CylinderGeometry(1.32, 0.76, 2.45, 48, 1, true),
      beamMat
    );
    beamCone.position.y = 1.35;
    pedestalGroup.add(beamCone);

    // =========================================================================
    // 2. CONSTRUÇÃO DO PERSONAGEM 3D SELECIONADO
    // =========================================================================
    const characterGroup = new THREE.Group();
    const headGroup = new THREE.Group();
    const eyesGroup = new THREE.Group();
    const orbitRingsGroup = new THREE.Group();
    const satellites: THREE.Group[] = [];
    scene.add(characterGroup);

    const buildMainReactorBot = () => {
      // Torso arredondado aerodinâmico
      const torso = new THREE.Mesh(
        new THREE.SphereGeometry(0.64, 48, 48),
        darkCarbonMat
      );
      torso.scale.set(1, 1.12, 0.9);
      torso.position.set(0, -0.44, 0);
      characterGroup.add(torso);

      // Colar metálico no torso
      const collarRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.51, 0.032, 16, 48),
        gunmetalMat
      );
      collarRing.rotation.x = Math.PI / 2;
      collarRing.position.set(0, 0.16, 0);
      characterGroup.add(collarRing);

      // Reator peitoral assinatura oO em 3D Volt #B9FC01
      const chestRingLeft = new THREE.Mesh(
        new THREE.TorusGeometry(0.082, 0.024, 16, 36),
        voltNeonMat
      );
      chestRingLeft.position.set(-0.1, -0.42, 0.58);
      characterGroup.add(chestRingLeft);

      const chestRingRight = new THREE.Mesh(
        new THREE.TorusGeometry(0.11, 0.026, 16, 36),
        voltNeonMat
      );
      chestRingRight.position.set(0.11, -0.4, 0.57);
      characterGroup.add(chestRingRight);

      // Braços flutuantes estilizados
      const buildArm = (side: -1 | 1) => {
        const arm = new THREE.Group();
        const shoulder = new THREE.Mesh(
          new THREE.SphereGeometry(0.18, 32, 32),
          gunmetalMat
        );
        const forearm = new THREE.Mesh(
          new THREE.CapsuleGeometry(0.15, 0.32, 16, 24),
          darkCarbonMat
        );
        forearm.position.set(side * 0.08, -0.28, 0.08);
        forearm.rotation.z = side * 0.25;
        const armGlow = new THREE.Mesh(
          new THREE.TorusGeometry(0.16, 0.016, 12, 32),
          voltNeonMat
        );
        armGlow.rotation.x = Math.PI / 2;
        armGlow.position.set(side * 0.04, -0.14, 0.02);

        arm.add(shoulder, forearm, armGlow);
        arm.position.set(side * 0.89, -0.28, 0.06);
        arm.rotation.z = side * -0.18;
        return arm;
      };
      characterGroup.add(buildArm(-1), buildArm(1));

      // Cabeça carismática em 3D
      headGroup.position.set(0, 0.68, 0);
      characterGroup.add(headGroup);

      const headShell = new THREE.Mesh(
        new THREE.SphereGeometry(0.73, 48, 48),
        darkCarbonMat
      );
      headShell.scale.set(1.16, 0.96, 0.96);
      headGroup.add(headShell);

      // Visor frontal de vidro curvo obsidiana
      const visor = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 48, 48),
        obsidianGlassMat
      );
      visor.scale.set(1.06, 0.78, 0.65);
      visor.position.set(0, -0.02, 0.36);
      headGroup.add(visor);

      // Aro neon contornando o visor
      const visorRim = new THREE.Mesh(
        new THREE.TorusGeometry(0.59, 0.018, 16, 64),
        voltNeonMat
      );
      visorRim.scale.set(1.12, 0.84, 1);
      visorRim.position.set(0, -0.02, 0.47);
      headGroup.add(visorRim);

      // Fones auriculares laterais 3D
      const buildEarPod = (side: -1 | 1) => {
        const pod = new THREE.Group();
        const cup = new THREE.Mesh(
          new THREE.CylinderGeometry(0.22, 0.22, 0.17, 32),
          gunmetalMat
        );
        cup.rotation.z = Math.PI / 2;
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(0.2, 0.022, 16, 36),
          voltNeonMat
        );
        ring.rotation.y = Math.PI / 2;
        ring.position.x = side * 0.09;

        const stem = new THREE.Mesh(
          new THREE.CylinderGeometry(0.022, 0.03, 0.44, 16),
          gunmetalMat
        );
        stem.position.set(side * 0.06, 0.4, -0.05);
        stem.rotation.z = side * -0.24;

        const tip = new THREE.Mesh(
          new THREE.SphereGeometry(0.06, 24, 24),
          voltNeonMat
        );
        tip.position.set(side * 0.12, 0.62, -0.05);

        pod.add(cup, ring, stem, tip);
        pod.position.set(side * 0.86, 0.02, 0);
        return pod;
      };
      headGroup.add(buildEarPod(-1), buildEarPod(1));

      // Olhos LED expressivos em arco dentro do visor
      eyesGroup.position.set(0, 0.02, 0.8);
      headGroup.add(eyesGroup);

      const leftEyeArch = new THREE.Mesh(
        new THREE.TorusGeometry(0.105, 0.028, 16, 32, Math.PI),
        voltNeonMat
      );
      leftEyeArch.position.set(-0.21, 0.02, 0);

      const rightEyeArch = new THREE.Mesh(
        new THREE.TorusGeometry(0.13, 0.03, 16, 32, Math.PI),
        voltNeonMat
      );
      rightEyeArch.position.set(0.21, 0.04, 0);

      const smile = new THREE.Mesh(
        new THREE.TorusGeometry(0.085, 0.018, 12, 24, Math.PI),
        voltNeonMat
      );
      smile.rotation.z = Math.PI;
      smile.position.set(0, -0.15, -0.02);

      eyesGroup.add(leftEyeArch, rightEyeArch, smile);
    };

    if (preset === "reactor-bot" || preset === "squad-core") {
      buildMainReactorBot();

      if (preset === "squad-core") {
        // 2 Mini-Agentes 3D Criativos (Esferas Titânio com Olhos oO) orbitando os flancos
        const buildSatelliteBot = (
          x: number,
          y: number,
          z: number,
          accentMat: THREE.Material
        ) => {
          const sat = new THREE.Group();
          const shell = new THREE.Mesh(
            new THREE.SphereGeometry(0.28, 32, 32),
            darkCarbonMat
          );
          const visor = new THREE.Mesh(
            new THREE.SphereGeometry(0.24, 32, 32),
            obsidianGlassMat
          );
          visor.scale.set(0.95, 0.65, 0.6);
          visor.position.set(0, 0, 0.14);

          const halo = new THREE.Mesh(
            new THREE.TorusGeometry(0.32, 0.015, 12, 36),
            accentMat
          );
          halo.rotation.x = Math.PI / 2.2;

          const eyeL = new THREE.Mesh(
            new THREE.SphereGeometry(0.032, 16, 16),
            accentMat
          );
          eyeL.position.set(-0.07, 0.01, 0.28);

          const eyeR = new THREE.Mesh(
            new THREE.SphereGeometry(0.042, 16, 16),
            accentMat
          );
          eyeR.position.set(0.07, 0.01, 0.28);

          sat.add(shell, visor, halo, eyeL, eyeR);
          sat.position.set(x, y, z);
          satellites.push(sat);
          scene.add(sat);
        };

        buildSatelliteBot(-1.55, 0.45, 0.3, cobaltNeonMat);
        buildSatelliteBot(1.55, 0.55, 0.2, voltNeonMat);
      }
    } else {
      // --- ARQUÉTIPO NEXORA SYNTH (CIBORGUE PRATA & CARBONO) ---
      const synthNeck = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.52, 1.05, 48),
        darkCarbonMat
      );
      synthNeck.position.set(0, -0.78, 0);
      characterGroup.add(synthNeck);

      const neckPiston = new THREE.Mesh(
        new THREE.TorusGeometry(0.36, 0.022, 16, 48),
        voltNeonMat
      );
      neckPiston.rotation.x = Math.PI / 2;
      neckPiston.position.set(0, -0.44, 0);
      characterGroup.add(neckPiston);

      headGroup.position.set(0, 0.44, 0);
      headGroup.rotation.y = -0.35;
      characterGroup.add(headGroup);

      const cranium = new THREE.Mesh(
        new THREE.SphereGeometry(0.72, 48, 48),
        darkCarbonMat
      );
      cranium.scale.set(0.92, 1.12, 1.05);
      headGroup.add(cranium);

      const facePlate = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 48, 48, 0, Math.PI),
        ceramicWhiteMat
      );
      facePlate.rotation.y = Math.PI / 2;
      facePlate.scale.set(0.95, 1.08, 0.92);
      facePlate.position.set(0.06, -0.02, 0.08);
      headGroup.add(facePlate);

      const opticalBar = new THREE.Mesh(
        new THREE.BoxGeometry(0.52, 0.14, 0.68),
        obsidianGlassMat
      );
      opticalBar.position.set(0.26, 0.06, 0.34);
      headGroup.add(opticalBar);

      const laserStrip = new THREE.Mesh(
        new THREE.BoxGeometry(0.42, 0.032, 0.04),
        voltNeonMat
      );
      laserStrip.position.set(0.3, 0.06, 0.69);
      headGroup.add(laserStrip);

      const turbineRim = new THREE.Mesh(
        new THREE.TorusGeometry(0.32, 0.042, 20, 48),
        gunmetalMat
      );
      turbineRim.rotation.y = Math.PI / 2;
      turbineRim.position.set(-0.58, 0.0, 0);
      headGroup.add(turbineRim);

      const turbineCore = new THREE.Mesh(
        new THREE.TorusGeometry(0.2, 0.025, 16, 36),
        voltNeonMat
      );
      turbineCore.rotation.y = Math.PI / 2;
      turbineCore.position.set(-0.61, 0.0, 0);
      headGroup.add(turbineCore);
    }

    // ANÉIS GIROSCÓPICOS 3D AO REDOR DO PROTAGONISTA
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.42, 0.009, 12, 80),
      voltRingMat
    );
    ring1.rotation.x = 1.25;
    ring1.rotation.y = 0.35;
    orbitRingsGroup.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.58, 0.008, 12, 80),
      cobaltNeonMat
    );
    ring2.rotation.x = -1.1;
    ring2.rotation.y = 0.55;
    orbitRingsGroup.add(ring2);

    orbitRingsGroup.position.set(0, 0.16, -0.2);
    scene.add(orbitRingsGroup);

    // PARTÍCULAS HOLOGRÁFICAS 3D SUBINDO DO REATOR
    const particleCount = 60;
    const pPositions = new Float32Array(particleCount * 3);
    const pSpeeds = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.25 + Math.random() * 1.1;
      pPositions[i * 3] = Math.cos(angle) * radius;
      pPositions[i * 3 + 1] = -1.6 + Math.random() * 3.2;
      pPositions[i * 3 + 2] = Math.sin(angle) * radius;
      pSpeeds[i] = 0.008 + Math.random() * 0.015;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xb9fc01,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // INTERAÇÃO COM MOUSE + PISCADA ORGÂNICA + LOOP 60FPS
    let targetMouseX = 0;
    let targetMouseY = 0;
    const onPointerMove = (e: PointerEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let nextBlinkTime = performance.now() + 2500;
    let blinkingUntil = 0;
    let rafId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const now = performance.now();

      // Levitação suave acima do pedestal
      characterGroup.position.y = Math.sin(t * 2.1) * 0.1 + 0.08;

      satellites.forEach((sat, idx) => {
        sat.position.y =
          (idx === 0 ? 0.45 : 0.55) + Math.sin(t * 2.5 + idx * 1.8) * 0.14;
        sat.rotation.y = targetMouseX * 0.4 + Math.sin(t + idx) * 0.18;
      });

      // Cabeça e corpo seguem o mouse com suavidade em 3D
      const targetRotY =
        (preset === "nexora-synth" ? -0.32 : 0) + targetMouseX * 0.34;
      const targetRotX = targetMouseY * 0.18;
      headGroup.rotation.y += (targetRotY - headGroup.rotation.y) * 0.08;
      headGroup.rotation.x += (targetRotX - headGroup.rotation.x) * 0.08;
      characterGroup.rotation.y +=
        (targetMouseX * 0.15 - characterGroup.rotation.y) * 0.05;

      // Piscada nos olhos LED
      if (now > nextBlinkTime) {
        blinkingUntil = now + 130;
        nextBlinkTime = now + 2600 + Math.random() * 2200;
      }
      eyesGroup.scale.y = now < blinkingUntil ? 0.1 : 1;

      // Rotação dos anéis giroscópicos e do anel holográfico do pedestal
      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.006;
      holoOrbitRing.rotation.z += 0.012;
      voltBottomLight.intensity = 15 + Math.sin(t * 4) * 3;

      // Subida contínua das partículas do reator
      const posAttr = pGeo.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        let py = posAttr.getY(i) + pSpeeds[i];
        if (py > 1.8) py = -1.65;
        posAttr.setY(i, py);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = Math.max(container.clientWidth, 300);
      const h = Math.max(container.clientHeight, 300);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      pmremGenerator.dispose();
      envTexture.dispose();
      renderer.dispose();
    };
  }, [preset]);

  if (webglFailed) {
    return (
      <Cyber3DRenderStage
        model={
          preset === "nexora-synth"
            ? "nexora-synth"
            : preset === "squad-core"
              ? "squad-core"
              : "reactor-bot"
        }
        className={className}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full select-none ${className}`}
    />
  );
};
