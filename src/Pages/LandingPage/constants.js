import shape from '../../assets/img/nave.png';
import beck from '../../assets/img/pic.png';

export const particlesParams = {
  particles: {
    number: {
      value: 5,
      density: {
        enable: true,
        value_area: 100
      }
    },
    color: {
      value: "#070707"
    },
    shape: {
      type: "images",
      stroke: {
        width: 20,
        color: "#000000"
      },
      polygon: {
        nb_sides: 40
      },
      images:[ 
        {
          src: shape,
          width: 5,
          height: 5
        },
        {
          src: beck,
          width: 5,
          height: 5
        },
      ]
    },
    opacity: {
      value: 1,
      anim: {
      enable: true,
      speed: 4,
      opacity_min: 0.4,
      sync: false
      }
    },
    size: {
      value: 20,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 5,
        sync: false
      }
    },
    line_linked: {
      color: "transparent",
      distance: 200,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "right",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
    },
    interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
        },
      onclick: {
        enable: false,
        mode: "bubble"
      },
      resize: false
    },
    modes: {
      grab: {
        distance: 50,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 100,
        size: 50,
        duration: 10,
        opacity: 10,
        speed: 700
      },
      repulse: {
        distance: 100
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
    },
    retina_detect: false,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "#b61924",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover"
    }
}
