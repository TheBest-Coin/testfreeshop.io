particlesJS("particles-js", {
    particles: {
      number: {
        value: 19,
        density: { enable: true, value_area: 561.194221302933 }
      },
      color: { value: "#ff00d1" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff00b4" },
        polygon: { nb_sides: 3 },
        image: { src: "", width: 0, height: 0 }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 0.5684540486109415,
          opacity_min: 0.04060386061506725,
          sync: false
        }
      },
      size: {
        value: 36.076771369474265,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 0,
        color: "#eeffee",
        opacity: 0,
        width: 0
      },
      move: {
        enable: true,
        speed: 3.206824121731046,
        direction: "bottom-left",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 801.7060304327614,
          rotateY: 3447.335930860874
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: false, mode: "grab" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 219.26084732136317, line_linked: { opacity: 1 } },
        bubble: {
          distance: 158.35505639876231,
          size: 40.603860615067255,
          duration: 2.9234779642848423,
          opacity: 1,
          speed: 3
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  