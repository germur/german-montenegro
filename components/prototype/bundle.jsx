"use client";
/* AUTO-GENERATED from Claude Design prototype. eslint-disable */
/* eslint-disable */
import React, { useState, useEffect, useRef, useMemo, useCallback, useLayoutEffect, Fragment } from "react";
import * as THREE from "three";
if (typeof window !== "undefined") { window.React = React; window.THREE = THREE; }

/* ==================== sport-icons-3d.jsx ==================== */
// SPORT 3D ICONS - Low-poly gold wireframe icons per deporte (Three.js)
// kinds: 'boxeo' (guante), 'bjj' (cinturón), 'weightlifting' (barra), 'crossfit' (kettlebell)

function Sport3DIcon({ kind, size = 200 }) {
  const mountRef = React.useRef(null);

  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !window.THREE) return;
    const THREE = window.THREE;

    const w = size, h = size;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const fillMat = new THREE.MeshBasicMaterial({ color: 0x16120c, transparent: true, opacity: 0.9 });
    const edgeMat = new THREE.LineBasicMaterial({ color: 0xC9A55A, transparent: true, opacity: 0.85 });
    const edgeSoft = new THREE.LineBasicMaterial({ color: 0xC9A55A, transparent: true, opacity: 0.4 });

    function add(geo, x = 0, y = 0, z = 0, rot = null, soft = false, sx = 1, sy = 1, sz = 1) {
      const mesh = new THREE.Mesh(geo, fillMat);
      mesh.position.set(x, y, z);
      mesh.scale.set(sx, sy, sz);
      if (rot) mesh.rotation.set(rot[0], rot[1], rot[2]);
      group.add(mesh);
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 22), soft ? edgeSoft : edgeMat);
      edges.position.copy(mesh.position);
      edges.scale.copy(mesh.scale);
      edges.rotation.copy(mesh.rotation);
      group.add(edges);
      return mesh;
    }

    const HALF = Math.PI / 2;

    if (kind === 'boxeo') {
      // Main mitt (egg-shaped fist, side profile)
      add(new THREE.SphereGeometry(1.05, 18, 14), 0, 0.5, 0, null, false, 1.05, 1.15, 0.95);
      // Curled fingers — rounded front bulge
      add(new THREE.SphereGeometry(0.66, 14, 12), 0.55, 0.95, 0.15, null, false, 1, 1.15, 0.95);
      // Groove between fingers and thumb
      add(new THREE.TorusGeometry(0.5, 0.07, 8, 24), 0.35, 0.45, 0.6, [0.5, 0, 0.2], true);
      // Thumb — capsule sticking out front-low
      add(new THREE.SphereGeometry(0.4, 12, 10), 0.92, 0.05, 0.35, null, false, 1.3, 1, 1);
      // Wrist cuff
      add(new THREE.CylinderGeometry(0.7, 0.82, 0.9, 16), -0.15, -0.95, 0, [0, 0, 0.12], false);
      // Cuff strap band
      add(new THREE.TorusGeometry(0.74, 0.1, 8, 24), -0.15, -0.62, 0, [HALF, 0, 0.12], true);
    } else if (kind === 'bjj') {
      // Flat belt straps crossing at center (thin = fabric)
      add(new THREE.BoxGeometry(1.7, 0.46, 0.16), -0.55, 0.45, 0, [0, 0, 0.16], false);
      add(new THREE.BoxGeometry(1.7, 0.46, 0.16), 0.55, 0.45, 0, [0, 0, -0.16], false);
      // Central knot — small overlapping squares, raised in front
      add(new THREE.BoxGeometry(0.6, 0.6, 0.34), 0, 0.42, 0.3, [0, 0, 0.4], false);
      add(new THREE.BoxGeometry(0.6, 0.6, 0.3), 0, 0.42, 0.34, [0, 0, -0.4], false);
      // Two tails hanging from the knot (thin, flat)
      add(new THREE.BoxGeometry(0.4, 1.45, 0.14), -0.22, -0.7, 0.28, [0, 0, 0.05], false);
      add(new THREE.BoxGeometry(0.4, 1.45, 0.14), 0.24, -0.78, 0.28, [0, 0, -0.04], false);
      // Rank stripes near tail ends
      add(new THREE.BoxGeometry(0.44, 0.14, 0.18), -0.22, -1.25, 0.3, null, true);
      add(new THREE.BoxGeometry(0.44, 0.14, 0.18), 0.24, -1.33, 0.3, null, true);
    } else if (kind === 'weightlifting') {
      // Bar
      add(new THREE.CylinderGeometry(0.1, 0.1, 4.0, 12), 0, 0, 0, [0, 0, HALF], false);
      // Plates — pairs each side
      add(new THREE.CylinderGeometry(0.95, 0.95, 0.22, 22), -1.35, 0, 0, [0, 0, HALF], false);
      add(new THREE.CylinderGeometry(0.72, 0.72, 0.22, 22), -1.62, 0, 0, [0, 0, HALF], false);
      add(new THREE.CylinderGeometry(0.95, 0.95, 0.22, 22), 1.35, 0, 0, [0, 0, HALF], false);
      add(new THREE.CylinderGeometry(0.72, 0.72, 0.22, 22), 1.62, 0, 0, [0, 0, HALF], false);
      // Collars
      add(new THREE.CylinderGeometry(0.28, 0.28, 0.3, 12), -1.05, 0, 0, [0, 0, HALF], true);
      add(new THREE.CylinderGeometry(0.28, 0.28, 0.3, 12), 1.05, 0, 0, [0, 0, HALF], true);
    } else if (kind === 'crossfit') {
      // Bell (rounded, slightly squashed)
      add(new THREE.SphereGeometry(1.05, 18, 14), 0, -0.45, 0, null, false, 1, 0.9, 1);
      // Flat shoulder of the bell
      add(new THREE.CylinderGeometry(0.6, 0.82, 0.32, 18), 0, 0.32, 0, null, true);
      // Handle — two posts + top bar (clear squared kettlebell handle)
      add(new THREE.BoxGeometry(0.2, 0.72, 0.22), -0.52, 0.82, 0, [0, 0, 0.14], false);
      add(new THREE.BoxGeometry(0.2, 0.72, 0.22), 0.52, 0.82, 0, [0, 0, -0.14], false);
      add(new THREE.BoxGeometry(1.32, 0.22, 0.24), 0, 1.18, 0, null, false);
    }

    // Center vertically a touch
    group.position.y = kind === 'weightlifting' ? 0 : -0.1;

    let raf;
    let t = 0;
    function animate() {
      t += 0.01;
      // Gentle swing so the recognizable front stays toward the camera
      group.rotation.y = Math.sin(t * 0.6) * 0.5;
      group.rotation.x = Math.sin(t * 0.8) * 0.08 - 0.04;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      scene.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, [kind, size]);

  return (
    <div
      ref={mountRef}
      data-keep-color
      aria-hidden="true"
      style={{ width: size, height: size, margin: '0 auto' }}
    />
  );
}

if (typeof window !== "undefined") window.Sport3DIcon = Sport3DIcon;
/* ==================== body-map.jsx ==================== */
// BODY MAP 3D - Interactive wireframe humanoid with Three.js
// Drag to rotate, click on gold hotspots to see related injuries.

// =====================================================================
// MAIN SECTION
// =====================================================================
function BodyMapSection({ onNavigate }) {
  const [activeZone, setActiveZone] = React.useState(null);
  const [hoveredZone, setHoveredZone] = React.useState(null);
  const [isDragging, setIsDragging] = React.useState(false);

  // Unified zone data (no front/back tabs in 3D, rotate instead)
  const zones = [
    { id: 'cuello',    label: 'Cuello / Cervical',   pos: [0,    2.30, -0.18],
      injuries: [
        { name: 'Contractura cervical', page: 'home',    severity: 'Baja' },
        { name: 'Latigazo',             page: 'home',    severity: 'Media' },
      ]
    },
    { id: 'hombro-d',  label: 'Hombro derecho',      pos: [-0.55, 2.05, 0.08],
      injuries: [
        { name: 'Hombro Congelado',     page: 'hombro',  severity: 'Alta' },
        { name: 'Tendinitis manguito',  page: 'home',    severity: 'Media' },
      ]
    },
    { id: 'hombro-i',  label: 'Hombro izquierdo',    pos: [0.55,  2.05, 0.08],
      injuries: [
        { name: 'Hombro Congelado',     page: 'hombro',  severity: 'Alta' },
        { name: 'Tendinitis manguito',  page: 'home',    severity: 'Media' },
      ]
    },
    { id: 'codo-d',    label: 'Codo derecho',        pos: [-0.55, 1.30, 0.10],
      injuries: [
        { name: 'Epitrocleítis',        page: 'home',    severity: 'Media' },
        { name: 'Codo de tenista',      page: 'home',    severity: 'Media' },
      ]
    },
    { id: 'codo-i',    label: 'Codo izquierdo',      pos: [0.55,  1.30, 0.10],
      injuries: [
        { name: 'Epitrocleítis',        page: 'home',    severity: 'Media' },
        { name: 'Codo de tenista',      page: 'home',    severity: 'Media' },
      ]
    },
    { id: 'lumbar',    label: 'Zona lumbar',         pos: [0,     0.95, -0.35],
      injuries: [
        { name: 'Ciática',              page: 'ciatica', severity: 'Media' },
        { name: 'Lumbalgia',            page: 'home',    severity: 'Media' },
        { name: 'Hernia discal',        page: 'home',    severity: 'Alta' },
      ]
    },
    { id: 'ingle',     label: 'Ingle / Aductor',     pos: [0,     0.55, 0.35],
      injuries: [
        { name: 'Pubalgia',             page: 'pubalgia', severity: 'Alta' },
        { name: 'Tendinitis aductores', page: 'home',    severity: 'Media' },
      ]
    },
    { id: 'gluteo-d',  label: 'Glúteo / Piramidal',  pos: [-0.22, 0.55, -0.35],
      injuries: [
        { name: 'Síndrome piramidal',   page: 'ciatica', severity: 'Media' },
        { name: 'Ciática',              page: 'ciatica', severity: 'Media' },
      ]
    },
    { id: 'gluteo-i',  label: 'Glúteo / Piramidal',  pos: [0.22,  0.55, -0.35],
      injuries: [
        { name: 'Síndrome piramidal',   page: 'ciatica', severity: 'Media' },
        { name: 'Ciática',              page: 'ciatica', severity: 'Media' },
      ]
    },
    { id: 'isquio-d',  label: 'Isquiotibial',        pos: [-0.22, -0.10, -0.22],
      injuries: [
        { name: 'Tendinopatía proximal', page: 'home',   severity: 'Media' },
        { name: 'Rotura isquiotibial',   page: 'home',   severity: 'Alta' },
      ]
    },
    { id: 'isquio-i',  label: 'Isquiotibial',        pos: [0.22,  -0.10, -0.22],
      injuries: [
        { name: 'Tendinopatía proximal', page: 'home',   severity: 'Media' },
        { name: 'Rotura isquiotibial',   page: 'home',   severity: 'Alta' },
      ]
    },
    { id: 'rodilla-d', label: 'Rodilla derecha',     pos: [-0.22, -0.40, 0.20],
      injuries: [
        { name: 'Tendinitis Rotuliana', page: 'tendinitis', severity: 'Media' },
        { name: 'Condromalacia',         page: 'home',      severity: 'Media' },
      ]
    },
    { id: 'rodilla-i', label: 'Rodilla izquierda',   pos: [0.22,  -0.40, 0.20],
      injuries: [
        { name: 'Tendinitis Rotuliana', page: 'tendinitis', severity: 'Media' },
        { name: 'Condromalacia',         page: 'home',      severity: 'Media' },
      ]
    },
    { id: 'tibia',     label: 'Tibia / Espinilla',   pos: [0,     -0.90, 0.27],
      injuries: [
        { name: 'Periostitis Tibial',   page: 'home',    severity: 'Baja' },
      ]
    },
  ];

  const activeZoneData = activeZone ? zones.find(z => z.id === activeZone) : null;
  const sevColor = (s) => s === 'Alta' ? '#DC2626' : s === 'Media' ? '#C9A55A' : '#16A34A';

  return (
    <section style={{
      padding: '8rem 0',
      background: '#0A0A0A',
      color: '#FFFFFF',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background giant text */}
      <div style={{
        position: 'absolute',
        right: '-3%',
        top: '-2rem',
        fontSize: 'clamp(10rem, 22vw, 22rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        DÓNDE.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
          alignItems: 'flex-end',
        }} className="bm-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Diagnóstico interactivo · 3D
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
            }}>
              Marca
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                dónde te duele.
              </span>
            </h2>
          </div>

          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.6,
            maxWidth: '440px',
          }}>
            Arrastra para rotar el cuerpo. Toca un punto dorado y te digo qué lesiones suelen estar detrás de ese dolor — y a cuál protocolo ir.
          </p>
        </div>

        {/* Main interactive layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
          border: '1px solid rgba(255,255,255,0.08)',
          background: '#0F0F0F',
        }} className="bm-grid">
          {/* LEFT: 3D Canvas */}
          <div style={{
            position: 'relative',
            background: 'radial-gradient(ellipse at center, rgba(201,165,90,0.06) 0%, transparent 60%)',
            borderRight: '1px solid rgba(255,255,255,0.08)',
            minHeight: '720px',
            overflow: 'hidden',
          }} className="bm-canvas-wrap">
            <BodyMap3DCanvas
              zones={zones}
              activeZone={activeZone}
              onSelectZone={(id) => setActiveZone(prev => prev === id ? null : id)}
              onHoverZone={setHoveredZone}
              onDragChange={setIsDragging}
            />

            {/* Top-right reset button */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('bm3d:reset'))}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '0.625rem 1rem',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                zIndex: 5,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C9A55A';
                e.currentTarget.style.color = '#C9A55A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              ↺ Resetear
            </button>

            {/* Top-left meta */}
            <div style={{
              position: 'absolute',
              top: '1.25rem',
              left: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.375rem',
              zIndex: 5,
              pointerEvents: 'none',
            }}>
              <div style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#C9A55A',
              }}>
                Cuerpo · Humanoide
              </div>
              <div style={{
                fontSize: '0.6875rem',
                color: 'rgba(255,255,255,0.4)',
                fontFamily: 'Space Grotesk',
                letterSpacing: '0.1em',
              }}>
                {zones.length} zonas · {zones.reduce((s, z) => s + z.injuries.length, 0)} dx
              </div>
            </div>

            {/* Hover label */}
            {hoveredZone && !activeZone && (
              <div style={{
                position: 'absolute',
                bottom: '4rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#0A0A0A',
                border: '1px solid #C9A55A',
                padding: '0.625rem 1.25rem',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#FFFFFF',
                fontFamily: 'Space Grotesk',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                zIndex: 5,
                animation: 'bmLabelIn 0.2s ease-out',
              }}>
                {zones.find(z => z.id === hoveredZone)?.label}
              </div>
            )}

            {/* Bottom hint */}
            <div style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: 0,
              right: 0,
              textAlign: 'center',
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.35)',
              fontFamily: 'Space Grotesk',
              pointerEvents: 'none',
              zIndex: 5,
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              alignItems: 'center',
            }}>
              {activeZone ? (
                <span style={{ color: '#C9A55A' }}>✓ Zona seleccionada</span>
              ) : isDragging ? (
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>Rotando…</span>
              ) : (
                <>
                  <span>⊕</span>
                  <span>Arrastra para rotar · Click en punto dorado</span>
                </>
              )}
            </div>
          </div>

          {/* RIGHT: Info panel */}
          <div style={{
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '720px',
          }} className="bm-info">
            {!activeZoneData ? (
              <BodyMapEmpty />
            ) : (
              <BodyMapDetail
                zone={activeZoneData}
                onNavigate={onNavigate}
                sevColor={sevColor}
                onClose={() => setActiveZone(null)}
              />
            )}
          </div>
        </div>

        {/* Footer disclaimer */}
        <div style={{
          marginTop: '2rem',
          padding: '1.25rem 1.5rem',
          background: 'rgba(255,255,255,0.03)',
          borderLeft: '2px solid #C9A55A',
          fontSize: '0.875rem',
          lineHeight: 1.55,
          color: 'rgba(255,255,255,0.6)',
          maxWidth: '900px',
        }}>
          <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>Esto es orientación, no diagnóstico.</strong> Las lesiones reales requieren evaluación presencial. Si tienes dolor agudo, fiebre, pérdida de fuerza o entumecimiento progresivo, agenda valoración inmediatamente.
        </div>
      </div>

      <style>{`
        @keyframes bmLabelIn {
          from { opacity: 0; transform: translateX(-50%) translateY(4px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 900px) {
          .bm-header { grid-template-columns: 1fr !important; }
          .bm-grid { grid-template-columns: 1fr !important; }
          .bm-canvas-wrap { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); min-height: 560px !important; }
          .bm-info { min-height: auto !important; padding: 2rem !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// THREE.JS CANVAS COMPONENT
// =====================================================================
function BodyMap3DCanvas({ zones, activeZone, onSelectZone, onHoverZone, onDragChange }) {
  const mountRef = React.useRef(null);
  const stateRef = React.useRef({});

  // Keep activeZone reachable from animate loop
  React.useEffect(() => {
    stateRef.current.activeZone = activeZone;
  }, [activeZone]);

  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !window.THREE) {
      console.warn('THREE.js not loaded');
      return;
    }
    const THREE = window.THREE;

    // ---- Scene setup ----
    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
    camera.position.set(0, 0.5, 6.2);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.cursor = 'grab';
    mount.appendChild(renderer.domElement);

    // ---- Figure ----
    const figureGroup = new THREE.Group();
    scene.add(figureGroup);

    const edgeMat = new THREE.LineBasicMaterial({
      color: 0xC9A55A,
      transparent: true,
      opacity: 0.75,
    });
    const fillMat = new THREE.MeshBasicMaterial({
      color: 0x1A1714,
      transparent: true,
      opacity: 0.85,
    });

    function addPart(geo, x, y, z, ry) {
      // Fill mesh (silhouette)
      const fill = new THREE.Mesh(geo, fillMat);
      fill.position.set(x, y, z);
      if (ry) fill.rotation.y = ry;
      figureGroup.add(fill);

      // Edges
      const edges = new THREE.EdgesGeometry(geo, 18);
      const lines = new THREE.LineSegments(edges, edgeMat);
      lines.position.set(x, y, z);
      if (ry) lines.rotation.y = ry;
      figureGroup.add(lines);
    }

    // HEAD
    addPart(new THREE.SphereGeometry(0.32, 12, 10), 0, 2.55, 0);
    // NECK
    addPart(new THREE.CylinderGeometry(0.11, 0.13, 0.2, 10), 0, 2.20, 0);
    // SHOULDERS bar (cylinder horizontal)
    addPart(new THREE.CylinderGeometry(0.14, 0.14, 1.05, 12), 0, 2.05, 0, 0);
    figureGroup.children.slice(-2).forEach(c => c.rotation.z = Math.PI / 2);
    // TORSO upper
    addPart(new THREE.CylinderGeometry(0.45, 0.42, 0.55, 12), 0, 1.75, 0);
    // TORSO mid
    addPart(new THREE.CylinderGeometry(0.42, 0.36, 0.55, 12), 0, 1.25, 0);
    // WAIST
    addPart(new THREE.CylinderGeometry(0.36, 0.40, 0.4, 12), 0, 0.85, 0);
    // PELVIS
    addPart(new THREE.CylinderGeometry(0.40, 0.32, 0.4, 12), 0, 0.50, 0);

    // SHOULDER joints
    addPart(new THREE.SphereGeometry(0.15, 10, 8), -0.55, 2.05, 0);
    addPart(new THREE.SphereGeometry(0.15, 10, 8),  0.55, 2.05, 0);

    // UPPER ARMS
    addPart(new THREE.CylinderGeometry(0.11, 0.10, 0.78, 10), -0.55, 1.65, 0);
    addPart(new THREE.CylinderGeometry(0.11, 0.10, 0.78, 10),  0.55, 1.65, 0);

    // ELBOWS
    addPart(new THREE.SphereGeometry(0.11, 10, 8), -0.55, 1.25, 0);
    addPart(new THREE.SphereGeometry(0.11, 10, 8),  0.55, 1.25, 0);

    // FOREARMS
    addPart(new THREE.CylinderGeometry(0.10, 0.085, 0.78, 10), -0.55, 0.85, 0);
    addPart(new THREE.CylinderGeometry(0.10, 0.085, 0.78, 10),  0.55, 0.85, 0);

    // WRISTS / Hands
    addPart(new THREE.SphereGeometry(0.13, 10, 8), -0.55, 0.42, 0);
    addPart(new THREE.SphereGeometry(0.13, 10, 8),  0.55, 0.42, 0);

    // HIP joints
    addPart(new THREE.SphereGeometry(0.13, 10, 8), -0.22, 0.30, 0);
    addPart(new THREE.SphereGeometry(0.13, 10, 8),  0.22, 0.30, 0);

    // UPPER LEGS
    addPart(new THREE.CylinderGeometry(0.17, 0.14, 0.90, 12), -0.22, -0.15, 0);
    addPart(new THREE.CylinderGeometry(0.17, 0.14, 0.90, 12),  0.22, -0.15, 0);

    // KNEES
    addPart(new THREE.SphereGeometry(0.14, 10, 8), -0.22, -0.62, 0);
    addPart(new THREE.SphereGeometry(0.14, 10, 8),  0.22, -0.62, 0);

    // LOWER LEGS
    addPart(new THREE.CylinderGeometry(0.13, 0.09, 0.85, 12), -0.22, -1.08, 0);
    addPart(new THREE.CylinderGeometry(0.13, 0.09, 0.85, 12),  0.22, -1.08, 0);

    // ANKLES + FEET
    addPart(new THREE.SphereGeometry(0.10, 8, 6), -0.22, -1.52, 0);
    addPart(new THREE.SphereGeometry(0.10, 8, 6),  0.22, -1.52, 0);
    addPart(new THREE.BoxGeometry(0.18, 0.10, 0.36),  -0.22, -1.60, 0.10);
    addPart(new THREE.BoxGeometry(0.18, 0.10, 0.36),   0.22, -1.60, 0.10);

    // ---- Floor disc (subtle shadow) ----
    const discGeo = new THREE.RingGeometry(0.4, 1.4, 48);
    const discMat = new THREE.MeshBasicMaterial({
      color: 0xC9A55A,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    });
    const disc = new THREE.Mesh(discGeo, discMat);
    disc.position.y = -1.72;
    disc.rotation.x = -Math.PI / 2;
    scene.add(disc);

    // Inner disc dot
    const dotGeo = new THREE.CircleGeometry(0.4, 32);
    const dotMat = new THREE.MeshBasicMaterial({
      color: 0xC9A55A,
      transparent: true,
      opacity: 0.04,
      side: THREE.DoubleSide,
    });
    const dot = new THREE.Mesh(dotGeo, dotMat);
    dot.position.y = -1.72;
    dot.rotation.x = -Math.PI / 2;
    scene.add(dot);

    // ---- Hotspots ----
    const hotspotMeshes = [];
    const ringMeshes = [];
    const labelGroup = new THREE.Group();
    scene.add(labelGroup);

    zones.forEach((zone, i) => {
      // Core sphere
      const coreGeo = new THREE.SphereGeometry(0.07, 14, 10);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xC9A55A,
        transparent: true,
        opacity: 0.95,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.set(...zone.pos);
      core.userData = { id: zone.id, label: zone.label, kind: 'hotspot', phase: i * 0.4 };
      figureGroup.add(core);
      hotspotMeshes.push(core);

      // Outer glow sphere
      const glowGeo = new THREE.SphereGeometry(0.11, 12, 8);
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0xC9A55A,
        transparent: true,
        opacity: 0.18,
      });
      const glow = new THREE.Mesh(glowGeo, glowMat);
      glow.position.set(...zone.pos);
      glow.userData = { id: zone.id, kind: 'glow' };
      figureGroup.add(glow);

      // Pulse ring (billboards to camera)
      const ringG = new THREE.RingGeometry(0.10, 0.13, 24);
      const ringM = new THREE.MeshBasicMaterial({
        color: 0xC9A55A,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringG, ringM);
      ring.position.set(...zone.pos);
      ring.userData = { id: zone.id, kind: 'ring', phase: i * 0.4 };
      figureGroup.add(ring);
      ringMeshes.push(ring);
    });

    // ---- Interaction state ----
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragMoveDist = 0;
    let pointerDown = false;

    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;
    let lastInteractionTime = performance.now();

    const mouse = new THREE.Vector2(-100, -100);
    const raycaster = new THREE.Raycaster();
    let hoveredId = null;

    // ---- Event handlers ----
    function getPointer(e) {
      if (e.touches && e.touches[0]) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      if (e.changedTouches && e.changedTouches[0]) return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
      return { x: e.clientX, y: e.clientY };
    }

    function onPointerDown(e) {
      pointerDown = true;
      isDragging = false;
      dragMoveDist = 0;
      const p = getPointer(e);
      dragStartX = p.x;
      dragStartY = p.y;
      lastInteractionTime = performance.now();
      renderer.domElement.style.cursor = 'grabbing';
    }

    function onPointerMove(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      const p = getPointer(e);
      mouse.x = ((p.x - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((p.y - rect.top) / rect.height) * 2 + 1;

      if (pointerDown) {
        const dx = p.x - dragStartX;
        const dy = p.y - dragStartY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 4) {
          isDragging = true;
          onDragChange(true);
          targetRotY += dx * 0.008;
          targetRotX -= dy * 0.005;
          targetRotX = Math.max(-0.35, Math.min(0.35, targetRotX));
          dragStartX = p.x;
          dragStartY = p.y;
          lastInteractionTime = performance.now();
        }
      }
    }

    function onPointerUp(e) {
      if (pointerDown && !isDragging) {
        // It was a click — raycast for hotspot
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(hotspotMeshes, false);
        if (intersects.length > 0) {
          const id = intersects[0].object.userData.id;
          onSelectZone(id);
          lastInteractionTime = performance.now();
        }
      }
      pointerDown = false;
      if (isDragging) onDragChange(false);
      isDragging = false;
      renderer.domElement.style.cursor = 'grab';
    }

    function onPointerLeave() {
      mouse.x = -100;
      mouse.y = -100;
    }

    function onReset() {
      targetRotY = 0;
      targetRotX = 0;
      lastInteractionTime = performance.now();
    }

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', onPointerDown);
    dom.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    dom.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('bm3d:reset', onReset);

    // ---- Resize ----
    function onResize() {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    }
    window.addEventListener('resize', onResize);

    // ---- Animation loop ----
    let frameId;
    let elapsed = 0;
    const tmpScale = new THREE.Vector3();
    const baseColor = new THREE.Color(0xC9A55A);
    const activeColor = new THREE.Color(0xFFFFFF);

    function animate() {
      elapsed += 0.016;
      const now = performance.now();
      const idleMs = now - lastInteractionTime;

      // Auto-rotation when idle (> 2.5s) and no zone selected
      if (idleMs > 2500 && !stateRef.current.activeZone) {
        targetRotY += 0.0035;
      }

      // Smooth rotation lerp
      currentRotY += (targetRotY - currentRotY) * 0.08;
      currentRotX += (targetRotX - currentRotX) * 0.08;
      figureGroup.rotation.y = currentRotY;
      figureGroup.rotation.x = currentRotX;

      // Raycast (only when mouse is on canvas)
      let newHoverId = null;
      if (mouse.x > -1 && mouse.x < 1 && mouse.y > -1 && mouse.y < 1) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(hotspotMeshes, false);
        if (intersects.length > 0) {
          newHoverId = intersects[0].object.userData.id;
        }
      }
      if (newHoverId !== hoveredId) {
        hoveredId = newHoverId;
        onHoverZone(newHoverId);
        if (!isDragging) {
          dom.style.cursor = hoveredId ? 'pointer' : 'grab';
        }
      }

      // Hotspot states (scale + color)
      hotspotMeshes.forEach(m => {
        const isActive = m.userData.id === stateRef.current.activeZone;
        const isHover = m.userData.id === hoveredId;
        const targetScale = isActive ? 1.8 : isHover ? 1.4 : 1;
        tmpScale.setScalar(targetScale);
        m.scale.lerp(tmpScale, 0.18);

        // Color lerp
        m.material.color.lerp(isActive ? activeColor : baseColor, 0.12);
      });

      // Rings: pulse + billboard
      ringMeshes.forEach(r => {
        const isActive = r.userData.id === stateRef.current.activeZone;
        const isHover = r.userData.id === hoveredId;
        const t = ((elapsed * (isActive ? 1.4 : 1) + r.userData.phase) % 2) / 2;
        const scale = 1 + t * 1.6;
        r.scale.setScalar(scale);
        r.material.opacity = (isActive || isHover ? 0.7 : 0.45) * (1 - t);
        // Billboard: face camera regardless of parent rotation
        r.quaternion.copy(camera.quaternion);
        // Counter-rotate to undo figureGroup rotation (since ring is child)
        r.quaternion.premultiply(figureGroup.quaternion.clone().invert());
      });

      // Floor disc subtle pulse
      disc.material.opacity = 0.08 + Math.sin(elapsed * 1.2) * 0.02;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    // ---- Cleanup ----
    return () => {
      cancelAnimationFrame(frameId);
      dom.removeEventListener('pointerdown', onPointerDown);
      dom.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      dom.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('bm3d:reset', onReset);
      // Dispose
      scene.traverse(obj => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
      renderer.dispose();
      if (dom.parentNode === mount) mount.removeChild(dom);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        touchAction: 'none',
      }}
    />
  );
}

// =====================================================================
// EMPTY STATE
// =====================================================================
function BodyMapEmpty() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      gap: '2rem',
    }}>
      <div>
        <div style={{
          fontSize: '0.6875rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '1rem',
        }}>
          Esperando selección
        </div>
        <div style={{
          fontSize: 'clamp(2rem, 3vw, 2.75rem)',
          fontFamily: 'Space Grotesk',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
          color: '#FFFFFF',
        }}>
          Rota
          <br />
          <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
            el cuerpo.
          </span>
        </div>
        <p style={{
          fontSize: '1rem',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.6)',
          maxWidth: '380px',
        }}>
          Arrastra con el cursor para girar 360°. Toca uno de los puntos dorados pulsantes y te muestro qué lesiones suelen estar detrás de ese dolor.
        </p>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '1.5rem',
      }}>
        <div style={{
          fontSize: '0.6875rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '1rem',
        }}>
          Severidad
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {[
            { c: '#16A34A', l: 'Baja',  d: 'Lesión leve, recuperación 1—4 semanas' },
            { c: '#C9A55A', l: 'Media', d: 'Tratamiento estructurado, 4—10 semanas' },
            { c: '#DC2626', l: 'Alta',  d: 'Compleja, requiere protocolo extenso' },
          ].map(item => (
            <div key={item.l} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.c, flexShrink: 0 }} />
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.625rem' }}>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: '#FFFFFF' }}>{item.l}</span>
                <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>{item.d}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// DETAIL STATE
// =====================================================================
function BodyMapDetail({ zone, onNavigate, sevColor, onClose }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      animation: 'bmFadeIn 0.4s ease-out',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '1rem',
      }}>
        <div>
          <div style={{
            fontSize: '0.6875rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: '#C9A55A',
            marginBottom: '0.75rem',
          }}>
            Zona seleccionada
          </div>
          <div style={{
            fontSize: 'clamp(2rem, 3vw, 2.75rem)',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}>
            {zone.label}.
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.6)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'all 0.3s',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#C9A55A';
            e.currentTarget.style.color = '#C9A55A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
          }}
          aria-label="Cerrar"
        >
          ✕
        </button>
      </div>

      <div>
        <div style={{
          fontSize: '0.6875rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '1rem',
          paddingBottom: '0.875rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {zone.injuries.length} {zone.injuries.length === 1 ? 'diagnóstico probable' : 'diagnósticos probables'}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {zone.injuries.map((inj, i) => {
            const clickable = inj.page !== 'home';
            return (
              <button
                key={i}
                onClick={() => clickable && onNavigate(inj.page)}
                disabled={!clickable}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr auto auto',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.375rem 0',
                  borderBottom: i < zone.injuries.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  background: 'transparent',
                  border: 'none',
                  borderBottomColor: i < zone.injuries.length - 1 ? 'rgba(255,255,255,0.06)' : 'transparent',
                  borderBottomWidth: '1px',
                  borderBottomStyle: 'solid',
                  textAlign: 'left',
                  cursor: clickable ? 'pointer' : 'default',
                  transition: 'all 0.3s',
                  color: 'inherit',
                }}
                onMouseEnter={(e) => {
                  if (clickable) e.currentTarget.style.paddingLeft = '0.75rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.3)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    fontFamily: 'Space Grotesk',
                    letterSpacing: '-0.01em',
                    color: '#FFFFFF',
                    marginBottom: clickable ? '0.25rem' : 0,
                  }}>
                    {inj.name}
                  </div>
                  {clickable && (
                    <div style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: '#C9A55A',
                    }}>
                      Ver protocolo →
                    </div>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: sevColor(inj.severity),
                  }} />
                  <span style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.6)',
                  }}>
                    {inj.severity}
                  </span>
                </div>
                <div style={{
                  fontSize: '1.25rem',
                  color: clickable ? '#C9A55A' : 'rgba(255,255,255,0.15)',
                  fontFamily: 'Space Grotesk',
                }}>
                  {clickable ? '→' : '·'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{
        marginTop: 'auto',
        padding: '1.75rem',
        background: 'linear-gradient(135deg, #C9A55A 0%, #B8943F 100%)',
        color: '#0A0A0A',
      }}>
        <div style={{
          fontSize: '0.6875rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 700,
          marginBottom: '0.5rem',
        }}>
          ¿No estás seguro?
        </div>
        <div style={{
          fontSize: '1.25rem',
          fontFamily: 'Space Grotesk',
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
          marginBottom: '1.25rem',
        }}>
          Diagnóstico preciso solo en valoración.
        </div>
        <button
          onClick={() => onNavigate('fisioterapia')}
          style={{
            background: '#0A0A0A',
            color: '#FFFFFF',
            border: 'none',
            padding: '0.875rem 1.5rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'Space Grotesk',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.625rem',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Agendar valoración
          <span>→</span>
        </button>
      </div>

      <style>{`
        @keyframes bmFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

if (typeof window !== "undefined") window.BodyMapSection = BodyMapSection;
/* ==================== components.jsx ==================== */

// ============================================================================
// GLOBAL STYLES FOR COMPONENTS
// ============================================================================

const headerStyles = {
  header: {
    position: 'sticky',
    top: 0,
    background: 'var(--neutral-light)',
    borderBottom: '1px solid var(--border-subtle)',
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--spacing-md)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '72px',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 600,
    color: 'var(--neutral-dark)',
  },
  nav: {
    display: 'flex',
    gap: 'var(--spacing-lg)',
    alignItems: 'center',
  },
  navLink: {
    fontSize: '15px',
    color: 'var(--text-secondary)',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  mobileMenu: {
    display: 'none',
    cursor: 'pointer',
    fontSize: '24px',
  },
};

const buttonStyles = {
  base: {
    padding: '14px 28px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
  },
  primary: {
    background: 'var(--primary)',
    color: 'white',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--neutral-dark)',
    border: '1px solid var(--border-subtle)',
  },
  whatsapp: {
    background: '#25D366',
    color: 'white',
  },
};

const heroStyles = {
  hero: {
    background: 'linear-gradient(135deg, #1A1D21 0%, #2A2D31 100%)',
    color: 'white',
    padding: 'var(--spacing-4xl) 0',
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
  },
  subtitle: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 'var(--spacing-md)',
    fontWeight: 500,
  },
  title: {
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: 600,
    marginBottom: 'var(--spacing-md)',
    lineHeight: 1.2,
  },
  description: {
    fontSize: '20px',
    lineHeight: 1.6,
    marginBottom: 'var(--spacing-xl)',
    color: 'rgba(255,255,255,0.85)',
  },
  actions: {
    display: 'flex',
    gap: 'var(--spacing-sm)',
    flexWrap: 'wrap',
  },
  image: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '40%',
    background: 'linear-gradient(90deg, #1A1D21 0%, transparent 30%, transparent 100%), url(data:image/svg+xml,%3Csvg width="400" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="600" fill="%23B8763A" opacity="0.1"/%3E%3C/svg%3E)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3,
  },
};

const trustBarStyles = {
  container: {
    background: 'white',
    borderRadius: '12px',
    padding: 'var(--spacing-xl)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'var(--spacing-lg)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  item: {
    textAlign: 'center',
  },
  value: {
    fontSize: '36px',
    fontWeight: 600,
    color: 'var(--primary)',
    marginBottom: '4px',
  },
  label: {
    fontSize: '14px',
    color: 'var(--text-secondary)',
  },
};

const cardStyles = {
  card: {
    background: 'white',
    borderRadius: '12px',
    padding: 'var(--spacing-lg)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    border: '1px solid var(--border-subtle)',
    transition: 'all 0.3s',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    width: '48px',
    height: '48px',
    background: 'rgba(184, 118, 58, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'var(--spacing-sm)',
    fontSize: '24px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: 'var(--spacing-xs)',
  },
  description: {
    fontSize: '15px',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    flex: 1,
  },
};

// ============================================================================
// HEADER COMPONENT
// ============================================================================

function Header({ currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const navItems = [
    { label: 'Sobre Germán', path: '/sobre-german/' },
    { label: 'Metodología', path: '/metodologia/' },
    { label: 'Lesiones', path: '/lesiones/' },
    { label: 'Deportes', path: '/deportes/' },
  ];
  
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.container}>
        <div style={headerStyles.logo} onClick={() => onNavigate('/')}>
          Germán Montenegro
        </div>
        <nav style={{...headerStyles.nav, ...(mobileOpen ? {display: 'flex', flexDirection: 'column', position: 'absolute', top: '72px', left: 0, right: 0, background: 'var(--neutral-light)', padding: 'var(--spacing-md)'} : {})}}>
          {navItems.map(item => (
            <a
              key={item.path}
              style={headerStyles.navLink}
              onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {item.label}
            </a>
          ))}
          <CTAButton variant="primary" size="small" onClick={() => onNavigate('/fisioterapia-bogota/')}>
            Agendar
          </CTAButton>
        </nav>
      </div>
    </header>
  );
}

// ============================================================================
// FOOTER COMPONENT
// ============================================================================

function Footer({ onNavigate }) {
  const footerStyles = {
    footer: {
      background: 'var(--neutral-dark)',
      color: 'white',
      padding: 'var(--spacing-3xl) 0 var(--spacing-lg)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginBottom: 'var(--spacing-xl)',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-sm)',
    },
    title: {
      fontSize: '16px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-xs)',
    },
    link: {
      fontSize: '15px',
      color: 'rgba(255,255,255,0.7)',
      cursor: 'pointer',
      transition: 'color 0.2s',
    },
    bottom: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: 'var(--spacing-lg)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.5)',
    },
  };
  
  return (
    <footer style={footerStyles.footer}>
      <div className="container">
        <div style={footerStyles.grid}>
          <div style={footerStyles.column}>
            <div style={footerStyles.title}>Germán Montenegro</div>
            <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '15px'}}>
              Fisioterapeuta deportivo y atleta. Diagnóstico preciso, tratamiento integrado, vuelta a competir.
            </p>
          </div>
          <div style={footerStyles.column}>
            <div style={footerStyles.title}>Servicios</div>
            <a style={footerStyles.link} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Fisioterapia Deportiva</a>
            <a style={footerStyles.link} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Quiropraxia</a>
            <a style={footerStyles.link} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Punción Seca</a>
            <a style={footerStyles.link} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Readaptación Deportiva</a>
          </div>
          <div style={footerStyles.column}>
            <div style={footerStyles.title}>Lesiones</div>
            <a style={footerStyles.link} onClick={() => onNavigate('/lesiones/pubalgia/')} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Pubalgia</a>
            <a style={footerStyles.link} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Ciática</a>
            <a style={footerStyles.link} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Tendinitis Rotuliana</a>
            <a style={footerStyles.link} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Contractura Muscular</a>
          </div>
          <div style={footerStyles.column}>
            <div style={footerStyles.title}>Contacto</div>
            <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '15px'}}>Bogotá, Colombia</p>
            <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '15px'}}>WhatsApp: +57 XXX XXX XXXX</p>
          </div>
        </div>
        <div style={footerStyles.bottom}>
          <div>© 2026 Germán Montenegro. Todos los derechos reservados.</div>
          <div style={{display: 'flex', gap: 'var(--spacing-md)'}}>
            <a style={footerStyles.link}>Privacidad</a>
            <a style={footerStyles.link}>Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// CTA BUTTON COMPONENT
// ============================================================================

function CTAButton({ children, variant = 'primary', size = 'normal', onClick, href }) {
  const sizeStyles = {
    small: { padding: '10px 20px', fontSize: '14px' },
    normal: { padding: '14px 28px', fontSize: '16px' },
    large: { padding: '16px 32px', fontSize: '18px' },
  };
  
  const style = {
    ...buttonStyles.base,
    ...buttonStyles[variant],
    ...sizeStyles[size],
  };
  
  const handleClick = () => {
    if (onClick) onClick();
    if (href) window.location.href = href;
  };
  
  return (
    <button
      style={style}
      onClick={handleClick}
      onMouseEnter={(e) => {
        if (variant === 'primary') e.target.style.background = 'var(--primary-dark)';
        if (variant === 'secondary') e.target.style.borderColor = 'var(--primary)';
        if (variant === 'whatsapp') e.target.style.background = '#1FA855';
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') e.target.style.background = 'var(--primary)';
        if (variant === 'secondary') e.target.style.borderColor = 'var(--border-subtle)';
        if (variant === 'whatsapp') e.target.style.background = '#25D366';
      }}
    >
      {children}
    </button>
  );
}

// ============================================================================
// HERO COMPONENT
// ============================================================================

function Hero({ onNavigate }) {
  return (
    <section style={heroStyles.hero}>
      <div style={heroStyles.image}></div>
      <div className="container">
        <div style={heroStyles.content}>
          <div style={heroStyles.subtitle}>Fisioterapia Deportiva en Bogotá</div>
          <h1 style={heroStyles.title}>Para atletas que no se detienen</h1>
          <p style={heroStyles.description}>
            Diagnóstico preciso, tratamiento integrado y plan de fortalecimiento para volver a competir. Sin atajos.
          </p>
          <div style={heroStyles.actions}>
            <CTAButton variant="primary" onClick={() => onNavigate('/fisioterapia-bogota/')}>
              Agendar Valoración
            </CTAButton>
            <CTAButton variant="whatsapp">
              WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// TRUST BAR COMPONENT
// ============================================================================

function TrustBar() {
  const metrics = [
    { value: '500+', label: 'Atletas tratados' },
    { value: '8 años', label: 'Experiencia deportiva' },
    { value: '4.9/5', label: 'Valoración promedio' },
    { value: '3 días', label: 'Respuesta promedio' },
  ];
  
  return (
    <div style={trustBarStyles.container}>
      {metrics.map((metric, i) => (
        <div key={i} style={trustBarStyles.item}>
          <div style={trustBarStyles.value}>{metric.value}</div>
          <div style={trustBarStyles.label}>{metric.label}</div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// TREATMENT TIMELINE COMPONENT
// ============================================================================

function TreatmentTimeline() {
  const phases = [
    {
      number: '01',
      title: 'Diagnóstico Preciso',
      description: 'Evaluación completa del movimiento, análisis biomecánico y diagnóstico diferencial. Sin adivinar.',
      duration: '1 sesión',
    },
    {
      number: '02',
      title: 'Tratamiento Integrado',
      description: 'Terapia manual, punción seca, quiropraxia y otras técnicas según tu caso específico.',
      duration: '3-8 sesiones',
    },
    {
      number: '03',
      title: 'Fortalecimiento Progresivo',
      description: 'Plan de ejercicios personalizado para corregir desbalances y prevenir recaídas.',
      duration: '4-8 semanas',
    },
    {
      number: '04',
      title: 'Return to Play',
      description: 'Readaptación al gesto deportivo específico. Vuelves más fuerte que antes.',
      duration: '2-4 semanas',
    },
  ];
  
  const timelineStyles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'var(--spacing-lg)',
    },
    phase: {
      position: 'relative',
      padding: 'var(--spacing-lg)',
      background: 'white',
      borderRadius: '12px',
      border: '2px solid var(--border-subtle)',
    },
    number: {
      fontSize: '48px',
      fontWeight: 700,
      color: 'var(--primary)',
      lineHeight: 1,
      marginBottom: 'var(--spacing-sm)',
      opacity: 0.5,
    },
    title: {
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-xs)',
    },
    description: {
      fontSize: '15px',
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      marginBottom: 'var(--spacing-sm)',
    },
    duration: {
      fontSize: '13px',
      color: 'var(--primary)',
      fontWeight: 500,
    },
  };
  
  return (
    <div style={timelineStyles.container}>
      {phases.map((phase, i) => (
        <div key={i} style={timelineStyles.phase}>
          <div style={timelineStyles.number}>{phase.number}</div>
          <h3 style={timelineStyles.title}>{phase.title}</h3>
          <p style={timelineStyles.description}>{phase.description}</p>
          <div style={timelineStyles.duration}>⏱ {phase.duration}</div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// RED FLAGS BOX COMPONENT
// ============================================================================

function RedFlagsBox({ items, title = "⚠️ Banderas Rojas" }) {
  const styles = {
    container: {
      background: 'rgba(209, 75, 61, 0.08)',
      border: '2px solid var(--red-warning)',
      borderRadius: '12px',
      padding: 'var(--spacing-lg)',
      marginTop: 'var(--spacing-lg)',
    },
    title: {
      color: 'var(--red-warning)',
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-sm)',
    },
    list: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-xs)',
    },
    item: {
      fontSize: '15px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
    },
    bullet: {
      color: 'var(--red-warning)',
      fontWeight: 'bold',
    },
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.title}>{title}</div>
      <ul style={styles.list}>
        {items.map((item, i) => (
          <li key={i} style={styles.item}>
            <span style={styles.bullet}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================================
// SYMPTOM CHECKLIST COMPONENT
// ============================================================================

function SymptomChecklist({ symptoms }) {
  const [checked, setChecked] = useState([]);
  
  const toggleSymptom = (index) => {
    setChecked(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  
  const styles = {
    container: {
      background: 'white',
      borderRadius: '12px',
      padding: 'var(--spacing-lg)',
      border: '1px solid var(--border-subtle)',
    },
    title: {
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-md)',
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-sm)',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
      padding: 'var(--spacing-sm)',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background 0.2s',
    },
    checkbox: {
      width: '20px',
      height: '20px',
      border: '2px solid var(--border-subtle)',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    checkboxChecked: {
      background: 'var(--primary)',
      borderColor: 'var(--primary)',
      color: 'white',
    },
    label: {
      fontSize: '15px',
      color: 'var(--text-primary)',
    },
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.title}>¿Tienes estos síntomas?</div>
      <div style={styles.list}>
        {symptoms.map((symptom, i) => (
          <div
            key={i}
            style={{
              ...styles.item,
              background: checked.includes(i) ? 'rgba(184, 118, 58, 0.05)' : 'transparent',
            }}
            onClick={() => toggleSymptom(i)}
          >
            <div style={{
              ...styles.checkbox,
              ...(checked.includes(i) ? styles.checkboxChecked : {}),
            }}>
              {checked.includes(i) && '✓'}
            </div>
            <div style={styles.label}>{symptom}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// FAQ ACCORDION COMPONENT
// ============================================================================

function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-sm)',
    },
    item: {
      background: 'white',
      borderRadius: '12px',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
    },
    question: {
      padding: 'var(--spacing-lg)',
      fontSize: '18px',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'background 0.2s',
    },
    answer: {
      padding: '0 var(--spacing-lg) var(--spacing-lg)',
      fontSize: '15px',
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
    },
    icon: {
      fontSize: '20px',
      transition: 'transform 0.3s',
      color: 'var(--primary)',
    },
  };
  
  return (
    <div style={styles.container}>
      {items.map((item, i) => (
        <div key={i} style={styles.item}>
          <div
            style={styles.question}
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(184, 118, 58, 0.02)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            <span>{item.question}</span>
            <span style={{
              ...styles.icon,
              transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
            }}>
              ▼
            </span>
          </div>
          {openIndex === i && (
            <div style={styles.answer}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// INJURY CARD COMPONENT
// ============================================================================

function InjuryCard({ injury, onNavigate }) {
  return (
    <div
      style={cardStyles.card}
      onClick={() => onNavigate(injury.url)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
      }}
    >
      <div style={cardStyles.icon}>{injury.icon}</div>
      <h3 style={cardStyles.title}>{injury.name}</h3>
      <p style={cardStyles.description}>{injury.description}</p>
    </div>
  );
}

// ============================================================================
// SPORT CARD COMPONENT
// ============================================================================

function SportCard({ sport, onNavigate }) {
  return (
    <div
      style={cardStyles.card}
      onClick={() => onNavigate(sport.url)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
      }}
    >
      <div style={cardStyles.icon}>{sport.icon}</div>
      <h3 style={cardStyles.title}>{sport.name}</h3>
      <p style={cardStyles.description}>{sport.description}</p>
    </div>
  );
}

// ============================================================================
// CTA CARD COMPONENT
// ============================================================================

function CTACard({ variant = 'primary', onNavigate }) {
  const styles = {
    card: {
      background: variant === 'primary' 
        ? 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'
        : 'white',
      color: variant === 'primary' ? 'white' : 'var(--text-primary)',
      padding: 'var(--spacing-3xl)',
      borderRadius: '16px',
      textAlign: 'center',
      marginTop: 'var(--spacing-3xl)',
      border: variant === 'primary' ? 'none' : '1px solid var(--border-subtle)',
    },
    title: {
      fontSize: 'clamp(26px, 4vw, 38px)',
      fontWeight: 600,
      marginBottom: 'var(--spacing-sm)',
    },
    description: {
      fontSize: '18px',
      marginBottom: 'var(--spacing-lg)',
      opacity: variant === 'primary' ? 0.9 : 1,
      color: variant === 'primary' ? 'white' : 'var(--text-secondary)',
    },
  };
  
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>¿Listo para volver a entrenar?</h2>
      <p style={styles.description}>
        Agenda tu valoración inicial. Primera sesión: evaluación completa + diagnóstico preciso + plan de tratamiento.
      </p>
      <div style={{display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'center', flexWrap: 'wrap'}}>
        <CTAButton variant={variant === 'primary' ? 'secondary' : 'primary'} onClick={() => onNavigate('/fisioterapia-bogota/')}>
          Agendar Valoración
        </CTAButton>
        <CTAButton variant="whatsapp">
          Consultar por WhatsApp
        </CTAButton>
      </div>
    </div>
  );
}

// ============================================================================
// DIAGNOSTIC TABLE COMPONENT
// ============================================================================

function DiagnosticTable({ rows }) {
  const styles = {
    container: {
      overflowX: 'auto',
      marginTop: 'var(--spacing-lg)',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      background: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
    },
    th: {
      background: 'var(--neutral-dark)',
      color: 'white',
      padding: 'var(--spacing-sm) var(--spacing-md)',
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 600,
    },
    td: {
      padding: 'var(--spacing-sm) var(--spacing-md)',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: '15px',
    },
  };
  
  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Condición</th>
            <th style={styles.th}>Localización del dolor</th>
            <th style={styles.th}>Prueba diagnóstica</th>
            <th style={styles.th}>Hallazgo clave</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td style={{...styles.td, fontWeight: 600}}>{row.condition}</td>
              <td style={styles.td}>{row.location}</td>
              <td style={styles.td}>{row.test}</td>
              <td style={styles.td}>{row.finding}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ============================================================================
// STICKY MOBILE CTA COMPONENT
// ============================================================================

function StickyMobileCTA({ onNavigate }) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const styles = {
    container: {
      position: 'fixed',
      bottom: visible ? 0 : '-100px',
      left: 0,
      right: 0,
      background: 'white',
      padding: 'var(--spacing-sm) var(--spacing-md)',
      boxShadow: '0 -4px 12px rgba(0,0,0,0.1)',
      display: 'flex',
      gap: 'var(--spacing-sm)',
      zIndex: 999,
      transition: 'bottom 0.3s',
    },
  };
  
  return (
    <div style={styles.container}>
      <CTAButton variant="primary" onClick={() => onNavigate('/fisioterapia-bogota/')} style={{flex: 1}}>
        Agendar
      </CTAButton>
      <CTAButton variant="whatsapp" style={{flex: 1}}>
        WhatsApp
      </CTAButton>
    </div>
  );
}

// Export all components to window
Object.assign(window, {
  Header,
  Footer,
  CTAButton,
  Hero,
  TrustBar,
  TreatmentTimeline,
  RedFlagsBox,
  SymptomChecklist,
  FAQAccordion,
  InjuryCard,
  SportCard,
  CTACard,
  DiagnosticTable,
  StickyMobileCTA,
});
/* ==================== footer.jsx ==================== */
// FOOTER - Pie de página global rico en enlaces

function SiteFooter({ onNavigate }) {
  const columns = [
    {
      title: 'Lesiones',
      links: [
        { label: 'Pubalgia', page: 'pubalgia' },
        { label: 'Ciática', page: 'ciatica' },
        { label: 'Tendinitis Rotuliana', page: 'tendinitis' },
        { label: 'Hombro Congelado', page: 'hombro' },
        { label: 'Condromalacia', page: 'condromalacia' },
        { label: 'Ver todas →', page: 'lesiones', accent: true },
      ],
    },
    {
      title: 'Deportes',
      links: [
        { label: 'CrossFit', page: 'crossfit' },
        { label: 'Weightlifting', page: 'weightlifting' },
        { label: 'BJJ', page: 'bjj' },
        { label: 'Boxeo', page: 'boxeo' },
        { label: 'Ver todos →', page: 'deportes', accent: true },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Fisioterapia Deportiva', page: 'fisioterapia' },
        { label: 'Quiropraxia', page: 'quiropraxia' },
        { label: 'Punción Seca', page: 'puncion' },
        { label: 'Masaje Deportivo', page: 'masajes' },
        { label: 'Readaptación', page: 'readaptacion' },
      ],
    },
    {
      title: 'Germán',
      links: [
        { label: 'Sobre Germán', page: 'sobre' },
        { label: 'El Método', page: 'metodologia' },
        { label: 'Agendar valoración', page: 'fisioterapia', accent: true },
      ],
    },
  ];

  const linkStyle = (accent) => ({
    color: accent ? '#C9A55A' : 'rgba(255,255,255,0.6)',
    fontSize: '0.9375rem',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.25s, padding-left 0.25s',
    fontWeight: accent ? 600 : 400,
    display: 'inline-block',
  });

  return (
    <footer style={{ background: '#0A0A0A', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      {/* CTA strip */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{
          padding: '4rem 2rem',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '3rem', alignItems: 'center',
        }} className="ft-cta">
          <div>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, color: '#C9A55A', marginBottom: '1.25rem' }}>
              Bogotá · Fisioterapia deportiva
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, lineHeight: 1,
              letterSpacing: '-0.03em', fontFamily: 'Space Grotesk',
            }}>
              ¿Listo para
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}> volver?</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }} className="ft-cta-btns">
            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                background: '#C9A55A', color: '#0A0A0A', border: 'none', padding: '1.25rem 2rem',
                fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', fontFamily: 'Space Grotesk', transition: 'all 0.3s',
                display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#FFFFFF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#C9A55A'; }}
            >
              Agendar valoración<span>→</span>
            </button>
            <button
              style={{
                background: 'transparent', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.25)',
                padding: '1.25rem 2rem', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Space Grotesk', transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A55A'; e.currentTarget.style.color = '#C9A55A'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#FFFFFF'; }}
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="container" style={{ padding: '4.5rem 2rem 3rem' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.5fr repeat(4, 1fr)', gap: '3rem',
        }} className="ft-grid">
          {/* Brand block */}
          <div className="ft-brand">
            <div onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', marginBottom: '1.5rem' }}>
              <div style={{
                width: '38px', height: '38px', border: '1.5px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: '#C9A55A', letterSpacing: '-0.03em' }}>GM</span>
              </div>
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontSize: '1rem', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.01em' }}>Germán Montenegro</div>
                <div style={{ fontSize: '0.5625rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, color: '#C9A55A', marginTop: '0.25rem' }}>Fisioterapia Deportiva</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', maxWidth: '300px', marginBottom: '1.5rem' }}>
              Atleta y fisioterapeuta. Diagnóstico preciso, tratamiento integrado y vuelta a competir. Sin atajos.
            </p>
            {/* Movement hashtag */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
              padding: '0.625rem 1rem', border: '1px solid rgba(201,165,90,0.35)',
              marginBottom: '1.75rem',
            }}>
              <span style={{ width: '6px', height: '6px', background: '#C9A55A', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', letterSpacing: '-0.01em', color: '#C9A55A' }}>#latecnicaprimero</span>
            </div>
            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { k: 'Ubicación', v: 'Bogotá, Colombia' },
                { k: 'WhatsApp', v: '+57 XXX XXX XXXX' },
                { k: 'Horario', v: 'Lun–Vie 7–19 · Sáb 8–14' },
              ].map(c => (
                <div key={c.k} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.8125rem' }}>
                  <span style={{ color: '#C9A55A', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.625rem', minWidth: '62px', paddingTop: '0.1rem' }}>{c.k}</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>{c.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.title}>
              <div style={{
                fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase',
                fontWeight: 700, color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem',
              }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {col.links.map(l => (
                  <a
                    key={l.label}
                    onClick={() => onNavigate(l.page)}
                    style={linkStyle(l.accent)}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A55A'; e.currentTarget.style.paddingLeft = '0.375rem'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = l.accent ? '#C9A55A' : 'rgba(255,255,255,0.6)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{
          padding: '1.75rem 2rem', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
        }} className="ft-bottom">
          <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Germán Montenegro · Todos los derechos reservados
          </div>
          <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            {['Privacidad', 'Términos', 'Instagram', 'YouTube'].map(l => (
              <a key={l} style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', textDecoration: 'none', transition: 'color 0.25s' }}
                 onMouseEnter={(e) => e.currentTarget.style.color = '#C9A55A'}
                 onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ft-cta { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .ft-cta-btns { justify-content: flex-start !important; }
          .ft-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; }
          .ft-brand { grid-column: 1 / -1 !important; }
          .ft-bottom { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 560px) {
          .ft-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

if (typeof window !== "undefined") window.SiteFooter = SiteFooter;
/* ==================== pubalgia.jsx ==================== */
// PUBALGIA - PARTE 1 - Hero, WhatIs, Checklist
// Las demás secciones están en pubalgia-2.jsx

// =====================================================================
// HERO
// =====================================================================
function PubalgiaHero({ onNavigate }) {
  return (
    <section style={{
      padding: '12rem 0 6rem',
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(10rem, 24vw, 26rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        PUBALGIA.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        {/* Breadcrumb */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem',
          fontSize: '0.6875rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          <a onClick={() => onNavigate('lesiones')} style={{ color: 'rgba(10,10,10,0.5)', cursor: 'pointer', textDecoration: 'none' }}>Lesiones</a>
          <span style={{ color: 'rgba(10,10,10,0.25)' }}>/</span>
          <span style={{ color: '#C9A55A' }}>Pubalgia</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '4rem',
          alignItems: 'flex-end',
        }} className="pub-hero-grid">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}>
              <div style={{ width: '60px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Ingle · Pelvis · Aductores
              </div>
            </div>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
              marginBottom: '2.5rem',
            }}>
              Pubalgia.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                Sin atajos.
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
              lineHeight: 1.55,
              color: 'rgba(10,10,10,0.65)',
              maxWidth: '620px',
              marginBottom: '2rem',
            }}>
              Diagnóstico y tratamiento deportivo del dolor en la ingle.
              <span style={{ color: '#0A0A0A', fontWeight: 500 }}> Una de las lesiones más mal diagnosticadas del atletismo recreacional.</span>
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate('fisioterapia')}
                style={{
                  background: '#0A0A0A',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#C9A55A';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0A0A0A';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Agendar valoración
                <span>→</span>
              </button>
              <a
                href="#checklist"
                style={{
                  background: 'transparent',
                  color: '#0A0A0A',
                  border: '1px solid rgba(10,10,10,0.2)',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A55A';
                  e.currentTarget.style.color = '#C9A55A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(10,10,10,0.2)';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
              >
                Auto-evalúate ↓
              </a>
            </div>
          </div>

          {/* TL;DR Card */}
          <div style={{
            background: '#0A0A0A',
            color: '#FFFFFF',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }} className="pub-tldr">
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: '#C9A55A',
            }} />
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#C9A55A',
              marginBottom: '1.5rem',
            }}>
              TL;DR Clínico
            </div>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '1.5rem',
            }}>
              Dolor en la ingle por sobrecarga de la sínfisis púbica y tejidos adyacentes. Frecuente en deportes de impacto y cambios de dirección.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#C9A55A',
                  lineHeight: 1,
                  marginBottom: '0.25rem',
                }}>
                  4—12
                </div>
                <div style={{
                  fontSize: '0.6875rem',
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  Semanas
                </div>
              </div>
              <div>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#C9A55A',
                  lineHeight: 1,
                  marginBottom: '0.25rem',
                }}>
                  Alta
                </div>
                <div style={{
                  fontSize: '0.6875rem',
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  Complejidad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pub-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// WHAT IS — Editorial dual
// =====================================================================
function PubalgiaWhatIs() {
  const facts = [
    { label: 'Zona afectada',     value: 'Sínfisis púbica, aductores, recto abdominal' },
    { label: 'Mecanismo',         value: 'Sobrecarga crónica + desbalance muscular pelvis—core' },
    { label: 'Deportes de riesgo', value: 'CrossFit, fútbol, running, weightlifting, BJJ' },
    { label: 'Recuperación',      value: '4—12 semanas con tratamiento estructurado' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="wi-grid">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Qué es realmente
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
              marginBottom: '2rem',
            }}>
              No es
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                una sola lesión.
              </span>
            </h2>

            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'rgba(10,10,10,0.7)',
              marginBottom: '1.5rem',
            }}>
              Pubalgia es un <strong style={{ color: '#0A0A0A' }}>síndrome de dolor inguinal</strong> — no una entidad única. Bajo el mismo síntoma pueden coexistir osteítis púbica, tendinopatía de aductores, conflicto de tejidos abdominales o disfunción del recto abdominal.
            </p>
            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(10,10,10,0.6)',
              marginBottom: '1.5rem',
            }}>
              Por eso el diagnóstico tradicional falla: te dan ibuprofeno y reposo. Vuelves a entrenar — vuelve el dolor. La pubalgia se resuelve atacando el desbalance pelvis—core—aductores que la produce, no solo la inflamación.
            </p>
            <div style={{
              padding: '1.25rem 1.5rem',
              background: '#FFFFFF',
              borderLeft: '3px solid #C9A55A',
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              color: 'rgba(10,10,10,0.75)',
            }}>
              <strong style={{ color: '#0A0A0A' }}>Importante:</strong> Antes de tratar pubalgia, hay que descartar hernia inguinal, lesión de cadera y patología visceral. El diagnóstico diferencial es crítico.
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            border: '1px solid rgba(10,10,10,0.08)',
            background: '#FFFFFF',
          }}>
            {facts.map((f, i) => (
              <div key={i} style={{
                padding: '1.75rem 2rem',
                borderBottom: i < facts.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: '1.25rem',
                alignItems: 'center',
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'rgba(10,10,10,0.3)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#C9A55A',
                    marginBottom: '0.375rem',
                  }}>
                    {f.label}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#0A0A0A',
                    fontWeight: 500,
                    lineHeight: 1.45,
                  }}>
                    {f.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .wi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// INTERACTIVE CHECKLIST — Self-assessment
// =====================================================================
function PubalgiaChecklist({ onNavigate }) {
  const questions = [
    { id: 'q1', text: 'Dolor en la ingle al correr o cambiar de dirección', weight: 2, red: false },
    { id: 'q2', text: 'El dolor empeora al toser, estornudar o reírte fuerte', weight: 2, red: false },
    { id: 'q3', text: 'Sientes molestia al activar abdominales o core', weight: 1, red: false },
    { id: 'q4', text: 'Tirantez al separar/juntar piernas con resistencia', weight: 2, red: false },
    { id: 'q5', text: 'El dolor te ha durado más de 2 semanas', weight: 1, red: false },
    { id: 'q6', text: 'Practicas deporte con saltos, sprints o cambios de dirección', weight: 1, red: false },
    { id: 'q7', text: 'Te duele al levantarte de la cama por la mañana', weight: 1, red: false },
    { id: 'q8', text: 'Tienes bulto inguinal visible o pérdida de fuerza en la pierna', weight: 0, red: true },
  ];

  const [answers, setAnswers] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const score = questions.reduce((s, q) => s + (answers[q.id] === 'si' ? q.weight : 0), 0);
  const maxScore = questions.reduce((s, q) => s + q.weight, 0);
  const hasRedFlag = answers['q8'] === 'si';
  const answered = Object.keys(answers).length;
  const allAnswered = answered === questions.length;

  const getResult = () => {
    if (hasRedFlag) {
      return {
        level: 'Bandera roja',
        color: '#DC2626',
        title: 'Atención inmediata.',
        message: 'Síntomas que requieren evaluación urgente. No es solo pubalgia — puede ser hernia inguinal, lesión nerviosa o patología visceral. No esperes.',
        ctaLabel: 'WhatsApp inmediato',
      };
    }
    if (score >= 7) return {
      level: 'Probabilidad alta',
      color: '#DC2626',
      title: 'Alta probabilidad.',
      message: 'El patrón de síntomas coincide fuertemente con pubalgia. No es diagnóstico — es señal clara de que necesitas evaluación clínica profesional.',
      ctaLabel: 'Agendar valoración',
    };
    if (score >= 4) return {
      level: 'Probabilidad media',
      color: '#C9A55A',
      title: 'Probabilidad media.',
      message: 'Algunos síntomas compatibles con pubalgia, pero también con otras lesiones (cadera, lumbar, recto abdominal). El diagnóstico diferencial es lo importante acá.',
      ctaLabel: 'Agendar valoración',
    };
    return {
      level: 'Probabilidad baja',
      color: '#16A34A',
      title: 'Probabilidad baja.',
      message: 'Tus síntomas no encajan con un patrón típico de pubalgia. Probablemente sea otra lesión. Si el dolor persiste, igual conviene valoración.',
      ctaLabel: 'Ver otras lesiones',
    };
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const result = submitted ? getResult() : null;

  return (
    <section id="checklist" style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        left: '-3%',
        bottom: '-2rem',
        fontSize: 'clamp(8rem, 18vw, 18rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        TIENES?
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '3rem',
          alignItems: 'flex-end',
        }} className="ck-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Auto-evaluación · 8 preguntas
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
            }}>
              ¿Es
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                pubalgia?
              </span>
            </h2>
          </div>

          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(10,10,10,0.6)',
            lineHeight: 1.55,
            maxWidth: '460px',
          }}>
            Marca lo que apliquen. Te doy una probabilidad orientativa — no diagnóstico. Cualquier resultado se confirma solo en valoración presencial.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          background: '#FFFFFF',
        }} className="ck-layout">
          {/* Questions */}
          <div style={{
            borderRight: '1px solid rgba(10,10,10,0.08)',
          }} className="ck-questions">
            {questions.map((q, i) => {
              const ans = answers[q.id];
              return (
                <div key={q.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr auto',
                  gap: '1.25rem',
                  padding: '1.5rem 2rem',
                  borderBottom: i < questions.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                  alignItems: 'center',
                }}>
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: ans ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                    transition: 'color 0.3s',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    {q.red && (
                      <div style={{
                        fontSize: '0.625rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        color: '#DC2626',
                        marginBottom: '0.375rem',
                      }}>
                        ⚠ Bandera roja
                      </div>
                    )}
                    <div style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.45,
                      color: '#0A0A0A',
                      fontWeight: 500,
                    }}>
                      {q.text}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.375rem' }}>
                    {['si', 'no'].map(opt => {
                      const isSel = ans === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() => handleAnswer(q.id, opt)}
                          style={{
                            width: '52px',
                            height: '36px',
                            background: isSel ? (q.red && opt === 'si' ? '#DC2626' : '#0A0A0A') : 'transparent',
                            color: isSel ? '#FFFFFF' : 'rgba(10,10,10,0.5)',
                            border: `1px solid ${isSel ? (q.red && opt === 'si' ? '#DC2626' : '#0A0A0A') : 'rgba(10,10,10,0.15)'}`,
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            fontFamily: 'Space Grotesk',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            if (!isSel) {
                              e.currentTarget.style.borderColor = '#C9A55A';
                              e.currentTarget.style.color = '#0A0A0A';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSel) {
                              e.currentTarget.style.borderColor = 'rgba(10,10,10,0.15)';
                              e.currentTarget.style.color = 'rgba(10,10,10,0.5)';
                            }
                          }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Result panel */}
          <div style={{
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: submitted ? 'flex-start' : 'space-between',
            background: '#FAFAFA',
            gap: '1.5rem',
          }} className="ck-result">
            {!submitted ? (
              <>
                <div>
                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: 'rgba(10,10,10,0.4)',
                    marginBottom: '1rem',
                  }}>
                    Progreso · {answered}/{questions.length}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                    color: '#0A0A0A',
                    marginBottom: '1rem',
                  }}>
                    {allAnswered ? 'Listo para calcular.' : 'Responde sí o no a cada pregunta.'}
                  </h3>
                  <p style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.55,
                    color: 'rgba(10,10,10,0.55)',
                  }}>
                    No estoy adivinando. Las preguntas vienen de los criterios clínicos que uso en valoración presencial.
                  </p>
                </div>

                <div>
                  {/* Progress bar */}
                  <div style={{
                    height: '4px',
                    background: 'rgba(10,10,10,0.08)',
                    marginBottom: '1.5rem',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${(answered / questions.length) * 100}%`,
                      background: '#C9A55A',
                      transition: 'width 0.4s',
                    }} />
                  </div>

                  <button
                    onClick={() => setSubmitted(true)}
                    disabled={!allAnswered}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      background: allAnswered ? '#0A0A0A' : 'rgba(10,10,10,0.08)',
                      color: allAnswered ? '#FFFFFF' : 'rgba(10,10,10,0.3)',
                      border: 'none',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: allAnswered ? 'pointer' : 'not-allowed',
                      fontFamily: 'Space Grotesk',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      if (allAnswered) e.currentTarget.style.background = '#C9A55A';
                      if (allAnswered) e.currentTarget.style.color = '#0A0A0A';
                    }}
                    onMouseLeave={(e) => {
                      if (allAnswered) e.currentTarget.style.background = '#0A0A0A';
                      if (allAnswered) e.currentTarget.style.color = '#FFFFFF';
                    }}
                  >
                    {allAnswered ? 'Ver resultado →' : `Faltan ${questions.length - answered}`}
                  </button>
                </div>
              </>
            ) : (
              <div style={{ animation: 'ckFade 0.4s ease-out' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: result.color,
                  }} />
                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: result.color,
                  }}>
                    {result.level}
                  </div>
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  color: '#0A0A0A',
                  marginBottom: '1rem',
                }}>
                  {result.title}
                </h3>

                {!hasRedFlag && (
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '3.5rem',
                    fontWeight: 700,
                    color: result.color,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    marginBottom: '1.25rem',
                  }}>
                    {score}<span style={{ color: 'rgba(10,10,10,0.2)', fontSize: '1.75rem' }}>/{maxScore}</span>
                  </div>
                )}

                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: 'rgba(10,10,10,0.7)',
                  marginBottom: '2rem',
                }}>
                  {result.message}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    onClick={() => onNavigate('fisioterapia')}
                    style={{
                      padding: '1.125rem 1.25rem',
                      background: hasRedFlag ? '#DC2626' : '#C9A55A',
                      color: hasRedFlag ? '#FFFFFF' : '#0A0A0A',
                      border: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontFamily: 'Space Grotesk',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {result.ctaLabel} →
                  </button>
                  <button
                    onClick={reset}
                    style={{
                      padding: '0.875rem 1.25rem',
                      background: 'transparent',
                      color: 'rgba(10,10,10,0.6)',
                      border: '1px solid rgba(10,10,10,0.15)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontFamily: 'Space Grotesk',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#C9A55A';
                      e.currentTarget.style.color = '#C9A55A';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(10,10,10,0.15)';
                      e.currentTarget.style.color = 'rgba(10,10,10,0.6)';
                    }}
                  >
                    ↺ Hacer otra vez
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ckFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .ck-header { grid-template-columns: 1fr !important; }
          .ck-layout { grid-template-columns: 1fr !important; }
          .ck-questions { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); }
        }
      `}</style>
    </section>
  );
}

if (typeof window !== "undefined") window.PubalgiaHero = PubalgiaHero;
if (typeof window !== "undefined") window.PubalgiaWhatIs = PubalgiaWhatIs;
if (typeof window !== "undefined") window.PubalgiaChecklist = PubalgiaChecklist;
/* ==================== pubalgia-2.jsx ==================== */
// PUBALGIA - PARTE 2 - Resto de secciones + PubalgiaPage shell
// Síntomas · Causas · BySport · Differential · Treatment · Exercises · Recovery · CTA · FAQ · Related

// =====================================================================
// PUBALGIA PAGE SHELL (uses components from both files via window)
// =====================================================================
function PubalgiaPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = React.useState(0);
  const [activeSport, setActiveSport] = React.useState(0);
  const [activePhase, setActivePhase] = React.useState(0);

  const Hero = window.PubalgiaHero;
  const WhatIs = window.PubalgiaWhatIs;
  const Checklist = window.PubalgiaChecklist;

  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <WhatIs />
      <Checklist onNavigate={onNavigate} />
      <PubalgiaSymptoms />
      <PubalgiaCauses />
      <PubalgiaBySport activeSport={activeSport} setActiveSport={setActiveSport} />
      <PubalgiaDifferential />
      <PubalgiaTreatment activePhase={activePhase} setActivePhase={setActivePhase} />
      <PubalgiaExercises />
      <PubalgiaRecovery />
      <PubalgiaCTA onNavigate={onNavigate} />
      <PubalgiaFAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <PubalgiaRelated onNavigate={onNavigate} />
    </main>
  );
}

// =====================================================================
// SHARED SECTION SHELL
// =====================================================================
function SectionHeader({ kicker, title, subtitle, intro, dark }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      marginBottom: '4rem',
      alignItems: 'flex-end',
    }} className="sh-header">
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{
            fontSize: '0.75rem',
            color: '#C9A55A',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>{kicker}</div>
        </div>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          fontFamily: 'Space Grotesk',
          color: dark ? '#FFFFFF' : '#0A0A0A',
        }}>
          {title}
          <br />
          <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{subtitle}</span>
        </h2>
      </div>
      {intro && (
        <p style={{
          fontSize: '1.0625rem',
          color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.6)',
          lineHeight: 1.55,
          maxWidth: '460px',
        }}>{intro}</p>
      )}
      <style>{`@media (max-width: 900px) { .sh-header { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// =====================================================================
// SYMPTOMS
// =====================================================================
function PubalgiaSymptoms() {
  const symptoms = [
    'Dolor en la ingle que empeora al correr o cambiar de dirección',
    'Molestia al toser, estornudar o activar abdominales',
    'Sensación de tirantez en la zona del pubis',
    'Dolor al comprimir las piernas (aductores)',
    'Incomodidad al levantarse de la cama por la mañana',
    'Dolor unilateral o bilateral en la ingle',
  ];

  const redFlags = [
    'Bulto visible en la ingle (posible hernia)',
    'Dolor súbito intenso con "pop" audible (rotura)',
    'Fiebre + dolor inguinal (infección)',
    'Pérdida de fuerza severa en la pierna',
    'Dolor que no mejora tras 2 semanas de reposo',
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <SectionHeader
          kicker="Síntomas · Cómo se manifiesta"
          title="Cómo"
          subtitle="se siente."
          intro="Los síntomas típicos son patrón. Las banderas rojas son urgencia. Diferenciar las dos importa."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          background: '#FFFFFF',
        }} className="sym-grid">
          {/* Symptoms */}
          <div style={{
            padding: '2.5rem 2rem',
            borderRight: '1px solid rgba(10,10,10,0.08)',
          }} className="sym-list">
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(10,10,10,0.08)',
            }}>
              Síntomas típicos · {symptoms.length}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {symptoms.map((s, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr',
                  gap: '1rem',
                  padding: '1.125rem 0',
                  borderBottom: i < symptoms.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: '#C9A55A',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.5,
                    color: '#0A0A0A',
                  }}>
                    {s}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Red flags */}
          <div style={{
            background: '#0A0A0A',
            color: '#FFFFFF',
            padding: '2.5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
          }} className="sym-red">
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: '#DC2626',
            }} />
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#DC2626',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}>
              ⚠ Banderas rojas · Atención inmediata
            </div>
            <p style={{
              fontSize: '0.875rem',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '1.5rem',
            }}>
              Si presentas alguno de estos signos, no es pubalgia simple. Consulta urgente.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {redFlags.map((f, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '0.875rem',
                  alignItems: 'flex-start',
                  fontSize: '0.9375rem',
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.85)',
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#DC2626',
                    marginTop: '0.4rem',
                    flexShrink: 0,
                  }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sym-grid { grid-template-columns: 1fr !important; }
          .sym-list { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// CAUSES
// =====================================================================
function PubalgiaCauses() {
  const causes = [
    {
      title: 'Sobrecarga crónica',
      description: 'Volumen de entrenamiento que excede capacidad de recuperación. Más común que el trauma agudo.',
      example: 'Crossfittero que pasa de 3 a 6 WODs semanales sin descarga.',
    },
    {
      title: 'Desbalance pelvis-core',
      description: 'Glúteos débiles + core inestable obligan al aductor a compensar. El aductor se rompe.',
      example: 'Runner con glúteo medio dormido por estar 8h sentado.',
    },
    {
      title: 'Limitación cadera',
      description: 'Movilidad reducida en cadera transfiere carga a sínfisis púbica. Cualquier giro la castiga.',
      example: 'BJJ atleta con caderas tensas + guardia abierta forzada.',
    },
    {
      title: 'Errores técnicos',
      description: 'Cambios de dirección sin alineación, sentadillas con rodillas al centro, sprints con pelvis caída.',
      example: 'Wall balls 150 reps con rodillas colapsando.',
    },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <SectionHeader
          kicker="Causas · Por qué aparece"
          title="No es"
          subtitle="mala suerte."
          intro="La pubalgia tiene causa biomecánica. Si entiendes el mecanismo, entiendes la solución."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'rgba(10,10,10,0.08)',
          border: '1px solid rgba(10,10,10,0.08)',
        }} className="cau-grid">
          {causes.map((c, i) => (
            <div key={i} style={{
              padding: '2.5rem 2rem',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              minHeight: '260px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '1rem',
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#C9A55A',
                  lineHeight: 0.85,
                  letterSpacing: '-0.03em',
                }}>
                  0{i + 1}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#0A0A0A',
                }}>
                  {c.title}.
                </h3>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.55,
                color: 'rgba(10,10,10,0.7)',
              }}>
                {c.description}
              </p>
              <div style={{
                marginTop: 'auto',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(10,10,10,0.06)',
                fontSize: '0.8125rem',
                fontStyle: 'italic',
                color: 'rgba(10,10,10,0.5)',
                lineHeight: 1.45,
              }}>
                <span style={{
                  display: 'inline-block',
                  marginRight: '0.375rem',
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C9A55A',
                  fontWeight: 700,
                  fontStyle: 'normal',
                }}>Ej.</span>
                {c.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cau-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// BY SPORT — Tab interface
// =====================================================================
function PubalgiaBySport({ activeSport, setActiveSport }) {
  const sports = [
    {
      name: 'CrossFit',
      trigger: 'Wall balls + box jumps repetitivos + sentadillas profundas con apertura forzada',
      scenario: 'Crossfittero que hace 150 wall balls en un WOD. Día siguiente: tirantez al toser. Semana 3: no puede sentadilla profunda sin dolor.',
      stats: { '% de mis pacientes': '35%', 'Tiempo medio recuperación': '6—8 sem', 'Vuelta gradual': 'Sí, sin sprint' },
    },
    {
      name: 'Running',
      trigger: 'Aumento brusco de kilometraje, sprint sin progresión, terreno irregular',
      scenario: 'Runner que pasa de 30 a 60 km/sem en mes. Empieza con tirantez tras tirada larga. No puede correr en bajada sin dolor.',
      stats: { '% de mis pacientes': '25%', 'Tiempo medio recuperación': '5—7 sem', 'Vuelta gradual': 'Sí, sin sprint 4 sem' },
    },
    {
      name: 'Fútbol',
      trigger: 'Cambios de dirección + remates + tackles laterales',
      scenario: 'Jugador amateur de partido los sábados. Tras un sprint frenado en seco siente tirantez. No puede chutar con potencia.',
      stats: { '% de mis pacientes': '20%', 'Tiempo medio recuperación': '6—10 sem', 'Vuelta gradual': 'Sí, sin contacto 4 sem' },
    },
    {
      name: 'Weightlifting',
      trigger: 'Sentadillas pesadas + clean catch en sentadilla profunda + jerk con split agresivo',
      scenario: 'Levantador que sube 1RM en sentadilla 10 kg en un mes. Empieza con molestia al pop-up del clean. No puede recibir profundo.',
      stats: { '% de mis pacientes': '20%', 'Tiempo medio recuperación': '4—8 sem', 'Vuelta gradual': 'Sí, sin profundidad 3 sem' },
    },
  ];

  const current = sports[activeSport];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#0A0A0A',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(10rem, 22vw, 22rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        transition: 'all 0.6s',
      }}>
        {current.name.toUpperCase()}.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <SectionHeader
          dark
          kicker="Por deporte · Casos reales"
          title="Cada deporte"
          subtitle="rompe distinto."
          intro="La pubalgia del crossfittero no es la del runner ni la del futbolista. Los mecanismos cambian — el tratamiento se adapta."
        />

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: '0',
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '3rem',
        }}>
          {sports.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActiveSport(i)}
              style={{
                padding: '1rem 1.5rem',
                background: 'transparent',
                color: activeSport === i ? '#C9A55A' : 'rgba(255,255,255,0.45)',
                border: 'none',
                borderBottom: activeSport === i ? '2px solid #C9A55A' : '2px solid transparent',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                marginBottom: '-1px',
              }}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div key={activeSport} style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
          animation: 'spFade 0.4s ease-out',
        }} className="sp-grid">
          <div>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#C9A55A',
              marginBottom: '1rem',
            }}>
              Mecanismo · {current.name}
            </div>
            <h3 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              marginBottom: '2rem',
            }}>
              {current.name}.
            </h3>

            <div style={{
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.03)',
              borderLeft: '3px solid #C9A55A',
              marginBottom: '2rem',
            }}>
              <div style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#C9A55A',
                marginBottom: '0.5rem',
              }}>
                Gatillo típico
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.55,
                color: 'rgba(255,255,255,0.85)',
              }}>
                {current.trigger}
              </p>
            </div>

            <div style={{
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '0.75rem',
            }}>
              Caso real
            </div>
            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.75)',
            }}>
              {current.scenario}
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {Object.entries(current.stats).map(([key, val], i, arr) => (
              <div key={key} style={{
                padding: '1.75rem 2rem',
                borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '0.5rem',
                }}>
                  {key}
                </div>
                <div style={{
                  fontSize: '1.75rem',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  color: '#C9A55A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}>
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .sp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// DIFFERENTIAL DIAGNOSIS — Editorial table
// =====================================================================
function PubalgiaDifferential() {
  const rows = [
    { condition: 'Pubalgia',         location: 'Pubis + aductor',     test: 'Squeeze test positivo', finding: 'Dolor al apretar piernas con resistencia' },
    { condition: 'Hernia inguinal',  location: 'Canal inguinal',      test: 'Palpación canal',       finding: 'Bulto palpable + dolor al toser' },
    { condition: 'Lesión cadera',    location: 'Articular profunda',  test: 'FADIR test',            finding: 'Dolor + rotación interna reducida' },
    { condition: 'Tendinitis aductor', location: 'Aductor proximal',  test: 'Resistencia aductor',   finding: 'Dolor localizado en músculo' },
    { condition: 'Patología visceral', location: 'Variable',          test: 'Historia clínica',      finding: 'Síntomas sistémicos, no mecánicos' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <SectionHeader
          kicker="Diagnóstico diferencial"
          title="No todo dolor"
          subtitle="es pubalgia."
          intro="Antes de tratar pubalgia descarto otras 4 condiciones que se le parecen. El diagnóstico diferencial es lo que define el éxito del tratamiento."
        />

        <div style={{
          border: '1px solid rgba(10,10,10,0.08)',
          overflowX: 'auto',
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1.2fr 1.4fr 2fr',
            background: '#0A0A0A',
            color: '#FFFFFF',
            minWidth: '720px',
          }} className="dx-row-head">
            <div style={{ padding: '1.25rem 1.5rem', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.625rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>
                Condición
              </div>
            </div>
            <div style={{ padding: '1.25rem 1.5rem', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.625rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>
                Localización
              </div>
            </div>
            <div style={{ padding: '1.25rem 1.5rem', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.625rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>
                Test clínico
              </div>
            </div>
            <div style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ fontSize: '0.625rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>
                Hallazgo clave
              </div>
            </div>
          </div>

          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1.2fr 1.4fr 2fr',
              borderTop: '1px solid rgba(10,10,10,0.06)',
              background: i === 0 ? 'rgba(201,165,90,0.04)' : '#FFFFFF',
              minWidth: '720px',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => { if (i !== 0) e.currentTarget.style.background = '#FAFAFA'; }}
            onMouseLeave={(e) => { if (i !== 0) e.currentTarget.style.background = '#FFFFFF'; }}
            className="dx-row">
              <div style={{
                padding: '1.5rem',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                {i === 0 && (
                  <div style={{
                    width: '6px',
                    height: '20px',
                    background: '#C9A55A',
                    flexShrink: 0,
                  }} />
                )}
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  fontFamily: 'Space Grotesk',
                  letterSpacing: '-0.01em',
                  color: '#0A0A0A',
                }}>
                  {r.condition}
                </div>
              </div>
              <div style={{
                padding: '1.5rem',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                fontSize: '0.9375rem',
                color: 'rgba(10,10,10,0.7)',
                display: 'flex',
                alignItems: 'center',
              }}>
                {r.location}
              </div>
              <div style={{
                padding: '1.5rem',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                fontSize: '0.9375rem',
                color: 'rgba(10,10,10,0.7)',
                display: 'flex',
                alignItems: 'center',
                fontStyle: 'italic',
              }}>
                {r.test}
              </div>
              <div style={{
                padding: '1.5rem',
                fontSize: '0.9375rem',
                color: '#0A0A0A',
                display: 'flex',
                alignItems: 'center',
              }}>
                {r.finding}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// TREATMENT — 4 phases
// =====================================================================
function PubalgiaTreatment({ activePhase, setActivePhase }) {
  const phases = [
    {
      title: 'Diagnóstico',
      duration: 'Sesión 1 · 60 min',
      desc: 'Squeeze test, palpación, evaluación pelvis-core, diferencial con hernia y cadera. Sin radiografías innecesarias.',
      bullets: ['Squeeze test resistido', 'Palpación sínfisis púbica', 'Evaluación pelvis-core', 'Diagnóstico diferencial'],
    },
    {
      title: 'Reducir',
      duration: 'Semanas 1—3',
      desc: 'Terapia manual + punción seca en aductores. Reducir dolor sin perder masa muscular ni capacidad cardiovascular.',
      bullets: ['Terapia manual aductor', 'Punción seca trigger points', 'Trabajo isométrico de baja carga', 'Cardio sin impacto'],
    },
    {
      title: 'Fortalecer',
      duration: 'Semanas 3—8',
      desc: 'Aquí pasa la magia. Glúteo medio, core estabilizador, aductor con carga progresiva. Reentrenar el patrón.',
      bullets: ['Copenhagen plank progresivo', 'Glúteo medio carga', 'Core anti-rotación', 'Aductor excéntrico'],
    },
    {
      title: 'Volver',
      duration: 'Semanas 6—12',
      desc: 'Readaptación al gesto deportivo. Sprint, cambios de dirección, técnica específica. Vuelves más fuerte.',
      bullets: ['Sprint progresivo', 'Cambios de dirección', 'Test funcional específico', 'Vuelta a competir'],
    },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <SectionHeader
          kicker="Tratamiento · 4 fases"
          title="Proceso,"
          subtitle="no parches."
          intro="La pubalgia se resuelve en fases. Saltarse cualquiera de las cuatro garantiza recaída."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="tx-grid">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid rgba(10,10,10,0.08)',
          }}>
            {phases.map((p, i) => {
              const isActive = activePhase === i;
              return (
                <button
                  key={i}
                  onClick={() => setActivePhase(i)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr auto',
                    gap: '1.25rem',
                    alignItems: 'center',
                    padding: '1.75rem 0',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid rgba(10,10,10,0.08)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'inherit',
                    position: 'relative',
                    paddingLeft: isActive ? '1rem' : '0',
                    transition: 'padding 0.3s',
                  }}
                >
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '3px',
                      background: '#C9A55A',
                    }} />
                  )}
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: isActive ? '1rem' : '0.875rem',
                    fontWeight: 700,
                    color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                    transition: 'all 0.3s',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{
                    fontSize: isActive ? '1.5rem' : '1.25rem',
                    fontWeight: 700,
                    fontFamily: 'Space Grotesk',
                    letterSpacing: '-0.01em',
                    color: isActive ? '#0A0A0A' : 'rgba(10,10,10,0.5)',
                    transition: 'all 0.3s',
                  }}>
                    {p.title}
                  </div>
                  <div style={{
                    fontSize: '1.25rem',
                    color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.2)',
                    transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
                    transition: 'all 0.3s',
                  }}>
                    →
                  </div>
                </button>
              );
            })}
          </div>

          <div key={activePhase} style={{
            background: '#FFFFFF',
            border: '1px solid rgba(10,10,10,0.08)',
            padding: '3rem',
            position: 'relative',
            minHeight: '420px',
            animation: 'txFade 0.4s ease-out',
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '2rem',
              fontFamily: 'Space Grotesk',
              fontSize: '8rem',
              fontWeight: 700,
              color: 'rgba(201,165,90,0.08)',
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
            }}>
              0{activePhase + 1}
            </div>

            <div style={{
              fontSize: '0.6875rem',
              color: '#C9A55A',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '1rem',
              position: 'relative',
            }}>
              Fase {String(activePhase + 1).padStart(2, '0')} · {phases[activePhase].duration}
            </div>

            <h3 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: '#0A0A0A',
              marginBottom: '1.5rem',
              position: 'relative',
            }}>
              {phases[activePhase].title}
              <span style={{ color: '#C9A55A' }}>.</span>
            </h3>

            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(10,10,10,0.65)',
              maxWidth: '500px',
              marginBottom: '2rem',
              position: 'relative',
            }}>
              {phases[activePhase].desc}
            </p>

            <div style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(10,10,10,0.06)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
            }}>
              {phases[activePhase].bullets.map((b, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.625rem 0',
                  fontSize: '0.9375rem',
                  color: 'rgba(10,10,10,0.8)',
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    background: '#C9A55A',
                  }} />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes txFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .tx-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// EXERCISES — Numbered grid
// =====================================================================
function PubalgiaExercises() {
  const exercises = [
    { name: 'Copenhagen plank',  goal: 'Aductor excéntrico',     sets: '3 × 30s', stage: 'Fase 3',  difficulty: 'Avanzada' },
    { name: 'Side plank lift',   goal: 'Glúteo medio + core',    sets: '3 × 15',  stage: 'Fase 2—3', difficulty: 'Media' },
    { name: 'Dead bug',          goal: 'Core anti-rotación',     sets: '3 × 10/lado', stage: 'Fase 2', difficulty: 'Baja' },
    { name: 'Bird dog',          goal: 'Estabilidad lumbar',     sets: '3 × 10/lado', stage: 'Fase 2', difficulty: 'Baja' },
    { name: 'Aductor isométrico', goal: 'Activación segura',     sets: '5 × 10s', stage: 'Fase 1—2', difficulty: 'Baja' },
    { name: 'Glúteo puente',     goal: 'Activación posterior',   sets: '3 × 15',  stage: 'Fase 2',  difficulty: 'Baja' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <SectionHeader
          kicker="Ejercicios · Plan base"
          title="Qué"
          subtitle="trabajamos."
          intro="Ejercicios típicos del plan de fortalecimiento. El orden y la progresión dependen de tu caso — esto es referencia, no prescripción."
        />

        <div style={{
          border: '1px solid rgba(10,10,10,0.08)',
          background: '#FFFFFF',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60px 1.5fr 1.5fr 1fr 1fr 1fr',
            padding: '1rem 1.5rem',
            background: '#FAFAFA',
            borderBottom: '1px solid rgba(10,10,10,0.08)',
            fontSize: '0.625rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'rgba(10,10,10,0.4)',
          }} className="ex-head">
            <div>Nº</div>
            <div>Ejercicio</div>
            <div>Objetivo</div>
            <div>Series × Reps</div>
            <div>Fase</div>
            <div>Dificultad</div>
          </div>

          {exercises.map((e, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '60px 1.5fr 1.5fr 1fr 1fr 1fr',
              padding: '1.5rem',
              borderBottom: i < exercises.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
              alignItems: 'center',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#FAFAFA'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#FFFFFF'}
            className="ex-row">
              <div style={{
                fontFamily: 'Space Grotesk',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#C9A55A',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{
                fontSize: '1.0625rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                color: '#0A0A0A',
              }}>
                {e.name}
              </div>
              <div style={{
                fontSize: '0.9375rem',
                color: 'rgba(10,10,10,0.65)',
              }}>
                {e.goal}
              </div>
              <div style={{
                fontSize: '0.9375rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                color: '#0A0A0A',
              }}>
                {e.sets}
              </div>
              <div style={{
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#C9A55A',
              }}>
                {e.stage}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: e.difficulty === 'Avanzada' ? '#DC2626' : e.difficulty === 'Media' ? '#C9A55A' : '#16A34A',
                }} />
                <span style={{ fontSize: '0.875rem', color: '#0A0A0A' }}>
                  {e.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '1.5rem',
          fontSize: '0.875rem',
          color: 'rgba(10,10,10,0.5)',
          maxWidth: '600px',
        }}>
          No empieces sin diagnóstico. Hacer Copenhagen en fase aguda empeora la lesión. Esto es plan tipo — el tuyo se construye en valoración.
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ex-head { display: none !important; }
          .ex-row { grid-template-columns: 40px 1fr !important; gap: 0.75rem; padding: 1rem !important; }
          .ex-row > div:nth-child(3),
          .ex-row > div:nth-child(4),
          .ex-row > div:nth-child(5),
          .ex-row > div:nth-child(6) { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// RECOVERY — Timeline visualization
// =====================================================================
function PubalgiaRecovery() {
  const milestones = [
    { week: 'Sem 0',     status: 'Diagnóstico', desc: 'Evaluación + plan' },
    { week: 'Sem 1—3',   status: 'Reducir dolor', desc: 'Manual + punción' },
    { week: 'Sem 3—8',   status: 'Fortalecer',  desc: 'Plan progresivo' },
    { week: 'Sem 6—12',  status: 'Volver',      desc: 'Readaptación deportiva' },
  ];

  const factors = [
    { label: 'Severidad de la lesión',  weight: 'Alta' },
    { label: 'Adherencia al plan',       weight: 'Alta' },
    { label: 'Edad del atleta',          weight: 'Media' },
    { label: 'Deporte que practica',     weight: 'Media' },
    { label: 'Cronicidad (meses con dolor)', weight: 'Alta' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <SectionHeader
          kicker="Tiempo de recuperación"
          title="Entre 4"
          subtitle="y 12 semanas."
          intro="No te puedo prometer un número exacto. Te puedo decir cuándo termina el dolor agudo, cuándo vuelves a entrenar, y qué factores cambian el tiempo."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="rec-grid">
          {/* Timeline */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid rgba(10,10,10,0.08)',
            padding: '3rem 2rem',
            position: 'relative',
          }}>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '2.5rem',
            }}>
              Línea de tiempo típica
            </div>

            <div style={{
              position: 'relative',
              paddingLeft: '2.5rem',
            }}>
              {/* Vertical track */}
              <div style={{
                position: 'absolute',
                left: '8px',
                top: '12px',
                bottom: '12px',
                width: '2px',
                background: 'linear-gradient(180deg, #C9A55A 0%, rgba(201,165,90,0.2) 100%)',
              }} />

              {milestones.map((m, i) => (
                <div key={i} style={{
                  position: 'relative',
                  marginBottom: i < milestones.length - 1 ? '2.5rem' : 0,
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-2.5rem',
                    top: '4px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '3px solid #C9A55A',
                    boxShadow: i === 0 ? '0 0 0 4px rgba(201,165,90,0.2)' : 'none',
                  }} />

                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#C9A55A',
                    marginBottom: '0.375rem',
                    fontFamily: 'Space Grotesk',
                  }}>
                    {m.week}
                  </div>
                  <h4 style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#0A0A0A',
                    marginBottom: '0.375rem',
                    lineHeight: 1.05,
                  }}>
                    {m.status}.
                  </h4>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'rgba(10,10,10,0.6)',
                    lineHeight: 1.5,
                  }}>
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Factors */}
          <div>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '1.5rem',
            }}>
              Qué cambia el tiempo
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              borderTop: '1px solid rgba(10,10,10,0.08)',
            }}>
              {factors.map((f, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  padding: '1.125rem 0',
                  borderBottom: '1px solid rgba(10,10,10,0.08)',
                  gap: '1rem',
                }}>
                  <div style={{
                    fontSize: '1rem',
                    color: '#0A0A0A',
                    fontWeight: 500,
                  }}>
                    {f.label}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: f.weight === 'Alta' ? '#DC2626' : '#C9A55A',
                    }} />
                    <span style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      color: 'rgba(10,10,10,0.6)',
                    }}>
                      Influencia {f.weight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .rec-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// CTA
// =====================================================================
function PubalgiaCTA({ onNavigate }) {
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          background: 'linear-gradient(135deg, #C9A55A 0%, #B8943F 100%)',
          color: '#0A0A0A',
          padding: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }} className="cta-grid">
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-20%',
            width: '60%',
            height: '140%',
            background: 'linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.05) 50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative' }}>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}>
              Pubalgia · Diagnóstico definitivo
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              marginBottom: '1.5rem',
            }}>
              Vuelves al deporte.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>
                Sin compensaciones.
              </span>
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.55,
              opacity: 0.85,
              maxWidth: '520px',
            }}>
              Primera sesión: diagnóstico diferencial + plan de 4 fases + primera intervención. 60 min. Sales con certeza, no con etiqueta vaga.
            </p>
          </div>

          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                background: '#0A0A0A',
                color: '#FFFFFF',
                border: 'none',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Agendar valoración
              <span>→</span>
            </button>
            <button
              style={{
                background: 'transparent',
                color: '#0A0A0A',
                border: '1px solid rgba(10,10,10,0.4)',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A0A0A';
                e.currentTarget.style.color = '#C9A55A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#0A0A0A';
              }}
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// FAQ
// =====================================================================
function PubalgiaFAQ({ openFaq, setOpenFaq }) {
  const faqs = [
    { q: '¿Puedo seguir entrenando con pubalgia?', a: 'No al mismo volumen. En fase aguda hay que reducir gestos dolorosos (sprint, sentadilla profunda, cambios de dirección) pero mantener cardio sin impacto, fuerza tren superior y trabajo de movilidad. Reposo total no — atrofia muscular.' },
    { q: '¿La pubalgia es exclusiva de hombres?', a: 'No. Aunque es más frecuente en hombres por anatomía pélvica y patrones deportivos, las mujeres también la desarrollan, sobre todo en running de larga distancia, fútbol y deportes de saltos.' },
    { q: '¿Necesito resonancia magnética?', a: 'Casi nunca. La pubalgia es diagnóstico clínico. La resonancia se reserva para casos crónicos (más de 3 meses sin mejora) o sospecha de rotura. No pidas pruebas innecesarias — pide diagnóstico.' },
    { q: '¿Cuántas sesiones voy a necesitar?', a: 'Promedio: 8—12 sesiones en 8—12 semanas. Casos leves: 6 sesiones. Casos crónicos (más de 6 meses con dolor): hasta 16. Depende de severidad + adherencia al fortalecimiento entre sesiones.' },
    { q: '¿Cuándo vuelvo a entrenar normal?', a: 'Vuelta gradual desde semana 3—4 (sin sprint ni cambios de dirección). Vuelta completa típicamente semana 8—12. El criterio es test funcional, no calendario.' },
    { q: '¿La cirugía es opción?', a: 'En la mayoría de casos no. La cirugía se reserva para pubalgia atlética con hernia deportiva confirmada o casos crónicos refractarios a 6 meses de fisio bien hecha. Primero agotamos tratamiento conservador.' },
    { q: '¿Por qué me dieron antiinflamatorios y no funcionó?', a: 'Porque la pubalgia no es inflamación pura — es desbalance biomecánico crónico. Los AINEs bajan el dolor temporalmente pero no corrigen el patrón. Vuelves a entrenar, vuelve la lesión.' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <SectionHeader
          kicker="Preguntas frecuentes"
          title="Lo que"
          subtitle="me preguntan."
          intro="Las dudas más comunes sobre pubalgia. Si no encuentras la tuya, WhatsApp directo — yo respondo, no asistente."
        />

        <div style={{
          maxWidth: '900px',
          borderTop: '1px solid rgba(10,10,10,0.08)',
        }}>
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} style={{
                borderBottom: '1px solid rgba(10,10,10,0.08)',
              }}>
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  style={{
                    width: '100%',
                    padding: '1.75rem 0',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr 40px',
                    alignItems: 'center',
                    gap: '1.5rem',
                  }}
                >
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: isOpen ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                    transition: 'color 0.3s',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{
                    fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
                    fontWeight: 600,
                    fontFamily: 'Space Grotesk',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    color: '#0A0A0A',
                  }}>
                    {faq.q}
                  </div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: `1px solid ${isOpen ? '#C9A55A' : 'rgba(10,10,10,0.15)'}`,
                    background: isOpen ? '#C9A55A' : 'transparent',
                    color: isOpen ? '#0A0A0A' : 'rgba(10,10,10,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.125rem',
                    fontWeight: 300,
                    transition: 'all 0.4s',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    justifySelf: 'end',
                  }}>
                    +
                  </div>
                </button>

                <div style={{
                  display: 'grid',
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr 40px',
                      gap: '1.5rem',
                      paddingBottom: '1.75rem',
                    }}>
                      <div></div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: 'rgba(10,10,10,0.7)',
                        maxWidth: '700px',
                      }}>
                        {faq.a}
                      </p>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// RELATED
// =====================================================================
function PubalgiaRelated({ onNavigate }) {
  const related = [
    { name: 'Ciática',              page: 'ciatica',    zone: 'Lumbar / Pierna' },
    { name: 'Tendinitis Rotuliana', page: 'tendinitis', zone: 'Rodilla' },
    { name: 'Hombro Congelado',     page: 'hombro',     zone: 'Hombro' },
  ];

  return (
    <section style={{
      padding: '6rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{
            fontSize: '0.75rem',
            color: '#C9A55A',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            Otras lesiones · Ver protocolo
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(10,10,10,0.08)',
          border: '1px solid rgba(10,10,10,0.08)',
        }} className="rel-grid">
          {related.map((r, i) => (
            <button
              key={r.page}
              onClick={() => onNavigate(r.page)}
              style={{
                padding: '2rem',
                background: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.4s',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                minHeight: '180px',
                color: 'inherit',
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A0A0A';
                e.currentTarget.querySelectorAll('[data-rel]').forEach(el => {
                  if (el.dataset.rel === 'name') el.style.color = '#FFFFFF';
                  if (el.dataset.rel === 'zone') el.style.color = '#C9A55A';
                  if (el.dataset.rel === 'arrow') {
                    el.style.color = '#C9A55A';
                    el.style.transform = 'translateX(8px)';
                  }
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.querySelectorAll('[data-rel]').forEach(el => {
                  if (el.dataset.rel === 'name') el.style.color = '#0A0A0A';
                  if (el.dataset.rel === 'zone') el.style.color = 'rgba(10,10,10,0.5)';
                  if (el.dataset.rel === 'arrow') {
                    el.style.color = 'rgba(10,10,10,0.3)';
                    el.style.transform = 'translateX(0)';
                  }
                });
              }}
            >
              <div style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'rgba(10,10,10,0.4)',
              }}>
                0{i + 1} / 03
              </div>
              <h3 data-rel="name" style={{
                fontSize: '1.625rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#0A0A0A',
                transition: 'color 0.4s',
                lineHeight: 1.05,
              }}>
                {r.name}
              </h3>
              <div data-rel="zone" style={{
                fontSize: '0.875rem',
                color: 'rgba(10,10,10,0.5)',
                transition: 'color 0.4s',
              }}>
                {r.zone}
              </div>
              <div style={{
                marginTop: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: '#C9A55A',
                }}>
                  Ver protocolo
                </span>
                <span data-rel="arrow" style={{
                  fontSize: '1.5rem',
                  color: 'rgba(10,10,10,0.3)',
                  transition: 'all 0.4s',
                  fontFamily: 'Space Grotesk',
                }}>
                  →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .rel-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

if (typeof window !== "undefined") window.PubalgiaPage = PubalgiaPage;
/* ==================== ciatica.jsx ==================== */
// CIÁTICA - PARTE 1 - Hero, WhatIs, Test Lasègue interactivo
// Las demás secciones están en ciatica-2.jsx

// =====================================================================
// HERO
// =====================================================================
function CiaticaHero({ onNavigate }) {
  return (
    <section style={{
      padding: '12rem 0 6rem',
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(10rem, 24vw, 26rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        CIÁTICA.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem',
          fontSize: '0.6875rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          <a onClick={() => onNavigate('lesiones')} style={{ color: 'rgba(10,10,10,0.5)', cursor: 'pointer', textDecoration: 'none' }}>Lesiones</a>
          <span style={{ color: 'rgba(10,10,10,0.25)' }}>/</span>
          <span style={{ color: '#C9A55A' }}>Ciática</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '4rem',
          alignItems: 'flex-end',
        }} className="ci-hero-grid">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}>
              <div style={{ width: '60px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Lumbar · Pierna · Nervio ciático
              </div>
            </div>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
              marginBottom: '2.5rem',
            }}>
              Ciática.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                Síntoma, no diagnóstico.
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
              lineHeight: 1.55,
              color: 'rgba(10,10,10,0.65)',
              maxWidth: '620px',
              marginBottom: '2rem',
            }}>
              Dolor que recorre el trayecto del nervio ciático — glúteo, posterior del muslo, pantorrilla, pie.
              <span style={{ color: '#0A0A0A', fontWeight: 500 }}> No es una sola enfermedad, son múltiples causas con el mismo síntoma.</span>
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate('fisioterapia')}
                style={{
                  background: '#0A0A0A',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#C9A55A';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0A0A0A';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Agendar valoración
                <span>→</span>
              </button>
              <a
                href="#lasegue"
                style={{
                  background: 'transparent',
                  color: '#0A0A0A',
                  border: '1px solid rgba(10,10,10,0.2)',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A55A';
                  e.currentTarget.style.color = '#C9A55A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(10,10,10,0.2)';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
              >
                Test Lasègue ↓
              </a>
            </div>
          </div>

          <div style={{
            background: '#0A0A0A',
            color: '#FFFFFF',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }} className="ci-tldr">
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: '#C9A55A',
            }} />
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#C9A55A',
              marginBottom: '1.5rem',
            }}>
              TL;DR Clínico
            </div>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '1.5rem',
            }}>
              Compresión o irritación del nervio ciático — generalmente por hernia discal, síndrome piramidal o estenosis lumbar. Diagnóstico diferencial primero.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#C9A55A', lineHeight: 1, marginBottom: '0.25rem' }}>3—8</div>
                <div style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Semanas</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#C9A55A', lineHeight: 1, marginBottom: '0.25rem' }}>Media</div>
                <div style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Complejidad</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ci-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// WHAT IS
// =====================================================================
function CiaticaWhatIs() {
  const facts = [
    { label: 'Nervio afectado',  value: 'Ciático (raíces L4—S3 → glúteo → pierna)' },
    { label: 'Causas comunes',    value: 'Hernia discal · Piramidal · Estenosis · Disfunción facetaria' },
    { label: 'Edad típica',       value: '30—50 años · Atletas y sedentarios' },
    { label: 'Recuperación',      value: '3—8 semanas con tratamiento estructurado' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="ci-wi-grid">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Qué es realmente
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
              marginBottom: '2rem',
            }}>
              No es
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                la lesión.
              </span>
            </h2>

            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'rgba(10,10,10,0.7)',
              marginBottom: '1.5rem',
            }}>
              "Ciática" es <strong style={{ color: '#0A0A0A' }}>el síntoma</strong> — dolor por el trayecto del nervio ciático. Lo que está irritando ese nervio es lo que hay que diagnosticar: puede ser una hernia discal, un piramidal contracturado, una estenosis del canal lumbar o disfunción de las articulaciones facetarias.
            </p>
            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(10,10,10,0.6)',
              marginBottom: '1.5rem',
            }}>
              Tratar "ciática" sin identificar la causa es como recetar antitusivos sin saber si tienes asma, alergia o neumonía. Cada origen tiene su tratamiento — y lo que funciona para uno empeora otro.
            </p>
            <div style={{
              padding: '1.25rem 1.5rem',
              background: '#FFFFFF',
              borderLeft: '3px solid #C9A55A',
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              color: 'rgba(10,10,10,0.75)',
            }}>
              <strong style={{ color: '#0A0A0A' }}>Importante:</strong> El test de Lasègue es el primer filtro clínico. Diferencia compresión nerviosa real de tensión muscular. Pruébalo abajo.
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            border: '1px solid rgba(10,10,10,0.08)',
            background: '#FFFFFF',
          }}>
            {facts.map((f, i) => (
              <div key={i} style={{
                padding: '1.75rem 2rem',
                borderBottom: i < facts.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: '1.25rem',
                alignItems: 'center',
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'rgba(10,10,10,0.3)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#C9A55A',
                    marginBottom: '0.375rem',
                  }}>
                    {f.label}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#0A0A0A',
                    fontWeight: 500,
                    lineHeight: 1.45,
                  }}>
                    {f.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ci-wi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// LASÈGUE TEST — Interactive tool
// =====================================================================
function CiaticaLasegue({ onNavigate }) {
  const [angleBucket, setAngleBucket] = React.useState(null); // 0, 30, 45, 60, 75, 90, 'none'
  const [location, setLocation] = React.useState(null); // 'lumbar', 'pierna', 'nada'
  const [step, setStep] = React.useState(1);

  // Map bucket to visualization angle
  const visAngle = angleBucket === 'none' ? 90 : (angleBucket ?? 0);

  // Compute interpretation
  function getResult() {
    if (!angleBucket || !location) return null;

    if (location === 'nada' || angleBucket === 'none') {
      return {
        level: 'Negativo',
        color: '#16A34A',
        title: 'Test Lasègue negativo.',
        explanation: 'No hay reproducción de dolor con elevación pasiva de la pierna. La ciática neural es poco probable. Si tienes dolor lumbar, el origen probablemente sea muscular, articular o postural — no nervioso.',
        recommendation: 'Igual conviene valoración para identificar el origen real del dolor.',
      };
    }
    if (location === 'lumbar') {
      return {
        level: 'Equívoco',
        color: '#C9A55A',
        title: 'Dolor solo lumbar.',
        explanation: 'Dolor en la zona baja de la espalda sin irradiación por la pierna no constituye Lasègue positivo. Sugiere disfunción lumbar local — facetaria, muscular o discal sin compresión radicular.',
        recommendation: 'Necesita diagnóstico diferencial. Agenda valoración.',
      };
    }
    if (location === 'pierna') {
      if (angleBucket <= 30) {
        return {
          level: 'Positivo fuerte',
          color: '#DC2626',
          title: '⚠ Lasègue positivo precoz.',
          explanation: 'Dolor radicular antes de 30° sugiere compresión nerviosa importante — frecuentemente hernia discal con compromiso significativo de la raíz. Es un hallazgo serio.',
          recommendation: 'No demores. Valoración urgente. Posible necesidad de imagen (RM).',
        };
      }
      if (angleBucket <= 60) {
        return {
          level: 'Positivo',
          color: '#C9A55A',
          title: 'Lasègue positivo.',
          explanation: 'Dolor que irradia por la pierna entre 30—60° de elevación es Lasègue positivo clásico. Indica irritación del nervio ciático — habitualmente por hernia discal L4-L5 o L5-S1, o por síndrome piramidal.',
          recommendation: 'Agenda valoración. El tratamiento depende de la causa específica.',
        };
      }
      if (angleBucket <= 75) {
        return {
          level: 'Dudoso',
          color: '#C9A55A',
          title: 'Lasègue dudoso.',
          explanation: 'Dolor radicular entre 60—75° tiene menos especificidad. Puede ser ciática leve, irritación neural sin hernia significativa, o tensión de isquiotibial. El diagnóstico diferencial es crítico.',
          recommendation: 'Valoración para confirmar. No te quedes con la duda.',
        };
      }
      // > 75°
      return {
        level: 'No es Lasègue',
        color: '#16A34A',
        title: 'Probablemente isquiotibial.',
        explanation: 'Dolor solo a más de 75° de elevación generalmente indica tensión de la cadena posterior (isquiotibial), no compresión nerviosa. Es un hallazgo común en sedentarios y atletas con flexibilidad limitada.',
        recommendation: 'Trabajo de movilidad. Si hay duda, valoración.',
      };
    }
  }

  const result = getResult();

  function reset() {
    setAngleBucket(null);
    setLocation(null);
    setStep(1);
  }

  const angleButtons = [
    { value: 30,    label: '0—30°',  short: '< 30°' },
    { value: 45,    label: '30—45°', short: '30°' },
    { value: 60,    label: '45—60°', short: '45°' },
    { value: 75,    label: '60—75°', short: '60°' },
    { value: 90,    label: '75—90°', short: '75°' },
    { value: 'none', label: 'No me duele', short: 'OK' },
  ];

  return (
    <section id="lasegue" style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        left: '-3%',
        bottom: '-2rem',
        fontSize: 'clamp(8rem, 18vw, 18rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        LASÈGUE.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '3rem',
          alignItems: 'flex-end',
        }} className="las-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Auto-test · Lasègue / SLR
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
            }}>
              ¿Es
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                ciática real?
              </span>
            </h2>
          </div>

          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(10,10,10,0.6)',
            lineHeight: 1.55,
            maxWidth: '460px',
          }}>
            Acuéstate boca arriba. Con ayuda o auto-asistido, eleva la pierna estirada. Marca el grado donde aparece el dolor y dónde lo sientes. Te explico el resultado.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          background: '#FFFFFF',
        }} className="las-layout">
          {/* SVG visualization */}
          <div style={{
            background: '#FAFAFA',
            borderRight: '1px solid rgba(10,10,10,0.08)',
            padding: '2.5rem 2rem',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }} className="las-viz">
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '1.5rem',
            }}>
              Visualización del test
            </div>

            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '300px',
            }}>
              <svg viewBox="0 -20 400 260" style={{ width: '100%', maxWidth: '480px', height: 'auto' }}>
                {/* Floor / ground line */}
                <line x1="20" y1="220" x2="380" y2="220" stroke="rgba(10,10,10,0.1)" strokeWidth="1" strokeDasharray="4 4" />

                {/* Angle arc */}
                {visAngle > 0 && (
                  <g>
                    <path
                      d={`M ${280 + 60},${175} A 60 60 0 0 0 ${280 + 60*Math.cos(-visAngle*Math.PI/180)},${175 - 60*Math.sin(visAngle*Math.PI/180)}`}
                      fill="none"
                      stroke="rgba(201,165,90,0.4)"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <text
                      x={280 + 75*Math.cos(-visAngle/2*Math.PI/180)}
                      y={175 - 75*Math.sin(visAngle/2*Math.PI/180)}
                      fill="#C9A55A"
                      fontSize="14"
                      fontFamily="Space Grotesk"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      {visAngle}°
                    </text>
                  </g>
                )}

                {/* Body - lying flat */}
                {/* Head */}
                <circle cx="65" cy="175" r="20" fill="none" stroke="rgba(10,10,10,0.6)" strokeWidth="1.5" />
                <text x="65" y="180" textAnchor="middle" fill="rgba(10,10,10,0.4)" fontSize="9" fontFamily="Space Grotesk" fontWeight="600">CABEZA</text>
                
                {/* Torso */}
                <rect x="85" y="160" width="160" height="30" fill="none" stroke="rgba(10,10,10,0.6)" strokeWidth="1.5" />
                {/* Spine line */}
                <line x1="85" y1="175" x2="245" y2="175" stroke="rgba(10,10,10,0.15)" strokeWidth="0.8" strokeDasharray="2 3" />

                {/* Pelvis / hip area */}
                <rect x="245" y="155" width="35" height="40" fill="none" stroke="rgba(10,10,10,0.6)" strokeWidth="1.5" />
                
                {/* Static leg (not lifted) */}
                <line x1="280" y1="180" x2="370" y2="180" stroke="rgba(10,10,10,0.3)" strokeWidth="6" strokeLinecap="round" />
                <line x1="280" y1="180" x2="370" y2="180" stroke="rgba(10,10,10,0.6)" strokeWidth="1.5" />
                <circle cx="370" cy="180" r="6" fill="rgba(10,10,10,0.4)" />

                {/* Lifted leg with hip pivot at (280, 175) */}
                <g>
                  {/* Trajectory hint */}
                  {visAngle > 0 && (
                    <line
                      x1="280" y1="175"
                      x2={280 + 130}
                      y2={175}
                      stroke="rgba(10,10,10,0.1)"
                      strokeWidth="1"
                      strokeDasharray="2 4"
                    />
                  )}
                  
                  {/* The active leg */}
                  <line
                    x1="280" y1="175"
                    x2={280 + 130 * Math.cos(-visAngle * Math.PI / 180)}
                    y2={175 - 130 * Math.sin(visAngle * Math.PI / 180)}
                    stroke="#C9A55A"
                    strokeWidth="8"
                    strokeLinecap="round"
                    style={{ transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  />
                  {/* Foot */}
                  <circle
                    cx={280 + 130 * Math.cos(-visAngle * Math.PI / 180)}
                    cy={175 - 130 * Math.sin(visAngle * Math.PI / 180)}
                    r="7"
                    fill="#0A0A0A"
                    style={{ transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  />
                  
                  {/* Pain indicator if pain reported */}
                  {angleBucket && angleBucket !== 'none' && location === 'pierna' && (
                    <g style={{ pointerEvents: 'none' }}>
                      <circle
                        cx={280 + 90 * Math.cos(-visAngle * Math.PI / 180)}
                        cy={175 - 90 * Math.sin(visAngle * Math.PI / 180)}
                        r="12"
                        fill="#DC2626"
                        opacity="0.3"
                      >
                        <animate attributeName="r" from="12" to="22" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.3" to="0" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                      <circle
                        cx={280 + 90 * Math.cos(-visAngle * Math.PI / 180)}
                        cy={175 - 90 * Math.sin(visAngle * Math.PI / 180)}
                        r="5"
                        fill="#DC2626"
                      />
                    </g>
                  )}
                </g>

                {/* Coordinate label */}
                <text x="280" y="240" textAnchor="middle" fill="rgba(10,10,10,0.4)" fontSize="9" fontFamily="Space Grotesk" fontWeight="600" letterSpacing="0.1em">
                  PIVOTE · CADERA
                </text>
              </svg>
            </div>

            <div style={{
              fontSize: '0.75rem',
              color: 'rgba(10,10,10,0.5)',
              lineHeight: 1.5,
              fontStyle: 'italic',
              borderTop: '1px solid rgba(10,10,10,0.08)',
              paddingTop: '1rem',
            }}>
              Pierna estirada, sin flexionar la rodilla. Cadera como pivote. Eleva lentamente hasta donde aparezca el dolor.
            </div>
          </div>

          {/* Controls + Result */}
          <div style={{
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}>
            {/* Step 1: Angle */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: angleBucket !== null ? '#C9A55A' : '#0A0A0A',
                  color: angleBucket !== null ? '#0A0A0A' : '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                }}>
                  {angleBucket !== null ? '✓' : '1'}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: '#0A0A0A',
                }}>
                  ¿A qué grado aparece el dolor?
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.375rem',
              }}>
                {angleButtons.map(btn => {
                  const isSel = angleBucket === btn.value;
                  return (
                    <button
                      key={btn.value}
                      onClick={() => setAngleBucket(btn.value)}
                      style={{
                        padding: '0.75rem 0.5rem',
                        background: isSel ? '#0A0A0A' : 'transparent',
                        color: isSel ? '#C9A55A' : 'rgba(10,10,10,0.7)',
                        border: `1px solid ${isSel ? '#0A0A0A' : 'rgba(10,10,10,0.15)'}`,
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        cursor: 'pointer',
                        fontFamily: 'Space Grotesk',
                        transition: 'all 0.25s',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSel) {
                          e.currentTarget.style.borderColor = '#C9A55A';
                          e.currentTarget.style.color = '#0A0A0A';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSel) {
                          e.currentTarget.style.borderColor = 'rgba(10,10,10,0.15)';
                          e.currentTarget.style.color = 'rgba(10,10,10,0.7)';
                        }
                      }}
                    >
                      {btn.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Location */}
            <div style={{
              opacity: angleBucket !== null ? 1 : 0.35,
              pointerEvents: angleBucket !== null ? 'auto' : 'none',
              transition: 'opacity 0.3s',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: location ? '#C9A55A' : '#0A0A0A',
                  color: location ? '#0A0A0A' : '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                }}>
                  {location ? '✓' : '2'}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: '#0A0A0A',
                }}>
                  ¿Dónde sientes el dolor?
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { v: 'pierna', label: 'Baja por la pierna (glúteo → muslo → pantorrilla)' },
                  { v: 'lumbar', label: 'Solo en la zona lumbar' },
                  { v: 'nada',   label: 'No siento dolor' },
                ].map(opt => {
                  const isSel = location === opt.v;
                  return (
                    <button
                      key={opt.v}
                      onClick={() => setLocation(opt.v)}
                      style={{
                        padding: '0.875rem 1rem',
                        background: isSel ? '#0A0A0A' : 'transparent',
                        color: isSel ? '#FFFFFF' : 'rgba(10,10,10,0.75)',
                        border: `1px solid ${isSel ? '#0A0A0A' : 'rgba(10,10,10,0.15)'}`,
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: 'inherit',
                        letterSpacing: '-0.005em',
                        transition: 'all 0.25s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.625rem',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSel) {
                          e.currentTarget.style.borderColor = '#C9A55A';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSel) {
                          e.currentTarget.style.borderColor = 'rgba(10,10,10,0.15)';
                        }
                      }}
                    >
                      <span style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        border: `2px solid ${isSel ? '#C9A55A' : 'rgba(10,10,10,0.25)'}`,
                        background: isSel ? '#C9A55A' : 'transparent',
                        flexShrink: 0,
                      }} />
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Result */}
            {result && (
              <div style={{
                marginTop: 'auto',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(10,10,10,0.08)',
                animation: 'lasFade 0.4s ease-out',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  marginBottom: '0.75rem',
                }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: result.color,
                  }} />
                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: result.color,
                  }}>
                    Resultado · {result.level}
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#0A0A0A',
                  marginBottom: '0.875rem',
                }}>
                  {result.title}
                </h3>

                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: 'rgba(10,10,10,0.7)',
                  marginBottom: '1rem',
                }}>
                  {result.explanation}
                </p>

                <div style={{
                  padding: '0.875rem 1rem',
                  background: '#FAFAFA',
                  borderLeft: `3px solid ${result.color}`,
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                  color: '#0A0A0A',
                  marginBottom: '1.25rem',
                }}>
                  <strong style={{ fontWeight: 700 }}>Recomendación:</strong> {result.recommendation}
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => onNavigate('fisioterapia')}
                    style={{
                      flex: 1,
                      padding: '1rem 1.25rem',
                      background: result.color === '#DC2626' ? '#DC2626' : '#C9A55A',
                      color: result.color === '#DC2626' ? '#FFFFFF' : '#0A0A0A',
                      border: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontFamily: 'Space Grotesk',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Agendar valoración →
                  </button>
                  <button
                    onClick={reset}
                    style={{
                      padding: '1rem 1.25rem',
                      background: 'transparent',
                      color: 'rgba(10,10,10,0.6)',
                      border: '1px solid rgba(10,10,10,0.15)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontFamily: 'Space Grotesk',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#C9A55A';
                      e.currentTarget.style.color = '#C9A55A';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(10,10,10,0.15)';
                      e.currentTarget.style.color = 'rgba(10,10,10,0.6)';
                    }}
                  >
                    ↺
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes lasFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .las-header { grid-template-columns: 1fr !important; }
          .las-layout { grid-template-columns: 1fr !important; }
          .las-viz { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); }
        }
      `}</style>
    </section>
  );
}

if (typeof window !== "undefined") window.CiaticaHero = CiaticaHero;
if (typeof window !== "undefined") window.CiaticaWhatIs = CiaticaWhatIs;
if (typeof window !== "undefined") window.CiaticaLasegue = CiaticaLasegue;
/* ==================== ciatica-2.jsx ==================== */
// CIÁTICA - PARTE 2 - Resto de secciones + CiaticaPage shell

// =====================================================================
// PAGE SHELL
// =====================================================================
function CiaticaPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = React.useState(0);
  const [activeContext, setActiveContext] = React.useState(0);
  const [activePhase, setActivePhase] = React.useState(0);

  const Hero = window.CiaticaHero;
  const WhatIs = window.CiaticaWhatIs;
  const Lasegue = window.CiaticaLasegue;

  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <WhatIs />
      <Lasegue onNavigate={onNavigate} />
      <CiaticaSymptoms />
      <CiaticaCauses />
      <CiaticaByContext activeContext={activeContext} setActiveContext={setActiveContext} />
      <CiaticaDifferential />
      <CiaticaTreatment activePhase={activePhase} setActivePhase={setActivePhase} />
      <CiaticaExercises />
      <CiaticaRecovery />
      <CiaticaCTA onNavigate={onNavigate} />
      <CiaticaFAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <CiaticaRelated onNavigate={onNavigate} />
    </main>
  );
}

// =====================================================================
// SHARED SECTION HEADER (local copy)
// =====================================================================
function CiSectionHeader({ kicker, title, subtitle, intro, dark }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      marginBottom: '4rem',
      alignItems: 'flex-end',
    }} className="ci-sh-header">
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{
            fontSize: '0.75rem',
            color: '#C9A55A',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>{kicker}</div>
        </div>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          fontFamily: 'Space Grotesk',
          color: dark ? '#FFFFFF' : '#0A0A0A',
        }}>
          {title}
          <br />
          <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{subtitle}</span>
        </h2>
      </div>
      {intro && (
        <p style={{
          fontSize: '1.0625rem',
          color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.6)',
          lineHeight: 1.55,
          maxWidth: '460px',
        }}>{intro}</p>
      )}
      <style>{`@media (max-width: 900px) { .ci-sh-header { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// =====================================================================
// SYMPTOMS
// =====================================================================
function CiaticaSymptoms() {
  const symptoms = [
    'Dolor que baja desde glúteo → muslo posterior → pantorrilla → pie',
    'Sensación de descarga eléctrica o quemazón al moverte',
    'Hormigueo o adormecimiento siguiendo el trayecto del nervio',
    'Dolor al toser, estornudar o pujar (indica origen radicular)',
    'Empeora al sentarse prolongado o doblarse hacia adelante',
    'Suele ser unilateral (un lado solo) — bilateral es bandera roja',
  ];

  const redFlags = [
    'Pérdida de control de esfínteres (vejiga o intestino)',
    'Anestesia en silla de montar (ano, periné, parte interna de muslos)',
    'Pérdida de fuerza progresiva en pierna o pie caído',
    'Síntomas bilaterales (ambas piernas)',
    'Dolor súbito intenso tras trauma + síntomas neurológicos',
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <CiSectionHeader
          kicker="Síntomas · Patrón clínico"
          title="Cómo"
          subtitle="se siente."
          intro="La ciática tiene un patrón muy característico — el dolor sigue el trayecto del nervio. Las banderas rojas pueden indicar síndrome de cauda equina: emergencia médica."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          background: '#FFFFFF',
        }} className="ci-sym-grid">
          <div style={{
            padding: '2.5rem 2rem',
            borderRight: '1px solid rgba(10,10,10,0.08)',
          }} className="ci-sym-list">
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(10,10,10,0.08)',
            }}>
              Síntomas típicos · {symptoms.length}
            </div>
            {symptoms.map((s, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: '1rem',
                padding: '1.125rem 0',
                borderBottom: i < symptoms.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: '#C9A55A',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.5,
                  color: '#0A0A0A',
                }}>
                  {s}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: '#0A0A0A',
            color: '#FFFFFF',
            padding: '2.5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
          }} className="ci-sym-red">
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: '#DC2626',
            }} />
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#DC2626',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}>
              ⚠ Cauda equina · Urgencia
            </div>
            <p style={{
              fontSize: '0.875rem',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '1.5rem',
            }}>
              No es ciática común. Es compresión severa de la cola de caballo — requiere cirugía urgente. Si presentas cualquiera de estos signos: emergencias inmediato.
            </p>
            {redFlags.map((f, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '0.875rem',
                alignItems: 'flex-start',
                fontSize: '0.9375rem',
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.9)',
                marginBottom: i < redFlags.length - 1 ? '0.875rem' : 0,
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#DC2626',
                  marginTop: '0.4rem',
                  flexShrink: 0,
                }} />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ci-sym-grid { grid-template-columns: 1fr !important; }
          .ci-sym-list { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// CAUSES — 4 causes of sciatica
// =====================================================================
function CiaticaCauses() {
  const causes = [
    {
      title: 'Hernia discal',
      description: 'El disco intervertebral protruye y comprime la raíz nerviosa. Causa más frecuente en menores de 50 años.',
      example: 'Levantar peso con espalda flexionada + giro — el disco se rompe en L4-L5 o L5-S1.',
      pct: '60%',
    },
    {
      title: 'Síndrome piramidal',
      description: 'Músculo piramidal (glúteo profundo) se contractura y aprisiona el nervio ciático en su trayecto.',
      example: 'Runner con glúteos débiles + isquios tensos — el piramidal compensa y se contractura crónicamente.',
      pct: '20%',
    },
    {
      title: 'Estenosis lumbar',
      description: 'Estrechamiento del canal vertebral por artrosis. Más frecuente en mayores de 50 años.',
      example: 'Persona de 60+ con dolor que aparece al caminar y mejora al sentarse o inclinarse hacia adelante.',
      pct: '15%',
    },
    {
      title: 'Disfunción facetaria',
      description: 'Articulaciones facetarias de la columna lumbar irritadas — pueden referir dolor por el trayecto ciático.',
      example: 'Sedentario crónico con extensión lumbar repetida (mal postural en silla) sin movilidad.',
      pct: '5%',
    },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <CiSectionHeader
          kicker="Causas · Origen real"
          title="Cuatro"
          subtitle="orígenes."
          intro="La ciática no tiene una sola causa. Identificar cuál de las cuatro la produce es lo que define el tratamiento — y la diferencia entre mejorar o cronificarse."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'rgba(10,10,10,0.08)',
          border: '1px solid rgba(10,10,10,0.08)',
        }} className="ci-cau-grid">
          {causes.map((c, i) => (
            <div key={i} style={{
              padding: '2.5rem 2rem',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              minHeight: '280px',
              position: 'relative',
            }}>
              {/* Pct badge */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                fontFamily: 'Space Grotesk',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#C9A55A',
                letterSpacing: '0.05em',
                background: 'rgba(201,165,90,0.08)',
                padding: '0.375rem 0.625rem',
              }}>
                {c.pct}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '1rem',
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#C9A55A',
                  lineHeight: 0.85,
                  letterSpacing: '-0.03em',
                }}>
                  0{i + 1}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#0A0A0A',
                }}>
                  {c.title}.
                </h3>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.55,
                color: 'rgba(10,10,10,0.7)',
              }}>
                {c.description}
              </p>
              <div style={{
                marginTop: 'auto',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(10,10,10,0.06)',
                fontSize: '0.8125rem',
                fontStyle: 'italic',
                color: 'rgba(10,10,10,0.5)',
                lineHeight: 1.45,
              }}>
                <span style={{
                  display: 'inline-block',
                  marginRight: '0.375rem',
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C9A55A',
                  fontWeight: 700,
                  fontStyle: 'normal',
                }}>Ej.</span>
                {c.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ci-cau-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// BY CONTEXT — situations triggering sciatica
// =====================================================================
function CiaticaByContext({ activeContext, setActiveContext }) {
  const contexts = [
    {
      name: 'Trabajo sedentario',
      trigger: 'Sentado 8+ horas/día + flexión lumbar mantenida + glúteos dormidos',
      scenario: 'Persona de oficina que pasa 9h sentada. Empieza con tirantez lumbar. A los 3 meses: dolor que baja por la pierna al levantarse.',
      cause: 'Disfunción facetaria + piramidal',
      stats: { 'Frecuencia': '45%', 'Tiempo recuperación': '4—6 sem', 'Pronóstico': 'Bueno con cambio postural' },
    },
    {
      name: 'Levantamiento de peso',
      trigger: 'Deadlift o squat con flexión lumbar + giro súbito',
      scenario: 'Crossfittero o weightlifter que sube cargas sin descarga. Un día sintió un "clack" en la espalda + dolor inmediato hasta el pie.',
      cause: 'Hernia discal aguda',
      stats: { 'Frecuencia': '25%', 'Tiempo recuperación': '6—12 sem', 'Pronóstico': 'Conservador 90%' },
    },
    {
      name: 'Running',
      trigger: 'Volumen alto + glúteo medio débil + isquios tensos',
      scenario: 'Runner que entrena 60 km/sem. Empieza con dolor en glúteo tras tirada larga. Progresa a dolor por pierna en bajadas.',
      cause: 'Síndrome piramidal',
      stats: { 'Frecuencia': '20%', 'Tiempo recuperación': '4—8 sem', 'Pronóstico': 'Excelente con fortalecimiento' },
    },
    {
      name: 'Edad / Artrosis',
      trigger: 'Degeneración articular + disco deshidratado + canal estrecho',
      scenario: 'Persona de 60+ que camina y aparece dolor irradiado. Mejora sentado o inclinado hacia adelante. Empeora con extensión.',
      cause: 'Estenosis lumbar',
      stats: { 'Frecuencia': '10%', 'Tiempo recuperación': '8—16 sem', 'Pronóstico': 'Manejo crónico' },
    },
  ];

  const current = contexts[activeContext];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#0A0A0A',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(10rem, 22vw, 22rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        CONTEXTO.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <CiSectionHeader
          dark
          kicker="Por contexto · Casos reales"
          title="Cada contexto"
          subtitle="su mecanismo."
          intro="La ciática del oficinista sedentario no es la del crossfittero ni la del runner ni la del adulto mayor. El contexto define la causa — y la causa, el tratamiento."
        />

        <div style={{
          display: 'flex',
          gap: '0',
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '3rem',
        }}>
          {contexts.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setActiveContext(i)}
              style={{
                padding: '1rem 1.5rem',
                background: 'transparent',
                color: activeContext === i ? '#C9A55A' : 'rgba(255,255,255,0.45)',
                border: 'none',
                borderBottom: activeContext === i ? '2px solid #C9A55A' : '2px solid transparent',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                marginBottom: '-1px',
              }}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div key={activeContext} style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
          animation: 'ciCtxFade 0.4s ease-out',
        }} className="ci-ctx-grid">
          <div>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#C9A55A',
              marginBottom: '1rem',
            }}>
              {current.cause}
            </div>
            <h3 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              marginBottom: '2rem',
            }}>
              {current.name}.
            </h3>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.03)',
              borderLeft: '3px solid #C9A55A',
              marginBottom: '2rem',
            }}>
              <div style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#C9A55A',
                marginBottom: '0.5rem',
              }}>
                Gatillo típico
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.55,
                color: 'rgba(255,255,255,0.85)',
              }}>
                {current.trigger}
              </p>
            </div>
            <div style={{
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '0.75rem',
            }}>
              Caso real
            </div>
            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.75)',
            }}>
              {current.scenario}
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {Object.entries(current.stats).map(([key, val], i, arr) => (
              <div key={key} style={{
                padding: '1.75rem 2rem',
                borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '0.5rem',
                }}>
                  {key}
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  color: '#C9A55A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}>
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ciCtxFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .ci-ctx-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// DIFFERENTIAL
// =====================================================================
function CiaticaDifferential() {
  const rows = [
    { condition: 'Hernia discal',     location: 'Trayecto completo del nervio', test: 'Lasègue + Bragard',  finding: 'Lasègue precoz < 60° + déficit neurológico' },
    { condition: 'Síndrome piramidal', location: 'Glúteo + posterior muslo',     test: 'FAIR test',          finding: 'Dolor con flexión + aducción + rot. interna' },
    { condition: 'Estenosis lumbar',   location: 'Variable, suele bilateral',    test: 'Caminata progresiva', finding: 'Dolor al caminar, alivia al inclinarse' },
    { condition: 'Disfunción facetaria', location: 'Lumbar + glúteo (poco distal)', test: 'Extensión + rotación', finding: 'Dolor con extensión, mejora con flexión' },
    { condition: 'Tensión isquiotibial', location: 'Solo posterior muslo',         test: 'SLR > 75°',           finding: 'Dolor muscular sin parestesia' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <CiSectionHeader
          kicker="Diagnóstico diferencial"
          title="Misma pierna,"
          subtitle="distinto origen."
          intro="Cinco condiciones producen dolor en el trayecto del ciático. Diferenciarlas define el tratamiento — y previene cronificación."
        />

        <div style={{
          border: '1px solid rgba(10,10,10,0.08)',
          overflowX: 'auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1.4fr 1.2fr 2fr',
            background: '#0A0A0A',
            color: '#FFFFFF',
            minWidth: '720px',
          }} className="ci-dx-head">
            {['Condición', 'Localización', 'Test clínico', 'Hallazgo clave'].map((h, i, arr) => (
              <div key={h} style={{
                padding: '1.25rem 1.5rem',
                borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: '#C9A55A',
                }}>
                  {h}
                </div>
              </div>
            ))}
          </div>

          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1.4fr 1.2fr 2fr',
              borderTop: '1px solid rgba(10,10,10,0.06)',
              background: '#FFFFFF',
              minWidth: '720px',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#FAFAFA'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#FFFFFF'}
            >
              <div style={{
                padding: '1.5rem',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                display: 'flex',
                alignItems: 'center',
                fontSize: '1rem',
                fontWeight: 700,
                fontFamily: 'Space Grotesk',
                letterSpacing: '-0.01em',
                color: '#0A0A0A',
              }}>
                {r.condition}
              </div>
              <div style={{
                padding: '1.5rem',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                fontSize: '0.9375rem',
                color: 'rgba(10,10,10,0.7)',
                display: 'flex',
                alignItems: 'center',
              }}>
                {r.location}
              </div>
              <div style={{
                padding: '1.5rem',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                fontSize: '0.9375rem',
                color: 'rgba(10,10,10,0.7)',
                fontStyle: 'italic',
                display: 'flex',
                alignItems: 'center',
              }}>
                {r.test}
              </div>
              <div style={{
                padding: '1.5rem',
                fontSize: '0.9375rem',
                color: '#0A0A0A',
                display: 'flex',
                alignItems: 'center',
              }}>
                {r.finding}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// TREATMENT — 4 phases
// =====================================================================
function CiaticaTreatment({ activePhase, setActivePhase }) {
  const phases = [
    {
      title: 'Diagnóstico',
      duration: 'Sesión 1 · 60 min',
      desc: 'Lasègue, Bragard, FAIR test. Evaluación neurológica (reflejos, sensibilidad, fuerza). Diferenciar hernia vs piramidal vs estenosis. RM solo si hay duda.',
      bullets: ['Lasègue + Bragard', 'Evaluación neurológica', 'Diferenciar causa', 'Plan según origen'],
    },
    {
      title: 'Descomprimir',
      duration: 'Semanas 1—2',
      desc: 'Terapia manual lumbar, neurodinamia, alivio del piramidal con punción seca. Posiciones de descarga. No reposo absoluto — movilidad sin dolor.',
      bullets: ['Terapia manual lumbar', 'Punción seca piramidal', 'Neurodinamia', 'Posiciones de descarga'],
    },
    {
      title: 'Estabilizar',
      duration: 'Semanas 2—6',
      desc: 'Core estabilizador, glúteo medio fuerte, control motor lumbar. Ejercicios de McKenzie si aplica. Reentrenar patrón de bisagra de cadera.',
      bullets: ['Core estabilizador', 'Glúteo medio carga', 'McKenzie si aplica', 'Patrón de cadera'],
    },
    {
      title: 'Volver',
      duration: 'Semanas 4—8',
      desc: 'Carga progresiva. Volver al deporte o actividad sin dolor radicular. Educación en mecánica de levantamiento, postura sentada, gestión de cargas.',
      bullets: ['Carga progresiva', 'Mecánica de levantamiento', 'Postura funcional', 'Vuelta a actividad'],
    },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <CiSectionHeader
          kicker="Tratamiento · 4 fases"
          title="Proceso,"
          subtitle="no analgésicos."
          intro="La ciática se resuelve por fases. Saltarse la estabilización garantiza recaída — el dolor se va, el patrón no."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="ci-tx-grid">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid rgba(10,10,10,0.08)',
          }}>
            {phases.map((p, i) => {
              const isActive = activePhase === i;
              return (
                <button
                  key={i}
                  onClick={() => setActivePhase(i)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr auto',
                    gap: '1.25rem',
                    alignItems: 'center',
                    padding: '1.75rem 0',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid rgba(10,10,10,0.08)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'inherit',
                    position: 'relative',
                    paddingLeft: isActive ? '1rem' : '0',
                    transition: 'padding 0.3s',
                  }}
                >
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '3px',
                      background: '#C9A55A',
                    }} />
                  )}
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: isActive ? '1rem' : '0.875rem',
                    fontWeight: 700,
                    color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                    transition: 'all 0.3s',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{
                    fontSize: isActive ? '1.5rem' : '1.25rem',
                    fontWeight: 700,
                    fontFamily: 'Space Grotesk',
                    letterSpacing: '-0.01em',
                    color: isActive ? '#0A0A0A' : 'rgba(10,10,10,0.5)',
                    transition: 'all 0.3s',
                  }}>
                    {p.title}
                  </div>
                  <div style={{
                    fontSize: '1.25rem',
                    color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.2)',
                    transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
                    transition: 'all 0.3s',
                  }}>
                    →
                  </div>
                </button>
              );
            })}
          </div>

          <div key={activePhase} style={{
            background: '#FFFFFF',
            border: '1px solid rgba(10,10,10,0.08)',
            padding: '3rem',
            position: 'relative',
            minHeight: '420px',
            animation: 'ciTxFade 0.4s ease-out',
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '2rem',
              fontFamily: 'Space Grotesk',
              fontSize: '8rem',
              fontWeight: 700,
              color: 'rgba(201,165,90,0.08)',
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
            }}>
              0{activePhase + 1}
            </div>

            <div style={{
              fontSize: '0.6875rem',
              color: '#C9A55A',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '1rem',
              position: 'relative',
            }}>
              Fase {String(activePhase + 1).padStart(2, '0')} · {phases[activePhase].duration}
            </div>

            <h3 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: '#0A0A0A',
              marginBottom: '1.5rem',
              position: 'relative',
            }}>
              {phases[activePhase].title}
              <span style={{ color: '#C9A55A' }}>.</span>
            </h3>

            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(10,10,10,0.65)',
              maxWidth: '500px',
              marginBottom: '2rem',
              position: 'relative',
            }}>
              {phases[activePhase].desc}
            </p>

            <div style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(10,10,10,0.06)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
            }}>
              {phases[activePhase].bullets.map((b, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.625rem 0',
                  fontSize: '0.9375rem',
                  color: 'rgba(10,10,10,0.8)',
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    background: '#C9A55A',
                  }} />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ciTxFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .ci-tx-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// EXERCISES
// =====================================================================
function CiaticaExercises() {
  const exercises = [
    { name: 'Neurodinamia ciático',  goal: 'Movilizar nervio',         sets: '3 × 10 lentos', stage: 'Fase 1—2', difficulty: 'Baja' },
    { name: 'Cat-cow',                goal: 'Movilidad lumbar',         sets: '3 × 10',        stage: 'Fase 1', difficulty: 'Baja' },
    { name: 'Bird dog',               goal: 'Estabilidad lumbar',       sets: '3 × 10/lado',   stage: 'Fase 2', difficulty: 'Baja' },
    { name: 'Dead bug',               goal: 'Core anti-extensión',      sets: '3 × 10/lado',   stage: 'Fase 2', difficulty: 'Baja' },
    { name: 'Glúteo puente',          goal: 'Activación posterior',     sets: '3 × 15',        stage: 'Fase 2',   difficulty: 'Baja' },
    { name: 'Side plank',             goal: 'Glúteo medio + core',      sets: '3 × 30s/lado',  stage: 'Fase 2—3', difficulty: 'Media' },
    { name: 'McKenzie extension',     goal: 'Centralizar (si aplica)',  sets: '3 × 10',        stage: 'Variable', difficulty: 'Baja' },
    { name: 'Hip hinge',              goal: 'Patrón de cadera',         sets: '3 × 12',        stage: 'Fase 3—4', difficulty: 'Media' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <CiSectionHeader
          kicker="Ejercicios · Plan base"
          title="Qué"
          subtitle="trabajamos."
          intro="Ejercicios típicos del plan. McKenzie funciona en hernias con centralización — pero empeora estenosis. Por eso el diagnóstico va antes del ejercicio."
        />

        <div style={{
          border: '1px solid rgba(10,10,10,0.08)',
          background: '#FFFFFF',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60px 1.5fr 1.5fr 1fr 1fr 1fr',
            padding: '1rem 1.5rem',
            background: '#FAFAFA',
            borderBottom: '1px solid rgba(10,10,10,0.08)',
            fontSize: '0.625rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'rgba(10,10,10,0.4)',
          }} className="ci-ex-head">
            <div>Nº</div>
            <div>Ejercicio</div>
            <div>Objetivo</div>
            <div>Series × Reps</div>
            <div>Fase</div>
            <div>Dificultad</div>
          </div>

          {exercises.map((e, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '60px 1.5fr 1.5fr 1fr 1fr 1fr',
              padding: '1.5rem',
              borderBottom: i < exercises.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
              alignItems: 'center',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(el) => el.currentTarget.style.background = '#FAFAFA'}
            onMouseLeave={(el) => el.currentTarget.style.background = '#FFFFFF'}
            className="ci-ex-row">
              <div style={{
                fontFamily: 'Space Grotesk',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#C9A55A',
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{
                fontSize: '1.0625rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                color: '#0A0A0A',
              }}>{e.name}</div>
              <div style={{ fontSize: '0.9375rem', color: 'rgba(10,10,10,0.65)' }}>{e.goal}</div>
              <div style={{
                fontSize: '0.9375rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                color: '#0A0A0A',
              }}>{e.sets}</div>
              <div style={{
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#C9A55A',
              }}>{e.stage}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: e.difficulty === 'Avanzada' ? '#DC2626' : e.difficulty === 'Media' ? '#C9A55A' : '#16A34A',
                }} />
                <span style={{ fontSize: '0.875rem', color: '#0A0A0A' }}>{e.difficulty}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '1.5rem',
          fontSize: '0.875rem',
          color: 'rgba(10,10,10,0.5)',
          maxWidth: '600px',
        }}>
          McKenzie está marcado "variable" porque depende del diagnóstico. En estenosis, contraindicado. En hernia con centralización, oro puro. Por eso el plan personalizado importa.
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ci-ex-head { display: none !important; }
          .ci-ex-row { grid-template-columns: 40px 1fr !important; gap: 0.75rem; padding: 1rem !important; }
          .ci-ex-row > div:nth-child(3),
          .ci-ex-row > div:nth-child(4),
          .ci-ex-row > div:nth-child(5),
          .ci-ex-row > div:nth-child(6) { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// RECOVERY
// =====================================================================
function CiaticaRecovery() {
  const milestones = [
    { week: 'Sem 0',   status: 'Diagnóstico',   desc: 'Lasègue + plan según causa' },
    { week: 'Sem 1—2', status: 'Reducir dolor', desc: 'Manual + neurodinamia' },
    { week: 'Sem 2—6', status: 'Estabilizar',   desc: 'Core + glúteo + control motor' },
    { week: 'Sem 4—8', status: 'Volver',        desc: 'Carga progresiva + actividad' },
  ];

  const factors = [
    { label: 'Causa específica (hernia vs piramidal)', weight: 'Alta' },
    { label: 'Cronicidad (meses con dolor)',           weight: 'Alta' },
    { label: 'Adherencia al plan',                     weight: 'Alta' },
    { label: 'Postura laboral / sedentarismo',         weight: 'Media' },
    { label: 'Edad del paciente',                       weight: 'Media' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <CiSectionHeader
          kicker="Tiempo de recuperación"
          title="Entre 3"
          subtitle="y 8 semanas."
          intro="La mayoría de ciáticas se resuelven con tratamiento conservador en 3—8 semanas. Hernias grandes o estenosis pueden tomar más. Cero ciática sin valoración."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="ci-rec-grid">
          <div style={{
            background: '#FFFFFF',
            border: '1px solid rgba(10,10,10,0.08)',
            padding: '3rem 2rem',
          }}>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '2.5rem',
            }}>
              Línea de tiempo típica
            </div>

            <div style={{
              position: 'relative',
              paddingLeft: '2.5rem',
            }}>
              <div style={{
                position: 'absolute',
                left: '8px',
                top: '12px',
                bottom: '12px',
                width: '2px',
                background: 'linear-gradient(180deg, #C9A55A 0%, rgba(201,165,90,0.2) 100%)',
              }} />

              {milestones.map((m, i) => (
                <div key={i} style={{
                  position: 'relative',
                  marginBottom: i < milestones.length - 1 ? '2.5rem' : 0,
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-2.5rem',
                    top: '4px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '3px solid #C9A55A',
                    boxShadow: i === 0 ? '0 0 0 4px rgba(201,165,90,0.2)' : 'none',
                  }} />
                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#C9A55A',
                    marginBottom: '0.375rem',
                    fontFamily: 'Space Grotesk',
                  }}>{m.week}</div>
                  <h4 style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#0A0A0A',
                    marginBottom: '0.375rem',
                    lineHeight: 1.05,
                  }}>{m.status}.</h4>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'rgba(10,10,10,0.6)',
                    lineHeight: 1.5,
                  }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '1.5rem',
            }}>Qué cambia el tiempo</div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              borderTop: '1px solid rgba(10,10,10,0.08)',
            }}>
              {factors.map((f, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  padding: '1.125rem 0',
                  borderBottom: '1px solid rgba(10,10,10,0.08)',
                  gap: '1rem',
                }}>
                  <div style={{
                    fontSize: '1rem',
                    color: '#0A0A0A',
                    fontWeight: 500,
                  }}>{f.label}</div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: f.weight === 'Alta' ? '#DC2626' : '#C9A55A',
                    }} />
                    <span style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      color: 'rgba(10,10,10,0.6)',
                    }}>Influencia {f.weight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ci-rec-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// CTA
// =====================================================================
function CiaticaCTA({ onNavigate }) {
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          background: 'linear-gradient(135deg, #C9A55A 0%, #B8943F 100%)',
          color: '#0A0A0A',
          padding: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }} className="ci-cta-grid">
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-20%',
            width: '60%',
            height: '140%',
            background: 'linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.05) 50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative' }}>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}>Ciática · Diagnóstico diferencial</div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              marginBottom: '1.5rem',
            }}>
              Identifica la causa.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Trata el origen.</span>
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.55,
              opacity: 0.85,
              maxWidth: '520px',
            }}>
              Primera sesión: tests neurológicos completos + diferencial entre las 4 causas + plan específico al origen. 60 min. Sales con diagnóstico, no con receta.
            </p>
          </div>

          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                background: '#0A0A0A',
                color: '#FFFFFF',
                border: 'none',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Agendar valoración
              <span>→</span>
            </button>
            <button
              style={{
                background: 'transparent',
                color: '#0A0A0A',
                border: '1px solid rgba(10,10,10,0.4)',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A0A0A';
                e.currentTarget.style.color = '#C9A55A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#0A0A0A';
              }}
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ci-cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// FAQ
// =====================================================================
function CiaticaFAQ({ openFaq, setOpenFaq }) {
  const faqs = [
    { q: '¿Reposo en cama es bueno para la ciática?', a: 'No más de 1—2 días. La evidencia es clara: el reposo prolongado empeora la recuperación. Hay que moverse de forma controlada — caminar sin dolor, evitar gestos que disparen síntomas, mantener actividad de bajo impacto.' },
    { q: '¿Necesito resonancia para diagnóstico?', a: 'Casi nunca al inicio. La ciática es diagnóstico clínico. La RM se reserva para: síntomas que persisten más de 6 semanas con tratamiento bien hecho, bandera roja neurológica, o sospecha de hernia que requiera intervención quirúrgica.' },
    { q: '¿Cuándo es para cirugía?', a: 'En menos del 10% de casos. Indicación quirúrgica: déficit neurológico progresivo, cauda equina (urgencia), o ciática que no responde a 6—12 semanas de tratamiento conservador bien hecho. Primero agotamos opciones no invasivas.' },
    { q: '¿Hielo o calor?', a: 'Hielo en las primeras 48—72h si hay inflamación aguda. Después, calor en zona lumbar y glúteo (relaja musculatura). Sin embargo, hielo o calor solo dan alivio sintomático — no resuelven la causa. El movimiento controlado sí.' },
    { q: '¿Puedo entrenar con ciática?', a: 'Depende de la fase y la causa. En fase aguda hay que reducir gestos disparadores (sentadilla profunda, deadlift, sprint). Cardio sin impacto y trabajo de tren superior se mantienen. Vuelta a fuerza progresiva desde semana 3—4.' },
    { q: '¿La ciática se cronifica?', a: 'Sí, si no se trata la causa. La fase aguda dura 4—8 semanas. Si pasada esa ventana sigue, hay que reevaluar — generalmente la causa es piramidal mal tratado o un problema postural no corregido. Recidivas frecuentes indican falta de fortalecimiento.' },
    { q: '¿Las pastillas resuelven la ciática?', a: 'No. Los AINEs y miorrelajantes bajan el dolor temporalmente pero no corrigen la causa biomecánica. Funcionan como puente para empezar el tratamiento — no como solución. Vuelven al deporte, vuelve el dolor.' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <CiSectionHeader
          kicker="Preguntas frecuentes"
          title="Lo que"
          subtitle="me preguntan."
          intro="Las dudas más comunes sobre ciática. Si no encuentras la tuya, WhatsApp directo — respondo yo."
        />

        <div style={{
          maxWidth: '900px',
          borderTop: '1px solid rgba(10,10,10,0.08)',
        }}>
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  style={{
                    width: '100%',
                    padding: '1.75rem 0',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr 40px',
                    alignItems: 'center',
                    gap: '1.5rem',
                  }}
                >
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: isOpen ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                    transition: 'color 0.3s',
                  }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{
                    fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
                    fontWeight: 600,
                    fontFamily: 'Space Grotesk',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    color: '#0A0A0A',
                  }}>{faq.q}</div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: `1px solid ${isOpen ? '#C9A55A' : 'rgba(10,10,10,0.15)'}`,
                    background: isOpen ? '#C9A55A' : 'transparent',
                    color: isOpen ? '#0A0A0A' : 'rgba(10,10,10,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.125rem',
                    fontWeight: 300,
                    transition: 'all 0.4s',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    justifySelf: 'end',
                  }}>+</div>
                </button>

                <div style={{
                  display: 'grid',
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr 40px',
                      gap: '1.5rem',
                      paddingBottom: '1.75rem',
                    }}>
                      <div></div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: 'rgba(10,10,10,0.7)',
                        maxWidth: '700px',
                      }}>{faq.a}</p>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// RELATED
// =====================================================================
function CiaticaRelated({ onNavigate }) {
  const related = [
    { name: 'Pubalgia',             page: 'pubalgia',   zone: 'Ingle / Pelvis' },
    { name: 'Tendinitis Rotuliana', page: 'tendinitis', zone: 'Rodilla' },
    { name: 'Hombro Congelado',     page: 'hombro',     zone: 'Hombro' },
  ];

  return (
    <section style={{
      padding: '6rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{
            fontSize: '0.75rem',
            color: '#C9A55A',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>Otras lesiones · Ver protocolo</div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(10,10,10,0.08)',
          border: '1px solid rgba(10,10,10,0.08)',
        }} className="ci-rel-grid">
          {related.map((r, i) => (
            <button
              key={r.page}
              onClick={() => onNavigate(r.page)}
              style={{
                padding: '2rem',
                background: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.4s',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                minHeight: '180px',
                color: 'inherit',
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A0A0A';
                e.currentTarget.querySelectorAll('[data-rel]').forEach(el => {
                  if (el.dataset.rel === 'name') el.style.color = '#FFFFFF';
                  if (el.dataset.rel === 'zone') el.style.color = '#C9A55A';
                  if (el.dataset.rel === 'arrow') {
                    el.style.color = '#C9A55A';
                    el.style.transform = 'translateX(8px)';
                  }
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.querySelectorAll('[data-rel]').forEach(el => {
                  if (el.dataset.rel === 'name') el.style.color = '#0A0A0A';
                  if (el.dataset.rel === 'zone') el.style.color = 'rgba(10,10,10,0.5)';
                  if (el.dataset.rel === 'arrow') {
                    el.style.color = 'rgba(10,10,10,0.3)';
                    el.style.transform = 'translateX(0)';
                  }
                });
              }}
            >
              <div style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'rgba(10,10,10,0.4)',
              }}>0{i + 1} / 03</div>
              <h3 data-rel="name" style={{
                fontSize: '1.625rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#0A0A0A',
                transition: 'color 0.4s',
                lineHeight: 1.05,
              }}>{r.name}</h3>
              <div data-rel="zone" style={{
                fontSize: '0.875rem',
                color: 'rgba(10,10,10,0.5)',
                transition: 'color 0.4s',
              }}>{r.zone}</div>
              <div style={{
                marginTop: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: '#C9A55A',
                }}>Ver protocolo</span>
                <span data-rel="arrow" style={{
                  fontSize: '1.5rem',
                  color: 'rgba(10,10,10,0.3)',
                  transition: 'all 0.4s',
                  fontFamily: 'Space Grotesk',
                }}>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ci-rel-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

if (typeof window !== "undefined") window.CiaticaPage = CiaticaPage;
/* ==================== tendinitis.jsx ==================== */
// TENDINITIS ROTULIANA - PARTE 1 - Hero, WhatIs, Clasificación Blazina interactiva

// =====================================================================
// HERO
// =====================================================================
function TendinitisHero({ onNavigate }) {
  return (
    <section style={{
      padding: '12rem 0 6rem',
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(8rem, 18vw, 20rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        ROTULIANA.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem',
          fontSize: '0.6875rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          <a onClick={() => onNavigate('lesiones')} style={{ color: 'rgba(10,10,10,0.5)', cursor: 'pointer', textDecoration: 'none' }}>Lesiones</a>
          <span style={{ color: 'rgba(10,10,10,0.25)' }}>/</span>
          <span style={{ color: '#C9A55A' }}>Tendinitis Rotuliana</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '4rem',
          alignItems: 'flex-end',
        }} className="te-hero-grid">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}>
              <div style={{ width: '60px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Rodilla · Tendón rotuliano · Jumper's knee
              </div>
            </div>
            <h1 style={{
              fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
              marginBottom: '2.5rem',
            }}>
              Tendinitis
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                rotuliana.
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
              lineHeight: 1.55,
              color: 'rgba(10,10,10,0.65)',
              maxWidth: '620px',
              marginBottom: '2rem',
            }}>
              Dolor en el polo inferior de la rótula — el sello del atleta que salta.
              <span style={{ color: '#0A0A0A', fontWeight: 500 }}> No es inflamación, es degeneración. Y el reposo no la cura.</span>
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate('fisioterapia')}
                style={{
                  background: '#0A0A0A',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#C9A55A';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0A0A0A';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Agendar valoración
                <span>→</span>
              </button>
              <a
                href="#blazina"
                style={{
                  background: 'transparent',
                  color: '#0A0A0A',
                  border: '1px solid rgba(10,10,10,0.2)',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A55A';
                  e.currentTarget.style.color = '#C9A55A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(10,10,10,0.2)';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
              >
                ¿En qué fase estoy? ↓
              </a>
            </div>
          </div>

          <div style={{
            background: '#0A0A0A',
            color: '#FFFFFF',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: '#C9A55A',
            }} />
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#C9A55A',
              marginBottom: '1.5rem',
            }}>
              TL;DR Clínico
            </div>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '1.5rem',
            }}>
              Tendinopatía del tendón rotuliano por sobrecarga. No es inflamación clásica — es degeneración del colágeno. Solo carga progresiva (excéntricos) la cura.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#C9A55A', lineHeight: 1, marginBottom: '0.25rem' }}>4—10</div>
                <div style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Semanas</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#C9A55A', lineHeight: 1, marginBottom: '0.25rem' }}>Media</div>
                <div style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Complejidad</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .te-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// WHAT IS
// =====================================================================
function TendinitisWhatIs() {
  const facts = [
    { label: 'Zona afectada',  value: 'Polo inferior de la rótula → tendón rotuliano' },
    { label: 'Mecanismo',      value: 'Sobrecarga de saltos · degeneración del colágeno' },
    { label: 'Deportes de riesgo', value: 'CrossFit, baloncesto, voleibol, running, fútbol' },
    { label: 'Recuperación',   value: '4—10 semanas con carga excéntrica progresiva' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="te-wi-grid">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Qué es realmente
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
              marginBottom: '2rem',
            }}>
              No es
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                inflamación.
              </span>
            </h2>

            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'rgba(10,10,10,0.7)',
              marginBottom: '1.5rem',
            }}>
              El nombre "tendinitis" engaña. La evidencia actual demuestra que es <strong style={{ color: '#0A0A0A' }}>tendinopatía</strong> — degeneración del colágeno del tendón por sobrecarga repetida, no inflamación clásica. Por eso el ibuprofeno no la cura.
            </p>
            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(10,10,10,0.6)',
              marginBottom: '1.5rem',
            }}>
              El tendón necesita <strong style={{ color: '#0A0A0A' }}>carga, no reposo</strong>. Específicamente carga excéntrica progresiva — el clásico declines squat de Stanish. Reposar empeora. Cargar mal empeora. Cargar bien remodela.
            </p>
            <div style={{
              padding: '1.25rem 1.5rem',
              background: '#FFFFFF',
              borderLeft: '3px solid #C9A55A',
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              color: 'rgba(10,10,10,0.75)',
            }}>
              <strong style={{ color: '#0A0A0A' }}>Importante:</strong> La fase clínica (Blazina 1—4) determina qué carga puedes tolerar. Fase 4 es rotura — territorio quirúrgico. Las otras tres se tratan conservadoramente.
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            border: '1px solid rgba(10,10,10,0.08)',
            background: '#FFFFFF',
          }}>
            {facts.map((f, i) => (
              <div key={i} style={{
                padding: '1.75rem 2rem',
                borderBottom: i < facts.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: '1.25rem',
                alignItems: 'center',
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'rgba(10,10,10,0.3)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#C9A55A',
                    marginBottom: '0.375rem',
                  }}>
                    {f.label}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#0A0A0A',
                    fontWeight: 500,
                    lineHeight: 1.45,
                  }}>
                    {f.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .te-wi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// BLAZINA CLASSIFICATION — Interactive tool
// =====================================================================
function TendinitisBlazina({ onNavigate }) {
  const [phase, setPhase] = React.useState(1);

  const phases = [
    {
      n: 1,
      title: 'Fase 1',
      level: 'Leve',
      color: '#16A34A',
      summary: 'Dolor solo después de la actividad.',
      symptoms: [
        'Dolor que aparece al terminar el entrenamiento',
        'Cede con reposo en horas',
        'Sin afectación funcional durante el deporte',
        'Sensación de "agujetas" en el polo inferior de rótula',
      ],
      doThis: [
        'Mantener actividad reduciendo volumen 20—30%',
        'Iniciar carga excéntrica ligera (declines squats)',
        'Hielo post-entrenamiento si hay molestia',
        'Identificar el error de carga que lo disparó',
      ],
      avoid: [
        'Aumentar volumen "porque ya no duele entrenando"',
        'Saltos pliométricos repetidos sin progresión',
        'Reposo total — el tendón pierde capacidad',
      ],
      recovery: '2—4 semanas',
    },
    {
      n: 2,
      title: 'Fase 2',
      level: 'Moderada',
      color: '#C9A55A',
      summary: 'Dolor durante Y después de la actividad — pero sin perder rendimiento.',
      symptoms: [
        'Dolor que aparece al calentar y persiste durante el entrenamiento',
        'Dolor post-actividad más prolongado (horas)',
        'No te impide entrenar al nivel habitual',
        'Aparece al subir/bajar escaleras o al levantarse de silla baja',
      ],
      doThis: [
        'Reducir volumen 40—50% y eliminar saltos',
        'Carga excéntrica progresiva (3× semana mínimo)',
        'Spanish squat + isométricos largos (45s)',
        'Valoración profesional para identificar causa biomecánica',
      ],
      avoid: [
        'Seguir saltando "para no perder fitness"',
        'Estiramientos agresivos del cuádriceps',
        'Infiltraciones de corticoides (debilitan tendón)',
      ],
      recovery: '4—8 semanas',
    },
    {
      n: 3,
      title: 'Fase 3',
      level: 'Severa',
      color: '#DC2626',
      summary: 'Dolor que afecta tu rendimiento — ya no puedes entrenar normal.',
      symptoms: [
        'Dolor durante toda la actividad, no solo al inicio',
        'Pierdes rendimiento — saltas menos, corres más lento',
        'Dolor en actividades cotidianas (escaleras, sentarse)',
        'Puede haber engrosamiento palpable del tendón',
      ],
      doThis: [
        'Suspender actividad de impacto temporalmente',
        'Tratamiento profesional obligatorio',
        'Carga excéntrica supervisada — sin progresar solo',
        'Mantener cardio sin impacto (bici, natación)',
      ],
      avoid: [
        'Volver al deporte sin completar fortalecimiento',
        'Confiar en analgésicos para entrenar',
        'Cirugía como primera opción — agotar conservador',
      ],
      recovery: '8—16 semanas',
    },
    {
      n: 4,
      title: 'Fase 4',
      level: 'Rotura',
      color: '#7F1D1D',
      summary: '⚠ Rotura del tendón — parcial o completa.',
      symptoms: [
        'Dolor súbito intenso durante esfuerzo (salto o sprint)',
        'Sensación de "chasquido" o "tirón" en el momento',
        'Imposibilidad de extender la rodilla con fuerza',
        'Hundimiento visible donde estaba el tendón',
      ],
      doThis: [
        'Atención médica inmediata',
        'Inmovilización transitoria + imágenes (eco/RM)',
        'Cirugía si rotura completa',
        'Rehabilitación postquirúrgica estructurada',
      ],
      avoid: [
        'Tratar de "caminar para ver si se compone"',
        'Demorar la consulta — el tendón retrasado se retrae',
      ],
      recovery: '4—12 meses con cirugía',
    },
  ];

  const current = phases[phase - 1];

  return (
    <section id="blazina" style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        left: '-3%',
        bottom: '-2rem',
        fontSize: 'clamp(8rem, 18vw, 18rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        BLAZINA.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '3rem',
          alignItems: 'flex-end',
        }} className="bl-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Clasificación · 4 fases
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
            }}>
              ¿En qué
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                fase estoy?
              </span>
            </h2>
          </div>

          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(10,10,10,0.6)',
            lineHeight: 1.55,
            maxWidth: '460px',
          }}>
            La clasificación de Blazina marca cómo de avanzada está la tendinopatía. Cada fase tiene su tratamiento — saber dónde estás cambia todo.
          </p>
        </div>

        {/* Phase selector */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          marginBottom: '0',
          border: '1px solid rgba(10,10,10,0.08)',
        }} className="bl-selector">
          {phases.map((p, i) => {
            const isActive = phase === p.n;
            return (
              <button
                key={p.n}
                onClick={() => setPhase(p.n)}
                style={{
                  padding: '1.75rem 1.25rem',
                  background: isActive ? '#0A0A0A' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#0A0A0A',
                  border: 'none',
                  borderRight: i < phases.length - 1 ? '1px solid rgba(10,10,10,0.08)' : 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                  transition: 'all 0.4s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: p.color,
                  }} />
                )}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                }}>
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: isActive ? p.color : 'rgba(10,10,10,0.2)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    transition: 'color 0.4s',
                  }}>
                    0{p.n}
                  </div>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: p.color,
                    flexShrink: 0,
                  }} />
                </div>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: isActive ? '#FFFFFF' : '#0A0A0A',
                }}>
                  {p.title}
                </div>
                <div style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: p.color,
                }}>
                  {p.level}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div key={phase} style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          borderTop: 'none',
          background: '#FFFFFF',
          animation: 'blFade 0.4s ease-out',
        }} className="bl-detail">
          {/* Anatomic visual */}
          <div style={{
            background: '#FAFAFA',
            borderRight: '1px solid rgba(10,10,10,0.08)',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }} className="bl-anatomy">
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
            }}>
              Anatomía · Tendón rotuliano
            </div>

            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '320px',
            }}>
              <svg viewBox="0 0 240 380" style={{ width: '100%', maxWidth: '240px', height: 'auto' }}>
                {/* Femur */}
                <path d="M 100 30 L 100 160 L 140 160 L 140 30 Z" fill="rgba(10,10,10,0.06)" stroke="rgba(10,10,10,0.4)" strokeWidth="1.5" />
                <text x="120" y="100" textAnchor="middle" fill="rgba(10,10,10,0.4)" fontSize="9" fontFamily="Space Grotesk" fontWeight="600" letterSpacing="0.1em">FÉMUR</text>

                {/* Joint capsule */}
                <ellipse cx="120" cy="170" rx="42" ry="8" fill="none" stroke="rgba(10,10,10,0.2)" strokeWidth="0.8" strokeDasharray="3 3" />

                {/* Patella (rótula) */}
                <ellipse cx="120" cy="185" rx="22" ry="14" fill="rgba(10,10,10,0.1)" stroke="rgba(10,10,10,0.6)" strokeWidth="1.5" />
                <text x="120" y="188" textAnchor="middle" fill="rgba(10,10,10,0.5)" fontSize="8" fontFamily="Space Grotesk" fontWeight="600" letterSpacing="0.1em">RÓTULA</text>

                {/* Patellar tendon — this is where the action is, color by phase severity */}
                <rect
                  x="105"
                  y="199"
                  width="30"
                  height="40"
                  fill={current.color}
                  fillOpacity={phase === 1 ? 0.2 : phase === 2 ? 0.4 : phase === 3 ? 0.6 : 0.85}
                  stroke={current.color}
                  strokeWidth="2"
                  style={{ transition: 'all 0.5s' }}
                />
                {/* Animated pulse on tendon */}
                <rect
                  x="105"
                  y="199"
                  width="30"
                  height="40"
                  fill="none"
                  stroke={current.color}
                  strokeWidth="2"
                  opacity="0.5"
                >
                  <animate attributeName="opacity" from="0.6" to="0" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="width" from="30" to="48" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="height" from="40" to="58" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="x" from="105" to="96" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="y" from="199" to="190" dur="1.8s" repeatCount="indefinite" />
                </rect>

                {/* Label with line */}
                <line x1="150" y1="219" x2="190" y2="219" stroke={current.color} strokeWidth="1" />
                <text x="195" y="216" fill={current.color} fontSize="9" fontFamily="Space Grotesk" fontWeight="700" letterSpacing="0.05em">TENDÓN</text>
                <text x="195" y="227" fill={current.color} fontSize="9" fontFamily="Space Grotesk" fontWeight="700" letterSpacing="0.05em">ROTULIANO</text>

                {/* Tibia */}
                <path d="M 100 240 L 100 360 L 140 360 L 140 240 Z" fill="rgba(10,10,10,0.06)" stroke="rgba(10,10,10,0.4)" strokeWidth="1.5" />
                <text x="120" y="310" textAnchor="middle" fill="rgba(10,10,10,0.4)" fontSize="9" fontFamily="Space Grotesk" fontWeight="600" letterSpacing="0.1em">TIBIA</text>

                {/* Severity scale at bottom */}
                <g transform="translate(20, 360)">
                  {[1, 2, 3, 4].map(p => (
                    <rect
                      key={p}
                      x={(p - 1) * 50}
                      y={0}
                      width={45}
                      height={6}
                      fill={p <= phase ? phases[phase - 1].color : 'rgba(10,10,10,0.08)'}
                      style={{ transition: 'fill 0.4s' }}
                    />
                  ))}
                </g>
              </svg>
            </div>

            <div style={{
              padding: '1rem 1.25rem',
              background: '#FFFFFF',
              border: `1px solid ${current.color}33`,
              borderLeft: `3px solid ${current.color}`,
            }}>
              <div style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: current.color,
                marginBottom: '0.375rem',
              }}>
                Tiempo estimado
              </div>
              <div style={{
                fontFamily: 'Space Grotesk',
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#0A0A0A',
                lineHeight: 1,
              }}>
                {current.recovery}
              </div>
            </div>
          </div>

          {/* Info panel */}
          <div style={{
            padding: '2.5rem 2.5rem 3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                marginBottom: '1rem',
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: current.color }} />
                <div style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: current.color,
                }}>
                  {current.title} · {current.level}
                </div>
              </div>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 2.2vw, 1.875rem)',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: '#0A0A0A',
              }}>
                {current.summary}
              </h3>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem',
            }}>
              {/* Symptoms */}
              <div>
                <div style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'rgba(10,10,10,0.4)',
                  marginBottom: '0.75rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(10,10,10,0.08)',
                }}>
                  Síntomas típicos
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {current.symptoms.map((s, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.625rem',
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      color: 'rgba(10,10,10,0.8)',
                    }}>
                      <div style={{
                        width: '5px',
                        height: '5px',
                        background: '#C9A55A',
                        marginTop: '0.5rem',
                        flexShrink: 0,
                      }} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.25rem',
              }} className="bl-actions">
                <div>
                  <div style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#16A34A',
                    marginBottom: '0.75rem',
                    paddingBottom: '0.5rem',
                    borderBottom: '1px solid rgba(22,163,74,0.2)',
                  }}>
                    ✓ Sí · Hacer
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {current.doThis.map((s, i) => (
                      <div key={i} style={{
                        fontSize: '0.8125rem',
                        lineHeight: 1.5,
                        color: 'rgba(10,10,10,0.75)',
                      }}>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#DC2626',
                    marginBottom: '0.75rem',
                    paddingBottom: '0.5rem',
                    borderBottom: '1px solid rgba(220,38,38,0.2)',
                  }}>
                    ✕ No · Evitar
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {current.avoid.map((s, i) => (
                      <div key={i} style={{
                        fontSize: '0.8125rem',
                        lineHeight: 1.5,
                        color: 'rgba(10,10,10,0.75)',
                      }}>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                marginTop: 'auto',
                padding: '1.125rem 1.5rem',
                background: phase === 4 ? '#DC2626' : '#0A0A0A',
                color: phase === 4 ? '#FFFFFF' : '#FFFFFF',
                border: 'none',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.625rem',
              }}
              onMouseEnter={(e) => {
                if (phase !== 4) {
                  e.currentTarget.style.background = '#C9A55A';
                  e.currentTarget.style.color = '#0A0A0A';
                }
              }}
              onMouseLeave={(e) => {
                if (phase !== 4) {
                  e.currentTarget.style.background = '#0A0A0A';
                  e.currentTarget.style.color = '#FFFFFF';
                }
              }}
            >
              {phase === 4 ? 'Atención inmediata' : 'Agendar valoración'}
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .bl-header { grid-template-columns: 1fr !important; }
          .bl-selector { grid-template-columns: repeat(2, 1fr) !important; }
          .bl-selector > button { border-right: 1px solid rgba(10,10,10,0.08) !important; border-bottom: 1px solid rgba(10,10,10,0.08); }
          .bl-detail { grid-template-columns: 1fr !important; }
          .bl-anatomy { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); }
          .bl-actions { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

if (typeof window !== "undefined") window.TendinitisHero = TendinitisHero;
if (typeof window !== "undefined") window.TendinitisWhatIs = TendinitisWhatIs;
if (typeof window !== "undefined") window.TendinitisBlazina = TendinitisBlazina;
/* ==================== tendinitis-2.jsx ==================== */
// TENDINITIS ROTULIANA - PARTE 2 - Resto + TendinitisPage shell

function TendinitisPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = React.useState(0);
  const [activeSport, setActiveSport] = React.useState(0);
  const [activePhase, setActivePhase] = React.useState(0);

  const Hero = window.TendinitisHero;
  const WhatIs = window.TendinitisWhatIs;
  const Blazina = window.TendinitisBlazina;

  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <WhatIs />
      <Blazina onNavigate={onNavigate} />
      <TendinitisSymptoms />
      <TendinitisCauses />
      <TendinitisBySport activeSport={activeSport} setActiveSport={setActiveSport} />
      <TendinitisDifferential />
      <TendinitisTreatment activePhase={activePhase} setActivePhase={setActivePhase} />
      <TendinitisExercises />
      <TendinitisRecovery />
      <TendinitisCTA onNavigate={onNavigate} />
      <TendinitisFAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <TendinitisRelated onNavigate={onNavigate} />
    </main>
  );
}

// SHARED HEADER (local)
function TeSectionHeader({ kicker, title, subtitle, intro, dark }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      marginBottom: '4rem',
      alignItems: 'flex-end',
    }} className="te-sh-header">
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{
            fontSize: '0.75rem',
            color: '#C9A55A',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>{kicker}</div>
        </div>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          fontFamily: 'Space Grotesk',
          color: dark ? '#FFFFFF' : '#0A0A0A',
        }}>
          {title}<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{subtitle}</span>
        </h2>
      </div>
      {intro && (
        <p style={{
          fontSize: '1.0625rem',
          color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.6)',
          lineHeight: 1.55,
          maxWidth: '460px',
        }}>{intro}</p>
      )}
      <style>{`@media (max-width: 900px) { .te-sh-header { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// SYMPTOMS
function TendinitisSymptoms() {
  const symptoms = [
    'Dolor localizado en polo inferior de rótula (se señala con un dedo)',
    'Aparece al iniciar actividad — puede mejorar con calentamiento',
    'Empeora al subir/bajar escaleras o al levantarse de silla baja',
    'Dolor con saltos, sentadilla profunda y frenada en sprint',
    'Sensación de rigidez en rodilla por la mañana',
    'Puede haber engrosamiento palpable del tendón en casos crónicos',
  ];

  const redFlags = [
    'Dolor nocturno que te despierta',
    'Inflamación visible y caliente (sugiere otra patología)',
    'Sensación de "ceder" o inestabilidad de rodilla',
    'Bloqueo articular o chasquido doloroso',
    'Dolor súbito con incapacidad de extender la rodilla',
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <TeSectionHeader
          kicker="Síntomas · Cómo se manifiesta"
          title="Cómo"
          subtitle="se siente."
          intro="El sello del tendón rotuliano: dolor punzante en el punto exacto. Si te puedo señalar con un dedo, es casi seguro tendinopatía."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          background: '#FFFFFF',
        }} className="te-sym-grid">
          <div style={{
            padding: '2.5rem 2rem',
            borderRight: '1px solid rgba(10,10,10,0.08)',
          }} className="te-sym-list">
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(10,10,10,0.08)',
            }}>Síntomas típicos · {symptoms.length}</div>
            {symptoms.map((s, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: '1rem',
                padding: '1.125rem 0',
                borderBottom: i < symptoms.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: '#C9A55A',
                }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.5, color: '#0A0A0A' }}>{s}</div>
              </div>
            ))}
          </div>
          <div style={{
            background: '#0A0A0A',
            color: '#FFFFFF',
            padding: '2.5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
          }} className="te-sym-red">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#DC2626' }} />
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#DC2626',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}>⚠ Banderas rojas · Otra patología</div>
            <p style={{
              fontSize: '0.875rem',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '1.5rem',
            }}>
              Si presentas estos síntomas, no es tendinopatía simple. Puede ser rotura, meniscopatía, condromalacia avanzada o artritis. Diagnóstico urgente.
            </p>
            {redFlags.map((f, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '0.875rem',
                alignItems: 'flex-start',
                fontSize: '0.9375rem',
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: i < redFlags.length - 1 ? '0.875rem' : 0,
              }}>
                <div style={{ width: '8px', height: '8px', background: '#DC2626', marginTop: '0.4rem', flexShrink: 0 }} />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .te-sym-grid { grid-template-columns: 1fr !important; }
          .te-sym-list { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); }
        }
      `}</style>
    </section>
  );
}

// CAUSES
function TendinitisCauses() {
  const causes = [
    { title: 'Sobrecarga de saltos', description: 'Volumen de saltos que excede capacidad de adaptación del tendón.', example: 'Crossfittero que pasa de 80 a 200 box jumps semanales sin progresión.' },
    { title: 'Cuádriceps tenso',     description: 'Cuádriceps acortado tira del tendón rotuliano repetidamente.',         example: 'Runner que jamás trabaja movilidad de cuádriceps tras correr.' },
    { title: 'Glúteo medio débil',   description: 'Sin estabilidad de cadera, rodilla colapsa medial. Tendón sufre.',     example: 'Atleta con valgo dinámico en sentadilla — sentadilla con rodilla al centro.' },
    { title: 'Errores técnicos',     description: 'Aterrizajes rígidos, sentadilla profunda con descontrol, sprint con frenada.', example: 'Cazar box jumps con rodilla extendida + pelvis caída.' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <TeSectionHeader
          kicker="Causas · Por qué aparece"
          title="No es"
          subtitle="el deporte."
          intro="El deporte es el contexto. La causa es siempre carga mal gestionada + déficit biomecánico. Identificar cuál te aplica define la solución."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'rgba(10,10,10,0.08)',
          border: '1px solid rgba(10,10,10,0.08)',
        }} className="te-cau-grid">
          {causes.map((c, i) => (
            <div key={i} style={{
              padding: '2.5rem 2rem',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              minHeight: '260px',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#C9A55A',
                  lineHeight: 0.85,
                  letterSpacing: '-0.03em',
                }}>0{i + 1}</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#0A0A0A',
                }}>{c.title}.</h3>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.55, color: 'rgba(10,10,10,0.7)' }}>{c.description}</p>
              <div style={{
                marginTop: 'auto',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(10,10,10,0.06)',
                fontSize: '0.8125rem',
                fontStyle: 'italic',
                color: 'rgba(10,10,10,0.5)',
                lineHeight: 1.45,
              }}>
                <span style={{
                  display: 'inline-block',
                  marginRight: '0.375rem',
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C9A55A',
                  fontWeight: 700,
                  fontStyle: 'normal',
                }}>Ej.</span>
                {c.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .te-cau-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// BY SPORT
function TendinitisBySport({ activeSport, setActiveSport }) {
  const sports = [
    {
      name: 'CrossFit',
      trigger: 'Box jumps + wall balls + sentadilla profunda con valgo dinámico',
      scenario: 'Crossfittero que entrena 5×/sem. Empieza con tirantez al box jump. Semana 4: dolor al subir escaleras. Semana 8: no puede squat profundo.',
      stats: { '% de mis pacientes': '40%', 'Tiempo medio recuperación': '6—10 sem', 'Vuelta gradual': 'Sí, sin saltos 4 sem' },
    },
    {
      name: 'Voleibol / Básquet',
      trigger: 'Saltos repetidos con caída rígida + aterrizajes asimétricos',
      scenario: 'Jugador amateur que entrena 3—4 días + partido. Empieza con dolor post-partido. Después dolor durante el salto. Pierde altura de salto.',
      stats: { '% de mis pacientes': '20%', 'Tiempo medio recuperación': '8—12 sem', 'Vuelta gradual': 'Carga progresiva 6 sem' },
    },
    {
      name: 'Running',
      trigger: 'Volumen alto + bajadas pronunciadas + cuádriceps tenso crónico',
      scenario: 'Runner de trail que entrena 60+ km/sem. Bajadas pronunciadas. Empieza con tirantez tras tirada larga. Progresa a dolor en escaleras.',
      stats: { '% de mis pacientes': '25%', 'Tiempo medio recuperación': '4—8 sem', 'Vuelta gradual': 'Sí, sin bajadas 3 sem' },
    },
    {
      name: 'Fútbol',
      trigger: 'Sprints + frenadas en seco + remates con descarga sobre la rodilla',
      scenario: 'Jugador de partido los sábados. Sprint + frenada en partido. Día siguiente: dolor al subir auto. Semana 2: dolor con cualquier descarga.',
      stats: { '% de mis pacientes': '15%', 'Tiempo medio recuperación': '6—10 sem', 'Vuelta gradual': 'Sin contacto 4 sem' },
    },
  ];

  const current = sports[activeSport];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#0A0A0A',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(10rem, 22vw, 22rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>{current.name.toUpperCase()}.</div>

      <div className="container" style={{ position: 'relative' }}>
        <TeSectionHeader
          dark
          kicker="Por deporte · Casos reales"
          title="Cada salto"
          subtitle="es distinto."
          intro="La tendinopatía del crossfittero no es la del voleibolista ni la del runner. Cada gesto deportivo carga el tendón distinto — y el plan se adapta."
        />

        <div style={{
          display: 'flex',
          gap: '0',
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '3rem',
        }}>
          {sports.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActiveSport(i)}
              style={{
                padding: '1rem 1.5rem',
                background: 'transparent',
                color: activeSport === i ? '#C9A55A' : 'rgba(255,255,255,0.45)',
                border: 'none',
                borderBottom: activeSport === i ? '2px solid #C9A55A' : '2px solid transparent',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                marginBottom: '-1px',
              }}
            >{s.name}</button>
          ))}
        </div>

        <div key={activeSport} style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
          animation: 'teFade 0.4s ease-out',
        }} className="te-sp-grid">
          <div>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#C9A55A',
              marginBottom: '1rem',
            }}>Mecanismo · {current.name}</div>
            <h3 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              marginBottom: '2rem',
            }}>{current.name}.</h3>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.03)',
              borderLeft: '3px solid #C9A55A',
              marginBottom: '2rem',
            }}>
              <div style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#C9A55A',
                marginBottom: '0.5rem',
              }}>Gatillo típico</div>
              <p style={{ fontSize: '1rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.85)' }}>{current.trigger}</p>
            </div>
            <div style={{
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '0.75rem',
            }}>Caso real</div>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.75)' }}>{current.scenario}</p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {Object.entries(current.stats).map(([key, val], i, arr) => (
              <div key={key} style={{
                padding: '1.75rem 2rem',
                borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '0.5rem',
                }}>{key}</div>
                <div style={{
                  fontSize: '1.75rem',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  color: '#C9A55A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes teFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .te-sp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// DIFFERENTIAL
function TendinitisDifferential() {
  const rows = [
    { condition: 'Tendinitis rotuliana',  location: 'Polo inferior rótula',     test: 'Palpación + decline squat',  finding: 'Dolor punzante señalable + reproducción con sentadilla' },
    { condition: 'Tendinitis cuadricipital', location: 'Polo superior rótula',  test: 'Palpación + extensión resistida', finding: 'Dolor proximal con cuádriceps contra resistencia' },
    { condition: 'Condromalacia',          location: 'Detrás de la rótula',      test: 'Compresión patelar + Clarke', finding: 'Dolor difuso retropatelar + crujidos' },
    { condition: 'Osgood-Schlatter',       location: 'Tuberosidad tibial',       test: 'Palpación tuberosidad',       finding: 'Adolescentes · Protuberancia ósea + dolor palpación' },
    { condition: 'Síndrome banda IT',      location: 'Lateral de rodilla',       test: 'Ober + Noble',                finding: 'Dolor lateral, no anterior. Runners frecuentes' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <TeSectionHeader
          kicker="Diagnóstico diferencial"
          title="No todo dolor"
          subtitle="de rodilla es esto."
          intro="Cinco condiciones se confunden con tendinopatía rotuliana. Diferenciarlas evita tratamientos equivocados — y meses perdidos."
        />

        <div style={{
          border: '1px solid rgba(10,10,10,0.08)',
          overflowX: 'auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1.2fr 1.4fr 2fr',
            background: '#0A0A0A',
            color: '#FFFFFF',
            minWidth: '720px',
          }}>
            {['Condición', 'Localización', 'Test clínico', 'Hallazgo clave'].map((h, i, arr) => (
              <div key={h} style={{
                padding: '1.25rem 1.5rem',
                borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{ fontSize: '0.625rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>{h}</div>
              </div>
            ))}
          </div>

          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1.2fr 1.4fr 2fr',
              borderTop: '1px solid rgba(10,10,10,0.06)',
              background: i === 0 ? 'rgba(201,165,90,0.04)' : '#FFFFFF',
              minWidth: '720px',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => { if (i !== 0) e.currentTarget.style.background = '#FAFAFA'; }}
            onMouseLeave={(e) => { if (i !== 0) e.currentTarget.style.background = '#FFFFFF'; }}>
              <div style={{
                padding: '1.5rem',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                {i === 0 && <div style={{ width: '6px', height: '20px', background: '#C9A55A', flexShrink: 0 }} />}
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  fontFamily: 'Space Grotesk',
                  letterSpacing: '-0.01em',
                  color: '#0A0A0A',
                }}>{r.condition}</div>
              </div>
              <div style={{
                padding: '1.5rem',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                fontSize: '0.9375rem',
                color: 'rgba(10,10,10,0.7)',
                display: 'flex',
                alignItems: 'center',
              }}>{r.location}</div>
              <div style={{
                padding: '1.5rem',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                fontSize: '0.9375rem',
                color: 'rgba(10,10,10,0.7)',
                fontStyle: 'italic',
                display: 'flex',
                alignItems: 'center',
              }}>{r.test}</div>
              <div style={{
                padding: '1.5rem',
                fontSize: '0.9375rem',
                color: '#0A0A0A',
                display: 'flex',
                alignItems: 'center',
              }}>{r.finding}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// TREATMENT
function TendinitisTreatment({ activePhase, setActivePhase }) {
  const phases = [
    { title: 'Diagnóstico',  duration: 'Sesión 1 · 60 min', desc: 'Palpación, decline squat, evaluación de cuádriceps y glúteo, identificación de error de carga. Fase Blazina específica para tu caso.', bullets: ['Decline squat test', 'Palpación polo inferior', 'Fuerza cuádriceps/glúteo', 'Identificar error de carga'] },
    { title: 'Descargar',    duration: 'Semanas 1—2',       desc: 'Reducir volumen de saltos. Mantener cardio sin impacto. Iniciar isométricos largos (45s × 5 reps) para alivio del dolor.',           bullets: ['Reducir saltos 50—100%', 'Isométricos 45s × 5', 'Cardio sin impacto', 'Hielo post-actividad'] },
    { title: 'Cargar',       duration: 'Semanas 2—8',       desc: 'AQUÍ pasa la magia. Carga excéntrica progresiva (declines, Spanish squats) tres veces por semana. El tendón se remodela con carga, no con reposo.', bullets: ['Decline squat excéntrico', 'Spanish squat', 'HSR (heavy slow resistance)', 'Fortalecimiento glúteo medio'] },
    { title: 'Volver',       duration: 'Semanas 6—10',      desc: 'Vuelta progresiva a saltos. Empezar con saltos verticales bajos, sin impacto, aumentando altura y volumen semana a semana.',          bullets: ['Saltos verticales bajos', 'Pliometría progresiva', 'Patrón de aterrizaje', 'Vuelta al deporte específico'] },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <TeSectionHeader
          kicker="Tratamiento · 4 fases"
          title="Carga,"
          subtitle="no reposo."
          intro="El tendón degenerado necesita carga para remodelarse. Las 4 fases progresan desde isométrico (alivio) hasta pliometría (vuelta deportiva)."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="te-tx-grid">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid rgba(10,10,10,0.08)',
          }}>
            {phases.map((p, i) => {
              const isActive = activePhase === i;
              return (
                <button
                  key={i}
                  onClick={() => setActivePhase(i)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr auto',
                    gap: '1.25rem',
                    alignItems: 'center',
                    padding: '1.75rem 0',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid rgba(10,10,10,0.08)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'inherit',
                    position: 'relative',
                    paddingLeft: isActive ? '1rem' : '0',
                    transition: 'padding 0.3s',
                  }}
                >
                  {isActive && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: '#C9A55A' }} />}
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: isActive ? '1rem' : '0.875rem',
                    fontWeight: 700,
                    color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                    transition: 'all 0.3s',
                  }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{
                    fontSize: isActive ? '1.5rem' : '1.25rem',
                    fontWeight: 700,
                    fontFamily: 'Space Grotesk',
                    letterSpacing: '-0.01em',
                    color: isActive ? '#0A0A0A' : 'rgba(10,10,10,0.5)',
                    transition: 'all 0.3s',
                  }}>{p.title}</div>
                  <div style={{
                    fontSize: '1.25rem',
                    color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.2)',
                    transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
                    transition: 'all 0.3s',
                  }}>→</div>
                </button>
              );
            })}
          </div>

          <div key={activePhase} style={{
            background: '#FFFFFF',
            border: '1px solid rgba(10,10,10,0.08)',
            padding: '3rem',
            position: 'relative',
            minHeight: '420px',
            animation: 'teTxFade 0.4s ease-out',
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '2rem',
              fontFamily: 'Space Grotesk',
              fontSize: '8rem',
              fontWeight: 700,
              color: 'rgba(201,165,90,0.08)',
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
            }}>0{activePhase + 1}</div>

            <div style={{
              fontSize: '0.6875rem',
              color: '#C9A55A',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '1rem',
              position: 'relative',
            }}>Fase {String(activePhase + 1).padStart(2, '0')} · {phases[activePhase].duration}</div>

            <h3 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: '#0A0A0A',
              marginBottom: '1.5rem',
              position: 'relative',
            }}>{phases[activePhase].title}<span style={{ color: '#C9A55A' }}>.</span></h3>

            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(10,10,10,0.65)',
              maxWidth: '500px',
              marginBottom: '2rem',
              position: 'relative',
            }}>{phases[activePhase].desc}</p>

            <div style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(10,10,10,0.06)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
            }}>
              {phases[activePhase].bullets.map((b, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.625rem 0',
                  fontSize: '0.9375rem',
                  color: 'rgba(10,10,10,0.8)',
                }}>
                  <div style={{ width: '6px', height: '6px', background: '#C9A55A' }} />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes teTxFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .te-tx-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// EXERCISES
function TendinitisExercises() {
  const exercises = [
    { name: 'Isométrico Spanish squat', goal: 'Alivio dolor (fase aguda)', sets: '5 × 45s',  stage: 'Fase 2',  difficulty: 'Baja' },
    { name: 'Decline squat excéntrico',  goal: 'Remodelar tendón',          sets: '3 × 15',   stage: 'Fase 3',  difficulty: 'Media' },
    { name: 'Spanish squat carga',       goal: 'Carga progresiva',          sets: '3 × 8',    stage: 'Fase 3',  difficulty: 'Media' },
    { name: 'HSR (heavy slow resistance)', goal: 'Hipertrofia + remodelado', sets: '4 × 6',  stage: 'Fase 3',  difficulty: 'Avanzada' },
    { name: 'Glúteo puente cargado',    goal: 'Estabilidad cadera',         sets: '3 × 12',   stage: 'Fase 2',  difficulty: 'Baja' },
    { name: 'Side step con banda',       goal: 'Glúteo medio',              sets: '3 × 15/lado', stage: 'Fase 2', difficulty: 'Baja' },
    { name: 'Saltos verticales bajos',   goal: 'Pliometría progresiva',     sets: '3 × 8',    stage: 'Fase 4',  difficulty: 'Media' },
    { name: 'Aterrizaje patrón',         goal: 'Control de descarga',       sets: '3 × 10',   stage: 'Fase 4',  difficulty: 'Avanzada' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <TeSectionHeader
          kicker="Ejercicios · Plan base"
          title="Excéntricos."
          subtitle="No otra cosa."
          intro="La evidencia es clara: lo que cura tendinopatía rotuliana es la carga excéntrica progresiva. Isométricos para alivio, excéntricos para remodelar, pliométricos para volver."
        />

        <div style={{ border: '1px solid rgba(10,10,10,0.08)', background: '#FFFFFF' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60px 1.5fr 1.5fr 1fr 1fr 1fr',
            padding: '1rem 1.5rem',
            background: '#FAFAFA',
            borderBottom: '1px solid rgba(10,10,10,0.08)',
            fontSize: '0.625rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'rgba(10,10,10,0.4)',
          }} className="te-ex-head">
            <div>Nº</div><div>Ejercicio</div><div>Objetivo</div><div>Series × Reps</div><div>Fase</div><div>Dificultad</div>
          </div>

          {exercises.map((e, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '60px 1.5fr 1.5fr 1fr 1fr 1fr',
              padding: '1.5rem',
              borderBottom: i < exercises.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
              alignItems: 'center',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(el) => el.currentTarget.style.background = '#FAFAFA'}
            onMouseLeave={(el) => el.currentTarget.style.background = '#FFFFFF'}
            className="te-ex-row">
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.875rem', fontWeight: 700, color: '#C9A55A' }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{
                fontSize: '1.0625rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                color: '#0A0A0A',
              }}>{e.name}</div>
              <div style={{ fontSize: '0.9375rem', color: 'rgba(10,10,10,0.65)' }}>{e.goal}</div>
              <div style={{
                fontSize: '0.9375rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                color: '#0A0A0A',
              }}>{e.sets}</div>
              <div style={{
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#C9A55A',
              }}>{e.stage}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: e.difficulty === 'Avanzada' ? '#DC2626' : e.difficulty === 'Media' ? '#C9A55A' : '#16A34A',
                }} />
                <span style={{ fontSize: '0.875rem', color: '#0A0A0A' }}>{e.difficulty}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '1.5rem',
          fontSize: '0.875rem',
          color: 'rgba(10,10,10,0.5)',
          maxWidth: '600px',
        }}>
          Las dosis y el ritmo de progresión los determina tu fase Blazina. Ejecutar mal el decline squat (cargando rodilla en vez de cuádriceps) es peor que no hacerlo.
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .te-ex-head { display: none !important; }
          .te-ex-row { grid-template-columns: 40px 1fr !important; gap: 0.75rem; padding: 1rem !important; }
          .te-ex-row > div:nth-child(3),
          .te-ex-row > div:nth-child(4),
          .te-ex-row > div:nth-child(5),
          .te-ex-row > div:nth-child(6) { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// RECOVERY
function TendinitisRecovery() {
  const milestones = [
    { week: 'Sem 0',    status: 'Diagnóstico',  desc: 'Decline squat + fase Blazina' },
    { week: 'Sem 1—2',  status: 'Descargar',     desc: 'Isométricos + reducir saltos' },
    { week: 'Sem 2—8',  status: 'Cargar',        desc: 'Excéntricos progresivos' },
    { week: 'Sem 6—10', status: 'Volver',        desc: 'Pliometría + vuelta deporte' },
  ];

  const factors = [
    { label: 'Fase Blazina inicial',         weight: 'Alta' },
    { label: 'Cronicidad (meses con dolor)', weight: 'Alta' },
    { label: 'Adherencia al plan',           weight: 'Alta' },
    { label: 'Calidad técnica de excéntricos', weight: 'Media' },
    { label: 'Volumen deportivo de base',    weight: 'Media' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <TeSectionHeader
          kicker="Tiempo de recuperación"
          title="Entre 4"
          subtitle="y 10 semanas."
          intro="Casos leves (Blazina 1) se resuelven rápido. Crónicos (Blazina 3) requieren paciencia. La adherencia al plan de excéntricos define el tiempo."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="te-rec-grid">
          <div style={{
            background: '#FFFFFF',
            border: '1px solid rgba(10,10,10,0.08)',
            padding: '3rem 2rem',
          }}>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '2.5rem',
            }}>Línea de tiempo típica</div>

            <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
              <div style={{
                position: 'absolute',
                left: '8px',
                top: '12px',
                bottom: '12px',
                width: '2px',
                background: 'linear-gradient(180deg, #C9A55A 0%, rgba(201,165,90,0.2) 100%)',
              }} />
              {milestones.map((m, i) => (
                <div key={i} style={{
                  position: 'relative',
                  marginBottom: i < milestones.length - 1 ? '2.5rem' : 0,
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-2.5rem',
                    top: '4px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '3px solid #C9A55A',
                    boxShadow: i === 0 ? '0 0 0 4px rgba(201,165,90,0.2)' : 'none',
                  }} />
                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#C9A55A',
                    marginBottom: '0.375rem',
                    fontFamily: 'Space Grotesk',
                  }}>{m.week}</div>
                  <h4 style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#0A0A0A',
                    marginBottom: '0.375rem',
                    lineHeight: 1.05,
                  }}>{m.status}.</h4>
                  <p style={{ fontSize: '0.9375rem', color: 'rgba(10,10,10,0.6)', lineHeight: 1.5 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '1.5rem',
            }}>Qué cambia el tiempo</div>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
              {factors.map((f, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  padding: '1.125rem 0',
                  borderBottom: '1px solid rgba(10,10,10,0.08)',
                  gap: '1rem',
                }}>
                  <div style={{ fontSize: '1rem', color: '#0A0A0A', fontWeight: 500 }}>{f.label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: f.weight === 'Alta' ? '#DC2626' : '#C9A55A',
                    }} />
                    <span style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      color: 'rgba(10,10,10,0.6)',
                    }}>Influencia {f.weight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .te-rec-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// CTA
function TendinitisCTA({ onNavigate }) {
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          background: 'linear-gradient(135deg, #C9A55A 0%, #B8943F 100%)',
          color: '#0A0A0A',
          padding: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }} className="te-cta-grid">
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-20%',
            width: '60%',
            height: '140%',
            background: 'linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.05) 50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative' }}>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}>Tendinopatía rotuliana · Carga progresiva</div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              marginBottom: '1.5rem',
            }}>Vuelves a saltar.<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>Sin dolor.</span></h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.55,
              opacity: 0.85,
              maxWidth: '520px',
            }}>
              Primera sesión: fase Blazina específica + plan de excéntricos + identificación del error de carga. 60 min. Sales con plan, no con receta de ibuprofeno.
            </p>
          </div>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                background: '#0A0A0A',
                color: '#FFFFFF',
                border: 'none',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >Agendar valoración<span>→</span></button>
            <button
              style={{
                background: 'transparent',
                color: '#0A0A0A',
                border: '1px solid rgba(10,10,10,0.4)',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A0A0A';
                e.currentTarget.style.color = '#C9A55A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#0A0A0A';
              }}
            >WhatsApp</button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .te-cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// FAQ
function TendinitisFAQ({ openFaq, setOpenFaq }) {
  const faqs = [
    { q: '¿El reposo cura la tendinitis rotuliana?', a: 'No. La evidencia es clara: el tendón se degenera con la inactividad. Necesita carga progresiva (excéntricos) para remodelarse. El reposo solo alivia mientras dura — al volver al deporte, el dolor regresa porque el tendón sigue débil.' },
    { q: '¿Las infiltraciones de cortisona sirven?', a: 'A corto plazo sí, pero a largo plazo empeoran. La cortisona debilita la matriz del tendón y aumenta riesgo de rotura. Se reservan para casos muy puntuales y solo bajo prescripción especialista. La cura sigue siendo carga progresiva.' },
    { q: '¿Cuánto tarda en notarse mejora con excéntricos?', a: 'Las primeras 2 semanas no notas casi nada — incluso puede doler un poco más por la carga. A partir de la semana 4 empieza el alivio. Entre semana 6—10 normalmente vuelves al deporte sin restricciones. Paciencia los primeros 14 días es crítica.' },
    { q: '¿Puedo entrenar con dolor?', a: 'Depende de la fase. En Blazina 1—2 puedes entrenar reduciendo volumen 30—50% y eliminando saltos. En Blazina 3 hay que parar saltos completamente. La regla: dolor < 4/10 durante y debe volver a normal en 24h. Si excede, has cargado de más.' },
    { q: '¿Necesito resonancia o ecografía?', a: 'Casi nunca al inicio. Es diagnóstico clínico — el decline squat reproduce el dolor con alta especificidad. La ecografía se reserva para casos crónicos refractarios o sospecha de rotura parcial. No pidas pruebas innecesarias.' },
    { q: '¿Cuándo es para cirugía?', a: 'En menos del 10%. Indicaciones: rotura completa del tendón (Blazina 4) o tendinopatía crónica refractaria a 6—12 meses de tratamiento conservador bien hecho. La cirugía siempre es último recurso — recuperación de 6—12 meses.' },
    { q: '¿Las plantillas o rodilleras ayudan?', a: 'Las rodilleras tipo "patellar strap" pueden dar alivio sintomático durante actividad — útil para Blazina 2. Pero no curan, solo reducen carga momentáneamente. Las plantillas se usan solo si hay alteración biomecánica del pie identificada en valoración.' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <TeSectionHeader
          kicker="Preguntas frecuentes"
          title="Lo que"
          subtitle="me preguntan."
          intro="Las dudas más comunes sobre tendinitis rotuliana. Si no encuentras la tuya, WhatsApp directo."
        />

        <div style={{ maxWidth: '900px', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  style={{
                    width: '100%',
                    padding: '1.75rem 0',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr 40px',
                    alignItems: 'center',
                    gap: '1.5rem',
                  }}
                >
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: isOpen ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                    transition: 'color 0.3s',
                  }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{
                    fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
                    fontWeight: 600,
                    fontFamily: 'Space Grotesk',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    color: '#0A0A0A',
                  }}>{faq.q}</div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: `1px solid ${isOpen ? '#C9A55A' : 'rgba(10,10,10,0.15)'}`,
                    background: isOpen ? '#C9A55A' : 'transparent',
                    color: isOpen ? '#0A0A0A' : 'rgba(10,10,10,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.125rem',
                    fontWeight: 300,
                    transition: 'all 0.4s',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    justifySelf: 'end',
                  }}>+</div>
                </button>

                <div style={{
                  display: 'grid',
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr 40px',
                      gap: '1.5rem',
                      paddingBottom: '1.75rem',
                    }}>
                      <div></div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: 'rgba(10,10,10,0.7)',
                        maxWidth: '700px',
                      }}>{faq.a}</p>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// RELATED
function TendinitisRelated({ onNavigate }) {
  const related = [
    { name: 'Pubalgia',         page: 'pubalgia', zone: 'Ingle / Pelvis' },
    { name: 'Ciática',          page: 'ciatica',  zone: 'Lumbar / Pierna' },
    { name: 'Hombro Congelado', page: 'hombro',   zone: 'Hombro' },
  ];

  return (
    <section style={{
      padding: '6rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{
            fontSize: '0.75rem',
            color: '#C9A55A',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>Otras lesiones · Ver protocolo</div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(10,10,10,0.08)',
          border: '1px solid rgba(10,10,10,0.08)',
        }} className="te-rel-grid">
          {related.map((r, i) => (
            <button
              key={r.page}
              onClick={() => onNavigate(r.page)}
              style={{
                padding: '2rem',
                background: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.4s',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                minHeight: '180px',
                color: 'inherit',
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A0A0A';
                e.currentTarget.querySelectorAll('[data-rel]').forEach(el => {
                  if (el.dataset.rel === 'name') el.style.color = '#FFFFFF';
                  if (el.dataset.rel === 'zone') el.style.color = '#C9A55A';
                  if (el.dataset.rel === 'arrow') {
                    el.style.color = '#C9A55A';
                    el.style.transform = 'translateX(8px)';
                  }
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.querySelectorAll('[data-rel]').forEach(el => {
                  if (el.dataset.rel === 'name') el.style.color = '#0A0A0A';
                  if (el.dataset.rel === 'zone') el.style.color = 'rgba(10,10,10,0.5)';
                  if (el.dataset.rel === 'arrow') {
                    el.style.color = 'rgba(10,10,10,0.3)';
                    el.style.transform = 'translateX(0)';
                  }
                });
              }}
            >
              <div style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'rgba(10,10,10,0.4)',
              }}>0{i + 1} / 03</div>
              <h3 data-rel="name" style={{
                fontSize: '1.625rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#0A0A0A',
                transition: 'color 0.4s',
                lineHeight: 1.05,
              }}>{r.name}</h3>
              <div data-rel="zone" style={{
                fontSize: '0.875rem',
                color: 'rgba(10,10,10,0.5)',
                transition: 'color 0.4s',
              }}>{r.zone}</div>
              <div style={{
                marginTop: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: '#C9A55A',
                }}>Ver protocolo</span>
                <span data-rel="arrow" style={{
                  fontSize: '1.5rem',
                  color: 'rgba(10,10,10,0.3)',
                  transition: 'all 0.4s',
                  fontFamily: 'Space Grotesk',
                }}>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .te-rel-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

if (typeof window !== "undefined") window.TendinitisPage = TendinitisPage;
/* ==================== hombro.jsx ==================== */
// HOMBRO CONGELADO - PARTE 1 - Hero, WhatIs, Auto-test de rango de movimiento (ROM)

// =====================================================================
// HERO
// =====================================================================
function HombroHero({ onNavigate }) {
  return (
    <section style={{
      padding: '12rem 0 6rem',
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(8rem, 18vw, 20rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        HOMBRO.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem',
          fontSize: '0.6875rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          <a onClick={() => onNavigate('lesiones')} style={{ color: 'rgba(10,10,10,0.5)', cursor: 'pointer', textDecoration: 'none' }}>Lesiones</a>
          <span style={{ color: 'rgba(10,10,10,0.25)' }}>/</span>
          <span style={{ color: '#C9A55A' }}>Hombro Congelado</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '4rem',
          alignItems: 'flex-end',
        }} className="ho-hero-grid">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}>
              <div style={{ width: '60px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Hombro · Cápsula articular · Capsulitis adhesiva
              </div>
            </div>
            <h1 style={{
              fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
              marginBottom: '2.5rem',
            }}>
              Hombro
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                congelado.
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
              lineHeight: 1.55,
              color: 'rgba(10,10,10,0.65)',
              maxWidth: '620px',
              marginBottom: '2rem',
            }}>
              Pérdida progresiva de movilidad del hombro por inflamación y fibrosis de la cápsula.
              <span style={{ color: '#0A0A0A', fontWeight: 500 }}> Tiene 3 fases con reglas distintas — tratar la fase equivocada empeora todo.</span>
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate('fisioterapia')}
                style={{
                  background: '#0A0A0A',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#C9A55A';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0A0A0A';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Agendar valoración
                <span>→</span>
              </button>
              <a
                href="#rom-test"
                style={{
                  background: 'transparent',
                  color: '#0A0A0A',
                  border: '1px solid rgba(10,10,10,0.2)',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A55A';
                  e.currentTarget.style.color = '#C9A55A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(10,10,10,0.2)';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
              >
                Test de movilidad ↓
              </a>
            </div>
          </div>

          <div style={{
            background: '#0A0A0A',
            color: '#FFFFFF',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#C9A55A' }} />
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#C9A55A',
              marginBottom: '1.5rem',
            }}>
              TL;DR Clínico
            </div>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '1.5rem',
            }}>
              Capsulitis adhesiva: la cápsula del hombro se inflama y contrae. Limita el movimiento activo Y pasivo. Tres fases — congelamiento, congelado, descongelamiento.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#C9A55A', lineHeight: 1, marginBottom: '0.25rem' }}>8—24</div>
                <div style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Semanas</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#C9A55A', lineHeight: 1, marginBottom: '0.25rem' }}>Alta</div>
                <div style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Complejidad</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ho-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// WHAT IS
// =====================================================================
function HombroWhatIs() {
  const facts = [
    { label: 'Zona afectada',  value: 'Cápsula articular glenohumeral' },
    { label: 'Mecanismo',      value: 'Inflamación → fibrosis → contractura capsular' },
    { label: 'Población',      value: '40—60 años · Más en mujeres · Diabéticos x4 riesgo' },
    { label: 'Recuperación',   value: '8—24 semanas según fase y tratamiento' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="ho-wi-grid">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Qué es realmente
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
              marginBottom: '2rem',
            }}>
              No es
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                un músculo.
              </span>
            </h2>

            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'rgba(10,10,10,0.7)',
              marginBottom: '1.5rem',
            }}>
              El hombro congelado afecta la <strong style={{ color: '#0A0A0A' }}>cápsula articular</strong>, no el manguito ni el músculo. La cápsula se inflama, se engrosa y se contrae — literalmente "encoge" el espacio articular. Por eso pierdes movilidad en todas direcciones, no solo en un gesto.
            </p>
            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(10,10,10,0.6)',
              marginBottom: '1.5rem',
            }}>
              La clave diagnóstica: limita el movimiento <strong style={{ color: '#0A0A0A' }}>activo Y pasivo</strong>. Si alguien te mueve el brazo y tampoco llega, es capsular. Si te lo mueven y sí llega, es muscular o tendinoso — otra cosa.
            </p>
            <div style={{
              padding: '1.25rem 1.5rem',
              background: '#FFFFFF',
              borderLeft: '3px solid #C9A55A',
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              color: 'rgba(10,10,10,0.75)',
            }}>
              <strong style={{ color: '#0A0A0A' }}>Importante:</strong> El tratamiento depende de la fase. En fase de congelamiento (dolorosa), estirar agresivo empeora. En fase congelada, hay que movilizar. Saber la fase lo es todo — pruébalo abajo.
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            border: '1px solid rgba(10,10,10,0.08)',
            background: '#FFFFFF',
          }}>
            {facts.map((f, i) => (
              <div key={i} style={{
                padding: '1.75rem 2rem',
                borderBottom: i < facts.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: '1.25rem',
                alignItems: 'center',
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'rgba(10,10,10,0.3)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#C9A55A',
                    marginBottom: '0.375rem',
                  }}>
                    {f.label}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#0A0A0A',
                    fontWeight: 500,
                    lineHeight: 1.45,
                  }}>
                    {f.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ho-wi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// ROM AUTO-TEST — Interactive range of motion self-assessment
// =====================================================================
function HombroROMTest({ onNavigate }) {
  const movements = [
    {
      id: 'flexion',
      name: 'Flexión',
      instruction: 'Levanta el brazo recto hacia adelante y arriba, lo más alto posible sin doblar el codo.',
      normal: '180°',
      levels: [
        { label: 'Llego arriba del todo (junto a la oreja)', score: 0, deg: 180 },
        { label: 'Llego a la altura del hombro o un poco más', score: 1, deg: 120 },
        { label: 'Solo llego a media altura', score: 2, deg: 90 },
        { label: 'Apenas puedo levantarlo', score: 3, deg: 45 },
      ],
    },
    {
      id: 'abduccion',
      name: 'Abducción',
      instruction: 'Levanta el brazo recto hacia el lado (como un ala), lo más alto posible.',
      normal: '180°',
      levels: [
        { label: 'Llego arriba del todo', score: 0, deg: 180 },
        { label: 'Llego a la altura del hombro', score: 1, deg: 90 },
        { label: 'Solo lo separo un poco', score: 2, deg: 60 },
        { label: 'Casi no puedo separarlo', score: 3, deg: 30 },
      ],
    },
    {
      id: 'rotacion-ext',
      name: 'Rotación externa',
      instruction: 'Codo pegado al cuerpo, doblado 90°. Gira el antebrazo hacia afuera sin despegar el codo.',
      normal: '60—90°',
      levels: [
        { label: 'Giro libremente hacia afuera', score: 0, deg: 80 },
        { label: 'Giro un poco, con tirantez', score: 1, deg: 45 },
        { label: 'Apenas paso de la línea media', score: 2, deg: 20 },
        { label: 'No puedo girar hacia afuera', score: 3, deg: 5 },
      ],
    },
    {
      id: 'mano-espalda',
      name: 'Mano a la espalda',
      instruction: 'Lleva la mano detrás de la espalda e intenta subirla por la columna lo más alto posible.',
      normal: 'Hasta T7 (entre omóplatos)',
      levels: [
        { label: 'Llego entre los omóplatos', score: 0, deg: 0 },
        { label: 'Llego a la cintura / zona lumbar', score: 1, deg: 0 },
        { label: 'Solo llego al glúteo', score: 2, deg: 0 },
        { label: 'No puedo llevar la mano atrás', score: 3, deg: 0 },
      ],
    },
  ];

  const [answers, setAnswers] = React.useState({});
  const [activeMovement, setActiveMovement] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  const current = movements[activeMovement];
  const allAnswered = movements.every(m => answers[m.id] !== undefined);
  const totalScore = movements.reduce((s, m) => s + (answers[m.id]?.score ?? 0), 0);
  const maxScore = movements.length * 3;

  // Determine selected level for visualization
  const selectedLevel = answers[current.id];
  const visDeg = selectedLevel ? selectedLevel.deg : (current.levels[0].deg);

  function getResult() {
    if (totalScore === 0) {
      return {
        level: 'Movilidad normal',
        color: '#16A34A',
        title: 'Movilidad conservada.',
        message: 'Tu rango de movimiento parece normal en las 4 direcciones. Es poco probable que sea hombro congelado. Si tienes dolor, puede ser tendinopatía del manguito, bursitis o pinzamiento — otra cosa.',
        phase: null,
      };
    }
    if (totalScore <= 4) {
      return {
        level: 'Restricción leve',
        color: '#C9A55A',
        title: 'Restricción inicial.',
        message: 'Hay limitación leve, posiblemente en fase temprana de congelamiento o por otra causa (manguito, pinzamiento). La rotación externa restringida es el signo más sugestivo de capsulitis. Vale la pena evaluar pronto.',
        phase: 'Posible Fase 1 (congelamiento)',
      };
    }
    if (totalScore <= 8) {
      return {
        level: 'Restricción moderada',
        color: '#DC2626',
        title: 'Restricción significativa.',
        message: 'Limitación importante en varios planos. Si el movimiento pasivo (cuando otro te mueve el brazo) también está limitado, el patrón es muy compatible con capsulitis adhesiva. Necesitas valoración para confirmar fase y tratamiento.',
        phase: 'Compatible con Fase 1—2',
      };
    }
    return {
      level: 'Restricción severa',
      color: '#7F1D1D',
      title: 'Hombro muy rígido.',
      message: 'Pérdida severa de movilidad multidireccional — patrón clásico de hombro congelado en fase congelada (fase 2). El tratamiento aquí es movilización progresiva supervisada. No fuerces estiramientos por tu cuenta. Valoración prioritaria.',
      phase: 'Compatible con Fase 2 (congelado)',
    };
  }

  function reset() {
    setAnswers({});
    setActiveMovement(0);
    setSubmitted(false);
  }

  const result = submitted ? getResult() : null;

  return (
    <section id="rom-test" style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        left: '-3%',
        bottom: '-2rem',
        fontSize: 'clamp(7rem, 16vw, 16rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        ¿CUÁNTO LLEGAS?
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '3rem',
          alignItems: 'flex-end',
        }} className="rom-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Auto-test · Rango de movimiento
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
            }}>
              ¿Cuánto
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                te mueves?
              </span>
            </h2>
          </div>

          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(10,10,10,0.6)',
            lineHeight: 1.55,
            maxWidth: '460px',
          }}>
            Prueba los 4 movimientos del hombro afectado frente a un espejo. Marca hasta dónde llegas en cada uno. Te oriento sobre tu nivel de restricción.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          background: '#FFFFFF',
        }} className="rom-layout">
          {/* SVG visualization */}
          <div style={{
            background: '#FAFAFA',
            borderRight: '1px solid rgba(10,10,10,0.08)',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
          }} className="rom-viz">
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '0.5rem',
            }}>
              {submitted ? 'Resultado global' : `Movimiento ${activeMovement + 1}/4`}
            </div>
            <div style={{
              fontSize: '1.5rem',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#0A0A0A',
              marginBottom: '1.5rem',
            }}>
              {submitted ? 'Tu hombro' : current.name}
            </div>

            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '280px',
            }}>
              <HombroROMSvg movement={current} visDeg={visDeg} submitted={submitted} answers={answers} movements={movements} />
            </div>

            {!submitted && (
              <div style={{
                padding: '1rem 1.25rem',
                background: '#FFFFFF',
                border: '1px solid rgba(10,10,10,0.08)',
                fontSize: '0.8125rem',
                lineHeight: 1.5,
                color: 'rgba(10,10,10,0.7)',
              }}>
                <span style={{
                  display: 'block',
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: '#C9A55A',
                  marginBottom: '0.5rem',
                }}>
                  Normal: {current.normal}
                </span>
                {current.instruction}
              </div>
            )}
          </div>

          {/* Controls / Result */}
          <div style={{
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {!submitted ? (
              <>
                {/* Movement tabs */}
                <div style={{
                  display: 'flex',
                  gap: '0.375rem',
                  marginBottom: '2rem',
                  flexWrap: 'wrap',
                }}>
                  {movements.map((m, i) => {
                    const done = answers[m.id] !== undefined;
                    const isActive = activeMovement === i;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setActiveMovement(i)}
                        style={{
                          flex: 1,
                          minWidth: '80px',
                          padding: '0.625rem 0.5rem',
                          background: isActive ? '#0A0A0A' : done ? 'rgba(201,165,90,0.1)' : 'transparent',
                          color: isActive ? '#C9A55A' : done ? '#0A0A0A' : 'rgba(10,10,10,0.5)',
                          border: `1px solid ${isActive ? '#0A0A0A' : done ? 'rgba(201,165,90,0.3)' : 'rgba(10,10,10,0.12)'}`,
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          letterSpacing: '0.02em',
                          cursor: 'pointer',
                          fontFamily: 'Space Grotesk',
                          transition: 'all 0.25s',
                          position: 'relative',
                        }}
                      >
                        {done && !isActive && <span style={{ color: '#C9A55A', marginRight: '0.25rem' }}>✓</span>}
                        {m.name}
                      </button>
                    );
                  })}
                </div>

                <div style={{
                  fontSize: '0.875rem',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: '#0A0A0A',
                  marginBottom: '1rem',
                }}>
                  ¿Hasta dónde llegas?
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                  {current.levels.map((lvl, i) => {
                    const isSel = answers[current.id]?.label === lvl.label;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setAnswers(prev => ({ ...prev, [current.id]: lvl }));
                          // Auto-advance to next unanswered
                          setTimeout(() => {
                            const nextUnanswered = movements.findIndex((m, idx) => idx > activeMovement && answers[m.id] === undefined);
                            if (nextUnanswered !== -1) setActiveMovement(nextUnanswered);
                            else if (activeMovement < movements.length - 1) setActiveMovement(activeMovement + 1);
                          }, 250);
                        }}
                        style={{
                          padding: '1rem 1.125rem',
                          background: isSel ? '#0A0A0A' : 'transparent',
                          color: isSel ? '#FFFFFF' : 'rgba(10,10,10,0.75)',
                          border: `1px solid ${isSel ? '#0A0A0A' : 'rgba(10,10,10,0.15)'}`,
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          textAlign: 'left',
                          fontFamily: 'inherit',
                          letterSpacing: '-0.005em',
                          transition: 'all 0.25s',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          lineHeight: 1.4,
                        }}
                        onMouseEnter={(e) => { if (!isSel) e.currentTarget.style.borderColor = '#C9A55A'; }}
                        onMouseLeave={(e) => { if (!isSel) e.currentTarget.style.borderColor = 'rgba(10,10,10,0.15)'; }}
                      >
                        <span style={{
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          border: `2px solid ${isSel ? '#C9A55A' : 'rgba(10,10,10,0.25)'}`,
                          background: isSel ? '#C9A55A' : 'transparent',
                          flexShrink: 0,
                        }} />
                        {lvl.label}
                      </button>
                    );
                  })}
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <div style={{
                    height: '4px',
                    background: 'rgba(10,10,10,0.08)',
                    marginBottom: '1.5rem',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${(Object.keys(answers).length / movements.length) * 100}%`,
                      background: '#C9A55A',
                      transition: 'width 0.4s',
                    }} />
                  </div>
                  <button
                    onClick={() => setSubmitted(true)}
                    disabled={!allAnswered}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      background: allAnswered ? '#0A0A0A' : 'rgba(10,10,10,0.08)',
                      color: allAnswered ? '#FFFFFF' : 'rgba(10,10,10,0.3)',
                      border: 'none',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: allAnswered ? 'pointer' : 'not-allowed',
                      fontFamily: 'Space Grotesk',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => { if (allAnswered) { e.currentTarget.style.background = '#C9A55A'; e.currentTarget.style.color = '#0A0A0A'; } }}
                    onMouseLeave={(e) => { if (allAnswered) { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.color = '#FFFFFF'; } }}
                  >
                    {allAnswered ? 'Ver resultado →' : `Faltan ${movements.length - Object.keys(answers).length} movimientos`}
                  </button>
                </div>
              </>
            ) : (
              <div style={{ animation: 'romFade 0.4s ease-out', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: result.color }} />
                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: result.color,
                  }}>
                    {result.level}
                  </div>
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  color: '#0A0A0A',
                  marginBottom: '1.25rem',
                }}>
                  {result.title}
                </h3>

                {/* Score bar */}
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}>
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: result.color,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}>
                    {totalScore}<span style={{ color: 'rgba(10,10,10,0.2)', fontSize: '1.5rem' }}>/{maxScore}</span>
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'rgba(10,10,10,0.5)',
                    letterSpacing: '0.05em',
                  }}>
                    índice de<br />restricción
                  </div>
                </div>

                {result.phase && (
                  <div style={{
                    display: 'inline-block',
                    alignSelf: 'flex-start',
                    padding: '0.5rem 0.875rem',
                    background: `${result.color}15`,
                    color: result.color,
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '1.25rem',
                  }}>
                    {result.phase}
                  </div>
                )}

                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: 'rgba(10,10,10,0.7)',
                  marginBottom: '1.5rem',
                }}>
                  {result.message}
                </p>

                {/* Per-movement breakdown */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                  marginBottom: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(10,10,10,0.08)',
                }}>
                  {movements.map(m => {
                    const sc = answers[m.id]?.score ?? 0;
                    const col = sc === 0 ? '#16A34A' : sc === 1 ? '#C9A55A' : sc === 2 ? '#DC2626' : '#7F1D1D';
                    return (
                      <div key={m.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.75rem',
                        color: 'rgba(10,10,10,0.7)',
                      }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: col, flexShrink: 0 }} />
                        {m.name}
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                  <button
                    onClick={() => onNavigate('fisioterapia')}
                    style={{
                      flex: 1,
                      padding: '1.125rem 1.25rem',
                      background: totalScore > 8 ? '#DC2626' : '#C9A55A',
                      color: totalScore > 8 ? '#FFFFFF' : '#0A0A0A',
                      border: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontFamily: 'Space Grotesk',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Agendar valoración →
                  </button>
                  <button
                    onClick={reset}
                    style={{
                      padding: '1.125rem 1.25rem',
                      background: 'transparent',
                      color: 'rgba(10,10,10,0.6)',
                      border: '1px solid rgba(10,10,10,0.15)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontFamily: 'Space Grotesk',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A55A'; e.currentTarget.style.color = '#C9A55A'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(10,10,10,0.15)'; e.currentTarget.style.color = 'rgba(10,10,10,0.6)'; }}
                  >
                    ↺
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{
          marginTop: '1.5rem',
          fontSize: '0.875rem',
          color: 'rgba(10,10,10,0.5)',
          maxWidth: '700px',
        }}>
          Este test orienta, no diagnostica. La diferencia clave del hombro congelado es que limita el movimiento <strong style={{ color: '#0A0A0A' }}>pasivo</strong> (cuando otro te mueve el brazo) — eso solo se confirma en valoración presencial.
        </div>
      </div>

      <style>{`
        @keyframes romFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .rom-header { grid-template-columns: 1fr !important; }
          .rom-layout { grid-template-columns: 1fr !important; }
          .rom-viz { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); }
        }
      `}</style>
    </section>
  );
}

// ROM SVG body figure with animated arm
function HombroROMSvg({ movement, visDeg, submitted, answers, movements }) {
  const stroke = "rgba(10,10,10,0.55)";
  const goldStroke = "#C9A55A";

  // Shoulder pivot point
  const sx = 120, sy = 130;
  const armLen = 75;

  let armX, armY, armX2, armY2;

  if (movement.id === 'flexion') {
    // Flexion: arm rotates forward/up in sagittal — we show side view, arm goes up-forward
    const rad = visDeg * Math.PI / 180;
    armX = sx + armLen * Math.sin(rad) * 0.9;
    armY = sy - armLen * Math.sin(rad);
    // Simpler: angle from down position
    const a = (visDeg) * Math.PI / 180;
    armX = sx + armLen * Math.sin(a);
    armY = sy + armLen * Math.cos(Math.PI - a) * -1;
  }

  // Generic: compute arm end by angle from vertical-down
  function armEnd(deg, side = 1) {
    // deg measured from arm-hanging-down (0) to overhead (180)
    const a = deg * Math.PI / 180;
    return {
      x: sx + side * armLen * Math.sin(a),
      y: sy + armLen * Math.cos(a),
    };
  }

  const end = armEnd(visDeg, 1);

  return (
    <svg viewBox="0 0 240 290" style={{ width: '100%', maxWidth: '260px', height: 'auto' }}>
      {/* Reference arc 0-180 */}
      <path
        d={`M ${sx},${sy + armLen} A ${armLen} ${armLen} 0 0 1 ${sx},${sy - armLen}`}
        fill="none"
        stroke="rgba(10,10,10,0.1)"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      {/* Normal range marker (full) */}
      <text x={sx + armLen + 6} y={sy + armLen} fill="rgba(10,10,10,0.3)" fontSize="9" fontFamily="Space Grotesk" fontWeight="600">0°</text>
      <text x={sx + 6} y={sy - armLen - 4} fill="rgba(10,10,10,0.3)" fontSize="9" fontFamily="Space Grotesk" fontWeight="600">180°</text>

      {/* Head */}
      <circle cx={sx} cy="52" r="22" fill="rgba(10,10,10,0.05)" stroke={stroke} strokeWidth="1.5" />
      {/* Neck */}
      <line x1={sx} y1="74" x2={sx} y2="92" stroke={stroke} strokeWidth="1.5" />
      {/* Torso */}
      <path d={`M ${sx - 32} 95 L ${sx - 28} 230 L ${sx + 28} 230 L ${sx + 32} 95 Z`} fill="rgba(10,10,10,0.05)" stroke={stroke} strokeWidth="1.5" />
      {/* Shoulder joint */}
      <circle cx={sx} cy={sy} r="6" fill={goldStroke} />

      {/* Static reference arm hanging down (ghost) */}
      <line x1={sx} y1={sy} x2={sx} y2={sy + armLen} stroke="rgba(10,10,10,0.15)" strokeWidth="6" strokeLinecap="round" />

      {/* Active arm */}
      <line
        x1={sx} y1={sy}
        x2={end.x} y2={end.y}
        stroke={goldStroke}
        strokeWidth="8"
        strokeLinecap="round"
        style={{ transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
      />
      {/* Hand */}
      <circle
        cx={end.x} cy={end.y} r="7"
        fill="#0A0A0A"
        style={{ transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
      />

      {/* Degree label */}
      {!submitted && movement.id !== 'mano-espalda' && (
        <text
          x={sx - 70} y={sy - 50}
          fill={goldStroke}
          fontSize="20"
          fontFamily="Space Grotesk"
          fontWeight="700"
        >
          ~{visDeg}°
        </text>
      )}

      {/* Mano-espalda special note */}
      {movement.id === 'mano-espalda' && !submitted && (
        <text x={sx - 60} y="270" fill="rgba(10,10,10,0.4)" fontSize="9" fontFamily="Space Grotesk" fontWeight="600" letterSpacing="0.05em">
          ROTACIÓN INTERNA + EXTENSIÓN
        </text>
      )}
    </svg>
  );
}

if (typeof window !== "undefined") window.HombroHero = HombroHero;
if (typeof window !== "undefined") window.HombroWhatIs = HombroWhatIs;
if (typeof window !== "undefined") window.HombroROMTest = HombroROMTest;
/* ==================== hombro-2.jsx ==================== */
// HOMBRO CONGELADO - PARTE 2 - Resto + HombroPage shell

function HombroPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = React.useState(0);
  const [activePhaseNat, setActivePhaseNat] = React.useState(0);
  const [activePhase, setActivePhase] = React.useState(0);

  const Hero = window.HombroHero;
  const WhatIs = window.HombroWhatIs;
  const ROMTest = window.HombroROMTest;

  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <WhatIs />
      <ROMTest onNavigate={onNavigate} />
      <HombroPhases activePhaseNat={activePhaseNat} setActivePhaseNat={setActivePhaseNat} />
      <HombroSymptoms />
      <HombroCauses />
      <HombroDifferential />
      <HombroTreatment activePhase={activePhase} setActivePhase={setActivePhase} />
      <HombroExercises />
      <HombroRecovery />
      <HombroCTA onNavigate={onNavigate} />
      <HombroFAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <HombroRelated onNavigate={onNavigate} />
    </main>
  );
}

// SHARED HEADER (local)
function HoSectionHeader({ kicker, title, subtitle, intro, dark }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      marginBottom: '4rem',
      alignItems: 'flex-end',
    }} className="ho-sh-header">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>{kicker}</div>
        </div>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          fontFamily: 'Space Grotesk',
          color: dark ? '#FFFFFF' : '#0A0A0A',
        }}>{title}<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{subtitle}</span></h2>
      </div>
      {intro && (
        <p style={{ fontSize: '1.0625rem', color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.6)', lineHeight: 1.55, maxWidth: '460px' }}>{intro}</p>
      )}
      <style>{`@media (max-width: 900px) { .ho-sh-header { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// =====================================================================
// NATURAL PHASES — 3 phases of frozen shoulder (clickable)
// =====================================================================
function HombroPhases({ activePhaseNat, setActivePhaseNat }) {
  const phases = [
    {
      n: 1,
      title: 'Congelamiento',
      eng: 'Freezing',
      color: '#DC2626',
      duration: '6 semanas — 9 meses',
      pain: 'Alto',
      mobility: 'Disminuyendo',
      summary: 'Dolor intenso, especialmente nocturno. La movilidad empieza a perderse.',
      detail: 'La fase más dolorosa. El dolor domina sobre la rigidez. Aparece dolor nocturno que interrumpe el sueño. Aquí estirar agresivo es contraproducente — la prioridad es controlar dolor y mantener movilidad sin forzar.',
      treatment: 'Control del dolor · Movilidad suave sin forzar · NO estiramiento agresivo',
    },
    {
      n: 2,
      title: 'Congelado',
      eng: 'Frozen',
      color: '#C9A55A',
      duration: '4 — 12 meses',
      pain: 'Medio',
      mobility: 'Mínima',
      summary: 'El dolor baja pero la rigidez es máxima. El hombro está "bloqueado".',
      detail: 'El dolor disminuye pero la rigidez alcanza su punto máximo. El hombro está realmente "congelado" — movimiento muy limitado en todas direcciones. Aquí SÍ se moviliza progresivamente. Es la fase donde la fisioterapia activa marca más diferencia.',
      treatment: 'Movilización progresiva · Terapia manual · Ejercicios de rango activo',
    },
    {
      n: 3,
      title: 'Descongelamiento',
      eng: 'Thawing',
      color: '#16A34A',
      duration: '6 meses — 2 años',
      pain: 'Bajo',
      mobility: 'Recuperando',
      summary: 'La movilidad regresa gradualmente. El hombro se "descongela".',
      detail: 'La movilidad regresa progresivamente. El dolor es mínimo. Aquí se acelera la recuperación con fortalecimiento y trabajo de rango completo. Sin tratamiento puede tardar hasta 2 años — con fisioterapia bien dirigida se acorta significativamente.',
      treatment: 'Fortalecimiento · Rango completo · Vuelta a actividad normal',
    },
  ];

  const current = phases[activePhaseNat];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#0A0A0A',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(9rem, 20vw, 20rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        3 FASES.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <HoSectionHeader
          dark
          kicker="Historia natural · 3 fases"
          title="Se congela."
          subtitle="Se descongela."
          intro="El hombro congelado sigue 3 fases predecibles. Cada una con reglas opuestas: lo que ayuda en una, perjudica en otra. Saber dónde estás define el tratamiento."
        />

        {/* Phase selector */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
          border: '1px solid rgba(255,255,255,0.1)',
        }} className="hp-selector">
          {phases.map((p, i) => {
            const isActive = activePhaseNat === i;
            return (
              <button
                key={p.n}
                onClick={() => setActivePhaseNat(i)}
                style={{
                  padding: '2rem 1.5rem',
                  background: isActive ? 'rgba(255,255,255,0.04)' : 'transparent',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRight: i < phases.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'all 0.4s',
                  position: 'relative',
                }}
              >
                {isActive && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: p.color }} />}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: isActive ? p.color : 'rgba(255,255,255,0.2)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    transition: 'color 0.4s',
                  }}>0{p.n}</div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.color }} />
                </div>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                }}>{p.title}</div>
                <div style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: p.color,
                }}>{p.eng} · {p.duration}</div>
              </button>
            );
          })}
        </div>

        {/* Detail */}
        <div key={activePhaseNat} style={{
          border: '1px solid rgba(255,255,255,0.1)',
          borderTop: 'none',
          padding: '3rem',
          background: 'rgba(255,255,255,0.02)',
          animation: 'hpFade 0.4s ease-out',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '3rem',
        }} className="hp-detail">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              marginBottom: '1rem',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: current.color }} />
              <div style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: current.color,
              }}>Fase {current.n} · {current.eng}</div>
            </div>
            <h3 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: '1.25rem',
            }}>{current.summary}</h3>
            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '2rem',
            }}>{current.detail}</p>
            <div style={{
              padding: '1.25rem 1.5rem',
              background: `${current.color}15`,
              borderLeft: `3px solid ${current.color}`,
            }}>
              <div style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: current.color,
                marginBottom: '0.5rem',
              }}>Tratamiento en esta fase</div>
              <div style={{ fontSize: '0.9375rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.9)' }}>{current.treatment}</div>
            </div>
          </div>

          {/* Pain/Mobility meters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}>
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.75rem',
              }}>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>Dolor</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, fontFamily: 'Space Grotesk', color: current.color }}>{current.pain}</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: current.pain === 'Alto' ? '90%' : current.pain === 'Medio' ? '55%' : '20%',
                  background: current.color,
                  transition: 'width 0.5s',
                }} />
              </div>
            </div>
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.75rem',
              }}>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>Movilidad</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, fontFamily: 'Space Grotesk', color: '#C9A55A' }}>{current.mobility}</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: current.n === 1 ? '50%' : current.n === 2 ? '15%' : '70%',
                  background: '#C9A55A',
                  transition: 'width 0.5s',
                }} />
              </div>
            </div>
            <div style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Duración fase</div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{current.duration}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hpFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) {
          .hp-selector { grid-template-columns: 1fr !important; }
          .hp-selector > button { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1); }
          .hp-detail { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}

// SYMPTOMS
function HombroSymptoms() {
  const symptoms = [
    'Pérdida progresiva de movilidad en todas direcciones',
    'Dolor nocturno que interrumpe el sueño (típico de fase 1)',
    'Dificultad para vestirse, peinarse o alcanzar la espalda',
    'Restricción tanto del movimiento activo como pasivo',
    'Rotación externa especialmente limitada (signo clave)',
    'Dolor difuso en el hombro, difícil de localizar con un dedo',
  ];

  const redFlags = [
    'Trauma reciente con deformidad visible (posible fractura/luxación)',
    'Pérdida de fuerza marcada (más que rigidez)',
    'Masa o bulto palpable en el hombro',
    'Síntomas tras cirugía o inmovilización reciente sin movilizar',
    'Fiebre + hombro caliente e hinchado (infección)',
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <HoSectionHeader
          kicker="Síntomas · Cómo se manifiesta"
          title="Cómo"
          subtitle="se siente."
          intro="El sello del hombro congelado: pierdes movilidad en TODAS las direcciones, y duele de noche. La rotación externa restringida es el signo más característico."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          background: '#FFFFFF',
        }} className="ho-sym-grid">
          <div style={{ padding: '2.5rem 2rem', borderRight: '1px solid rgba(10,10,10,0.08)' }} className="ho-sym-list">
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(10,10,10,0.08)',
            }}>Síntomas típicos · {symptoms.length}</div>
            {symptoms.map((s, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: '1rem',
                padding: '1.125rem 0',
                borderBottom: i < symptoms.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                alignItems: 'flex-start',
              }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', fontWeight: 700, color: '#C9A55A' }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.5, color: '#0A0A0A' }}>{s}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#0A0A0A', color: '#FFFFFF', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }} className="ho-sym-red">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#DC2626' }} />
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#DC2626',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}>⚠ Banderas rojas · Otra patología</div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
              No es hombro congelado. Puede ser rotura del manguito, fractura, luxación o infección. Diagnóstico urgente.
            </p>
            {redFlags.map((f, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '0.875rem',
                alignItems: 'flex-start',
                fontSize: '0.9375rem',
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: i < redFlags.length - 1 ? '0.875rem' : 0,
              }}>
                <div style={{ width: '8px', height: '8px', background: '#DC2626', marginTop: '0.4rem', flexShrink: 0 }} />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ho-sym-grid { grid-template-columns: 1fr !important; }
          .ho-sym-list { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); }
        }
      `}</style>
    </section>
  );
}

// CAUSES
function HombroCauses() {
  const causes = [
    { title: 'Idiopática', description: 'En muchos casos no hay causa clara. Aparece sin trauma previo, sobre todo entre 40—60 años.', example: 'Persona de 50 años que un día nota rigidez progresiva sin haberse lastimado.', pct: '40%' },
    { title: 'Inmovilización', description: 'Tras cirugía, fractura o lesión que obligó a no mover el hombro. La cápsula se contrae por desuso.', example: 'Paciente que tuvo el brazo en cabestrillo 4 semanas y no lo movilizó después.', pct: '30%' },
    { title: 'Diabetes', description: 'Los diabéticos tienen hasta 4× más riesgo. La glicación afecta el colágeno de la cápsula.', example: 'Diabético tipo 2 que desarrolla rigidez bilateral progresiva.', pct: '20%' },
    { title: 'Endocrina / otros', description: 'Tiroides, enfermedad cardiovascular o ciertos fármacos predisponen a capsulitis.', example: 'Paciente con hipotiroidismo que desarrolla hombro congelado.', pct: '10%' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <HoSectionHeader
          kicker="Causas · Factores de riesgo"
          title="A veces"
          subtitle="sin razón."
          intro="El hombro congelado puede aparecer sin causa aparente. Pero hay factores que multiplican el riesgo — sobre todo diabetes e inmovilización prolongada."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'rgba(10,10,10,0.08)',
          border: '1px solid rgba(10,10,10,0.08)',
        }} className="ho-cau-grid">
          {causes.map((c, i) => (
            <div key={i} style={{
              padding: '2.5rem 2rem',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              minHeight: '270px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                fontFamily: 'Space Grotesk',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#C9A55A',
                background: 'rgba(201,165,90,0.08)',
                padding: '0.375rem 0.625rem',
              }}>{c.pct}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '3rem', fontWeight: 700, color: '#C9A55A', lineHeight: 0.85, letterSpacing: '-0.03em' }}>0{i + 1}</div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#0A0A0A' }}>{c.title}.</h3>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.55, color: 'rgba(10,10,10,0.7)' }}>{c.description}</p>
              <div style={{
                marginTop: 'auto',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(10,10,10,0.06)',
                fontSize: '0.8125rem',
                fontStyle: 'italic',
                color: 'rgba(10,10,10,0.5)',
                lineHeight: 1.45,
              }}>
                <span style={{
                  display: 'inline-block',
                  marginRight: '0.375rem',
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C9A55A',
                  fontWeight: 700,
                  fontStyle: 'normal',
                }}>Ej.</span>
                {c.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ho-cau-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// DIFFERENTIAL
function HombroDifferential() {
  const rows = [
    { condition: 'Hombro congelado', location: 'Cápsula (global)', test: 'Movilidad activa = pasiva', finding: 'Restricción activa Y pasiva. Rotación externa muy limitada' },
    { condition: 'Rotura manguito',  location: 'Tendones manguito', test: 'Pasiva > activa',       finding: 'Pasivo conservado, activo limitado. Debilidad' },
    { condition: 'Pinzamiento',      location: 'Subacromial',       test: 'Neer + Hawkins',        finding: 'Dolor en arco 60—120°, no pérdida global' },
    { condition: 'Artrosis glenohumeral', location: 'Cartílago articular', test: 'Rx + crepitación', finding: 'Crujidos + dolor + rigidez. Mayores' },
    { condition: 'Tendinitis calcificante', location: 'Tendón (calcio)', test: 'Ecografía / Rx',    finding: 'Dolor agudo súbito. Depósito visible en imagen' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <HoSectionHeader
          kicker="Diagnóstico diferencial"
          title="No todo hombro"
          subtitle="rígido es esto."
          intro="La clave que diferencia el hombro congelado: limita el movimiento pasivo igual que el activo. Si te mueven el brazo y llega, NO es capsulitis."
        />

        <div style={{ border: '1px solid rgba(10,10,10,0.08)', overflowX: 'auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1.2fr 1.4fr 2fr',
            background: '#0A0A0A',
            color: '#FFFFFF',
            minWidth: '720px',
          }}>
            {['Condición', 'Localización', 'Test clínico', 'Hallazgo clave'].map((h, i, arr) => (
              <div key={h} style={{ padding: '1.25rem 1.5rem', borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontSize: '0.625rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>{h}</div>
              </div>
            ))}
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1.2fr 1.4fr 2fr',
              borderTop: '1px solid rgba(10,10,10,0.06)',
              background: i === 0 ? 'rgba(201,165,90,0.04)' : '#FFFFFF',
              minWidth: '720px',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => { if (i !== 0) e.currentTarget.style.background = '#FAFAFA'; }}
            onMouseLeave={(e) => { if (i !== 0) e.currentTarget.style.background = '#FFFFFF'; }}>
              <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(10,10,10,0.06)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {i === 0 && <div style={{ width: '6px', height: '20px', background: '#C9A55A', flexShrink: 0 }} />}
                <div style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'Space Grotesk', letterSpacing: '-0.01em', color: '#0A0A0A' }}>{r.condition}</div>
              </div>
              <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(10,10,10,0.06)', fontSize: '0.9375rem', color: 'rgba(10,10,10,0.7)', display: 'flex', alignItems: 'center' }}>{r.location}</div>
              <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(10,10,10,0.06)', fontSize: '0.9375rem', color: 'rgba(10,10,10,0.7)', fontStyle: 'italic', display: 'flex', alignItems: 'center' }}>{r.test}</div>
              <div style={{ padding: '1.5rem', fontSize: '0.9375rem', color: '#0A0A0A', display: 'flex', alignItems: 'center' }}>{r.finding}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// TREATMENT
function HombroTreatment({ activePhase, setActivePhase }) {
  const phases = [
    { title: 'Diagnóstico',  duration: 'Sesión 1 · 60 min', desc: 'Confirmar capsulitis (activo = pasivo), identificar fase natural (1/2/3), descartar manguito y otras patologías. Plan según fase.', bullets: ['Movilidad activa vs pasiva', 'Identificar fase natural', 'Descartar manguito', 'Plan según fase'] },
    { title: 'Calmar',       duration: 'Fase congelamiento', desc: 'Si está en fase dolorosa: control del dolor, movilidad suave sin forzar. Aquí NO se estira agresivo — empeora la inflamación capsular.', bullets: ['Control del dolor', 'Movilidad pendular suave', 'Terapia manual gentil', 'Educación de la fase'] },
    { title: 'Movilizar',    duration: 'Fase congelado',     desc: 'Cuando el dolor baja y domina la rigidez: movilización progresiva, terapia manual, estiramiento capsular dirigido. La fase donde más se gana.', bullets: ['Movilización articular', 'Estiramiento capsular', 'Rango activo-asistido', 'Terapia manual intensiva'] },
    { title: 'Fortalecer',   duration: 'Fase descongelado',  desc: 'Con movilidad recuperándose: fortalecer manguito y escápula, recuperar rango completo, volver a actividad normal sin compensaciones.', bullets: ['Fortalecer manguito', 'Control escapular', 'Rango completo', 'Vuelta a actividad'] },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <HoSectionHeader
          kicker="Tratamiento · Según fase"
          title="Cada fase,"
          subtitle="su regla."
          intro="El error más común: estirar agresivo en fase dolorosa. El tratamiento del hombro congelado se adapta a la fase natural — calmar primero, movilizar después, fortalecer al final."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="ho-tx-grid">
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
            {phases.map((p, i) => {
              const isActive = activePhase === i;
              return (
                <button
                  key={i}
                  onClick={() => setActivePhase(i)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr auto',
                    gap: '1.25rem',
                    alignItems: 'center',
                    padding: '1.75rem 0',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid rgba(10,10,10,0.08)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'inherit',
                    position: 'relative',
                    paddingLeft: isActive ? '1rem' : '0',
                    transition: 'padding 0.3s',
                  }}
                >
                  {isActive && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: '#C9A55A' }} />}
                  <div style={{ fontFamily: 'Space Grotesk', fontSize: isActive ? '1rem' : '0.875rem', fontWeight: 700, color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.3)', transition: 'all 0.3s' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontSize: isActive ? '1.5rem' : '1.25rem', fontWeight: 700, fontFamily: 'Space Grotesk', letterSpacing: '-0.01em', color: isActive ? '#0A0A0A' : 'rgba(10,10,10,0.5)', transition: 'all 0.3s' }}>{p.title}</div>
                  <div style={{ fontSize: '1.25rem', color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.2)', transform: isActive ? 'translateX(0)' : 'translateX(-8px)', transition: 'all 0.3s' }}>→</div>
                </button>
              );
            })}
          </div>

          <div key={activePhase} style={{
            background: '#FAFAFA',
            border: '1px solid rgba(10,10,10,0.08)',
            padding: '3rem',
            position: 'relative',
            minHeight: '420px',
            animation: 'hoTxFade 0.4s ease-out',
          }}>
            <div style={{ position: 'absolute', top: '1rem', right: '2rem', fontFamily: 'Space Grotesk', fontSize: '8rem', fontWeight: 700, color: 'rgba(201,165,90,0.08)', lineHeight: 0.85, letterSpacing: '-0.04em' }}>0{activePhase + 1}</div>
            <div style={{ fontSize: '0.6875rem', color: '#C9A55A', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1rem', position: 'relative' }}>Paso {String(activePhase + 1).padStart(2, '0')} · {phases[activePhase].duration}</div>
            <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, color: '#0A0A0A', marginBottom: '1.5rem', position: 'relative' }}>{phases[activePhase].title}<span style={{ color: '#C9A55A' }}>.</span></h3>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'rgba(10,10,10,0.65)', maxWidth: '500px', marginBottom: '2rem', position: 'relative' }}>{phases[activePhase].desc}</p>
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(10,10,10,0.06)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {phases[activePhase].bullets.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.625rem 0', fontSize: '0.9375rem', color: 'rgba(10,10,10,0.8)' }}>
                  <div style={{ width: '6px', height: '6px', background: '#C9A55A' }} />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hoTxFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 900px) { .ho-tx-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// EXERCISES
function HombroExercises() {
  const exercises = [
    { name: 'Pendulares de Codman',     goal: 'Movilidad suave (fase 1)',  sets: '3 × 1 min', stage: 'Fase 1',   difficulty: 'Baja' },
    { name: 'Deslizamiento en pared',   goal: 'Flexión asistida',          sets: '3 × 10',    stage: 'Fase 1—2', difficulty: 'Baja' },
    { name: 'Estiramiento cruzado',     goal: 'Cápsula posterior',         sets: '3 × 30s',   stage: 'Fase 2',   difficulty: 'Media' },
    { name: 'Rotación ext. con bastón', goal: 'Rotación externa',          sets: '3 × 10',    stage: 'Fase 2',   difficulty: 'Media' },
    { name: 'Toalla a la espalda',      goal: 'Rotación interna',          sets: '3 × 10',    stage: 'Fase 2—3', difficulty: 'Media' },
    { name: 'Remo con banda',           goal: 'Fortalecer escápula',       sets: '3 × 15',    stage: 'Fase 3',   difficulty: 'Media' },
    { name: 'Rotación ext. resistida',  goal: 'Fortalecer manguito',       sets: '3 × 12',    stage: 'Fase 3',   difficulty: 'Media' },
    { name: 'Flexiones en pared',       goal: 'Control escapular',         sets: '3 × 12',    stage: 'Fase 3',   difficulty: 'Baja' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <HoSectionHeader
          kicker="Ejercicios · Plan base"
          title="Según"
          subtitle="la fase."
          intro="Los ejercicios cambian radicalmente según la fase. Pendulares suaves al inicio, movilización y estiramiento capsular en fase congelada, fortalecimiento al descongelar."
        />

        <div style={{ border: '1px solid rgba(10,10,10,0.08)', background: '#FFFFFF' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60px 1.5fr 1.5fr 1fr 1fr 1fr',
            padding: '1rem 1.5rem',
            background: '#FAFAFA',
            borderBottom: '1px solid rgba(10,10,10,0.08)',
            fontSize: '0.625rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'rgba(10,10,10,0.4)',
          }} className="ho-ex-head">
            <div>Nº</div><div>Ejercicio</div><div>Objetivo</div><div>Series × Reps</div><div>Fase</div><div>Dificultad</div>
          </div>
          {exercises.map((e, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '60px 1.5fr 1.5fr 1fr 1fr 1fr',
              padding: '1.5rem',
              borderBottom: i < exercises.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
              alignItems: 'center',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(el) => el.currentTarget.style.background = '#FAFAFA'}
            onMouseLeave={(el) => el.currentTarget.style.background = '#FFFFFF'}
            className="ho-ex-row">
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.875rem', fontWeight: 700, color: '#C9A55A' }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{ fontSize: '1.0625rem', fontFamily: 'Space Grotesk', fontWeight: 600, letterSpacing: '-0.01em', color: '#0A0A0A' }}>{e.name}</div>
              <div style={{ fontSize: '0.9375rem', color: 'rgba(10,10,10,0.65)' }}>{e.goal}</div>
              <div style={{ fontSize: '0.9375rem', fontFamily: 'Space Grotesk', fontWeight: 600, color: '#0A0A0A' }}>{e.sets}</div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>{e.stage}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: e.difficulty === 'Avanzada' ? '#DC2626' : e.difficulty === 'Media' ? '#C9A55A' : '#16A34A' }} />
                <span style={{ fontSize: '0.875rem', color: '#0A0A0A' }}>{e.difficulty}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'rgba(10,10,10,0.5)', maxWidth: '600px' }}>
          En fase de congelamiento (dolorosa), limítate a pendulares. Forzar estiramientos ahí prolonga la inflamación. La progresión la marca tu fase, confirmada en valoración.
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ho-ex-head { display: none !important; }
          .ho-ex-row { grid-template-columns: 40px 1fr !important; gap: 0.75rem; padding: 1rem !important; }
          .ho-ex-row > div:nth-child(3),
          .ho-ex-row > div:nth-child(4),
          .ho-ex-row > div:nth-child(5),
          .ho-ex-row > div:nth-child(6) { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// RECOVERY
function HombroRecovery() {
  const milestones = [
    { week: 'Fase 1',  status: 'Congelamiento', desc: '6 sem—9 meses · controlar dolor' },
    { week: 'Fase 2',  status: 'Congelado',     desc: '4—12 meses · movilizar' },
    { week: 'Fase 3',  status: 'Descongelado',  desc: '6 meses—2 años · fortalecer' },
    { week: 'Meta',    status: 'Rango completo', desc: 'Movilidad y fuerza restauradas' },
  ];

  const factors = [
    { label: 'Fase en que se inicia tratamiento', weight: 'Alta' },
    { label: 'Diabetes / factores metabólicos',   weight: 'Alta' },
    { label: 'Adherencia a movilización diaria',   weight: 'Alta' },
    { label: 'Tiempo sin tratar (cronicidad)',     weight: 'Media' },
    { label: 'Edad del paciente',                   weight: 'Media' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <HoSectionHeader
          kicker="Tiempo de recuperación"
          title="De meses"
          subtitle="a años."
          intro="El hombro congelado es la lesión más lenta del catálogo. Sin tratar puede tardar hasta 2—3 años. Con fisioterapia bien dirigida se acorta significativamente — sobre todo si se empieza en fase congelada."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="ho-rec-grid">
          <div style={{ background: '#FAFAFA', border: '1px solid rgba(10,10,10,0.08)', padding: '3rem 2rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(10,10,10,0.4)', marginBottom: '2.5rem' }}>Recorrido típico</div>
            <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '8px', top: '12px', bottom: '12px', width: '2px', background: 'linear-gradient(180deg, #DC2626 0%, #C9A55A 50%, #16A34A 100%)' }} />
              {milestones.map((m, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: i < milestones.length - 1 ? '2.5rem' : 0 }}>
                  <div style={{
                    position: 'absolute',
                    left: '-2.5rem',
                    top: '4px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: `3px solid ${i === 0 ? '#DC2626' : i === 1 ? '#C9A55A' : i === 2 ? '#16A34A' : '#0A0A0A'}`,
                    boxShadow: i === 0 ? '0 0 0 4px rgba(220,38,38,0.15)' : 'none',
                  }} />
                  <div style={{ fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A', marginBottom: '0.375rem', fontFamily: 'Space Grotesk' }}>{m.week}</div>
                  <h4 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', color: '#0A0A0A', marginBottom: '0.375rem', lineHeight: 1.05 }}>{m.status}.</h4>
                  <p style={{ fontSize: '0.9375rem', color: 'rgba(10,10,10,0.6)', lineHeight: 1.5 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(10,10,10,0.4)', marginBottom: '1.5rem' }}>Qué cambia el tiempo</div>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
              {factors.map((f, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  padding: '1.125rem 0',
                  borderBottom: '1px solid rgba(10,10,10,0.08)',
                  gap: '1rem',
                }}>
                  <div style={{ fontSize: '1rem', color: '#0A0A0A', fontWeight: 500 }}>{f.label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: f.weight === 'Alta' ? '#DC2626' : '#C9A55A' }} />
                    <span style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(10,10,10,0.6)' }}>Influencia {f.weight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .ho-rec-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// CTA
function HombroCTA({ onNavigate }) {
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          background: 'linear-gradient(135deg, #C9A55A 0%, #B8943F 100%)',
          color: '#0A0A0A',
          padding: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }} className="ho-cta-grid">
          <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '60%', height: '140%', background: 'linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.05) 50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1.5rem' }}>Capsulitis adhesiva · Tratamiento por fase</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.03em', fontFamily: 'Space Grotesk', marginBottom: '1.5rem' }}>Recuperas el rango.<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>Sin esperar 2 años.</span></h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.55, opacity: 0.85, maxWidth: '520px' }}>
              Primera sesión: identificación de fase + plan específico + primeras movilizaciones. 60 min. Empezar en la fase correcta acorta meses de recuperación.
            </p>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                background: '#0A0A0A',
                color: '#FFFFFF',
                border: 'none',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >Agendar valoración<span>→</span></button>
            <button
              style={{
                background: 'transparent',
                color: '#0A0A0A',
                border: '1px solid rgba(10,10,10,0.4)',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.color = '#C9A55A'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0A0A0A'; }}
            >WhatsApp</button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .ho-cta-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// FAQ
function HombroFAQ({ openFaq, setOpenFaq }) {
  const faqs = [
    { q: '¿El hombro congelado se cura solo?', a: 'Eventualmente sí, pero puede tardar 1—3 años y dejar rigidez residual. La fisioterapia bien dirigida acorta significativamente el tiempo y mejora el resultado final. No tratarlo es apostar a años de limitación innecesaria.' },
    { q: '¿Por qué me duele más de noche?', a: 'Es típico de la fase de congelamiento. Por la noche, sin distracciones y con ciertas posiciones que comprimen la cápsula inflamada, el dolor se intensifica. Dormir con el brazo apoyado en una almohada suele ayudar. Es señal de fase 1 activa.' },
    { q: '¿Debo forzar el estiramiento para ganar movilidad?', a: 'Depende de la fase. En fase de congelamiento (dolorosa), forzar empeora la inflamación. En fase congelada (rígida, menos dolor), sí se moviliza progresivamente. Estirar agresivo en el momento equivocado es el error más común — por eso importa saber la fase.' },
    { q: '¿La infiltración sirve?', a: 'En fase de congelamiento, una infiltración de corticoides puede ayudar a controlar el dolor y permitir empezar la movilización antes. Se valora caso a caso con criterio médico. No es la solución única — el trabajo de movilidad sigue siendo central.' },
    { q: '¿Tiene que ver con la diabetes?', a: 'Sí, mucho. Los diabéticos tienen hasta 4 veces más riesgo de hombro congelado, suele ser más severo y bilateral. La glicación del colágeno afecta la elasticidad capsular. El control glucémico es parte del manejo.' },
    { q: '¿Puede darme en el otro hombro?', a: 'Sí. Hasta un 20—30% de los pacientes desarrollan hombro congelado en el lado contrario, generalmente dentro de los 5 años. Es más frecuente en diabéticos. Por eso conviene aprender el patrón y actuar rápido si reaparece.' },
    { q: '¿Cuándo se opera?', a: 'Rara vez. La gran mayoría se resuelve con tratamiento conservador. La cirugía (liberación capsular artroscópica o manipulación bajo anestesia) se reserva para casos que no mejoran tras 6—12 meses de fisioterapia bien hecha. Siempre último recurso.' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <HoSectionHeader
          kicker="Preguntas frecuentes"
          title="Lo que"
          subtitle="me preguntan."
          intro="Las dudas más comunes sobre hombro congelado. Si no encuentras la tuya, WhatsApp directo."
        />

        <div style={{ maxWidth: '900px', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  style={{
                    width: '100%',
                    padding: '1.75rem 0',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr 40px',
                    alignItems: 'center',
                    gap: '1.5rem',
                  }}
                >
                  <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.875rem', fontWeight: 700, color: isOpen ? '#C9A55A' : 'rgba(10,10,10,0.3)', transition: 'color 0.3s' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)', fontWeight: 600, fontFamily: 'Space Grotesk', letterSpacing: '-0.01em', lineHeight: 1.3, color: '#0A0A0A' }}>{faq.q}</div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: `1px solid ${isOpen ? '#C9A55A' : 'rgba(10,10,10,0.15)'}`,
                    background: isOpen ? '#C9A55A' : 'transparent',
                    color: isOpen ? '#0A0A0A' : 'rgba(10,10,10,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.125rem',
                    fontWeight: 300,
                    transition: 'all 0.4s',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    justifySelf: 'end',
                  }}>+</div>
                </button>
                <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 40px', gap: '1.5rem', paddingBottom: '1.75rem' }}>
                      <div></div>
                      <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(10,10,10,0.7)', maxWidth: '700px' }}>{faq.a}</p>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// RELATED
function HombroRelated({ onNavigate }) {
  const related = [
    { name: 'Pubalgia',             page: 'pubalgia',   zone: 'Ingle / Pelvis' },
    { name: 'Ciática',              page: 'ciatica',    zone: 'Lumbar / Pierna' },
    { name: 'Tendinitis Rotuliana', page: 'tendinitis', zone: 'Rodilla' },
  ];

  return (
    <section style={{
      padding: '6rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Otras lesiones · Ver protocolo</div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(10,10,10,0.08)',
          border: '1px solid rgba(10,10,10,0.08)',
        }} className="ho-rel-grid">
          {related.map((r, i) => (
            <button
              key={r.page}
              onClick={() => onNavigate(r.page)}
              style={{
                padding: '2rem',
                background: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.4s',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                minHeight: '180px',
                color: 'inherit',
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A0A0A';
                e.currentTarget.querySelectorAll('[data-rel]').forEach(el => {
                  if (el.dataset.rel === 'name') el.style.color = '#FFFFFF';
                  if (el.dataset.rel === 'zone') el.style.color = '#C9A55A';
                  if (el.dataset.rel === 'arrow') { el.style.color = '#C9A55A'; el.style.transform = 'translateX(8px)'; }
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.querySelectorAll('[data-rel]').forEach(el => {
                  if (el.dataset.rel === 'name') el.style.color = '#0A0A0A';
                  if (el.dataset.rel === 'zone') el.style.color = 'rgba(10,10,10,0.5)';
                  if (el.dataset.rel === 'arrow') { el.style.color = 'rgba(10,10,10,0.3)'; el.style.transform = 'translateX(0)'; }
                });
              }}
            >
              <div style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(10,10,10,0.4)' }}>0{i + 1} / 03</div>
              <h3 data-rel="name" style={{ fontSize: '1.625rem', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', color: '#0A0A0A', transition: 'color 0.4s', lineHeight: 1.05 }}>{r.name}</h3>
              <div data-rel="zone" style={{ fontSize: '0.875rem', color: 'rgba(10,10,10,0.5)', transition: 'color 0.4s' }}>{r.zone}</div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>Ver protocolo</span>
                <span data-rel="arrow" style={{ fontSize: '1.5rem', color: 'rgba(10,10,10,0.3)', transition: 'all 0.4s', fontFamily: 'Space Grotesk' }}>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .ho-rel-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

if (typeof window !== "undefined") window.HombroPage = HombroPage;
/* ==================== deporte-hub.jsx ==================== */
// DEPORTE HUB - Componente reutilizable para hubs deportivos
// Parametrizado por datos. Genera: Running, CrossFit, BJJ, Danza

// =====================================================================
// SHARED HEADER
// =====================================================================
function DhSectionHeader({ kicker, title, subtitle, intro, dark }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      marginBottom: '4rem',
      alignItems: 'flex-end',
    }} className="dh-sh-header">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>{kicker}</div>
        </div>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          fontFamily: 'Space Grotesk',
          color: dark ? '#FFFFFF' : '#0A0A0A',
        }}>{title}<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{subtitle}</span></h2>
      </div>
      {intro && (
        <p style={{ fontSize: '1.0625rem', color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.6)', lineHeight: 1.55, maxWidth: '460px' }}>{intro}</p>
      )}
      <style>{`@media (max-width: 900px) { .dh-sh-header { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// =====================================================================
// HERO
// =====================================================================
function DhHero({ data, onNavigate }) {
  return (
    <section style={{
      padding: '12rem 0 6rem',
      background: '#0A0A0A',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(7rem, 17vw, 20rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.06)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        {data.bigWord}
      </div>
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '-200px',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,165,90,0.13) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem',
          fontSize: '0.6875rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          <a onClick={() => onNavigate('deportes')} style={{ color: 'rgba(255,255,255,0.5)', cursor: 'pointer', textDecoration: 'none' }}>Deportes</a>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
          <span style={{ color: '#C9A55A' }}>{data.name}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '4rem', alignItems: 'flex-end' }} className="dh-hero-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '60px', height: '1px', background: '#C9A55A' }} />
              <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>{data.kicker}</div>
            </div>
            <h1 style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 6rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              fontFamily: 'Space Grotesk',
              marginBottom: '2.5rem',
            }}>
              {data.heroTitle}
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{data.heroSub}</span>
            </h1>
            <p style={{
              fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '620px',
              marginBottom: '2.5rem',
            }}>
              {data.heroDesc}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate('fisioterapia')}
                style={{
                  background: '#C9A55A',
                  color: '#0A0A0A',
                  border: 'none',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#FFFFFF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#C9A55A'; }}
              >Agendar valoración<span>→</span></button>
              <a
                href="#lesiones-deporte"
                style={{
                  background: 'transparent',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A55A'; e.currentTarget.style.color = '#C9A55A'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#FFFFFF'; }}
              >Ver lesiones ↓</a>
            </div>
          </div>

          {/* Stats column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            paddingLeft: '2.5rem',
          }} className="dh-hero-stats">
            {data.iconKind && window.Sport3DIcon && (
              <div style={{ marginBottom: '0.5rem' }}>
                <window.Sport3DIcon kind={data.iconKind} size={180} />
              </div>
            )}
            {data.stats.map((s, i) => (
              <div key={i} style={{ padding: '1.5rem 0', borderBottom: i < data.stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.375rem' }}>
                  <div style={{ fontSize: 'clamp(2.25rem, 3.5vw, 3rem)', fontFamily: 'Space Grotesk', fontWeight: 700, color: '#C9A55A', lineHeight: 1, letterSpacing: '-0.03em' }}>{s.value}</div>
                  {s.suffix && <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.suffix}</div>}
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.125rem' }}>{s.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dh-hero-grid { grid-template-columns: 1fr !important; }
          .dh-hero-stats { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// WHY ME
// =====================================================================
function DhWhyMe({ data }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FFFFFF', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        <DhSectionHeader kicker={data.whyKicker} title={data.whyTitle} subtitle={data.whySub} intro={data.whyIntro} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }} className="dh-why-grid">
          <div>
            {data.whyParas.map((p, i) => (
              <p key={i} style={{
                fontSize: i === 0 ? '1.125rem' : '1.0625rem',
                lineHeight: i === 0 ? 1.7 : 1.65,
                color: i === 0 ? 'rgba(10,10,10,0.75)' : 'rgba(10,10,10,0.65)',
                marginBottom: '1.5rem',
              }} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <div style={{ background: '#0A0A0A', color: '#FFFFFF', padding: '2.5rem' }}>
            <div style={{ fontSize: '4rem', fontFamily: 'Space Grotesk', color: '#C9A55A', lineHeight: 0.5, marginBottom: '1.5rem' }}>"</div>
            <p style={{
              fontSize: 'clamp(1.375rem, 2vw, 1.75rem)',
              fontFamily: 'Space Grotesk',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.35,
              letterSpacing: '-0.01em',
              marginBottom: '2rem',
            }}>{data.whyQuote}</p>
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>Germán Montenegro</div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .dh-why-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// =====================================================================
// INJURIES LIST (interactive)
// =====================================================================
function DhInjuries({ data, onNavigate }) {
  const [hovered, setHovered] = React.useState(null);
  return (
    <section id="lesiones-deporte" style={{ padding: '8rem 0', background: '#FAFAFA', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <DhSectionHeader
          kicker={`Lesiones · ${data.injuries.length} comunes`}
          title={data.injTitle}
          subtitle={data.injSub}
          intro={data.injIntro}
        />
        <div style={{ background: '#FFFFFF', border: '1px solid rgba(10,10,10,0.08)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60px 2fr 1.6fr 1fr 60px',
            padding: '1rem 2rem',
            borderBottom: '1px solid rgba(10,10,10,0.08)',
            fontSize: '0.6875rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'rgba(10,10,10,0.4)',
            background: '#FAFAFA',
          }} className="dh-inj-head">
            <div>Nº</div><div>Lesión</div><div>Gesto que la causa</div><div>Frecuencia</div><div></div>
          </div>
          {data.injuries.map((inj, i) => {
            const isHovered = hovered === i;
            const clickable = !!inj.page;
            return (
              <div
                key={i}
                onClick={() => clickable && onNavigate(inj.page)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 2fr 1.6fr 1fr 60px',
                  padding: '1.625rem 2rem',
                  borderBottom: i < data.injuries.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                  cursor: clickable ? 'pointer' : 'default',
                  background: isHovered ? '#0A0A0A' : '#FFFFFF',
                  color: isHovered ? '#FFFFFF' : '#0A0A0A',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  alignItems: 'center',
                }}
                className="dh-inj-row"
              >
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.875rem', fontWeight: 600, color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.3)', transition: 'color 0.4s' }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Space Grotesk', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: clickable ? '0.25rem' : 0 }}>{inj.name}</div>
                  {clickable ? (
                    <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.4)', transition: 'color 0.4s' }}>Ver protocolo →</div>
                  ) : (
                    <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, color: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(10,10,10,0.35)', fontStyle: 'italic', transition: 'color 0.4s' }}>Se trata en valoración</div>
                  )}
                </div>
                <div style={{ fontSize: '0.9375rem', color: isHovered ? 'rgba(255,255,255,0.7)' : 'rgba(10,10,10,0.6)', transition: 'color 0.4s' }}>{inj.gesture}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: inj.freq === 'Alta' ? '#DC2626' : inj.freq === 'Media' ? '#C9A55A' : '#16A34A' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{inj.freq}</span>
                </div>
                <div style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', color: clickable ? (isHovered ? '#C9A55A' : 'rgba(10,10,10,0.2)') : 'rgba(10,10,10,0.15)', transform: isHovered && clickable ? 'translateX(6px)' : 'translateX(0)', transition: 'all 0.4s', textAlign: 'right' }}>{clickable ? '→' : '·'}</div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .dh-inj-head { display: none !important; }
          .dh-inj-row { grid-template-columns: 40px 1fr !important; gap: 1rem; padding: 1.25rem !important; }
          .dh-inj-row > div:nth-child(3), .dh-inj-row > div:nth-child(4), .dh-inj-row > div:nth-child(5) { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// CAUSES
// =====================================================================
function DhCauses({ data }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <DhSectionHeader kicker="Por qué te lesionas" title={data.causesTitle} subtitle={data.causesSub} intro={data.causesIntro} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(10,10,10,0.08)', border: '1px solid rgba(10,10,10,0.08)' }} className="dh-cau-grid">
          {data.causes.map((c, i) => (
            <div key={i} style={{ padding: '2.5rem 2rem', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '240px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '3rem', fontWeight: 700, color: '#C9A55A', lineHeight: 0.85, letterSpacing: '-0.03em' }}>0{i + 1}</div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#0A0A0A' }}>{c.title}.</h3>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.55, color: 'rgba(10,10,10,0.7)' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .dh-cau-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// =====================================================================
// RETURN TO PLAY
// =====================================================================
function DhReturn({ data }) {
  return (
    <section style={{ padding: '8rem 0', background: '#0A0A0A', color: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', right: '-3%', bottom: '-3rem',
        fontSize: 'clamp(8rem, 18vw, 18rem)', fontFamily: 'Space Grotesk', fontWeight: 700,
        color: 'rgba(201,165,90,0.05)', lineHeight: 0.85, letterSpacing: '-0.05em', whiteSpace: 'nowrap', pointerEvents: 'none',
      }}>{data.returnWord}</div>
      <div className="container" style={{ position: 'relative' }}>
        <DhSectionHeader dark kicker={data.returnKicker} title={data.returnTitle} subtitle={data.returnSub} intro={data.returnIntro} />
        <div style={{ position: 'relative', paddingLeft: '3rem' }}>
          <div style={{ position: 'absolute', left: '9px', top: '12px', bottom: '12px', width: '2px', background: 'linear-gradient(180deg, #C9A55A 0%, rgba(201,165,90,0.2) 100%)' }} />
          {data.returnSteps.map((s, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: i < data.returnSteps.length - 1 ? '2.5rem' : 0 }}>
              <div style={{ position: 'absolute', left: '-3rem', top: '2px', width: '20px', height: '20px', borderRadius: '50%', background: '#0A0A0A', border: '3px solid #C9A55A', boxShadow: i === 0 ? '0 0 0 4px rgba(201,165,90,0.15)' : 'none' }} />
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A', marginBottom: '0.5rem' }}>{s.label}</div>
              <h4 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '0.5rem' }}>{s.title}</h4>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', maxWidth: '700px' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// FAQ
// =====================================================================
function DhFAQ({ data, openFaq, setOpenFaq }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FAFAFA', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <DhSectionHeader kicker="Preguntas frecuentes" title="Lo que" subtitle="me preguntan." intro={`Dudas comunes de quienes practican ${data.name.toLowerCase()}. Si no encuentras la tuya, WhatsApp directo.`} />
        <div style={{ maxWidth: '900px', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
          {data.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
                <button onClick={() => setOpenFaq(isOpen ? -1 : i)} style={{ width: '100%', padding: '1.75rem 0', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', display: 'grid', gridTemplateColumns: '60px 1fr 40px', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.875rem', fontWeight: 700, color: isOpen ? '#C9A55A' : 'rgba(10,10,10,0.3)', transition: 'color 0.3s' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)', fontWeight: 600, fontFamily: 'Space Grotesk', letterSpacing: '-0.01em', lineHeight: 1.3, color: '#0A0A0A' }}>{faq.q}</div>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: `1px solid ${isOpen ? '#C9A55A' : 'rgba(10,10,10,0.15)'}`, background: isOpen ? '#C9A55A' : 'transparent', color: isOpen ? '#0A0A0A' : 'rgba(10,10,10,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', fontWeight: 300, transition: 'all 0.4s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', justifySelf: 'end' }}>+</div>
                </button>
                <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 40px', gap: '1.5rem', paddingBottom: '1.75rem' }}>
                      <div></div>
                      <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(10,10,10,0.7)', maxWidth: '700px' }}>{faq.a}</p>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// CTA
// =====================================================================
function DhCTA({ data, onNavigate }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          background: 'linear-gradient(135deg, #C9A55A 0%, #B8943F 100%)',
          color: '#0A0A0A',
          padding: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }} className="dh-cta-grid">
          <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '60%', height: '140%', background: 'linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.05) 50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1.5rem' }}>{data.name} · Fisioterapia especializada</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.03em', fontFamily: 'Space Grotesk', marginBottom: '1.5rem' }}>{data.ctaTitle}<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>{data.ctaSub}</span></h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.55, opacity: 0.85, maxWidth: '520px' }}>{data.ctaDesc}</p>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button onClick={() => onNavigate('fisioterapia')} style={{ background: '#0A0A0A', color: '#FFFFFF', border: 'none', padding: '1.5rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Space Grotesk', transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>Agendar valoración<span>→</span></button>
            <button style={{ background: 'transparent', color: '#0A0A0A', border: '1px solid rgba(10,10,10,0.4)', padding: '1.5rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Space Grotesk', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.color = '#C9A55A'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0A0A0A'; }}>WhatsApp</button>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .dh-cta-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// =====================================================================
// PAGE BUILDER
// =====================================================================
function DeporteHubPage({ data, onNavigate }) {
  const [openFaq, setOpenFaq] = React.useState(0);
  return (
    <main>
      <DhHero data={data} onNavigate={onNavigate} />
      <DhWhyMe data={data} />
      <DhInjuries data={data} onNavigate={onNavigate} />
      <DhCauses data={data} />
      <DhReturn data={data} />
      <DhFAQ data={data} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <DhCTA data={data} onNavigate={onNavigate} />
    </main>
  );
}

if (typeof window !== "undefined") window.DeporteHubPage = DeporteHubPage;
/* ==================== deporte-hub-data.jsx ==================== */
// DEPORTE HUB DATA - Datos de los 4 hubs deportivos

const WEIGHTLIFTING_DATA = {
  name: 'Weightlifting', bigWord: 'BARRA.', kicker: 'Levantadores · Bogotá', iconKind: 'weightlifting',
  heroTitle: 'Vuelve a la barra.', heroSub: 'Sin compensar.',
  heroDesc: 'Fisioterapia para weightlifting por un levantador activo: lesiones de la sentadilla, el snatch y el clean & jerk. Entiendo la recepción profunda porque la entreno.',
  stats: [
    { value: '90+', suffix: 'atletas', label: 'Levantadores', desc: 'Halterofilia y powerlifting' },
    { value: '6', suffix: 'años', label: 'Entrenando', desc: 'Atleta activo de la barra' },
    { value: '5', suffix: '', label: 'Lesiones top', desc: 'Cubren la mayoría' },
    { value: '4—10', suffix: 'sem', label: 'Recuperación', desc: 'Promedio típico' },
  ],
  whyKicker: 'Por qué yo', whyTitle: 'Un fisio que', whySub: 'recibe profundo.',
  whyIntro: 'Las lesiones de la barra no son misterio. Son técnica que colapsa bajo carga o cargas que suben más rápido que el tejido. Y se previenen.',
  whyParas: [
    'Sé lo que es <strong>fallar un clean al 90%</strong>, la tensión lumbar de un peso muerto pesado, la posición overhead del jerk que castiga el hombro. La barra es parte de mi semana — no la leí en un manual.',
    'Esa experiencia cambia el diagnóstico. Cuando me dices que te duele la muñeca en el front squat o la cadera al recibir el clean, sé exactamente en qué punto del levantamiento falla tu mecánica, y qué movilidad o fuerza te está faltando.',
    'Mi enfoque no es "baja el peso y ya". Es identificar el patrón técnico o el déficit de movilidad que te rompe, corregirlo, y devolverte a la barra levantando más que antes — sin compensaciones.',
  ],
  whyQuote: 'La barra no perdona el déficit de movilidad. Lo que no resuelves en el calentamiento, lo pagas en el 1RM.',
  injTitle: 'Las de', injSub: 'la barra.',
  injIntro: 'Cinco lesiones concentran lo que veo en levantadores. Cada una ligada a un levantamiento o posición específica.',
  injuries: [
    { name: 'Dolor lumbar', gesture: 'Peso muerto, sentadilla pesada', freq: 'Alta', page: 'ciatica' },
    { name: 'Tendinitis del manguito', gesture: 'Snatch, jerk, posición overhead', freq: 'Alta', page: 'hombro' },
    { name: 'Dolor de muñeca', gesture: 'Front squat, recepción del clean', freq: 'Media', page: null },
    { name: 'Pubalgia', gesture: 'Recepción profunda, apertura de cadera', freq: 'Media', page: 'pubalgia' },
    { name: 'Tendinitis rotuliana', gesture: 'Sentadilla profunda repetida', freq: 'Media', page: 'tendinitis' },
  ],
  causesTitle: 'No es', causesSub: 'solo el peso.',
  causesIntro: 'El peso importa, pero rara vez es la causa única. Cuatro factores explican la mayoría de lesiones de la barra.',
  causes: [
    { title: 'Carga', desc: 'Subir el 1RM más rápido de lo que el tejido adapta. Ego en la barra. Sin descarga ni periodización. La causa #1.' },
    { title: 'Movilidad', desc: 'Tobillo, cadera o hombro rígidos que impiden la posición correcta. El cuerpo compensa en la articulación equivocada y ahí aparece la lesión.' },
    { title: 'Técnica bajo fatiga', desc: 'La técnica colapsa en las últimas repeticiones pesadas. La pelvis se mete, el codo cae, la rodilla se va. Y el tejido paga.' },
    { title: 'Déficit de fuerza', desc: 'Una cadena débil obliga a otra a compensar. Lumbar que suple a glúteo débil, antebrazo que no soporta la muñeca. El eslabón débil cede.' },
  ],
  returnWord: 'A LA BARRA.', returnKicker: 'Return to platform', returnTitle: 'Vuelves a levantar.', returnSub: 'Progresivo.',
  returnIntro: 'No es "ya puedes cargar". Es reconstruir la tolerancia a la carga y la posición, levantamiento por levantamiento, sin recaer.',
  returnSteps: [
    { label: 'Fase 1', title: 'Sin el gesto lesivo.', desc: 'Mantienes el entrenamiento que no compromete la lesión. Si es el hombro, trabajas piernas; si es lumbar, tren superior. No paras — adaptas.' },
    { label: 'Fase 2', title: 'Patrón corregido.', desc: 'Reintroducimos el levantamiento con técnica revisada y carga ligera. Primero la posición perfecta, después la intensidad.' },
    { label: 'Fase 3', title: 'Carga progresiva.', desc: 'Subimos el peso de forma gradual y periodizada, monitoreando la respuesta del tejido. El cuerpo reaprende a tolerar la carga pesada.' },
    { label: 'Fase 4', title: 'Vuelta al 1RM.', desc: 'Retorno a los levantamientos máximos, ahora con mejor movilidad y mecánica que antes de lesionarte. Más fuerte, no solo recuperado.' },
  ],
  faqs: [
    { q: '¿Tengo que bajar el peso por mi lesión?', a: 'Temporalmente sí, pero el objetivo es volver a tu carga máxima — y superarla. Reducir el peso es parte del proceso de readaptación, no una rendición. Volver al 1RM con el patrón corregido es la meta. Parar del todo rara vez es necesario.' },
    { q: '¿Cuánto tiempo paro de entrenar?', a: 'Idealmente cero días de parón total. Lo que cambia es QUÉ entrenas. Una lesión de hombro no impide trabajar sentadilla; una lumbar no impide press de banca. Adaptamos el estímulo. Solo lesiones agudas severas requieren descanso completo, y son pocas.' },
    { q: '¿Es la técnica o es el peso lo que me lesionó?', a: 'Casi siempre es la combinación: técnica que colapsa bajo una carga que subió demasiado rápido. Evalúo tu mecánica de levantamiento real y tu historial de cargas. Muchas veces el problema no es la técnica en sí, sino la falta de movilidad que te impide ejecutarla bajo peso.' },
    { q: '¿Necesito mejorar mi movilidad?', a: 'Probablemente. La mayoría de lesiones de weightlifting tienen un componente de movilidad limitada — tobillo que no deja recibir profundo, hombro que no llega al overhead, cadera que no abre. Trabajamos la movilidad específica que tu levantamiento necesita.' },
    { q: '¿Las muñequeras y el cinturón previenen lesiones?', a: 'Ayudan a soportar la carga en levantamientos pesados, pero no corrigen la causa. Una muñequera no arregla una muñeca débil ni un cinturón un core deficiente. Son herramientas de soporte para el 1RM, no sustitutos del fortalecimiento.' },
    { q: '¿Atiendes powerlifting y halterofilia?', a: 'Ambos. Aunque los levantamientos difieren (sentadilla/banca/peso muerto vs snatch/clean & jerk), los principios de diagnóstico y readaptación son los mismos. Conozco las demandas específicas de cada disciplina y adapto el plan a tu deporte de fuerza.' },
  ],
  ctaTitle: 'Vuelves a la barra.', ctaSub: 'Más fuerte.',
  ctaDesc: 'Primera sesión: evaluación de tu levantamiento + diagnóstico + plan de retorno a la carga. 60 min. Por un fisio que entrena la barra, no que leyó sobre ella.',
};

const CROSSFIT_DATA = {
  name: 'CrossFit', bigWord: 'CROSSFIT.', kicker: 'CrossFitters · Bogotá', iconKind: 'crossfit',
  heroTitle: 'Vuelve al box.', heroSub: 'Sin miedo al snatch.',
  heroDesc: 'Fisioterapia para CrossFit por un crossfitter activo: lesiones del WOD, movilidad overhead, return to box. Entiendo el kipping porque lo hago.',
  stats: [
    { value: '120+', suffix: 'atletas', label: 'CrossFitters', desc: 'Recreacionales y RX' },
    { value: '8', suffix: 'boxes', label: 'Partners', desc: 'Acuerdos activos' },
    { value: '6', suffix: '', label: 'Lesiones top', desc: 'Cubren el 90%' },
    { value: '7', suffix: 'años', label: 'Entrenando CF', desc: 'Atleta activo' },
  ],
  whyKicker: 'Por qué yo', whyTitle: 'Un fisio que', whySub: 'falla cleans.',
  whyIntro: 'La diferencia entre un fisio que leyó sobre CrossFit y uno que entrena cada semana se nota en el primer minuto de la consulta.',
  whyParas: [
    'Sé lo que es <strong>fallar un clean al 90%</strong>, el dolor de hombro después de 100 kipping pull-ups, la tirantez de cadera tras 150 wall balls. No te explico el CrossFit — lo entreno.',
    'Esa experiencia cambia el diagnóstico. Cuando me dices que te duele el hombro en el muscle-up, sé exactamente en qué fase del movimiento, qué músculo compensa, y qué error técnico probablemente lo causó. No adivino.',
    'Mi consultorio está pensado para el crossfitter: evaluamos tu técnica real, no movimientos aislados. Y el plan de retorno te devuelve al WOD escalando inteligente, sin perder tu progreso.',
  ],
  whyQuote: 'La técnica perfecta no existe si tu volumen supera tu capacidad de recuperación.',
  injTitle: 'Las del', injSub: 'WOD.',
  injIntro: 'Seis lesiones cubren el 90% de lo que veo en CrossFitters. Cada una ligada a un movimiento específico.',
  injuries: [
    { name: 'Tendinitis del manguito', gesture: 'Snatch, muscle-up, HSPU', freq: 'Alta', page: 'hombro' },
    { name: 'Dolor lumbar', gesture: 'Deadlift, kettlebell swing', freq: 'Alta', page: 'ciatica' },
    { name: 'Dolor de muñeca', gesture: 'Front squat, HSPU', freq: 'Media', page: null },
    { name: 'Epitrocleítis (codo)', gesture: 'Toes-to-bar, muscle-up', freq: 'Media', page: null },
    { name: 'Tendinitis rotuliana', gesture: 'Box jumps, wall balls', freq: 'Media', page: 'tendinitis' },
    { name: 'Pubalgia', gesture: 'Sentadilla profunda, sprint', freq: 'Media', page: 'pubalgia' },
  ],
  causesTitle: 'No es', causesSub: 'solo técnica.',
  causesIntro: 'La técnica importa, pero rara vez es la causa única. Cuatro factores explican la mayoría de lesiones del box.',
  causes: [
    { title: 'Volumen', desc: 'Escalar el volumen antes que la técnica. Pasar de 3 a 6 WODs sin descarga. La causa #1 que veo en el box.' },
    { title: 'Movilidad', desc: 'Posición overhead limitada, tobillo rígido, cadera tensa. El cuerpo compensa en la articulación equivocada.' },
    { title: 'Fatiga', desc: 'Los WODs son contra reloj. La técnica colapsa con la fatiga — y ahí aparece la lesión, en la última ronda.' },
    { title: 'Ego', desc: 'Subir RX cuando deberías escalar. Más peso del que tu patrón soporta. La barra no perdona el ego.' },
  ],
  returnWord: 'AL BOX.', returnKicker: 'Return to box', returnTitle: 'Vuelves al WOD.', returnSub: 'Escalando inteligente.',
  returnIntro: 'No es "ya puedes entrenar". Es reintroducir los movimientos de forma progresiva, escalando lo justo para no recaer.',
  returnSteps: [
    { label: 'Fase 1', title: 'Sin el gesto lesivo.', desc: 'Mantienes el resto del entrenamiento, eliminando solo el movimiento que provoca dolor. No paras de entrenar — escalas.' },
    { label: 'Fase 2', title: 'Patrón corregido.', desc: 'Reintroducimos el movimiento con técnica revisada y carga reducida. Primero el patrón, luego la intensidad.' },
    { label: 'Fase 3', title: 'Volumen progresivo.', desc: 'Aumentamos repeticiones y carga gradualmente, monitoreando la respuesta. El tejido reaprende a tolerar el volumen del WOD.' },
    { label: 'Fase 4', title: 'RX sin miedo.', desc: 'Vuelta completa al WOD a tu nivel, ahora con mejor mecánica que antes de lesionarte. Más fuerte, no solo recuperado.' },
  ],
  faqs: [
    { q: '¿Tengo que dejar de hacer CrossFit por mi lesión?', a: 'Casi nunca. La mayoría de las veces escalamos: eliminas el movimiento problemático temporalmente y mantienes el resto. Parar del todo atrofia y desmotiva. El objetivo es que sigas en el box mientras nos recuperamos.' },
    { q: '¿Cuánto tiempo paro de entrenar?', a: 'Idealmente cero días de parón total. Lo que cambia es QUÉ entrenas. Una lesión de hombro no impide trabajar piernas y core. Modificamos el estímulo, no lo eliminamos. Solo en lesiones agudas severas mandamos descanso completo, y son pocas.' },
    { q: '¿Puedo seguir haciendo cardio mientras me recupero?', a: 'Sí, casi siempre. El cardio sin impacto (bici, remo si no afecta la lesión, assault bike) mantiene tu motor mientras el tejido se recupera. Adaptamos el tipo de cardio a tu lesión específica.' },
    { q: '¿Cómo escalar el WOD durante el regreso?', a: 'Esa es justo parte de mi trabajo. Te doy escalas específicas para cada movimiento según tu fase: sustituir kipping por strict, reducir altura de box, cambiar el rango de movimiento. Escalar bien es una habilidad, no una rendición.' },
    { q: '¿Cuáles son los movimientos más lesivos del CrossFit?', a: 'No hay movimientos "malos", hay cargas mal gestionadas. Dicho eso, los que más lesiones generan por mala técnica o exceso de volumen: kipping (hombro), deadlift (lumbar), box jumps (rodilla/Aquiles), HSPU y snatch (hombro/muñeca).' },
    { q: '¿Necesito cambiar mi técnica para no lesionarme?', a: 'A veces sí, a veces es cuestión de volumen y movilidad. Evalúo tu técnica real y te digo qué ajustar. Muchas veces el problema no es la técnica sino la falta de movilidad que te impide ejecutarla bien. Trabajamos ambas.' },
    { q: '¿Atiendes en mi mismo box?', a: 'Trabajo con varios boxes de Bogotá y mi consultorio está dentro de uno. Tengo acuerdos con 8 boxes partners. Si entrenas en alguno, pregunta — es posible que ya tengamos convenio. Si no, podemos coordinar.' },
  ],
  ctaTitle: 'Vuelves al box.', ctaSub: 'Más fuerte.',
  ctaDesc: 'Primera sesión: evaluación de tu gesto + diagnóstico + plan de retorno al WOD. 60 min. Por un fisio que entrena CrossFit, no que leyó sobre él.',
};

const BJJ_DATA = {
  name: 'BJJ', bigWord: 'BJJ.', kicker: 'Grapplers · Bogotá', iconKind: 'bjj',
  heroTitle: 'Vuelve al mat.', heroSub: 'Sin dejar tu juego.',
  heroDesc: 'Fisioterapia para BJJ por un grappler activo: codo, hombro, cuello y rodilla. Entiendo el mat porque ruedo.',
  stats: [
    { value: '60+', suffix: 'grapplers', label: 'Tratados', desc: 'Gi y no-gi' },
    { value: '3', suffix: 'academias', label: 'Partners', desc: 'Acuerdos activos' },
    { value: '7', suffix: '', label: 'Lesiones top', desc: 'Las más comunes' },
    { value: '5', suffix: 'años', label: 'Entrenando BJJ', desc: 'Practicante activo' },
  ],
  whyKicker: 'Por qué yo', whyTitle: 'Un fisio que', whySub: 'rueda.',
  whyIntro: 'El jiu-jitsu castiga cuello, hombro y rodilla de formas muy específicas que solo entiendes si has pasado horas en el mat.',
  whyParas: [
    'Conozco la tensión de <strong>defender una llave de rodilla</strong>, el latigazo cervical de un mal mata-león, la sobrecarga de hombro de postear mil veces. He sentido el codo después de defender armbars toda una clase.',
    'Esa experiencia cambia cómo trato a un grappler. No te digo "deja el BJJ". Entiendo que el mat es parte de tu vida. Y sé que las lesiones del grappling tienen patrones — la guardia que tensa la rodilla, el agarre que castiga el codo.',
    'Mi enfoque: tratar la lesión, corregir el patrón de movimiento o la mecánica defensiva que la causó, y devolverte a rodar. Con longevidad — para que entrenes 10 años más, no 10 meses.',
  ],
  whyQuote: 'El BJJ no perdona la rigidez. La movilidad de cadera y columna es tu mejor defensa contra la lesión.',
  injTitle: 'Las del', injSub: 'mat.',
  injIntro: 'Siete lesiones concentran lo que veo en grapplers. Cada una ligada a una posición o técnica específica.',
  injuries: [
    { name: 'Epitrocleítis (codo de armbar)', gesture: 'Defender armbars, agarres', freq: 'Alta', page: null },
    { name: 'Lesiones de hombro', gesture: 'Kimura, americana, postear', freq: 'Alta', page: 'hombro' },
    { name: 'Cuello y trapecio', gesture: 'Presiones, guardias, mata-león', freq: 'Alta', page: null },
    { name: 'Lesión de menisco', gesture: 'Rodilla en guardia, reaping', freq: 'Media', page: null },
    { name: 'Dedos', gesture: 'Agarre del gi', freq: 'Media', page: null },
    { name: 'Oreja de coliflor', gesture: 'Fricción de orejas', freq: 'Media', page: null },
    { name: 'Cervicalgia por torsión', gesture: 'Escapes, inversiones', freq: 'Media', page: 'ciatica' },
  ],
  causesTitle: 'No es', causesSub: 'solo rodar duro.',
  causesIntro: 'El grappling lesiona distinto. Cuatro factores explican la mayoría de lesiones del mat.',
  causes: [
    { title: 'Volumen', desc: 'Rodar 5—6 veces por semana sin descarga ni recuperación. El cuerpo no distingue entrenamiento de competición — acumula.' },
    { title: 'Defensa tardía', desc: 'Tapear tarde por ego en sparring. Esperar al último segundo en una llave es cómo se rompen codos y hombros.' },
    { title: 'Rigidez', desc: 'Cadera y columna tensas obligan a otras articulaciones a compensar. El grappler rígido se lesiona más que el flexible.' },
    { title: 'Falta de fuerza', desc: 'El BJJ es técnico, pero sin fuerza de soporte el tejido cede. El strength & conditioning previene, no estorba.' },
  ],
  returnWord: 'AL MAT.', returnKicker: 'Return to roll', returnTitle: 'Vuelves a rodar.', returnSub: 'Con longevidad.',
  returnIntro: 'No es "ya puedes rodar". Es reintroducir el sparring de forma progresiva, protegiendo la zona lesionada mientras recuperas confianza.',
  returnSteps: [
    { label: 'Fase 1', title: 'Solo técnica.', desc: 'Drilling sin resistencia, movimientos controlados. Mantienes el contacto con el mat sin el riesgo del sparring intenso.' },
    { label: 'Fase 2', title: 'Sparring suave.', desc: 'Rolls al 40—50% con compañeros de confianza, evitando posiciones que comprometan la zona. Flow rolling.' },
    { label: 'Fase 3', title: 'Posiciones controladas.', desc: 'Reintroducimos progresivamente las posiciones que evitabas, con la mecánica defensiva corregida.' },
    { label: 'Fase 4', title: 'Roll completo.', desc: 'Vuelta al sparring a tu intensidad habitual, ahora con mejor movilidad y un patrón defensivo que protege la lesión.' },
  ],
  faqs: [
    { q: '¿Tengo que dejar el BJJ por mi codo?', a: 'Casi nunca. La epitrocleítis del grappler se trata mientras sigues entrenando técnica. Lo que ajustamos es el sparring y ciertos agarres temporalmente. Parar del todo rara vez es necesario — modificamos la práctica.' },
    { q: '¿Cuánto descanso del mat por una lesión de hombro?', a: 'Depende de la severidad. Lesiones leves: sigues drillando, evitas posiciones de riesgo (kimura, americana). Moderadas: 2—4 semanas sin sparring, manteniendo técnica. Severas se evalúan caso a caso. Rara vez parón completo.' },
    { q: '¿Puedo entrenar técnica sin sparring durante la recuperación?', a: 'Sí, y es lo ideal. El drilling sin resistencia mantiene tu juego afilado, tu acondicionamiento y tu conexión con el mat mientras el tejido se recupera. Es la mejor forma de no perder progreso durante una lesión.' },
    { q: '¿Cómo prevenir la oreja de coliflor?', a: 'Protección (cascos/headgear) durante sparring intenso, drenaje inmediato si se inflama (no esperes), y evitar la fricción repetida. Una vez formada es permanente sin cirugía. La prevención es la única solución real — actúa rápido al primer signo.' },
    { q: '¿Vale la pena el strength & conditioning para BJJ?', a: 'Absolutamente. El BJJ es técnico, pero la fuerza de soporte previene lesiones y mejora tu juego. No te hará rígido si lo haces bien. Trabajo de cuello, agarre, cadera y core específico para grappling reduce mucho el riesgo de lesión.' },
    { q: '¿Cómo manejar lesiones recurrentes de dedos?', a: 'Los dedos del grappler sufren por el agarre del gi. Tape preventivo, fortalecimiento de antebrazo y agarre, y descanso de los agarres más agresivos cuando hay molestia. Las lesiones recurrentes indican que hay que fortalecer la base, no solo tapear.' },
    { q: '¿Atiendes en mi misma academia?', a: 'Trabajo con varias academias de Bogotá y tengo acuerdos con 3 partners. Si entrenas en alguna, pregunta — puede que ya tengamos convenio. Conozco el ambiente del mat, así que la consulta es entre grapplers.' },
  ],
  ctaTitle: 'Vuelves a rodar.', ctaSub: 'Por más años.',
  ctaDesc: 'Primera sesión: evaluación de tu mecánica + diagnóstico + plan de retorno al mat. 60 min. Por un fisio que rueda, no que vio videos.',
};

const BOXEO_DATA = {
  name: 'Boxeo', bigWord: 'BOXEO.', kicker: 'Boxeadores · Bogotá', iconKind: 'boxeo',
  heroTitle: 'Vuelve al', heroSub: 'ring.',
  heroDesc: 'Fisioterapia para boxeo: mano, muñeca, hombro y cuello. Tratamiento que entiende las demandas del golpeo, la guardia y el trabajo de saco.',
  stats: [
    { value: '70+', suffix: 'boxeadores', label: 'Tratados', desc: 'Amateur y competitivos' },
    { value: '4', suffix: 'gimnasios', label: 'Partners', desc: 'Acuerdos activos' },
    { value: '5', suffix: '', label: 'Lesiones top', desc: 'Las más comunes' },
    { value: '4—10', suffix: 'sem', label: 'Recuperación', desc: 'Promedio típico' },
  ],
  whyKicker: 'Por qué yo', whyTitle: 'Un fisio que', whySub: 'entiende el golpeo.',
  whyIntro: 'El boxeo castiga manos, muñecas y hombros de formas muy específicas. La lesión del boxeador necesita un fisio que entienda el gesto del golpe.',
  whyParas: [
    'El boxeo tiene un patrón de lesión propio: la <strong>mano y la muñeca</strong> que absorben el impacto del golpe, el hombro que trabaja miles de repeticiones de jab y cross, el cuello que encaja. Cada golpe es carga sobre una cadena que hay que entender.',
    'He tratado a suficientes boxeadores amateur y competitivos para conocer sus gestos críticos: el cierre del puño al impacto, la rotación del hombro en el cross, la tensión cervical de la defensa. Cuando me describes el dolor, sé qué parte del golpeo lo provoca.',
    'Mi enfoque no es "deja de boxear". Es identificar el patrón —el vendaje deficiente, la técnica de puño, el déficit de movilidad de hombro— que te rompe, corregirlo, y devolverte al ring golpeando sin dolor.',
  ],
  whyQuote: 'En boxeo, una muñeca mal alineada al impacto es una lesión esperando ocurrir. La técnica del puño protege tanto como pega.',
  injTitle: 'Las del', injSub: 'ring.',
  injIntro: 'Cinco lesiones concentran lo que veo en boxeadores. Cada una ligada al golpeo, la guardia o el impacto.',
  injuries: [
    { name: 'Lesiones de mano y muñeca', gesture: 'Impacto del golpe, mal vendaje', freq: 'Alta', page: null },
    { name: 'Tendinitis del manguito', gesture: 'Jab y cross repetidos', freq: 'Alta', page: 'hombro' },
    { name: 'Cervicalgia', gesture: 'Encajar golpes, defensa', freq: 'Media', page: 'ciatica' },
    { name: 'Epitrocleítis (codo)', gesture: 'Golpeo repetido, saco pesado', freq: 'Media', page: null },
    { name: 'Dolor lumbar', gesture: 'Rotación de tronco en el golpeo', freq: 'Media', page: 'ciatica' },
  ],
  causesTitle: 'No es', causesSub: 'solo pegar duro.',
  causesIntro: 'El boxeo lesiona distinto. Cuatro factores explican la mayoría de lesiones del ring.',
  causes: [
    { title: 'Técnica del puño', desc: 'Muñeca mal alineada o puño mal cerrado al impacto. La fuerza del golpe se disipa en la articulación equivocada. La causa #1 de lesiones de mano.' },
    { title: 'Vendaje deficiente', desc: 'Vendas mal puestas que no protegen los huesos del metacarpo ni estabilizan la muñeca. La protección empieza antes del primer golpe.' },
    { title: 'Volumen', desc: 'Miles de golpes al saco y a las manoplas sin descarga. La carga repetida sobre hombro, codo y muñeca acumula hasta que algo cede.' },
    { title: 'Movilidad de hombro', desc: 'Hombro rígido o con desbalance del manguito que no soporta el volumen de golpeo. El tendón sobrecargado paga el precio.' },
  ],
  returnWord: 'AL RING.', returnKicker: 'Return to ring', returnTitle: 'Vuelves a golpear.', returnSub: 'Sin dolor.',
  returnIntro: 'No es "ya puedes pegar". Es reintroducir el golpeo de forma progresiva, del trabajo técnico al sparring, protegiendo la zona lesionada.',
  returnSteps: [
    { label: 'Fase 1', title: 'Sin impacto.', desc: 'Trabajo técnico de sombra y desplazamientos sin golpear superficies. Mantienes la mecánica y el acondicionamiento sin cargar la lesión.' },
    { label: 'Fase 2', title: 'Saco ligero.', desc: 'Reintroducción del golpeo en saco blando o manoplas suaves, con técnica de puño corregida y vendaje optimizado. Carga controlada.' },
    { label: 'Fase 3', title: 'Golpeo progresivo.', desc: 'Aumentamos la intensidad y el volumen del golpeo gradualmente, monitoreando la respuesta de mano, muñeca y hombro tras cada sesión.' },
    { label: 'Fase 4', title: 'Vuelta al sparring.', desc: 'Retorno al sparring y al ring a tu intensidad habitual, ahora con mejor técnica de puño y la movilidad que protege la zona lesionada.' },
  ],
  faqs: [
    { q: '¿Tengo que dejar de boxear por mi lesión de mano?', a: 'Casi nunca del todo. Trabajamos la técnica sin impacto (sombra, desplazamientos) mientras la mano se recupera, y reintroducimos el golpeo de forma progresiva. Parar por completo rara vez es necesario — adaptamos el entrenamiento. Lo que sí corregimos es la causa: técnica de puño y vendaje.' },
    { q: '¿Por qué me duele la muñeca al golpear?', a: 'Casi siempre por una mala alineación de la muñeca al impacto o un vendaje que no la estabiliza. La fuerza del golpe debe transmitirse en línea recta por los nudillos; si la muñeca se dobla, la articulación absorbe la carga y se lesiona. Corregir la técnica del puño es clave.' },
    { q: '¿El vendaje realmente previene lesiones?', a: 'Mucho. Un buen vendaje protege los huesos del metacarpo, estabiliza la muñeca y da soporte a los nudillos. Un vendaje deficiente es una de las causas más comunes de lesiones de mano en boxeo. Te enseño a vendarte bien como parte de la prevención.' },
    { q: '¿Puedo seguir entrenando con dolor de hombro?', a: 'Con modificaciones, casi siempre. Reducimos temporalmente el volumen de golpeo que carga el hombro y mantenemos el trabajo de piernas, core y técnica. El hombro del boxeador necesita fortalecimiento del manguito, no reposo total.' },
    { q: '¿Cómo prevenir lesiones de los nudillos?', a: 'Técnica de puño correcta (impacto con los dos primeros nudillos, muñeca firme), vendaje adecuado, progresión del volumen de golpeo, y fortalecimiento de muñeca y antebrazo. La "mano de boxeador" (lesión de los tendones extensores sobre el nudillo) se previene con técnica, no con más dureza.' },
    { q: '¿Atiendes boxeo amateur y competitivo?', a: 'Ambos. La mayoría de mis pacientes de boxeo son amateur comprometidos y competidores de gimnasio, aunque las lesiones y demandas son similares en todos los niveles. Tengo acuerdos con 4 gimnasios. No necesitas ser profesional, solo entrenar en serio.' },
  ],
  ctaTitle: 'Vuelves a golpear.', ctaSub: 'Sin dolor.',
  ctaDesc: 'Primera sesión: evaluación de tu golpeo + diagnóstico + plan de retorno al ring. 60 min. Fisioterapia que entiende las demandas del boxeo.',
};

function WeightliftingPage({ onNavigate }) { return <window.DeporteHubPage data={WEIGHTLIFTING_DATA} onNavigate={onNavigate} />; }
function CrossFitPage({ onNavigate }) { return <window.DeporteHubPage data={CROSSFIT_DATA} onNavigate={onNavigate} />; }
function BJJPage({ onNavigate }) { return <window.DeporteHubPage data={BJJ_DATA} onNavigate={onNavigate} />; }
function BoxeoPage({ onNavigate }) { return <window.DeporteHubPage data={BOXEO_DATA} onNavigate={onNavigate} />; }

if (typeof window !== "undefined") window.WeightliftingPage = WeightliftingPage;
if (typeof window !== "undefined") window.CrossFitPage = CrossFitPage;
if (typeof window !== "undefined") window.BJJPage = BJJPage;
if (typeof window !== "undefined") window.BoxeoPage = BoxeoPage;
/* ==================== lesion-pillar.jsx ==================== */
// LESIÓN PILLAR - Componente reutilizable para pillars de lesión secundarios
// Genera: Bursitis, Condromalacia, Contractura, Periostitis, Epitrocleítis

function LpSectionHeader({ kicker, title, subtitle, intro, dark }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
      marginBottom: '4rem', alignItems: 'flex-end',
    }} className="lp-sh-header">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>{kicker}</div>
        </div>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1,
          letterSpacing: '-0.03em', fontFamily: 'Space Grotesk', color: dark ? '#FFFFFF' : '#0A0A0A',
        }}>{title}<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{subtitle}</span></h2>
      </div>
      {intro && (
        <p style={{ fontSize: '1.0625rem', color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.6)', lineHeight: 1.55, maxWidth: '460px' }}>{intro}</p>
      )}
      <style>{`@media (max-width: 900px) { .lp-sh-header { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// HERO
function LpHero({ data, onNavigate }) {
  return (
    <section style={{ padding: '12rem 0 6rem', background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', right: '-3%', bottom: '-3rem',
        fontSize: 'clamp(6rem, 14vw, 17rem)', fontFamily: 'Space Grotesk', fontWeight: 700,
        color: 'rgba(201,165,90,0.05)', lineHeight: 0.85, letterSpacing: '-0.05em', whiteSpace: 'nowrap', pointerEvents: 'none',
      }}>{data.bigWord}</div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem', fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
          <a onClick={() => onNavigate('lesiones')} style={{ color: 'rgba(10,10,10,0.5)', cursor: 'pointer', textDecoration: 'none' }}>Lesiones</a>
          <span style={{ color: 'rgba(10,10,10,0.25)' }}>/</span>
          <span style={{ color: '#C9A55A' }}>{data.name}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'flex-end' }} className="lp-hero-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '60px', height: '1px', background: '#C9A55A' }} />
              <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>{data.kicker}</div>
            </div>
            <h1 style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 6rem)', fontWeight: 700, lineHeight: 0.9,
              letterSpacing: '-0.04em', fontFamily: 'Space Grotesk', color: '#0A0A0A', marginBottom: '2.5rem',
            }}>{data.heroTitle}<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{data.heroSub}</span></h1>
            <p style={{ fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)', lineHeight: 1.55, color: 'rgba(10,10,10,0.65)', maxWidth: '620px', marginBottom: '2rem' }} dangerouslySetInnerHTML={{ __html: data.heroDesc }} />
            <button onClick={() => onNavigate('fisioterapia')} style={{
              background: '#0A0A0A', color: '#FFFFFF', border: 'none', padding: '1.25rem 2rem',
              fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: 'Space Grotesk', transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            }} onMouseEnter={(e) => { e.currentTarget.style.background = '#C9A55A'; e.currentTarget.style.color = '#0A0A0A'; }}
               onMouseLeave={(e) => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.color = '#FFFFFF'; }}>
              Agendar valoración<span>→</span>
            </button>
          </div>

          <div style={{ background: '#0A0A0A', color: '#FFFFFF', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#C9A55A' }} />
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A', marginBottom: '1.5rem' }}>TL;DR Clínico</div>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>{data.tldr}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#C9A55A', lineHeight: 1, marginBottom: '0.25rem' }}>{data.recovery}</div>
                <div style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Recuperación</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#C9A55A', lineHeight: 1, marginBottom: '0.25rem' }}>{data.complexity}</div>
                <div style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Complejidad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .lp-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// WHAT IS
function LpWhatIs({ data }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FAFAFA', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }} className="lp-wi-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Qué es realmente</div>
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.03em', fontFamily: 'Space Grotesk', color: '#0A0A0A', marginBottom: '2rem' }}>{data.whatTitle}<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{data.whatSub}</span></h2>
            {data.whatParas.map((p, i) => (
              <p key={i} style={{ fontSize: i === 0 ? '1.125rem' : '1.0625rem', lineHeight: i === 0 ? 1.7 : 1.65, color: i === 0 ? 'rgba(10,10,10,0.75)' : 'rgba(10,10,10,0.65)', marginBottom: '1.5rem' }} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <div style={{ border: '1px solid rgba(10,10,10,0.08)', background: '#FFFFFF' }}>
            {data.facts.map((f, i) => (
              <div key={i} style={{ padding: '1.75rem 2rem', borderBottom: i < data.facts.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none', display: 'grid', gridTemplateColumns: '40px 1fr', gap: '1.25rem', alignItems: 'center' }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', fontWeight: 700, color: 'rgba(10,10,10,0.3)' }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div style={{ fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A', marginBottom: '0.375rem' }}>{f.label}</div>
                  <div style={{ fontSize: '1rem', color: '#0A0A0A', fontWeight: 500, lineHeight: 1.45 }}>{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .lp-wi-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// SYMPTOMS + RED FLAGS
function LpSymptoms({ data }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <LpSectionHeader kicker="Síntomas · Cómo se manifiesta" title="Cómo" subtitle="se siente." intro={data.symptomsIntro} />
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '0', border: '1px solid rgba(10,10,10,0.08)' }} className="lp-sym-grid">
          <div style={{ padding: '2.5rem 2rem', borderRight: '1px solid rgba(10,10,10,0.08)' }} className="lp-sym-list">
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(10,10,10,0.4)', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(10,10,10,0.08)' }}>Síntomas típicos · {data.symptoms.length}</div>
            {data.symptoms.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '1rem', padding: '1.125rem 0', borderBottom: i < data.symptoms.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', fontWeight: 700, color: '#C9A55A' }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.5, color: '#0A0A0A' }}>{s}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#0A0A0A', color: '#FFFFFF', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }} className="lp-sym-red">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#DC2626' }} />
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#DC2626', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>⚠ Banderas rojas</div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>{data.redFlagsIntro}</p>
            {data.redFlags.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', fontSize: '0.9375rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.85)', marginBottom: i < data.redFlags.length - 1 ? '0.875rem' : 0 }}>
                <div style={{ width: '8px', height: '8px', background: '#DC2626', marginTop: '0.4rem', flexShrink: 0 }} />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .lp-sym-grid { grid-template-columns: 1fr !important; } .lp-sym-list { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); } }`}</style>
    </section>
  );
}

// CAUSES
function LpCauses({ data }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FAFAFA', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <LpSectionHeader kicker="Causas · Por qué aparece" title={data.causesTitle} subtitle={data.causesSub} intro={data.causesIntro} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(10,10,10,0.08)', border: '1px solid rgba(10,10,10,0.08)' }} className="lp-cau-grid">
          {data.causes.map((c, i) => (
            <div key={i} style={{ padding: '2.5rem 2rem', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '220px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '3rem', fontWeight: 700, color: '#C9A55A', lineHeight: 0.85, letterSpacing: '-0.03em' }}>0{i + 1}</div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#0A0A0A' }}>{c.title}.</h3>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.55, color: 'rgba(10,10,10,0.7)' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .lp-cau-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// DIFFERENTIAL
function LpDifferential({ data }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <LpSectionHeader kicker="Diagnóstico diferencial" title={data.diffTitle} subtitle={data.diffSub} intro={data.diffIntro} />
        <div style={{ border: '1px solid rgba(10,10,10,0.08)', overflowX: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.2fr 1.4fr 2fr', background: '#0A0A0A', color: '#FFFFFF', minWidth: '720px' }}>
            {['Condición', 'Localización', 'Test clínico', 'Hallazgo clave'].map((h, i, arr) => (
              <div key={h} style={{ padding: '1.25rem 1.5rem', borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontSize: '0.625rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>{h}</div>
              </div>
            ))}
          </div>
          {data.diffRows.map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.2fr 1.4fr 2fr', borderTop: '1px solid rgba(10,10,10,0.06)', background: i === 0 ? 'rgba(201,165,90,0.04)' : '#FFFFFF', minWidth: '720px', transition: 'background 0.3s' }}
              onMouseEnter={(e) => { if (i !== 0) e.currentTarget.style.background = '#FAFAFA'; }}
              onMouseLeave={(e) => { if (i !== 0) e.currentTarget.style.background = '#FFFFFF'; }}>
              <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(10,10,10,0.06)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {i === 0 && <div style={{ width: '6px', height: '20px', background: '#C9A55A', flexShrink: 0 }} />}
                <div style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'Space Grotesk', letterSpacing: '-0.01em', color: '#0A0A0A' }}>{r.condition}</div>
              </div>
              <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(10,10,10,0.06)', fontSize: '0.9375rem', color: 'rgba(10,10,10,0.7)', display: 'flex', alignItems: 'center' }}>{r.location}</div>
              <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(10,10,10,0.06)', fontSize: '0.9375rem', color: 'rgba(10,10,10,0.7)', fontStyle: 'italic', display: 'flex', alignItems: 'center' }}>{r.test}</div>
              <div style={{ padding: '1.5rem', fontSize: '0.9375rem', color: '#0A0A0A', display: 'flex', alignItems: 'center' }}>{r.finding}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// TREATMENT
function LpTreatment({ data, activePhase, setActivePhase }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FAFAFA', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <LpSectionHeader kicker="Tratamiento · 4 fases" title={data.txTitle} subtitle={data.txSub} intro={data.txIntro} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'flex-start' }} className="lp-tx-grid">
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
            {data.phases.map((p, i) => {
              const isActive = activePhase === i;
              return (
                <button key={i} onClick={() => setActivePhase(i)} style={{
                  display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '1.25rem', alignItems: 'center',
                  padding: '1.75rem 0', background: 'none', border: 'none', borderBottom: '1px solid rgba(10,10,10,0.08)',
                  textAlign: 'left', cursor: 'pointer', color: 'inherit', position: 'relative',
                  paddingLeft: isActive ? '1rem' : '0', transition: 'padding 0.3s',
                }}>
                  {isActive && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: '#C9A55A' }} />}
                  <div style={{ fontFamily: 'Space Grotesk', fontSize: isActive ? '1rem' : '0.875rem', fontWeight: 700, color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.3)', transition: 'all 0.3s' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontSize: isActive ? '1.5rem' : '1.25rem', fontWeight: 700, fontFamily: 'Space Grotesk', letterSpacing: '-0.01em', color: isActive ? '#0A0A0A' : 'rgba(10,10,10,0.5)', transition: 'all 0.3s' }}>{p.title}</div>
                  <div style={{ fontSize: '1.25rem', color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.2)', transform: isActive ? 'translateX(0)' : 'translateX(-8px)', transition: 'all 0.3s' }}>→</div>
                </button>
              );
            })}
          </div>
          <div key={activePhase} style={{ background: '#FFFFFF', border: '1px solid rgba(10,10,10,0.08)', padding: '3rem', position: 'relative', minHeight: '380px', animation: 'lpTxFade 0.4s ease-out' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '2rem', fontFamily: 'Space Grotesk', fontSize: '8rem', fontWeight: 700, color: 'rgba(201,165,90,0.08)', lineHeight: 0.85, letterSpacing: '-0.04em' }}>0{activePhase + 1}</div>
            <div style={{ fontSize: '0.6875rem', color: '#C9A55A', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1rem', position: 'relative' }}>Fase {String(activePhase + 1).padStart(2, '0')} · {data.phases[activePhase].duration}</div>
            <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, color: '#0A0A0A', marginBottom: '1.5rem', position: 'relative' }}>{data.phases[activePhase].title}<span style={{ color: '#C9A55A' }}>.</span></h3>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'rgba(10,10,10,0.65)', maxWidth: '500px', position: 'relative' }}>{data.phases[activePhase].desc}</p>
          </div>
        </div>
      </div>
      <style>{`@keyframes lpTxFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } } @media (max-width: 900px) { .lp-tx-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// FAQ
function LpFAQ({ data, openFaq, setOpenFaq }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <LpSectionHeader kicker="Preguntas frecuentes" title="Lo que" subtitle="me preguntan." intro={`Dudas comunes sobre ${data.name.toLowerCase()}. Si no encuentras la tuya, WhatsApp directo.`} />
        <div style={{ maxWidth: '900px', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
          {data.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
                <button onClick={() => setOpenFaq(isOpen ? -1 : i)} style={{ width: '100%', padding: '1.75rem 0', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', display: 'grid', gridTemplateColumns: '60px 1fr 40px', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.875rem', fontWeight: 700, color: isOpen ? '#C9A55A' : 'rgba(10,10,10,0.3)', transition: 'color 0.3s' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)', fontWeight: 600, fontFamily: 'Space Grotesk', letterSpacing: '-0.01em', lineHeight: 1.3, color: '#0A0A0A' }}>{faq.q}</div>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: `1px solid ${isOpen ? '#C9A55A' : 'rgba(10,10,10,0.15)'}`, background: isOpen ? '#C9A55A' : 'transparent', color: isOpen ? '#0A0A0A' : 'rgba(10,10,10,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', fontWeight: 300, transition: 'all 0.4s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', justifySelf: 'end' }}>+</div>
                </button>
                <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 40px', gap: '1.5rem', paddingBottom: '1.75rem' }}>
                      <div></div>
                      <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(10,10,10,0.7)', maxWidth: '700px' }}>{faq.a}</p>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA
function LpCTA({ data, onNavigate }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FAFAFA', borderTop: '1px solid rgba(10,10,10,0.08)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          background: 'linear-gradient(135deg, #C9A55A 0%, #B8943F 100%)', color: '#0A0A0A', padding: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', overflow: 'hidden',
        }} className="lp-cta-grid">
          <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '60%', height: '140%', background: 'linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.05) 50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1.5rem' }}>{data.name} · Tratamiento deportivo</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.03em', fontFamily: 'Space Grotesk', marginBottom: '1.5rem' }}>{data.ctaTitle}<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>{data.ctaSub}</span></h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.55, opacity: 0.85, maxWidth: '520px' }}>{data.ctaDesc}</p>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button onClick={() => onNavigate('fisioterapia')} style={{ background: '#0A0A0A', color: '#FFFFFF', border: 'none', padding: '1.5rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Space Grotesk', transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>Agendar valoración<span>→</span></button>
            <button style={{ background: 'transparent', color: '#0A0A0A', border: '1px solid rgba(10,10,10,0.4)', padding: '1.5rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Space Grotesk', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.color = '#C9A55A'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0A0A0A'; }}>WhatsApp</button>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .lp-cta-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// RELATED
function LpRelated({ data, onNavigate }) {
  return (
    <section style={{ padding: '6rem 0', background: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Relacionado · Ver más</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(10,10,10,0.08)', border: '1px solid rgba(10,10,10,0.08)' }} className="lp-rel-grid">
          {data.related.map((r, i) => (
            <button key={i} onClick={() => onNavigate(r.page)} style={{ padding: '2rem', background: '#FFFFFF', border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'all 0.4s', display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '170px', color: 'inherit', fontFamily: 'inherit' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.querySelectorAll('[data-rel]').forEach(el => { if (el.dataset.rel === 'name') el.style.color = '#FFFFFF'; if (el.dataset.rel === 'zone') el.style.color = '#C9A55A'; if (el.dataset.rel === 'arrow') { el.style.color = '#C9A55A'; el.style.transform = 'translateX(8px)'; } }); }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.querySelectorAll('[data-rel]').forEach(el => { if (el.dataset.rel === 'name') el.style.color = '#0A0A0A'; if (el.dataset.rel === 'zone') el.style.color = 'rgba(10,10,10,0.5)'; if (el.dataset.rel === 'arrow') { el.style.color = 'rgba(10,10,10,0.3)'; el.style.transform = 'translateX(0)'; } }); }}>
              <div style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(10,10,10,0.4)' }}>{r.tag}</div>
              <h3 data-rel="name" style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', color: '#0A0A0A', transition: 'color 0.4s', lineHeight: 1.05 }}>{r.name}</h3>
              <div data-rel="zone" style={{ fontSize: '0.875rem', color: 'rgba(10,10,10,0.5)', transition: 'color 0.4s' }}>{r.zone}</div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>Ver</span>
                <span data-rel="arrow" style={{ fontSize: '1.5rem', color: 'rgba(10,10,10,0.3)', transition: 'all 0.4s', fontFamily: 'Space Grotesk' }}>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .lp-rel-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// PAGE BUILDER
function LesionPillarPage({ data, onNavigate }) {
  const [openFaq, setOpenFaq] = React.useState(0);
  const [activePhase, setActivePhase] = React.useState(0);
  return (
    <main>
      <LpHero data={data} onNavigate={onNavigate} />
      <LpWhatIs data={data} />
      <LpSymptoms data={data} />
      <LpCauses data={data} />
      <LpDifferential data={data} />
      <LpTreatment data={data} activePhase={activePhase} setActivePhase={setActivePhase} />
      <LpFAQ data={data} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <LpCTA data={data} onNavigate={onNavigate} />
      <LpRelated data={data} onNavigate={onNavigate} />
    </main>
  );
}

if (typeof window !== "undefined") window.LesionPillarPage = LesionPillarPage;
/* ==================== lesion-pillar-data.jsx ==================== */
// LESIÓN PILLAR DATA - Datos de los 5 pillars de lesión secundarios

const BURSITIS_DATA = {
  name: 'Bursitis', bigWord: 'BURSITIS.', kicker: 'Articular · Bolsa sinovial',
  heroTitle: 'Bursitis', heroSub: 'sin cronificar.',
  heroDesc: 'Inflamación de la bolsa sinovial que amortigua las articulaciones. <strong>Frecuente en hombro, cadera y rodilla.</strong> Se resuelve si se trata la causa, no solo la inflamación.',
  tldr: 'Inflamación de la bursa —la bolsa que reduce fricción en la articulación— por sobrecarga, presión o roce repetido. Hombro, cadera, rodilla y codo son las zonas típicas.',
  recovery: '3—6 sem', complexity: 'Media',
  whatTitle: 'No es', whatSub: 'la articulación.',
  whatParas: [
    'La bursitis es la <strong>inflamación de una bursa</strong> — pequeñas bolsas llenas de líquido que amortiguan el roce entre hueso, tendón y músculo. Cuando se irritan por sobrecarga o presión, se inflaman y duelen.',
    'No es un problema de la articulación en sí, sino de la estructura que la protege. Por eso el tratamiento no es "reposo y antiinflamatorio" sin más — hay que <strong>identificar qué está irritando la bursa</strong>: un gesto repetido, una presión mantenida, o un desbalance que genera roce anormal.',
    'Si solo se desinflama sin corregir la causa, vuelve. La bursitis recurrente casi siempre es una causa biomecánica no resuelta.',
  ],
  facts: [
    { label: 'Estructura', value: 'Bursa · bolsa sinovial de amortiguación' },
    { label: 'Zonas típicas', value: 'Hombro, cadera (trocantérea), rodilla, codo' },
    { label: 'Mecanismo', value: 'Sobrecarga, presión o roce repetido' },
    { label: 'Recuperación', value: '3—6 semanas con tratamiento de la causa' },
  ],
  symptomsIntro: 'La bursitis duele de forma característica: peor con la presión directa y con el movimiento que comprime la bursa.',
  symptoms: [
    'Dolor localizado que empeora con la presión directa',
    'Molestia al mover la articulación en cierto rango',
    'Sensación de hinchazón o calor local',
    'Dolor que empeora al apoyar (cadera/rodilla) o al dormir sobre el lado',
    'Rigidez tras periodos de inactividad',
    'Dolor que aumenta con la actividad repetitiva',
  ],
  redFlagsIntro: 'Si presentas estos signos, puede ser bursitis séptica (infectada) u otra patología. Consulta urgente.',
  redFlags: [
    'Fiebre + articulación caliente y muy hinchada',
    'Enrojecimiento intenso de la piel sobre la bursa',
    'Dolor severo que impide todo movimiento',
    'Malestar general o escalofríos',
    'Herida o pinchazo reciente en la zona',
  ],
  causesTitle: 'No es', causesSub: 'casualidad.',
  causesIntro: 'La bursitis tiene causa. Identificar cuál te aplica es lo que evita que se vuelva crónica.',
  causes: [
    { title: 'Sobrecarga repetida', desc: 'Gestos repetitivos que irritan la bursa una y otra vez. Lanzar, levantar overhead, correr. La causa más común en deportistas.' },
    { title: 'Presión mantenida', desc: 'Apoyo prolongado sobre la zona — codo en escritorio, rodilla al arrodillarse. La presión constante inflama la bursa.' },
    { title: 'Desbalance muscular', desc: 'Glúteo débil que genera roce anormal en la cadera, o desbalance escapular en el hombro. El roce repetido irrita.' },
    { title: 'Traumatismo', desc: 'Un golpe directo sobre la bursa puede inflamarla de forma aguda. Frecuente en deportes de contacto.' },
  ],
  diffTitle: 'No todo dolor', diffSub: 'es bursitis.',
  diffIntro: 'Varias condiciones producen dolor articular similar. Diferenciarlas define el tratamiento correcto.',
  diffRows: [
    { condition: 'Bursitis', location: 'Bursa (superficial)', test: 'Palpación + presión directa', finding: 'Dolor localizado en la bursa + empeora con presión' },
    { condition: 'Tendinopatía', location: 'Tendón', test: 'Contracción resistida', finding: 'Dolor con la contracción del músculo' },
    { condition: 'Artrosis', location: 'Cartílago articular', test: 'Rango + crepitación', finding: 'Rigidez + crujidos + dolor profundo' },
    { condition: 'Artritis', location: 'Articulación (inflamatoria)', test: 'Analítica + patrón', finding: 'Inflamación sistémica, varias articulaciones' },
  ],
  txTitle: 'Calmar y', txSub: 'corregir.',
  txIntro: 'La bursitis se trata en fases: bajar la inflamación primero, corregir la causa después. Sin lo segundo, recae.',
  phases: [
    { title: 'Diagnóstico', duration: 'Sesión 1', desc: 'Confirmar bursitis, localizar la bursa afectada, identificar la causa (gesto, presión, desbalance). Descartar infección y otras patologías.' },
    { title: 'Desinflamar', duration: 'Semanas 1—2', desc: 'Reducir la inflamación: modificar la actividad que la irrita, terapia manual, frío local. Reposo relativo de la zona, no absoluto.' },
    { title: 'Corregir', duration: 'Semanas 2—5', desc: 'Aquí se evita la recaída. Corregir el desbalance o el gesto que irritó la bursa. Fortalecimiento de la musculatura estabilizadora.' },
    { title: 'Volver', duration: 'Semanas 4—6', desc: 'Reintroducción progresiva de la actividad, con el patrón corregido. Vuelta al deporte sin que la bursa se vuelva a irritar.' },
  ],
  faqs: [
    { q: '¿La bursitis se cura sola?', a: 'A veces la fase aguda cede sola con reposo, pero si la causa persiste, vuelve. La bursitis recurrente es señal de que hay un problema biomecánico no resuelto. Tratar solo la inflamación sin corregir la causa es la razón #1 de cronificación.' },
    { q: '¿Necesito que me drenen el líquido?', a: 'Rara vez. La aspiración se reserva para bursitis muy inflamadas o con sospecha de infección (donde además se analiza el líquido). La mayoría de bursitis se resuelven con tratamiento conservador sin necesidad de pinchazos.' },
    { q: '¿Hielo o calor?', a: 'Hielo en la fase aguda inflamatoria (primeras 48—72h) para reducir la inflamación. Una vez controlada, el trabajo de fortalecimiento y corrección de la causa es lo que resuelve. El hielo alivia, no cura.' },
    { q: '¿Puedo seguir entrenando con bursitis?', a: 'Depende de la zona y la fase. En fase aguda hay que modificar o evitar el gesto que la irrita, pero rara vez parar todo. Mantenemos el entrenamiento que no comprometa la bursa mientras se desinflama.' },
    { q: '¿Las infiltraciones de cortisona sirven?', a: 'Pueden ayudar en casos muy inflamados a corto plazo, pero no corrigen la causa. Se usan con criterio y nunca como solución única. Si la causa biomecánica sigue, la bursitis volverá tras el efecto de la infiltración.' },
    { q: '¿Cómo evito que vuelva?', a: 'Corrigiendo la causa: el desbalance muscular, el gesto repetitivo o la presión que la irritó. El fortalecimiento de la musculatura estabilizadora y la modificación del gesto problemático son lo que previene la recaída. La inflamación es el síntoma, no el problema.' },
  ],
  ctaTitle: 'Desinflamas.', ctaSub: 'Y no recae.',
  ctaDesc: 'Primera sesión: localización de la bursa + identificación de la causa + plan para que no vuelva. 60 min. Tratamos la causa, no solo la inflamación.',
  related: [
    { tag: 'Lesión', name: 'Hombro Congelado', zone: 'Hombro', page: 'hombro' },
    { tag: 'Lesión', name: 'Tendinitis Rotuliana', zone: 'Rodilla', page: 'tendinitis' },
    { tag: 'Hub', name: 'Ver todas las lesiones', zone: 'Catálogo', page: 'lesiones' },
  ],
};

const CONDROMALACIA_DATA = {
  name: 'Condromalacia Rotuliana', bigWord: 'RODILLA.', kicker: 'Rodilla · Cartílago patelar',
  heroTitle: 'Condromalacia', heroSub: 'sin cirugía.',
  heroDesc: 'Reblandecimiento del cartílago detrás de la rótula. <strong>El dolor al bajar escaleras es la pista.</strong> Se trata con fortalecimiento, no con reposo ni quirófano en la mayoría de casos.',
  tldr: 'Deterioro del cartílago de la cara posterior de la rótula. Causa dolor anterior de rodilla, peor al bajar escaleras, sentarse mucho o agacharse. Más común en mujeres jóvenes y corredores.',
  recovery: '6—12 sem', complexity: 'Media',
  whatTitle: 'No es', whatSub: 'desgaste irreversible.',
  whatParas: [
    'La condromalacia rotuliana es el <strong>reblandecimiento y deterioro del cartílago</strong> que recubre la cara posterior de la rótula. Ese cartílago debería deslizar suave sobre el fémur; cuando se daña, el roce genera dolor anterior de rodilla.',
    'La clave: no es un "desgaste" inevitable ni una sentencia de cirugía. En la mayoría de los casos es un <strong>problema de seguimiento patelar</strong> — la rótula no se desliza por su carril correcto, generando presión y roce anormales. Y eso se corrige.',
    'El dolor característico aparece al <strong>bajar escaleras, agacharse o tras estar sentado mucho tiempo</strong> (el "signo del cine"). Corregir el balance muscular que descentra la rótula es lo que resuelve — no el reposo.',
  ],
  facts: [
    { label: 'Estructura', value: 'Cartílago retropatelar (detrás de la rótula)' },
    { label: 'Señal clave', value: 'Dolor al bajar escaleras y al sentarse' },
    { label: 'Población', value: 'Mujeres jóvenes, corredores, saltadores' },
    { label: 'Recuperación', value: '6—12 semanas con fortalecimiento dirigido' },
  ],
  symptomsIntro: 'La condromalacia tiene un patrón muy reconocible: dolor anterior difuso que empeora con la flexión cargada de rodilla.',
  symptoms: [
    'Dolor difuso detrás o alrededor de la rótula',
    'Empeora al bajar escaleras (más que al subir)',
    'Dolor tras estar sentado mucho tiempo (signo del cine)',
    'Molestia al agacharse o ponerse en cuclillas',
    'Sensación de crujido o roce al mover la rodilla',
    'A veces sensación de inestabilidad o "fallo"',
  ],
  redFlagsIntro: 'Si presentas estos signos, puede haber daño meniscal, ligamentario u otra patología. Consulta.',
  redFlags: [
    'Bloqueo real de la rodilla (no puede extenderse)',
    'Inestabilidad franca con episodios de "se va"',
    'Hinchazón importante y recurrente',
    'Dolor tras traumatismo agudo',
    'Pérdida de fuerza marcada en el cuádriceps',
  ],
  causesTitle: 'No es', causesSub: 'mala suerte genética.',
  causesIntro: 'La condromalacia tiene causas biomecánicas corregibles. Identificarlas es la base del tratamiento.',
  causes: [
    { title: 'Mal seguimiento patelar', desc: 'La rótula no se desliza por su carril. Suele ser por desbalance entre el vasto interno (débil) y el externo. La causa #1.' },
    { title: 'Glúteo medio débil', desc: 'Sin estabilidad de cadera, la rodilla colapsa hacia dentro (valgo), descentrando la rótula. El problema está arriba de la rodilla.' },
    { title: 'Sobrecarga', desc: 'Volumen de impacto o flexión cargada (sentadillas, saltos, escaleras) que excede la tolerancia del cartílago.' },
    { title: 'Factores estructurales', desc: 'Rótula alta, ángulo Q aumentado, pie pronador. Predisponen, pero se compensan con fortalecimiento adecuado.' },
  ],
  diffTitle: 'No todo dolor', diffSub: 'anterior es esto.',
  diffIntro: 'El dolor anterior de rodilla tiene varias causas. Diferenciarlas evita tratamientos equivocados.',
  diffRows: [
    { condition: 'Condromalacia', location: 'Cartílago retropatelar', test: 'Compresión patelar + Clarke', finding: 'Dolor retropatelar difuso + crujidos al comprimir' },
    { condition: 'Tendinitis rotuliana', location: 'Tendón rotuliano', test: 'Decline squat', finding: 'Dolor punzante señalable en polo inferior' },
    { condition: 'Síndrome banda IT', location: 'Lateral de rodilla', test: 'Ober + Noble', finding: 'Dolor lateral, no anterior. Runners' },
    { condition: 'Plica sinovial', location: 'Pliegue medial', test: 'Palpación del pliegue', finding: 'Chasquido medial + dolor localizado' },
  ],
  txTitle: 'Recentrar', txSub: 'la rótula.',
  txIntro: 'La condromalacia se resuelve corrigiendo el seguimiento patelar. El fortalecimiento dirigido es el tratamiento, no el reposo.',
  phases: [
    { title: 'Diagnóstico', duration: 'Sesión 1', desc: 'Confirmar condromalacia, evaluar el seguimiento patelar, identificar el desbalance (vasto interno, glúteo medio). Descartar lesión meniscal o tendinosa.' },
    { title: 'Descargar', duration: 'Semanas 1—3', desc: 'Reducir la actividad que comprime la rótula (escaleras, sentadilla profunda, saltos). Modificar carga sin reposo absoluto. Control del dolor.' },
    { title: 'Recentrar', duration: 'Semanas 3—8', desc: 'El núcleo del tratamiento. Fortalecer vasto interno y glúteo medio para recentrar la rótula. Corregir el valgo dinámico. Trabajo de control motor.' },
    { title: 'Volver', duration: 'Semanas 6—12', desc: 'Reintroducción progresiva de impacto y flexión cargada con el patrón corregido. Vuelta al deporte sin que el cartílago se vuelva a irritar.' },
  ],
  faqs: [
    { q: '¿La condromalacia necesita cirugía?', a: 'En la gran mayoría de casos, no. La condromalacia responde muy bien al tratamiento conservador: fortalecimiento dirigido para recentrar la rótula. La cirugía se reserva para casos severos con daño cartilaginoso avanzado que no responden a meses de tratamiento bien hecho.' },
    { q: '¿Por qué me duele al bajar escaleras y no al subir?', a: 'Porque bajar escaleras genera más carga excéntrica y compresión sobre la rótula con la rodilla flexionada. Subir es concéntrico y comprime menos. Ese patrón —peor al bajar— es justo lo que distingue la condromalacia de otras lesiones.' },
    { q: '¿Debo dejar de correr?', a: 'No necesariamente del todo. En fase aguda reducimos el volumen de impacto, pero el objetivo es volver a correr. Mantenemos cardio sin impacto (bici, natación) mientras fortalecemos. Parar del todo atrofia el cuádriceps y empeora el problema.' },
    { q: '¿El cartílago se regenera?', a: 'El cartílago tiene capacidad limitada de regeneración, pero ese no es el punto. El objetivo del tratamiento no es "regenerar cartílago" sino recentrar la rótula para que el cartílago dañado deje de sufrir roce anormal. Sin roce, el dolor desaparece aunque el cartílago no vuelva a ser perfecto.' },
    { q: '¿Las rodilleras ayudan?', a: 'Algunas rodilleras con orificio rotuliano pueden dar alivio sintomático durante la actividad, ayudando al seguimiento patelar. Pero son un apoyo temporal, no la solución. El fortalecimiento es lo que recentra la rótula de forma permanente.' },
    { q: '¿Cuánto tardo en mejorar?', a: 'Casos leves notan mejora en 4—6 semanas; moderados, 8—12. La clave es la constancia con el fortalecimiento del vasto interno y glúteo medio. No es rápido, pero es muy efectivo cuando se hace bien y de forma sostenida.' },
  ],
  ctaTitle: 'Recentras la rótula.', ctaSub: 'Sin quirófano.',
  ctaDesc: 'Primera sesión: evaluación del seguimiento patelar + diagnóstico + plan de fortalecimiento dirigido. 60 min. La cirugía es el último recurso, no el primero.',
  related: [
    { tag: 'Lesión', name: 'Tendinitis Rotuliana', zone: 'Rodilla', page: 'tendinitis' },
    { tag: 'Deporte', name: 'Weightlifting', zone: 'La barra', page: 'weightlifting' },
    { tag: 'Hub', name: 'Ver todas las lesiones', zone: 'Catálogo', page: 'lesiones' },
  ],
};

const CONTRACTURA_DATA = {
  name: 'Contractura Muscular', bigWord: 'NUDO.', kicker: 'Muscular · Espasmo',
  heroTitle: 'Contractura', heroSub: 'que no vuelve.',
  heroDesc: 'Contracción involuntaria y sostenida de un músculo. <strong>La lesión más común y la más mal tratada.</strong> Liberar el espasmo es fácil; evitar que vuelva es el verdadero trabajo.',
  tldr: 'Contracción mantenida e involuntaria de fibras musculares que genera dolor, rigidez y limitación. Frecuente en cuello, espalda y piernas. Casi siempre tiene una causa subyacente que la perpetúa.',
  recovery: '1—3 sem', complexity: 'Baja',
  whatTitle: 'No es', whatSub: 'solo un nudo.',
  whatParas: [
    'La contractura muscular es una <strong>contracción involuntaria y sostenida</strong> de un grupo de fibras musculares. El músculo no se relaja, queda "agarrotado", genera dolor y limita el movimiento. Es la lesión más frecuente que existe.',
    'El error común: tratarla como si fuera solo un nudo a deshacer. Un masaje la libera temporalmente, pero <strong>vuelve si no se trata la causa</strong> — la sobrecarga, la mala postura, el desbalance o incluso el estrés que la generó.',
    'Las contracturas recurrentes en la misma zona no son mala suerte: son una señal de que algo más profundo no se ha resuelto. Liberar el espasmo es el alivio; corregir la causa es la solución.',
  ],
  facts: [
    { label: 'Qué es', value: 'Contracción sostenida e involuntaria de fibras' },
    { label: 'Zonas típicas', value: 'Cuello, trapecio, lumbar, gemelos, isquios' },
    { label: 'Causa frecuente', value: 'Sobrecarga, postura, desbalance, estrés' },
    { label: 'Recuperación', value: '1—3 semanas · rápida si se trata la causa' },
  ],
  symptomsIntro: 'La contractura se siente como una zona dura y dolorosa que limita el movimiento normal del músculo.',
  symptoms: [
    'Zona muscular endurecida y palpable ("nudo")',
    'Dolor local que puede irradiar a zonas cercanas',
    'Rigidez y limitación del movimiento',
    'Sensación de tensión constante en el músculo',
    'Empeora con el frío, el estrés o tras esfuerzo',
    'Puede generar dolor de cabeza (contractura cervical)',
  ],
  redFlagsIntro: 'Si presentas estos signos, puede no ser una contractura simple. Consulta para descartar otra causa.',
  redFlags: [
    'Dolor con hormigueo o adormecimiento irradiado',
    'Pérdida de fuerza en el brazo o la pierna',
    'Dolor que no cede en absoluto con el reposo',
    'Contractura tras traumatismo importante',
    'Síntomas neurológicos (mareo, alteración visual)',
  ],
  causesTitle: 'No es', causesSub: 'casualidad.',
  causesIntro: 'Las contracturas tienen causa. Las recurrentes siempre apuntan a algo no resuelto.',
  causes: [
    { title: 'Sobrecarga', desc: 'Esfuerzo que excede la capacidad del músculo. Entrenamiento sin progresión, gesto repetido, fatiga acumulada. La causa más directa.' },
    { title: 'Postura', desc: 'Posiciones mantenidas que tensan ciertos músculos — horas sentado, mala ergonomía. El trapecio y el cuello son las víctimas clásicas.' },
    { title: 'Desbalance', desc: 'Un músculo compensa la debilidad de otro y termina sobrecargado. La contractura es el síntoma; el desbalance, la causa.' },
    { title: 'Estrés', desc: 'La tensión emocional se traduce en tensión muscular, sobre todo en cuello y hombros. Una causa real, no menor, de contracturas crónicas.' },
  ],
  diffTitle: 'No todo dolor', diffSub: 'muscular es esto.',
  diffIntro: 'Varias condiciones se sienten como contractura. Diferenciarlas evita tratar mal el problema.',
  diffRows: [
    { condition: 'Contractura', location: 'Vientre muscular', test: 'Palpación + estiramiento', finding: 'Banda tensa palpable + cede con tratamiento' },
    { condition: 'Punto gatillo', location: 'Nodo miofascial', test: 'Palpación + dolor referido', finding: 'Punto hiperirritable que refiere dolor a distancia' },
    { condition: 'Distensión / rotura', location: 'Fibras musculares', test: 'Historia + ecografía', finding: 'Dolor agudo súbito en esfuerzo, a veces hematoma' },
    { condition: 'Dolor referido', location: 'Origen a distancia', test: 'Evaluación neural', finding: 'Origen en columna o nervio, no en el músculo' },
  ],
  txTitle: 'Liberar y', txSub: 'prevenir.',
  txIntro: 'La contractura se libera rápido. El verdadero trabajo es evitar que vuelva corrigiendo lo que la causó.',
  phases: [
    { title: 'Diagnóstico', duration: 'Sesión 1', desc: 'Localizar la contractura, identificar la causa (sobrecarga, postura, desbalance, estrés). Descartar que el dolor sea referido de otra estructura.' },
    { title: 'Liberar', duration: 'Sesión 1—2', desc: 'Terapia manual, punción seca si hay puntos gatillo, calor, estiramiento dirigido. Liberar el espasmo y restaurar el rango de movimiento.' },
    { title: 'Corregir', duration: 'Semanas 1—3', desc: 'Lo que evita la recaída. Corregir la postura, el desbalance o el gesto que la generó. Fortalecer la musculatura débil que obligaba a la contractura.' },
    { title: 'Prevenir', duration: 'Continuo', desc: 'Pautas de prevención: ergonomía, movilidad, gestión de cargas, manejo del estrés. Para que la contractura no se vuelva un visitante habitual.' },
  ],
  faqs: [
    { q: '¿Un masaje no es suficiente?', a: 'El masaje libera la contractura temporalmente y da alivio real, pero si la causa persiste (postura, sobrecarga, desbalance), vuelve. Por eso las contracturas recurrentes necesitan más que masajes repetidos: necesitan corregir lo que las genera. El masaje es parte del tratamiento, no todo.' },
    { q: '¿Por qué siempre me sale en el mismo sitio?', a: 'Porque hay una causa no resuelta en esa zona: un desbalance muscular, una postura mantenida, o una sobrecarga repetida. La contractura recurrente es una señal, no un accidente. Identificar y corregir esa causa es lo que rompe el ciclo.' },
    { q: '¿Hielo o calor para una contractura?', a: 'Calor, generalmente. El calor relaja la musculatura contracturada y mejora la circulación local, ayudando a liberar el espasmo. El hielo se reserva para lesiones con inflamación aguda (distensiones, golpes), no para contracturas.' },
    { q: '¿Puedo entrenar con una contractura?', a: 'Depende de la intensidad. Una contractura leve puede mejorar con movimiento suave y calor. Una contractura importante requiere reducir la carga de esa zona temporalmente. Forzar el entrenamiento sobre un músculo contracturado puede derivar en una distensión.' },
    { q: '¿El estrés realmente causa contracturas?', a: 'Sí, totalmente. La tensión emocional se traduce en tensión muscular sostenida, especialmente en cuello, trapecio y mandíbula. Muchas contracturas cervicales crónicas tienen un componente de estrés importante. Abordarlo es parte del tratamiento.' },
    { q: '¿Cuánto tarda en irse?', a: 'Una contractura aguda simple puede ceder en días a 1—2 semanas con tratamiento. Las recurrentes o crónicas tardan más porque requieren corregir la causa de fondo. Lo rápido es liberar el espasmo; lo que lleva tiempo es evitar que vuelva.' },
  ],
  ctaTitle: 'Liberas el nudo.', ctaSub: 'Y no vuelve.',
  ctaDesc: 'Primera sesión: liberación de la contractura + identificación de la causa que la genera. 60 min. El masaje alivia; corregir la causa resuelve.',
  related: [
    { tag: 'Lesión', name: 'Ciática', zone: 'Lumbar / Pierna', page: 'ciatica' },
    { tag: 'Servicio', name: 'Punción Seca', zone: 'Técnica', page: 'puncion' },
    { tag: 'Servicio', name: 'Masaje Deportivo', zone: 'Técnica', page: 'masajes' },
  ],
};

const PERIOSTITIS_DATA = {
  name: 'Periostitis Tibial', bigWord: 'ESPINILLA.', kicker: 'Tibia · Periostio',
  heroTitle: 'Periostitis', heroSub: 'antes de la fractura.',
  heroDesc: 'Inflamación del periostio de la tibia — el clásico "dolor de espinilla" del corredor. <strong>Si se ignora, precede a la fractura por estrés.</strong> Distinguir una de otra es crítico.',
  tldr: 'Inflamación del periostio (la membrana que recubre la tibia) por sobrecarga repetida de impacto. El "shin splint" del corredor. Dolor en la cara medial de la tibia que, si se ignora, puede progresar a fractura por estrés.',
  recovery: '2—6 sem', complexity: 'Baja',
  whatTitle: 'No es', whatSub: 'solo cansancio.',
  whatParas: [
    'La periostitis tibial es la <strong>inflamación del periostio</strong> — la membrana que recubre el hueso de la tibia — por la tracción repetida de los músculos de la pierna durante el impacto. Es el famoso "dolor de espinilla" o shin splint del corredor.',
    'Lo importante: la periostitis es una <strong>señal de alarma temprana</strong>. Si se ignora y se sigue corriendo sobre el dolor, la sobrecarga puede progresar a una <strong>fractura por estrés</strong> — una lesión mucho más seria que requiere semanas de parón total.',
    'Por eso distinguir periostitis de fractura por estrés es crítico. La periostitis duele de forma difusa a lo largo de la tibia; la fractura por estrés duele en un punto concreto. Esa diferencia cambia completamente el manejo.',
  ],
  facts: [
    { label: 'Estructura', value: 'Periostio · membrana que recubre la tibia' },
    { label: 'Localización', value: 'Cara medial (interna) de la tibia' },
    { label: 'Riesgo', value: 'Precede a fractura por estrés si se ignora' },
    { label: 'Recuperación', value: '2—6 semanas con reposo relativo + corrección' },
  ],
  symptomsIntro: 'La periostitis duele a lo largo de la tibia. El cambio de patrón del dolor es la pista de que puede estar progresando.',
  symptoms: [
    'Dolor difuso en la cara interna de la tibia',
    'Aparece al inicio de correr, puede calmar al calentar',
    'Empeora con el volumen y la intensidad de carrera',
    'Molestia a la palpación a lo largo del borde tibial',
    'Dolor que persiste tras correr en casos avanzados',
    'Sensación de tibia "cargada" o adolorida',
  ],
  redFlagsIntro: 'Estos signos sugieren fractura por estrés, no periostitis. Requiere parar y evaluar de inmediato.',
  redFlags: [
    'Dolor en un punto concreto y localizado (no difuso)',
    'Dolor que persiste en reposo o de noche',
    'Dolor al saltar sobre una pierna (hop test positivo)',
    'Empeoramiento progresivo pese a reducir carga',
    'Dolor que aparece cada vez antes al correr',
  ],
  causesTitle: 'No es', causesSub: 'solo correr mucho.',
  causesIntro: 'La periostitis combina varios factores. Identificarlos es la base para que no vuelva.',
  causes: [
    { title: 'Volumen de km', desc: 'Aumentar el kilometraje más rápido de lo que el hueso adapta. La regla del 10% existe por esto. La causa #1.' },
    { title: 'Biomecánica de pisada', desc: 'Sobrepronación o impacto excesivo que aumenta la tracción sobre el periostio. La forma de correr importa tanto como el volumen.' },
    { title: 'Calzado', desc: 'Zapatillas desgastadas o inadecuadas para tu pisada amplifican el impacto sobre la tibia. Cambiar cada 600—800 km.' },
    { title: 'Superficie', desc: 'Correr siempre sobre superficie dura (asfalto) o cambiar bruscamente de superficie aumenta la carga de impacto.' },
  ],
  diffTitle: 'Periostitis vs', diffSub: 'fractura por estrés.',
  diffIntro: 'La distinción más importante de esta lesión. Confundirlas puede convertir semanas de recuperación en meses.',
  diffRows: [
    { condition: 'Periostitis tibial', location: 'Difuso a lo largo de tibia', test: 'Palpación lineal', finding: 'Dolor difuso en borde medial + calma al calentar' },
    { condition: 'Fractura por estrés', location: 'Punto concreto', test: 'Hop test + palpación puntual', finding: 'Dolor localizado + persiste en reposo + hop positivo' },
    { condition: 'Síndrome compartimental', location: 'Compartimento muscular', test: 'Presión intracompartimental', finding: 'Dolor que crece con ejercicio + tensión, mejora al parar' },
    { condition: 'Tendinopatía tibial post.', location: 'Tendón tibial posterior', test: 'Inversión resistida', finding: 'Dolor con la inversión del pie contra resistencia' },
  ],
  txTitle: 'Descargar y', txSub: 'corregir pisada.',
  txIntro: 'La periostitis se trata con reposo relativo + corrección de la causa. Seguir corriendo sobre el dolor es lo que la convierte en fractura.',
  phases: [
    { title: 'Diagnóstico', duration: 'Sesión 1', desc: 'Confirmar periostitis y —crítico— descartar fractura por estrés. Evaluar la pisada, el calzado y los errores de carga. Hop test.' },
    { title: 'Descargar', duration: 'Semanas 1—2', desc: 'Reposo relativo: reducir o suspender el impacto. Mantener fitness con cardio sin impacto (bici, natación, elíptica). Control del dolor.' },
    { title: 'Corregir', duration: 'Semanas 2—5', desc: 'Fortalecer pantorrilla y tibial, corregir la pisada, revisar el calzado. Trabajo de cadera y core para mejorar la mecánica de carrera.' },
    { title: 'Volver', duration: 'Semanas 4—6', desc: 'Retorno progresivo a la carrera (caminar-trotar → continuo → volumen) respetando la regla del 10%. Vuelta sin recaer.' },
  ],
  faqs: [
    { q: '¿Cuánto tiempo debo parar de correr?', a: 'Depende de la severidad. Casos leves: reducir volumen 1—2 semanas puede bastar. Casos con dolor durante toda la carrera: suspender el impacto 2—4 semanas, manteniendo cardio sin impacto. Lo importante es no correr sobre el dolor — eso es lo que la cronifica o la convierte en fractura.' },
    { q: '¿Cómo sé si es periostitis o fractura por estrés?', a: 'La pista clave: la periostitis duele de forma difusa a lo largo de la tibia y suele calmar al calentar. La fractura por estrés duele en un punto concreto, persiste en reposo, y el hop test (saltar sobre una pierna) la dispara. Ante la duda, se evalúa — confundirlas es peligroso.' },
    { q: '¿El hielo realmente sirve?', a: 'Ayuda a controlar el dolor y la inflamación local tras correr, pero no cura. Es un alivio sintomático. Lo que resuelve la periostitis es descargar el impacto y corregir la causa (pisada, calzado, volumen). El hielo es complemento, no tratamiento.' },
    { q: '¿Necesito plantillas?', a: 'A veces. Si hay una alteración biomecánica de la pisada (sobrepronación marcada) que contribuye, las plantillas pueden ayudar. Pero no son automáticas — se valoran según tu caso. Muchas periostitis se resuelven solo con fortalecimiento y corrección del entrenamiento, sin plantillas.' },
    { q: '¿Puedo hacer cardio sin correr?', a: 'Sí, y es lo ideal durante la descarga. Bici, natación, elíptica o aqua-running mantienen tu fitness cardiovascular sin el impacto que irrita el periostio. Así no pierdes forma mientras la tibia se recupera. Es la mejor forma de no desesperarte durante el parón.' },
    { q: '¿Cómo prevengo que vuelva?', a: 'Tres claves: progresar el volumen respetando el 10% semanal, fortalecer pantorrilla, tibial y cadera, y usar calzado adecuado en buen estado. La mayoría de las recaídas son por volver demasiado rápido al volumen anterior sin haber corregido la causa.' },
  ],
  ctaTitle: 'Paras a tiempo.', ctaSub: 'Evitas la fractura.',
  ctaDesc: 'Primera sesión: confirmar periostitis (vs fractura) + análisis de pisada + plan de retorno. 60 min. Distinguir a tiempo evita meses de parón.',
  related: [
    { tag: 'Deporte', name: 'CrossFit', zone: 'El box', page: 'crossfit' },
    { tag: 'Lesión', name: 'Condromalacia', zone: 'Rodilla', page: 'condromalacia' },
    { tag: 'Hub', name: 'Ver todas las lesiones', zone: 'Catálogo', page: 'lesiones' },
  ],
};

const EPITROCLEITIS_DATA = {
  name: 'Epitrocleítis', bigWord: 'CODO.', kicker: 'Codo · Epicóndilo medial',
  heroTitle: 'Epitrocleítis', heroSub: 'o codo de golfista.',
  heroDesc: 'Tendinopatía de los flexores en la cara interna del codo. <strong>El "codo de golfista" — pero más común en CrossFit y BJJ.</strong> Como toda tendinopatía, necesita carga, no reposo.',
  tldr: 'Tendinopatía de los músculos flexores-pronadores en su inserción en el epicóndilo medial (cara interna del codo). El "codo de golfista". Por sobrecarga de agarre y flexión de muñeca. Se trata con carga excéntrica progresiva.',
  recovery: '4—8 sem', complexity: 'Media',
  whatTitle: 'No es', whatSub: 'inflamación.',
  whatParas: [
    'La epitrocleítis es la <strong>tendinopatía de los tendones flexores y pronadores</strong> del antebrazo en su inserción en el epicóndilo medial — la prominencia ósea de la cara interna del codo. Se la conoce como "codo de golfista", pero la veo más en CrossFitters y grapplers.',
    'Como toda tendinopatía, el nombre con "-itis" engaña: <strong>no es inflamación clásica, es degeneración del tendón</strong> por sobrecarga repetida. Por eso el reposo y los antiinflamatorios no la curan — el tendón necesita carga progresiva para remodelarse.',
    'Su prima, la epicondilitis ("codo de tenista"), afecta la cara externa. La epitrocleítis es la interna. Distinguirlas importa porque el gesto que las causa y los músculos a trabajar son distintos.',
  ],
  facts: [
    { label: 'Estructura', value: 'Tendón flexor-pronador · epicóndilo medial' },
    { label: 'Cara', value: 'Interna del codo (medial)' },
    { label: 'Deportes', value: 'CrossFit, BJJ, golf, escalada, lanzamiento' },
    { label: 'Recuperación', value: '4—8 semanas con carga excéntrica' },
  ],
  symptomsIntro: 'La epitrocleítis duele en la cara interna del codo, sobre todo al agarrar y flexionar la muñeca.',
  symptoms: [
    'Dolor en la cara interna del codo (epicóndilo medial)',
    'Empeora al agarrar, apretar o flexionar la muñeca',
    'Molestia al cargar peso o hacer dominadas/escalada',
    'Dolor que puede irradiar por el antebrazo interno',
    'Debilidad en el agarre',
    'Sensibilidad a la palpación del epicóndilo medial',
  ],
  redFlagsIntro: 'Si presentas estos signos, puede haber compromiso del nervio cubital u otra patología. Consulta.',
  redFlags: [
    'Hormigueo o adormecimiento en los dedos anular y meñique',
    'Pérdida de fuerza marcada en la mano',
    'Dolor tras traumatismo agudo con deformidad',
    'Inestabilidad del codo',
    'Síntomas que empeoran rápido pese al reposo',
  ],
  causesTitle: 'No es', causesSub: 'solo golf.',
  causesIntro: 'La epitrocleítis viene de la sobrecarga del agarre y la flexión de muñeca. Cuatro factores la explican.',
  causes: [
    { title: 'Sobrecarga de agarre', desc: 'Dominadas, escalada, kettlebells, agarre del gi en BJJ. El agarre repetido sobrecarga los flexores. La causa #1 en deportistas.' },
    { title: 'Flexión de muñeca', desc: 'Gestos repetidos de flexión con carga — el swing de golf, ciertos levantamientos. Tracción repetida sobre el tendón.' },
    { title: 'Volumen sin progresión', desc: 'Aumentar bruscamente el volumen de trabajo de agarre o tracción sin dar tiempo al tendón a adaptarse.' },
    { title: 'Déficit de antebrazo', desc: 'Musculatura del antebrazo débil que no soporta la demanda. El tendón sobrecargado paga el precio de la falta de fuerza base.' },
  ],
  diffTitle: 'No todo dolor', diffSub: 'de codo es esto.',
  diffIntro: 'El dolor de codo tiene varias causas. Diferenciarlas define qué músculos trabajar y qué gesto corregir.',
  diffRows: [
    { condition: 'Epitrocleítis', location: 'Epicóndilo medial (interno)', test: 'Flexión muñeca resistida', finding: 'Dolor interno con flexión de muñeca contra resistencia' },
    { condition: 'Epicondilitis', location: 'Epicóndilo lateral (externo)', test: 'Extensión muñeca resistida', finding: 'Dolor externo con extensión. "Codo de tenista"' },
    { condition: 'Neuropatía cubital', location: 'Canal cubital', test: 'Tinel + síntomas neurales', finding: 'Hormigueo en anular y meñique + debilidad' },
    { condition: 'Inestabilidad medial', location: 'Ligamento colateral', test: 'Estrés en valgo', finding: 'Dolor + apertura medial. Lanzadores' },
  ],
  txTitle: 'Carga,', txSub: 'no reposo.',
  txIntro: 'Como toda tendinopatía, la epitrocleítis necesita carga excéntrica progresiva para remodelar el tendón. El reposo solo no la cura.',
  phases: [
    { title: 'Diagnóstico', duration: 'Sesión 1', desc: 'Confirmar epitrocleítis (vs epicondilitis vs neuropatía cubital), identificar el gesto sobrecargante, evaluar la fuerza de antebrazo.' },
    { title: 'Calmar', duration: 'Semanas 1—2', desc: 'Reducir el gesto que sobrecarga (agarre, flexión cargada). Terapia manual, isométricos de muñeca para alivio. Modificar, no parar del todo.' },
    { title: 'Cargar', duration: 'Semanas 2—6', desc: 'El núcleo del tratamiento. Carga excéntrica progresiva de los flexores de muñeca para remodelar el tendón. Fortalecimiento del antebrazo.' },
    { title: 'Volver', duration: 'Semanas 4—8', desc: 'Reintroducción progresiva del agarre y la tracción con el tendón fortalecido. Vuelta a dominadas, escalada o gi sin que recaiga.' },
  ],
  faqs: [
    { q: '¿El reposo cura la epitrocleítis?', a: 'No del todo. Como toda tendinopatía, el tendón degenerado necesita carga progresiva para remodelarse. El reposo alivia mientras dura, pero al volver al agarre o la tracción, el dolor regresa porque el tendón sigue débil. La carga excéntrica es lo que lo cura.' },
    { q: '¿Es lo mismo que codo de tenista?', a: 'No, son primos pero opuestos. La epitrocleítis ("codo de golfista") afecta la cara INTERNA del codo y los flexores. La epicondilitis ("codo de tenista") afecta la cara EXTERNA y los extensores. Distinto gesto causante, distintos músculos a trabajar. Por eso el diagnóstico preciso importa.' },
    { q: '¿Puedo seguir entrenando?', a: 'Con modificaciones, casi siempre. Reducimos temporalmente el gesto que sobrecarga (dominadas, escalada, agarre intenso) pero mantenemos el resto del entrenamiento. Parar del todo no es necesario ni recomendable —el tendón necesita carga, solo que controlada.' },
    { q: '¿Las cinchas o bandas de codo sirven?', a: 'Pueden dar alivio sintomático durante la actividad al modificar la tensión sobre el tendón. Son un apoyo temporal útil, pero no curan. El fortalecimiento del tendón con carga excéntrica es lo que resuelve el problema de fondo.' },
    { q: '¿Cuánto tarda en mejorar?', a: 'Las primeras 2 semanas con carga excéntrica puede que no notes mucho —incluso algo de molestia por la carga. A partir de la semana 4 empieza el alivio. Entre semana 6—8 normalmente vuelves a tu agarre habitual. La constancia con los excéntricos es clave.' },
    { q: '¿Por qué me dio si no juego golf?', a: 'Porque el "codo de golfista" es un nombre engañoso. Cualquier sobrecarga de agarre o flexión de muñeca lo causa: dominadas, escalada, kettlebells, el agarre del gi en BJJ, levantamientos. En realidad lo veo mucho más en CrossFitters y grapplers que en golfistas.' },
  ],
  ctaTitle: 'Cargas el tendón.', ctaSub: 'Vuelve el agarre.',
  ctaDesc: 'Primera sesión: diagnóstico diferencial + plan de carga excéntrica + corrección del gesto. 60 min. Carga progresiva, no reposo ni antiinflamatorios.',
  related: [
    { tag: 'Deporte', name: 'CrossFit', zone: 'Box', page: 'crossfit' },
    { tag: 'Deporte', name: 'BJJ', zone: 'Mat', page: 'bjj' },
    { tag: 'Hub', name: 'Ver todas las lesiones', zone: 'Catálogo', page: 'lesiones' },
  ],
};

function BursitisPage({ onNavigate }) { return <window.LesionPillarPage data={BURSITIS_DATA} onNavigate={onNavigate} />; }
function CondromalaciaPage({ onNavigate }) { return <window.LesionPillarPage data={CONDROMALACIA_DATA} onNavigate={onNavigate} />; }
function ContracturaPage({ onNavigate }) { return <window.LesionPillarPage data={CONTRACTURA_DATA} onNavigate={onNavigate} />; }
function PeriostitisPage({ onNavigate }) { return <window.LesionPillarPage data={PERIOSTITIS_DATA} onNavigate={onNavigate} />; }
function EpitrocleitisPage({ onNavigate }) { return <window.LesionPillarPage data={EPITROCLEITIS_DATA} onNavigate={onNavigate} />; }

if (typeof window !== "undefined") window.BursitisPage = BursitisPage;
if (typeof window !== "undefined") window.CondromalaciaPage = CondromalaciaPage;
if (typeof window !== "undefined") window.ContracturaPage = ContracturaPage;
if (typeof window !== "undefined") window.PeriostitisPage = PeriostitisPage;
if (typeof window !== "undefined") window.EpitrocleitisPage = EpitrocleitisPage;
/* ==================== servicio.jsx ==================== */
// SERVICIO - Componente reutilizable para páginas de servicio técnico
// Genera: Quiropraxia, Punción Seca, Masajes Deportivos, Readaptación

function SvSectionHeader({ kicker, title, subtitle, intro, dark }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
      marginBottom: '4rem', alignItems: 'flex-end',
    }} className="sv-sh-header">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>{kicker}</div>
        </div>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1,
          letterSpacing: '-0.03em', fontFamily: 'Space Grotesk', color: dark ? '#FFFFFF' : '#0A0A0A',
        }}>{title}<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{subtitle}</span></h2>
      </div>
      {intro && (
        <p style={{ fontSize: '1.0625rem', color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.6)', lineHeight: 1.55, maxWidth: '460px' }}>{intro}</p>
      )}
      <style>{`@media (max-width: 900px) { .sv-sh-header { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// HERO
function SvHero({ data, onNavigate }) {
  return (
    <section style={{ padding: '12rem 0 6rem', background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', right: '-3%', bottom: '-3rem',
        fontSize: 'clamp(7rem, 16vw, 19rem)', fontFamily: 'Space Grotesk', fontWeight: 700,
        color: 'rgba(201,165,90,0.05)', lineHeight: 0.85, letterSpacing: '-0.05em', whiteSpace: 'nowrap', pointerEvents: 'none',
      }}>{data.bigWord}</div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem',
          fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600,
        }}>
          <a onClick={() => onNavigate('fisioterapia')} style={{ color: 'rgba(10,10,10,0.5)', cursor: 'pointer', textDecoration: 'none' }}>Servicios</a>
          <span style={{ color: 'rgba(10,10,10,0.25)' }}>/</span>
          <span style={{ color: '#C9A55A' }}>{data.name}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'flex-end' }} className="sv-hero-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '60px', height: '1px', background: '#C9A55A' }} />
              <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>{data.kicker}</div>
            </div>
            <h1 style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 6rem)', fontWeight: 700, lineHeight: 0.9,
              letterSpacing: '-0.04em', fontFamily: 'Space Grotesk', color: '#0A0A0A', marginBottom: '2.5rem',
            }}>{data.heroTitle}<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{data.heroSub}</span></h1>
            <p style={{
              fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)', lineHeight: 1.55,
              color: 'rgba(10,10,10,0.65)', maxWidth: '620px', marginBottom: '2rem',
            }} dangerouslySetInnerHTML={{ __html: data.heroDesc }} />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => onNavigate('fisioterapia')} style={{
                background: '#0A0A0A', color: '#FFFFFF', border: 'none', padding: '1.25rem 2rem',
                fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', fontFamily: 'Space Grotesk', transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              }} onMouseEnter={(e) => { e.currentTarget.style.background = '#C9A55A'; e.currentTarget.style.color = '#0A0A0A'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.color = '#FFFFFF'; }}>
                Agendar valoración<span>→</span>
              </button>
            </div>
          </div>

          {/* TL;DR — qué es / qué no es */}
          <div style={{ background: '#0A0A0A', color: '#FFFFFF', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#C9A55A' }} />
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A', marginBottom: '1.5rem' }}>
              En una línea
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#16A34A', marginBottom: '0.5rem' }}>✓ Es</div>
              <p style={{ fontSize: '1rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.9)' }}>{data.esEs}</p>
            </div>
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#DC2626', marginBottom: '0.5rem' }}>✕ No es</div>
              <p style={{ fontSize: '1rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.7)' }}>{data.noEs}</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .sv-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// QUÉ ES (explainer)
function SvQueEs({ data }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FAFAFA', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <SvSectionHeader kicker="Qué es" title={data.queTitle} subtitle={data.queSub} intro={data.queIntro} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }} className="sv-que-grid">
          <div>
            {data.queParas.map((p, i) => (
              <p key={i} style={{
                fontSize: i === 0 ? '1.125rem' : '1.0625rem', lineHeight: i === 0 ? 1.7 : 1.65,
                color: i === 0 ? 'rgba(10,10,10,0.75)' : 'rgba(10,10,10,0.65)', marginBottom: '1.5rem',
              }} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <div style={{ border: '1px solid rgba(10,10,10,0.08)', background: '#FFFFFF' }}>
            {data.queFacts.map((f, i) => (
              <div key={i} style={{
                padding: '1.75rem 2rem', borderBottom: i < data.queFacts.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                display: 'grid', gridTemplateColumns: '40px 1fr', gap: '1.25rem', alignItems: 'center',
              }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', fontWeight: 700, color: 'rgba(10,10,10,0.3)' }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div style={{ fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A', marginBottom: '0.375rem' }}>{f.label}</div>
                  <div style={{ fontSize: '1rem', color: '#0A0A0A', fontWeight: 500, lineHeight: 1.45 }}>{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .sv-que-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// COMPARATIVA (vs table)
function SvComparativa({ data }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <SvSectionHeader kicker={data.compKicker} title={data.compTitle} subtitle={data.compSub} intro={data.compIntro} />
        <div style={{ border: '1px solid rgba(10,10,10,0.08)', overflowX: 'auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: `1.2fr repeat(${data.compCols.length}, 1fr)`,
            background: '#0A0A0A', color: '#FFFFFF', minWidth: '640px',
          }}>
            <div style={{ padding: '1.25rem 1.5rem', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.625rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.4)' }}>Criterio</div>
            </div>
            {data.compCols.map((c, i) => (
              <div key={i} style={{ padding: '1.25rem 1.5rem', borderRight: i < data.compCols.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', position: 'relative' }}>
                {c.highlight && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#C9A55A' }} />}
                <div style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: c.highlight ? '#C9A55A' : 'rgba(255,255,255,0.4)' }}>{c.name}</div>
              </div>
            ))}
          </div>
          {data.compRows.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: `1.2fr repeat(${data.compCols.length}, 1fr)`,
              borderTop: '1px solid rgba(10,10,10,0.06)', minWidth: '640px',
            }}>
              <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(10,10,10,0.06)', background: '#FAFAFA', fontSize: '0.9375rem', fontWeight: 700, fontFamily: 'Space Grotesk', color: '#0A0A0A', display: 'flex', alignItems: 'center' }}>{r.criterio}</div>
              {r.values.map((v, j) => (
                <div key={j} style={{
                  padding: '1.5rem', borderRight: j < r.values.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                  fontSize: '0.9375rem', lineHeight: 1.45, display: 'flex', alignItems: 'center', gap: '0.625rem',
                  color: data.compCols[j].highlight ? '#0A0A0A' : 'rgba(10,10,10,0.6)',
                  fontWeight: data.compCols[j].highlight ? 500 : 400,
                  background: data.compCols[j].highlight ? 'rgba(201,165,90,0.04)' : '#FFFFFF',
                }}>
                  {data.compCols[j].highlight && <div style={{ width: '6px', height: '6px', background: '#C9A55A', flexShrink: 0 }} />}
                  {v}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CUÁNDO SE APLICA (cases)
function SvCasos({ data }) {
  return (
    <section style={{ padding: '8rem 0', background: '#0A0A0A', color: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', right: '-3%', bottom: '-3rem',
        fontSize: 'clamp(8rem, 18vw, 18rem)', fontFamily: 'Space Grotesk', fontWeight: 700,
        color: 'rgba(201,165,90,0.05)', lineHeight: 0.85, letterSpacing: '-0.05em', whiteSpace: 'nowrap', pointerEvents: 'none',
      }}>{data.casosWord}</div>
      <div className="container" style={{ position: 'relative' }}>
        <SvSectionHeader dark kicker="Cuándo se aplica" title={data.casosTitle} subtitle={data.casosSub} intro={data.casosIntro} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '1px solid rgba(255,255,255,0.1)' }} className="sv-casos-grid">
          {data.casos.map((c, i) => (
            <div key={i} style={{
              padding: '2.5rem 2rem', borderRight: i < data.casos.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }} className="sv-casos-cell">
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '2.5rem', fontWeight: 700, color: '#C9A55A', lineHeight: 0.85, letterSpacing: '-0.03em' }}>0{i + 1}</div>
              <h3 style={{ fontSize: '1.375rem', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.1 }}>{c.title}</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.7)' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .sv-casos-grid { grid-template-columns: 1fr !important; } .sv-casos-cell { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1); } }`}</style>
    </section>
  );
}

// CONTRAINDICACIONES (banner)
function SvContraindicaciones({ data }) {
  return (
    <section style={{ padding: '6rem 0', background: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <div style={{ border: '1px solid rgba(220,38,38,0.25)', background: 'rgba(220,38,38,0.03)', padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '3rem', alignItems: 'flex-start' }} className="sv-contra-grid">
          <div>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#DC2626', marginBottom: '1rem' }}>⚠ Cuándo NO se aplica</div>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#0A0A0A' }}>{data.contraTitle}</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }} className="sv-contra-list">
            {data.contra.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.75rem 0', fontSize: '0.9375rem', lineHeight: 1.45, color: 'rgba(10,10,10,0.75)' }}>
                <div style={{ color: '#DC2626', fontWeight: 700, marginTop: '0.05rem' }}>✕</div>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .sv-contra-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; } .sv-contra-list { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// FAQ
function SvFAQ({ data, openFaq, setOpenFaq }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FAFAFA', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
      <div className="container">
        <SvSectionHeader kicker="Preguntas frecuentes" title="Lo que" subtitle="me preguntan." intro={`Dudas comunes sobre ${data.name.toLowerCase()}. Si no encuentras la tuya, WhatsApp directo.`} />
        <div style={{ maxWidth: '900px', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
          {data.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
                <button onClick={() => setOpenFaq(isOpen ? -1 : i)} style={{ width: '100%', padding: '1.75rem 0', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', display: 'grid', gridTemplateColumns: '60px 1fr 40px', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.875rem', fontWeight: 700, color: isOpen ? '#C9A55A' : 'rgba(10,10,10,0.3)', transition: 'color 0.3s' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)', fontWeight: 600, fontFamily: 'Space Grotesk', letterSpacing: '-0.01em', lineHeight: 1.3, color: '#0A0A0A' }}>{faq.q}</div>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: `1px solid ${isOpen ? '#C9A55A' : 'rgba(10,10,10,0.15)'}`, background: isOpen ? '#C9A55A' : 'transparent', color: isOpen ? '#0A0A0A' : 'rgba(10,10,10,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', fontWeight: 300, transition: 'all 0.4s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', justifySelf: 'end' }}>+</div>
                </button>
                <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 40px', gap: '1.5rem', paddingBottom: '1.75rem' }}>
                      <div></div>
                      <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(10,10,10,0.7)', maxWidth: '700px' }}>{faq.a}</p>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA
function SvCTA({ data, onNavigate }) {
  return (
    <section style={{ padding: '8rem 0', background: '#FFFFFF', borderTop: '1px solid rgba(10,10,10,0.08)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          background: 'linear-gradient(135deg, #C9A55A 0%, #B8943F 100%)', color: '#0A0A0A', padding: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', overflow: 'hidden',
        }} className="sv-cta-grid">
          <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '60%', height: '140%', background: 'linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.05) 50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1.5rem' }}>{data.name} · Dentro del proceso integral</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.03em', fontFamily: 'Space Grotesk', marginBottom: '1.5rem' }}>{data.ctaTitle}<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>{data.ctaSub}</span></h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.55, opacity: 0.85, maxWidth: '520px' }}>{data.ctaDesc}</p>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button onClick={() => onNavigate('fisioterapia')} style={{ background: '#0A0A0A', color: '#FFFFFF', border: 'none', padding: '1.5rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Space Grotesk', transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>Agendar valoración<span>→</span></button>
            <button style={{ background: 'transparent', color: '#0A0A0A', border: '1px solid rgba(10,10,10,0.4)', padding: '1.5rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Space Grotesk', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.color = '#C9A55A'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0A0A0A'; }}>WhatsApp</button>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .sv-cta-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// PAGE BUILDER
function ServicioPage({ data, onNavigate }) {
  const [openFaq, setOpenFaq] = React.useState(0);
  return (
    <main>
      <SvHero data={data} onNavigate={onNavigate} />
      <SvQueEs data={data} />
      <SvComparativa data={data} />
      <SvCasos data={data} />
      <SvContraindicaciones data={data} />
      <SvFAQ data={data} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <SvCTA data={data} onNavigate={onNavigate} />
    </main>
  );
}

if (typeof window !== "undefined") window.ServicioPage = ServicioPage;
/* ==================== servicio-data.jsx ==================== */
// SERVICIO DATA - Datos de los 4 servicios técnicos

const QUIROPRAXIA_DATA = {
  name: 'Quiropraxia', bigWord: 'AJUSTE.', kicker: 'Ajuste vertebral · Bogotá',
  heroTitle: 'Quiropraxia', heroSub: 'con criterio.',
  heroDesc: 'Ajuste vertebral preciso dentro de un proceso integral. <strong>No es un servicio único ni sesiones indefinidas</strong> — es una técnica más cuando la evaluación la indica.',
  esEs: 'Manipulación articular precisa de la columna, aplicada cuando hay indicación clínica clara dentro del proceso de tratamiento.',
  noEs: 'Un servicio aislado, ni sesiones eternas "de mantenimiento", ni la solución para todo dolor de espalda.',
  queTitle: 'Una técnica,', queSub: 'no un servicio.',
  queIntro: 'La quiropraxia ajusta articulaciones vertebrales con restricción de movimiento. Pero solo es útil dentro de un diagnóstico que la justifique.',
  queParas: [
    'La quiropraxia es <strong>manipulación articular de alta velocidad y baja amplitud</strong> (HVLA). Restaura movilidad en segmentos vertebrales que perdieron rango — y con ello, alivia dolor y mejora la función.',
    'Pero aquí está la diferencia: no la aplico como servicio independiente. La uso <strong>cuando la evaluación muestra una restricción articular real</strong> que está contribuyendo a tu problema. No "te trueno la espalda" porque sí.',
    'El ajuste sin diagnóstico es una apuesta. El ajuste dentro de un proceso —con un porqué claro y un plan de fortalecimiento detrás— es una herramienta poderosa. Esa es la diferencia.',
  ],
  queFacts: [
    { label: 'Técnica', value: 'Manipulación HVLA · alta velocidad, baja amplitud' },
    { label: 'Zona', value: 'Cervical, dorsal, lumbar · según indicación' },
    { label: 'Indicación', value: 'Restricción articular confirmada en evaluación' },
    { label: 'Contexto', value: 'Dentro del proceso, no como servicio aislado' },
  ],
  compKicker: 'Comparativa', compTitle: 'Quiropraxia vs', compSub: 'osteopatía vs manual.',
  compIntro: 'Las tres trabajan el sistema musculoesquelético, pero con enfoques distintos. Esto es lo que las diferencia.',
  compCols: [
    { name: 'Quiropraxia', highlight: true },
    { name: 'Osteopatía', highlight: false },
    { name: 'Terapia manual', highlight: false },
  ],
  compRows: [
    { criterio: 'Foco', values: ['Articulación vertebral', 'Cuerpo global / fascia', 'Tejidos blandos + articular'] },
    { criterio: 'Técnica clave', values: ['Ajuste HVLA (el "crack")', 'Manipulación suave global', 'Movilización + masaje'] },
    { criterio: 'Velocidad', values: ['Alta, impulso rápido', 'Lenta, progresiva', 'Variable'] },
    { criterio: 'En mi proceso', values: ['Cuando hay restricción articular', 'Integrada según caso', 'Base de casi todo tratamiento'] },
  ],
  casosWord: 'CASOS.', casosTitle: 'Dónde', casosSub: 'la aplico.',
  casosIntro: 'Tres escenarios reales donde el ajuste vertebral, dentro del proceso, marca diferencia.',
  casos: [
    { title: 'Cervicales en weightlifters', desc: 'Levantadores con restricción cervical alta tras trabajo overhead repetido. El ajuste libera el segmento y mejora la posición de la barra sobre la cabeza.' },
    { title: 'Lumbares en crossfitters', desc: 'Restricción lumbar baja que limita la bisagra de cadera en deadlift. Ajustar el segmento + fortalecer devuelve el patrón sin dolor.' },
    { title: 'Dorsales en runners', desc: 'Rigidez dorsal que altera la mecánica de brazos al correr. Restaurar la movilidad torácica mejora la eficiencia de la zancada.' },
  ],
  contraTitle: 'La quiropraxia no es para todos. Hay situaciones donde está contraindicada.',
  contra: [
    'Osteoporosis severa o fragilidad ósea',
    'Fractura o sospecha de fractura',
    'Hernia discal con compromiso neurológico agudo',
    'Infección o tumor en la zona',
    'Artritis inflamatoria activa (AR, espondilitis)',
    'Inestabilidad vertebral diagnosticada',
  ],
  faqs: [
    { q: '¿La quiropraxia es segura?', a: 'Sí, cuando se aplica con diagnóstico previo y técnica adecuada, por un profesional formado. El riesgo aparece cuando se ajusta sin evaluación o en presencia de contraindicaciones. Por eso nunca ajusto sin haber evaluado primero qué necesitas — y qué no.' },
    { q: '¿Cuántas sesiones se necesitan?', a: 'Pocas. El ajuste no es un tratamiento de "mantenimiento" indefinido. Se usa puntualmente cuando hay restricción articular, dentro de un proceso más amplio de fortalecimiento. Si alguien te dice que necesitas ajustes semanales de por vida, desconfía.' },
    { q: '¿Es lo mismo quiropráctico que quiropraxista?', a: 'Hay diferencias de formación y regulación según el país. Lo importante: yo aplico la manipulación vertebral como fisioterapeuta, dentro de un marco clínico, con diagnóstico previo. La técnica es la misma; el contexto de aplicación es lo que importa.' },
    { q: '¿Puedo agendar solo quiropraxia o necesito valoración previa?', a: 'Necesitas valoración previa, siempre. No aplico ajustes "a ciegas". La primera sesión evalúa si realmente hay indicación de manipulación o si tu caso necesita otra cosa. Ajustar sin diagnóstico es exactamente lo que evito.' },
    { q: '¿Hace ruido el ajuste? ¿Es normal?', a: 'Sí, el "crack" es normal — es la liberación de gas en el líquido articular (cavitación), no es el hueso. No todos los ajustes suenan, y el sonido no indica que fue "mejor". Lo que importa es la restauración del movimiento, no el ruido.' },
    { q: '¿Quién no debe recibir quiropraxia?', a: 'Personas con osteoporosis severa, fracturas, hernias con compromiso neurológico agudo, infecciones, tumores, artritis inflamatoria activa o inestabilidad vertebral. Por eso la evaluación previa es obligatoria — para descartar estas situaciones.' },
  ],
  ctaTitle: 'Ajuste con', ctaSub: 'diagnóstico.',
  ctaDesc: 'Primera sesión: evaluación que determina si la quiropraxia es lo que necesitas — o si tu caso pide otra técnica. 60 min. Sin ajustes a ciegas.',
};

const PUNCION_DATA = {
  name: 'Punción Seca', bigWord: 'AGUJA.', kicker: 'Punción seca · Bogotá',
  heroTitle: 'Punción seca', heroSub: 'sin misterios.',
  heroDesc: 'Técnica con aguja sólida para liberar puntos gatillo miofasciales. <strong>No es acupuntura</strong> — es fisioterapia con base neurológica, aplicada dentro del proceso.',
  esEs: 'Inserción de una aguja filiforme directamente en el punto gatillo muscular para provocar su liberación y desactivar el dolor referido.',
  noEs: 'Acupuntura. No sigue meridianos ni energía — sigue anatomía y fisiología muscular concreta.',
  queTitle: 'Aguja seca,', queSub: 'punto exacto.',
  queIntro: 'Se llama "seca" porque la aguja no inyecta nada. Es la aguja en sí, en el punto preciso, lo que libera la contractura.',
  queParas: [
    'La punción seca usa una <strong>aguja sólida y fina</strong> (como la de acupuntura, pero ahí termina el parecido) que se inserta directamente en el punto gatillo miofascial — ese nudo doloroso que las manos no alcanzan a liberar.',
    'El mecanismo es <strong>neurológico, no energético</strong>. La aguja provoca una respuesta de espasmo local que "resetea" la placa motora, reduce la actividad eléctrica anormal del músculo y libera la contractura profunda. Sin medicamentos.',
    'Se llama "seca" porque no inyecta ninguna sustancia — a diferencia de la punción húmeda (con anestésico o corticoide). Es la aguja en el punto exacto lo que hace el trabajo. Y la aplico dentro del proceso, no como servicio suelto.',
  ],
  queFacts: [
    { label: 'Herramienta', value: 'Aguja sólida filiforme, estéril, un solo uso' },
    { label: 'Diana', value: 'Punto gatillo miofascial (trigger point)' },
    { label: 'Mecanismo', value: 'Respuesta neurológica · reseteo de placa motora' },
    { label: 'Sin', value: 'Medicamentos, anestésicos ni inyecciones' },
  ],
  compKicker: 'Comparativa', compTitle: 'Punción seca', compSub: 'vs acupuntura.',
  compIntro: 'Comparten la aguja, pero ahí termina el parecido. Son disciplinas con fundamentos completamente distintos.',
  compCols: [
    { name: 'Punción seca', highlight: true },
    { name: 'Acupuntura', highlight: false },
  ],
  compRows: [
    { criterio: 'Base teórica', values: ['Anatomía y neurofisiología', 'Medicina tradicional china'] },
    { criterio: 'Diana', values: ['Punto gatillo muscular', 'Puntos de meridianos'] },
    { criterio: 'Objetivo', values: ['Liberar contractura específica', 'Equilibrar energía (Qi)'] },
    { criterio: 'Quién la aplica', values: ['Fisioterapeuta formado', 'Acupuntor / MTC'] },
    { criterio: 'Profundidad', values: ['Hasta el punto gatillo', 'Variable según punto'] },
  ],
  casosWord: 'CASOS.', casosTitle: 'Dónde', casosSub: 'la aplico.',
  casosIntro: 'Tres escenarios típicos en deportistas donde la punción seca libera lo que las manos no alcanzan.',
  casos: [
    { title: 'Trapecio en grapplers', desc: 'Puntos gatillo profundos en trapecio y elevador de la escápula por las presiones del BJJ. La punción libera la tensión cervical que el masaje no resuelve.' },
    { title: 'Aductores en pubalgia', desc: 'Trigger points en el aductor que mantienen el dolor inguinal. Liberarlos con aguja, dentro del proceso de pubalgia, acelera la recuperación.' },
    { title: 'Gemelos en runners', desc: 'Contracturas profundas en gastrocnemio y sóleo por el volumen de carrera. La punción desactiva los puntos que generan el dolor referido al tobillo.' },
  ],
  contraTitle: 'La punción seca no se aplica en ciertas situaciones. La evaluación previa las descarta.',
  contra: [
    'Miedo extremo o fobia a las agujas (belonefobia)',
    'Trastornos de coagulación o anticoagulantes',
    'Infección o herida en la zona a tratar',
    'Primer trimestre de embarazo (zonas específicas)',
    'Inmunosupresión severa',
    'Alergia conocida al níquel (según aguja)',
  ],
  faqs: [
    { q: '¿Punción seca y acupuntura son lo mismo?', a: 'No. Comparten el uso de una aguja fina, pero nada más. La punción seca se basa en anatomía y neurofisiología — busca puntos gatillo musculares concretos. La acupuntura se basa en la medicina tradicional china y sus meridianos energéticos. Fundamentos completamente distintos.' },
    { q: '¿Cuánto duele la punción seca?', a: 'Seré honesto: se siente. La inserción de la aguja apenas se nota, pero al llegar al punto gatillo puede haber una respuesta de espasmo local —un "calambre" breve— que es justo lo que buscamos. Es momentáneo. Después suele quedar una sensación de "agujetas" 24—48h. No es un masaje relajante, pero es tolerable y efectivo.' },
    { q: '¿Cuántas sesiones se necesitan?', a: 'Pocas, y siempre dentro del proceso. La punción no es un tratamiento en sí mismo — es una técnica para liberar contracturas que luego trabajamos con fortalecimiento. Normalmente 2—4 aplicaciones a lo largo del proceso, no sesiones indefinidas.' },
    { q: '¿Hay efectos secundarios?', a: 'Los más comunes son leves: dolor tipo agujetas 24—48h, pequeños hematomas ocasionales, sensación de cansancio en la zona. Efectos serios son muy raros cuando la aplica un profesional formado con técnica estéril. La evaluación previa descarta los riesgos.' },
    { q: '¿Quién no puede recibir punción seca?', a: 'Personas con trastornos de coagulación o en anticoagulantes, infección en la zona, fobia extrema a agujas, inmunosupresión severa, o en ciertas zonas durante el embarazo. La valoración previa identifica si es seguro para ti.' },
    { q: '¿Cuánto tiempo de reposo después?', a: 'Nada de reposo absoluto. Puedes seguir tu día normal. Se recomienda evitar entrenamiento intenso de esa zona específica las primeras 24h para dejar que el músculo se recupere de la respuesta. Al día siguiente, normalidad.' },
  ],
  ctaTitle: 'Libera lo que', ctaSub: 'las manos no alcanzan.',
  ctaDesc: 'Primera sesión: evaluación + aplicación si está indicada, dentro de tu proceso de tratamiento. 60 min. Técnica con base neurológica, no energética.',
};

const MASAJES_DATA = {
  name: 'Masaje Deportivo', bigWord: 'MASAJE.', kicker: 'Masaje deportivo · Bogotá',
  heroTitle: 'Masaje deportivo,', heroSub: 'no de spa.',
  heroDesc: 'Masaje descontracturante y profundo para liberar tensión y mejorar rendimiento. <strong>No es un masaje relajante de spa</strong> — es una técnica terapéutica con objetivo clínico.',
  esEs: 'Trabajo manual profundo sobre la musculatura para liberar tensión, mejorar circulación y preparar o recuperar el tejido del esfuerzo deportivo.',
  noEs: 'Un masaje relajante de spa con aromaterapia. El objetivo es funcional, no de relajación, y a veces es intenso.',
  queTitle: 'Profundo y', queSub: 'con propósito.',
  queIntro: 'El masaje deportivo trabaja el músculo con intención terapéutica. No busca que te duermas — busca que rindas mejor o te recuperes más rápido.',
  queParas: [
    'El masaje deportivo es <strong>trabajo manual profundo</strong> dirigido a la musculatura que el deporte sobrecarga. Libera adherencias, mejora la circulación local, reduce tensión y prepara o recupera el tejido del esfuerzo.',
    'La diferencia con el masaje de spa es el <strong>propósito y la intensidad</strong>. El de spa busca relajación; este busca función. A veces es placentero, a veces es intenso —especialmente sobre una contractura— pero siempre tiene un objetivo clínico claro.',
    'Lo aplico según el momento: descontracturante cuando hay tensión acumulada, pre-competencia para activar, post-competencia para recuperar. Y si la contractura no cede con masaje, es señal de que hay algo más que requiere valoración integral.',
  ],
  queFacts: [
    { label: 'Tipo', value: 'Descontracturante · profundo · deportivo' },
    { label: 'Objetivo', value: 'Función y rendimiento, no relajación' },
    { label: 'Momentos', value: 'Descarga · pre-competencia · recuperación' },
    { label: 'Intensidad', value: 'Variable · puede ser intenso sobre contracturas' },
  ],
  compKicker: 'Comparativa', compTitle: 'Masaje deportivo', compSub: 'vs de spa.',
  compIntro: 'Ambos usan las manos sobre el músculo, pero persiguen objetivos opuestos. Esto los diferencia.',
  compCols: [
    { name: 'Deportivo', highlight: true },
    { name: 'De spa', highlight: false },
  ],
  compRows: [
    { criterio: 'Objetivo', values: ['Función y rendimiento', 'Relajación y bienestar'] },
    { criterio: 'Intensidad', values: ['Media-alta, profundo', 'Suave, superficial'] },
    { criterio: 'Enfoque', values: ['Músculo específico problemático', 'Cuerpo global'] },
    { criterio: 'Contexto', values: ['Clínico, con objetivo', 'Recreativo'] },
    { criterio: 'Quién lo aplica', values: ['Fisioterapeuta', 'Terapeuta de spa'] },
  ],
  casosWord: 'CASOS.', casosTitle: 'Dónde', casosSub: 'lo aplico.',
  casosIntro: 'Tres escenarios típicos donde el masaje deportivo, con objetivo claro, marca diferencia.',
  casos: [
    { title: 'Descarga del crossfitter', desc: 'Tras semanas de volumen alto, la musculatura acumula tensión que limita el rendimiento. El masaje descontracturante libera y permite seguir entrenando sin que derive en lesión.' },
    { title: 'Recuperación del runner', desc: 'Post-tirada larga o competencia, gemelos y cuádriceps quedan cargados. El masaje de recuperación acelera el retorno a la normalidad y reduce las agujetas.' },
    { title: 'Pre-competencia', desc: 'Antes de una competencia, un masaje de activación prepara el tejido —sin la profundidad del descontracturante— para optimizar el rendimiento sin generar fatiga.' },
  ],
  contraTitle: 'El masaje deportivo no es recomendable en ciertas situaciones.',
  contra: [
    'Lesión aguda con inflamación activa (primeras 48—72h)',
    'Rotura muscular o fibrilar reciente',
    'Trombosis o sospecha de trombo',
    'Infección de la piel o herida en la zona',
    'Fiebre o proceso infeccioso activo',
    'Sobre una lesión sin diagnosticar',
  ],
  faqs: [
    { q: '¿Es lo mismo masaje deportivo que descontracturante?', a: 'El descontracturante es un tipo de masaje deportivo —el más común— enfocado en liberar contracturas y tensión muscular acumulada. "Masaje deportivo" es el término general que incluye también el pre-competencia, el de recuperación y el de activación. Todos comparten el objetivo funcional.' },
    { q: '¿Cuánto dura una sesión?', a: 'Depende del objetivo y la zona. Un masaje descontracturante focalizado puede ser 30—45 min; uno más global, hasta 60. Lo importante no es la duración sino trabajar bien la musculatura que lo necesita.' },
    { q: '¿Duele el masaje descontracturante?', a: 'Puede ser intenso, sobre todo al trabajar una contractura establecida. No es el dolor del spa relajante. Pero debe ser un "dolor bueno", tolerable, no insoportable. Si duele demasiado, se ajusta la intensidad. El objetivo es liberar, no torturar.' },
    { q: '¿Cuántas sesiones se necesitan?', a: 'Si es para descarga puntual, una puede bastar. Si la contractura es recurrente, lo importante no es repetir masajes indefinidamente sino entender POR QUÉ vuelve — ahí entra la valoración integral. El masaje alivia; corregir la causa resuelve.' },
    { q: '¿Es lo mismo que un masaje en spa?', a: 'No. El de spa busca relajación con técnicas suaves y aromaterapia. El deportivo busca función: es más profundo, focalizado en la musculatura problemática, con objetivo terapéutico. Distinto propósito, distinta técnica, distinto resultado.' },
    { q: '¿Cuándo NO es recomendable?', a: 'En lesiones agudas con inflamación (primeras 48—72h), roturas musculares recientes, trombosis, infecciones de piel, fiebre, o sobre una lesión sin diagnosticar. Masajear una zona lesionada sin saber qué tiene puede empeorarla. Por eso evalúo antes.' },
  ],
  ctaTitle: 'Libera la tensión.', ctaSub: 'Mejora el rendimiento.',
  ctaDesc: 'Primera sesión: evaluación + masaje según tu objetivo (descarga, recuperación, activación). 60 min. Si la contractura no cede, valoramos la causa.',
};

const READAPTACION_DATA = {
  name: 'Readaptación', bigWord: 'VOLVER.', kicker: 'Readaptación deportiva · Bogotá',
  heroTitle: 'Vuelve a competir', heroSub: 'más fuerte.',
  heroDesc: 'La fase final que devuelve al atleta a su nivel pre-lesión. <strong>No es rehabilitación tradicional</strong> — es el puente entre "ya no me duele" y "vuelvo a rendir".',
  esEs: 'La fase final del proceso: readaptación al gesto deportivo específico para volver a competir al nivel previo, sin recaer.',
  noEs: 'Rehabilitación tradicional. La rehab termina cuando el dolor se va; la readaptación termina cuando vuelves a rendir.',
  queTitle: 'La fase que', queSub: 'todos olvidan.',
  queIntro: 'Entre "ya no te duele" y "vuelves a competir" hay un abismo. La readaptación es el puente — la fase que la mayoría de tratamientos salta, y la razón #1 de recaída.',
  queParas: [
    'La readaptación deportiva es la <strong>fase final del proceso</strong>: cuando el dolor ya se fue y el tejido sanó, pero el atleta todavía no está listo para volver a su nivel. Readapta el cuerpo al gesto deportivo específico, a la carga real de competición.',
    'La diferencia con la rehabilitación es crucial. La <strong>rehab te quita el dolor</strong> y te devuelve la función básica. La <strong>readaptación te devuelve el rendimiento</strong> — el sprint, el salto, el levantamiento, la resistencia a la fatiga en competición.',
    'Saltarse esta fase es por qué tantos atletas "se curan" y recaen a las pocas semanas de volver. Vuelven sin estar readaptados a las demandas reales de su deporte. La readaptación es lo que hace que vuelvas más fuerte que antes — no solo recuperado.',
  ],
  queFacts: [
    { label: 'Momento', value: 'Fase final · tras tratamiento y fortalecimiento' },
    { label: 'Objetivo', value: 'Volver al nivel pre-lesión sin recaer' },
    { label: 'Enfoque', value: 'Gesto deportivo específico + carga real' },
    { label: 'Criterio de alta', value: 'Tests funcionales objetivos, no calendario' },
  ],
  compKicker: 'Comparativa', compTitle: 'Rehabilitación', compSub: 'vs readaptación.',
  compIntro: 'Se confunden constantemente, pero son fases distintas con objetivos distintos. Esta diferencia lo cambia todo.',
  compCols: [
    { name: 'Readaptación', highlight: true },
    { name: 'Rehabilitación', highlight: false },
  ],
  compRows: [
    { criterio: 'Objetivo', values: ['Volver a rendir', 'Quitar el dolor'] },
    { criterio: 'Termina cuando', values: ['Vuelves a competir', 'El dolor desaparece'] },
    { criterio: 'Enfoque', values: ['Gesto deportivo específico', 'Función básica'] },
    { criterio: 'Carga', values: ['Real de competición', 'Progresiva inicial'] },
    { criterio: 'Criterio de alta', values: ['Tests funcionales objetivos', 'Ausencia de dolor'] },
  ],
  casosWord: 'RETURN.', casosTitle: 'Para', casosSub: 'quién es.',
  casosIntro: 'Tres perfiles de atleta que necesitan readaptación — y que sin ella recaen.',
  casos: [
    { title: 'Post-lesión que no rinde', desc: 'El atleta que "se curó" pero ya no salta igual, no corre igual, tiene miedo del gesto que lo lesionó. La readaptación reconstruye la confianza y el rendimiento.' },
    { title: 'Post-cirugía', desc: 'Tras una operación y la rehabilitación inicial, el atleta necesita readaptarse a las demandas reales de su deporte antes de volver a competir. La cirugía repara; la readaptación devuelve.' },
    { title: 'Lesiones recurrentes', desc: 'El que se lesiona de lo mismo una y otra vez. Casi siempre es porque nunca completó la readaptación — volvió antes de estar listo. Romper ese ciclo es el objetivo.' },
  ],
  contraTitle: 'La readaptación tiene su momento. No se aplica en cualquier punto del proceso.',
  contra: [
    'Lesión aún en fase aguda o dolorosa',
    'Tejido que no ha completado su cicatrización',
    'Sin haber pasado por tratamiento y fortalecimiento previos',
    'Dolor presente durante el gesto deportivo básico',
    'Falta de fuerza base mínima para la carga deportiva',
  ],
  faqs: [
    { q: '¿Cuál es la diferencia entre fisio y readaptación?', a: 'La fisioterapia (tratamiento + fortalecimiento) te quita el dolor y te devuelve la función básica. La readaptación es la fase siguiente: te devuelve el RENDIMIENTO deportivo específico. Es la diferencia entre "puedes caminar y mover el brazo" y "puedes volver a hacer muscle-ups en competición".' },
    { q: '¿Cuánto dura el proceso?', a: 'La readaptación en sí suele tomar 2—4 semanas, pero depende del deporte y de cuán lejos estés de tu nivel. Es la fase final, así que llega tras el tratamiento y fortalecimiento. El criterio de alta no es el calendario sino pasar los tests funcionales de retorno.' },
    { q: '¿La readaptación es solo para atletas profesionales?', a: 'No. Cualquier deportista que quiera volver a su nivel real la necesita — el crossfitter recreacional que quiere volver a su PR, el runner de fin de semana que quiere correr su media, la bailarina aficionada que quiere volver al escenario. No necesitas ser profesional, solo querer volver a rendir.' },
    { q: '¿Necesito haber pasado por fisioterapia antes?', a: 'Sí. La readaptación es la fase final, no el inicio. Requiere que el dolor ya esté controlado y el tejido haya sanado. Si llegas con dolor agudo, primero tratamos eso. La readaptación construye sobre una base ya recuperada.' },
    { q: '¿Qué pasa si no hago readaptación después de una lesión?', a: 'Es la razón #1 de recaída. Vuelves al deporte sin estar readaptado a sus demandas reales, y el cuerpo —que aún no tolera esa carga específica— vuelve a fallar. Por eso tantos atletas "se curan" y recaen a las pocas semanas. La readaptación rompe ese ciclo.' },
    { q: '¿Trabajan junto a mi entrenador o por separado?', a: 'Idealmente juntos. La readaptación funciona mejor coordinada con tu entrenador o coach, para alinear la vuelta a la carga deportiva con tu planificación. Comparto criterios y progresión para que la transición de mi consultorio a tu box/pista/estudio sea fluida.' },
  ],
  ctaTitle: 'No te cures.', ctaSub: 'Vuelve a rendir.',
  ctaDesc: 'Primera sesión: evaluación de tu nivel actual vs pre-lesión + plan de readaptación con criterios objetivos de retorno. 60 min. La fase que todos olvidan.',
};

function QuiropraxiaPage({ onNavigate }) { return <window.ServicioPage data={QUIROPRAXIA_DATA} onNavigate={onNavigate} />; }
function PuncionSecaPage({ onNavigate }) { return <window.ServicioPage data={PUNCION_DATA} onNavigate={onNavigate} />; }
function MasajesPage({ onNavigate }) { return <window.ServicioPage data={MASAJES_DATA} onNavigate={onNavigate} />; }
function ReadaptacionPage({ onNavigate }) { return <window.ServicioPage data={READAPTACION_DATA} onNavigate={onNavigate} />; }

if (typeof window !== "undefined") window.QuiropraxiaPage = QuiropraxiaPage;
if (typeof window !== "undefined") window.PuncionSecaPage = PuncionSecaPage;
if (typeof window !== "undefined") window.MasajesPage = MasajesPage;
if (typeof window !== "undefined") window.ReadaptacionPage = ReadaptacionPage;
/* ==================== lesiones.jsx ==================== */
// LESIONES - Página padre / hub editorial
// Catálogo completo con filtros (zona, deporte, complejidad), matriz por deporte, y CTA.

function LesionesPage({ onNavigate }) {
  const [filterZone, setFilterZone] = React.useState('Todas');
  const [filterSport, setFilterSport] = React.useState('Todos');
  const [filterComplexity, setFilterComplexity] = React.useState('Todas');
  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  const lesiones = [
    { name: 'Pubalgia',             zone: 'Core',          area: 'Ingle / Pelvis',  complexity: 'Alta',  recovery: '4—12 sem',  page: 'pubalgia',   sports: ['CrossFit', 'Weightlifting', 'BJJ'] },
    { name: 'Ciática',              zone: 'Core',          area: 'Lumbar / Pierna', complexity: 'Media', recovery: '3—8 sem',   page: 'ciatica',    sports: ['Weightlifting', 'BJJ', 'Boxeo'] },
    { name: 'Tendinitis Rotuliana', zone: 'Tren inferior', area: 'Rodilla',         complexity: 'Media', recovery: '4—10 sem',  page: 'tendinitis', sports: ['CrossFit', 'Weightlifting'] },
    { name: 'Hombro Congelado',     zone: 'Tren superior', area: 'Hombro',          complexity: 'Alta',  recovery: '8—24 sem',  page: 'hombro',     sports: ['CrossFit', 'BJJ', 'Boxeo'] },
    { name: 'Contractura Muscular', zone: 'Core',          area: 'Muscular',        complexity: 'Baja',  recovery: '1—3 sem',   page: 'contractura',   sports: ['CrossFit', 'Weightlifting', 'BJJ', 'Boxeo'] },
    { name: 'Bursitis',             zone: 'Tren superior', area: 'Articular',       complexity: 'Media', recovery: '3—6 sem',   page: 'bursitis',      sports: ['CrossFit'] },
    { name: 'Condromalacia',        zone: 'Tren inferior', area: 'Rodilla',         complexity: 'Media', recovery: '6—12 sem',  page: 'condromalacia', sports: ['Weightlifting', 'CrossFit'] },
    { name: 'Periostitis Tibial',   zone: 'Tren inferior', area: 'Tibia',           complexity: 'Baja',  recovery: '2—6 sem',   page: 'periostitis',   sports: ['CrossFit', 'Boxeo'] },
    { name: 'Epitrocleítis',        zone: 'Tren superior', area: 'Codo',            complexity: 'Media', recovery: '4—8 sem',   page: 'epitrocleitis', sports: ['CrossFit', 'BJJ', 'Boxeo'] },
  ];

  const zones = ['Todas', 'Tren superior', 'Core', 'Tren inferior'];
  const sports = ['Todos', 'CrossFit', 'Weightlifting', 'BJJ', 'Boxeo'];
  const complexities = ['Todas', 'Baja', 'Media', 'Alta'];

  const filtered = lesiones.filter(l => {
    if (filterZone !== 'Todas' && l.zone !== filterZone) return false;
    if (filterSport !== 'Todos' && !l.sports.includes(filterSport)) return false;
    if (filterComplexity !== 'Todas' && l.complexity !== filterComplexity) return false;
    return true;
  });

  const complexityColor = (c) => c === 'Alta' ? '#DC2626' : c === 'Media' ? '#C9A55A' : '#16A34A';

  return (
    <main>
      <LesionesHero onNavigate={onNavigate} total={lesiones.length} withProtocol={lesiones.filter(l => l.page).length} />
      <LesionesCatalog
        lesiones={lesiones}
        filtered={filtered}
        zones={zones}
        sports={sports}
        complexities={complexities}
        filterZone={filterZone}
        filterSport={filterSport}
        filterComplexity={filterComplexity}
        setFilterZone={setFilterZone}
        setFilterSport={setFilterSport}
        setFilterComplexity={setFilterComplexity}
        complexityColor={complexityColor}
        hoveredIdx={hoveredIdx}
        setHoveredIdx={setHoveredIdx}
        onNavigate={onNavigate}
      />
      <LesionesSportMatrix lesiones={lesiones} sports={sports.slice(1)} onNavigate={onNavigate} />
      <LesionesMethodStrip onNavigate={onNavigate} />
      <LesionesCTA onNavigate={onNavigate} />
    </main>
  );
}

// =====================================================================
// HERO
// =====================================================================
function LesionesHero({ onNavigate, total, withProtocol }) {
  return (
    <section style={{
      padding: '12rem 0 6rem',
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Massive bg */}
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(10rem, 24vw, 26rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.06)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        LESIONES.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '4rem',
          alignItems: 'flex-end',
        }} className="les-hero-grid">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}>
              <div style={{ width: '60px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Catálogo clínico
              </div>
            </div>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
              marginBottom: '2.5rem',
            }}>
              Si te lesionaste,
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                tengo el plan.
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
              lineHeight: 1.55,
              color: 'rgba(10,10,10,0.65)',
              maxWidth: '620px',
              marginBottom: '2.5rem',
            }}>
              Diagnóstico diferencial primero. Tratamiento integrado después. Vuelta al deporte siempre.
              <span style={{ color: '#0A0A0A', fontWeight: 500 }}> Cada lesión tiene su protocolo.</span>
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate('fisioterapia')}
                style={{
                  background: '#0A0A0A',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#C9A55A';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0A0A0A';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Agendar valoración
                <span>→</span>
              </button>
              <a
                href="#catalogo"
                style={{
                  background: 'transparent',
                  color: '#0A0A0A',
                  border: '1px solid rgba(10,10,10,0.2)',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A55A';
                  e.currentTarget.style.color = '#C9A55A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(10,10,10,0.2)';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
              >
                Ver catálogo ↓
              </a>
            </div>
          </div>

          {/* Stats column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '1px solid rgba(10,10,10,0.08)',
            paddingLeft: '2.5rem',
          }} className="les-hero-stats">
            {[
              { value: total, suffix: 'lesiones', label: 'En el catálogo', desc: 'Catalogadas clínicamente' },
              { value: withProtocol, suffix: 'protocolos', label: 'Públicos', desc: 'Con artículo detallado' },
              { value: '500+', suffix: 'casos', label: 'Resueltos', desc: 'Desde 2017' },
              { value: '4', suffix: 'fases', label: 'Por lesión', desc: 'Diagnóstico → Return to play' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '1.5rem 0',
                borderBottom: i < 3 ? '1px solid rgba(10,10,10,0.06)' : 'none',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  marginBottom: '0.375rem',
                }}>
                  <div style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    color: '#C9A55A',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'rgba(10,10,10,0.5)',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    {s.suffix}
                  </div>
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  marginBottom: '0.125rem',
                }}>
                  {s.label}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(10,10,10,0.45)',
                }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .les-hero-grid { grid-template-columns: 1fr !important; }
          .les-hero-stats { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(10,10,10,0.08); padding-top: 2rem; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// CATALOG WITH FILTERS
// =====================================================================
function LesionesCatalog({
  lesiones, filtered, zones, sports, complexities,
  filterZone, filterSport, filterComplexity,
  setFilterZone, setFilterSport, setFilterComplexity,
  complexityColor, hoveredIdx, setHoveredIdx, onNavigate,
}) {
  const resetAll = () => {
    setFilterZone('Todas');
    setFilterSport('Todos');
    setFilterComplexity('Todas');
  };
  const hasFilter = filterZone !== 'Todas' || filterSport !== 'Todos' || filterComplexity !== 'Todas';

  return (
    <section id="catalogo" style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
    }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '3rem',
          alignItems: 'flex-end',
        }} className="cat-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Catálogo · {String(filtered.length).padStart(2, '0')}/{String(lesiones.length).padStart(2, '0')}
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
            }}>
              Filtra
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                por lo tuyo.
              </span>
            </h2>
          </div>

          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(10,10,10,0.6)',
            lineHeight: 1.55,
            maxWidth: '460px',
          }}>
            Cruza zona corporal, deporte que practicas y complejidad de la lesión. Te muestro lo que aplica a ti — no todo.
          </p>
        </div>

        {/* Filter bar */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(10,10,10,0.08)',
          padding: '1.5rem 2rem',
          marginBottom: '1px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr) auto',
          gap: '2rem',
          alignItems: 'center',
        }} className="cat-filters">
          <FilterGroup label="Zona" options={zones} value={filterZone} onChange={setFilterZone} />
          <FilterGroup label="Deporte" options={sports} value={filterSport} onChange={setFilterSport} />
          <FilterGroup label="Complejidad" options={complexities} value={filterComplexity} onChange={setFilterComplexity} />

          {hasFilter && (
            <button
              onClick={resetAll}
              style={{
                background: 'transparent',
                border: '1px solid rgba(10,10,10,0.15)',
                padding: '0.625rem 1rem',
                fontSize: '0.6875rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                cursor: 'pointer',
                color: 'rgba(10,10,10,0.6)',
                transition: 'all 0.3s',
                fontFamily: 'Space Grotesk',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C9A55A';
                e.currentTarget.style.color = '#C9A55A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10,10,10,0.15)';
                e.currentTarget.style.color = 'rgba(10,10,10,0.6)';
              }}
            >
              ✕ Limpiar
            </button>
          )}
        </div>

        {/* Catalog table */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(10,10,10,0.08)',
        }}>
          {/* Header row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60px 2fr 1.2fr 1fr 1fr 1fr 60px',
            padding: '1rem 2rem',
            borderBottom: '1px solid rgba(10,10,10,0.08)',
            fontSize: '0.6875rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'rgba(10,10,10,0.4)',
            background: '#FAFAFA',
          }} className="cat-row-head">
            <div>Nº</div>
            <div>Lesión</div>
            <div>Zona / Área</div>
            <div>Complejidad</div>
            <div>Recuperación</div>
            <div>Deportes</div>
            <div></div>
          </div>

          {filtered.length === 0 ? (
            <div style={{
              padding: '4rem 2rem',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: '0.75rem',
              }}>
                Sin resultados
              </div>
              <div style={{
                fontSize: '1.5rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#0A0A0A',
                marginBottom: '1rem',
              }}>
                No tengo lesiones que crucen esos filtros.
              </div>
              <button
                onClick={resetAll}
                style={{
                  background: '#0A0A0A',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#C9A55A'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#0A0A0A'}
              >
                Limpiar filtros
              </button>
            </div>
          ) : filtered.map((les, i) => {
            const isHovered = hoveredIdx === i;
            const clickable = !!les.page;
            return (
              <div
                key={`${les.name}-${i}`}
                onClick={() => clickable && onNavigate(les.page)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 2fr 1.2fr 1fr 1fr 1fr 60px',
                  padding: '1.75rem 2rem',
                  borderBottom: i < filtered.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                  cursor: clickable ? 'pointer' : 'default',
                  background: isHovered ? '#0A0A0A' : '#FFFFFF',
                  color: isHovered ? '#FFFFFF' : '#0A0A0A',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  alignItems: 'center',
                }}
                className="cat-row"
              >
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                  transition: 'color 0.4s',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div>
                  <div style={{
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    fontFamily: 'Space Grotesk',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    marginBottom: '0.375rem',
                  }}>
                    {les.name}
                  </div>
                  {clickable ? (
                    <div style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.4)',
                      transition: 'color 0.4s',
                    }}>
                      Ver protocolo →
                    </div>
                  ) : (
                    <div style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(10,10,10,0.35)',
                      transition: 'color 0.4s',
                      fontStyle: 'italic',
                    }}>
                      Sin artículo · Se trata igual
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <div style={{
                    fontSize: '0.875rem',
                    color: isHovered ? 'rgba(255,255,255,0.85)' : '#0A0A0A',
                    fontWeight: 500,
                    transition: 'color 0.4s',
                  }}>
                    {les.area}
                  </div>
                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(10,10,10,0.35)',
                    transition: 'color 0.4s',
                  }}>
                    {les.zone}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: complexityColor(les.complexity),
                  }} />
                  <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>
                    {les.complexity}
                  </span>
                </div>

                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: isHovered ? '#C9A55A' : '#0A0A0A',
                  transition: 'color 0.4s',
                }}>
                  {les.recovery}
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.25rem',
                }}>
                  {les.sports.map((s, j) => (
                    <span key={j} style={{
                      fontSize: '0.625rem',
                      padding: '0.25rem 0.5rem',
                      background: isHovered ? 'rgba(201,165,90,0.2)' : 'rgba(10,10,10,0.06)',
                      color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.7)',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      transition: 'all 0.4s',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>

                <div style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Space Grotesk',
                  color: clickable ? (isHovered ? '#C9A55A' : 'rgba(10,10,10,0.2)') : (isHovered ? 'rgba(255,255,255,0.2)' : 'rgba(10,10,10,0.15)'),
                  transform: isHovered && clickable ? 'translateX(6px)' : 'translateX(0)',
                  transition: 'all 0.4s',
                  textAlign: 'right',
                  opacity: clickable ? 1 : 0.5,
                }}>
                  {clickable ? '→' : '·'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cat-header { grid-template-columns: 1fr !important; }
          .cat-filters { grid-template-columns: 1fr !important; gap: 1.5rem !important; padding: 1.5rem !important; }
          .cat-row-head { display: none !important; }
          .cat-row { grid-template-columns: 40px 1fr !important; gap: 1rem; padding: 1.25rem !important; }
          .cat-row > div:nth-child(3),
          .cat-row > div:nth-child(4),
          .cat-row > div:nth-child(5),
          .cat-row > div:nth-child(6),
          .cat-row > div:nth-child(7) { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// Filter button group
function FilterGroup({ label, options, value, onChange }) {
  return (
    <div>
      <div style={{
        fontSize: '0.625rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: 'rgba(10,10,10,0.4)',
        marginBottom: '0.625rem',
      }}>
        {label}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
        {options.map(opt => {
          const isActive = value === opt;
          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              style={{
                padding: '0.5rem 0.875rem',
                background: isActive ? '#0A0A0A' : 'transparent',
                color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.65)',
                border: `1px solid ${isActive ? '#0A0A0A' : 'rgba(10,10,10,0.12)'}`,
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s',
                fontFamily: 'inherit',
                letterSpacing: '-0.005em',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = '#C9A55A';
                  e.currentTarget.style.color = '#0A0A0A';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'rgba(10,10,10,0.12)';
                  e.currentTarget.style.color = 'rgba(10,10,10,0.65)';
                }
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// =====================================================================
// SPORT × INJURY MATRIX
// =====================================================================
function LesionesSportMatrix({ lesiones, sports, onNavigate }) {
  return (
    <section style={{
      padding: '8rem 0',
      background: '#0A0A0A',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Massive bg */}
      <div style={{
        position: 'absolute',
        left: '-2%',
        top: '-2rem',
        fontSize: 'clamp(10rem, 22vw, 22rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        MATRIZ.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
          alignItems: 'flex-end',
        }} className="mtx-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Matriz · Deporte × Lesión
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
            }}>
              Tu deporte
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                tiene su patrón.
              </span>
            </h2>
          </div>

          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.6,
            maxWidth: '460px',
          }}>
            Cada deporte deja huellas en zonas específicas del cuerpo. Esta matriz cruza las 9 lesiones del catálogo con los 4 deportes que más trato.
          </p>
        </div>

        {/* Matrix */}
        <div style={{
          background: '#0F0F0F',
          border: '1px solid rgba(255,255,255,0.08)',
          overflowX: 'auto',
        }}>
          {/* Header row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `minmax(220px, 2fr) repeat(${sports.length}, 1fr)`,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <div style={{
              padding: '1.5rem 2rem',
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.4)',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}>
              Lesión
            </div>
            {sports.map(sport => (
              <div key={sport} style={{
                padding: '1.5rem 1rem',
                textAlign: 'center',
                borderRight: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '0.375rem',
                }}>
                  Deporte
                </div>
                <div style={{
                  fontSize: '1.125rem',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: '#FFFFFF',
                }}>
                  {sport}
                </div>
              </div>
            ))}
          </div>

          {/* Body rows */}
          {lesiones.map((les, i) => {
            const clickable = !!les.page;
            return (
              <div
                key={les.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: `minmax(220px, 2fr) repeat(${sports.length}, 1fr)`,
                  borderBottom: i < lesiones.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) => { if (clickable) e.currentTarget.style.background = 'rgba(201,165,90,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                <div
                  onClick={() => clickable && onNavigate(les.page)}
                  style={{
                    padding: '1.5rem 2rem',
                    borderRight: '1px solid rgba(255,255,255,0.06)',
                    cursor: clickable ? 'pointer' : 'default',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                  }}
                >
                  <div style={{
                    fontSize: '1.0625rem',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    color: clickable ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
                  }}>
                    {les.name}
                  </div>
                  <div style={{
                    fontSize: '0.6875rem',
                    color: clickable ? '#C9A55A' : 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}>
                    {clickable ? 'Ver protocolo →' : 'Sin artículo'}
                  </div>
                </div>
                {sports.map(sport => {
                  const hit = les.sports.includes(sport);
                  return (
                    <div key={sport} style={{
                      padding: '1.5rem',
                      borderRight: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {hit ? (
                        <div style={{
                          width: '12px',
                          height: '12px',
                          background: '#C9A55A',
                          transform: 'rotate(45deg)',
                          boxShadow: '0 0 12px rgba(201,165,90,0.4)',
                        }} />
                      ) : (
                        <div style={{
                          width: '4px',
                          height: '4px',
                          background: 'rgba(255,255,255,0.15)',
                          borderRadius: '50%',
                        }} />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{
          marginTop: '1.5rem',
          display: 'flex',
          gap: '2rem',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.5)',
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div style={{ width: '10px', height: '10px', background: '#C9A55A', transform: 'rotate(45deg)' }} />
            Lesión frecuente en ese deporte
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div style={{ width: '4px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '50%' }} />
            No habitual / Poco frecuente
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .mtx-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// METHOD STRIP (reminder)
// =====================================================================
function LesionesMethodStrip({ onNavigate }) {
  const phases = ['Diagnóstico', 'Tratamiento', 'Fortalecimiento', 'Return to Play'];

  return (
    <section style={{
      padding: '6rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="ms-grid">
          <div>
            <div style={{
              fontSize: '0.75rem',
              color: '#C9A55A',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '1.25rem',
            }}>
              Mismo método
            </div>
            <h3 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
              marginBottom: '1.5rem',
            }}>
              9 lesiones,
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                un proceso.
              </span>
            </h3>
            <p style={{
              fontSize: '1.0625rem',
              color: 'rgba(10,10,10,0.6)',
              lineHeight: 1.55,
              marginBottom: '2rem',
              maxWidth: '420px',
            }}>
              Sea pubalgia, ciática, tendinitis o cualquier otra — todas pasan por las cuatro fases del Método Indestructible. Sin atajos, sin saltarse pasos.
            </p>
            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                background: 'transparent',
                color: '#0A0A0A',
                border: '1px solid rgba(10,10,10,0.2)',
                padding: '0.875rem 1.5rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C9A55A';
                e.currentTarget.style.color = '#C9A55A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10,10,10,0.2)';
                e.currentTarget.style.color = '#0A0A0A';
              }}
            >
              Ver método completo →
            </button>
          </div>

          {/* Phases ribbon */}
          <div style={{
            display: 'flex',
            background: '#FFFFFF',
            border: '1px solid rgba(10,10,10,0.08)',
            position: 'relative',
          }}>
            {phases.map((p, i) => (
              <div key={i} style={{
                flex: 1,
                padding: '2rem 1.25rem',
                borderRight: i < phases.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                position: 'relative',
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#C9A55A',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.75rem',
                }}>
                  0{i + 1}
                </div>
                <div style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  fontFamily: 'Space Grotesk',
                  letterSpacing: '-0.01em',
                  color: '#0A0A0A',
                }}>
                  {p}
                </div>
                {i < phases.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    right: '-8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    background: '#FFFFFF',
                    border: '1px solid rgba(10,10,10,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.625rem',
                    color: '#C9A55A',
                    zIndex: 2,
                  }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ms-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// CTA
// =====================================================================
function LesionesCTA({ onNavigate }) {
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          background: '#0A0A0A',
          color: '#FFFFFF',
          padding: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }} className="les-cta-grid">
          {/* Animated orb */}
          <div style={{
            position: 'absolute',
            right: '-100px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,165,90,0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative' }}>
            <div style={{
              fontSize: '0.75rem',
              color: '#C9A55A',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '1.5rem',
            }}>
              ¿No estás seguro de qué tienes?
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              marginBottom: '1.5rem',
            }}>
              Eso lo
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                resuelvo yo.
              </span>
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '520px',
            }}>
              La valoración inicial existe precisamente para eso. Sales con diagnóstico claro, plan escrito y certeza — independiente de qué creas que tienes.
            </p>
          </div>

          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                background: '#C9A55A',
                color: '#0A0A0A',
                border: 'none',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C9A55A';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Agendar valoración
              <span style={{ fontSize: '1rem' }}>→</span>
            </button>
            <button
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C9A55A';
                e.currentTarget.style.color = '#C9A55A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              WhatsApp
            </button>
            <div style={{
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.4)',
              textAlign: 'center',
              marginTop: '0.5rem',
            }}>
              60 min · Diagnóstico + plan + primera intervención
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .les-cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

if (typeof window !== "undefined") window.LesionesPage = LesionesPage;
/* ==================== deportes.jsx ==================== */
// DEPORTES - Página padre / hub editorial
// Catálogo de deportes que trato, experiencia personal por deporte, CTA.

function DeportesPage({ onNavigate }) {
  const [hoveredIdx, setHoveredIdx] = React.useState(null);
  const [activeProcess, setActiveProcess] = React.useState(0);

  const deportes = [
    {
      name: 'CrossFit',
      page: 'crossfit',
      tagline: 'WODs sin compensaciones',
      level: 'Atleta · Lo entreno',
      description: 'Movement screens, técnica en levantamientos olímpicos, gestión de cargas. Conozco el snatch, el muscle-up y el kipping desde adentro porque los hago.',
      atletas: '120+',
      partners: { count: '8', label: 'Box partners' },
      injuries: ['Hombro', 'Rodilla', 'Lumbar', 'Muñeca', 'Pubalgia'],
      typical: 'Crossfittero que escala mal el volumen antes de la técnica',
    },
    {
      name: 'BJJ',
      page: 'bjj',
      tagline: 'Grappling longevidad',
      level: 'Atleta · Lo entreno',
      description: 'Cuello, hombro, rodilla. Las lesiones del jiu-jitsu requieren entender la postura, los frames, el escape. No te trato como a un crossfittero.',
      atletas: '60+',
      partners: { count: '3', label: 'Academias' },
      injuries: ['Cuello', 'Hombro', 'Rodilla', 'Codo'],
      typical: 'Grappler que entrena 4× semana sin descargar',
    },
    {
      name: 'Weightlifting',
      page: 'weightlifting',
      tagline: 'La barra sin compensaciones',
      level: 'Atleta · Lo entreno',
      description: 'Sentadilla, snatch, clean & jerk. Conozco la recepción profunda, la bisagra de cadera y la posición overhead desde adentro porque las entreno.',
      atletas: '90+',
      partners: { count: '6', label: 'Años en la barra' },
      injuries: ['Lumbar', 'Hombro', 'Muñeca', 'Rodilla', 'Pubalgia'],
      typical: 'Levantador que sube el 1RM más rápido que su movilidad',
    },
    {
      name: 'Boxeo',
      page: 'boxeo',
      tagline: 'El ring sin dolor',
      level: 'Fisio · Lo trato',
      description: 'Mano, muñeca, hombro y cuello. El golpeo castiga la cadena del puño de formas específicas. Técnica de puño y vendaje que protegen tanto como pegan.',
      atletas: '70+',
      partners: { count: '4', label: 'Gimnasios' },
      injuries: ['Mano', 'Muñeca', 'Hombro', 'Cervical'],
      typical: 'Boxeador con técnica de puño que castiga la muñeca',
    },
  ];

  const totalAtletas = '450+';
  const totalPartners = deportes.reduce((s, d) => s + (parseInt(d.partners.count) || 0), 0);

  return (
    <main>
      <DeportesHero
        onNavigate={onNavigate}
        totalDeportes={deportes.length}
        withProtocol={deportes.filter(d => d.page).length}
        totalAtletas={totalAtletas}
      />
      <DeportesCatalog
        deportes={deportes}
        onNavigate={onNavigate}
        hoveredIdx={hoveredIdx}
        setHoveredIdx={setHoveredIdx}
      />
      <DeportesExperience deportes={deportes} />
      <DeportesProcess activeProcess={activeProcess} setActiveProcess={setActiveProcess} onNavigate={onNavigate} />
      <DeportesCTA onNavigate={onNavigate} />
    </main>
  );
}

// =====================================================================
// HERO
// =====================================================================
function DeportesHero({ onNavigate, totalDeportes, withProtocol, totalAtletas }) {
  return (
    <section style={{
      padding: '12rem 0 6rem',
      background: '#0A0A0A',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Massive bg */}
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(10rem, 24vw, 26rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.07)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        DEPORTES.
      </div>

      {/* Animated orb */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-200px',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,165,90,0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '4rem',
          alignItems: 'flex-end',
        }} className="dep-hero-grid">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}>
              <div style={{ width: '60px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Especializaciones deportivas
              </div>
            </div>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              fontFamily: 'Space Grotesk',
              marginBottom: '2.5rem',
            }}>
              Los entreno.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                Los entiendo.
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '620px',
              marginBottom: '2.5rem',
            }}>
              No trato "atletas" en abstracto. Trato CrossFitters, runners, grapplers y bailarines.
              <span style={{ color: '#FFFFFF', fontWeight: 500 }}> Cada deporte rompe distinto — y se arregla distinto.</span>
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate('fisioterapia')}
                style={{
                  background: '#C9A55A',
                  color: '#0A0A0A',
                  border: 'none',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#C9A55A';
                }}
              >
                Agendar valoración
                <span>→</span>
              </button>
              <a
                href="#catalogo-deportes"
                style={{
                  background: 'transparent',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A55A';
                  e.currentTarget.style.color = '#C9A55A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Ver deportes ↓
              </a>
            </div>
          </div>

          {/* Stats column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            paddingLeft: '2.5rem',
          }} className="dep-hero-stats">
            {[
              { value: totalDeportes, suffix: 'deportes', label: 'Especializo', desc: 'Cada uno con su patrón' },
              { value: totalAtletas, suffix: 'atletas', label: 'Tratados', desc: 'Desde 2017' },
              { value: withProtocol, suffix: 'protocolos', label: 'Públicos', desc: 'Resto en proceso' },
              { value: '2017', suffix: '', label: 'Desde', desc: '8 años de experiencia' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '1.5rem 0',
                borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  marginBottom: '0.375rem',
                }}>
                  <div style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    color: '#C9A55A',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}>
                    {s.value}
                  </div>
                  {s.suffix && (
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.45)',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}>
                      {s.suffix}
                    </div>
                  )}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '0.125rem',
                }}>
                  {s.label}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.4)',
                }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dep-hero-grid { grid-template-columns: 1fr !important; }
          .dep-hero-stats { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// CATALOG - Big cards per sport
// =====================================================================
function DeportesCatalog({ deportes, onNavigate, hoveredIdx, setHoveredIdx }) {
  return (
    <section id="catalogo-deportes" style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
          alignItems: 'flex-end',
        }} className="dcat-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Catálogo · {deportes.length} especializaciones
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
            }}>
              Lo que
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                trato y entreno.
              </span>
            </h2>
          </div>

          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(10,10,10,0.6)',
            lineHeight: 1.55,
            maxWidth: '460px',
          }}>
            Cuatro disciplinas. Cada una con su patrón de lesión, su gesto crítico y su forma de volver. Click para ver protocolo (donde está publicado).
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
        }}>
          {deportes.map((d, i) => {
            const isHovered = hoveredIdx === i;
            const clickable = !!d.page;
            return (
              <div
                key={d.name}
                onClick={() => clickable && onNavigate(d.page)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1.4fr 1.2fr 1fr 60px',
                  borderBottom: i < deportes.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                  background: isHovered ? '#0A0A0A' : '#FFFFFF',
                  color: isHovered ? '#FFFFFF' : '#0A0A0A',
                  cursor: clickable ? 'pointer' : 'default',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  alignItems: 'stretch',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="dcat-row"
              >
                {/* Index */}
                <div style={{
                  padding: '2.5rem 0 2.5rem 2rem',
                  borderRight: isHovered ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(10,10,10,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.5s',
                }}>
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                    transition: 'color 0.5s',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(10,10,10,0.4)',
                    transition: 'color 0.5s',
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                  }}>
                    {d.level.split('·')[0].trim()}
                  </div>
                </div>

                {/* Main content */}
                <div style={{
                  padding: '2.5rem 2rem 2.5rem 1.5rem',
                  borderRight: isHovered ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(10,10,10,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  transition: 'border-color 0.5s',
                }}>
                  <div style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#C9A55A',
                  }}>
                    {d.level}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    fontFamily: 'Space Grotesk',
                    letterSpacing: '-0.03em',
                    lineHeight: 0.95,
                  }}>
                    {d.name}.
                  </h3>
                  <div style={{
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    color: isHovered ? 'rgba(255,255,255,0.6)' : 'rgba(10,10,10,0.55)',
                    fontWeight: 400,
                    transition: 'color 0.5s',
                  }}>
                    {d.tagline}
                  </div>
                  <p style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: isHovered ? 'rgba(255,255,255,0.7)' : 'rgba(10,10,10,0.6)',
                    maxWidth: '440px',
                    marginTop: '0.5rem',
                    transition: 'color 0.5s',
                  }}>
                    {d.description}
                  </p>
                </div>

                {/* Stats + Injuries */}
                <div style={{
                  padding: '2.5rem 2rem',
                  borderRight: isHovered ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(10,10,10,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '1.5rem',
                  transition: 'border-color 0.5s',
                }}>
                  {/* Stats */}
                  <div style={{ display: 'flex', gap: '2rem' }}>
                    <div>
                      <div style={{
                        fontFamily: 'Space Grotesk',
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        color: '#C9A55A',
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                      }}>
                        {d.atletas}
                      </div>
                      <div style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        color: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(10,10,10,0.4)',
                        marginTop: '0.25rem',
                        transition: 'color 0.5s',
                      }}>
                        Atletas
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'Space Grotesk',
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        color: isHovered ? '#FFFFFF' : '#0A0A0A',
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        transition: 'color 0.5s',
                      }}>
                        {d.partners.count}
                      </div>
                      <div style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        color: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(10,10,10,0.4)',
                        marginTop: '0.25rem',
                        transition: 'color 0.5s',
                      }}>
                        {d.partners.label}
                      </div>
                    </div>
                  </div>

                  {/* Top injuries */}
                  <div>
                    <div style={{
                      fontSize: '0.625rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      color: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(10,10,10,0.4)',
                      marginBottom: '0.625rem',
                      transition: 'color 0.5s',
                    }}>
                      Lesiones comunes
                    </div>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.375rem',
                    }}>
                      {d.injuries.map((inj, j) => (
                        <span key={j} style={{
                          fontSize: '0.6875rem',
                          padding: '0.3rem 0.625rem',
                          background: isHovered ? 'rgba(201,165,90,0.15)' : 'rgba(10,10,10,0.05)',
                          color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.75)',
                          fontWeight: 600,
                          letterSpacing: '0.05em',
                          transition: 'all 0.5s',
                        }}>
                          {inj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA / arrow */}
                <div style={{
                  padding: '2.5rem 2rem 2.5rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  gap: '0.75rem',
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontFamily: 'Space Grotesk',
                    color: clickable ? (isHovered ? '#C9A55A' : 'rgba(10,10,10,0.25)') : (isHovered ? 'rgba(255,255,255,0.2)' : 'rgba(10,10,10,0.15)'),
                    transform: isHovered && clickable ? 'translateX(8px)' : 'translateX(0)',
                    transition: 'all 0.5s',
                  }}>
                    {clickable ? '→' : '·'}
                  </div>
                  {clickable && (
                    <div style={{
                      fontSize: '0.625rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.4)',
                      transition: 'color 0.5s',
                      whiteSpace: 'nowrap',
                    }}>
                      Ver protocolo
                    </div>
                  )}
                  {!clickable && (
                    <div style={{
                      fontSize: '0.625rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      color: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(10,10,10,0.35)',
                      fontStyle: 'italic',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.5s',
                    }}>
                      Sin artículo · Se trata
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop: '2rem',
          fontSize: '0.875rem',
          color: 'rgba(10,10,10,0.5)',
          maxWidth: '600px',
        }}>
          ¿Practicas otro deporte? Hablamos. Los deportes que no están en el catálogo igual se evalúan en valoración.
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .dcat-row { grid-template-columns: 60px 1fr 1fr !important; }
          .dcat-row > div:last-child { display: none !important; }
        }
        @media (max-width: 768px) {
          .dcat-header { grid-template-columns: 1fr !important; }
          .dcat-row { grid-template-columns: 1fr !important; }
          .dcat-row > div { border-right: none !important; padding: 1.5rem !important; }
          .dcat-row > div:first-child > div:last-child { writing-mode: horizontal-tb !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// EXPERIENCE STRIP - "Por qué los entiendo"
// =====================================================================
function DeportesExperience({ deportes }) {
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        left: '-2%',
        top: '-2rem',
        fontSize: 'clamp(10rem, 22vw, 22rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        ATLETA.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '5rem',
          alignItems: 'flex-end',
        }} className="exp-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Por qué los entiendo
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
            }}>
              Atleta primero.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                Fisio después.
              </span>
            </h2>
          </div>

          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(10,10,10,0.6)',
            lineHeight: 1.55,
            maxWidth: '460px',
          }}>
            No te explico tu deporte — lo hago. CrossFit y BJJ son parte de mi semana. Running y danza los trato profundamente con atletas de élite. Esa diferencia se nota en el primer minuto.
          </p>
        </div>

        {/* Pull quote */}
        <div style={{
          maxWidth: '900px',
          marginBottom: '4rem',
        }}>
          <div style={{
            fontSize: '5rem',
            fontFamily: 'Space Grotesk',
            color: '#C9A55A',
            lineHeight: 0.4,
            marginBottom: '1.5rem',
          }}>
            "
          </div>
          <p style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
            fontWeight: 400,
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
            color: '#0A0A0A',
            fontFamily: 'Space Grotesk',
            fontStyle: 'italic',
            marginBottom: '1.5rem',
          }}>
            Si nunca has sentido lo que es no poder cerrar la cadera bajo un snatch al 80% — no entiendes <span style={{ color: '#C9A55A' }}>realmente</span> qué es una pubalgia.
          </p>
          <div style={{
            fontSize: '0.8125rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(10,10,10,0.5)',
            fontWeight: 600,
          }}>
            — Germán Montenegro
          </div>
        </div>

        {/* Typical patient row */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(10,10,10,0.08)',
          display: 'grid',
          gridTemplateColumns: `repeat(${deportes.length}, 1fr)`,
        }} className="exp-typical">
          {deportes.map((d, i) => (
            <div key={d.name} style={{
              padding: '2.5rem 2rem',
              borderRight: i < deportes.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }} className="exp-typical-cell">
              <div style={{
                fontFamily: 'Space Grotesk',
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#C9A55A',
                lineHeight: 0.85,
                letterSpacing: '-0.03em',
              }}>
                0{i + 1}
              </div>
              <div style={{
                fontSize: '1.25rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#0A0A0A',
              }}>
                {d.name}
              </div>
              <div style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#C9A55A',
                marginTop: '0.5rem',
              }}>
                Paciente tipo
              </div>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.5,
                color: 'rgba(10,10,10,0.7)',
              }}>
                {d.typical}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-header { grid-template-columns: 1fr !important; }
          .exp-typical { grid-template-columns: repeat(2, 1fr) !important; }
          .exp-typical-cell { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.06); }
        }
        @media (max-width: 600px) {
          .exp-typical { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// PROCESS - "Cómo me adapto a tu deporte"
// =====================================================================
function DeportesProcess({ activeProcess, setActiveProcess, onNavigate }) {
  const steps = [
    {
      label: 'Movement screen',
      title: 'Veo cómo te mueves.',
      description: 'No el movimiento aislado — el gesto específico de tu deporte. Te grabo haciendo overhead squat, sprint, guardia o relevé. Encuentro la compensación.',
      duration: 'Sesión 1 · 60 min',
    },
    {
      label: 'Técnica',
      title: 'Reviso tu técnica.',
      description: 'Conozco los detalles de cada deporte. En CrossFit miro la posición de pies en el snatch. En running, cadencia y tasa de impacto. En BJJ, postura en guardia. En danza, alineación de cadera.',
      duration: 'Continuo · cada sesión',
    },
    {
      label: 'Cargas',
      title: 'Gestiono tu volumen.',
      description: 'La mayoría de lesiones son errores de carga, no de técnica. Te ayudo a escalar bien: cuántos WODs, cuántos km, cuántos rolls, cuántas clases. Sin perder forma.',
      duration: 'Semanas 2—6',
    },
    {
      label: 'Return to play',
      title: 'Vuelves específico.',
      description: 'No "ya puedes entrenar". Vuelves a tu deporte con tests específicos: tu mejor snatch, tu mejor 5K, tu mejor roll, tu mejor variación. Vuelves más fuerte.',
      duration: 'Última fase · 2—4 sem',
    },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#0A0A0A',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(10rem, 22vw, 22rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        ADAPTO.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
          alignItems: 'flex-end',
        }} className="proc-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Cómo me adapto a tu deporte
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
            }}>
              Mismo método.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                Tu deporte específico.
              </span>
            </h2>
          </div>

          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.55,
            maxWidth: '460px',
          }}>
            Las 4 fases del Método Indestructible aplicadas a tu disciplina. CrossFit no necesita lo mismo que danza. Click en cada paso para ver el detalle.
          </p>
        </div>

        {/* Process layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="proc-grid">
          {/* Steps list */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            {steps.map((step, i) => {
              const isActive = activeProcess === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveProcess(i)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr auto',
                    gap: '1.25rem',
                    alignItems: 'center',
                    padding: '1.75rem 0',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    position: 'relative',
                    color: 'inherit',
                    paddingLeft: isActive ? '1rem' : '0',
                  }}
                >
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '3px',
                      background: '#C9A55A',
                    }} />
                  )}
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: isActive ? '1rem' : '0.875rem',
                    fontWeight: 700,
                    color: isActive ? '#C9A55A' : 'rgba(255,255,255,0.3)',
                    transition: 'all 0.3s',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{
                    fontSize: isActive ? '1.5rem' : '1.25rem',
                    fontWeight: 700,
                    fontFamily: 'Space Grotesk',
                    letterSpacing: '-0.01em',
                    color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.3s',
                  }}>
                    {step.label}
                  </div>
                  <div style={{
                    fontSize: '1.25rem',
                    color: isActive ? '#C9A55A' : 'rgba(255,255,255,0.2)',
                    transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
                    transition: 'all 0.3s',
                  }}>
                    →
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step detail */}
          <div key={activeProcess} style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '3rem',
            position: 'relative',
            minHeight: '420px',
            animation: 'procFade 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '2rem',
              fontFamily: 'Space Grotesk',
              fontSize: '8rem',
              fontWeight: 700,
              color: 'rgba(201,165,90,0.08)',
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
            }}>
              0{activeProcess + 1}
            </div>

            <div style={{
              fontSize: '0.6875rem',
              color: '#C9A55A',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '1rem',
              position: 'relative',
            }}>
              Paso {String(activeProcess + 1).padStart(2, '0')} · {steps[activeProcess].duration}
            </div>

            <h3 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              fontFamily: 'Space Grotesk',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              marginBottom: '1.5rem',
              position: 'relative',
            }}>
              {steps[activeProcess].title.split('.')[0]}
              <span style={{ color: '#C9A55A' }}>.</span>
            </h3>

            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '500px',
              position: 'relative',
            }}>
              {steps[activeProcess].description}
            </p>

            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '3rem',
              right: '3rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#C9A55A',
              }} />
              <span style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.05em',
              }}>
                Aplicado a CrossFit, Running, BJJ y Danza
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes procFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .proc-header { grid-template-columns: 1fr !important; }
          .proc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// CTA
// =====================================================================
function DeportesCTA({ onNavigate }) {
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          background: 'linear-gradient(135deg, #C9A55A 0%, #B8943F 100%)',
          color: '#0A0A0A',
          padding: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }} className="dep-cta-grid">
          {/* Diagonal */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-20%',
            width: '60%',
            height: '140%',
            background: 'linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.05) 50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative' }}>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}>
              Practiques lo que practiques
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              marginBottom: '1.5rem',
            }}>
              Volvés a tu deporte.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>
                Más fuerte.
              </span>
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.55,
              opacity: 0.85,
              maxWidth: '520px',
            }}>
              Primera sesión: evaluación de tu gesto deportivo + diagnóstico + plan adaptado a tu disciplina específica. 60 min. Sin atajos.
            </p>
          </div>

          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                background: '#0A0A0A',
                color: '#FFFFFF',
                border: 'none',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(10,10,10,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Agendar valoración
              <span style={{ fontSize: '1rem' }}>→</span>
            </button>
            <button
              style={{
                background: 'transparent',
                color: '#0A0A0A',
                border: '1px solid rgba(10,10,10,0.4)',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A0A0A';
                e.currentTarget.style.color = '#C9A55A';
                e.currentTarget.style.borderColor = '#0A0A0A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#0A0A0A';
                e.currentTarget.style.borderColor = 'rgba(10,10,10,0.4)';
              }}
            >
              WhatsApp
            </button>
            <div style={{
              fontSize: '0.75rem',
              color: 'rgba(10,10,10,0.6)',
              textAlign: 'center',
              marginTop: '0.5rem',
            }}>
              60 min · Movement screen + diagnóstico + plan
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dep-cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

if (typeof window !== "undefined") window.DeportesPage = DeportesPage;
/* ==================== metodologia.jsx ==================== */
// METODOLOGÍA - El Método Indestructible
// Manifesto · 4 fases expandidas · Caso ejemplo · Para quién aplica/no · FAQ · CTA

function MetodologiaPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = React.useState(0);
  const [activePhase, setActivePhase] = React.useState(0);

  return (
    <main>
      <MetHero onNavigate={onNavigate} />
      <MetManifesto />
      <MetFases activePhase={activePhase} setActivePhase={setActivePhase} />
      <MetCaso />
      <MetParaQuien />
      <MetFAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MetCTA onNavigate={onNavigate} />
    </main>
  );
}

function MetSectionHeader({ kicker, title, subtitle, intro, dark }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      marginBottom: '4rem',
      alignItems: 'flex-end',
    }} className="met-sh-header">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>{kicker}</div>
        </div>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          fontFamily: 'Space Grotesk',
          color: dark ? '#FFFFFF' : '#0A0A0A',
        }}>{title}<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{subtitle}</span></h2>
      </div>
      {intro && (
        <p style={{ fontSize: '1.0625rem', color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.6)', lineHeight: 1.55, maxWidth: '460px' }}>{intro}</p>
      )}
      <style>{`@media (max-width: 900px) { .met-sh-header { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// =====================================================================
// HERO
// =====================================================================
function MetHero({ onNavigate }) {
  const fases = ['Diagnóstico', 'Tratamiento', 'Fortalecimiento', 'Return to Play'];
  return (
    <section style={{
      padding: '12rem 0 6rem',
      background: '#0A0A0A',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(7rem, 16vw, 18rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.06)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        MÉTODO.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '60px', height: '1px', background: '#C9A55A' }} />
            <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>
              Cómo trabajo · El proceso completo
            </div>
          </div>
          <h1 style={{
            fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            fontFamily: 'Space Grotesk',
            marginBottom: '2.5rem',
          }}>
            El Método
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
              Indestructible.
            </span>
          </h1>
          <p style={{
            fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
            lineHeight: 1.55,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '640px',
            marginBottom: '3rem',
          }}>
            No es un servicio suelto. Es un proceso de cuatro fases que devuelve atletas al deporte sin recaer.
            <span style={{ color: '#FFFFFF', fontWeight: 500 }}> Diagnóstico, tratamiento, fortalecimiento, return to play. Sin atajos.</span>
          </p>

          {/* Phase chips */}
          <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap', border: '1px solid rgba(255,255,255,0.1)' }} className="met-hero-chips">
            {fases.map((f, i) => (
              <div key={i} style={{
                flex: 1,
                minWidth: '140px',
                padding: '1.5rem 1.25rem',
                borderRight: i < fases.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                position: 'relative',
              }} className="met-hero-chip">
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '2rem', fontWeight: 700, color: '#C9A55A', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.625rem' }}>0{i + 1}</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, fontFamily: 'Space Grotesk', letterSpacing: '-0.01em' }}>{f}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .met-hero-chips { flex-direction: column; }
          .met-hero-chip { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1); }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// MANIFESTO
// =====================================================================
function MetManifesto() {
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div className="container">
        <MetSectionHeader
          kicker="Por qué un método"
          title="Técnicas sueltas"
          subtitle="no curan."
          intro="Una punción aquí, un masaje allá, un ajuste cuando duele. Así trabaja la mayoría. Y por eso la mayoría recae."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="met-man-grid">
          <div>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'rgba(10,10,10,0.75)', marginBottom: '1.5rem' }}>
              La punción seca es excelente. La terapia manual funciona. La quiropraxia tiene su lugar. Pero ninguna técnica, por sí sola, <strong style={{ color: '#0A0A0A' }}>resuelve una lesión deportiva</strong>.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'rgba(10,10,10,0.65)', marginBottom: '1.5rem' }}>
              Una técnica trata el síntoma del momento. Un método ataca la cadena completa: <strong style={{ color: '#0A0A0A' }}>por qué te lesionaste, cómo reducir el dolor, cómo corregir el desbalance que lo causó, y cómo volver al deporte sin que regrese</strong>.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'rgba(10,10,10,0.65)' }}>
              Por eso trabajo con un proceso fijo de cuatro fases. No improviso técnica por técnica. Cada decisión clínica tiene un lugar en la secuencia. Y la secuencia es lo que devuelve atletas — no la técnica aislada.
            </p>
          </div>

          <div style={{
            background: '#0A0A0A',
            color: '#FFFFFF',
            padding: '2.5rem',
          }}>
            <div style={{ fontSize: '4rem', fontFamily: 'Space Grotesk', color: '#C9A55A', lineHeight: 0.5, marginBottom: '1.5rem' }}>"</div>
            <p style={{
              fontSize: 'clamp(1.375rem, 2vw, 1.75rem)',
              fontFamily: 'Space Grotesk',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.35,
              letterSpacing: '-0.01em',
              marginBottom: '2rem',
            }}>
              La técnica primero. Antes que la carga, antes que el peso, antes que el atajo. Domina el movimiento y el cuerpo aguanta.
            </p>
            <div style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              <div style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '-0.01em',
                color: '#C9A55A',
              }}>
                #latecnicaprimero
              </div>
              <div style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.5)',
              }}>
                El movimiento · La comunidad
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .met-man-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// 4 FASES (expanded)
// =====================================================================
function MetFases({ activePhase, setActivePhase }) {
  const fases = [
    {
      title: 'Diagnóstico',
      sub: 'Preciso',
      duration: '1 sesión · 60 min',
      desc: 'Antes de tocarte, te entiendo. Evaluación del movimiento, análisis biomecánico, diagnóstico diferencial. Sin etiquetas vagas, sin radiografías innecesarias.',
      what: ['Evaluación completa del movimiento', 'Análisis del gesto deportivo específico', 'Tests funcionales y ortopédicos', 'Diagnóstico diferencial', 'Plan de tratamiento escrito'],
      output: 'Sales con un diagnóstico claro y un plan, no con una etiqueta vaga.',
    },
    {
      title: 'Tratamiento',
      sub: 'Integrado',
      duration: '3—8 sesiones',
      desc: 'Manos, agujas, ajuste vertebral si lo necesitas. Las técnicas se combinan según tu caso específico — no según un protocolo fijo. Cada sesión es una decisión clínica.',
      what: ['Terapia manual avanzada', 'Punción seca en puntos gatillo', 'Quiropraxia según indicación', 'IASTM y movilización articular', 'Reducción del dolor sin perder capacidad'],
      output: 'El dolor baja y se prepara el terreno para el fortalecimiento.',
    },
    {
      title: 'Fortalecimiento',
      sub: 'Progresivo',
      duration: '4—8 semanas',
      desc: 'Aquí pasa la magia. Plan personalizado para corregir los desbalances que causaron la lesión. Sin esta fase, vuelves a lesionarte. Punto.',
      what: ['Ejercicios correctivos específicos', 'Carga progresiva controlada', 'Re-educación neuromuscular', 'Trabajo de estabilidad y control', 'Corrección del patrón que falló'],
      output: 'El cuerpo se vuelve resistente a la lesión que tuvo.',
    },
    {
      title: 'Return to Play',
      sub: '',
      duration: '2—4 semanas',
      desc: 'Readaptación al gesto deportivo específico. CrossFit, BJJ, running, danza — cada deporte tiene demandas únicas. Vuelves más fuerte que antes, sin recaídas.',
      what: ['Readaptación al gesto deportivo', 'Tests funcionales de retorno', 'Vuelta gradual a la carga deportiva', 'Plan de prevención de recaídas', 'Alta cuando ya no me necesitas'],
      output: 'Vuelves a competir, más fuerte que cuando llegaste.',
    },
  ];

  const current = fases[activePhase];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-5%',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '40rem',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.04)',
        lineHeight: 1,
        pointerEvents: 'none',
      }}>
        0{activePhase + 1}
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <MetSectionHeader
          kicker="Las 4 fases"
          title="No es servicio,"
          subtitle="es proceso."
          intro="Cada fase tiene su objetivo, su duración y su criterio de avance. Click en cada una para ver el detalle completo."
        />

        {/* Phase selector */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          marginBottom: '0',
        }} className="met-fase-sel">
          {fases.map((f, i) => {
            const isActive = activePhase === i;
            return (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                style={{
                  padding: '2rem 1.5rem',
                  background: isActive ? '#0A0A0A' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#0A0A0A',
                  border: 'none',
                  borderRight: i < fases.length - 1 ? '1px solid rgba(10,10,10,0.08)' : 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                  transition: 'all 0.4s',
                  position: 'relative',
                }}
              >
                {isActive && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#C9A55A' }} />}
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '2.5rem', fontWeight: 700, color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.2)', lineHeight: 1, letterSpacing: '-0.03em', transition: 'color 0.4s' }}>0{i + 1}</div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.0625rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{f.title}</div>
                <div style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>{f.duration}</div>
              </button>
            );
          })}
        </div>

        {/* Detail */}
        <div key={activePhase} style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          borderTop: 'none',
          background: '#FFFFFF',
          animation: 'metFade 0.4s ease-out',
        }} className="met-fase-detail">
          <div style={{ padding: '3rem', borderRight: '1px solid rgba(10,10,10,0.08)' }} className="met-fase-left">
            <div style={{ fontSize: '0.6875rem', color: '#C9A55A', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1rem' }}>
              Fase {String(activePhase + 1).padStart(2, '0')} · {current.duration}
            </div>
            <h3 style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              color: '#0A0A0A',
              marginBottom: '1.5rem',
            }}>
              {current.title}
              {current.sub && <><br /><span style={{ color: '#C9A55A' }}>{current.sub}.</span></>}
            </h3>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'rgba(10,10,10,0.65)', marginBottom: '2rem' }}>{current.desc}</p>
            <div style={{
              padding: '1.25rem 1.5rem',
              background: '#FAFAFA',
              borderLeft: '3px solid #C9A55A',
              fontSize: '0.9375rem',
              lineHeight: 1.55,
              color: '#0A0A0A',
            }}>
              <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A', marginBottom: '0.5rem' }}>Resultado de esta fase</span>
              {current.output}
            </div>
          </div>

          <div style={{ padding: '3rem' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(10,10,10,0.4)', marginBottom: '1.5rem' }}>
              Qué incluye
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {current.what.map((w, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1rem 0',
                  borderBottom: i < current.what.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                }}>
                  <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', fontWeight: 700, color: '#C9A55A', marginTop: '0.1rem' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontSize: '0.9375rem', lineHeight: 1.5, color: '#0A0A0A' }}>{w}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes metFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) {
          .met-fase-sel { grid-template-columns: repeat(2, 1fr) !important; }
          .met-fase-sel > button { border-bottom: 1px solid rgba(10,10,10,0.08); }
          .met-fase-detail { grid-template-columns: 1fr !important; }
          .met-fase-left { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// CASO EJEMPLO
// =====================================================================
function MetCaso() {
  const pasos = [
    { week: 'Semana 0', phase: 'Diagnóstico', text: 'Crossfittero de 32 años con dolor de hombro hace 3 meses. Evaluación revela: déficit de control escapular + exceso de kipping sin progresión. No es el manguito — es el patrón.' },
    { week: 'Semana 1—3', phase: 'Tratamiento', text: 'Terapia manual + punción seca en trapecio y manguito. Reducir el dolor para poder trabajar. Se elimina temporalmente el kipping, se mantiene el resto del entrenamiento.' },
    { week: 'Semana 3—7', phase: 'Fortalecimiento', text: 'Control escapular, fortalecimiento del manguito, re-educación del patrón de tracción. Aquí se corrige la causa real — el déficit que permitió la lesión.' },
    { week: 'Semana 7—10', phase: 'Return to Play', text: 'Reintroducción progresiva del kipping con técnica corregida. Tests de retorno. Vuelve al box haciendo muscle-ups sin dolor — y con mejor mecánica que antes.' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#0A0A0A',
      color: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        left: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(8rem, 18vw, 18rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        UN CASO.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <MetSectionHeader
          dark
          kicker="Un caso completo"
          title="De principio"
          subtitle="a fin."
          intro="Así se ve el método aplicado a un caso real: un hombro de CrossFit, de la primera consulta al muscle-up sin dolor."
        />

        <div style={{ position: 'relative', paddingLeft: '3rem' }}>
          <div style={{
            position: 'absolute',
            left: '9px',
            top: '12px',
            bottom: '12px',
            width: '2px',
            background: 'linear-gradient(180deg, #C9A55A 0%, rgba(201,165,90,0.2) 100%)',
          }} />
          {pasos.map((p, i) => (
            <div key={i} style={{
              position: 'relative',
              marginBottom: i < pasos.length - 1 ? '3rem' : 0,
            }}>
              <div style={{
                position: 'absolute',
                left: '-3rem',
                top: '2px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#0A0A0A',
                border: '3px solid #C9A55A',
                boxShadow: i === 0 ? '0 0 0 4px rgba(201,165,90,0.15)' : 'none',
              }} />
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'Space Grotesk', fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>{p.week}</span>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)', padding: '0.375rem 0.75rem' }}>{p.phase}</span>
              </div>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.75)', maxWidth: '720px' }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// PARA QUIÉN APLICA / NO
// =====================================================================
function MetParaQuien() {
  const aplica = [
    'Atletas que quieren entender por qué se lesionaron',
    'Quienes buscan volver al deporte, no solo aliviar el dolor',
    'Personas dispuestas a hacer el trabajo de fortalecimiento',
    'Quienes rechazan las sesiones infinitas sin objetivo',
    'Deportistas recreacionales que entrenan en serio',
  ];

  const noAplica = [
    'Quien busca solo un masaje relajante puntual',
    'Quien no está dispuesto a trabajar entre sesiones',
    'Quien quiere "que le truenen la espalda" y ya',
    'Urgencias médicas (fracturas, infecciones, banderas rojas)',
    'Quien busca una solución mágica de una sesión',
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <MetSectionHeader
          kicker="Para quién es"
          title="No es"
          subtitle="para todos."
          intro="Ser honesto sobre para quién funciona el método es parte del método. Si no eres el atleta indicado, te lo digo en la primera consulta."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
        }} className="met-pq-grid">
          {/* Aplica */}
          <div style={{ padding: '2.5rem 2rem', borderRight: '1px solid rgba(10,10,10,0.08)' }} className="met-pq-yes">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#16A34A' }} />
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#16A34A' }}>Sí aplica</div>
            </div>
            {aplica.map((a, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                padding: '1rem 0',
                borderBottom: i < aplica.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
              }}>
                <div style={{ color: '#16A34A', fontSize: '1rem', fontWeight: 700, marginTop: '0.1rem' }}>✓</div>
                <div style={{ fontSize: '1rem', lineHeight: 1.5, color: '#0A0A0A' }}>{a}</div>
              </div>
            ))}
          </div>

          {/* No aplica */}
          <div style={{ padding: '2.5rem 2rem', background: '#FAFAFA' }} className="met-pq-no">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#DC2626' }} />
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#DC2626' }}>No aplica</div>
            </div>
            {noAplica.map((a, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                padding: '1rem 0',
                borderBottom: i < noAplica.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
              }}>
                <div style={{ color: '#DC2626', fontSize: '1rem', fontWeight: 700, marginTop: '0.1rem' }}>✕</div>
                <div style={{ fontSize: '1rem', lineHeight: 1.5, color: 'rgba(10,10,10,0.65)' }}>{a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .met-pq-grid { grid-template-columns: 1fr !important; }
          .met-pq-yes { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// FAQ
// =====================================================================
function MetFAQ({ openFaq, setOpenFaq }) {
  const faqs = [
    { q: '¿Cuánto dura el proceso completo?', a: 'Depende de la lesión, pero el promedio es de 6—10 sesiones distribuidas en 8—12 semanas. Lesiones leves pueden resolverse en menos; casos crónicos pueden requerir más. La primera valoración te da una estimación realista.' },
    { q: '¿Tengo que pasar por las 4 fases siempre?', a: 'Sí, ese es el punto del método. Saltarse el fortalecimiento es la razón #1 de recaída. Algunos llegan ya en fase avanzada y se acortan las primeras fases, pero ninguna se omite por completo. El proceso es lo que garantiza que no recaigas.' },
    { q: '¿Puedo seguir entrenando durante el proceso?', a: 'Casi siempre sí, con modificaciones. Rara vez mando reposo total — eso atrofia. Lo normal es reducir o modificar ciertos gestos mientras mantenemos el resto del entrenamiento. El objetivo es que pierdas lo mínimo de fitness.' },
    { q: '¿Qué pasa si no mejoro?', a: 'Reevaluamos. Si tras las primeras sesiones no hay progreso esperado, el diagnóstico se revisa — quizás había algo más. Si tu caso requiere imagen (RM) o derivación a otro especialista, te lo digo claramente. No alargo procesos que no funcionan.' },
    { q: '¿Por qué no solo me das ejercicios por WhatsApp?', a: 'Porque sin diagnóstico presencial, los ejercicios son adivinanza. El mismo dolor de rodilla puede ser tendinopatía, condromalacia o referido de cadera — y cada uno necesita ejercicios opuestos. El método empieza con diagnóstico, no con ejercicios genéricos.' },
    { q: '¿El método sirve para mi deporte específico?', a: 'El método es el mismo, la aplicación se adapta. Las 4 fases aplican a cualquier lesión deportiva. Lo que cambia es el análisis del gesto y la readaptación final — específicos para CrossFit, running, BJJ, danza o tu disciplina.' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <MetSectionHeader
          kicker="Preguntas frecuentes"
          title="Sobre"
          subtitle="el método."
          intro="Las dudas más comunes sobre cómo trabajo. Si no encuentras la tuya, WhatsApp directo."
        />

        <div style={{ maxWidth: '900px', borderTop: '1px solid rgba(10,10,10,0.08)' }}>
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  style={{
                    width: '100%',
                    padding: '1.75rem 0',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr 40px',
                    alignItems: 'center',
                    gap: '1.5rem',
                  }}
                >
                  <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.875rem', fontWeight: 700, color: isOpen ? '#C9A55A' : 'rgba(10,10,10,0.3)', transition: 'color 0.3s' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)', fontWeight: 600, fontFamily: 'Space Grotesk', letterSpacing: '-0.01em', lineHeight: 1.3, color: '#0A0A0A' }}>{faq.q}</div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: `1px solid ${isOpen ? '#C9A55A' : 'rgba(10,10,10,0.15)'}`,
                    background: isOpen ? '#C9A55A' : 'transparent',
                    color: isOpen ? '#0A0A0A' : 'rgba(10,10,10,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.125rem',
                    fontWeight: 300,
                    transition: 'all 0.4s',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    justifySelf: 'end',
                  }}>+</div>
                </button>
                <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 40px', gap: '1.5rem', paddingBottom: '1.75rem' }}>
                      <div></div>
                      <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(10,10,10,0.7)', maxWidth: '700px' }}>{faq.a}</p>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// CTA
// =====================================================================
function MetCTA({ onNavigate }) {
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          background: 'linear-gradient(135deg, #C9A55A 0%, #B8943F 100%)',
          color: '#0A0A0A',
          padding: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }} className="met-cta-grid">
          <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '60%', height: '140%', background: 'linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.05) 50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1.5rem' }}>Empieza por la fase 01</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.03em', fontFamily: 'Space Grotesk', marginBottom: '1.5rem' }}>El proceso<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>empieza aquí.</span></h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.55, opacity: 0.85, maxWidth: '520px' }}>
              Primera sesión: diagnóstico preciso + plan de las 4 fases adaptado a tu caso. 60 minutos. El primer paso del método indestructible.
            </p>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                background: '#0A0A0A',
                color: '#FFFFFF',
                border: 'none',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >Agendar valoración<span>→</span></button>
            <button
              onClick={() => onNavigate('sobre')}
              style={{
                background: 'transparent',
                color: '#0A0A0A',
                border: '1px solid rgba(10,10,10,0.4)',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.color = '#C9A55A'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0A0A0A'; }}
            >Conocer a Germán</button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .met-cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

if (typeof window !== "undefined") window.MetodologiaPage = MetodologiaPage;
/* ==================== sobre-german.jsx ==================== */
// SOBRE GERMÁN - Página de autoridad E-E-A-T
// Historia · Credenciales · Práctica deportiva · Mis lesiones · Filosofía · Comparativa · Testimonios · CTA

function SobreGermanPage({ onNavigate }) {
  return (
    <main>
      <SobreHero onNavigate={onNavigate} />
      <SobreHistoria />
      <SobreCredenciales />
      <SobrePractica />
      <SobreMisLesiones />
      <SobreFilosofia />
      <SobreComparativa />
      <SobreTestimonios />
      <SobreCTA onNavigate={onNavigate} />
    </main>
  );
}

// SHARED HEADER
function SgSectionHeader({ kicker, title, subtitle, intro, dark }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      marginBottom: '4rem',
      alignItems: 'flex-end',
    }} className="sg-sh-header">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>{kicker}</div>
        </div>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          fontFamily: 'Space Grotesk',
          color: dark ? '#FFFFFF' : '#0A0A0A',
        }}>{title}<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>{subtitle}</span></h2>
      </div>
      {intro && (
        <p style={{ fontSize: '1.0625rem', color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.6)', lineHeight: 1.55, maxWidth: '460px' }}>{intro}</p>
      )}
      <style>{`@media (max-width: 900px) { .sg-sh-header { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// =====================================================================
// HERO
// =====================================================================
function SobreHero({ onNavigate }) {
  return (
    <section style={{
      padding: '12rem 0 6rem',
      background: '#0A0A0A',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(8rem, 19vw, 22rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.06)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        GERMÁN.
      </div>
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '-200px',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,165,90,0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="sg-hero-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '60px', height: '1px', background: '#C9A55A' }} />
              <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>
                Fisioterapeuta deportivo · Atleta
              </div>
            </div>
            <h1 style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              fontFamily: 'Space Grotesk',
              marginBottom: '2.5rem',
            }}>
              Soy fisio.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                Pero entreno como tú.
              </span>
            </h1>
            <p style={{
              fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '620px',
              marginBottom: '2.5rem',
            }}>
              Germán Montenegro. CrossFit, BJJ y weightlifting son parte de mi semana, no de mis libros.
              <span style={{ color: '#FFFFFF', fontWeight: 500 }}> Por eso entiendo tu lesión desde adentro — la he vivido.</span>
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate('fisioterapia')}
                style={{
                  background: '#C9A55A',
                  color: '#0A0A0A',
                  border: 'none',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#FFFFFF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#C9A55A'; }}
              >
                Agendar valoración
                <span>→</span>
              </button>
              <button
                onClick={() => onNavigate('metodologia')}
                style={{
                  background: 'transparent',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '1.25rem 2rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A55A'; e.currentTarget.style.color = '#C9A55A'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#FFFFFF'; }}
              >
                Ver el método
              </button>
            </div>
          </div>

          {/* Portrait slot */}
          <div style={{
            position: 'relative',
            aspectRatio: '4/5',
            background: 'linear-gradient(135deg, #1A1714 0%, #0A0A0A 100%)',
            border: '1px solid rgba(201,165,90,0.2)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} className="sg-portrait">
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(rgba(201,165,90,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,165,90,0.04) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
            <div style={{ textAlign: 'center', position: 'relative', padding: '2rem' }}>
              <div style={{
                fontSize: '0.625rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#C9A55A',
                marginBottom: '1rem',
              }}>
                [ Foto profesional ]
              </div>
              <div style={{
                fontFamily: 'Space Grotesk',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
              }}>
                Retrato de Germán<br />en consultorio o box
              </div>
            </div>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#C9A55A' }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sg-hero-grid { grid-template-columns: 1fr !important; }
          .sg-portrait { max-width: 360px; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// HISTORIA
// =====================================================================
function SobreHistoria() {
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div className="container">
        <SgSectionHeader
          kicker="Mi historia"
          title="Empecé"
          subtitle="lesionado."
          intro="No llegué a la fisioterapia por vocación abstracta. Llegué porque me lesioné entrenando y nadie supo devolverme al deporte de verdad."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="sg-hist-grid">
          <div>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'rgba(10,10,10,0.75)', marginBottom: '1.5rem' }}>
              La primera vez que me lesioné en serio entrenando, fui a fisioterapia como cualquiera. Me dieron <strong style={{ color: '#0A0A0A' }}>masajes, ultrasonido y reposo</strong>. El dolor bajaba. Volvía a entrenar. El dolor regresaba.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'rgba(10,10,10,0.65)', marginBottom: '1.5rem' }}>
              Nadie me explicó <strong style={{ color: '#0A0A0A' }}>por qué</strong> me había lesionado. Nadie miró mi técnica de levantamiento. Nadie me preguntó cuántos WODs hacía por semana. Me trataban el síntoma, no la causa.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'rgba(10,10,10,0.65)' }}>
              Ahí decidí estudiar fisioterapia — pero hacerla distinto. Entender el deporte desde adentro, diagnosticar la causa real, y construir un proceso que devuelva al atleta más fuerte de lo que llegó. No parches. Proceso.
            </p>
          </div>

          <div style={{
            background: '#0A0A0A',
            color: '#FFFFFF',
            padding: '2.5rem',
            position: 'relative',
          }}>
            <div style={{
              fontSize: '4rem',
              fontFamily: 'Space Grotesk',
              color: '#C9A55A',
              lineHeight: 0.5,
              marginBottom: '1.5rem',
            }}>"</div>
            <p style={{
              fontSize: 'clamp(1.375rem, 2vw, 1.75rem)',
              fontFamily: 'Space Grotesk',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.35,
              letterSpacing: '-0.01em',
              marginBottom: '2rem',
            }}>
              El fisio que me trataba nunca había sentido lo que es no poder cerrar la cadera bajo una barra. Yo sí.
            </p>
            <div style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#C9A55A',
            }}>
              Germán Montenegro
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sg-hist-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// CREDENCIALES
// =====================================================================
function SobreCredenciales() {
  const creds = [
    { value: '2017', label: 'Ejerciendo desde', desc: '8 años de práctica clínica' },
    { value: '500+', label: 'Atletas tratados', desc: 'Recreacionales y competitivos' },
    { value: '4.9', label: 'Rating promedio', desc: '+200 reseñas verificadas' },
    { value: '3', label: 'Deportes que practico', desc: 'CrossFit · BJJ · Weightlifting' },
  ];

  const formacion = [
    'Fisioterapeuta titulado',
    'Especialización en fisioterapia deportiva',
    'Certificación en punción seca',
    'Formación en terapia manual ortopédica',
    'Quiropraxia / manipulación vertebral',
    'IASTM (instrument-assisted soft tissue)',
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <SgSectionHeader
          kicker="Formación · Credenciales"
          title="Lo que"
          subtitle="me respalda."
          intro="Formación clínica seria + experiencia deportiva real. Las dos cosas importan — una sin la otra no devuelve atletas al deporte."
        />

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          background: '#FFFFFF',
          marginBottom: '3rem',
        }} className="sg-stats">
          {creds.map((c, i) => (
            <div key={i} style={{
              padding: '2.5rem 2rem',
              borderRight: i < creds.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
            }} className="sg-stat-cell">
              <div style={{
                fontFamily: 'Space Grotesk',
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: 700,
                color: '#C9A55A',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: '0.75rem',
              }}>{c.value}</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#0A0A0A', marginBottom: '0.25rem' }}>{c.label}</div>
              <div style={{ fontSize: '0.8125rem', color: 'rgba(10,10,10,0.5)' }}>{c.desc}</div>
            </div>
          ))}
        </div>

        {/* Formación list */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(10,10,10,0.08)',
          padding: '2.5rem',
        }}>
          <div style={{
            fontSize: '0.6875rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'rgba(10,10,10,0.4)',
            marginBottom: '1.75rem',
          }}>
            Formación y técnicas certificadas
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
          }} className="sg-form-grid">
            {formacion.map((f, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 0',
                borderBottom: '1px solid rgba(10,10,10,0.06)',
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: '#C9A55A',
                }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: '1rem', color: '#0A0A0A', fontWeight: 500 }}>{f}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sg-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .sg-stat-cell:nth-child(2) { border-right: none !important; }
          .sg-stat-cell { border-bottom: 1px solid rgba(10,10,10,0.06); }
          .sg-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// PRÁCTICA DEPORTIVA
// =====================================================================
function SobrePractica() {
  const [active, setActive] = React.useState(0);

  const deportes = [
    { name: 'CrossFit', level: 'Atleta activo', years: '7 años', desc: 'WODs, levantamientos olímpicos, gimnásticos. Conozco el snatch, el muscle-up y el kipping desde adentro porque los entreno cada semana.', detail: 'Sé lo que es fallar un clean al 90%, el dolor de hombro tras 100 kipping pull-ups, la tirantez de cadera después de 150 wall balls. Esa experiencia cambia cómo trato a un crossfittero.' },
    { name: 'BJJ', level: 'Practicante', years: '5 años', desc: 'Grappling, guardia, sumisiones. El jiu-jitsu castiga cuello, hombro y rodilla de formas muy específicas que solo entiendes si ruedas.', detail: 'Conozco la tensión de defender una llave de rodilla, el latigazo cervical de un mal mata-león, la sobrecarga de hombro de postear mil veces. Trato grapplers como grappler.' },
    { name: 'Weightlifting', level: 'Atleta', years: '6 años', desc: 'Sentadilla, peso muerto, levantamientos olímpicos. La barra exige técnica perfecta — y castiga el error con lesión.', detail: 'Entiendo la bisagra de cadera, la recepción profunda del clean, la posición overhead del jerk. Cuando un levantador me describe su dolor, sé exactamente qué gesto lo provoca.' },
    { name: 'Otros', level: 'Trato profundamente', years: '8 años', desc: 'Running, danza y otros deportes que no practico pero trato a fondo con atletas de élite — análisis de pisada, demandas del ballet, gestión de cargas.', detail: 'No corro maratones ni bailo, pero he tratado a suficientes runners y bailarinas para entender sus gestos críticos. Cuando no vivo el deporte, lo estudio obsesivamente.' },
  ];

  const current = deportes[active];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: '-3%',
        top: '-2rem',
        fontSize: 'clamp(8rem, 18vw, 18rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.04)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        ATLETA.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <SgSectionHeader
          kicker="Mi práctica deportiva"
          title="No te explico"
          subtitle="tu deporte. Lo hago."
          intro="La diferencia entre un fisio que leyó sobre CrossFit y uno que falla cleans cada semana se nota en el primer minuto de la consulta."
        />

        <div style={{
          display: 'flex',
          gap: '0',
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(10,10,10,0.1)',
          marginBottom: '3rem',
        }}>
          {deportes.map((d, i) => (
            <button
              key={d.name}
              onClick={() => setActive(i)}
              style={{
                padding: '1rem 1.5rem',
                background: active === i ? '#0A0A0A' : 'transparent',
                color: active === i ? '#C9A55A' : 'rgba(10,10,10,0.45)',
                border: 'none',
                borderBottom: active === i ? '2px solid #C9A55A' : '2px solid transparent',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                marginBottom: '-1px',
              }}
            >{d.name}</button>
          ))}
        </div>

        <div key={active} style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          animation: 'sgFade 0.4s ease-out',
        }} className="sg-prac-grid">
          {/* Photo slot */}
          <div style={{
            aspectRatio: '1/1',
            background: 'linear-gradient(135deg, #F5F2EC 0%, #EBE5DA 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: '1px solid rgba(10,10,10,0.08)',
          }} className="sg-prac-photo">
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(rgba(10,10,10,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.03) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }} />
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ fontSize: '0.625rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A', marginBottom: '0.75rem' }}>[ Foto ]</div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: 'rgba(10,10,10,0.35)', letterSpacing: '-0.02em' }}>Germán entrenando<br />{current.name}</div>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#C9A55A',
                background: 'rgba(201,165,90,0.1)',
                padding: '0.5rem 0.875rem',
              }}>{current.level}</span>
              <span style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'rgba(10,10,10,0.5)',
                background: 'rgba(10,10,10,0.05)',
                padding: '0.5rem 0.875rem',
              }}>{current.years}</span>
            </div>
            <h3 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: '#0A0A0A',
              marginBottom: '1.5rem',
            }}>{current.name}.</h3>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.6, color: 'rgba(10,10,10,0.7)', marginBottom: '1.5rem' }}>{current.desc}</p>
            <div style={{
              padding: '1.25rem 1.5rem',
              background: '#FAFAFA',
              borderLeft: '3px solid #C9A55A',
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              color: 'rgba(10,10,10,0.7)',
              fontStyle: 'italic',
            }}>
              {current.detail}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sgFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) {
          .sg-prac-grid { grid-template-columns: 1fr !important; }
          .sg-prac-photo { border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); aspect-ratio: 16/10 !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// MIS LESIONES (vulnerability → trust)
// =====================================================================
function SobreMisLesiones() {
  const lesiones = [
    { name: 'Pubalgia', context: 'Weightlifting', learned: 'A no ignorar la tirantez de aductor por "ya se pasará".' },
    { name: 'Hombro', context: 'CrossFit', learned: 'Que el volumen de kipping sin técnica destroza el manguito.' },
    { name: 'Lumbar', context: 'Peso muerto', learned: 'El valor de la bisagra de cadera perfecta bajo carga.' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#0A0A0A',
      color: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        left: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(9rem, 20vw, 20rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        LO VIVÍ.
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <SgSectionHeader
          dark
          kicker="Mis lesiones"
          title="Las que"
          subtitle="también superé."
          intro="No hablo de lesiones desde un libro. Las he tenido. Cada una me enseñó algo que ahora aplico contigo."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
          border: '1px solid rgba(255,255,255,0.1)',
        }} className="sg-les-grid">
          {lesiones.map((l, i) => (
            <div key={i} style={{
              padding: '2.5rem 2rem',
              borderRight: i < lesiones.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }} className="sg-les-cell">
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '2.5rem', fontWeight: 700, color: '#C9A55A', lineHeight: 0.85, letterSpacing: '-0.03em' }}>0{i + 1}</div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.05 }}>{l.name}.</h3>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#C9A55A' }}>{l.context}</div>
              <div style={{
                marginTop: 'auto',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                fontSize: '0.9375rem',
                lineHeight: 1.55,
                color: 'rgba(255,255,255,0.7)',
              }}>
                <span style={{ display: 'block', fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Me enseñó</span>
                {l.learned}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sg-les-grid { grid-template-columns: 1fr !important; }
          .sg-les-cell { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1); }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// FILOSOFÍA
// =====================================================================
function SobreFilosofia() {
  const principios = [
    { title: 'Diagnóstico antes que tratamiento', desc: 'No toco a nadie sin entender primero qué falló y por qué. El diagnóstico diferencial es la base.' },
    { title: 'Causa, no síntoma', desc: 'El dolor es la señal, no el problema. Trato el desbalance que lo produjo para que no regrese.' },
    { title: 'Proceso, no sesiones sueltas', desc: 'Cuatro fases: diagnóstico, tratamiento, fortalecimiento, return to play. Saltarse una garantiza recaída.' },
    { title: 'Que no me necesites más', desc: 'El éxito no es que vuelvas cada semana. Es que vuelvas a tu deporte y no me necesites. 6—10 sesiones promedio.' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <SgSectionHeader
          kicker="Mi filosofía"
          title="Cuatro"
          subtitle="principios."
          intro="No son frases de marketing. Son las reglas que aplico en cada consulta, sin excepción."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'rgba(10,10,10,0.08)',
          border: '1px solid rgba(10,10,10,0.08)',
        }} className="sg-fil-grid">
          {principios.map((p, i) => (
            <div key={i} style={{
              padding: '2.5rem 2rem',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              minHeight: '220px',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '3rem', fontWeight: 700, color: '#C9A55A', lineHeight: 0.85, letterSpacing: '-0.03em' }}>0{i + 1}</div>
                <h3 style={{ fontSize: '1.375rem', fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#0A0A0A' }}>{p.title}</h3>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(10,10,10,0.65)' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sg-fil-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// COMPARATIVA
// =====================================================================
function SobreComparativa() {
  const rows = [
    { axis: 'Conoce tu deporte', trad: 'Lo leyó en un manual', ger: 'Lo entrena cada semana' },
    { axis: 'Enfoque', trad: 'Trata el síntoma', ger: 'Diagnostica la causa' },
    { axis: 'Estructura', trad: 'Sesiones sueltas', ger: 'Proceso de 4 fases' },
    { axis: 'Objetivo', trad: 'Que baje el dolor', ger: 'Volver a competir más fuerte' },
    { axis: 'Duración', trad: 'Indefinida', ger: '6—10 sesiones, fin claro' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <SgSectionHeader
          kicker="Por qué soy distinto"
          title="Atleta-fisio"
          subtitle="vs. fisio tradicional."
          intro="La diferencia no es ego. Es que haber vivido la lesión cambia cómo la diagnosticas y cómo devuelves al atleta al deporte."
        />

        <div style={{ border: '1px solid rgba(10,10,10,0.08)', background: '#FFFFFF' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr 1.4fr',
            background: '#0A0A0A',
            color: '#FFFFFF',
          }} className="sg-comp-row">
            <div style={{ padding: '1.5rem 2rem', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Eje</div>
            </div>
            <div style={{ padding: '1.5rem 2rem', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>Fisio tradicional</div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.125rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>El estándar</div>
            </div>
            <div style={{ padding: '1.5rem 2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#C9A55A' }} />
              <div style={{ fontSize: '0.6875rem', color: '#C9A55A', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Germán Montenegro</div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.125rem', fontWeight: 700, color: '#FFFFFF' }}>Atleta + Fisio</div>
            </div>
          </div>

          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr 1.4fr',
              borderTop: '1px solid rgba(10,10,10,0.06)',
            }} className="sg-comp-row">
              <div style={{ padding: '1.75rem 2rem', borderRight: '1px solid rgba(10,10,10,0.06)', background: '#FAFAFA' }}>
                <div style={{ fontSize: '0.75rem', color: 'rgba(10,10,10,0.4)', fontFamily: 'Space Grotesk', fontWeight: 600, marginBottom: '0.375rem' }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.01em' }}>{r.axis}</div>
              </div>
              <div style={{
                padding: '1.75rem 2rem',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                color: 'rgba(10,10,10,0.45)',
                fontSize: '1rem',
                lineHeight: 1.5,
                textDecoration: 'line-through',
                textDecorationColor: 'rgba(10,10,10,0.2)',
                display: 'flex',
                alignItems: 'center',
              }}>{r.trad}</div>
              <div style={{
                padding: '1.75rem 2rem',
                fontSize: '1rem',
                lineHeight: 1.5,
                color: '#0A0A0A',
                fontWeight: 500,
                background: 'rgba(201,165,90,0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
              }}>
                <div style={{ width: '6px', height: '6px', background: '#C9A55A', flexShrink: 0 }} />
                {r.ger}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sg-comp-row { grid-template-columns: 1fr !important; }
          .sg-comp-row > div { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// TESTIMONIOS
// =====================================================================
function SobreTestimonios() {
  const testimonios = [
    { quote: 'Llevaba 8 meses con pubalgia y tres fisios distintos. Germán fue el primero que me explicó por qué me pasó. Volví a competir en 10 semanas.', author: 'Andrés M.', sport: 'CrossFit · 34 años' },
    { quote: 'Como bailarina necesitaba a alguien que entendiera las demandas de mi cuerpo. No me dijo "deja de bailar". Me devolvió al escenario.', author: 'Valentina R.', sport: 'Danza contemporánea · 27 años' },
    { quote: 'Mi ciática venía y se iba hace años. Germán encontró que era el piramidal, no una hernia como me habían dicho. Cambió todo.', author: 'Carlos T.', sport: 'Running · 41 años' },
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
    }}>
      <div className="container">
        <SgSectionHeader
          kicker="Testimonios"
          title="Lo que dicen"
          subtitle="mis atletas."
          intro="Reseñas reales de atletas que volvieron a su deporte. El rating promedio es 4.9/5 con más de 200 reseñas."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }} className="sg-test-grid">
          {testimonios.map((t, i) => (
            <div key={i} style={{
              padding: '2.5rem 2rem',
              background: '#FAFAFA',
              border: '1px solid rgba(10,10,10,0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {[1,2,3,4,5].map(s => (
                  <span key={s} style={{ color: '#C9A55A', fontSize: '1rem' }}>★</span>
                ))}
              </div>
              <p style={{
                fontSize: '1.0625rem',
                lineHeight: 1.6,
                color: '#0A0A0A',
                fontFamily: 'Space Grotesk',
                fontWeight: 400,
                fontStyle: 'italic',
                flex: 1,
              }}>
                "{t.quote}"
              </p>
              <div style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(10,10,10,0.08)',
              }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'Space Grotesk', color: '#0A0A0A', letterSpacing: '-0.01em' }}>{t.author}</div>
                <div style={{ fontSize: '0.8125rem', color: '#C9A55A', fontWeight: 600, letterSpacing: '0.02em', marginTop: '0.25rem' }}>{t.sport}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sg-test-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =====================================================================
// CTA
// =====================================================================
function SobreCTA({ onNavigate }) {
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          background: '#0A0A0A',
          color: '#FFFFFF',
          padding: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }} className="sg-cta-grid">
          <div style={{
            position: 'absolute',
            right: '-100px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,165,90,0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: '0.75rem', color: '#C9A55A', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem' }}>
              Trabajemos juntos
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              marginBottom: '1.5rem',
            }}>
              ¿Listo para
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>volver?</span>
            </h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.7)', maxWidth: '520px' }}>
              Primera sesión: evaluación completa + diagnóstico preciso + plan personalizado. 60 minutos con un fisio que entiende tu deporte porque lo practica.
            </p>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                background: '#C9A55A',
                color: '#0A0A0A',
                border: 'none',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#C9A55A'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >Agendar valoración<span>→</span></button>
            <button
              onClick={() => onNavigate('metodologia')}
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '1.5rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A55A'; e.currentTarget.style.color = '#C9A55A'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#FFFFFF'; }}
            >Conocer el método</button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sg-cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

if (typeof window !== "undefined") window.SobreGermanPage = SobreGermanPage;
/* ==================== app.jsx ==================== */

function App({ initialPage = 'home', onRouteChange } = {}) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => { setCurrentPage(initialPage); }, [initialPage]);
  
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigate = (page) => {
    setCurrentPage(page);
    if (typeof onRouteChange === 'function') onRouteChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'rgba(0,0,0,0.05)',
        zIndex: 9999,
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: '#C9A55A',
          transition: 'width 0.1s ease',
        }} />
      </div>
      
      <Nav key={currentPage} currentPage={currentPage} onNavigate={navigate} />
      
      {currentPage === 'home' && <HomePage onNavigate={navigate} />}
      {currentPage === 'fisioterapia' && <FisioterapiaPage onNavigate={navigate} />}
      {currentPage === 'lesiones' && <LesionesPage onNavigate={navigate} />}
      {currentPage === 'deportes' && <DeportesPage onNavigate={navigate} />}
      {currentPage === 'pubalgia' && <PubalgiaPage onNavigate={navigate} />}
      {currentPage === 'crossfit' && <CrossFitPage onNavigate={navigate} />}
      {currentPage === 'weightlifting' && <WeightliftingPage onNavigate={navigate} />}
      {currentPage === 'bjj' && <BJJPage onNavigate={navigate} />}
      {currentPage === 'boxeo' && <BoxeoPage onNavigate={navigate} />}
      {currentPage === 'quiropraxia' && <QuiropraxiaPage onNavigate={navigate} />}
      {currentPage === 'puncion' && <PuncionSecaPage onNavigate={navigate} />}
      {currentPage === 'masajes' && <MasajesPage onNavigate={navigate} />}
      {currentPage === 'readaptacion' && <ReadaptacionPage onNavigate={navigate} />}
      {currentPage === 'bursitis' && <BursitisPage onNavigate={navigate} />}
      {currentPage === 'condromalacia' && <CondromalaciaPage onNavigate={navigate} />}
      {currentPage === 'contractura' && <ContracturaPage onNavigate={navigate} />}
      {currentPage === 'periostitis' && <PeriostitisPage onNavigate={navigate} />}
      {currentPage === 'epitrocleitis' && <EpitrocleitisPage onNavigate={navigate} />}
      {currentPage === 'tendinitis' && <TendinitisPage onNavigate={navigate} />}
      {currentPage === 'ciatica' && <CiaticaPage onNavigate={navigate} />}
      {currentPage === 'hombro' && <HombroPage onNavigate={navigate} />}
      {currentPage === 'sobre' && <SobreGermanPage onNavigate={navigate} />}
      {currentPage === 'metodologia' && <MetodologiaPage onNavigate={navigate} />}

      <SiteFooter onNavigate={navigate} />
    </>
  );
}

// Pages whose hero section is dark → nav needs light text at the top
const DARK_HERO_PAGES = ['home', 'deportes', 'crossfit', 'weightlifting', 'bjj', 'boxeo', 'sobre', 'metodologia'];

function Nav({ currentPage, onNavigate }) {
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(typeof window !== 'undefined' && window.scrollY > 40);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastYRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y < 100) setIsVisible(true);
      else setIsVisible(y < lastYRef.current);
      lastYRef.current = y;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll-driven state when navigating
  useEffect(() => { setMenuOpen(false); }, [currentPage]);

  const darkHero = DARK_HERO_PAGES.includes(currentPage);
  // Always-solid frosted header → guaranteed legible on every hero, no scroll dependency.
  const solid = true;
  const lightText = false;

  const links = [
    { label: 'Sobre Germán', page: 'sobre', match: ['sobre'] },
    { label: 'Método', page: 'metodologia', match: ['metodologia'] },
    { label: 'Fisioterapia', page: 'fisioterapia', match: ['fisioterapia', 'quiropraxia', 'puncion', 'masajes', 'readaptacion'] },
    { label: 'Lesiones', page: 'lesiones', match: ['lesiones', 'pubalgia', 'ciatica', 'tendinitis', 'hombro', 'bursitis', 'condromalacia', 'contractura', 'periostitis', 'epitrocleitis'] },
    { label: 'Deportes', page: 'deportes', match: ['deportes', 'crossfit', 'weightlifting', 'bjj', 'boxeo'] },
  ];

  const textColor = lightText ? 'rgba(255,255,255,0.78)' : 'rgba(10,10,10,0.62)';
  const logoColor = lightText ? '#FFFFFF' : '#0A0A0A';

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: solid ? 'rgba(255,255,255,0.96)' : 'transparent',
      backdropFilter: solid ? 'blur(16px) saturate(140%)' : 'none',
      WebkitBackdropFilter: solid ? 'blur(16px) saturate(140%)' : 'none',
      borderBottom: solid ? '1px solid rgba(10,10,10,0.08)' : '1px solid transparent',
      boxShadow: solid ? '0 1px 24px rgba(10,10,10,0.05)' : 'none',
      transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'background 0.4s ease, transform 0.35s ease, box-shadow 0.4s ease, border-color 0.4s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: solid ? '1rem 2rem' : '1.5rem 2rem',
        transition: 'padding 0.35s ease',
      }}>
        {/* Logo */}
        <div
          onClick={() => onNavigate('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
        >
          <div style={{
            width: '34px', height: '34px',
            border: `1.5px solid ${lightText ? 'rgba(255,255,255,0.3)' : 'rgba(10,10,10,0.15)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, transition: 'border-color 0.4s',
          }}>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: '#C9A55A', letterSpacing: '-0.03em' }}>GM</span>
          </div>
          <div style={{ lineHeight: 1 }}>
            <div style={{
              fontSize: '0.9375rem', fontFamily: 'Space Grotesk', fontWeight: 700,
              letterSpacing: '-0.01em', color: logoColor, transition: 'color 0.4s',
            }}>
              Germán Montenegro
            </div>
            <div style={{
              fontSize: '0.5625rem', letterSpacing: '0.25em', textTransform: 'uppercase',
              fontWeight: 600, color: '#C9A55A', marginTop: '0.1875rem',
            }}>
              Fisioterapia Deportiva
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map(l => (
            <NavLink
              key={l.page}
              active={l.match.includes(currentPage)}
              lightText={lightText}
              onClick={() => onNavigate(l.page)}
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle lightText={lightText} />
          <button
            onClick={() => onNavigate('fisioterapia')}
            style={{
              background: '#C9A55A', color: '#0A0A0A', border: 'none',
              padding: '0.75rem 1.375rem', fontSize: '0.6875rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
              fontFamily: 'Space Grotesk', transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = lightText ? '#FFFFFF' : '#0A0A0A'; e.currentTarget.style.color = lightText ? '#0A0A0A' : '#C9A55A'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#C9A55A'; e.currentTarget.style.color = '#0A0A0A'; }}
          >
            Agendar
          </button>
        </div>

        {/* Mobile controls */}
        <div className="nav-burger" style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }}>
          <ThemeToggle lightText={lightText} />
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menú"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: '5px', padding: '0.5rem',
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '24px', height: '2px',
                background: lightText ? '#FFFFFF' : '#0A0A0A',
                transition: 'all 0.3s',
                transform: menuOpen ? (i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)') : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className="nav-mobile-panel" style={{
        display: 'none',
        maxHeight: menuOpen ? '420px' : '0',
        overflow: 'hidden',
        background: '#0A0A0A',
        transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div style={{ padding: '1rem 2rem 2rem' }}>
          {links.map(l => (
            <a
              key={l.page}
              onClick={() => { onNavigate(l.page); setMenuOpen(false); }}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1.125rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)',
                color: l.match.includes(currentPage) ? '#C9A55A' : 'rgba(255,255,255,0.85)',
                fontSize: '1.125rem', fontFamily: 'Space Grotesk', fontWeight: 600,
                letterSpacing: '-0.01em', cursor: 'pointer', textDecoration: 'none',
              }}
            >
              {l.label}
              <span style={{ color: '#C9A55A', fontSize: '1rem' }}>→</span>
            </a>
          ))}
          <button
            onClick={() => { onNavigate('fisioterapia'); setMenuOpen(false); }}
            style={{
              width: '100%', marginTop: '1.5rem', background: '#C9A55A', color: '#0A0A0A',
              border: 'none', padding: '1.125rem', fontSize: '0.8125rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Space Grotesk',
            }}
          >
            Agendar valoración
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
          .nav-mobile-panel { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ children, active, onClick, lightText }) {
  const base = active ? '#C9A55A' : (lightText ? 'rgba(255,255,255,0.78)' : 'rgba(10,10,10,0.62)');
  return (
    <a
      onClick={onClick}
      style={{
        color: base,
        fontSize: '0.875rem',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'color 0.25s',
        textDecoration: 'none',
        letterSpacing: '-0.01em',
        position: 'relative',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => e.currentTarget.style.color = '#C9A55A'}
      onMouseLeave={(e) => e.currentTarget.style.color = base}
    >
      {children}
    </a>
  );
}

function ThemeToggle({ lightText }) {
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark'
  );
  const toggle = () => {
    const next = !dark;
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    try { localStorage.setItem('gm-theme', next ? 'dark' : 'light'); } catch (e) {}
    setDark(next);
  };
  const color = lightText ? 'rgba(255,255,255,0.85)' : 'rgba(10,10,10,0.7)';
  const border = lightText ? 'rgba(255,255,255,0.25)' : 'rgba(10,10,10,0.15)';
  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={dark ? 'Modo claro' : 'Modo oscuro'}
      style={{
        width: '38px', height: '38px', borderRadius: '50%',
        border: `1px solid ${border}`, background: 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'all 0.3s', flexShrink: 0, color,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A55A'; e.currentTarget.style.color = '#C9A55A'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = color; }}
    >
      {dark ? (
        // sun
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        // moon
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}

// HOME PAGE
function HomePage({ onNavigate }) {
  return (
    <main>
      <HeroSection onNavigate={onNavigate} />
      <TrustNumbers />
      <MethodologySection />
      <BodyMapSection onNavigate={onNavigate} />
      <InjuriesSection onNavigate={onNavigate} />
      <SportsSection onNavigate={onNavigate} />
      <ContactSection />
    </main>
  );
}

function HeroSection({ onNavigate }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section style={{
      minHeight: '100vh',
      position: 'relative',
      background: '#0A0A0A',
      color: '#FFFFFF',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Animated gradient orb */}
      <div style={{
        position: 'absolute',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,165,90,0.25) 0%, transparent 70%)',
        top: '-200px',
        right: '-200px',
        filter: 'blur(80px)',
        transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
        transition: 'transform 0.5s ease-out',
      }} />
      
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,165,90,0.15) 0%, transparent 70%)',
        bottom: '-150px',
        left: '-150px',
        filter: 'blur(80px)',
        transform: `translate(${-mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px)`,
        transition: 'transform 0.5s ease-out',
      }} />
      
      {/* Grid lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        opacity: 0.5,
      }} />
      
      {/* Vertical text decoration */}
      <div style={{
        position: 'absolute',
        left: '2rem',
        top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'left center',
        fontSize: '0.75rem',
        letterSpacing: '0.4em',
        color: 'rgba(255,255,255,0.3)',
        fontFamily: 'Space Grotesk',
        fontWeight: 500,
      }}>
        EST. 2017 — BOGOTÁ
      </div>
      
      {/* Floating numbers */}
      <div style={{
        position: 'absolute',
        right: '4rem',
        top: '20%',
        fontSize: '12rem',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.08)',
        lineHeight: 1,
        letterSpacing: '-0.05em',
      }}>
        01
      </div>
      
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ maxWidth: '1100px' }}>
          {/* Top label with line */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '3rem',
          }}>
            <div style={{
              width: '60px',
              height: '1px',
              background: '#C9A55A',
            }} />
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#C9A55A',
            }}>
              Germán Montenegro · Fisioterapeuta Deportivo
            </div>
          </div>
          
          {/* Massive headline */}
          <h1 style={{
            fontSize: 'clamp(3.5rem, 11vw, 9rem)',
            fontWeight: 700,
            lineHeight: 0.88,
            marginBottom: '2rem',
            letterSpacing: '-0.04em',
            fontFamily: 'Space Grotesk',
          }}>
            Vuelves
            <br />
            <span style={{
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#C9A55A',
            }}>
              más fuerte.
            </span>
          </h1>
          
          {/* Description with line */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            marginBottom: '4rem',
            maxWidth: '700px',
          }}>
            <div style={{
              width: '4px',
              background: '#C9A55A',
              flexShrink: 0,
            }} />
            <p style={{
              fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 300,
            }}>
              Para atletas que rechazan la fisio pasiva. Diagnóstico preciso, 
              tratamiento integrado y vuelta al deporte sin compensaciones. 
              <span style={{ color: '#FFFFFF', fontWeight: 500 }}> Sin atajos. Sin sesiones infinitas.</span>
            </p>
          </div>

          {/* Movement hashtag */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            padding: '0.75rem 1.25rem',
            border: '1px solid rgba(201,165,90,0.4)',
          }}>
            <span style={{ width: '7px', height: '7px', background: '#C9A55A', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.0625rem',
              letterSpacing: '-0.01em', color: '#C9A55A',
            }}>#latecnicaprimero</span>
            <span style={{
              fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              fontWeight: 600, color: 'rgba(255,255,255,0.5)', paddingLeft: '0.5rem',
              borderLeft: '1px solid rgba(255,255,255,0.15)',
            }}>El movimiento</span>
          </div>
          
          {/* CTAs */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                background: '#C9A55A',
                color: '#0A0A0A',
                border: 'none',
                padding: '1.25rem 2.5rem',
                fontSize: '0.9375rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(201,165,90,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C9A55A';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                Agendar Valoración
                <span style={{ fontSize: '1.25rem' }}>→</span>
              </span>
            </button>
            
            <button
              onClick={() => onNavigate('fisioterapia')}
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '1.25rem 2.5rem',
                fontSize: '0.9375rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C9A55A';
                e.currentTarget.style.color = '#C9A55A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              Conoce el método
            </button>
            
            {/* Rating inline */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginLeft: 'auto',
              paddingLeft: '2rem',
            }}>
              <div style={{ display: 'flex', gap: '0.125rem' }}>
                {[1,2,3,4,5].map(i => (
                  <span key={i} style={{ color: '#C9A55A', fontSize: '1rem' }}>★</span>
                ))}
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Space Grotesk' }}>4.9/5</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>+200 reseñas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom info bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 2rem',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        fontSize: '0.8125rem',
        color: 'rgba(255,255,255,0.5)',
      }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <span>📍 Bogotá, Colombia</span>
          <span>📞 +57 XXX XXX XXXX</span>
          <span>⏰ Lun-Sáb</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          letterSpacing: '0.2em',
          fontSize: '0.75rem',
        }}>
          DESLIZA
          <div style={{
            width: '40px',
            height: '1px',
            background: '#C9A55A',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              width: '20px',
              height: '100%',
              background: '#FFFFFF',
              animation: 'slide 2s infinite',
            }} />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}

function TrustNumbers() {
  const numbers = [
    { value: '500', suffix: '+', label: 'Atletas tratados', desc: 'Desde 2017' },
    { value: '8', suffix: 'años', label: 'De experiencia', desc: 'Especializado' },
    { value: '4.9', suffix: '/5', label: 'Rating promedio', desc: '+200 reseñas' },
    { value: '6-10', suffix: 'sesiones', label: 'Promedio', desc: 'Sin eternizar' },
  ];
  
  return (
    <section style={{
      padding: '0',
      background: '#FFFFFF',
      position: 'relative',
    }}>
      <div style={{
        background: '#0A0A0A',
        color: '#FFFFFF',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Diagonal accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'linear-gradient(135deg, transparent 50%, rgba(201,165,90,0.05) 50%)',
        }} />
        
        <div className="container" style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0',
          }}>
            {numbers.map((item, i) => (
              <div key={i} style={{
                padding: '2rem',
                borderRight: i < numbers.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                position: 'relative',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                }}>
                  <div style={{
                    fontSize: 'clamp(3.5rem, 5vw, 5rem)',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    lineHeight: 1,
                    color: '#C9A55A',
                    letterSpacing: '-0.03em',
                  }}>
                    {item.value}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.5)',
                    fontWeight: 500,
                  }}>
                    {item.suffix}
                  </div>
                </div>
                <div style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  marginBottom: '0.25rem',
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.4)',
                }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodologySection() {
  const [activePhase, setActivePhase] = useState(0);
  
  const phases = [
    {
      number: '01',
      title: 'Diagnóstico',
      subtitle: 'Preciso',
      duration: '1 sesión · 60 min',
      description: 'Evaluación completa del movimiento, análisis biomecánico y diagnóstico diferencial. Sin adivinar.',
      details: ['Análisis postural completo', 'Tests funcionales específicos', 'Evaluación del gesto deportivo', 'Plan de tratamiento personalizado'],
    },
    {
      number: '02',
      title: 'Tratamiento',
      subtitle: 'Integrado',
      duration: '3-8 sesiones',
      description: 'Terapia manual, punción seca, quiropraxia según tu caso específico.',
      details: ['Terapia manual avanzada', 'Punción seca en trigger points', 'Quiropraxia según indicación', 'Movilización articular'],
    },
    {
      number: '03',
      title: 'Fortalecimiento',
      subtitle: 'Progresivo',
      duration: '4-8 semanas',
      description: 'Plan personalizado para corregir desbalances y prevenir recaídas.',
      details: ['Ejercicios correctivos', 'Carga progresiva', 'Re-educación neuromuscular', 'Trabajo de estabilidad'],
    },
    {
      number: '04',
      title: 'Return to',
      subtitle: 'Play',
      duration: '2-4 semanas',
      description: 'Readaptación al gesto deportivo. Vuelves más fuerte que antes.',
      details: ['Readaptación específica', 'Tests funcionales', 'Vuelta gradual al deporte', 'Plan de prevención'],
    },
  ];
  
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background number */}
      <div style={{
        position: 'absolute',
        right: '-5%',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '40rem',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.04)',
        lineHeight: 1,
        pointerEvents: 'none',
      }}>
        {phases[activePhase].number}
      </div>
      
      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{
          marginBottom: '5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Método Indestructible
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
            }}>
              No es servicio,
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>es proceso.</span>
            </h2>
          </div>
          
          {/* Phase navigator */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
          }}>
            {phases.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                style={{
                  width: '50px',
                  height: '50px',
                  border: 'none',
                  background: activePhase === i ? '#0A0A0A' : 'transparent',
                  color: activePhase === i ? '#C9A55A' : 'rgba(10,10,10,0.4)',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: activePhase === i ? 'none' : '1px solid rgba(10,10,10,0.1)',
                }}
              >
                {p.number}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active phase display */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          minHeight: '400px',
        }} className="method-grid">
          <div>
            <div style={{
              fontSize: '0.75rem',
              color: '#C9A55A',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '1rem',
            }}>
              Fase {phases[activePhase].number} · {phases[activePhase].duration}
            </div>
            <h3 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              marginBottom: '2rem',
            }}>
              {phases[activePhase].title}
              <br />
              <span style={{ color: '#C9A55A' }}>{phases[activePhase].subtitle}.</span>
            </h3>
            <p style={{
              fontSize: '1.25rem',
              lineHeight: 1.5,
              color: 'rgba(10,10,10,0.6)',
              marginBottom: '2.5rem',
            }}>
              {phases[activePhase].description}
            </p>
          </div>
          
          <div style={{
            background: '#FFFFFF',
            padding: '3rem',
            border: '1px solid rgba(10,10,10,0.08)',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: '-1rem',
              right: '2rem',
              padding: '0.5rem 1rem',
              background: '#C9A55A',
              color: '#0A0A0A',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Lo que incluye
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {phases[activePhase].details.map((d, j) => (
                <div key={j} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(201,165,90,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#C9A55A',
                  }}>
                    {j + 1}
                  </div>
                  <div style={{
                    fontSize: '1.0625rem',
                    color: 'rgba(10,10,10,0.8)',
                    lineHeight: 1.5,
                  }}>
                    {d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .method-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function InjuriesSection({ onNavigate }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const injuries = [
    { name: 'Pubalgia', page: 'pubalgia', zone: 'Cadera / Aductor', icon: '🦴', complexity: 'Alta' },
    { name: 'Ciática', page: 'ciatica', zone: 'Lumbar / Pierna', icon: '⚡', complexity: 'Media' },
    { name: 'Tendinitis Rotuliana', page: 'tendinitis', zone: 'Rodilla', icon: '🦵', complexity: 'Media' },
    { name: 'Contractura', page: 'home', zone: 'Muscular', icon: '💪', complexity: 'Baja' },
    { name: 'Bursitis', page: 'home', zone: 'Articular', icon: '🔥', complexity: 'Media' },
    { name: 'Condromalacia', page: 'home', zone: 'Rodilla', icon: '⚙️', complexity: 'Media' },
    { name: 'Periostitis Tibial', page: 'home', zone: 'Tibia', icon: '🦴', complexity: 'Baja' },
    { name: 'Epitrocleítis', page: 'home', zone: 'Codo', icon: '💪', complexity: 'Media' },
    { name: 'Hombro Congelado', page: 'hombro', zone: 'Hombro', icon: '🤲', complexity: 'Alta' },
  ];
  
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container">
        {/* Header asymmetrical */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '5rem',
        }} className="injuries-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Catálogo de lesiones
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
            }}>
              Si te lesionaste,
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                tengo el plan.
              </span>
            </h2>
          </div>
          
          <div style={{ alignSelf: 'flex-end' }}>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'rgba(10,10,10,0.6)',
              maxWidth: '450px',
            }}>
              No solo "te alivio el dolor". Diagnóstico diferencial, tratamiento integrado 
              y vuelta al deporte sin compensaciones.
            </p>
            <div style={{
              marginTop: '1.5rem',
              fontSize: '0.875rem',
              color: 'rgba(10,10,10,0.5)',
            }}>
              <span style={{ color: '#C9A55A', fontWeight: 700 }}>9</span> lesiones · <span style={{ color: '#C9A55A', fontWeight: 700 }}>500+</span> casos resueltos
            </div>
          </div>
        </div>
        
        {/* Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(10,10,10,0.08)',
          border: '1px solid rgba(10,10,10,0.08)',
        }} className="bento-grid">
          {injuries.map((injury, i) => {
            const isHovered = hoveredIndex === i;
            const isFeatured = i === 0; // Pubalgia featured
            
            return (
              <div
                key={i}
                onClick={() => onNavigate(injury.page)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  padding: '2.5rem',
                  background: isHovered ? '#0A0A0A' : '#FFFFFF',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  minHeight: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                }}
              >
                {/* Floating icon */}
                <div style={{
                  position: 'absolute',
                  top: isHovered ? '-1rem' : '1rem',
                  right: '1rem',
                  fontSize: isHovered ? '6rem' : '3rem',
                  opacity: isHovered ? 0.15 : 0.4,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  {injury.icon}
                </div>
                
                {/* Top: complexity badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(10,10,10,0.4)',
                    transition: 'color 0.4s',
                  }}>
                    {String(i + 1).padStart(2, '0')} · {injury.zone}
                  </div>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: injury.complexity === 'Alta' ? '#DC2626' : 
                                injury.complexity === 'Media' ? '#C9A55A' : '#16A34A',
                  }} />
                </div>
                
                {/* Bottom content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: isHovered ? '#FFFFFF' : '#0A0A0A',
                    letterSpacing: '-0.02em',
                    fontFamily: 'Space Grotesk',
                    marginBottom: '1rem',
                    transition: 'color 0.4s',
                    lineHeight: 1.1,
                  }}>
                    {injury.name}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.4s',
                  }}>
                    <span style={{
                      fontSize: '0.875rem',
                      color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.5)',
                      fontWeight: 600,
                      transition: 'color 0.4s',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}>
                      Ver protocolo
                    </span>
                    <span style={{
                      fontSize: '1.5rem',
                      color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                      transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                      transition: 'all 0.4s',
                    }}>
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .bento-grid { grid-template-columns: 1fr !important; }
          .injuries-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SportsSection({ onNavigate }) {
  const [activeSport, setActiveSport] = useState(0);
  
  const sports = [
    { 
      name: 'CrossFit', 
      page: 'crossfit',
      tagline: 'WODs sin compensaciones',
      description: 'Movement screens, técnica en levantamientos, gestión de cargas. Vuelve al box sin miedo al snatch.',
      stats: [
        { value: '120+', label: 'Atletas CF' },
        { value: '8', label: 'Box partners' },
      ],
      injuries: ['Hombro', 'Rodilla', 'Lumbar', 'Muñeca'],
      featured: true,
      page: 'crossfit',
    },
    { 
      name: 'Weightlifting', 
      page: 'weightlifting',
      tagline: 'La barra sin compensaciones',
      description: 'Sentadilla, snatch, clean & jerk. Recepción profunda, bisagra de cadera y posición overhead — desde adentro porque las entreno.',
      stats: [
        { value: '90+', label: 'Levantadores' },
        { value: '6 años', label: 'En la barra' },
      ],
      injuries: ['Lumbar', 'Hombro', 'Muñeca', 'Rodilla'],
    },
    { 
      name: 'BJJ', 
      page: 'bjj',
      tagline: 'Grappling longevidad',
      description: 'Cuello, hombro, rodilla. Las lesiones del jiu-jitsu requieren entender el deporte.',
      stats: [
        { value: '60+', label: 'Grapplers' },
        { value: '3', label: 'Academias' },
      ],
      injuries: ['Cuello', 'Hombro', 'Rodilla', 'Codo'],
    },
    { 
      name: 'Boxeo', 
      page: 'boxeo',
      tagline: 'El ring sin dolor',
      description: 'Mano, muñeca, hombro y cuello. El golpeo castiga la cadena del puño. Técnica de puño y vendaje que protegen tanto como pegan.',
      stats: [
        { value: '70+', label: 'Boxeadores' },
        { value: '4', label: 'Gimnasios' },
      ],
      injuries: ['Mano', 'Muñeca', 'Hombro', 'Cervical'],
    },
  ];
  
  const current = sports[activeSport];
  
  return (
    <section style={{
      padding: '8rem 0',
      background: '#0A0A0A',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Massive background sport name */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(15rem, 30vw, 35rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.06)',
        lineHeight: 1,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        transition: 'all 0.6s',
      }}>
        {current.name}
      </div>
      
      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '5rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Especializaciones deportivas
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
            }}>
              Los entreno.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                Los entiendo.
              </span>
            </h2>
          </div>
          
          {/* Sport tabs */}
          <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap' }}>
            {sports.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSport(i)}
                style={{
                  padding: '1rem 1.5rem',
                  background: activeSport === i ? '#C9A55A' : 'transparent',
                  color: activeSport === i ? '#0A0A0A' : 'rgba(255,255,255,0.5)',
                  border: 'none',
                  borderBottom: activeSport === i ? '2px solid #C9A55A' : '2px solid rgba(255,255,255,0.1)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontFamily: 'Space Grotesk',
                }}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active sport showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="sport-showcase">
          <div>
            <div style={{
              fontSize: '0.75rem',
              color: '#C9A55A',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '1.5rem',
            }}>
              {current.tagline}
            </div>
            
            <h3 style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              marginBottom: '2rem',
            }}>
              {current.name}.
            </h3>
            
            <p style={{
              fontSize: '1.25rem',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '500px',
              marginBottom: '3rem',
            }}>
              {current.description}
            </p>
            
            {/* Stats */}
            <div style={{
              display: 'flex',
              gap: '3rem',
              marginBottom: '3rem',
            }}>
              {current.stats.map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    color: '#C9A55A',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => onNavigate(current.page)}
              style={{
                padding: '1.25rem 2.5rem',
                background: '#C9A55A',
                color: '#0A0A0A',
                border: 'none',
                fontSize: '0.9375rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontFamily: 'Space Grotesk',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C9A55A';
              }}
            >
              Ver protocolo {current.name} →
            </button>
          </div>
          
          {/* Injuries panel */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '2.5rem',
          }}>
            <div style={{
              fontSize: '0.6875rem',
              color: '#C9A55A',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}>
              Lesiones más comunes
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {current.injuries.map((inj, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 0',
                  borderBottom: i < current.injuries.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <span style={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                  }}>
                    {inj}
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.3)',
                    fontFamily: 'Space Grotesk',
                  }}>
                    0{i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .sport-showcase { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ContactSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrolled = -rect.top + window.innerHeight * 0.5;
      const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      style={{
        padding: '10rem 0',
        background: '#0A0A0A',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${1 + scrollProgress * 0.3})`,
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(201,165,90,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        transition: 'transform 0.5s',
      }} />
      
      {/* Massive background text */}
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '50%',
        transform: `translateX(-50%) translateY(${(1 - scrollProgress) * 100}px)`,
        fontSize: 'clamp(8rem, 20vw, 25rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.04)',
        lineHeight: 0.9,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        opacity: scrollProgress,
        transition: 'all 0.6s',
      }}>
        VOLVER.
      </div>
      
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }} className="contact-grid">
          {/* Left content */}
          <div style={{
            transform: `translateY(${(1 - scrollProgress) * 40}px)`,
            opacity: 0.3 + scrollProgress * 0.7,
            transition: 'all 0.5s',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Paso siguiente
              </div>
            </div>
            
            <h2 style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              marginBottom: '2.5rem',
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
            }}>
              ¿Listo para
              <br />
              <span style={{ 
                fontStyle: 'italic', 
                fontWeight: 400,
                color: '#C9A55A',
              }}>
                volver?
              </span>
            </h2>
            
            <p style={{
              fontSize: '1.25rem',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '3rem',
              maxWidth: '500px',
            }}>
              Primera sesión: evaluación completa + diagnóstico preciso + plan personalizado. 60 minutos. Sin atajos.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                style={{
                  background: '#C9A55A',
                  color: '#0A0A0A',
                  border: 'none',
                  padding: '1.5rem 3rem',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontFamily: 'Space Grotesk',
                  boxShadow: '0 8px 32px rgba(201,165,90,0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(201,165,90,0.4)';
                  e.currentTarget.style.background = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,165,90,0.25)';
                  e.currentTarget.style.background = '#C9A55A';
                }}
              >
                Agendar valoración →
              </button>
              
              <button
                style={{
                  background: 'transparent',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '1.5rem 3rem',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontFamily: 'Space Grotesk',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A55A';
                  e.currentTarget.style.color = '#C9A55A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                WhatsApp
              </button>
            </div>
            
            {/* Quick info */}
            <div style={{
              marginTop: '4rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
            }}>
              {[
                { value: '60min', label: 'Primera sesión' },
                { value: '24-48h', label: 'Respuesta' },
                { value: '6-10', label: 'Sesiones promedio' },
              ].map((item, i) => (
                <div key={i} style={{
                  borderLeft: '1px solid rgba(201,165,90,0.3)',
                  paddingLeft: '1rem',
                }}>
                  <div style={{
                    fontSize: '1.75rem',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    color: '#C9A55A',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}>
                    {item.value}
                  </div>
                  <div style={{
                    fontSize: '0.6875rem',
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: image placeholder with parallax reveal */}
          <div style={{
            position: 'relative',
            height: '600px',
            transform: `translateY(${(1 - scrollProgress) * 60}px) scale(${0.92 + scrollProgress * 0.08})`,
            transition: 'transform 0.5s',
          }}>
            {/* Main placeholder */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(201,165,90,0.12) 0%, rgba(201,165,90,0.03) 100%)',
              border: '1px solid rgba(201,165,90,0.2)',
              overflow: 'hidden',
            }}>
              {/* Reveal mask */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: '#0A0A0A',
                transform: `translateY(${(1 - scrollProgress) * 100}%)`,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }} />
              
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
                textAlign: 'center',
              }}>
                Placeholder
                <br />
                Treatment scene
              </div>
              
              {/* Corner labels */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                fontSize: '0.6875rem',
                color: 'rgba(201,165,90,0.6)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}>
                EST. 2017
              </div>
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                fontSize: '0.6875rem',
                color: 'rgba(201,165,90,0.6)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}>
                BOGOTÁ
              </div>
            </div>
            
            {/* Floating stat badge */}
            <div style={{
              position: 'absolute',
              bottom: '-2rem',
              left: '-2rem',
              padding: '2rem',
              background: '#C9A55A',
              transform: `rotate(${-3 + scrollProgress * 3}deg)`,
              boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
              transition: 'transform 0.6s',
            }}>
              <div style={{
                fontSize: '3rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                color: '#0A0A0A',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}>
                500+
              </div>
              <div style={{
                fontSize: '0.6875rem',
                color: 'rgba(10,10,10,0.7)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}>
                Atletas tratados
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom info bar */}
        <div style={{
          marginTop: '6rem',
          paddingTop: '2.5rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
          fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.5)',
        }} className="contact-footer">
          <div>📍 Bogotá, Colombia · Inside CrossFit box</div>
          <div>🕐 Lun-Vie 7am-7pm · Sáb 8am-2pm</div>
          <div>📱 WhatsApp: +57 XXX XXX XXXX</div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-footer { justify-content: center !important; text-align: center; }
        }
      `}</style>
    </section>
  );
}

// PLACEHOLDER PAGES
function FisioterapiaPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0);
  
  return (
    <main>
      <FisioHero onNavigate={onNavigate} />
      <FisioAQuienAyudo onNavigate={onNavigate} />
      <FisioMetodo />
      <FisioTecnicas onNavigate={onNavigate} />
      <FisioPorQueDiferente />
      <FisioLesiones onNavigate={onNavigate} />
      <FisioUbicacion />
      <FisioAgendar onNavigate={onNavigate} />
      <FisioFAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
    </main>
  );
}

// FISIOTERAPIA - HERO
function FisioHero({ onNavigate }) {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const parallaxOffset = scrollY * 0.4;
  const fadeOpacity = Math.max(0, 1 - scrollY / 700);
  
  return (
    <section style={{
      minHeight: '95vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      padding: '8rem 0 4rem',
      overflow: 'hidden',
      background: '#FFFFFF',
    }}>
      {/* Parallax background elements */}
      <div style={{
        position: 'absolute',
        inset: 0,
        transform: `translateY(${parallaxOffset}px)`,
        opacity: fadeOpacity,
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: '-10%',
          width: '60%',
          height: '100%',
          background: 'linear-gradient(135deg, transparent 30%, rgba(201,165,90,0.08) 100%)',
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }} />
        
        <div style={{
          position: 'absolute',
          right: '5%',
          top: '20%',
          width: '450px',
          height: '500px',
          background: 'linear-gradient(135deg, rgba(201,165,90,0.12) 0%, rgba(201,165,90,0.04) 100%)',
          border: '2px solid rgba(201,165,90,0.15)',
          transform: `translateY(${parallaxOffset * 0.5}px)`,
        }}>
          <div style={{
            position: 'absolute',
            inset: '15%',
            border: '1px solid rgba(201,165,90,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            color: 'rgba(10,10,10,0.25)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
            textAlign: 'center',
          }}>
            Placeholder<br />Treatment scene
          </div>
        </div>
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', transform: `translateY(${scrollY * 0.15}px)` }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(201,165,90,0.08)',
            border: '1px solid rgba(201,165,90,0.2)',
            marginBottom: '2.5rem',
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C9A55A' }} />
            <div style={{
              fontSize: '0.8125rem',
              color: '#C9A55A',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}>
              Bogotá, Colombia
            </div>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 700,
            lineHeight: 0.95,
            marginBottom: '2.5rem',
            letterSpacing: '-0.03em',
            fontFamily: 'Space Grotesk',
          }}>
            Fisioterapia deportiva
            <br />
            <span style={{ 
              fontStyle: 'italic', 
              fontWeight: 400,
              background: 'linear-gradient(135deg, #C9A55A 0%, rgba(201,165,90,0.5) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              sin atajos.
            </span>
          </h1>
          
          <p style={{
            fontSize: '1.375rem',
            lineHeight: 1.6,
            color: 'rgba(10,10,10,0.65)',
            marginBottom: '3.5rem',
            maxWidth: '650px',
          }}>
            Diagnóstico preciso. Tratamiento integrado. Plan de fortalecimiento.{' '}
            <span style={{ fontWeight: 600, color: '#0A0A0A' }}>
              Para atletas que no se detienen.
            </span>
          </p>
          
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <button
              style={{
                background: '#0A0A0A',
                color: '#FFFFFF',
                border: 'none',
                padding: '1.375rem 3rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontFamily: 'Space Grotesk',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(10,10,10,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Agendar valoración →
            </button>
            
            <button
              style={{
                background: 'transparent',
                color: '#0A0A0A',
                border: '1px solid rgba(10,10,10,0.2)',
                padding: '1.375rem 3rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontFamily: 'Space Grotesk',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C9A55A';
                e.currentTarget.style.color = '#C9A55A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10,10,10,0.2)';
                e.currentTarget.style.color = '#0A0A0A';
              }}
            >
              WhatsApp
            </button>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, auto)',
            gap: '3rem',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(10,10,10,0.08)',
            maxWidth: 'fit-content',
          }}>
            {[
              { value: '500+', label: 'Atletas tratados', desc: 'Desde 2017' },
              { value: '8 años', label: 'De experiencia', desc: 'Especializado' },
              { value: '6-10', label: 'Sesiones promedio', desc: 'Sin eternizar' },
            ].map((item, i) => (
              <div key={i}>
                <div style={{
                  fontSize: '2.5rem',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  color: '#C9A55A',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                }}>
                  {item.value}
                </div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.25rem', color: '#0A0A0A' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(10,10,10,0.4)' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FISIOTERAPIA - A QUIÉN AYUDO
function FisioAQuienAyudo({ onNavigate }) {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));
    
    return () => observer.disconnect();
  }, []);
  
  const athletes = [
    {
      icon: '🏋️',
      sport: 'CrossFit',
      desc: 'WODs sin compensaciones',
      injuries: ['Pubalgia', 'Tendinitis rotuliana', 'Hombro'],
      page: 'crossfit',
      stat: '120+ atletas',
    },
    {
      icon: '🥋',
      sport: 'BJJ / Grappling',
      desc: 'Longevidad en el tatami',
      injuries: ['Epitrocleítis', 'Contracturas', 'Cervicales'],
      page: 'home',
      stat: '60+ grapplers',
    },
    {
      icon: '🏋️',
      sport: 'Weightlifting',
      desc: 'La barra sin compensaciones',
      injuries: ['Lumbar', 'Hombro', 'Muñeca'],
      page: 'weightlifting',
      stat: '90+ levantadores',
    },
    {
      icon: '🥊',
      sport: 'Boxeo',
      desc: 'El ring sin dolor',
      injuries: ['Mano', 'Hombro', 'Cervical'],
      page: 'boxeo',
      stat: '70+ boxeadores',
    },
  ];
  
  return (
    <section 
      ref={sectionRef}
      style={{
        padding: '8rem 0',
        background: '#FAFAFA',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(201,165,90,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />
      
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '5rem',
          alignItems: 'flex-end',
        }} className="aquien-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Para atletas
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
            }}>
              A quién ayudo
            </h2>
          </div>
          
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(10,10,10,0.6)',
            lineHeight: 1.6,
            maxWidth: '500px',
          }}>
            Atletas que rechazan la fisio pasiva tradicional. Los que quieren diagnóstico preciso 
            y volver a entrenar, no solo alivio temporal.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {athletes.map((athlete, i) => (
            <div
              key={i}
              data-index={i}
              onClick={() => onNavigate(athlete.page)}
              style={{
                padding: '2.5rem',
                background: '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid rgba(10,10,10,0.06)',
                position: 'relative',
                overflow: 'hidden',
                transform: visibleCards.includes(i) ? 'translateY(0)' : 'translateY(40px)',
                opacity: visibleCards.includes(i) ? 1 : 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(10,10,10,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: '#C9A55A',
                transform: visibleCards.includes(i) ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
              }} />
              
              <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1 }}>
                {athlete.icon}
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
                fontFamily: 'Space Grotesk',
              }}>
                {athlete.sport}
              </h3>
              
              <p style={{
                fontSize: '0.9375rem',
                color: 'rgba(10,10,10,0.5)',
                marginBottom: '1.5rem',
                fontStyle: 'italic',
              }}>
                {athlete.desc}
              </p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}>
                {athlete.injuries.map((inj, j) => (
                  <span key={j} style={{
                    padding: '0.375rem 0.75rem',
                    background: 'rgba(201,165,90,0.08)',
                    fontSize: '0.75rem',
                    color: 'rgba(10,10,10,0.7)',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}>
                    {inj}
                  </span>
                ))}
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(10,10,10,0.06)',
              }}>
                <span style={{
                  fontSize: '0.75rem',
                  color: '#C9A55A',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  {athlete.stat}
                </span>
                <span style={{
                  fontSize: '1.25rem',
                  color: 'rgba(10,10,10,0.3)',
                  transition: 'all 0.3s',
                }}>
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .aquien-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
// FISIOTERAPIA - MÉTODO (sticky scroll narrative)
function FisioMetodo() {
  const [activePhase, setActivePhase] = useState(0);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      const phase = Math.min(3, Math.floor(progress * 4));
      setActivePhase(phase);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const phases = [
    {
      number: '01',
      title: 'Diagnóstico preciso',
      duration: '1 sesión · 60 minutos',
      desc: 'Antes de tocarte, te entiendo. Evaluación del movimiento, análisis biomecánico y diagnóstico diferencial. Sin radiografías innecesarias, sin etiquetas vagas.',
      points: ['Evaluación del movimiento', 'Análisis biomecánico', 'Diagnóstico diferencial', 'Plan de tratamiento claro'],
    },
    {
      number: '02',
      title: 'Tratamiento integrado',
      duration: '3-8 sesiones',
      desc: 'Manos, agujas, ajuste vertebral si lo necesitas. Las técnicas se combinan según tu caso, no según un protocolo fijo. Cada sesión es una decisión clínica, no una repetición.',
      points: ['Terapia manual', 'Punción seca', 'Quiropraxia según caso', 'IASTM y kinesiotaping'],
    },
    {
      number: '03',
      title: 'Fortalecimiento',
      duration: '4-8 semanas',
      desc: 'Aquí pasa la magia. Plan de fortalecimiento personalizado para corregir los desbalances que causaron la lesión. Sin esto, vuelves a lesionarte. Punto.',
      points: ['Plan personalizado', 'Corrección de desbalances', 'Cargas progresivas', 'Prevención de recaídas'],
    },
    {
      number: '04',
      title: 'Return to Play',
      duration: '2-4 semanas',
      desc: 'Readaptación al gesto deportivo específico. CrossFit, BJJ, running, danza — cada deporte tiene demandas únicas. Vuelves más fuerte que antes, sin recaídas.',
      points: ['Readaptación al gesto', 'Test funcional', 'Vuelves más fuerte', 'Cero recaídas'],
    },
  ];
  
  return (
    <section ref={containerRef} style={{
      position: 'relative',
      background: '#0A0A0A',
      color: '#FFFFFF',
      height: '400vh',
    }}>
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Background gradient that shifts per phase */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${20 + activePhase * 25}% 50%, rgba(201,165,90,0.15) 0%, transparent 50%)`,
          transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }} />
        
        {/* Giant phase number behind */}
        <div style={{
          position: 'absolute',
          right: '-5%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '40rem',
          fontFamily: 'Space Grotesk',
          fontWeight: 700,
          color: 'rgba(201,165,90,0.04)',
          lineHeight: 0.8,
          letterSpacing: '-0.05em',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: 'none',
        }}>
          {phases[activePhase].number}
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'center',
          }} className="metodo-grid">
            {/* LEFT: Phase navigation */}
            <div>
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
                fontWeight: 600,
              }}>
                El Método Indestructible
              </div>
              
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                marginBottom: '4rem',
                fontFamily: 'Space Grotesk',
                letterSpacing: '-0.02em',
              }}>
                No es servicio suelto.
                <br />
                <span style={{ color: '#C9A55A', fontStyle: 'italic', fontWeight: 400 }}>
                  Es proceso.
                </span>
              </h2>
              
              {/* Progress indicator */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {phases.map((p, i) => (
                  <div key={i} style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr',
                    gap: '1.5rem',
                    alignItems: 'center',
                    opacity: i === activePhase ? 1 : 0.35,
                    transition: 'opacity 0.6s',
                  }}>
                    <div style={{
                      fontFamily: 'Space Grotesk',
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: i === activePhase ? '#C9A55A' : '#FFFFFF',
                      transition: 'color 0.6s',
                    }}>
                      {p.number}
                    </div>
                    <div>
                      <div style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        marginBottom: '0.25rem',
                      }}>
                        {p.title}
                      </div>
                      <div style={{
                        height: '2px',
                        background: 'rgba(255,255,255,0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          height: '100%',
                          width: i === activePhase ? '100%' : i < activePhase ? '100%' : '0%',
                          background: '#C9A55A',
                          transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
                        }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* RIGHT: Phase detail */}
            <div style={{ minHeight: '500px' }}>
              <div key={activePhase} style={{
                animation: 'metodoFade 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '8rem',
                  fontWeight: 700,
                  color: '#C9A55A',
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  marginBottom: '1rem',
                }}>
                  {phases[activePhase].number}
                </div>
                
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  fontFamily: 'Space Grotesk',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}>
                  {phases[activePhase].title}
                </h3>
                
                <div style={{
                  fontSize: '0.875rem',
                  color: '#C9A55A',
                  marginBottom: '2rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  {phases[activePhase].duration}
                </div>
                
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '2.5rem',
                  maxWidth: '500px',
                }}>
                  {phases[activePhase].desc}
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                }}>
                  {phases[activePhase].points.map((point, j) => (
                    <div key={j} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.5rem 0',
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        background: '#C9A55A',
                      }} />
                      <span style={{
                        fontSize: '0.9375rem',
                        color: 'rgba(255,255,255,0.85)',
                      }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes metodoFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .metodo-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

// FISIOTERAPIA - TÉCNICAS (interactive showcase)
function FisioTecnicas({ onNavigate }) {
  const [activeIdx, setActiveIdx] = useState(0);
  
  const tecnicas = [
    { 
      number: '01',
      name: 'Terapia manual', 
      tagline: 'Las manos como herramienta primaria',
      description: 'Movilización articular, liberación miofascial y técnicas de tejidos blandos. Es la base sobre la que se apoyan todas las demás técnicas.',
      tags: ['Movilización', 'Miofascial', 'Articular'],
    },
    { 
      number: '02',
      name: 'Punción seca', 
      tagline: 'Liberación profunda de puntos gatillo',
      description: 'Aguja filiforme dirigida al punto gatillo miofascial. Libera contracturas profundas que las manos no alcanzan. Sin medicamentos.',
      tags: ['Aguja', 'Trigger points', 'Miofascial'],
      page: 'puncion',
    },
    { 
      number: '03',
      name: 'Quiropraxia', 
      tagline: 'Ajuste vertebral cuando la evaluación lo indica',
      description: 'Manipulación articular precisa. No es un servicio en sí mismo: es una técnica más dentro del proceso integral. Solo cuando hay indicación clara.',
      tags: ['Vertebral', 'HVLA', 'Articular'],
      page: 'quiropraxia',
    },
    { 
      number: '04',
      name: 'IASTM', 
      tagline: 'Instrumentos para tejidos crónicos',
      description: 'Instrument-Assisted Soft Tissue Mobilization. Herramientas de acero inoxidable para liberar adherencias y restricciones miofasciales crónicas.',
      tags: ['Instrumental', 'Adherencias', 'Crónico'],
    },
    { 
      number: '05',
      name: 'Kinesiotaping', 
      tagline: 'Soporte que no inmoviliza',
      description: 'Vendaje neuromuscular elástico. Apoya la recuperación sin restringir el movimiento. Útil en fases de retorno a la actividad.',
      tags: ['Vendaje', 'Neuromuscular', 'Soporte'],
    },
    { 
      number: '06',
      name: 'Ventosas', 
      tagline: 'Descompresión por presión negativa',
      description: 'Cupping terapéutico. Genera espacio entre capas de tejido, mejora circulación local y libera fascia. Complemento de la terapia manual.',
      tags: ['Cupping', 'Fascia', 'Circulación'],
    },
  ];
  
  return (
    <section style={{
      padding: '8rem 0',
      background: '#F5F2EC',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '5rem',
          alignItems: 'flex-end',
        }} className="tec-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Las técnicas
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
            }}>
              Seis técnicas.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                Un solo proceso.
              </span>
            </h2>
          </div>
          
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(10,10,10,0.6)',
            lineHeight: 1.6,
            maxWidth: '500px',
          }}>
            No son servicios sueltos. Se integran según tu caso específico dentro del proceso de 4 fases. Pasá el cursor por cada una.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="tec-body">
          {/* LEFT: List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid rgba(10,10,10,0.1)',
          }}>
            {tecnicas.map((t, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr auto',
                  gap: '1.5rem',
                  alignItems: 'center',
                  padding: '1.5rem 0',
                  borderBottom: '1px solid rgba(10,10,10,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  background: '#C9A55A',
                  transform: i === activeIdx ? 'scaleY(1)' : 'scaleY(0)',
                  transition: 'transform 0.4s',
                }} />
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: i === activeIdx ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                  paddingLeft: '1rem',
                  transition: 'color 0.3s',
                }}>
                  {t.number}
                </div>
                <div style={{
                  fontSize: i === activeIdx ? '1.5rem' : '1.25rem',
                  fontWeight: 600,
                  fontFamily: 'Space Grotesk',
                  letterSpacing: '-0.01em',
                  color: i === activeIdx ? '#0A0A0A' : 'rgba(10,10,10,0.6)',
                  transition: 'all 0.4s',
                }}>
                  {t.name}
                </div>
                <div style={{
                  fontSize: '1.25rem',
                  color: i === activeIdx ? '#C9A55A' : 'rgba(10,10,10,0.2)',
                  transform: i === activeIdx ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'all 0.4s',
                }}>
                  →
                </div>
              </div>
            ))}
          </div>
          
          {/* RIGHT: Detail */}
          <div style={{
            position: 'sticky',
            top: '8rem',
            background: '#FFFFFF',
            padding: '3rem',
            border: '1px solid rgba(10,10,10,0.08)',
            minHeight: '420px',
          }}>
            <div key={activeIdx} style={{
              animation: 'tecFade 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              <div style={{
                fontFamily: 'Space Grotesk',
                fontSize: '6rem',
                fontWeight: 700,
                color: '#C9A55A',
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                marginBottom: '1.5rem',
                opacity: 0.15,
                position: 'absolute',
                top: '1rem',
                right: '2rem',
              }}>
                {tecnicas[activeIdx].number}
              </div>
              
              <h3 style={{
                fontSize: '2.25rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                fontFamily: 'Space Grotesk',
                letterSpacing: '-0.02em',
                position: 'relative',
              }}>
                {tecnicas[activeIdx].name}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: '#C9A55A',
                marginBottom: '2rem',
                fontStyle: 'italic',
                fontWeight: 500,
              }}>
                {tecnicas[activeIdx].tagline}
              </p>
              
              <p style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                color: 'rgba(10,10,10,0.7)',
                marginBottom: '2rem',
              }}>
                {tecnicas[activeIdx].description}
              </p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(10,10,10,0.08)',
              }}>
                {tecnicas[activeIdx].tags.map((tag, j) => (
                  <span key={j} style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(201,165,90,0.08)',
                    fontSize: '0.75rem',
                    color: '#0A0A0A',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              {tecnicas[activeIdx].page && (
                <button
                  onClick={() => onNavigate(tecnicas[activeIdx].page)}
                  style={{
                    marginTop: '2rem',
                    background: '#0A0A0A',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '1rem 1.5rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontFamily: 'Space Grotesk',
                    transition: 'all 0.3s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#C9A55A'; e.currentTarget.style.color = '#0A0A0A'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.color = '#FFFFFF'; }}
                >
                  Ver página de {tecnicas[activeIdx].name}
                  <span>→</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes tecFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .tec-header { grid-template-columns: 1fr !important; }
          .tec-body { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}

// FISIOTERAPIA - POR QUÉ DIFERENTE (editorial comparativa)
function FisioPorQueDiferente() {
  const rows = [
    {
      axis: 'Quién te trata',
      tradicional: 'Fisio que nunca ha hecho un snatch',
      indestructible: 'Atleta que entrena CrossFit, BJJ, weightlifting',
    },
    {
      axis: 'Cómo trabaja',
      tradicional: 'Sesiones sueltas, mismo protocolo para todos',
      indestructible: 'Proceso de 4 fases adaptado a tu deporte',
    },
    {
      axis: 'Cuánto dura',
      tradicional: '20+ sesiones, eternizado',
      indestructible: '6—10 sesiones, objetivo claro',
    },
    {
      axis: 'Qué buscas',
      tradicional: 'Que se vaya el dolor',
      indestructible: 'Volver a competir más fuerte',
    },
    {
      axis: 'Cuándo termina',
      tradicional: 'Cuando dejas de venir',
      indestructible: 'Cuando ya no me necesitas',
    },
  ];
  
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background giant text */}
      <div style={{
        position: 'absolute',
        right: '-3%',
        bottom: '-3rem',
        fontSize: 'clamp(10rem, 22vw, 22rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}>
        DIFERENTE.
      </div>
      
      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '5rem',
          alignItems: 'flex-end',
        }} className="diff-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                La diferencia real
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
            }}>
              No vengas si
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                buscas un masaje.
              </span>
            </h2>
          </div>
          
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(10,10,10,0.6)',
            lineHeight: 1.6,
            maxWidth: '480px',
          }}>
            Compara una sesión cualquiera con el método. La diferencia está en lo que pasa después de la primera semana.
          </p>
        </div>
        
        {/* Comparative table */}
        <div style={{
          border: '1px solid rgba(10,10,10,0.08)',
          background: '#FFFFFF',
        }}>
          {/* Column headers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr 1.4fr',
            background: '#0A0A0A',
            color: '#FFFFFF',
          }} className="diff-row">
            <div style={{ padding: '1.5rem 2rem', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{
                fontSize: '0.6875rem',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Eje
              </div>
            </div>
            <div style={{ padding: '1.5rem 2rem', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{
                fontSize: '0.6875rem',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}>
                Fisio tradicional
              </div>
              <div style={{
                fontFamily: 'Space Grotesk',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.5)',
              }}>
                Otros
              </div>
            </div>
            <div style={{ padding: '1.5rem 2rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: '#C9A55A',
              }} />
              <div style={{
                fontSize: '0.6875rem',
                color: '#C9A55A',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}>
                El método indestructible
              </div>
              <div style={{
                fontFamily: 'Space Grotesk',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#FFFFFF',
              }}>
                Germán Montenegro
              </div>
            </div>
          </div>
          
          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr 1.4fr',
              borderTop: i === 0 ? 'none' : '1px solid rgba(10,10,10,0.06)',
              transition: 'background 0.3s',
            }} className="diff-row">
              <div style={{
                padding: '1.75rem 2rem',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                background: '#FAFAFA',
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(10,10,10,0.4)',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 600,
                  marginBottom: '0.375rem',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  letterSpacing: '-0.01em',
                }}>
                  {row.axis}
                </div>
              </div>
              <div style={{
                padding: '1.75rem 2rem',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                color: 'rgba(10,10,10,0.45)',
                fontSize: '1rem',
                lineHeight: 1.5,
                textDecoration: 'line-through',
                textDecorationColor: 'rgba(10,10,10,0.2)',
                textDecorationThickness: '1px',
                display: 'flex',
                alignItems: 'center',
              }}>
                {row.tradicional}
              </div>
              <div style={{
                padding: '1.75rem 2rem',
                fontSize: '1rem',
                lineHeight: 1.5,
                color: '#0A0A0A',
                fontWeight: 500,
                background: 'rgba(201,165,90,0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: '#C9A55A',
                  flexShrink: 0,
                }} />
                {row.indestructible}
              </div>
            </div>
          ))}
        </div>
        
        {/* Pull quote */}
        <div style={{
          marginTop: '5rem',
          maxWidth: '900px',
        }}>
          <div style={{
            fontSize: '4rem',
            fontFamily: 'Space Grotesk',
            color: '#C9A55A',
            lineHeight: 0.5,
            marginBottom: '1rem',
          }}>
            "
          </div>
          <p style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
            fontWeight: 400,
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
            color: '#0A0A0A',
            fontFamily: 'Space Grotesk',
            fontStyle: 'italic',
            marginBottom: '1.5rem',
          }}>
            Si nunca te has lesionado entrenando, no entiendes lo que <span style={{ color: '#C9A55A' }}>realmente</span> significa volver.
          </p>
          <div style={{
            fontSize: '0.8125rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(10,10,10,0.5)',
            fontWeight: 600,
          }}>
            — Germán Montenegro
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .diff-header { grid-template-columns: 1fr !important; }
          .diff-row { grid-template-columns: 1fr !important; }
          .diff-row > div { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}

// FISIOTERAPIA - LESIONES (índice editorial)
function FisioLesiones({ onNavigate }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  
  const lesiones = [
    { name: 'Pubalgia', zone: 'Ingle / Pelvis', complexity: 'Alta', recovery: '4–12 sem', page: 'pubalgia', active: true },
    { name: 'Ciática', zone: 'Lumbar / Pierna', complexity: 'Media', recovery: '3–8 sem', page: 'ciatica', active: true },
    { name: 'Tendinitis Rotuliana', zone: 'Rodilla', complexity: 'Media', recovery: '4–10 sem', page: 'tendinitis', active: true },
    { name: 'Hombro Congelado', zone: 'Hombro', complexity: 'Alta', recovery: '8–24 sem', page: 'hombro', active: true },
    { name: 'Contractura Muscular', zone: 'Muscular', complexity: 'Baja', recovery: '1–3 sem', page: null },
    { name: 'Bursitis', zone: 'Articular', complexity: 'Media', recovery: '3–6 sem', page: null },
    { name: 'Condromalacia', zone: 'Rodilla', complexity: 'Media', recovery: '6–12 sem', page: null },
    { name: 'Periostitis Tibial', zone: 'Tibia', complexity: 'Baja', recovery: '2–6 sem', page: null },
    { name: 'Epitrocleítis', zone: 'Codo', complexity: 'Media', recovery: '4–8 sem', page: null },
  ];
  
  const complexityColor = (c) => c === 'Alta' ? '#DC2626' : c === 'Media' ? '#C9A55A' : '#16A34A';
  
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FAFAFA',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
          alignItems: 'flex-end',
        }} className="les-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Catálogo · 09 lesiones
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
            }}>
              Lo que trato.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                Lo que resuelvo.
              </span>
            </h2>
          </div>
          
          <div>
            <p style={{
              fontSize: '1.0625rem',
              color: 'rgba(10,10,10,0.6)',
              lineHeight: 1.6,
              maxWidth: '460px',
              marginBottom: '1.5rem',
            }}>
              Cada lesión tiene su protocolo. Diagnóstico diferencial primero, tratamiento integrado después, vuelta al deporte siempre.
            </p>
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              fontSize: '0.75rem',
              color: 'rgba(10,10,10,0.5)',
              letterSpacing: '0.05em',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16A34A' }} />
                Baja
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C9A55A' }} />
                Media
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#DC2626' }} />
                Alta
              </div>
            </div>
          </div>
        </div>
        
        {/* Editorial index */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(10,10,10,0.08)',
        }}>
          {/* Header row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60px 2fr 1.2fr 1fr 1fr 60px',
            padding: '1rem 2rem',
            borderBottom: '1px solid rgba(10,10,10,0.08)',
            fontSize: '0.6875rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'rgba(10,10,10,0.4)',
            background: '#FAFAFA',
          }} className="les-row-head">
            <div>Nº</div>
            <div>Lesión</div>
            <div>Zona</div>
            <div>Complejidad</div>
            <div>Recuperación</div>
            <div></div>
          </div>
          
          {/* Rows */}
          {lesiones.map((les, i) => {
            const isHovered = hoveredIdx === i;
            const clickable = !!les.page;
            
            return (
              <div
                key={i}
                onClick={() => clickable && onNavigate(les.page)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 2fr 1.2fr 1fr 1fr 60px',
                  padding: '1.75rem 2rem',
                  borderBottom: i < lesiones.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                  cursor: clickable ? 'pointer' : 'default',
                  background: isHovered ? '#0A0A0A' : '#FFFFFF',
                  color: isHovered ? '#FFFFFF' : '#0A0A0A',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  alignItems: 'center',
                }}
                className="les-row"
              >
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                  transition: 'color 0.4s',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                <div>
                  <div style={{
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    fontFamily: 'Space Grotesk',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    marginBottom: clickable ? '0.25rem' : 0,
                  }}>
                    {les.name}
                  </div>
                  {clickable && (
                    <div style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.4)',
                      transition: 'color 0.4s',
                    }}>
                      Ver protocolo →
                    </div>
                  )}
                </div>
                
                <div style={{
                  fontSize: '0.9375rem',
                  color: isHovered ? 'rgba(255,255,255,0.6)' : 'rgba(10,10,10,0.55)',
                  transition: 'color 0.4s',
                }}>
                  {les.zone}
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: complexityColor(les.complexity),
                  }} />
                  <span style={{
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                  }}>
                    {les.complexity}
                  </span>
                </div>
                
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: isHovered ? '#C9A55A' : '#0A0A0A',
                  transition: 'color 0.4s',
                }}>
                  {les.recovery}
                </div>
                
                <div style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Space Grotesk',
                  color: isHovered ? '#C9A55A' : 'rgba(10,10,10,0.2)',
                  transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
                  transition: 'all 0.4s',
                  textAlign: 'right',
                  opacity: clickable ? 1 : 0.3,
                }}>
                  {clickable ? '→' : '·'}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Footer note */}
        <div style={{
          marginTop: '2rem',
          fontSize: '0.875rem',
          color: 'rgba(10,10,10,0.5)',
          maxWidth: '600px',
        }}>
          ¿No ves tu lesión? Significa que aún no escribí su protocolo público — pero la trato igual. Agenda una valoración y la evaluamos.
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .les-header { grid-template-columns: 1fr !important; }
          .les-row-head { display: none !important; }
          .les-row { grid-template-columns: 40px 1fr !important; gap: 1rem; padding: 1.25rem 1.25rem !important; }
          .les-row > div:nth-child(3),
          .les-row > div:nth-child(4),
          .les-row > div:nth-child(5),
          .les-row > div:nth-child(6) { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// FISIOTERAPIA - UBICACIÓN (editorial card)
function FisioUbicacion() {
  const info = [
    {
      label: 'Dirección',
      lines: ['Consultorio dentro de box CrossFit', 'Bogotá, Colombia'],
      meta: 'Acceso directo desde calle',
    },
    {
      label: 'Contacto',
      lines: ['+57 XXX XXX XXXX', 'hola@germanmontenegro.co'],
      meta: 'WhatsApp + correo',
    },
    {
      label: 'Horarios',
      lines: ['Lun—Vie · 7:00 a 19:00', 'Sáb · 8:00 a 14:00'],
      meta: 'Citas de 45–60 min',
    },
    {
      label: 'Logística',
      lines: ['Pago particular', 'Factura para reembolso'],
      meta: 'No EPS · No prepagada',
    },
  ];
  
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{
          marginBottom: '4rem',
          maxWidth: '900px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
            <div style={{
              fontSize: '0.75rem',
              color: '#C9A55A',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}>
              Bogotá · Colombia
            </div>
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            fontFamily: 'Space Grotesk',
            color: '#0A0A0A',
          }}>
            Dónde
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
              me encuentras.
            </span>
          </h2>
        </div>
        
        {/* Map + info layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '0',
          border: '1px solid rgba(10,10,10,0.08)',
          background: '#FFFFFF',
        }} className="ubic-grid">
          {/* Map placeholder — abstract grid */}
          <div style={{
            position: 'relative',
            minHeight: '520px',
            background: '#F5F2EC',
            overflow: 'hidden',
            borderRight: '1px solid rgba(10,10,10,0.08)',
          }} className="ubic-map">
            {/* Grid lines (street feel) */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(10,10,10,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(10,10,10,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(10,10,10,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(10,10,10,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '160px 160px',
            }} />
            
            {/* Diagonal "avenue" */}
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '-10%',
              right: '-10%',
              height: '6px',
              background: 'rgba(201,165,90,0.25)',
              transform: 'rotate(-12deg)',
            }} />
            <div style={{
              position: 'absolute',
              top: '60%',
              left: '-10%',
              right: '-10%',
              height: '4px',
              background: 'rgba(10,10,10,0.08)',
              transform: 'rotate(-6deg)',
            }} />
            
            {/* Pin */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -100%)',
            }}>
              {/* Pulse */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(201,165,90,0.2)',
                transform: 'translate(-50%, -50%)',
                animation: 'mapPulse 2.5s ease-out infinite',
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(201,165,90,0.35)',
                transform: 'translate(-50%, -50%)',
                animation: 'mapPulse 2.5s ease-out 0.5s infinite',
              }} />
              <div style={{
                position: 'relative',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#C9A55A',
                border: '4px solid #0A0A0A',
                boxShadow: '0 8px 24px rgba(10,10,10,0.25)',
              }} />
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '0.75rem',
                background: '#0A0A0A',
                color: '#FFFFFF',
                padding: '0.5rem 1rem',
                fontSize: '0.6875rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                whiteSpace: 'nowrap',
              }}>
                Estás aquí
              </div>
            </div>
            
            {/* Coordinate label */}
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              fontFamily: 'Space Grotesk',
              fontSize: '0.6875rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(10,10,10,0.4)',
              fontWeight: 600,
            }}>
              4.6097° N · 74.0817° W
            </div>
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              right: '1.5rem',
              fontFamily: 'Space Grotesk',
              fontSize: '0.6875rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(10,10,10,0.4)',
              fontWeight: 600,
            }}>
              Bogotá DC
            </div>
          </div>
          
          {/* Info column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            {info.map((item, i) => (
              <div key={i} style={{
                padding: '2rem',
                borderBottom: i < info.length - 1 ? '1px solid rgba(10,10,10,0.06)' : 'none',
                flex: 1,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.875rem',
                }}>
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: 'rgba(10,10,10,0.3)',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#C9A55A',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                  }}>
                    {item.label}
                  </div>
                </div>
                {item.lines.map((line, j) => (
                  <div key={j} style={{
                    fontSize: '1.0625rem',
                    color: '#0A0A0A',
                    fontWeight: j === 0 ? 600 : 400,
                    lineHeight: 1.45,
                    letterSpacing: '-0.01em',
                  }}>
                    {line}
                  </div>
                ))}
                <div style={{
                  marginTop: '0.625rem',
                  fontSize: '0.8125rem',
                  color: 'rgba(10,10,10,0.45)',
                  fontStyle: 'italic',
                }}>
                  {item.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes mapPulse {
          0% { transform: translate(-50%, -50%) scale(0.4); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
        @media (max-width: 900px) {
          .ubic-grid { grid-template-columns: 1fr !important; }
          .ubic-map { min-height: 320px !important; border-right: none !important; border-bottom: 1px solid rgba(10,10,10,0.08); }
        }
      `}</style>
    </section>
  );
}

// FISIOTERAPIA - AGENDAR (proceso de booking)
function FisioAgendar({ onNavigate }) {
  const steps = [
    {
      label: 'Paso 01',
      title: 'Reservas',
      description: 'WhatsApp o formulario. Te contesto en menos de 24h con tres opciones de horario.',
    },
    {
      label: 'Paso 02',
      title: 'Valoración',
      description: 'Primera sesión de 60 minutos. Salgas con diagnóstico claro y plan escrito en mano.',
    },
    {
      label: 'Paso 03',
      title: 'Vuelves',
      description: '6—10 sesiones promedio. Vuelves a entrenar más fuerte que cuando llegaste.',
    },
  ];
  
  const includes = [
    'Evaluación del movimiento',
    'Análisis biomecánico',
    'Tests funcionales específicos',
    'Diagnóstico diferencial',
    'Plan escrito personalizado',
    'Primera intervención si aplica',
  ];
  
  return (
    <section style={{
      padding: '8rem 0',
      background: '#0A0A0A',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated gradient orb */}
      <div style={{
        position: 'absolute',
        width: '900px',
        height: '900px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,165,90,0.18) 0%, transparent 70%)',
        bottom: '-300px',
        right: '-200px',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />
      
      {/* Massive background text */}
      <div style={{
        position: 'absolute',
        left: '-2%',
        bottom: '-2rem',
        fontSize: 'clamp(10rem, 22vw, 22rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.05)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        AGENDA.
      </div>
      
      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '4rem',
          marginBottom: '5rem',
          alignItems: 'flex-end',
        }} className="ag-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Cómo funciona
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.75rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
            }}>
              Tres pasos.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                Cero atajos.
              </span>
            </h2>
          </div>
          
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.6,
            maxWidth: '440px',
          }}>
            La primera sesión es la más importante. Sale con diagnóstico, plan y certeza. Si no es para ti, te lo digo en los primeros diez minutos.
          </p>
        </div>
        
        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
          marginBottom: '6rem',
          border: '1px solid rgba(255,255,255,0.08)',
        }} className="ag-steps">
          {steps.map((step, i) => (
            <div key={i} style={{
              padding: '3rem 2.5rem',
              borderRight: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              position: 'relative',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }} className="ag-step">
              {/* Step indicator */}
              <div>
                <div style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: 'clamp(4rem, 6vw, 6rem)',
                  fontWeight: 700,
                  color: '#C9A55A',
                  lineHeight: 0.85,
                  letterSpacing: '-0.04em',
                  marginBottom: '0.5rem',
                }}>
                  0{i + 1}
                </div>
                <div style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '2rem',
                }}>
                  {step.label}
                </div>
              </div>
              
              <div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  fontFamily: 'Space Grotesk',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}>
                  {step.title}.
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.55,
                  color: 'rgba(255,255,255,0.65)',
                }}>
                  {step.description}
                </p>
              </div>
              
              {/* Connecting arrow */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  right: '-12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '24px',
                  height: '24px',
                  background: '#0A0A0A',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  color: '#C9A55A',
                  zIndex: 2,
                }} className="ag-arrow">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA + Includes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="ag-cta-grid">
          {/* CTA card */}
          <div style={{
            background: 'linear-gradient(135deg, #C9A55A 0%, #B8943F 100%)',
            color: '#0A0A0A',
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Diagonal pattern */}
            <div style={{
              position: 'absolute',
              top: '-20%',
              right: '-20%',
              width: '60%',
              height: '140%',
              background: 'linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.05) 50%)',
              pointerEvents: 'none',
            }} />
            
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '1.5rem',
              position: 'relative',
            }}>
              Primera sesión · Valoración
            </div>
            
            <div style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              position: 'relative',
            }}>
              Reservas hoy.
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>
                Vuelves esta semana.
              </span>
            </div>
            
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.55,
              opacity: 0.85,
              marginBottom: '2.5rem',
              maxWidth: '420px',
              position: 'relative',
            }}>
              60 minutos · Diagnóstico completo + plan personalizado + primera intervención.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              position: 'relative',
            }}>
              <button
                style={{
                  background: '#0A0A0A',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '1.25rem 2rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontFamily: 'Space Grotesk',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(10,10,10,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Agendar valoración
                <span style={{ fontSize: '1rem' }}>→</span>
              </button>
              
              <button
                style={{
                  background: 'transparent',
                  color: '#0A0A0A',
                  border: '1px solid rgba(10,10,10,0.4)',
                  padding: '1.25rem 2rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontFamily: 'Space Grotesk',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0A0A0A';
                  e.currentTarget.style.background = '#0A0A0A';
                  e.currentTarget.style.color = '#C9A55A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(10,10,10,0.4)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
              >
                WhatsApp
              </button>
            </div>
          </div>
          
          {/* Includes list */}
          <div>
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#C9A55A',
              marginBottom: '2rem',
            }}>
              Qué incluye la primera sesión
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              {includes.map((item, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr auto',
                  gap: '1rem',
                  alignItems: 'center',
                  padding: '1.125rem 0',
                  borderBottom: i < includes.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.3)',
                  }}>
                    0{i + 1}
                  </div>
                  <div style={{
                    fontSize: '1.0625rem',
                    color: 'rgba(255,255,255,0.9)',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                  }}>
                    {item}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#C9A55A',
                  }}>
                    ✓
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.03)',
              borderLeft: '2px solid #C9A55A',
              fontSize: '0.9375rem',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.7)',
            }}>
              <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>Sin compromiso.</strong> Si en los primeros diez minutos veo que no soy la persona indicada para tu caso, te lo digo y te derivo. No es venta — es proceso.
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .ag-header { grid-template-columns: 1fr !important; }
          .ag-steps { grid-template-columns: 1fr !important; }
          .ag-step { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); min-height: auto !important; }
          .ag-arrow { display: none !important; }
          .ag-cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// FISIOTERAPIA - FAQ (editorial dos columnas con categorías)
function FisioFAQ({ openFaq, setOpenFaq }) {
  const [activeCategory, setActiveCategory] = useState('Todo');
  
  const faqs = [
    {
      category: 'Logística',
      q: '¿Cuánto cuesta una valoración?',
      a: 'La valoración inicial tiene un costo de $XXX.XXX COP. Incluye evaluación completa del movimiento, análisis biomecánico, diagnóstico preciso y plan de tratamiento personalizado. Duración: 60 minutos.',
    },
    {
      category: 'Proceso',
      q: '¿Cuántas sesiones se necesitan en promedio?',
      a: 'Promedio: 6—10 sesiones distribuidas en 8—12 semanas. Depende de la severidad de la lesión y adherencia al plan de fortalecimiento. El objetivo es que no me necesites más.',
    },
    {
      category: 'Logística',
      q: '¿Atiendes a domicilio?',
      a: 'No. El consultorio cuenta con el equipamiento necesario (camilla, herramientas de terapia manual, equipos de fortalecimiento) que no es posible trasladar. La atención es únicamente en consultorio.',
    },
    {
      category: 'Logística',
      q: '¿Trabajas con EPS o medicina prepagada?',
      a: 'No trabajo directamente con EPS ni medicina prepagada. El pago es particular. Puedo emitir factura para que tramites reembolso con tu aseguradora si tu plan lo permite.',
    },
    {
      category: 'Proceso',
      q: '¿Qué llevar a la primera consulta?',
      a: 'Si tienes: resonancias, radiografías, ecografías o informes médicos previos. Ropa cómoda que permita evaluar el movimiento (short o leggins + camiseta). Historia clínica si estás tomando medicamentos.',
    },
    {
      category: 'Proceso',
      q: '¿Cuánto dura una sesión?',
      a: 'Primera sesión (valoración): 60 minutos. Sesiones de seguimiento: 45 minutos. Esto permite tiempo suficiente para tratamiento manual + ejercicios supervisados + ajustes al plan.',
    },
    {
      category: 'Pacientes',
      q: '¿Atiendes deportistas no profesionales?',
      a: 'Sí. El 90% de mis pacientes son atletas recreacionales: CrossFitters de box local, corredores de fin de semana, practicantes de BJJ, bailarinas. No necesitas ser profesional, solo entrenar en serio.',
    },
    {
      category: 'Método',
      q: '¿Cómo se diferencia tu enfoque de un fisio tradicional?',
      a: 'Tres diferencias clave: (1) Soy atleta, conozco tus gestos deportivos desde adentro. (2) Proceso de 4 fases, no sesiones sueltas. (3) El objetivo es que vuelvas a entrenar, no solo que el dolor desaparezca.',
    },
  ];
  
  const categories = ['Todo', ...Array.from(new Set(faqs.map(f => f.category)))];
  const filteredFaqs = activeCategory === 'Todo' ? faqs : faqs.filter(f => f.category === activeCategory);
  
  return (
    <section style={{
      padding: '8rem 0',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(10,10,10,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background number */}
      <div style={{
        position: 'absolute',
        right: '-3%',
        top: '-2rem',
        fontSize: 'clamp(10rem, 22vw, 22rem)',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        color: 'rgba(201,165,90,0.04)',
        lineHeight: 0.85,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        FAQ.
      </div>
      
      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
          alignItems: 'flex-end',
        }} className="faq-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
              <div style={{
                fontSize: '0.75rem',
                color: '#C9A55A',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Preguntas frecuentes
              </div>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Space Grotesk',
              color: '#0A0A0A',
            }}>
              Lo que
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A55A' }}>
                me preguntan.
              </span>
            </h2>
          </div>
          
          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(10,10,10,0.6)',
            lineHeight: 1.6,
            maxWidth: '440px',
          }}>
            Si no encuentras tu pregunta acá, escríbeme directo por WhatsApp. Contesto yo, no un asistente.
          </p>
        </div>
        
        {/* Layout: sidebar + accordion */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '4rem',
          alignItems: 'flex-start',
        }} className="faq-layout">
          {/* Category sidebar */}
          <div style={{
            position: 'sticky',
            top: '8rem',
          }} className="faq-sidebar">
            <div style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(10,10,10,0.4)',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(10,10,10,0.08)',
            }}>
              Categorías · {filteredFaqs.length}
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              {categories.map((cat, i) => {
                const count = cat === 'Todo' ? faqs.length : faqs.filter(f => f.category === cat).length;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setOpenFaq(0); }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      alignItems: 'center',
                      padding: '0.875rem 0',
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid rgba(10,10,10,0.06)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      position: 'relative',
                      paddingLeft: isActive ? '1rem' : '0',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.paddingLeft = '0.5rem';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {isActive && (
                      <div style={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '3px',
                        height: '20px',
                        background: '#C9A55A',
                      }} />
                    )}
                    <span style={{
                      fontSize: isActive ? '1.125rem' : '1rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#0A0A0A' : 'rgba(10,10,10,0.55)',
                      fontFamily: isActive ? 'Space Grotesk' : 'inherit',
                      letterSpacing: isActive ? '-0.01em' : 0,
                      transition: 'all 0.3s',
                    }}>
                      {cat}
                    </span>
                    <span style={{
                      fontFamily: 'Space Grotesk',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: isActive ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                      transition: 'color 0.3s',
                    }}>
                      {String(count).padStart(2, '0')}
                    </span>
                  </button>
                );
              })}
            </div>
            
            {/* Sidebar footer */}
            <div style={{
              marginTop: '2.5rem',
              padding: '1.5rem',
              background: '#0A0A0A',
              color: '#FFFFFF',
            }}>
              <div style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#C9A55A',
                marginBottom: '0.5rem',
              }}>
                ¿No la ves?
              </div>
              <div style={{
                fontSize: '0.9375rem',
                lineHeight: 1.5,
                marginBottom: '1rem',
                color: 'rgba(255,255,255,0.85)',
              }}>
                Pregúntame directo. Respondo en menos de 24h.
              </div>
              <button
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: '#C9A55A',
                  color: '#0A0A0A',
                  border: 'none',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#C9A55A'}
              >
                WhatsApp →
              </button>
            </div>
          </div>
          
          {/* FAQ list */}
          <div style={{
            borderTop: '1px solid rgba(10,10,10,0.08)',
          }}>
            {filteredFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={`${activeCategory}-${i}`} style={{
                  borderBottom: '1px solid rgba(10,10,10,0.08)',
                }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    style={{
                      width: '100%',
                      padding: '2rem 0',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr 40px',
                      alignItems: 'center',
                      gap: '1.5rem',
                      transition: 'all 0.3s',
                    }}
                  >
                    <div style={{
                      fontFamily: 'Space Grotesk',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: isOpen ? '#C9A55A' : 'rgba(10,10,10,0.3)',
                      transition: 'color 0.3s',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    
                    <div>
                      <div style={{
                        fontSize: '0.625rem',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        color: '#C9A55A',
                        marginBottom: '0.5rem',
                      }}>
                        {faq.category}
                      </div>
                      <div style={{
                        fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)',
                        fontWeight: 600,
                        color: '#0A0A0A',
                        fontFamily: 'Space Grotesk',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.3,
                      }}>
                        {faq.q}
                      </div>
                    </div>
                    
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: `1px solid ${isOpen ? '#C9A55A' : 'rgba(10,10,10,0.15)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: isOpen ? '#C9A55A' : 'transparent',
                      color: isOpen ? '#0A0A0A' : 'rgba(10,10,10,0.5)',
                      fontSize: '1.25rem',
                      fontWeight: 300,
                      transition: 'all 0.4s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      justifySelf: 'end',
                    }}>
                      +
                    </div>
                  </button>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}>
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '60px 1fr 40px',
                        gap: '1.5rem',
                        paddingBottom: '2rem',
                      }}>
                        <div></div>
                        <p style={{
                          fontSize: '1.0625rem',
                          lineHeight: 1.7,
                          color: 'rgba(10,10,10,0.7)',
                          maxWidth: '720px',
                        }}>
                          {faq.a}
                        </p>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .faq-header { grid-template-columns: 1fr !important; }
          .faq-layout { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .faq-sidebar { position: static !important; }
        }
      `}</style>
    </section>
  );
}



export { App };
