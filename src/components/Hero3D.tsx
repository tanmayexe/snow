import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Monitor, Download, Github } from 'lucide-react';

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 10;
      
      // ServiceNow green colors
      colorsArray[i] = 0;
      colorsArray[i + 1] = Math.random() * 0.5 + 0.3;
      colorsArray[i + 2] = Math.random() * 0.3 + 0.2;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Geometric shapes
    const shapes: THREE.Mesh[] = [];
    const geometries = [
      new THREE.IcosahedronGeometry(0.5, 0),
      new THREE.OctahedronGeometry(0.4, 0),
      new THREE.TetrahedronGeometry(0.5, 0),
      new THREE.TorusGeometry(0.3, 0.1, 16, 32),
    ];

    const material = new THREE.MeshPhongMaterial({
      color: 0x007b58,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    });

    for (let i = 0; i < 8; i++) {
      const geometry = geometries[i % geometries.length];
      const mesh = new THREE.Mesh(geometry, material.clone());
      mesh.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4 - 2
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shapes.push(mesh);
      scene.add(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x007b58, 2, 10);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x005689, 1.5, 10);
    pointLight2.position.set(-2, -2, 2);
    scene.add(pointLight2);

    camera.position.z = 5;

    // Mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.03;

      // Mouse parallax
      particlesMesh.position.x = mouseRef.current.x * 0.5;
      particlesMesh.position.y = mouseRef.current.y * 0.5;

      // Animate shapes
      shapes.forEach((shape, i) => {
        shape.rotation.x += 0.005 + i * 0.001;
        shape.rotation.y += 0.005 + i * 0.001;
        
        // Floating motion
        shape.position.y += Math.sin(elapsedTime + i) * 0.002;
        
        // Mouse interaction
        shape.position.x += (mouseRef.current.x - shape.position.x) * 0.01;
        shape.position.y += (mouseRef.current.y - shape.position.y) * 0.01;
      });

      // Camera subtle movement
      camera.position.x += (mouseRef.current.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const badges = [
    'ServiceNow Fundamentals',
    'Vyntra Pro Innovations Intern',
    'PDI Builder',
  ];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* WebGL Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-[680px]"
          >
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#007b58]/10 backdrop-blur-sm border border-[#007b58]/20 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#007b58] animate-pulse" />
              <span className="text-xs font-medium text-[#007b58]">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2937] leading-tight tracking-tight mb-4"
            >
              Tanmay Kumar Das
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl font-semibold text-[#007b58] mb-4"
            >
              ServiceNow Developer & Platform Engineer
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-base md:text-lg text-[#4b5563] leading-relaxed mb-8 max-w-[560px]"
            >
              Building scalable scoped applications, automating ITSM workflows, and enforcing enterprise security on the ServiceNow platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <motion.a
                href="#pdi"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#007b58] text-white text-sm font-medium hover:bg-[#006649] shadow-[0_4px_12px_rgba(0,123,88,0.3)] transition-all duration-300"
              >
                <Monitor size={16} />
                View PDI Portfolio
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-[#d1d5db] text-[#1f2937] text-sm font-medium hover:bg-[#f4f5f7] hover:border-[#9ca3af] transition-all duration-300"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[#4b5563] text-sm font-medium hover:text-[#1f2937] hover:bg-[#f4f5f7] transition-all duration-300"
              >
                <Github size={16} />
                GitHub
              </motion.a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap gap-2"
            >
              {badges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/80 backdrop-blur-sm border border-[#e5e7eb] text-xs font-medium text-[#4b5563] shadow-sm"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="bg-white/90 backdrop-blur-md rounded-lg border border-[#e5e7eb] shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-5 w-[280px]"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#e5e7eb]">
                <div className="w-2 h-2 rounded-full bg-[#007b58] animate-pulse" />
                <span className="text-xs font-semibold text-[#1f2937] uppercase tracking-wide">Platform Stats</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Scoped Apps Built', value: '3' },
                  { label: 'ACLs Engineered', value: '25+' },
                  { label: 'Custom Tables', value: '12+' },
                  { label: 'Business Rules', value: '40+' },
                  { label: 'REST Integrations', value: '4' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-[13px] text-[#6b7280]">{stat.label}</span>
                    <span className="text-sm font-bold text-[#007b58]">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#6b7280]">Scroll to explore</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
